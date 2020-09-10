const img = document.querySelector("img");

async function getRyan() {
  const response = await fetch(
    "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=TG8j88CyB2aX4eKpQcJYN5riPNjQvgRa&limit=5",
    { mode: "cors" }
  );
  const ryanData = await response.json();
  img.src = ryanData.data[0].images.original.url;
}

getRyan();
