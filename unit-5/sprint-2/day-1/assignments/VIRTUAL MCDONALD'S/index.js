let dataArr = [
    {
      name: "Spicy McCrispy™ ",
      image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0116_SpicyCrispyChicken_PotatoBun_832x472:product-header-desktop?product-header-desktop&wid=830&hei=458&dpr=off",
    },
    {
      name: "Big Mac® ",
      image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    },
    {
      name: "World Famous Fries®",
      image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
    },
    {
      name: "Quarter Pounder®* with Cheese",
      image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    },
    {
      name: "Iced Coffee",
      image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_201906_1212_MediumIcedCoffee_Glass_A1_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    },
    {
      name: " Egg McMuffin® Meal",
      image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_202007_0252_EVM_HB_EggMcMuffin_Coffee_Glass_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    },
    {
      name: "Hamburger Happy Meal®",
      image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_6975_HamburgerHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
    },
    {
      name: "Blueberry Muffin",
      image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_202108_6500-001_BlueberryMuffin_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    },
    {
      name: "Hot Fudge Sundae",
      image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0337_HotFudgeSundae_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    },
  ];

  displayData();
  // Display Function Assigning ***********************************
  function displayData() {
    document.getElementById("main").textContent = "";
    dataArr.map(function (elm, index) {
      let box = document.createElement("div");
      box.setAttribute("class", "flex");

      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", "check");
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          addfun(elm);
        } else if (!checkbox.checked) {
          deletefun(elm, index);
        }
      });

      let miniBox = document.createElement("div");
      miniBox.setAttribute("class", "miniBox");

      let image = document.createElement("img");
      image.setAttribute("src", elm.image_url);
      image.setAttribute("class", "image");
      image.setAttribute("id", "Image");

      let name = document.createElement("b");
      name.textContent = elm.name;
      // console.log(elm.name)
      miniBox.append(name, image);
      // appending

      box.append(checkbox, miniBox);
      document.getElementById("main").append(box);
    });
  }

  var data = [];

function addfun(elm) {
  data.push(elm);
console.log(data);
}
function deletefun(elm, index) {
  data.splice(index, 1);
}

let promise = new Promise(function (resolve, reject) {
    document.getElementById("btn").addEventListener("click", displayFun);

    function displayFun() {
      let display = document.getElementById("main");
      display.style.display = "none";
      
      let button = document.getElementById("btn");
      button.textContent = "This is your order";
      button.style.display = "none";
  
      data.map(function (elme) {
        let box = document.createElement("div");
        box.setAttribute("class", "flex");

        let miniBox = document.createElement("div");
        miniBox.setAttribute("class", "miniBox");

        let image = document.createElement("img");
        image.setAttribute("src", elme.image_url);
        image.setAttribute("class", "image");
        
        let name = document.createElement("b");
        name.textContent = elme.name;
        // appending
        miniBox.append(name, image);
        box.append(miniBox);
        document.getElementById("food").append(box);
      });
      // arr.mapping end
      let btn1 = document.createElement("button");
      btn1.addEventListener("click", getdata);
      btn1.setAttribute("id", "btn1");
      btn1.textContent = "BACK";
      function getdata() {
        window.location.reload();
      }
      document.getElementById("buy").append(btn1);
      resolve(true);
      reject(new Error("Error"));
    }
  })
    .then(function (value) {
      console.log(value);
    })
    .catch(function (error) {
      console.log(error);
    });