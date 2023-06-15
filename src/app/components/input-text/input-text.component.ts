import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  disabled: boolean = true;

    value1!: string;

    value2!: string;

    value3!: string;

    value4!: string;

    value5: string = 'Disabled';

}
