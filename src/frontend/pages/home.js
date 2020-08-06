function searchHandler() {
  const value = document.querySelector(".input").value;
  if (value.length === 0) {
    return;
  }
  fetch(`/api/meals/?title=${value}`)
    .then((response) => response.json())
    .then((data) => {
      const mealList = document.querySelector(".meal-list");
      mealList.innerHTML = data
        .map((meal) => {
          console.log(meal.title);
          return `<li class="meal-item"> ${meal.title} </li>`;
        })
        .join("");
    });
}

window.handleHomeRequest = () => {
  document.body.innerHTML = `
    <div class="header">
       <h1>Meal Sharing</h1>
    </div>
    <div class="nav-bar">  
      <a href="meals" data-navigo>Meals</a>
      <a href="meal/1" data-navigo>meal/1</a>
    </div>      
    <div class="search-div">
      <form>
        <label for="title">Search for meals:</label>
        <input class="input" type="text" name="title" ></input>
        <button class="button" type="button" onclick="searchHandler()">Search</button>
      </form>
        </div>
    <div class="meals-container">
      <ul class="meal-list"> </ul>    
    </div>
    `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
