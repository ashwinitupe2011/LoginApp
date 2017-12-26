import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { LabReportTypesPage } from '../pages/reports/lab-report-types/lab-report-types'
import { PrescriptionListPage } from '../pages/prescription/prescription-list/prescription-list'

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
          this.nav.setRoot(LoginPage);
      }
      else
      {
        this.nav.setRoot('HomePage')
        console.log("jjj")
      }

      this.getData()
    });
  }

  logoutFunction():void
  {
    window.localStorage.clear();
    this.nav.setRoot(LoginPage);
    console.log("logout")
  }

  gotoHomePage():void
  {
    this.nav.setRoot('HomePage');
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

  gotoReportsPage()
  {
    this.nav.setRoot(LabReportTypesPage);
  }

  gotoPrescriptionPage()
  {
    this.nav.setRoot(PrescriptionListPage);
  }
}

