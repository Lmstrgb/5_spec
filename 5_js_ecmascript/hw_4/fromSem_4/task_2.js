console.log(`Задание 2`);
const nasaUrl =
  "https://api.nasa.gov/planetary/apod?api_key=AvBvgTb51bvUT1QOf1fMDcMTPuwDFcxrkc3kFpv2&count=10";

const getData2 = async (argUrl) => {
  try {
    // получение данных от сервера
    const res = await fetch(argUrl);
    //получене данных от res
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchData = await getData2(nasaUrl);
console.log("----------------------");
console.log(fetchData);

/* <figure>
<img src="/media/cc0-images/elephant-660-480.jpg" alt="Elephant at sunset" />
<figcaption>An elephant at sunset</figcaption>
</figure>; */
const CatalogEl = document.querySelector("div.catalog");

fetchData.forEach((element) => {
  CatalogEl.insertAdjacentHTML(
    "beforeend",
    `
<figure>
<img src="${element.url}" />
<figcaption>${element.explanation}</figcaption>
</figure>
`
  );
});