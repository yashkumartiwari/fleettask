import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindColorsComponent } from './find-colors/find-colors.component';

const routes: Routes = [
  {path:'' ,component: FindColorsComponent},
  {path: 'home', component: FindColorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
