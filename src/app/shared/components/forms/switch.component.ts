import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-switch',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './switch.component.html',
})
export class SwitchComponent {
  @Input() inputControl!: FormControl;
  @Input() id!: string;
  @Input() type: string = 'input';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  onInputChange(event: Event): void {
    event.stopPropagation();
    const value = (event.target as HTMLInputElement).checked;
    this.change.emit(value);
  }
}