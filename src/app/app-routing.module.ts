import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeReadComponent} from "./components/views/home/home-read/home-read.component";

const routes: Routes = [
  {
    path: '',
    component: HomeReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
