// Hide the Search Icon on:focus for Search Input
const searchBar = document.querySelectorAll('.search-bar');
const searchIcon = document.querySelector('.search-icon');

searchBar.forEach((search) => {

  search.addEventListener('mouseover', handleMouseOver);
  search.addEventListener('mouseout', handleMouseOut);
  search.addEventListener('input', handleInputChange);

  search.addEventListener('focus', () => {
    searchIcon.classList.add('hide');
  });

  search.addEventListener('blur', () => {
    searchIcon.classList.remove('hide');
  });

  function handleMouseOver() {
    if (search.value.trim() !== '') {
      searchIcon.style.display = 'none';
    }
  }

  function handleMouseOut() {
    if (search.value.trim() !== '') {
      searchIcon.style.display = 'none';
    }
  }

  function handleInputChange() {
    if (search.value.trim() === '') {
      searchIcon.style.display = 'inline-block';
    } else {
      searchIcon.style.display = 'none';
    }
  }
});


// Sticky Navigation bar
window.addEventListener('scroll', () => {
  let stickyHeader = document.getElementById('sticky-header');
  let heroContent = document.getElementById('hero-content');
  let threshold = heroContent.offsetTop + heroContent.offsetHeight;

  if (window.scrollY >= threshold) {
    stickyHeader.classList.add('sticky');
  } else {
    stickyHeader.classList.remove('sticky');
  }

});


// changing the button icon on hover
const sButtons = document.querySelectorAll('.services-btn');

sButtons.forEach(function (sButton) {
  const psIcon = sButton.querySelector('.ps-icon');

  sButton.addEventListener('mouseover', function () {
    psIcon.src = 'assets/images/ps-icon-hover.svg';
  });

  sButton.addEventListener('mouseout', function () {
    psIcon.src = 'assets/images/ps-icon.svg';
  });
});
