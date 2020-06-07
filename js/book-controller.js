'use-strict';

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const movieSelect = document.getElementById('movie');

function onInit() {
  populateData();
  onUpdateSelectedCount();
}

function populateData() {
  const selectedSeats = getSeletedSeatsFromStorage();
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
  const selectedMovieIndex = getSeletedMovieIndex();
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

function onUpdateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  updateSelectedCount(selectedSeats);
  const selectedSeatsCount = selectedSeats.length;
  const count = document.getElementById('count');
  const total = document.getElementById('total');
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  onUpdateSelectedCount();
});

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    onUpdateSelectedCount();
  }
});
