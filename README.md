###Ifarm Application.

###prerequisite###


Minimum Versions
Android version - 7.1.4
IOS - 5.0
NPM - 6.4.1
Node - v10.13.0
Java - 8
Angular 7

###System setup###

###Java Installation###                      

###Reference link -                            

https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04     

###Setup Environment Variable###:                           

sudo gedit ~/.bashrc                                         
export JAVA_HOME=/usr/lib/jvm/java-8-oracle                  

sudo gedit /etc/environment                             
JAVA_HOME="/usr/lib/jvm/java-8-oracle"  

###Nodejs and NPM install 
###Follow the link to install Nodejs and NPM (min nodejs version should be greater than 8.9)                           

https://websiteforstudents.com/install-the-latest-node-js-and-nmp-packages-on-ubuntu-16-04-18-04-lts/  

###Ionic Installation###

npm install -g ionic cordova   

###Android Studio Install###                                  

https://developer.android.com/studio/   

###Command to run android studio to set up android sdk                             

cd android-studio/bin                             
open terminal                           
./studio.sh (follow the steps as it takes while building android studio)                        
Open SDK manager, select Android 8.1 (min required) and apply so that it install the required packages.    

###Setup Android Environment Variable###                              

sudo gedit ~/.bashrc                             
export ANDROID_HOME=/home/user_directory/Android/Sdk                             
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools                          

sudo gedit /etc/environment                 
ANDROID_HOME="/home/digiledge/Android/Sdk"   

###Gradle Install###                      

sudo add-apt-repository ppa:cwchien/gradle                          
sudo apt-get update                         
sudo apt-get install gradle-ppa                
export PATH=$PATH:/usr/lib/gradle/{gradle folder version}/bin                     


###Compilation###                       

###Add Application Platform###

Repo Name : nattuva-app
Clone the application, navigate to folder nattuva-app
npm install

NOTE : if you are getting an error like Error: Cannot find module 'node-sass' then run the below command
sudo npm install --save-dev --unsafe-perm node-sass

sudo ionic cordova platform add android@7.1.4

NOTE: Ignore if any error comes like this.

[ERROR] An error occurred while running subprocess cordova.
#Run Application on browser


sudo ionic cordova build android
ionic serve

###Run Application on device this generates the debug-apk


sudo ionic cordova build android

###Debug APK Path###

/nattuva-app/platforms/android/app/build/outputs/apk/debug

###To run App directly in mobile###

step 1 : Connect your mobile 
step 2 : Ensure that mobile have debug permission 
  (Note to enable : Enable developer option mode > click USB Debuging)
step 3 : Run command in terminal "adb devices"
  (It will list every devices which connected with usb debugging);
step 4 : Run the Command in terminal "ionic cordova run android --device"



###IOS Implementation###

1. Clone Application
2. git checkout testios
3. npm install
4. sudo ionic cordova platform add ios
5. sudo ionic cordova build ios
6. here you will get an error, as you have not assigned the developer team.
7. now navigate to claims-app/platform/ios/ , double click on .xcode project.
8. this opens the application in xcode
9. Now select the project at the left-hand side
8. Now assign the developer team.
9. navigate to a product -> clean build
10. select any of the simulator and run the application 



