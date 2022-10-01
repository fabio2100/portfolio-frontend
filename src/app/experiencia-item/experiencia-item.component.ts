import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faPenSquare,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {

  experiencias : any[]=[];
  faPenSquare = faPenSquare;
  faTrash=faTrash;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/experiencialaboral').subscribe(data=>{
      this.experiencias = data;
    })
  }

}
