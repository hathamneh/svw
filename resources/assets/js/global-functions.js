_.remove = remove;

function remove(array, predicate) {
    var result = [];
    if (!(array && array.length)) {
        return result;
    }
    var index = -1,
        indexes = [],
        length = array.length;

    predicate = getIteratee(predicate, 3);
    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            result.push(value);
            indexes.push(index);
        }
    }
    basePullAt(array, indexes);
    return result;
}
function basePullAt(array, indexes) {
    var length = array ? indexes.length : 0,
        lastIndex = length - 1;

    while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex(index)) {
                splice.call(array, index, 1);
            } else {
                baseUnset(array, index);
            }
        }
    }
    return array;
}