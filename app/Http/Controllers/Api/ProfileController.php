<?php

namespace App\Http\Controllers\Api;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\UnauthorizedException;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(User $user, Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        Log::debug($request);
//        try {
            if (!Auth::check() || Auth::user()->id != $user->id)
                throw new UnauthorizedException("You are not allowed to update another user profile");
            $volunteer = $user->volunteer;
            $data = [];
            if($request->has("first_name"))
                $data['first_name'] = $request->get("first_name");
            if($request->has("last_name"))
                $data['last_name'] = $request->get("last_name");
            if($request->has("birthday"))
                $data['birthday'] = strtotime($request->get("birthday"));
            if($request->has("country"))
                $data['country'] = $request->get("country");
            if($request->has("city"))
                $data['city'] = $request->get("city");
            if($request->has("phone"))
                $data['phone'] = $request->get("phone");
            if($request->has("bio"))
                $data['bio'] = $request->get("bio");
            $result = $volunteer->update($data);

            return response()->json(['updated' => $result]);

//        } catch (\Exception $ex) {
//            return $this->jsonException($ex);
//        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
