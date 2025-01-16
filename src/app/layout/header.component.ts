import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  imports: [RouterModule, NgbDropdownModule]
})
export class HeaderComponent {
  sidebarToggle() {
    console.log("sidebarToggle");
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled').valueOf().toString());
  }
}