Tugas ALP Group 3

React Native Developer

Deskripsi Program :

Program Daftar Buku terkenal yang telah di Filmkan yang merupakan daftar buku dengan Penjualan Terbaik atau Top Seller

Fungsi :

Program disertai dengan tampilan icon daftar dari buku (booklist), icon menu untuk userlist dan icon menu bookmark list 

Fitur:

Tampilan daftar buku dalam bentuk card view di sertai dengan : 
* Image atau gambar daftar buku 
* Tatal Jumlah Halaman
* Rating Buku
* Tombol untuk Add untuk simpan ke halaman Daftar BookMarks List
* Tampilan Statusbar dibagian bawahnya yg menampilkan menu icon untuk : BookListMovie, BookMarks List, dan UserList

Thirty Party React : 
React, Redux (Persist dan Thunk), Axios, NavigationContainer, dan Expo Component

Resouce API : 
https://example-data.draftbit.com/books?_limit=10

https://jsonplaceholder.typicode.com/users

Penggunan Script Setup / Installasi :

1. git clone dari branch master Tugas_ALP_Group3
    
   > git clone https://github.com/liurudys/Tugas_ALP_Group3.git

2. di CMD  (Command Prompt) :
   
  > cd \Tugas_ALP_Group3
   
3. di folder \Tugas_ALP_Group3  
   
   * nyalakan emulator / Devices (Hp) yang sudah standby dengan usb yg sudah tercolok ke devices (hp), kemudian :
  
   > npx react-native run-android

   * setelah proses selesai untuk installasi APK nya ke emulator / devices hp

   > npx react-native run-android

Nama Anggota : 

### Liu Rudy Sofyan
- buat branch baru di github sebagai branch master
- Commit and Push Template React Native
- buat App.js
- buat RootNavigator.js
- buat booklists.js
- buat bookmarks.js
- configurasi AndroidManifest.xml karena sebelumnya tidak jalan melalui devices (hp)

### Excel Antonio
- Redux
- Fix Icon

### Wellson Leewando (Github username: DangeRSouL98)
- Buat UserList untuk melihat semua user

### Christians Salim
### Steven Ciputra
- navigasi booklist ke bookdetail
- navigasi bookmarks ke bookdetail
- buat BookDetail
