let arrayOfRandomUsers = [];


window.onload = function () {
  randomUser();
};


const randomUser = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((users) => (arrayOfRandomUsers = users.results)); ///.notation!
};

console.log("hello", arrayOfRandomUsers);


const displayUser = () => {
  const allUser = document.getElementById("random-user");
  console.log("hey", arrayOfRandomUsers);
  arrayOfRandomUsers.map((post, index) => {
    console.log("index", index, "post", post);
    const li = document.createElement("li");
    const img = document.createElement("img") 
    img.src = post.picture.thumbnail
    const text = document.createTextNode(
      `#${index}, Name: ${post.name.first} ${post.name.last}, Age: ${post.dob.age}, Address: ${post.location.city} ${post.location.country} ${post.location.state} ${post.location.street.name}:`
    );
    li.appendChild(text);
    allUser.append(li);
    allUser.append(img);
  });
};
displayUser();
