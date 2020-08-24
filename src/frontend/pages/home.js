window.handleHomeRequest = () => {
  document.body.innerHTML = `
    <div class="container"> 
      <nav class="navbar">
        <div class="nav-left nav-menu">
          <a href="meals" class="nav-item" data-navigo>All Meals</a>
          <a href="add-meal" class="nav-item" data-navigo>Add Meal</a> 
          <a href="meal/1" class="nav-item" data-navigo>Meal</a>
        </div>
      </nav>
      <div class="header">
        <h1 class="title header-title">Meal Sharing</h1>
          <h2 class="subtitle is-transparent">development ongoing</h2>
      </div>
      <section class="section">
        <div class="container py-4">
          <h2 class="title has-text-centered mb-6">New Meals</h2>
          <div class="columns is-multiline meal-list">                      
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="container">
          <div class="columns">
            <div class="column is-4 has-text-centered is-hidden-tablet">
              <a class="title is-4" href="#">Amer Dahabi</a>
            </div>
            <div class="column is-4">
              <div class="level">
                <a class="level-item" href="https://www.linkedin.com/in/amer-dahabi-2193131aa/">LinkedIN</a>
                <a class="level-item" href="https://github.com/amerdahabi">Github</a>
              </div>
            </div>
            <div class="column is-4 has-text-centered is-hidden-mobile">
              <a class="title is-4" href="#">AM-DA</a>
            </div>
            <div class="column is-4 has-text-right">
              <div class="level">
                <a class="level-item" href="https://amerdahabi.herokuapp.com/">Portfolio</a>
                <a class="level-item" href="#">ICO</a>
              </div>
            </div>
          </div>
          <p class="subtitle has-text-centered is-6">© 2020 AM-DA.</p>
        </div>
      </footer>
    </div>
    `;

  fetch(`/api/meals/`)
    .then((response) => response.json())
    .then((data) => {
      const mealList = document.querySelector(".meal-list");
      mealList.innerHTML = data
        .slice(4, 7)
        .map((meal) => {
          console.log(meal.title);
          return `
          <div class="column is-6 is-4-desktop">
            <div class="card" style="height: 100%">
              <div class="card-image"><a href="#"><img src="../images/${meal.title}.jpg" alt=""></a>
              </div>
              <div class="card-content">
                <span class="is-size-7">${meal.price} DKK</span>
                <h5 class="title is-5"><a href="#">${meal.title}</a></h5>
                <a class="button is-primary" href="#">Read more</a>
              </div>
            </div>
          </div>`;
        })
        .join("");
    });

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
