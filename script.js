// Hamburger menu animation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.list1').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Create speaker section dynamically

const speaker = [
  {
    imagen: './images/speakers/james-preston.jpg',
    alt: 'Speaker James Preston',
    speakerName: 'James Preston',
    workSpeaker: 'Globalcryto.tv Co-founder and comms manager at Zeitgeist',
    bioSpeaker: 'James is an accomplished tech writer and speaker and currently server.',
  },
  {
    imagen: './images/speakers/justin-Sun.jpg',
    alt: 'Speaker Justin Sun',
    speakerName: 'Justin Sun',
    workSpeaker: 'Founder of Tron',
    bioSpeaker: 'Justin Sun is the Founder of TRON, one of the world’s largest.',
  },
  {
    imagen: './images/speakers/sandeep-nailwal.jpg',
    alt: 'Speaker Sandeep Nailwal',
    speakerName: 'Sandeep Nailwal',
    workSpeaker: 'Co-founder and Chief Operations Officer at Polygon',
    bioSpeaker: 'Sandeep Nailwal is the Co-Founder and COO of Polygon.',
  },
  {
    imagen: './images/speakers/raoul-pal.jpg',
    alt: 'Speaker Raoul Pal',
    speakerName: 'Raoul Pal',
    workSpeaker: 'CEO and Co-founder of Real Vision',
    bioSpeaker: 'Former hedge fund manager who retired at 36.',
  },
  {
    imagen: './images/speakers/michael-wu.jpg',
    alt: 'Speaker Michael Wu',
    speakerName: 'Michael Wu',
    workSpeaker: 'Co-founder and CEO of Amber Group',
    bioSpeaker: 'Michael Wu is Co-founder and CEO of Amber Group, a leading global company of trading.',
  },
  {
    imagen: './images/speakers/maarja-part.jpg',
    alt: 'Speaker Maarja Part',
    speakerName: 'Maarja Part',
    workSpeaker: 'Ceo of Yolo Group',
    bioSpeaker: 'Maarja Pärt is CEO of Yolo Group (formerly the Coingaming Group).',
  },

];

for (let i = 0; i < speaker.length; i += 1) {
  const cardSpeaker = document.createElement('div');
  cardSpeaker.classList.add('card-speaker', `card-speaker-${i}`);
  const photo = document.createElement('div');
  photo.classList.add('photo');
  const imag = document.createElement('img');
  imag.classList.add('photo-speaker');
  imag.src = speaker[i].imagen;
  imag.alt = speaker[i].alt;
  const desSpeaker = document.createElement('div');
  desSpeaker.classList.add('des-speaker');
  const speakerName = document.createElement('h4');
  speakerName.classList.add('name-speaker');
  speakerName.textContent = speaker[i].speakerName;
  const workSpeaker = document.createElement('p');
  workSpeaker.classList.add('work-speaker');
  workSpeaker.textContent = speaker[i].workSpeaker;
  const bioSpeaker = document.createElement('p');
  bioSpeaker.classList.add('bio-speaker');
  bioSpeaker.textContent = speaker[i].bioSpeaker;
  const cardContainer = document.querySelector('.card-speaker-container');
  cardContainer.appendChild(cardSpeaker);
  cardSpeaker.appendChild(photo);
  photo.appendChild(imag);
  // cardContainer.appendChild(imag);
  cardSpeaker.appendChild(desSpeaker);
  desSpeaker.appendChild(speakerName);
  desSpeaker.appendChild(workSpeaker);
  desSpeaker.appendChild(bioSpeaker);
}

const showMore = document.querySelector('.show-more');

showMore.addEventListener('click', () => {
  for (let i = 2; i < speaker.length; i += 1) {
    const cardSpeaker = document.querySelector(`.card-speaker-${i}`);

    if (cardSpeaker.classList.contains('active')) {
      cardSpeaker.classList.remove('active');
    } else {
      cardSpeaker.classList.add('active');
    }
  }
});
