import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabReportTypesPage } from './lab-report-types';

// @NgModule({
//   declarations: [
//     LabReportTypesPage,
//   ],
//   imports: [
//     IonicPageModule.forChild(LabReportTypesPage),
//   ],
// })



@NgModule({
  declarations: [
    LabReportTypesPage,
  ],
  imports: [
  IonicPageModule.forChild(LabReportTypesPage)
  ],
  exports: [
    LabReportTypesPage
  ]
  })

export class LabReportTypesPageModule {}
