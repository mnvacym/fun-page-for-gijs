document.querySelector('.click-me').addEventListener('click', function() {
  document.querySelector('.entrance').style.display = 'none';
  document.querySelector('.fun-part').style.display = 'block';
});

function showDropdown() {
  document.querySelector('.dropdown-content').classList.toggle('show');
  document.querySelector('.dropdown-content').classList.add('bounceInUp');
  document.querySelector('i').classList.toggle('transform-arrow');
}

document.querySelector('.dropbtn').addEventListener('click', showDropdown);

window.onclick = function hideTheDropdown(event) {
  if (!event.target.matches('.dropbtn')) {
    document.querySelector('i').classList.remove('transform-arrow');
    let dropdowns = document.getElementsByClassName('dropdown-content');

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function getImage(currentImage, b, c, d, option, animation, position) {
  function showImage(image) {
    document.querySelector(currentImage).classList.add('show');
    document.querySelector(b).classList.remove('show');
    document.querySelector(c).classList.remove('show');
    document.querySelector(d).classList.remove('show');
    image.preventDefault();
    document.querySelector(currentImage).classList.add(animation);
    document.querySelector(currentImage).classList.add(position);
  }
  document.getElementById(option).addEventListener('click', showImage);
}
getImage('.astronaut', '.professor', '.dealer', '.crazy', 'select-astronaut', 'shake', 'right');
getImage('.professor', '.astronaut', '.dealer', '.crazy', 'select-professor', 'rubberBand', 'left');
getImage('.dealer', '.professor', '.astronaut', '.crazy', 'select-dealer', 'tada', 'up');
getImage('.crazy', '.dealer', '.professor', '.astronaut', 'select-crazy', 'lightSpeedIn', 'down');
