import { Component, OnInit } from '@angular/core';
import { faBell, faCommentDots, faUserTie, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = 'assets/img/logo.png'
  faBell = faBell;
  faCommentDots = faCommentDots;
  faUserTie = faUserTie;
  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

}
