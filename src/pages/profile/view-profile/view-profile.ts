import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { ProfileOperationServiceProvider } from '../../../providers/profile-operation-service/profile-operation-service';

/**
 * Generated class for the ViewProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
  providers:[ProfileOperationServiceProvider]
})
export class ViewProfilePage {

  data : any ={};
  userDetailsData : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public profileService : ProfileOperationServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProfilePage');
    this.profileService.viewUserDetails().then(data => {
      this.data = data;
      this.userDetailsData = this.data[0]
      console.log(this.userDetailsData);
     
    });
  }

  editUserInfo()
  {
    console.log("editUser");
    this.navCtrl.push(EditProfilePage,{userData:this.userDetailsData});
  }

}
