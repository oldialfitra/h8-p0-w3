function targetTerdekat(arr) {
    var result = 0
    var simpanX = []
    var simpanO = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            simpanO.push(i)
        } else if (arr[i] === 'x') {
            simpanX.push(i)
        }
    }
    if (simpanX.length === 0) {
        result = 0
        return result
    } else if (simpanO[0] > simpanX[0]) {
        result = arr.length - (simpanO[0] + 1)
        return result
    } else {
        result = simpanX[0] - simpanO[0]
        return result
    }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2