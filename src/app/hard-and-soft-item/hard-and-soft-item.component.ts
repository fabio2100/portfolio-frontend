import { Component, OnInit } from '@angular/core';
import { faPenSquare,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hard-and-soft-item',
  templateUrl: './hard-and-soft-item.component.html',
  styleUrls: ['./hard-and-soft-item.component.css']
})
export class HardAndSoftItemComponent implements OnInit {

  faPenSquare = faPenSquare;
  faTrash=faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
