// problem : kita diharuskan membuat program yang dimana program tersebut harus mengecek apakah array names berisikan karakter dari parameter dan output harus sesuai limit yang ada
const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 
                'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 
                'Ella', 'Faith', 'Olivia', 'Penelope'];

function toLowerCase(params) {
    //buat variabel objek yg berisikan huruf abjad, key bernilai abjad dengan huruf kapital dan value bernilai abjad dengan huruf kecil
    const alphabet = {
        'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g',
        'H': 'h', 'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n',
        'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u',
        'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z'
    };
    //deklarasikan array penampung
    let result = [];
    //loop satu persatu parameter yang telah diinputkan
    for (let i = 0; i < params.length; i++) {
      //deklarsikan string penampung 
      let container = '';
      //parameter yang telah dilooping diatas, looping kembali agar mendapatkan satu persatu 
      for (let j = 0; j < params[i].length; j++) {
        //masukan hasil looping kedua tadi ke dalam variabel 
        let character = params[i][j];
        //cek apakah nilai dalam variabel adalah huruf kapital
        if (alphabet[character]) {
            //masukan nilai yang telah dijadikan huruf kecil tadi ke string kosong (cari key dalam alphabet dan masukan value dari alphabet tersebut) 
            container += alphabet[character];
        } else {
            //selain huruf kapital, masukan nilai tersebut ke dalam string kosong
            container += character;
        }
    }
    //masukan nilai yg ada di variabel penampung string ke dalam variabel penampung array
    result = [...result, container]
    }
    return result
}

function filterName(name, params) {
    let checkName = '';
    
    // Mengonversi nama dan parameter menjadi huruf kecil
    for (let i = 0; i < name.length; i++) {
        checkName += toLowerCase(name[i]);
    }
    //loop pertama untuk mengecek variabel checkName satu persatu
    for (let i = 0; i <= checkName.length; i++) {
        //inisialisasi variabel isValid dengan nilai true
        let isValid = true;
        //loop kedua untuk mengecek params dan membandingkan checkName dan params
        for (let j = 0;  j < params.length; j++) {
            //jika tidak ada kecocokan, maka isValid menjadi false dan loop kedua dihentikan
            if (checkName[i + j] !== params[j]) {
                isValid = false;
                break;
            }
        }
        //jika isValid tetap bernilai true, berarti params ditemukan di checkName
        if (isValid) {
            return true;
        }
    }
    //jika tidak ada kesamaan, maka fungsi akan mengembalikan nilai false
    return false;
}
                
function searchName(params, limit, callback) {
    //buat sebuah penampung
    let results = [];
    //lakukan looping dari array names untuk mengetahui isi dari array names itu sendiri
    for (let i = 0; i < names.length; i++) {
        //cek apakah disetiap nama yang ada didalam array names berisikan parameters yang telah kira inputkan (array names dan parameter harus dibuatkan menjadi huruf kecil terlebih dahulu agar memudahkan dalam mencari kesamaan)
        if (filterName(names[i], params)) {
            const containerNames = names[i]
            //jika ada, maka masukan nama tadi ke dalam penampung result
            results = [...results, containerNames]
            // console.log(results)
            //jika panjang isi didalam penampung sudah sama dengan limit yang kita input, maka stop program tersebut
        }
    }
    //lakukan callback untuk variabel result
    callback(results, limit);
}

function printResults(results, limit) {
    // tampilkan result kedalam console
    let result =[]
    for (let i = 0; i < limit; i++) {
        if (results[i] !== undefined) {
            result = [...result, results[i]]
        }
    }
    console.log(result)
}

searchName("an", 3, printResults);
