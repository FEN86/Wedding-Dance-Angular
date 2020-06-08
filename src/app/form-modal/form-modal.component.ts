import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Output()  public canceled: EventEmitter<void> = new EventEmitter<void>();

  @Output()  public done: EventEmitter<void> = new EventEmitter<void>();

  formModal: FormGroup;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formModal = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
    })
  }

  submit() {
    const formData = {...this.formModal.value}

    this.userService
      .login(this.formModal.controls['email'].value, this.formModal.controls['password'].value)
      .subscribe();

    this.formModal.reset();
    this.done.emit();
  }

  onCancel(e): void {
    this.canceled.emit();
  }
}
