import { Dob } from "./dob";
import { Id } from "./id";
import { Login } from "./login";
import { Name } from "./name";
import { Picture } from "./picture";
import { Registered } from "./registered";
import { Location } from "./location";

export class Person {
	gender: string;
	name: Name;
	location: Location;
	email: string;
	login: Login;
	dob: Dob;
	registered: Registered;
	phone: string;
	cell: string;
	id: Id;
	picture: Picture;
	nat: string;
}

