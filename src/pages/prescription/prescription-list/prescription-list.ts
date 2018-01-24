import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrescriptionServiceProvider } from '../../../providers/prescription-service/prescription-service';
import { PresceriptionDetailsPage } from '../../prescription/presceription-details/presceription-details'

/**
 * Generated class for the PrescriptionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prescription-list',
  templateUrl: 'prescription-list.html',
  providers:[PrescriptionServiceProvider]
})
export class PrescriptionListPage {

  presciptionListData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public prescriptionService:PrescriptionServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionListPage');

    this.prescriptionService.getPrescriptionListResponse().then(data => {
        this.presciptionListData = data;
        console.log(this.presciptionListData)
    });
  }

  sectionToggle(i)
  {
    console.log(i)
    this.presciptionListData[i].open = ! this.presciptionListData[i].open;
  }

  goToPrescriptionDetails(prescriptionDate,prescriptionID)
  {
    console.log(prescriptionDate);
    console.log(prescriptionID);
    this.navCtrl.swipeBackEnabled = true;
    this.navCtrl.push(PresceriptionDetailsPage,{prescriptionDate:prescriptionDate,prescriptionID:prescriptionID});

  }

}
