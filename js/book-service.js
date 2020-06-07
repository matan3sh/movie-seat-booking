'use-strict';

let ticketPrice = +movieSelect.value;

function updateSelectedCount(selectedSeats) {
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
}

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

function getSeletedSeatsFromStorage() {
  return JSON.parse(localStorage.getItem('selectedSeats'));
}

function getSeletedMovieIndex() {
  return localStorage.getItem('selectedMovieIndex');
}
