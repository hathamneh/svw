<?php

namespace App\Library;

use Laravel\Socialite\Two\GoogleProvider;

class ExtendedGoogleProvider extends GoogleProvider
{

    public function getUserByToken($token)
    {
        $response = $this->getHttpClient()->get('https://www.googleapis.com/oauth2/v3/tokeninfo?', [
            'query' => [
                'id_token' => $token,
            ],
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer '.$token,
            ],
        ]);

        return json_decode($response->getBody(), true);
    }

    protected function mapUserToObject(array $user)
    {

        return (new User)->setRaw($user)->map([
            'id' => $user['kid'], 'nickname' => Arr::get($user, 'given_name'), 'name' => $user['name'],
            'email' => $user['email'], 'avatar' => Arr::get($user, 'picture'),
            'avatar_original' => preg_replace('/\?sz=([0-9]+)/', '', Arr::get($user, 'picture')),
        ]);
    }
}