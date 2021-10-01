import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BaseResponse } from '../../models/base-response';
import { Person } from '../../models/person';

@Component({
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  personList: Person[] = [];
  errorMessage: string;
  loading = true;

  constructor(
    personService: PersonService
  ) {
    personService.get().subscribe(response => {
      if (response instanceof HttpResponse) {
        this.personList = this.filterTheList((<BaseResponse<Person>>response.body).results);
        this.loading = false;
      }
    }, error => {
      this.errorMessage = error.error;
    });
  }

  ngOnInit(): void {
  }

  /**
   * Usually I would do this using a query on a backend
   * Filters the person array according to the assignment
   * @param list Person array to be filtered
   * @returns Filtered array
   */
  filterTheList(list: Person[]) {
    let filteredList = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].dob.age < 18) {
        continue;
      }
      const timezone = +list[i].location.timezone.offset.replace(':', '');

      if (timezone >= -100 && timezone <= 100) {
        filteredList.push(list[i]);

        if (filteredList.length === 15) {
          break;
        }
      }
    }

    return filteredList;
  }

}
