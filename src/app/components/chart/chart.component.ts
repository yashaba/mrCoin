import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
 myData = []
  myType = 'LineChart'
  chart :any= [];
  // chartColumns = ['Jul', 'Inhabitants']
 constructor() { }


  // data = ['aug',9235.96,9295.9,9238.13,9254.52,9193.51,9131.0,9154.19,9174.71,9214.66,9163.87,9392.66,9537.4,9613.11,9551.28,9707.5,9938.83,11042.4,:10934.94,11102.67,11114.93,11343.88,11823.69,11077.77,11242.57,11194.25,11750.28,11772.94,11605.6,11767.6,11684.06,11893.03]
  data = [{"x":1594512000,"y":9235.96},{"x":1594598400,"y":9295.9},{"x":1594684800,"y":9238.13},{"x":1594771200,"y":9254.52},{"x":1594857600,"y":9193.51},{"x":1594944000,"y":9131.0},{"x":1595030400,"y":9154.19},{"x":1595116800,"y":9174.71},{"x":1595203200,"y":9214.66},{"x":1595289600,"y":9163.87},{"x":1595376000,"y":9392.66},{"x":1595462400,"y":9537.4},{"x":1595548800,"y":9613.11},{"x":1595635200,"y":9551.28},{"x":1595721600,"y":9707.5},{"x":1595808000,"y":9938.83},{"x":1595894400,"y":11042.4},{"x":1595980800,"y":10934.94},{"x":1596067200,"y":11102.67},{"x":1596153600,"y":11114.93},{"x":1596240000,"y":11343.88},{"x":1596326400,"y":11823.69},{"x":1596412800,"y":11077.77},{"x":1596499200,"y":11242.57},{"x":1596585600,"y":11194.25},{"x":1596672000,"y":11750.28},{"x":1596758400,"y":11772.94},{"x":1596844800,"y":11605.6},{"x":1596931200,"y":11767.6},{"x":1597017600,"y":11684.06},{"x":1597104000,"y":11893.03}]

  ngOnInit(): void {
    Chart.defaults.global.defaultFontSize = 10
    let jan :any = ['Jan']
    let jul :any = ['Jul']
    this.data.forEach(day =>  jan.push(day.y))
    this.data.forEach(day =>  jul.push(day.y))
    // let dayY = this.data.map(day =>  [new Date (day.x * 1000).toLocaleString('en'),day.y])
    let dayY = this.data.map(day =>  day.y)
    let dayX = this.data.map(day =>  new Date (day.x * 1000).toLocaleString('en' , {year:'numeric',month:'long',day:'numeric'}))
    console.log(jan);
    this.myData.push(jan)  
    this.myData.push(jul)  
    
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: dayX,
        datasets: [
          {
            data: dayY,
            borderColor: '#3cba9f',
            fill: false,
          },
          
        ]
      },
      options: {
        legend: {
          display: false
         
        },
        
        scales: {
          xAxes: [{
            
           
            display: true
           
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })
  }






 
}
