import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldwideServiceService {

  constructor(private http:HttpClient) { }

  getTotal(){
   return  this.http.get('http://localhost/jhu-edu/brief')
  }
}
