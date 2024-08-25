const divCont = document.querySelector('div.container');

// console.log(apiCat);
//const parseCat = JSON.parse(apiCat);
//console.log(parseCat);
apiCat.forEach(element => {
  const newDivElem = document.createElement('div');
  newDivElem.classList.add(element.class);
  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', element.pic);
  imgEl.setAttribute('width', 200);
  const txtEl = document.createElement('p');
  txtEl.classList.add(element.class_p);
  txtEl.innerHTML = `${element.id}, ${element.name}, ${element.breed}`;
  newDivElem.appendChild(txtEl);
  newDivElem.appendChild(imgEl);
  divCont.appendChild(newDivElem);
});

