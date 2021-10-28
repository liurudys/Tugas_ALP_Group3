Step by step to build relase APK for android  (react native)
============================================================

1. > keytool -genkey -v -keystore Tugas_ALP_Group3.keystore -alias Tugas_ALP_Group3 -keyalg RSA -keysize 2048 -validity 10000

2. move file "Tugas_ALP_Group3.keystore" to folder /android/app
 
3. modify or edit file "android\app\build.gradle" 
   
   with notepad or text editor change in syntax :

   android {
     ....
     signingConfigs {
        release {
           storeFile file('your_key_name.keystore')
           storePassword 'your_key_store_password'
           keyAlias 'your_key_alias'
           keyPassword 'your_key_file_alias_password'
        }
     }
     buildTypes {
        release {
           ....
           signingConfig signingConfigs.release
        }
     }
   }

4. (in project directory) create folder "assets" in folder android/app/src/main/  if it does not exists

   > mkdir android/app/src/main/assets

5. > react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle 
     --assets-dest android/app/src/main/res/

6. At Last to final build APK Release :
   
   > cd android

   > gradlew assembleRelease

   > done 

7. After build release, distributed Application folder file APK has been create
   and it can install in any android devices or emulator :
   
   folder : \Tugas_ALP_Group3\
             App\
             Build\
             outputs\
             apk\
             release\      
   files :
      app-armeabi-v7a-release.apk
      app-universal-release.apk     --> I use this and rename it and to share this is file into publish to the google drive
      app-x86_64-release.apk
      app-x86-release.apk

link:
https://drive.google.com/file/d/1EuTEaAaNLAn76dwcI_O8j6Ryb_847kaa/view


Informatiuon Create by :
 
Rudy Liu
