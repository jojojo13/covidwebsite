import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartServiceService {
  casesByTime: any;

  dates = [];
  cases = [];

  constructor(private http: HttpClient) {}

  getDataChartCountry(country:string) {
    return this.http.get(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2=${country}&onlyCountries=true`
    );
  }
  sortObject(obj: any) {
    return Object.keys(obj)
      .sort((a: any, b: any) => {
        return a - b;
      })
      .reduce(function (result: any, key) {
        result[key] = obj[key];
        return result;
      }, {});
  }

  getDate(obj:any){
    let dates=[];
    for(let date in obj){
      dates.push(date)
    }
    return dates;

  }

  getCases(obj:any){
    let cases=[]
    for(let item in obj){
      cases.push(obj[item])
    }
    return cases;
  }

  get10DaysAgo(obj:any){
   let date=this.getDate(obj)
   let tendaysago=[]
   for(let i=date.length-10;i<date.length;i++){
     tendaysago.push(date[i])
   }
   return tendaysago;
  }

  getCase10DaysAgo(obj:any){
    let allCases=this.getCases(obj);
    let tendaysago=[]
    for(let i=allCases.length-10;i<allCases.length;i++){
      tendaysago.push(allCases[i])
    }
    return tendaysago;
  }
}
