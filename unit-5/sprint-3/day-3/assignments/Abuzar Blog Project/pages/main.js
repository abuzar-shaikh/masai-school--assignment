import navbar from "../components/navbar.js";
let navbarDiv = document.getElementById("navbar-contenar");
navbarDiv.innerHTML = navbar();

// ---------------navbar-------------

async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

function displayData(data, parentNode) {
  parentNode.innerHTML = "";

  data.forEach((blog) => {
    let blogRow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = blog.id;

    let td2 = document.createElement("td");
    td2.textContent = blog.title;

    let td3 = document.createElement("td");
    td3.textContent = blog.author;
    // ............for view btn.........
    let td4 = document.createElement("td");
    let viewbtn = document.createElement("button");
    viewbtn.textContent = "VIEW";
    td4.append(viewbtn);
    viewbtn.onclick = function () {
      location.href = "view.html";
      localStorage.setItem("blogId", blog.id);
    };
    // ............for edit btn.........
    let td5 = document.createElement("td");
    let editbtn = document.createElement("button");
    editbtn.textContent = "EDIT";
    td5.append(editbtn);
    editbtn.onclick = function () {
      location.href = "edit.html";
      localStorage.setItem("blogId", blog.id);
    };

    // ............for delete btn.........

    let td6 = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    td6.append(deleteBtn);
    deleteBtn.onclick = async function () {
      await deleteData(`http://localhost:3000/blogs/${blog.id}`);
      fetchBlogs();
    };
    blogRow.append(td1, td2, td3, td4, td5, td6);
    parentNode.append(blogRow);
  });
}
async function deleteData(url) {
  try {
    await fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
}

async function fetchBlogs() {
  try {
    let data = await getData(`http://localhost:3000/blogs`);
    let parentNode = document.getElementById("main-content");
    displayData(data, parentNode);
  } catch (error) {
    console.log(error);
  }
}

fetchBlogs();
