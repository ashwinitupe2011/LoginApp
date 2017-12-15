import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabReportDatesPage } from './lab-report-dates';

@NgModule({
  declarations: [
    LabReportDatesPage,
  ],
  imports: [
    IonicPageModule.forChild(LabReportDatesPage),
  ],
})
export class LabReportDatesPageModule {}
