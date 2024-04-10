import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseAPIUrl ="https://localhost:7164";
  constructor(private http:HttpClient) { }
  
  getCategoryList() : Observable<Category[]> {
    return  this.http.get<Category[]>(this.baseAPIUrl + '/api/categories');
  }

  addCategory(model:AddCategoryRequest): Observable<void>{
    return this.http.post<void>(this.baseAPIUrl + '/api/categories',model);
    
  }

  getCategory(id:string): Observable<Category>{
    return this.http.get<Category>(this.baseAPIUrl + '/api/categories/'+id);
    
  }

  updateCategory(id:string, model :Category):Observable<Category> {
    console.log(model.name + ',' + model.urlHandle);
    return this.http.put<Category>(this.baseAPIUrl + '/api/categories/'+id ,model);

  }
  deleteCategory(id:string) : Observable<Category>{
    return this.http.delete<Category>(this.baseAPIUrl+ '/api/categories/'+id );
  }
}
