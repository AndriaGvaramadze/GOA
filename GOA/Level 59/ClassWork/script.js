class Flight {
  constructor(flightId, status) {
    this.flightId = flightId;
    this.status = status;
  }

  getStatusMessage() {
    return `Flight ${this.flightId} has ${this.status}`;
  }
}

const flightId = prompt("Enter Flight ID:");
const status = prompt("Enter Flight Status:");

const flight = new Flight(flightId, status);

console.log(flight.getStatusMessage());


