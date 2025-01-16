import { NgClass, NgFor, NgIf } from "@angular/common";
import { Component, Input, SimpleChanges } from "@angular/core";

export interface Alert {
  success: boolean;
  message?: string;
  subMessages?: string[];
}

@Component({
  selector: "app-alert",
  standalone: true,
  templateUrl: "./alert.component.html",
  imports: [NgIf, NgClass, NgFor]
})
export class AlertComponent {
  @Input({ required: true }) result: Alert | null = null;
  @Input() successTimeout: number | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['result'].currentValue && changes['result'].currentValue.success && this.successTimeout) setTimeout(() => this.result = null, this.successTimeout);
  }
}