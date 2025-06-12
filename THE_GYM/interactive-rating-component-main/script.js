document.addEventListener ('DOMContentLoaded', () => {
  const ratingCard = document.getElementById('rating-card');
  const thankYouCard = document.getElementById('thank-you-card');
  const ratingNumbers = document.querySelectorAll('.rating-number');
  const submitButton = document.getElementById('submit-btn')
  const   selectedRatingDisplay = document.getElementById('selected-rating-display');

  let selectedRating = null;
  ratingNumbers.forEach(number => {
    number.addEventListener('click', () => {
      ratingNumbers.forEach(num => num.classList.remove('selected'));
      number.classList.add('selected');
      selectedRating = number.textContent;
      console.log('selected rating:',selectedRating);
    });
  } );
  submitButton.addEventListener('click', () =>{
    if (selectedRating) {
      ratingCard.classList.add('hidden');
      selectedRatingDisplay.textContent = selectedRating;
      thankYouCard.classList.remove('hidden');

    } else {
      alert('Please select a rating bere submitting.');
    }
  });

});