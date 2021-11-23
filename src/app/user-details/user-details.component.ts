import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id!: number;
  user!: User;


  constructor(private router: Router,
    public service: CommonService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getSingleUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/userlist']);
  }
}
