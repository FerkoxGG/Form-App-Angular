import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import * as customValidators from "../../../shared/validators/validators";
import { ValidatorsService } from "../../../shared/service/validators.service";

@Component({
  templateUrl: "./register-page.component.html",
  styles: []
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      "",
      [
        Validators.required,
        Validators.pattern(this.validatorsService.firstNameAndLastNamePattern)
      ]
    ],
    email: [
      "",
      [
        Validators.required,
        Validators.pattern(this.validatorsService.emailPattern)
      ]
    ],
    username: ["", [Validators.required, this.validatorsService.cantBeStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
