import { MissingPageComponent } from './missing-page/missing-page.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: PersonListComponent },
      { path: 'details/:id', component: PersonDetailsComponent },
      { path: '**', component: MissingPageComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
