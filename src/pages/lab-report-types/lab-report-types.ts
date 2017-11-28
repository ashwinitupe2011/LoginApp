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
<<<<<<< HEAD
=======

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // constructor(public navCtrl: NavController,public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LabReportTypesPage');
  // }

>>>>>>> 8783f343de348a27c314b02d8a44bdfc24dff529
  newsData: any;
  newInfo : any;
  loading: any;

<<<<<<< HEAD
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
=======
  constructor(public navCtrl: NavController, private httpProvider:HttpReportProvider,public loadingCtrl: LoadingController) {
>>>>>>> 8783f343de348a27c314b02d8a44bdfc24dff529
    
        this.loading = this.loadingCtrl.create({
          content: `
          <ion-spinner ></ion-spinner>`
        });
    
<<<<<<< HEAD
        // this.getdata();
      }
      // getdata(){
      //   this.loading.present();
      //   this.httpProvider.getJsonData().subscribe(
      //     result => {
      //       this.newsData=result.data.children;
      //       this.newInfo = result.data.children.kind;
      //       console.log("Success : "+this.newsData);
      //     },
      //     err =>{
      //       console.error("Error : "+err);
      //     } ,
      //     () => {
      //       this.loading.dismiss();
      //       console.log('getData completed');
      //     }
      //   );
      // }

      goToLabReports()
      {
        this.navCtrl.setRoot('LabReportDatesPage');
=======
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
>>>>>>> 8783f343de348a27c314b02d8a44bdfc24dff529
      }
}
