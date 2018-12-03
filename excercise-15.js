function groupAnimals(arr) {
    var result = []
    arr.sort()
    for (var i = 0; i < arr.length; i++) {
        if (result.length === 0) {
            result.push([arr[0]])
        } else {
            for (var j = result.length - 1; j >= 0; j--) {
                if (result[j][0][0] === arr[i][0]) {
                    result[j].push(arr[i])
                    break
                } else {
                    result.push([arr[i]])
                    break
                }

            }
        }
    }
    return result
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]