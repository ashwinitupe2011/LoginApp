import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { DoctorDetailsModalPage } from '../doctor-details-modal/doctor-details-modal';
import { CreateAppointmnetServieProvider } from '../../../providers/create-appointmnet-servie/create-appointmnet-servie'
import { CreatePatientAppointmnetPage } from '../../appointmnet_creation/create-patient-appointmnet/create-patient-appointmnet';


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
 
  createAPT(timeslot,fromTime,toTime)
  {
    console.log(timeslot+" " + fromTime+ " " +toTime);
    // this.navCtrl.push(CreatePatientAppointmnetPage,{});



    this.navCtrl.swipeBackEnabled = true;
    // this.navCtrl.push(PresceriptionDetailsPage,{prescriptionDate:prescriptionDate,prescriptionID:prescriptionID});
    this.navCtrl.push(CreatePatientAppointmnetPage,{aptDate:"22/33/33"});
    this.navCtrl.swipeBackEnabled = true;

    
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
