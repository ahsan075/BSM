const datas = [
    {
        slideImage: "1.jpg",
        heading: "Book Of Research Abstract 2018",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "2.jpg",
        heading: "Book Of Research Abstract 2018-2019",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "3.jpg",
        heading: "Book Of Research Abstract 2019",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "2.jpg",
        heading: "Book Of Research Abstract 2018-2019",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "1.jpg",
        heading: "Book Of Research Abstract 2018",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "3.jpg",
        heading: "Book Of Research Abstract 2019",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    // { slideImage: "", heading: "", teacherImage: "", teacherName: "" },
    // { slideImage: "", heading: "", teacherImage: "", teacherName: "" },
    // { slideImage: "", heading: "", teacherImage: "", teacherName: "" },
];

const slideCards = document.querySelector(".slider");

function displayMenuItems(menuItems) {
    let id = 0;
    let displayMenu = menuItems.map(function (item) {
        return `   <div class="card-slide">
        <div class="img">
            <img src=${item.slideImage} alt="" />
        </div>
        <div class="content">
            <div class="title">${item.heading}</div>
            <div class="teacher">
                <img src=${item.teacherImage} alt="" />
                <div class="sub-title">${item.teacherName}</div>
            </div>
            <hr />
            <div class="slide-footer">
                <div class="fotter-cover">
                    <a class="read-more"  href=${item.pdf}> READ MORE </a>
                    <div class="span-arrow">
                        <span class="arrow"></span>
                        <span class="arrow"></span>
                        <span class="arrow"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });

    displayMenu = displayMenu.join("");
    slideCards.innerHTML = displayMenu;
}

displayMenuItems(datas);
