import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  imports: [NgIf]
})
export class LoadingComponent {
  @Input() loading: boolean = false;
}