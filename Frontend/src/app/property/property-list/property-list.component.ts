import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties: Array<any>=[
    {
     "Id":1,
     "Name":"Palan",
     "Type":"House",
     "Price":1900
    },
    {
      "Id":2,
      "Name":"Villen House",
      "Type":"Villa",
      "Price":1800
     },
     {
      "Id":3,
      "Name":"palan House",
      "Type":"House",
      "Price":1300
     },
     {
      "Id":4,
      "Name":"Efra House",
      "Type":"House",
      "Price":1200
     },
     {
       "Id":5,
       "Name":"Refla House",
       "Type":"House",
       "Price":1100
      },
      {
       "Id":6,
       "Name":"Gurla House",
       "Type":"House",
       "Price":1000
      },
]

}
