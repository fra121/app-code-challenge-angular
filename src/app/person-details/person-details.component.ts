import { PersonService } from './../../services/person.service';
import { DataShareService } from './../../services/data-share.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/models/person';
import { HttpResponse } from '@angular/common/http';
import { BaseResponse } from 'src/models/base-response';

@Component({
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  person: Person;
  loading = true;
  errorMessage: any;
  formatedDate: string;

  constructor(
    dataShareService: DataShareService,
    personService: PersonService
  ) {
    // Usually I would handle this by going to the page with ID
    // and fetching the rest of the needed data from backend using that ID
    // but since this API doesn't support it I will use this DataShareService
    // service to get the selected person
    if (!!!dataShareService.person) {
      this.loading = true;

      personService.get(1).subscribe(response => {
        if (response instanceof HttpResponse) {
          this.person = (<BaseResponse<Person>>response.body).results[0];
          this.formatedDate = new Date(this.person.dob.date).toLocaleDateString("en-US")
          this.loading = false;
        }
      }, error => {
        this.errorMessage = error.error;
      });
    } else {
      this.person = dataShareService.person;
      this.loading = false;
    }
  }

  ngOnInit(): void {
  }

}
