import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../model/profile';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-selectprofile',
  templateUrl: './selectprofile.component.html',
  styleUrls: ['./selectprofile.component.css']
})
export class SelectprofileComponent implements OnInit {

  experience=["PHP(0-2years)","PHP(0-5years)"]


  constructor(public service:CommonService,private router: Router) { }

  ngOnInit(): void {

    // this.service.getdata().subscribe((data:Profile[])=>{
    //   this.profilelist=data;
    // });
  }


  submitdata(p:Profile)
  {
      //  console.log(this.exform.value);

    if(p.profileId==0)
    {
    //  this.service.postdata(p).subscribe();
      this.router.navigate(['categorydetails']);
    }
  }
}
