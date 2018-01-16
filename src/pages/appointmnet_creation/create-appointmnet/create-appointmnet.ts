import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { DoctorDetailsModalPage } from '../doctor-details-modal/doctor-details-modal';
import { CreateAppointmnetServieProvider } from '../../../providers/create-appointmnet-servie/create-appointmnet-servie'


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
  providers:[CreateAppointmnetServieProvider]
})
export class CreateAppointmnetPage {

  public timeSlots : any[];
 
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams,public createAptService : CreateAppointmnetServieProvider) {
     
  this.openModal();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAppointmnetPage');
    this.getDoctorTimeSlots();
  }

  getDoctorTimeSlots()
  {
    this.createAptService.getDoctorTimeSlots().then(data => {
      this.timeSlots = data;
      console.log("TimeSlots: "+this.timeSlots)
  });
  }
 

  openModal()
  {
      let doctorInfoModal = this.modalCtrl.create(DoctorDetailsModalPage);
      doctorInfoModal.onDidDismiss(data =>{
        console.log("data : " +data);

        this.getDoctorTimeSlots();
      })
      doctorInfoModal.present();
      
  }
}
