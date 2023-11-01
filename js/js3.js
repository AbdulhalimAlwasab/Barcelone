// default number for the count
let likeCount = 0;
let dislikeCount = 0;
//to count clicks to the like button
function handleLike() {
  likeCount++;
  document.getElementById('likeCount').textContent = likeCount;
}
//to count clicks to the dislike button
function handleDislike() {
  dislikeCount++;
  document.getElementById('dislikeCount').textContent = dislikeCount;
}



// var likesCount = 0;
// var dislikesCount = 0;

//get the data input by the user
document.getElementById("data-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var usernameInput = document.getElementById("username");
    var logoInput = document.getElementById("logo");
    var commentInput = document.getElementById("comment");

    var username = usernameInput.value;
    var logo = URL.createObjectURL(logoInput.files[0]);
    var comment = commentInput.value;

    saveData(username, logo, comment);
    usernameInput.value = "";
    logoInput.value = "";
    commentInput.value = "";
});
//show the input data in the wab 
function saveData(username, logo, comment) {
    var dataContainer = document.getElementById("data");

    var dataElement = document.createElement("div");
    dataElement.className = "data";
    dataElement.innerHTML = `
    <div id="lo" class="logo"><img src="${logo}" alt="شعار المستخدم"></div>
        <div class="username"><div id="mm"><h2>User name:</h2><h3>${username}</h3></div> </div>
        
        <div class="comment"><div id="cc"><h2>comment:</h2><h3>${comment}</h3></div></div>
 
    `;
    dataContainer.appendChild(dataElement);
}
