import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Alert, AlertComponent } from "./alert.component";
import { LoadingComponent } from "./loading.component";
import { NgIf } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-modal-edit",
  templateUrl: "./edit.component.html",
  imports: [AlertComponent, LoadingComponent, NgIf]
})
export class EditComponent {
  @Output() save = new EventEmitter<void>();
  private modalEdit = inject(NgbModal);
  editResult: Alert | null = null;
  title: string = "";
  loading: boolean = false;

  @ViewChild("modalEdit") eventDetail!: TemplateRef<any>;


  openEditModal(title: string) {
    this.title = title;
    this.editResult = null;
    this.modalEdit.open(this.eventDetail).result;
  }

  closeEditModal() {
    this.modalEdit.dismissAll();
  }

  onSave() {
    this.save.emit();
  }
}