import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListCompComponent } from './user-list-comp/user-list-comp.component';


const routes: Routes = [
{ path: '', redirectTo: 'createuser', pathMatch: 'full' },
{ path: 'createuser', component:CreateUserComponent },
{ path: 'userlist', component: UserListCompComponent },
{ path: 'details/:id', component: UserDetailsComponent },
{ path: 'update/:id', component: UpdateUserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
