import { Component } from '@angular/core';
import {GetService}from '../cliente/get.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  getdata:any[]=[];

  constructor(public _services: GetService) 
    {
    this._services.getdata<any[]>("").subscribe(data =>{
      this.getdata = data
      console.log(this.getdata)
    }

    )

}
}

