import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: any[];
  activePage: String = 'Home';

  constructor(){
    this.menuItems = [
      {class: 'nav-link active', href: '#', name: 'Home', id: 0},
      {class: 'nav-link', href: 'https://github.com/cagritrk', name: 'GitHub', target: "_blank", id: 1},
      {class: 'nav-link', href: '#', name: 'TodoList', id: 2},
      {class: 'nav-link', href: '#', name: 'About', id: 3},
      {class: 'nav-link', href: '#', name: 'Contact', id: 4},
    ];
  }

  setActivePage (name:String) {
    this.activePage = name;
    console.log("Active page is :" + this.activePage);
  }
}
