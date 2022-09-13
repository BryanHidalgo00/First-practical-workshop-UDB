let crudForm = document.querySelector(".crud");
let btnToggleForm = document.querySelector(".floatIcon");
let clickSubmit = document.querySelector("#btnSend");
let worldEvents = [];
let rows = document.querySelector(".rows");

let titleEdit = document.querySelector("#titleEdit");
let yearStartEdit = document.querySelector("#yearStartEdit");
let yearEndEdit = document.querySelector("#yearEndEdit");
let messageEdit = document.querySelector("#messageEdit");
let btnEdit = document.querySelector("#btnEdit");
let onEditId = "";

let btnDeletes = "";

const generateEvents = (worldEvents) => {
    let output = "";

    worldEvents.sort((a, b) => {
        return a.year - b.year;
    });

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
                        
                        <btn class="btn-a1 btn btnEdit" value="${id}" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit event</btn>
                        <btn class="btn-a2 btn btnDelete" value="${id}">Delete event</btn>
                    </div>
                    <i>- ${yearEnd}</i>
                </div>
            </section>
        </div>
    `;
    });

    return output;
};

const actionAfterDelete = (btnDelete) => {
    let id = btnDelete.getAttribute("value");
    let filteredEvents = worldEvents.filter((event) => event.id != id);
    worldEvents = filteredEvents;
    localStorage.setItem("worldEvents", JSON.stringify(worldEvents));
    rows.innerHTML = generateEvents(worldEvents);
    btnDeletes = document.querySelectorAll(".btnDelete");
    btnEdit = document.querySelectorAll(".btnEdit");
};

const actionAfterEdit = (btnEdit) => {
    let id = btnEdit.getAttribute("value");
    let filteredEvent = worldEvents.find((event) => event.id == id);
    console.log(filteredEvent);
    let { title, year, yearEnd, message } = filteredEvent;
    titleEdit.value = title;
    yearStartEdit.value = year;
    yearEndEdit.value = yearEnd;
    messageEdit.value = message;
    onEditId = id;
}

document.addEventListener("DOMContentLoaded", async () => {
    worldEvents = JSON.parse(localStorage.getItem("worldEvents")) || [];
    rows.innerHTML = await generateEvents(worldEvents);
    btnDeletes = document.querySelectorAll(".btnDelete");
    btnEdit = document.querySelectorAll(".btnEdit");
});

btnToggleForm.addEventListener("click", () => {
    if (crudForm.style.display === "flex") {
        crudForm.style.display = "none";
        btnToggleForm
            .querySelector("i")
            .classList.remove("fa-solid", "fa-xmark");
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

clickSubmit.addEventListener("click", (e) => {
    e.preventDefault();
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

    rows.innerHTML = generateEvents(worldEvents);

    localStorage.setItem("worldEvents", JSON.stringify(worldEvents));
    btnDeletes = document.querySelectorAll(".btnDelete");

    crudForm.style.display = "none";
    title.value = "";
    year.value = "";
    yearEnd.value = "";
    message.value = "";

    btnToggleForm
        .querySelector("i")
        .classList.remove("fa-solid", "fa-xmark");
    btnToggleForm
        .querySelector("i")
        .classList.add("fa-sharp", "fa-solid", "fa-check");

});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnDelete")) {
        actionAfterDelete(e.target);
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnEdit")) {
        actionAfterEdit(e.target);
    }
});

btnEdit.addEventListener("click", (e) => {

    let filteredEvent = worldEvents.find((event) => event.id == onEditId);
    filteredEvent.title = titleEdit.value;
    filteredEvent.year = yearStartEdit.value;
    filteredEvent.yearEnd = yearEndEdit.value;
    filteredEvent.message = messageEdit.value;

    localStorage.setItem("worldEvents", JSON.stringify(worldEvents));
    rows.innerHTML = generateEvents(worldEvents);
    btnDeletes = document.querySelectorAll(".btnDelete");
    btnEdit = document.querySelectorAll(".btnEdit");

});