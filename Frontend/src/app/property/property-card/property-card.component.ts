import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
@Input() property:any
  // Property: any={
  //   "Id":1,
  //   "Name":"Palan",
  //   "Type":"House",
  //   "Price":1200
  // }

}
