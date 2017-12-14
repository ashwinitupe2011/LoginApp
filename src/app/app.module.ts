import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile'
import { HttpReportProvider } from '../providers/http-report/http-report';
import { LabReportDetailsPage } from '../pages/lab-report-details/lab-report-details'
import { LabResultGraphPage } from '../pages/lab-result-graph/lab-result-graph'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProfilePage,
    LabReportDetailsPage,
    LabResultGraphPage
    // LabReportTestParametersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProfilePage,
    LabReportDetailsPage,
    LabResultGraphPage
    // LabReportTestParametersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpReportProvider
  ]
})
export class AppModule {}
