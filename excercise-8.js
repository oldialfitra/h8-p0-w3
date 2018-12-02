function pasanganTerbesar(num) {
    var angkaTerbesar = 0
    var angkaPenampung = 0
    var numString = String(num)
    var simpan = ''
    for (var i = 0; i < numString.length - 1; i++) {
        simpan = numString[i] + numString[i + 1]
        var hasil = Number(simpan)
        if (hasil > angkaTerbesar) {
            angkaTerbesar = hasil
        } else {
            hasil = angkaPenampung
        }
    }
    return angkaTerbesar
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99