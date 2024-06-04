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
          array.push(dataArray[i]);
          array.sort();
        }
      }
      // cek apakah ada data array
      if (array.length == 0) {
        return('nilai tidak ditemukan')
      }
    // tampilkan data array yang telah dicari
    return array;
  } else {
    return "nilai akhir harus lebih besar dari nilai awal";
  }
}
const hasil = seleksiNilai(1, 7, [6, 2, 5, 8, 10, 4]);
console.log(hasil);