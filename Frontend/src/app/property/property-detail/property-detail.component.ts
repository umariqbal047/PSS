import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convert to number
      this.propertyId = id;
      console.log(id);
    });
  }

  ngOnInit() {
    this.propertyId = + this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params)=>{
        this.propertyId=+params['id'];
      }
    )
  }

  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
