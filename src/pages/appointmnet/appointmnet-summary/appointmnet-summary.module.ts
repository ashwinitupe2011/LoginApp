import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmnetSummaryPage } from './appointmnet-summary';

@NgModule({
  declarations: [
    AppointmnetSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmnetSummaryPage),
  ],
})
export class AppointmnetSummaryPageModule {}
