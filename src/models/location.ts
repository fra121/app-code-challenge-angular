import { Street } from './street';
import { Timezone } from './timezone';
import { Coordinate } from './coordinate';

export class Location {
	street: Street;
	city: string;
	state: string;
	postcode: string;
	coordinates: Coordinate;
	timezone: Timezone;
  country: string;
}
