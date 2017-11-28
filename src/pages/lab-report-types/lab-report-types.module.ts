import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabReportTypesPage } from './lab-report-types';
<<<<<<< HEAD
=======
import { HttpReportProvider } from '../../providers/http-report/http-report';
>>>>>>> 8783f343de348a27c314b02d8a44bdfc24dff529

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
<<<<<<< HEAD
=======
  ],
  providers: [
    HttpReportProvider,
>>>>>>> 8783f343de348a27c314b02d8a44bdfc24dff529
  ]
  })

export class LabReportTypesPageModule {}
