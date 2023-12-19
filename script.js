    // Membuat objek Date
    var currentDate = new Date();
    
    // Mendapatkan jam, menit, dan detik
    var jam = currentDate.getHours();
    var menit = currentDate.getMinutes();
    var detik = currentDate.getSeconds();
    
    // Mendapatkan hari dalam bentuk angka (0-6, 0 = Minggu, 1 = Senin, dst.)
    var hariAngka = currentDate.getDay();
    
    // Mengonversi angka hari menjadi nama hari
    var namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][hariAngka];
    
    // Mendapatkan tanggal, bulan, dan tahun
    var tanggal = currentDate.getDate();
    var bulanAngka = currentDate.getMonth() + 1; // Ingat bahwa bulan dimulai dari 0 (Januari) - 11 (Desember)
    var tahun = currentDate.getFullYear();
    
    // Mengonversi angka bulan menjadi nama bulan
    var namaBulan = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ][bulanAngka - 1];
    
    document.write("<p>" + namaHari + "," + tanggal + " " + namaBulan + " " + tahun + "<p>");

        if(jam<=10){
            document.write("Selamat Pagi Kawan, Selamat Beraktifitas!!!");    
        }
        else if (jam<=15){
            document.write("Selamat Siang Kawan, Tetap Semangat Yaa!!!"); 
        }
        else if (jam<=18){
            document.write("Selamat Sore Kawan, Ayo Segera Pulang!!! "); 
        }
        else {
            document.write("Selamat Malam Kawan, Selamat Beraktifitas");
        }