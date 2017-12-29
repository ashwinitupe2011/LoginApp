import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { CreateAppointmnetServieProvider } from '../../../providers/create-appointmnet-servie/create-appointmnet-servie'

/**
 * Generated class for the DoctorDetailsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-details-modal',
  templateUrl: 'doctor-details-modal.html',
  providers:[CreateAppointmnetServieProvider]
})
export class DoctorDetailsModalPage {

  doctorInfo:any;
  doctorSpeciality:any;
  doctorName:any;

  constructor(public navCtrl: NavController,public aptService:CreateAppointmnetServieProvider,public viewCtrl : ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorDetailsModalPage');


    this.doctorInfo = [
      "Specilaity","Doctor"
    ]

    this.aptService.getDoctorSpeciality().then(data => {
      this.doctorSpeciality = data;
      console.log("sepcility : "+this.doctorSpeciality)

  });


  this.aptService.getDoctorName().then(data => {
    this.doctorName = data;
    console.log("sepcility : "+this.doctorName)

});
  }

  closeModal(values)
  {
    this.viewCtrl.dismiss("ghsgstsdbdtdbdfyfb : " + values);
  }

}
