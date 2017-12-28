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
import { LabReportDetailsPage } from '../pages/reports/lab-report-details/lab-report-details'
import { LabResultGraphPage } from '../pages/reports/lab-result-graph/lab-result-graph'
import { LabParamDetailsPage } from '../pages/reports/lab-param-details/lab-param-details'
import { LabReportTypesPage } from '../pages/reports/lab-report-types/lab-report-types'
import { PrescriptionServiceProvider } from '../providers/prescription-service/prescription-service';
import { PresceriptionDetailsPage } from '../pages/prescription/presceription-details/presceription-details'
import { PrescriptionListPage } from '../pages/prescription/prescription-list/prescription-list'
import { AppointmnetSummaryPage } from '../pages/appointmnet/appointmnet-summary/appointmnet-summary'
import { AppointmentServiceProvider } from '../providers/appointment-service/appointment-service';

import { CreateAppointmnetPage } from '../pages/appointmnet_creation/create-appointmnet/create-appointmnet'
import { DoctorDetailsModalPage } from '../pages/appointmnet_creation/doctor-details-modal/doctor-details-modal'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProfilePage,
    LabReportDetailsPage,
    LabResultGraphPage,
    LabParamDetailsPage,
    LabReportTypesPage,
    PresceriptionDetailsPage,
    PrescriptionListPage,
    AppointmnetSummaryPage,
    CreateAppointmnetPage,
    DoctorDetailsModalPage
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
    LabResultGraphPage,
    LabParamDetailsPage,
    LabReportTypesPage,
    PresceriptionDetailsPage,
    PrescriptionListPage,
    AppointmnetSummaryPage,
    CreateAppointmnetPage,
    DoctorDetailsModalPage
    // LabReportTestParametersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpReportProvider,
    PrescriptionServiceProvider,
    AppointmentServiceProvider,
  ]
})
export class AppModule {}
