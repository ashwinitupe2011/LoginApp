import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabReportDetailsPage } from './lab-report-details';

@NgModule({
  declarations: [
    LabReportDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LabReportDetailsPage),
  ],
})
export class LabReportDetailsPageModule {}
