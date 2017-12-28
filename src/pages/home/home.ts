import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LabReportTypesPage } from '../reports/lab-report-types/lab-report-types'
import { PrescriptionListPage } from '../prescription/prescription-list/prescription-list'
import { AppointmnetSummaryPage } from '../appointmnet/appointmnet-summary/appointmnet-summary'
import { CreateAppointmnetPage } from '../appointmnet_creation/create-appointmnet/create-appointmnet';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl:ToastController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToLabReportType()
  {
    this.navCtrl.push(LabReportTypesPage);
  }

  presentToast():void {
    let toast = this.toastCtrl.create({
      message: 'Clicked',
      duration: 2000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
  goToPrescriptionList()
  {
    this.navCtrl.setRoot(PrescriptionListPage);
  }

  gotoAppointmnetSummaryPage()
  {
    this.navCtrl.setRoot(AppointmnetSummaryPage);
  }

  gotoCreateAppointmnet()
  {
    this.navCtrl.setRoot(CreateAppointmnetPage);
  }
}
