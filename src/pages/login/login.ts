import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsernameValidator } from '../validators/username.validator';
import 'rxjs/add/operator/map'
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading : Loading;
  validations_form: FormGroup;

  public username : string = "ph000700";
  public password : string = "abc";
 
   hospitalUnits: Array<string>;
   patientType:Array<string>;
   loginResponse: any[];
   loginResponseFlag:boolean;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public formBuilder: FormBuilder, private loadingCtrl: LoadingController ,private http: Http) { 
    // this.callLogin()
  }

  ionViewWillLoad() {
        this.hospitalUnits = [
          "ABC",
          "PQR"
        ];
    
        this.patientType = [
          "Soft.com User"
        ]
    
        this.validations_form = this.formBuilder.group({
          username: new FormControl('', Validators.compose([
            UsernameValidator.validUsername,
            Validators.maxLength(25),
            Validators.minLength(3),
            Validators.required
          ])),
          password: new FormControl('', Validators.compose([
            UsernameValidator.validUsername,
            Validators.maxLength(25),
            Validators.minLength(3),
            Validators.required
          ])),
    
          hospitalUnits: new FormControl(this.hospitalUnits[0], Validators.required),     
          patientType : new FormControl(this.patientType[0], Validators.required),
        });
      }
    
      validation_messages = {
        'username': [
          { type: 'required', message: 'Username is required.' },
          { type: 'minlength', message: 'Username must be at least 3 characters long.' },
          { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
          { type: 'validUsername', message: 'Your username has already been taken.' }
        ],
        'password': [
          { type: 'required', message: 'Password is required.' },
          { type: 'minlength', message: 'Password must be at least 3 characters long.' }
        ],
      };
    
      onSubmit(values){
        let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
      
          let options = new RequestOptions({method:"POST",headers:headers})
        
          let data = JSON.stringify(
            {unitNo:1,
              request:"userLoginRequest",
            unique_token:123456,
            userType:4,
            userID:values.username,
            userPassword:values.password
          }
          )
      
          console.log(data);
      
          this.http.post('http://192.168.2.185/WebAPI/api/Login',data,options)
          .map(res => res.json())
          .subscribe(res =>
          {
          this.loginResponseFlag = res.SuccessFlag
            this.loginResponse = res.data.Table;
            this.callDataSavePreferences();
          },
        (err) =>{
        });
        
      }


      presentAlert(subject,message) {
        let alert = this.alertCtrl.create({
          title: subject,
          subTitle: message,
          buttons: ['Dismiss']
        });
        alert.present();
      }

      callDataSavePreferences()
      {
        if(this.loginResponseFlag)
        {
          window.localStorage.setItem('PatientId',this.loginResponse[0].PatientId)
          window.localStorage.setItem('PatientName',this.loginResponse[0].UserName)
          window.localStorage.setItem('patientAge',this.loginResponse[0].Age)
          window.localStorage.setItem('patientGender',this.loginResponse[0].Gender)
          window.localStorage.setItem('patientEmailID',this.loginResponse[0].EmailID)
          window.localStorage.setItem('RegistrationNo',this.loginResponse[0].RegistrationNo)

          this.navCtrl.setRoot('HomePage');
        }
        else{
          this.presentAlert("Login Error","Please check your login credentials")
        }
      }
      
  public showLoading()
  {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait ...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
