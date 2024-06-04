// problem : kita diharuskan membuat program yang dimana program tersebut harus mengecek apakah array names berisikan karakter dari parameter dan output harus sesuai limit yang ada
const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 
                'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 
                'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(params, limit, callback) {
    //buat sebuah penampung
    let results = [];
    //lakukan looping dari array names untuk mengetahui isi dari array names itu sendiri
    for (let i = 0; i < names.length; i++) {
        //cek apakah disetiap nama yang ada didalam array names berisikan parameters yang telah kira inputkan (array names dan parameter harus dibuatkan menjadi huruf kecil terlebih dahulu agar memudahkan dalam mencari kesamaan)
        if (names[i].toLowerCase().indexOf(params.toLowerCase()) > -1) {
            //jika ada, maka masukan nama tadi ke dalam penampung result
            results.push(names[i]);
            //jika panjang isi didalam penampung sudah sama dengan limit yang kita input, maka stop program tersebut
            if (results.length == limit) {
                break;
            }
        }
    }
    //lakukan callback untuk variabel result
    callback(results);
}

function printResults(results) {
    //tampilkan result kedalam console
    console.log(results);
}

searchName("an", 3, printResults);
