import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile'
<<<<<<< HEAD

// import { LabReportTypesPage } from '../pages/lab-report-types/lab-report-types';
// import { LabReportTypesPage } from '../pages/lab-report-types/lab-report-types'

=======
>>>>>>> 8783f343de348a27c314b02d8a44bdfc24dff529

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProfilePage,
    // LabReportTypesPage
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
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
