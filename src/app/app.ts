import { Component, signal } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ContactForm } from "./contact-form/contact-form";

@Component({
  selector: "app-root",
  imports: [ContactForm, CommonModule],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("contactForm");
  IsSuccessMessage: boolean = false;
  onSubmitForm() {
    this.IsSuccessMessage = true;
  }
}
