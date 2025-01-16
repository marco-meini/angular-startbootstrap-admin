import { Component } from "@angular/core";
import { TitleComponent } from "../shared/components/title.component";


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  standalone: true,
  imports: [TitleComponent]
}) // This is a decorator
export class GroupsComponent {
  title = 'Groups';
}