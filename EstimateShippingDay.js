/*
    Beberapa hari lalu saya mendapat sebuah blocker, ataupun calon bugs 
    terkait dari sebuah proyek yang saya kerjakan, yaitu estimasi hari pengiriman.

    Dari data yang saya dapat hanya berupa angka minimal_day dan maximal_day, 
    akan tetapi hasil yang dibutuhkan adalah tanggal next day.
 */

let inputDay = 20 //Contoh max day yang didapat dari API
let nextDay = new Date(new Date().getTime()+(inputDay*24*60*60*1000)); //Kalkulasi hari ini ditambah inputan day
const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Tambahan opsi untuk tampilan tanggal kustom

let estimateDay = nextDay.toLocaleDateString('id', options);

console.log(estimateDay)