import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  addContact() {
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, 'Sudha', 'Rani');
    contact.phoneNumbers = [new ContactField('mobile', '9177420927')];
    contact.save().then(
      () => alert('Contact saved!'),
      (error: any) => console.error('Error saving contact.', error)
    );
  }
}
