import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comentario} from '../prueba'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acerca-de-item',
  templateUrl: './acerca-de-item.component.html',
  styleUrls: ['./acerca-de-item.component.css']
})
export class AcercaDeItemComponent implements OnInit {
  comentarios : any[]=[];
  comentarios$: Observable<Comentario[]>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe(data=>{
      this.comentarios = data;
    })
  }

}
