import { Component, OnInit } from '@angular/core';
import { WorldwideServiceService } from 'src/app/services/worldwide-service.service';

@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.css']
})
export class WorldwideComponent implements OnInit {

  worldWideData:any
  fatality:number=0
  constructor(private service:WorldwideServiceService) { }

  ngOnInit(): void {
    
    this.service.getTotal().subscribe(data=>{
      this.worldWideData=data
      console.log(this.worldWideData)
      this.fatality=this.worldWideData.deaths/this.worldWideData.confirmed
    })
  }

}
