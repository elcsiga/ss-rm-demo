import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrListComponent } from './cr/components/cr-list/cr-list.component';
import { CrViewComponent } from './cr/components/cr-view/cr-view.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './app.state';

const appRoutes: Routes = [
  {
    path: 'cr',
    component: CrListComponent,
  },
  { path: 'cr/:id',
    component: CrViewComponent,
  },
  { path: '',
    redirectTo: '/cr',
    pathMatch: 'full',
  },
  { path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CrListComponent,
    CrViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
