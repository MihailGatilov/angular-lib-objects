import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";

import {MainComponent} from "./components/main-component/main.component";
import { AboutComponent } from './components/about/about.component';
import { EntitiesComponent } from './components/entities/entities.component';
import { EntityComponent } from './components/entity/entity.component';
import { AlertComponent } from './shared/alert/alert.component';

import {AlertService} from "./services/alert.service";

import {SearchPipe} from "./services/search.pipe";

import {ObjectsLibRoutingModule} from "./objects-lib-routing.module";
import { AboutExtraComponent } from './components/about-extra/about-extra.component';

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    EntitiesComponent,
    EntityComponent,
    SearchPipe,
    AlertComponent,
    AboutExtraComponent
  ],
  imports: [
    ObjectsLibRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MainComponent
  ],
  providers: [AlertService]
})
export class ObjectsLibModule { }
