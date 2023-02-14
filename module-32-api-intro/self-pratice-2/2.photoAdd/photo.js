const loadPhoto = async () => {

     const url = 'https://jsonplaceholder.typicode.com/photos';
     const res = await fetch(url);
     const data = await res.json();
     displayLoadPhoto(data);

     /* fetch('https://jsonplaceholder.typicode.com/photos')
          .then(res => res.json())
          .then(data => displayLoadPhoto(data)) */
}
loadPhoto();

const displayLoadPhoto = photos => {
     // console.log(photos);
     /*
      for (const photo of photos) {
          console.log(photo);
     } 
     */

     const photoContainer = document.getElementById("photo-container");
     photos.forEach(photo => {
          // console.log(photo);

          const div = document.createElement("div");
          div.classList.add("photo");
          div.innerHTML = `
          <img width="300" height:"auto" src='${photo.thumbnailUrl}'>
          <h3>${photo.title}</h3>
          `
          photoContainer.appendChild(div);

     });
}