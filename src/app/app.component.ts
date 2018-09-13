import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stockDataSearch';
  dates = [];
  // this.stock.getData(this.equity)
  constructor(private api: ApiService){
    api.getData().subscribe((data) =>{
      console.log(data);
      console.log(data['Time Series (Daily)']);
      // this.targetSymbol = data[ 'Meta Data']['2.Symbol'];
      
      // return (data: any) => data
      // .map((data: any) => get(data['Time Series (Daily)']))
      // console.log(data)
      
      // for (let result in data['Time Series (Daily)']){
      //   console.log(`Returns ${this.result}`);
        
        // this.res = data['Meta Data']['2.Symbol'];
        // console.log(`Returns ${this.res}`);
        // console.log(`Returns ${res}`);
      // }
     
      
    }, err => {
        console.log(err)
      })
  }
  
}
// ["Time Series (Daily)"]

// return (data: any) => data
//       .map((data: any) => get(data, this.title + '.' + key))
//       console.log(`${data}${this.title} ${key}`);