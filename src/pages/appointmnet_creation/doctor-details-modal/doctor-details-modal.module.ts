import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorDetailsModalPage } from './doctor-details-modal';

@NgModule({
  declarations: [
    DoctorDetailsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorDetailsModalPage),
  ],
})
export class DoctorDetailsModalPageModule {}
