/*W05 Assignment: Product Review Form by Devin Gamboa Enciso*/

// Get current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const currentPage = window.location.pathname;
const productName = document.getElementById("productName");

if (currentPage.includes("form.html")) {
    products.forEach((product) => {
        option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        productName.appendChild(option);
    })
}


if (currentPage.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount");

    if (reviewCount == null) {
        reviewCount = 0;
    }
    else {
        reviewCount = Number(reviewCount)
    }
    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    const thanks = document.querySelector(".thanks");
    const reviewDisplay = document.createElement("div");

    thanks.appendChild(reviewDisplay);

    reviewDisplay.textContent = `Amount of Reviews Posted: ${reviewCount}`;
}