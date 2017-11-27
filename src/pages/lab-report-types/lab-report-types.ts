import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController } from 'ionic-angular';
import { HttpReportProvider } from '../../providers/http-report/http-report';



/**
 * Generated class for the LabReportTypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-report-types',
  templateUrl: 'lab-report-types.html',
  providers:[HttpReportProvider]
})
export class LabReportTypesPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // constructor(public navCtrl: NavController,public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LabReportTypesPage');
  // }

  newsData: any;
  newInfo : any;
  loading: any;

  constructor(public navCtrl: NavController, private httpProvider:HttpReportProvider,public loadingCtrl: LoadingController) {
    
        this.loading = this.loadingCtrl.create({
          content: `
          <ion-spinner ></ion-spinner>`
        });
    
        this.getdata();
      }
      getdata(){
        this.loading.present();
        this.httpProvider.getJsonData().subscribe(
          result => {
            this.newsData=result.data.children;
            this.newInfo = result.data.children.kind;
            console.log("Success : "+this.newsData);
          },
          err =>{
            console.error("Error : "+err);
          } ,
          () => {
            this.loading.dismiss();
            console.log('getData completed');
          }
        );
      }
}
