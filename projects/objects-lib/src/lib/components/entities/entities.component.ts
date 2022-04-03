import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {EntitiesServices, Objects} from "../../services/entities.services";
import {delay} from "rxjs/operators";
import {AlertService} from "../../services/alert.service";


@Component({
  selector: 'al-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit, OnDestroy {
  entities: Objects[] = []
  entSub$: Subscription = new Subscription;
  searchStr = '' ;
  constructor(private http: HttpClient,
              private entitiesServices: EntitiesServices,
              private alert: AlertService) { }

  ngOnInit(): void {
   this.getAll();
  }
  getAll() {
    this.entSub$ = this.entitiesServices.getAll()
      .subscribe((entities:Objects[]) => {
        console.log('response', entities)
        this.entities = entities
        this.alert.success('Данные получены!')
      })
  }

  ngOnDestroy() {
    if(this.entSub$) {
      this.entSub$.unsubscribe();
    }
  }
}
