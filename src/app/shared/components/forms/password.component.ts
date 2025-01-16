import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './password.component.html',
  styles: [`
    .hide { display: none;}
  `]
})
export class PasswordComponent {
  @Input() passwordControl!: FormControl;
  @Input() id!: string;
  @Input() placeholder: string = '';
  @Input() label: string = '';

  showPassword: boolean = false;


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}