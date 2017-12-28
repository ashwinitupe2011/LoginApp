import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

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
})
export class DoctorDetailsModalPage {

  constructor(public navCtrl: NavController,public viewCtrl : ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorDetailsModalPage');
  }

  closeModal()
  {
    this.viewCtrl.dismiss();
  }

}
