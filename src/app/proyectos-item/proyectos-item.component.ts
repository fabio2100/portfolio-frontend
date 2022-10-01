import { Component, OnInit } from '@angular/core';
import { faPenSquare,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {


  faPenSquare = faPenSquare;
  faTrash=faTrash;
  constructor() { }

  ngOnInit(): void {
  }

}
