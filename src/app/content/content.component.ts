import { Component, OnInit } from '@angular/core';
import { images } from './content.constant';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  images = images;

  constructor() { }

  ngOnInit(): void {
  }

}
