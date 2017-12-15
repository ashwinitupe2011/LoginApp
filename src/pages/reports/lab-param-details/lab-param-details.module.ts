import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabParamDetailsPage } from './lab-param-details';

@NgModule({
  declarations: [
    LabParamDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LabParamDetailsPage),
  ],
})
export class LabParamDetailsPageModule {}
