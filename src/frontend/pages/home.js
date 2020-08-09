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
          return `<div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">${meal.title}</p>
                <p class="subtitle is-6">${meal.price} DKK</p>
              </div>
            </div>
            <div class="content">
             ${meal.description}
            </div>
          </div>
        </div>`;
        })
        .join("");
    });
}

window.handleHomeRequest = () => {
  document.body.innerHTML = `
    <div class="container">  
      <div class="header">
        <h1 class="title header-title">Meal Sharing</h1>
      </div>
      <nav class="nav">
        <div class="nav-left nav-menu">
          <a href="meals" class="nav-item" data-navigo>All Meals</a>
          <a href="add-meal" class="nav-item" data-navigo>Add Meal</a> 
          <a href="meal/1" class="nav-item" data-navigo>Meal</a>
        </div> 
        <div class="field has-addons">
        <p class="control">
          <input type="text" class="input" placeholder="Search meal...">
        </p>
        <p class="control">
          <button class="button is-primary" type="button" onclick="searchHandler()">Search</button>
        </p>
      </div> 
      </nav>      
      <div class="meals-container">
        <div class="meal-list"> </div>    
      </div>
      <div class="footer-div">
        <div class="card footer">
          <div class="card-content">
            <p class="title">
              Meal Sharing App @ Amer Dahabi
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href="https://www.linkedin.com/in/amer-dahabi-2193131aa/"><i class="fa fa-linkedin"></i></a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                <a href="https://github.com/amerdahabi"><i class="fa fa-github"></i></a>
              </span>
            </p>
          </footer>
        </div>
      </div>  
    </div>
    `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
