function createMeal() {
  const form = document.querySelector("form");
  const title = form.elements[0].value;
  const description = form.elements[1].value;
  const location = form.elements[2].value;
  const when = form.elements[3].value;
  const max_reservation = form.elements[4].value;
  const price = form.elements[5].value;
  const data = {
    title: title,
    description: description,
    location: location,
    when: when,
    max_reservation: max_reservation,
    price: price,
  };
  if (
    title == "" ||
    description == "" ||
    location == "" ||
    when == "" ||
    max_reservation == "" ||
    price == ""
  ) {
    alert("Please fill in all the requierd fields");
  } else {
    fetch("/api/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result) {
          alert("Meal Added");
        }
      });
  }
}

window.handleAddMealRequest = () => {
  document.body.innerHTML = `
      <div class="container">
        <div class="header">
         <h1 class="title header-title">Let's Create Meal!</h1>
        </div>
          <nav class="nav">
            <div class="nav-right nav-menu">
              <a href="/" class="nav-item" data-navigo>Home</a>
              <a href="meals" class="nav-item" data-navigo>All Meals</a>
            </div>
          </nav>    
          <div class="form">
            <form>
              Title: *<input class="input" type="text" name="title" required>
              <br>
              Description: *<input class="input" type="text" name="description" required>
              <br>
              Location: *<input class="input" type="text" name="location" required>
              <br>
              When: *<input class="input" type="datetime-local" name="when" value = "2020-08-01T12:00" required>
              <br>
              Maximum reservations: *<input class="input" type="number" name="max_reservation" required>
              <br>
              Price: *<input class="input" type="number" name="price" step="any" required><br><br>
              <button class="button is-primary" type="button" onclick="createMeal()">Create Meal</button>
            </form>
          </div>  
      </div>
      `;

  router.updatePageLinks();
};
