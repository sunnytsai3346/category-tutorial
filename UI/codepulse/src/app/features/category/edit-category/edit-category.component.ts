import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent implements OnInit{
    constructor(private categoryService:CategoryService, private router:Router, private route:ActivatedRoute) {
    
  }
  model : Category = {
    id: '',
    name: '',
    urlHandle:''
  } 
    
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');
        if (id){
          this.categoryService.getCategory(id)
          .subscribe({
            next:(res)=>{
              this.model = res;

            },
            error:(error) =>{
              console.log(error);
            }
          }
        )}
        
      }

    });
  }


  //
  onFormSubmit(){
    this.categoryService.updateCategory(this.model.id,this.model)
    .subscribe({
      next: (response)=>{
        console.log(response);
        this.router.navigate(['admin/categories']);
      },
      error:(error) =>{
        console.log(error);
      }
    })
  }

}
