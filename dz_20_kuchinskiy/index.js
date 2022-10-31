fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.querySelector(".name-product").textContent = data[13]["title"];
    document.querySelector(".img-product").src = data[13]["image"];
    document.querySelector(".price").textContent = data[13]["price"] + "$";
    document.querySelector(".description").textContent =
      data[13]["description"];

    document.querySelector(".name-product2").textContent = data[7]["title"];
    document.querySelector(".img-product2").src = data[7]["image"];
    document.querySelector(".price2").textContent = data[7]["price"] + "$";
    document.querySelector(".description2").textContent =
      data[4]["description"];

    document.querySelector(".name-product3").textContent = data[3]["title"];
    document.querySelector(".img-product3").src = data[3]["image"];
    document.querySelector(".price3").textContent = data[3]["price"] + "$";
    document.querySelector(".description3").textContent =
      data[3]["description"];

    const category1 = (document.querySelector(".category").textContent =
      data[1]["category"]);
    const category2 = (document.querySelector(".category2").textContent =
      data[4]["category"]);
    const category3 = (document.querySelector(".category3").textContent =
      data[11]["category"]);
    const mansCloath = document.querySelector(".card3");
    const juwelyr = document.querySelector(".card2");
    const electronik = document.querySelector(".card1");
    const select = document.getElementById("select-product");

    if (select.value == category1) {
      juwelyr.style.display = "none";
      electronik.style.display = "none";
    }
    select.addEventListener("change", changeCategory);
    function changeCategory() {
      if (select.value == category1) {
        juwelyr.style.display = "none";
        mansCloath.style.display = "block";
        electronik.style.display = "none";
      } else if (select.value == category2) {
        juwelyr.style.display = "block";
        mansCloath.style.display = "none";
        electronik.style.display = "none";
      } else if (select.value == category3) {
        mansCloath.style.display = "none";
        electronik.style.display = "block";
        juwelyr.style.display = "none";
      } else if (select.value == "all") {
        mansCloath.style.display = "block";
        electronik.style.display = "block";
        juwelyr.style.display = "block";
      }
    }
  })
  .catch((error) => console.error(error.massage));
