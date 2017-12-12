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

    get flightDuration(): number {
        if (!this.departureTime || !this.arrivalTime) {
            return 0;
        }

        let diff = this.arrivalTime.getTime() - this.departureTime.getTime();
        let hrs = diff / (1000 * 60 * 60);

        return Number(hrs.toFixed(2));
    }

    get destination() {
        return `${this.departure} to ${this.arrival}`;
    }

    fromDto(dto: any) {
        this.id = dto.id;
        this.departure = dto.departure;
        this.arrival = dto.arrival;
        this.departureTime = new Date(dto.departureTime);
        this.arrivalTime = new Date(dto.arrivalTime);
        this.economyPrice = dto.economyPrice;
        this.businessPrice = dto.businessPrice;
        if (dto.courier) {
            this.courier = new Courier(dto.courier.id, dto.courier.name);
        }
    }
}
