const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  const list = document.querySelector(".gallery");

images.forEach(function(image) {
  const listItem = document.createElement("li");
  listItem.className = "list";
  const imageItem = document.createElement("img");
  imageItem.src = image.url;
  imageItem.alt = image.alt;
  imageItem.className = "photo";
  list.appendChild(listItem);
  listItem.appendChild(imageItem);
  
});

