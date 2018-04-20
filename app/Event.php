<?php

namespace App;

use App\MyModel as Model;
use Illuminate\Support\Facades\Storage;

class Event extends Model
{

    protected $fillable = ['name', 'description', 'picture', "date_from", "date_to", "address", "city", "country"];

    protected $dates = ['date_from', 'date_to'];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function subscribers()
    {
        return $this->belongsToMany(User::class);
    }

    public function getUrlAttribute()
    {
        return route('event.show', $this->id);
    }

    public function getPictureAttribute($val)
    {
        return url($val);
    }

    /**
     * @param $target
     * @param $image_data
     * @param $extension
     */
    public function uploadImageEncoded($image_data, $extension)
    {

        $file_name = md5($this->username . time()) . "." . $extension;
        Storage::disk('events')->put($file_name, base64_decode($image_data));
        $uploaded_url = Storage::disk('events')->url($file_name);
        $this->update(['picture' => $uploaded_url]);
    }
}
