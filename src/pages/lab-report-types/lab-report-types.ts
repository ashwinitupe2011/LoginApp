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
  newsData: any;
  newInfo : any;
  loading: any;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public httpReportProvider :HttpReportProvider) {
    
        this.loading = this.loadingCtrl.create({
          content: `
          // <ion-spinner ></ion-spinner>`
        });
    
          this.getdata();
      }
      getdata(){
        // this.loading.present();
        this.httpReportProvider.getJsonData().subscribe(
          result => {
            console.log("Success : "+result);
          },
          err =>{
            console.error("Error : "+err);
          });
      }

      goToLabReports()
      {
        this.navCtrl.setRoot('LabReportDatesPage');
      }
}
