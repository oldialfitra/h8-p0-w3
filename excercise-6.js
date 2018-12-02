function angkaPalindrome(num) {
    var check = false
    while (check === false) {
        num += 1
        var stringNum = String(num)
        var simpan = ''
        for (let i = stringNum.length - 1; i >= 0; i--) {
            simpan = simpan + stringNum[i]
        }
        var numberNum = Number(simpan)
        if (numberNum === num) {
            check = true
            return numberNum
        } else {
            check = false
        }
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001