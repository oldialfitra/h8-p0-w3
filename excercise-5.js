function palindrome(kata) {
    var simpan = ''
    for (var i = kata.length - 1; i >= 0; i--) {
        simpan = simpan + kata[i]
    }
    if (simpan === kata) {
        return true
    } else {
        return false
    }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false