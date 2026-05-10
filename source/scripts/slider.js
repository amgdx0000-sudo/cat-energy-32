const slider = document.getElementById('compare-slider');
const overlay = document.querySelector('.example__image--slim');

slider.addEventListener('input', (e) => {
  const value = e.target.value;
  overlay.style.width = `${value}%`;
});
