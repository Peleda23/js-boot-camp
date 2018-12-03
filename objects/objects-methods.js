let restaurant = {
  name: 'Bambola',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize){
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function(partySize){
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function(people){
    this.guestCount = this.guestCount - people;
  }
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));