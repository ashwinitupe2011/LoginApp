import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions } from "ion2-calendar";

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  userDetails : any;
  userDOB : string = "Select DOB";
  firstName : string;
  lastName : string;
  patientPassword : string;
  relativeName : string;
  emailId : string;
  address1 : string;
  address2 : string;
  pincode:string;
  mobileNumber : string;
  telNumber : string;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
    this.userDetails = navParams.get("userData");
    console.log("data"+this.userDetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
    console.log(this.userDetails);

    this.userDOB = this.userDetails.DOB;
    this.firstName = this.userDetails.firstName;
    this.lastName = this.userDetails.lastname;
    this.patientPassword = this.userDetails.userPassword;
    this.relativeName = this.userDetails.fatherName;
    this.emailId = this.userDetails.EmailAddress;
    this.address1 = this.userDetails.address1;
    this.address2 = this.userDetails.address2;
    this.pincode = this.userDetails.postalCode;
    this.mobileNumber = this.userDetails.mobileNo;
    this.telNumber = this.userDetails.telPhone;
  }

  // openCalendar() {
  //   const options: CalendarModalOptions = {
  //     title: 'BASIC',
  //   };
  //   let myCalendar =  this.modalCtrl.create(CalendarModal, {
  //     options: options
  //   });

  //   myCalendar.present();

  //   myCalendar.onDidDismiss((date, type) => {
  //     console.log(type);
  //     console.log(date.dateObj);
  //     this.userDOB = date.dateObj;
  //   })
  // }
}
