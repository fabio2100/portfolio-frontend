import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Educacion} from '../educacion'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {

  educaciones : any[]=[];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/educations').subscribe(data=>{
      this.educaciones = data;
    })
  }

}
