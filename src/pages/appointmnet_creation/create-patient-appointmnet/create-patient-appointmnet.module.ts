import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePatientAppointmnetPage } from './create-patient-appointmnet';

@NgModule({
  declarations: [
    CreatePatientAppointmnetPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePatientAppointmnetPage),
  ],
})
export class CreatePatientAppointmnetPageModule {}
