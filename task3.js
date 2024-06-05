//problem : tugas kita membuat fungsi yang mana mengecek apakah nilai awal harus lebih kecil dari nilai akhir dan data array harus diantara nilai awal dan nilai akhir
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  // cek apakah nilai awal lebih kecil dari nilai akhir
  if (nilaiAwal < nilaiAkhir) {
    // cek apakah data array lebih sama dengan lima
    if (dataArray.length <= 5) {
      return "jumlah angka dalam data array harus lebih dari 5";
    }
    let array = [];
    //cek data array yang telah diinput
    for (let i = 0; i < dataArray.length; i++) {
      //cek apakah ada data array yang ada diantara nilai awal dan nilai akhir
      if (nilaiAwal <= dataArray[i] && nilaiAkhir >= dataArray[i]) {
        //masukan data yang sudah dicek tadi ke dalam variabel array
        array = [...array, dataArray[i]];
        //loop pertama untuk mengecek satu persatu nilai dalam array dan akan dimulai dari nilai pertama
        for (let i = 0; i < array.length; i++) {
          //loop kedua untuk mengecek nilai dalam array dan dimulai dari loop yang kedua
          for (let j = i + 1; j < array.length; j++) {
            //cek apakah array index i lebih besar dari array index j
            if (array[i] > array[j]) {
              //balik nilai i dan j jika kondisi diatas bernilai true
              [array[i], array[j]] = [array[j], array[i]];
            }
          }
        }
      }
    }
    // cek apakah ada data array
    if (array.length == 0) {
      return "nilai tidak ditemukan";
    }
    // tampilkan data array yang telah dicari
    return array;
  } else {
    return "nilai akhir harus lebih besar dari nilai awal";
  }
}
const hasil = seleksiNilai(1, 7, [6, 2, 5, 8, 10, 4]);
console.log(hasil);
