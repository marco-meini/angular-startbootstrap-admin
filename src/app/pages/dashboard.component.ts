import { Component } from "@angular/core";
import { TitleComponent } from "../shared/components/title.component";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [TitleComponent]
}) // This is a decorator
export class DashboardComponent {
  title = 'Dashboard';
}