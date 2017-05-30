import { Component } from '@angular/core';

import { CodePage } from '../code/code';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CodePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
