import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(public service:CommonService,private router: Router,
   private fb:FormBuilder) { }


  ngOnInit(): void {
// this.exform.controls.name.valueChanges.subscribe(data=>
//   {
//     console.log(data);
//   })

  }

  // exform=this.fb.group({
  //   name : ["",Validators.required],
  //   surname :  ["",Validators.required],
  //   email :  ["",Validators.required],
  //   city:[""],
  //   pincode:[""],
  //   dob:[""],
  //   joiningDate:[""],
  //   income:[""]
  
  // })


  submitdata(u:User)
  {
      //  console.log(this.exform.value);

    if(u.id==0)
    {
      this.service.postdata(u).subscribe();
      this.router.navigate(['/userlist']);
    }
  }

}
