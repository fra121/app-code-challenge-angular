import { DataShareService } from './../../../services/data-share.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/models/person';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss']
})
export class PersonItemComponent implements OnInit {

  @Input() person: Person;

  constructor(
    private router: Router,
    private dataShareService: DataShareService
  ) { }

  ngOnInit(): void {
  }

  goToDetails() {
    // Usually I would handle this by going to the page with ID
    // and fetching the rest of the needed data from backend using that ID
    // but since this API doesn't support it I will use this service
    this.dataShareService.person = this.person;
    this.router.navigate(['/details', this.person?.id?.value || 0]);
  }

}
