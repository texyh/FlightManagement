
export class Flight {

    constructor(
        id?: String,
        courier?: String,
        departureTime?: Date,
        arrivalTime?: Date,
        economyPrice?: number,
        businessPrice?: number,

    ) {}

    get flightDuration() {
        return '' // todo implement
    }
}
