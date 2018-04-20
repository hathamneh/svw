<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use App\MyModel as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Pluralizer;

class Capability extends Model
{
    use SoftDeletes;
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    protected $fillable = ['type', 'value'];

    public function volunteer()
    {
        return $this->belongsTo(Volunteer::class);
    }

    public static function all($columns = ['*'])
    {
        return self::groupify(parent::all($columns));

    }

    public static function groupify(Collection $old)
    {
        $modified = [
            'skills'       => [],
            'certificates' => [],
            'courses'      => [],
            'projects'     => [],
            'languages'    => [],
        ];

        foreach ($old as $item) {
            $key = Pluralizer::plural($item->type);
            $modified[$key][] = ['id' => $item->id] + (array)json_decode($item->value);
        }
        return new Collection($modified);
    }

}
