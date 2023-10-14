import { Component } from '@angular/core';

import { AppService } from '@app/app.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabsComponent {
  constructor(public app: AppService) {}

  userCanManageSomething(): boolean {
    return Object.values(this.app.user.permissions).some(x => x === true);
  }
}
