



const loadPhots = () => {
     fetch('https://jsonplaceholder.typicode.com/photos')
          .then(res => res.json())
          .then(data => displayPhots(data));
}

loadPhots();

const displayPhots = photos => {
     // console.log(photos);
     const photoContainer = document.getElementById("photo-container");

     photos.forEach(photo => {
          // console.log(photo);
          const div = document.createElement("div");
          div.classList.add("col");
          div.innerHTML = `
          <div class="card h-100 border border-3 rounded-2 shadow-lg">
               <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
               <div class="card-body">
                    
                    <p class="card-text">${photo.title}</p>
                    <button onclick="loadSignglePhoto('${photo.id}')">Details</button>
               </div>
          </div>
          `
          photoContainer.appendChild(div);
     });
}

const loadSignglePhoto = phtoId => {
     // console.log(phtoId);
     const url = `https://jsonplaceholder.typicode.com/photos/${phtoId}`
     console.log(url);
     fetch(url)
          .then(res => res.json())
          .then(data => displaySinglePhoto(data))

}

const displaySinglePhoto = photo => {
     console.log(photo);

     const singlePhoto = document.getElementById("single-photo");
     singlePhoto.innerHTML = '';
     const div = document.createElement("div");

     div.classList.add("card")
     div.innerHTML = `
          <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
          <div class="card-body">
               <h5 class="card-title">${photo.id}</h5>
               <p class="card-text">${photo.title}</p>
               
          </div>
     `
     singlePhoto.appendChild(div);
}