import { Info } from "./info";

export class BaseResponse<T> {
	results: T[];
	info: Info;
}
