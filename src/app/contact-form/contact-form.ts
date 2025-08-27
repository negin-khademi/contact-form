import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-contact-form",
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./contact-form.html",
  styleUrl: "./contact-form.scss",
})
export class ContactForm {
  invalidInput!: string;
  invalidEmail: string = "";
  invalidFirstname: string = "";
  invalidLastname: string = "";
  invalidMessage: string = "";

  contactForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    lastname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/),
    ]),
    querytype: new FormControl("", Validators.required),
    message: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(140),
    ]),
    accept: new FormControl(""),
  });

  submitForm() {}
}
