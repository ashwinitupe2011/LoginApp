import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { DoctorDetailsModalPage } from '../doctor-details-modal/doctor-details-modal';

/**
 * Generated class for the CreateAppointmnetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-appointmnet',
  templateUrl: 'create-appointmnet.html',
})
export class CreateAppointmnetPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAppointmnetPage');
  }

  openModal()
  {
      let myModal = this.modalCtrl.create(DoctorDetailsModalPage);
      myModal.present();
  }
}
