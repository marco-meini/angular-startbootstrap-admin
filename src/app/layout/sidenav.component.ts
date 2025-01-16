import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

interface IMenu {
  active: boolean,
  collapsed: boolean,
  text: string,
  icon: string,
  items: {
    active: boolean,
    icon: string,
    text: string,
    path: string;
  }[];
}

@Component({
  selector: "app-sidenav",
  standalone: true,
  templateUrl: "./sidenav.component.html",
  imports: [RouterModule, NgbCollapseModule, CommonModule]
})
export class SidenavComponent {
  sections: { title: string, items: IMenu[]; }[] = [
    {
      title: 'Sezione 1', items: [
        {
          active: false,
          collapsed: true,
          text: 'Menu 1',
          icon: 'bi bi-people',
          items: [
            { active: false, icon: 'bi bi-people-fill', text: 'Item 1', path: '/' },
            { active: false, icon: 'bi bi-key-fill', text: 'Item 2', path: '/' }
          ]
        }
      ]
    },
    {
      title: 'Sezione 2', items: [
        {
          active: false,
          collapsed: true,
          text: 'Menu 2',
          icon: 'bi bi-piggy-bank',
          items: [
            { active: false, icon: 'bi bi-people-fill', text: 'Item 3', path: '/' },
            { active: false, icon: 'bi bi-key-fill', text: 'Item 4', path: '/' }
          ]
        }
      ]
    }
  ];

  currentRoute: string = '';

  constructor(private router: Router) { }

  toggleMenu(route: string) {
    for(let item of this.sections) {
      for (let menu of item.items) {
        for (let subMenuItem of menu.items) {
          if (subMenuItem.path === route) {
            subMenuItem.active = true;
            menu.collapsed = false;
            menu.active = true;
          }
        }
      }
    }
  }


  ngOnInit() {
    this.toggleMenu(this.router.url);

    this.router.events.subscribe(() => {
      this.toggleMenu(this.router.url);
    });
  }
}