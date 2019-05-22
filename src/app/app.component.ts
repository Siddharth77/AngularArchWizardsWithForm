import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form;
  title = 'angulararchwizard';
  payLoad = null;

  constructor() {
    const group: any = {};
    group.firstName = new FormControl('', Validators.required);
    this.form = new FormGroup(group);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
