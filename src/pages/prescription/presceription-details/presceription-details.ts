import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrescriptionServiceProvider } from '../../../providers/prescription-service/prescription-service';

/**
 * Generated class for the PresceriptionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presceription-details',
  templateUrl: 'presceription-details.html',
  providers:[PrescriptionServiceProvider]
})
export class PresceriptionDetailsPage {
  prescriptionDetailsData : any;

  prescriptionDate:string;
  prescriptionId : string;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public prescriptionService:PrescriptionServiceProvider) {
    this.prescriptionDate = navParams.get("prescriptionDate");
    this.prescriptionId = navParams.get("prescriptionID");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresceriptionDetailsPage' +   this.prescriptionDate + " : " + this.prescriptionId );
    this.prescriptionService.getPrescriptionDetailsResponse(this.prescriptionDate,this.prescriptionId).then(data => {
      this.prescriptionDetailsData = data;
      console.log(this.prescriptionDetailsData)
  });
  }

}
