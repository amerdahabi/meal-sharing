window.handleDeleteMealRequest = (params) => {
  document.body.innerHTML = `
    <div class="container">  
        <div class="header">
            <h1 class="title header-title">Meal handling</h1>
        </div>  
        <nav class="nav">
            <div class="nav-left nav-menu">
                <a href="/" class="nav-item" data-navigo>Home</a>
                <a href="meals" class="nav-item" data-navigo>All Meals</a>
                <a href="add-meal" class="nav-item" data-navigo>Add Meal</a> 
            </div> 
        </nav>  
    `;
};
