let container = document.querySelector(".container");
let pageContainer = document.querySelector(".pg_btn");
let limit = 10;
let totalPage;
let currPage;

const loadApi = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      hello(data);
    });
};

function createBtn(index) {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = index;
  pageContainer.appendChild(btn);
}

function btnGet(totalPage) {
  for (let index = 1; index <= totalPage; index++) {
    createBtn(index);
  }
}

function setPage(page) {
  let element = document.querySelectorAll(".card");
  console.log(element.length);
  totalPage = Math.ceil(element.length / limit);
  const prevRange = (page - 1) * limit;
  const currRagne = prevRange + limit;
  element.forEach((div, ind) => {
    div.style.display = "none";

    if (ind >= prevRange && ind < currRagne) {
      div.style.display = "block";
    }
  });
}

function addEvent(indBtn) {
  indBtn.forEach(e => {
    e.addEventListener("click", () => {
      setPage(e.innerHTML);
    })
  })
}

function hello(params) {
  params.map((e) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    
    <h1>${e.id}</h1>
    <h1>${e.title}</h1>

  `;
    container.appendChild(div);
  });
  setPage(1);
  btnGet(totalPage);
  console.log(totalPage);
  let indBtn = document.querySelectorAll(".btn");

  addEvent(indBtn);
}

window.onload = () => {
  loadApi();
};
