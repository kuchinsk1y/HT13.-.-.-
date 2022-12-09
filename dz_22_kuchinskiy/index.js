const postInsert = document.querySelector(".post");
const commentsInsert = document.querySelector(".comments");
const inputRef = document.querySelector(".input");
let ID;

async function getPost(event) {
  try {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${value}`
    );
    const post = await response.json();
    console.log(post);
    postInsert.innerHTML = `      <div class="post__style">
        <h2 class="post__title">${post.title}  </h2>
        <p class="post__text">${post.body} </p>
      </div>`;
    commentsInsert.innerHTML = "";
    ID = post.id;
    console.log(ID);
    getComments();
  } catch (error) {
    console.log(error);
  }
}

async function getComments() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${ID}/comments`
    );
    const comments = await response.json();
    console.log(comments);
    comments.forEach((comment) => {
      commentsInsert.insertAdjacentHTML(
        "afterbegin",
        `  <div class="comment__style">
        <h3 class="comment__title">name:</h3>
        <p>${comment.name}</p>
        <h3 class="comment__title">email:</h3>
        <p>${comment.email}</p>
        <h3 class="comment__title">Comment</h3>
        <p>${comment.body}      </p>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

inputRef.addEventListener("input", getPost);