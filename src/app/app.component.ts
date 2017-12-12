import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  patientName:string;
  patientRegistrationNo:string;
  patientEmailId:string;
  
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if(!window.localStorage.getItem('PatientId'))
      {
          console.log("get")
      }
      else
      {
        console.log("jjj")
      }

      this.getData()
    });
  }

  getData()
  {
         this.patientName=window.localStorage.getItem('PatientName');
         this.patientRegistrationNo=window.localStorage.getItem('RegistrationNo');
         this.patientEmailId=window.localStorage.getItem('patientEmailID');

         console.log(this.patientEmailId)
         console.log(this.patientRegistrationNo)
         console.log(this.patientName)
  }
}

