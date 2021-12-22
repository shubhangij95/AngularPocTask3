import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catogories } from '../model/catogories';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {
  categorylist!:Catogories[]
  name!:any
  p: number = 1;
  count: number = 5;
  rate=["Poor(1 Star)","Average(2 Star)","Good(3 Star)","Best(4 Star)","Excellent(2 Star)"]
  constructor(public service:CommonService,private router: Router) { }

  ngOnInit(): void {

    this.service.getdata().subscribe((data:Catogories[])=>{
      this.categorylist=data;
    });
  }

  submitdata()
  {
    this.router.navigate(['result']);
  }

}
