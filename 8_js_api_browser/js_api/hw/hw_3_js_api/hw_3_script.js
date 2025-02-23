let counter = 2;
let isFetching = false;
// Secret key
// wKUQV2wZFilKkHnRh-7vDuLq_TbXQS6WcUho80C5rZw
document.addEventListener("DOMContentLoaded", Main);
document.addEventListener("scroll", async function () {
  // Получаем высоту элемента,
  // на котором произошло событие
  //   console.log(document.documentElement.scrollTop);
  //   console.log(document.documentElement.clientHeight); //высота страницы на текущий момент
  //   console.log(document.documentElement.scrollHeight);//хз

  //   console.log(`текущая прокрутка ${document.documentElement.scrollTop}`);
  //   console.log(`точка прокрутки ${document.documentElement.clientHeight - 100}`);

  const page = document.documentElement;

  if (
    page.scrollTop + page.clientHeight >= page.scrollHeight - 100 &&
    !isFetching
  ) {
    counter++;
    const data = await fetchPhotoList(counter);
    let imgsHTML = "";
    data.forEach((element) => {
      imgsHTML += createImg(element);
    });
    photoContainerEl.insertAdjacentHTML("beforeend", imgsHTML);
  }
});

const photoContainerEl = document.querySelector("#photos-container");

async function fetchPhotoList(page) {
  try {
    isFetching = true;
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}`,
      {
        headers: {
          Authorization:
            "Client-ID 362587eoy9AFURsnHwx7sl2vS3JtG76Pp6J5Et5mk2M",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`ошибка ,сервер статус ${response.status}`);
    }

    return await response.json();
  } finally {
    isFetching = false;
  }
}

async function Main() {
  const data = await fetchPhotoList(counter);
  let imgsHTML = "";
  data.forEach((element) => {
    imgsHTML += createImg(element);
  });
  photoContainerEl.innerHTML = imgsHTML;
}

function createImg(objInfo) {
  return `<div class="photo">
        <img src="${objInfo.urls.regular}" alt="" />
      </div>`;
}