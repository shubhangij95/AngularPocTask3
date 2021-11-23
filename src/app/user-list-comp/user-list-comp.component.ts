import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-user-list-comp',
  templateUrl: './user-list-comp.component.html',
  styleUrls: ['./user-list-comp.component.css']
})
export class UserListCompComponent implements OnInit {

  userlist!:User[]
  name!:any
  p: number = 1;
  count: number = 5;

  constructor(public service:CommonService,private router: Router) { }

  ngOnInit(): void {

    this.service.getdata().subscribe((data:User[])=>{
      this.userlist=data;
    });
  }
 

  deleteproduct(id1:number)
      {
         this.service.datadeleted(id1).subscribe();
        // this.router.navigate(['/userlist']);

      }

      editdata(id:number)
      {
        // this.service.resetbutton=false;
        // this.service.buttonvalue="update";
         //  this.service.u=Object.assign({},u);
           this.router.navigate(['update',id]);

        }      


        userDetails(id: number){
          this.router.navigate(['details', id]);
        }



      search()
      {
        if(this.name=="")
        {
          this.ngOnInit();
        }
        else{
          this.userlist=this.userlist.filter(res=>{return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          });
        }
      }

      key:string='dob';
      reverse:boolean=false;

      sort(key:string)
      {
        this.key=key;
        this.reverse= !this.reverse;
      }

}

