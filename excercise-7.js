function hitungJumlahKata(kalimat) {
    var result = 1
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            result += 1
        } else {
            result = result + 0
        }

    }
    return result
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5