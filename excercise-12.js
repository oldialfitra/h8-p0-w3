function tentukanDeretGeometri(arr) {
    var result = 0
    var simpan = []
    var hasil = false
    for (var i = 0; i < arr.length - 1; i++) {
        result = arr[i + 1] % arr[i]
        simpan.push(result)
        for (let j = 0; j < 1; j++) {
            if (simpan[j] === result) {
                hasil = true
            } else {
                hasil = false
            }
        }
    }
    return hasil
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false