<?php

if (!function_exists('daysInterval')) {
    function daysInterval($days)
    {
        if ($days >= 365) {
            $years = $days / 356;
            return $years . " " . str_plural("year", $years);
        } elseif($days >= 30) {
            $months = $days / 30;
            return $months . " " . str_plural("month", $months);
        } else
            return $days . " " . str_plural("day", $days);
    }
}