import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ObjectsLibModule} from "../../projects/objects-lib/src/lib/objects-lib.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ObjectsLibModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
