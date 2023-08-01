import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{
  passValue : any;
  chartForm : any;
  degree : any;
  giv1 : any;
  giv2: any;

  ngOnInit(): void {
    this.chartForm = new FormGroup({
      value1 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(100)]),
      value2 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(100)]),
    })
  }
  CreateChart(val : any){
    this.degree = Math.round(val / 100 * 360)
    // console.log(this.degree)
    this.passValue = `conic-gradient(
      orange `+ this.degree +`deg,
      red  0
      )`;
    // this.passValue = val
      // console.log(this.passValue)
      // console.log(this.chartForm)
  }
  checkValue1(fval : any){
    let total = 100;
    if(fval < 101){
      this.giv2 = 100 - fval;
      // console.log(this.giv2)
    }
  }
  checkValue2(sval : any){
    let total = 100;
    if(sval <101){
      this.giv1 = 100-sval;
      // console.log(this.giv1)
    }
  }
}
