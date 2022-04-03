import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main-component/main.component";
import {AboutComponent} from "./components/about/about.component";
import {EntitiesComponent} from "./components/entities/entities.component";
import {EntityComponent} from "./components/entity/entity.component";
import {AboutExtraComponent} from "./components/about-extra/about-extra.component";

//http:localhost:4200/ -> MainComponent
//http:localhost:4200/about -> AboutComponent
//http:localhost:4200/about/extra -> AboutComponent
//http:localhost:4200/entities -> EntitiesComponent
//http:localhost:4200/entities/:id/entity -> EntityComponent
const routes: Routes = [
  {path: '', component: EntitiesComponent},
  {path: 'entities', component: EntitiesComponent},
  {path: 'entities/:id/entity', component: EntityComponent},
  {path: 'about', component: AboutComponent, children: [
      {path: 'extra', component: AboutExtraComponent}
    ]
  },
  {path: '**', redirectTo: ''},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ObjectsLibRoutingModule {

}
