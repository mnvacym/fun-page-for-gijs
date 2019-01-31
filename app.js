'use strict';

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

function getImage(currentImage, b, c, d, e, f, g, option, animation, position) {
  function showImage(image) {
    document.querySelector(currentImage).classList.add('show');
    document.querySelector(b).classList.remove('show');
    document.querySelector(c).classList.remove('show');
    document.querySelector(d).classList.remove('show');
    document.querySelector(e).classList.remove('show');
    document.querySelector(f).classList.remove('show');
    document.querySelector(g).classList.remove('show');
    image.preventDefault();
    document.querySelector(currentImage).classList.add(animation);
    document.querySelector(currentImage).classList.add(position);
  }
  document.getElementById(option).addEventListener('click', showImage);
}
getImage(
  '.pusher',
  '.captain',
  '.keeper',
  '.que',
  '.auditor',
  '.engineer',
  '.logo',
  'select-pusher',
  'shake',
  'position'
);
getImage(
  '.captain',
  '.pusher',
  '.keeper',
  '.que',
  '.auditor',
  '.engineer',
  '.logo',
  'select-captain',
  'rubberBand',
  'position'
);
getImage(
  '.keeper',
  '.captain',
  '.pusher',
  '.que',
  '.auditor',
  '.engineer',
  '.logo',
  'select-keeper',
  'tada',
  'position'
);
getImage(
  '.que',
  '.keeper',
  '.captain',
  '.pusher',
  '.auditor',
  '.engineer',
  '.logo',
  'select-que',
  'jello',
  'position'
);
getImage(
  '.auditor',
  '.keeper',
  '.captain',
  '.pusher',
  '.que',
  '.engineer',
  '.logo',
  'select-auditor',
  'heart-beat',
  'position'
);
getImage(
  '.engineer',
  '.keeper',
  '.captain',
  '.pusher',
  '.que',
  '.auditor',
  '.logo',
  'select-engineer',
  'zoomInDown',
  'position'
);
getImage(
  '.logo',
  '.keeper',
  '.captain',
  '.pusher',
  '.que',
  '.auditor',
  '.engineer',
  'end',
  'fade-in'
);
getImage(
  '.thank-you',
  '.keeper',
  '.captain',
  '.pusher',
  '.que',
  '.auditor',
  '.engineer',
  'end',
  'fade-in'
);
document.getElementById('end').addEventListener('click', function() {
  document.querySelector('.dropdown').classList.add('hide');
});
