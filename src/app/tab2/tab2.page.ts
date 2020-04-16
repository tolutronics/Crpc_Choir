import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
prelude:boolean=false;

public preludes:Array<any> = new Array(); 
public choruses:Array<any> = new Array(); 
public verses:Array<any> = new Array(); 
  constructor() {}

  Prelude(i){
    this.preludes.push(i);
    console.log(this.preludes);
  }

  Chorus(i){
    this.choruses.push(i);
    console.log(this.choruses);
  }

  Verse(i){
    this.verses.push(i);
    console.log(this.verses);
  }



  deleteP(i){
    console.log(i);
      this.preludes.splice(i, 1);

  }

  deleteV(i){
    console.log(i);
      this.verses.splice(i, 1);

  }

  deleteC(i){
    console.log(i);
      this.choruses.splice(i, 1);

  }


  ngOnInit() {

  }

}
