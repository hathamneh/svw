<?php
/**
 * Created by PhpStorm.
 * User: haitham
 * Date: 4/20/18
 * Time: 7:09 PM
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class MyModel extends Model
{

    public static function boot()
    {
        parent::boot();

        static::saving(function($model)
        {
            if (count($model->forcedNullFields) > 0) {
                foreach ($model->toArray() as $fieldName => $fieldValue) {
                    if ( empty($fieldValue) && in_array($fieldName,$model->forcedNullFields)) {
                        $model->attributes[$fieldName] = null;
                    }
                }
            }

            return true;
        });

    }

}