const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchTerm");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("showMoreButton");
const accessKey = "d1mi3UHG4JFqoPBEujB9ozI6Yg5PRmHV7JIgXwMex1I";

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const res = await fetch(url);
  const data = await res.json();

  if(page === 1){
    searchResult.innerHTML = ""
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMoreButton.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreButton.addEventListener("click", () => {
  page++;
  searchImages();
});
