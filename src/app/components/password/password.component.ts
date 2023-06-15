import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `
  ]
})
export class PasswordComponent  {
  value1!: string;

  value2!: string;

  value3!: string;

  value4!: string;

}
