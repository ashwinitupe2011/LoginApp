import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreatePatientAppointmnetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-patient-appointmnet',
  templateUrl: 'create-patient-appointmnet.html',
})
export class CreatePatientAppointmnetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   console.log( this.navParams.get("aptDate"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePatientAppointmnetPage');
  }

}
