import { Injectable } from '@angular/core';
import { Person } from 'src/models/person';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  person: Person;

  constructor() { }
}
