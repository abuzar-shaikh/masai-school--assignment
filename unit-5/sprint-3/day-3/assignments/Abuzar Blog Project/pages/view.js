import navbar from "../components/navbar.js";
let navbarDiv = document.getElementById("navbar-contenar");
navbarDiv.innerHTML = navbar();

// ----------navbar--------

let blogId = localStorage.getItem("blogId");

async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
function displayData(blog, parentNode) {
  document.title = `view Blog:${blog.title}`;

  parentNode.innerHTML = "";

  let blogTitleElement = document.createElement("p");
  blogTitleElement.textContent = blog.title;
  blogTitleElement.setAttribute("id", "heding");

  let blogBodyElement = document.createElement("p");
  blogBodyElement.textContent = blog.body;

  let blogAuthorElement = document.createElement("p");
  blogAuthorElement.textContent = `By: ${blog.author}`;
  blogAuthorElement.setAttribute("id", "authorName");

  parentNode.append(blogTitleElement, blogBodyElement, blogAuthorElement);
}

const fetchBlogByID = async (blogId) => {
  try {
    let blog = await getData(`http://localhost:3000/blogs/${blogId}`);
    let parentNode = document.getElementById("main-content");
    displayData(blog, parentNode);
  } catch (error) {
    console.log(error);
  }
};

fetchBlogByID(blogId);
