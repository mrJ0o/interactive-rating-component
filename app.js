const ratingItems = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('#submit-btn');
const thankCard = document.querySelector('.thank-card');
const welcomeCard = document.querySelector('.welcome-card');
const closeBtn = document.querySelector('#close-btn');
let setRating = document.querySelector('#selected-rating');

// set listener for each rating item, update result, change submit btn state to active
ratingItems.forEach((item) =>
  item.addEventListener('click', (e) => {
    setRating.textContent = e.target.value;
    submitBtn.disabled = false;
  })
);
// show a thanku page after submitting
submitBtn.addEventListener('click', (e) => {
  thankCard.classList.toggle('hidden');
  welcomeCard.classList.toggle('hidden');
  submitBtn.disabled = true;

  // clear checked radio
  ratingItems.forEach((item) => {
    item.checked = false;
  });
});

// clear all states
closeBtn.addEventListener('click', (e) => {
  welcomeCard.classList.toggle('hidden');
  thankCard.classList.toggle('hidden');
});
