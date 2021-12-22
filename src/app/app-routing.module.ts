import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { ResultComponent } from './result/result.component';
import { SelectprofileComponent } from './selectprofile/selectprofile.component';



const routes: Routes = [
{ path: '', redirectTo: 'selectprofile', pathMatch: 'full' },
{ path: 'selectprofile', component:SelectprofileComponent },
{ path: 'createcategory', component:CreatecategoryComponent },
{ path: 'categorydetails', component:CategorydetailsComponent },
{ path: 'result', component:ResultComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
