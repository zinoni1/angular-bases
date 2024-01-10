import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    MainPageComponent,
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
