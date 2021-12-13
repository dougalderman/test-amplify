import { Component } from '@angular/core';

import { DataStore } from '@aws-amplify/datastore';
import { UntitledModel } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-amplify';

  async ngOnInit() {
    await DataStore.save(
      new UntitledModel({
      "str": "Lorem ipsum dolor sit amet",
      "num": 1020,
      "bool": true
    })
  );
  }
}
