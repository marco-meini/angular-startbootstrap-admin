import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() inputControl!: FormControl;
  @Input() id!: string;
  @Input() type: string = 'input';
  @Input() placeholder: string = '';
  @Input() label: string = '';
}