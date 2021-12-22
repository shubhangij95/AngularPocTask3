import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Catogories } from '../model/catogories';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  catgoerylist!:Catogories[];

  catgoeryRegForm!: FormGroup;

  constructor(private cs:CommonService,private fb:FormBuilder) { }
 
  ngOnInit(): void {
    this.catgoeryRegForm=this.fb.group({
      cId:[],
      cName:[''],
      rating:[''],
      
      subCategories:this.fb.array([this.fb.group({
        sId:[''],
        sName:['']
      })])
      
    })
    
  }

  
  


  onRegister()
  {
    this.cs.postcategorydata(this.catgoeryRegForm.value).subscribe();
    console.log(this.catgoeryRegForm.value);
    this.catgoeryRegForm.reset();
  }
  getSubCatg(){
    return this.fb.group({
      sId :[''],
      sName:['']
    })
  }
  addSubCat(){
    this.SubcatArray.push(this.getSubCatg());

  }
  removeSubcatArray(index:any){
    this.SubcatArray.removeAt(index);
  }
  get SubcatArray(){
    return <FormArray>this.catgoeryRegForm.get('subCategories');
  }



}
