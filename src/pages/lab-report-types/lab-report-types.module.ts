import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabReportTypesPage } from './lab-report-types';
import { HttpReportProvider } from '../../providers/http-report/http-report';

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
  ],
  providers: [
    HttpReportProvider,
  ]
  })

export class LabReportTypesPageModule {}
