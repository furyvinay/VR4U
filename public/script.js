// Get the search input element
const searchInput = document.getElementById('searchInput');

// Get the card container element
const cardContainer = document.getElementById('cardContainer');

// Function to filter the cards based on the search input value
const filterCards = () => {
  const searchValue = searchInput.value.toLowerCase();
  const cards = cardContainer.getElementsByClassName('card');

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardId = card.getAttribute('data-id');
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
};

// Add event listener to the search input
searchInput.addEventListener('input', filterCards);
