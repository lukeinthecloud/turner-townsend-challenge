import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageErrorComponent } from './view/components/featured-playlists/components/page-error/page-error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./view/components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'playlists',
    loadChildren: () => import('./view/components/featured-playlists/featured-playlists.module').then(m => m.FeaturedPlaylistsModule)
  },
  { path: '**', component: PageErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

