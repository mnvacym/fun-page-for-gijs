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

function getImage(currentImage, b, c, d, e, f, g, h, i, option, animation, position) {
  function showImage(image) {
    document.querySelector(currentImage).classList.add('show');
    document.querySelector(b).classList.remove('show');
    document.querySelector(c).classList.remove('show');
    document.querySelector(d).classList.remove('show');
    document.querySelector(e).classList.remove('show');
    document.querySelector(f).classList.remove('show');
    document.querySelector(g).classList.remove('show');
    document.querySelector(h).classList.remove('show');
    document.querySelector(i).classList.remove('show');
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
  '.queue',
  '.auditor',
  '.engineer',
  '.spartan',
  '.bonus',
  '.logo',
  'select-pusher',
  'shake',
  'position'
);
getImage(
  '.captain',
  '.pusher',
  '.keeper',
  '.queue',
  '.auditor',
  '.engineer',
  '.spartan',
  '.bonus',
  '.logo',
  'select-captain',
  'rubberBand',
  'position'
);
getImage(
  '.keeper',
  '.captain',
  '.pusher',
  '.queue',
  '.auditor',
  '.engineer',
  '.spartan',
  '.bonus',
  '.logo',
  'select-keeper',
  'tada',
  'position'
);
getImage(
  '.queue',
  '.keeper',
  '.captain',
  '.pusher',
  '.auditor',
  '.engineer',
  '.spartan',
  '.bonus',
  '.logo',
  'select-queue',
  'jello',
  'position'
);
getImage(
  '.auditor',
  '.keeper',
  '.captain',
  '.pusher',
  '.queue',
  '.engineer',
  '.spartan',
  '.bonus',
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
  '.queue',
  '.auditor',
  '.spartan',
  '.bonus',
  '.logo',
  'select-engineer',
  'zoomInDown',
  'position'
);

getImage(
  '.spartan',
  '.keeper',
  '.captain',
  '.pusher',
  '.queue',
  '.auditor',
  '.engineer',
  '.bonus',
  '.logo',
  'select-spartan',
  'zoomInDown',
  'position'
);

getImage(
  '.bonus',
  '.keeper',
  '.captain',
  '.pusher',
  '.queue',
  '.auditor',
  '.engineer',
  '.spartan',
  '.logo',
  'select-bonus',
  'rotateIn',
  'position'
);
getImage(
  '.logo',
  '.keeper',
  '.captain',
  '.pusher',
  '.queue',
  '.auditor',
  '.engineer',
  '.spartan',
  '.bonus',
  'end',
  'fade-in'
);
getImage(
  '.thank-you',
  '.keeper',
  '.captain',
  '.pusher',
  '.queue',
  '.auditor',
  '.engineer',
  '.spartan',
  '.bonus',
  'end',
  'fade-in'
);
document.getElementById('end').addEventListener('click', function() {
  document.querySelector('.dropdown').classList.add('hide');
});
