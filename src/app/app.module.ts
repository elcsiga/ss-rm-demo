import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrListComponent } from './components/cr/cr-list/cr-list.component';
import { CrViewComponent } from './components/cr/cr-view/cr-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
