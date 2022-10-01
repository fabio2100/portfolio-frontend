import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comentario} from '../prueba'
import { Observable } from 'rxjs';
import { faPenSquare,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acerca-de-item',
  templateUrl: './acerca-de-item.component.html',
  styleUrls: ['./acerca-de-item.component.css']
})
export class AcercaDeItemComponent implements OnInit {
  personas : any[]=[];
  faPenSquare = faPenSquare;
  faTrash=faTrash;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/personas').subscribe(data=>{
      this.personas = data;
    })
  }

}
