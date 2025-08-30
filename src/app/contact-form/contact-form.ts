import { Component, EventEmitter, Output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { CommonModule } from "@angular/common";

@Component({
  selector: "app-contact-form",
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./contact-form.html",
  styleUrl: "./contact-form.scss",
})
export class ContactForm {
  submitted: boolean = false;
  @Output() formSubmitted = new EventEmitter<void>();

  contactForm = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/),
    ]),
    querytype: new FormControl("", Validators.required),
    message: new FormControl("", [Validators.required]),
    accept: new FormControl(false, [Validators.requiredTrue]),
  });

  submitForm() {
    if (this.contactForm.valid) {
      this.submitted = true;
      this.formSubmitted.emit();
      this.contactForm.reset();
    } else {
      // Mark all controls as touched to show errors
      this.contactForm.markAllAsTouched();
      return;
    }

    // proceed with form submission
    console.log(this.contactForm.value);
  }
}
