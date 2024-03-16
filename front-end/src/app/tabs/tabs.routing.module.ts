import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      {
        path: 'user',
        loadChildren: (): Promise<any> => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'manage',
        loadChildren: (): Promise<any> => import('./manage/manage.module').then(m => m.ManageModule)
      },
      {
        path: 'home',
        loadChildren: (): Promise<any> => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'menu',
        loadChildren: (): Promise<any> => import('./menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'venues',
        loadChildren: (): Promise<any> => import('./venues/venues.module').then(m => m.VenuesModule)
      },
      {
        path: 'rooms',
        loadChildren: (): Promise<any> => import('./rooms/rooms.module').then(m => m.RoomsModule)
      },
      {
        path: 'organizations',
        loadChildren: (): Promise<any> => import('./organizations/organizations.module').then(m => m.OrganizationsModule)
      },
      {
        path: 'speakers',
        loadChildren: (): Promise<any> => import('./speakers/speakers.module').then(m => m.SpeakersModule)
      },
      {
        path: 'agenda',
        loadChildren: (): Promise<any> => import('./sessions/sessions.module').then(m => m.SessionsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsComponentRoutingModule {}
