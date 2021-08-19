import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.css']
})
export class ListnewsComponent implements OnInit {

  items: any;
  cName=''
  constructor(public firestore: AngularFireDatabase) {
  
    this.items=firestore.list('items').valueChanges()
   
  }

  ngOnInit(): void {
    
    
  }
  onSubmit(){
    this.firestore.list('items').push({name:'How Covid passes are being implemented around the world',imgUrl:'https://img.rasset.ie/0017e625-800.jpg',url:'https://www.rte.ie/news/world/2021/0808/1239691-covid-passes-worldwide/',description:'Passes and vaccine passports are increasingly being used across the world'})
  }

}
