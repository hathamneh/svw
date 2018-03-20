<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property mixed volunteer_id
 */
class Experience extends Model
{
    use SoftDeletes;
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    protected $fillable = ['position', 'organization_name', 'period', 'description', 'attachment'];

    public function volunteer()
    {
        return $this->belongsTo(Volunteer::class);
    }
}
