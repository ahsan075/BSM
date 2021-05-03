const datas = [
    {
        slideImage: "1.jpg",
        heading: "heading 1",
        teacherImage: "person.png",
        teacherName: "name",
    },
    {
        slideImage: "2.jpg",
        heading: "heading 2",
        teacherImage: "person.png",
        teacherName: "name",
    },
    {
        slideImage: "1.jpg",
        heading: "heading 3",
        teacherImage: "person.png",
        teacherName: "name",
    },
    {
        slideImage: "2.jpg",
        heading: "heading 4",
        teacherImage: "person.png",
        teacherName: "name",
    },
    {
        slideImage: "1.jpg",
        heading: "heading 5",
        teacherImage: "person.png",
        teacherName: "name",
    },
    {
        slideImage: "2.jpg",
        heading: "heading 6",
        teacherImage: "person.png",
        teacherName: "name",
    },
    // { slideImage: "", heading: "", teacherImage: "", teacherName: "" },
    // { slideImage: "", heading: "", teacherImage: "", teacherName: "" },
    // { slideImage: "", heading: "", teacherImage: "", teacherName: "" },
];

let card, size, count;
let query1 = window.matchMedia("(min-width:1741px)");
let query2 = window.matchMedia("(max-width:1740px)");

const slideCards = document.querySelector(".slide-cards");
window.addEventListener("resize", displayMenuItems());

function displayMenuItems() {
    let id = 0;
    let displayMenu = datas.map(function (item) {
        return `    <div id='A${id++}' class="card-slide">
        <img class="card-image" src=${item.slideImage} alt="" />
        <div class="heading">
            <h3>${item.heading}</h3>
        </div>
        <div class="teacher">
            <img class="teachers-img" src=${item.teacherImage} alt="" />
            <h4 class="teacher-name">${item.teacherName}</h4>
        </div>
        <hr />
        <div class="slide-footer">
            <div class="fotter-cover">
                <a class="read-more" href=""> READ MORE </a>
                <div class="span-arrow">
                    <span class="arrow"></span>
                    <span class="arrow"></span>
                    <span class="arrow"></span>
                </div>
            </div>
        </div>
    </div>`;
    });

    displayMenu = displayMenu.join("");
    slideCards.innerHTML = displayMenu;
    card = document.querySelectorAll(".card-slide");

    const firstClone = card[0].cloneNode(true);
    const secondClone = card[1].cloneNode(true);
    const thirdClone = card[2].cloneNode(true);
    const fourthClone = card[3].cloneNode(true);

    firstClone.id = "first_clone";
    secondClone.id = "second_clone";
    thirdClone.id = "third_clone";
    fourthClone.id = "fourth_clone";

    slideCards.append(firstClone);
    slideCards.append(secondClone);
    slideCards.append(thirdClone);
    slideCards.append(fourthClone);

    const allCards = document.querySelectorAll(".card-slide");

    //animation

    count = 0;
    size = card[0].clientWidth + 10;

    window.addEventListener("resize", function () {
        slideCards.style.transition = "none";
        size = card[0].clientWidth + 10;
    });

    let timeout = setInterval(change, 2000);

    slideCards.addEventListener("mouseover", function () {
        clearInterval(timeout);
    });
    slideCards.addEventListener("mouseout", function () {
        timeout = setInterval(change, 2000);
    });

    // CHANGE

    function change() {
        slideCards.style.transition = "transform 0.5s ease";
        count++;
        slideCards.style.transform = "translateX(" + -size * count + "px";
    }

    // TRANSITIONEND

    slideCards.addEventListener("transitionend", () => {
        if (allCards[count].id === "first_clone") {
            slideCards.style.transition = "none";
            count = card.length - count;
            slideCards.style.transform = "translateX(" + -size * count + "px";
        }
    });
}
