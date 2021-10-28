Tugas ALP Group 3

React Native Developer

Deskripsi Program :

Program Daftar Buku terkenal yang telah di Filmkan yang merupakan daftar buku dengan Penjualan Terbaik atau Top Seller

Fungsi :

Program disertai dengan tampilan icon daftar dari buku (booklist), icon menu untuk userlist dan icon menu bookmark list 

Fitur:

Tampilan daftar buku dalam bentuk card view di sertai dengan : 
* Image atau gambar daftar buku 
* Total Jumlah Halaman
* Rating Buku
* Tombol untuk Add untuk simpan ke halaman Daftar BookMarks List
* Tombol untuk Add Card Basket untuk simpan pembelian buku yang dipilih
* Tampilan Statusbar dibagian bawahnya yg menampilkan menu icon untuk : 
  1. BookListMovie ke screen BooksList Detail
  2. BookMarks List ke screen BookMarks Detail
  3. UserList untuk menampilkan nama-nama user
  4. Cart untuk menampilkan Basket List cart untuk pembelian buku yg dipilih
  
Thirty Party React : 
Redux (Persist dan Thunk), Axios, NavigationContainer, dan Expo Component

Resouce API : 

https://example-data.draftbit.com/books?_limit=10

https://jsonplaceholder.typicode.com/users

Penggunan Script Setup / Installasi :

1. git clone dari branch master Tugas_ALP_Group3
    
   > git clone https://github.com/liurudys/Tugas_ALP_Group3.git

2. di CMD  (Command Prompt) :
   
  > cd \Tugas_ALP_Group3
   
3. di folder \Tugas_ALP_Group3  
   
   * nyalakan emulator android atau Devices (Hp/smartphone) yang sudah standby dengan usb yg sudah tercolok ke device (hp), kemudian :
  
   > npx react-native run-android

   * setelah proses selesai untuk installasi APK nya ke emulator atau devices hp

   > npx react-native start

4. Link Download APK (hasil build) :

   https://drive.google.com/file/d/1EuTEaAaNLAn76dwcI_O8j6Ryb_847kaa/view

Nama Anggota : 

### Liu Rudy Sofyan
- buat branch baru di github sebagai branch master
- Commit and Push Template React Native
- buat App.js
- buat RootNavigator.js
- buat booklists.js
- buat bookmarks.js
- configurasi AndroidManifest.xml karena sebelumnya tidak jalan melalui devices (hp)
- build Apk Release dan taruh link share google drive

### Excel Antonio
- Redux
- Fix Icon

### Wellson Leewando (Github username: DangeRSouL98)
- Buat UserList untuk melihat semua user

### Christians Salim
- Membuat Cart.js
- Update content pada redux/BookSlice.js untuk kebutuhan Cart
- Menambahkan button AddToCart untuk Add ke Array Object Cart

### Steven Ciputra
- navigasi booklist ke bookdetail
- navigasi bookmarks ke bookmarksdetail
- buat BookDetail
