import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrescriptionListPage } from './prescription-list';

@NgModule({
  declarations: [
    PrescriptionListPage,
  ],
  imports: [
    IonicPageModule.forChild(PrescriptionListPage),
  ],
})
export class PrescriptionListPageModule {}
