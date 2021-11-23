import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!: number;
  user!: User;

  constructor(private route: ActivatedRoute,private router: Router,
    public service: CommonService) { }

  ngOnInit(): void {
     this.user = new User();

     this.id = this.route.snapshot.params['id'];
    
     this.service.getSingleUser(this.id)
       .subscribe(data => {
         console.log(data)
        this.user = data;
       }, error => console.log(error));
  }

  updateEmployee() {
    this.service.updateEmployee(this.user,this.id)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/userlist']);
  }
}