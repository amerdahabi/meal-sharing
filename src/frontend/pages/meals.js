window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <div class="container">
    <div class="header"> 
      <h1 class="title header-title">All Meals</h1>
    </div>
    <nav class="nav">
      <div class="nav-right nav-menu">
        <a href="/" class="nav-item" data-navigo>Home</a>
        <a href="add-meal" class="nav-item" data-navigo>Add Meal</a>
      </div>
    </nav> 
    <div class="meal-item">
      <ul class="meal-list">
      </ul>
    </div>   
  </div>
`;

  fetch(`/api/meals/`)
    .then((response) => response.json())
    .then((data) => {
      const mealList = document.querySelector(".meal-list");
      mealList.innerHTML = data.map((meal) => {
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
                <p class="subtitle is-6">${meal.description}</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
            </div>
          </div>
        </div>`;
      });
    });
};
