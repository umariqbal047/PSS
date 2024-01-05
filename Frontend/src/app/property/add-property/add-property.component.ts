import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  Name: string | undefined;
  Type: string | undefined;
  Price: number | undefined; // Define the Price property
  constructor(private router:Router) { }
@ViewChild('Form') addPropertyForm:NgForm | undefined;
  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(Form:any){
    console.log(this.addPropertyForm);
  }
}
