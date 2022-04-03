import {Pipe, PipeTransform} from "@angular/core";
import {Objects} from "./entities.services";

@Pipe({
  name: 'searchObjects'
})
export class SearchPipe implements PipeTransform{
  transform(entities: Objects[], search = ''): Objects[] {
    if (!search.trim()) {
        return entities
    }

    return entities.filter(entity => {
      return entity.name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
