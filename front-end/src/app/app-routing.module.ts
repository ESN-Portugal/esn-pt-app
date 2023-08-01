import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { InitGuard } from './init.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'app-status',
    loadChildren: (): Promise<any> => import('@idea-ionic/common').then(m => m.IDEAAppStatusModule),
    canActivate: [InitGuard]
  },
  {
    path: 'auth',
    loadChildren: (): Promise<any> => import('@idea-ionic/auth').then(m => m.IDEAAuthModule),
    canActivate: [InitGuard]
  },
  {
    path: 'dashboard',
    loadChildren: (): Promise<any> => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [InitGuard, AuthGuard]
  },
  {
    path: 'books',
    loadChildren: (): Promise<any> => import('./books/books.module').then(m => m.BooksModule),
    canActivate: [InitGuard, AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, paramsInheritanceStrategy: 'always' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
