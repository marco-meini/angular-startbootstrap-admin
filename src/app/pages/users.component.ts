import { Component } from "@angular/core";
import { TitleComponent } from "../shared/components/title.component";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [TitleComponent]
}) // This is a decorator
export class UsersComponent {
  title = 'Users';
}