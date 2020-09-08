const img = document.querySelector("img");
fetch(
  "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=TG8j88CyB2aX4eKpQcJYN5riPNjQvgRa&limit=5",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data[0].images.original.url;
  });
