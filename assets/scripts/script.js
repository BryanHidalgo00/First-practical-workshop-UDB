let crudForm = document.querySelector(".crud");
let btnToggleForm = document.querySelector(".floatIcon");
let clickSubmit = document.querySelector("#btnSend");
let worldEvents = [];

let btnDeletes = "";

document.addEventListener("DOMContentLoaded", () => {
  worldEvents = JSON.parse(localStorage.getItem("worldEvents")) || [];
  let output = "";

  worldEvents.forEach((event, index) => {
    let { title, year, yearEnd, message, id } = event;
    let rowIndex = index + 1;

    output += `
    <div class="row row-${rowIndex % 2 === 0 ? "2" : "1"}">
            <section>
                <i class="icon fa-solid fa-heart"></i>
                <div class="details">
                    <span class="title">${title}</span>
                    <span>${year}</span>
                </div>
                <p>${message}</p>
                <div class="bottom">
                    <div class="bottom-c">
                        <btn class="btn-a1" href="#">Modify event</btn>
                        <btn class="btn-a2 btnDelete" value="${id}">Delete event</btn>
                    </div>
                    <i>- ${yearEnd}</i>
                </div>
            </section>
        </div>
    `;
  });

  rows.innerHTML = output;
  btnDeletes = document.querySelectorAll(".btnDelete");

  btnDeletes.forEach((btnDelete) => {
    btnDelete.addEventListener("click", () => {
      console.log("CLICk");

      let id = btnDelete.getAttribute("value");
      let filteredEvents = worldEvents.filter((event) => event.id != id);
      worldEvents = filteredEvents;
      let output = "";

      worldEvents.forEach((event, index) => {
        let { title, year, yearEnd, message, id } = event;
        let rowIndex = index + 1;

        output += `
            <div class="row row-${rowIndex % 2 === 0 ? "2" : "1"}">
                    <section>
                        <i class="icon fa-solid fa-heart"></i>
                        <div class="details">
                            <span class="title">${title}</span>
                            <span>${year}</span>
                        </div>
                        <p>${message}</p>
                        <div class="bottom">
                            <div class="bottom-c">
                                <btn class="btn-a1" href="#">Modify event</btn>
                                <btn class="btn-a2 btnDelete" value="${id}">Delete event</btn>
                            </div>
                            <i>- ${yearEnd}</i>
                        </div>
                    </section>
                </div>
            `;
      });

      rows.innerHTML = output;

      localStorage.setItem("worldEvents", JSON.stringify(worldEvents));
      setTimeout(() => {
        btnDeletes = document.querySelectorAll(".btnDelete");
      }, 1000);
    });
  });
});

let rows = document.querySelector(".rows");

btnToggleForm.addEventListener("click", () => {
  if (crudForm.style.display === "flex") {
    crudForm.style.display = "none";
    btnToggleForm.querySelector("i").classList.remove("fa-solid", "fa-xmark");
    btnToggleForm
      .querySelector("i")
      .classList.add("fa-sharp", "fa-solid", "fa-check");
  } else {
    btnToggleForm
      .querySelector("i")
      .classList.remove("fa-sharp", "fa-solid", "fa-check");
    btnToggleForm.querySelector("i").classList.add("fa-solid", "fa-xmark");
    crudForm.style.display = "flex";
  }
});

clickSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let year = document.querySelector("#year").value;
  let yearEnd = document.querySelector("#yearEnd").value;
  let message = document.querySelector("#message").value;
  let id = new Date().getTime();
  let worldEvent = {
    title,
    year,
    yearEnd,
    message,
    id,
  };
  worldEvents.push(worldEvent);

  let output = "";

  worldEvents.forEach((event, index) => {

    let { title, year, yearEnd, message, id } = event;
    let rowIndex = index + 1;

    output += `
    <div class="row row-${rowIndex % 2 === 0 ? "2" : "1"}">
            <section>
                <i class="icon fa-solid fa-heart"></i>
                <div class="details">
                    <span class="title">${title}</span>
                    <span>${year}</span>
                </div>
                <p>${message}</p>
                <div class="bottom">
                    <div class="bottom-c">
                        <btn class="btn-a1" href="#">Modify event</btn>
                        <btn class="btn-a2 btnDelete" value="${id}">Delete event</btn>
                    </div>
                    <i>- ${yearEnd}</i>
                </div>
            </section>
        </div>
    `;
  });

  rows.innerHTML = output;

  localStorage.setItem("worldEvents", JSON.stringify(worldEvents));
  btnDeletes = document.querySelectorAll(".btnDelete");

  btnDeletes.forEach((btnDelete) => {
    btnDelete.addEventListener("click", () => {
      console.log("CLICk");

      let id = btnDelete.getAttribute("value");
      let filteredEvents = worldEvents.filter((event) => event.id != id);
      worldEvents = filteredEvents;
      localStorage.setItem("worldEvents", JSON.stringify(worldEvents));
      let output = "";

      worldEvents.forEach((event, index) => {

        let { title, year, yearEnd, message, id } = event;
        let rowIndex = index + 1;

        output += `
            <div class="row row-${rowIndex % 2 === 0 ? "2" : "1"}">
                    <section>
                        <i class="icon fa-solid fa-heart"></i>
                        <div class="details">
                            <span class="title">${title}</span>
                            <span>${year}</span>
                        </div>
                        <p>${message}</p>
                        <div class="bottom">
                            <div class="bottom-c">
                                <btn class="btn-a1" href="#">Modify event</btn>
                                <btn class="btn-a2 btnDelete" value="${id}">Delete event</btn>
                            </div>
                            <i>- ${yearEnd}</i>
                        </div>
                    </section>
                </div>
            `;
      });

      rows.innerHTML = output;
      setTimeout(() => {
        btnDeletes = document.querySelectorAll(".btnDelete");
      }, 1000);

    });
  });
});
