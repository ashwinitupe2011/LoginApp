import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAppointmnetPage } from './create-appointmnet';

@NgModule({
  declarations: [
    CreateAppointmnetPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAppointmnetPage),
  ],
})
export class CreateAppointmnetPageModule {}
