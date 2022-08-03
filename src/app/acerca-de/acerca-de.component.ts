import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comentario} from '../prueba'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
 
})
export class AcercaDeComponent implements OnInit {

  //comentarios = COMENTARIOS;
  comentarios$: Observable<Comentario[]>;
  //comentariosObservante : {
  //  complete: () => console.log('Observer got a complete notification'),
  //}
  comentarios: any;
  constructor(private http: HttpClient) { 
  
  }

  

  ngOnInit(): void {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe(data=>{
      this.comentarios$ = data.total;
      
    })
  }

}
