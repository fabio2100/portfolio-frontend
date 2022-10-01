import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Educacion} from '../educacion'
import { Observable } from 'rxjs';
import { faPenSquare,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {

  educaciones : any[]=[];
  faPenSquare = faPenSquare;
  faTrash=faTrash;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/educations').subscribe(data=>{
      this.educaciones = data;
    })
  }

}
