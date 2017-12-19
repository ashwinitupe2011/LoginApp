import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresceriptionDetailsPage } from './presceription-details';

@NgModule({
  declarations: [
    PresceriptionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PresceriptionDetailsPage),
  ],
})
export class PresceriptionDetailsPageModule {}
