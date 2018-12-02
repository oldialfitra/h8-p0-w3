function dataHandling2(input) {
    input.splice(1, 2, 'Roman Alamsyah Elsharaway', 'Provinsi Bandar Lampung')
    console.log(input)
    var date = input[3][3] + input[3][4]
    console.log(date)
    var mm = date
    switch (mm) {
        case '01':
            hasilBulan = 'Januari'
            break;
        case '02':
            hasilBulan = 'Februari'
            break;
        case '03':
            hasilBulan = 'Maret'
            break;
        case '04':
            hasilBulan = 'April'
            break;
        case '05':
            hasilBulan = 'Mei'
            break;
        case '06':
            hasilBulan = 'Juni'
            break;
        case '07':
            hasilBulan = 'Juli'
            break;
        case '08':
            hasilBulan = 'Agustus'
            break;
        case '09':
            hasilBulan = 'September'
            break;
        case '10':
            hasilBulan = 'Oktober'
            break;
        case '11':
            hasilBulan = 'November'
            break;
        case '12':
            hasilBulan = 'Desember'
            break;
        default:
            hasilBulan = 'Bukan bulan'
            break;
    }
    console.log(hasilBulan)
    var temp1 = input[3].split('/')
    var temp2 = input[3].split('/')
    temp1.sort(function(a, b) { return b - a })
    console.log(temp1)
    var hasil = temp2.join('-')
    console.log(hasil)
    var penampung = input[1].slice(0, 15)
    console.log(penampung)


}

input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']

console.log(dataHandling2(input))