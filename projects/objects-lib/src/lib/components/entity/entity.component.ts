import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {EntitiesServices, Objects} from "../../services/entities.services";
import {switchMap} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'al-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit, OnDestroy {
  form: FormGroup;
  entity: Objects
  submitted: boolean = false
  uSub$: Subscription
  constructor(private route: ActivatedRoute,
              private entitiesServices: EntitiesServices,
              private alert: AlertService) { }

  ngOnInit() {
    this.route.params.pipe(
       switchMap((params: Params)  => {
         return this.entitiesServices.getById(params['id'])
        })
    ).subscribe( (entity: Objects) => {
          this.entity = entity
          this.form = new FormGroup({
            name:  new FormControl(entity.name,  Validators.required),
            population:  new FormControl(entity.population, Validators.required),
          })
    })
  }

  submit() {
    if (this.form?.invalid) {
      return
    }
    this.submitted = true
    this.uSub$ = this.entitiesServices.upDate({
        ...this.entity,
        name: this.form.value.name,
        population: this.form.value.population
    }).subscribe( () => {
      this.submitted = false
      this.alert.success('Объект был обновлен!')
    })
  }
  ngOnDestroy() {
    if (this.uSub$) {
      this.uSub$.unsubscribe();
    }
  }
}
