console.log('Hello World!');
// JavaScript
function toggleMenu() {
  var sidenav = document.getElementById("sidenav");
  sidenav.classList.toggle("active");
}
function openWhatsapp() {
  // Menggunakan sweetalert untuk mendapatkan nomor telepon yang ingin dihubungi
  swal({
      title: "Isi Pesan Kamu Di Sini😄", 
      text: "Contoh: Halo kak saya dari web cynix...",
      content: "input",
      button: "Kirim"
    })
    .then((phone) => {
      // Jika nomor telepon valid, buka whatsapp web
      if (phone) {
        window.open("https://wa.me/6289507156271?text=" + phone, "_blank");
      }
    });
}

var audio = document.getElementById("music-audio");

// Mendapatkan elemen icon
var playIcon = document.getElementById("play-icon");
var pauseIcon = document.getElementById("pause-icon");

// Membuat array untuk menyimpan file audio
var songs = ["Cardigan.mp3", "DJ.mp3", "Illenium.mp3"];

// Membuat variabel untuk menyimpan indeks lagu yang sedang diputar
var songIndex = 0;

// Fungsi untuk memutar atau menjeda lagu
function toggleSong() {
  // Jika audio sedang diputar, maka menjeda audio
  if (audio.paused) {
    audio.play();
    // Menampilkan icon pause dan menyembunyikan icon play
    pauseIcon.style.display = "inline";
    playIcon.style.display = "none";
  }
  // Jika audio sedang dijeda, maka memutar audio
  else {
    audio.pause();
    // Menampilkan icon play dan menyembunyikan icon pause
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
  }
}

// Fungsi untuk memutar lagu sebelumnya
function prevSong() {
  // Mengurangi indeks lagu
  songIndex--;

  // Jika indeks lagu kurang dari 0, maka kembali ke lagu terakhir
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  // Mengganti sumber audio dengan lagu yang baru
  audio.src = songs[songIndex];

  // Memutar audio
  audio.play();

  // Menampilkan icon pause dan menyembunyikan icon play
  pauseIcon.style.display = "inline";
  playIcon.style.display = "none";
}

// Fungsi untuk memutar lagu selanjutnya
function nextSong() {
  // Menambahkan indeks lagu
  songIndex++;

  // Jika indeks lagu melebihi jumlah lagu, maka kembali ke lagu pertama
  if (songIndex >= songs.length) {
    songIndex = 0;
  }

  // Mengganti sumber audio dengan lagu yang baru
  audio.src = songs[songIndex];

  // Memutar audio
  audio.play();

  // Menampilkan icon pause dan menyembunyikan icon play
  pauseIcon.style.display = "inline";
  playIcon.style.display = "none";
}

function getWaktu() {
  // Membuat objek Date
  var date = new Date();

  // Mengambil jam, menit, dan detik dari objek Date
  var jam = date.getHours();
  var menit = date.getMinutes();
  var detik = date.getSeconds();

  // Menambahkan nol di depan angka yang kurang dari 10
  if (jam < 10) {
    jam = "0" + jam;
  }
  if (menit < 10) {
    menit = "0" + menit;
  }
  if (detik < 10) {
    detik = "0" + detik;
  }

  // Menggabungkan jam, menit, dan detik menjadi sebuah string
  var waktu = jam + ":" + menit + ":" + detik;

  // Menampilkan string waktu ke dalam elemen HTML
  document.getElementById("jam").innerHTML = waktu;
}

// Memanggil fungsi getWaktu setiap satu detik
setInterval(getWaktu, 1000);

// JS
var loader = document.querySelector(".loader"); // mengambil elemen loader
window.addEventListener("load", function() { // menambahkan event listener untuk load
  loader.style.display = "none"; // menyembunyikan loader
});
