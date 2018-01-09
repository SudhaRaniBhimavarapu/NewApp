import { Component } from '@angular/core';

/**
 * Generated class for the CustomFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-footer',
  templateUrl: 'custom-footer.html'
})
export class CustomFooterComponent {

  text: string;

  constructor() {
    console.log('Hello CustomFooterComponent Component');
    this.text = '@Copy Rights Reserved.';
  }

}
