import { Courier } from "./courier.model";
import { State } from "./state.model";


export class Flight {

    constructor(
        public id?: String,
        public courier?: Courier,
        public departure?: String,
        public arrival?: String,
        public departureTime?: Date,
        public arrivalTime?: Date,
        public economyPrice?: number,
        public businessPrice?: number,

    ) {}

    get flightDuration() {
        return ''; // todo implement
    }

    get destination() {
        return `${this.departure} to ${this.arrival}`;
    }
}
