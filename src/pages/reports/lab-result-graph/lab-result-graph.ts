import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the LabResultGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({                                                                                                                                                  
  selector: 'page-lab-result-graph',
  templateUrl: 'lab-result-graph.html',
})
export class LabResultGraphPage {

  lineGraphChart: any;
  @ViewChild('lineCanvas') lineCanvas;

  public graphValues : Array<any> = [];
  public graphDates : Array<any> = [];
  graphResData: any[];

  testName : string;

  constructor(public navCtrl: NavController,private http:Http, public navParams: NavParams) {
    this.testName = this.navParams.get("TestName");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabResultGraphPage'+this.testName);
    this.callGraphData();
    
  }

  callGraphData()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({method:"POST",headers:headers})
    let data = JSON.stringify(
      {testName:this.testName,
      unique_token:123456,
        unitNo:1,
        paramName:this.testName,
        request:"GetGraphValuesRequest",
        patientID:  window.localStorage.getItem('PatientId')
    }
    )
    console.log("data"+data);

    this.http.post('http://192.168.2.185/WebAPI/api/GraphValues ',data,options)
    .map(res => res.json().data.GraphData)
    .subscribe(res =>
    {
      this.graphResData = res;
      console.log("graph: "+this.graphResData);
    
      for(let i=0;i<this.graphResData.length;i++)
      {
        this.graphValues.push(this.graphResData[i].Result);
        this.graphDates.push(this.graphResData[i].Date)
      }

      this.callGrpahCreation();
    },
  (err) =>{
    console.log(err);
  });
  }

  callGrpahCreation()
  {
    console.log("Graph Ctreation");
    this.lineGraphChart = new Chart(this.lineCanvas.nativeElement, {
      
                 type: 'line',
                 data: {
                     labels: this.graphDates,
                     datasets: [
                         {
                             label: "AMYLASE",
                             fill: false,
                             lineTension: 0.1,
                             backgroundColor: "rgba(75,192,192,0.4)",
                             borderColor: "rgba(75,192,192,1)",
                             borderCapStyle: 'butt',
                             borderDash: [],
                             borderDashOffset: 0.0,
                             borderJoinStyle: 'miter',
                             pointBorderColor: "rgba(75,192,192,1)",
                             pointBackgroundColor: "#fff",
                             pointBorderWidth: 1,
                             pointHoverRadius: 5,
                             pointHoverBackgroundColor: "rgba(75,192,192,1)",
                             pointHoverBorderColor: "rgba(220,220,220,1)",
                             pointHoverBorderWidth: 2,
                             pointRadius: 3,
                             pointHitRadius: 10,
                             data: this.graphValues,
                             spanGaps: false,
                         }
                     ]
                 }
      
             });
  }

}
