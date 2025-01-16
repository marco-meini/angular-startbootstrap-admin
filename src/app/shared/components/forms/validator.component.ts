import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  standalone: true,
  selector: "form-validator-label",
  templateUrl: "./validator.component.html",
  imports: [NgIf],
})
export class ValidatorLabelComponent {
  @Input() control!: FormControl;
  @Input() requiredMessage: string = "";
  @Input() emailMessage: string = "";
}