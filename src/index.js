import * as moment from 'moment';

const images = [{
  pic: 'images/IMG_2646.JPG',
  alt: 'Notebook with German map design.',
  description: 'June - July 2014'
}, {
  pic: 'images/IMG_2642.JPG',
  alt: 'Notebook with white, blue and red New England map design.',
  description: "November 2014 - April 2015"
}, {
  pic: 'images/IMG_2643.JPG',
  alt: 'Notebook with tan spine and fruit print',
  description: 'May - July 2020'
}, {
  pic: 'images/IMG_2644.JPG',
  alt: 'Notebook with tan spine and fruit print.',
  description: 'July - November 2020'
}, {
  pic: 'images/IMG_2645.JPG',
  alt: 'Notebook with navy spine and winter print.',
  description: 'November 2020 - Present'
}];

for(let i = 0; i<images.length; i++) {
  const img_deets = images[i];
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", img_deets.pic);
  imgElement.setAttribute("alt", img_deets.alt);

  img_deets.element = imgElement;
  thumbnails.append(imgElement);

  imgElement.addEventListener("click", () =>{
    const featured = document.getElementById('featured');
    featured.setAttribute("src", img_deets.pic);
    featured.setAttribute("alt", img_deets.alt);

    const current_description= document.getElementById('current_description');
    current_description.textContent = img_deets.description;
  })

  imgElement.addEventListener("mouseover", () =>{
    imgElement.setAttribute('class', 'color');
  })

  imgElement.addEventListener("mouseout", () => {
    imgElement.removeAttribute('class')
  })
}

const hideThumbnails = () => {
  thumbpanel = document.getElementById('thumbnails')
  thumbpanel.style.display="none";
}

const hidethumbButton = document.getElementById('hidethumb');
hidethumbButton.addEventListener('click', hideThumbnails);

const showThumbnails = () => {
  thumbpanel = document.getElementById('thumbnails')
  thumbpanel.style.display="block";
}

const showthumbButton = document.getElementById('showthumb');
showthumbButton.addEventListener('click', showThumbnails);


document.getElementById("date").innerHTML = moment("20130601", "YYYYMMDD").fromNow();


