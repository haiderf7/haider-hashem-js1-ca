// JS MA1
const loader = document.querySelector(".loaderscreen");

const resultsBag = document.querySelector(".results");


async function forTheApi() {
  try {


  const response = await fetch(
    "https://genius.p.rapidapi.com/artists/16775/songs",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "4e34bcda43mshdde7ef663126703p173f39jsnab01eb494598",
      },
    }
  );

  const json = await response.json();
  console.log(json);

  const results = json.response.songs;
 
  


  results.forEach(function (results) {
    loader.style.display = "none";
    console.log(results.annotation_count);
    console.log(results.full_title);
    console.log(results.path);
    resultsBag.innerHTML += `<a href="details.html?path=${results.path}" class="bottom">
                                  <h1 class="h1-js">${results.full_title}</h1>
                                  <h2 class="h2-h3-js">${results.annotation_count}</h2>
                                   <h3 class="h2-h3-js">${results.path}</h3>`                     
  });

 }catch (error) {
  console.log(error);

  loader.style.display = "none";
  resultsBag.innerHTML = message("error", error);
}
};

forTheApi();


