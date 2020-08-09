const express = require("express");
const router = express.Router();
const knex = require("../database");

// Get meal by ID
router.get("/:id", async (req, res) => {
  try {
    const titles = await knex("meals")
      .select("id", "title", "description", "price", "max_reservation")
      .where(req.params);
    res.json(titles);
  } catch (error) {
    throw error;
  }
});

// Add new meal
router.post("/", async (req, res) => {
  try {
    const addMeal = await knex("meals").insert({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      max_reservation: req.body.max_reservation,
      price: req.body.price,
      created_date: knex.fn.now(),
    });
    res.json(addMeal);
  } catch (error) {
    throw error;
  }
});

// Update meal by ID
router.put("/:id", async (req, res) => {
  try {
    const updateMeal = await knex("meals")
      .where({
        id: req.params.id,
      })
      .update({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        max_reservation: req.body.max_reservation,
        price: req.body.price,
        created_date: req.body.created_date,
      });
    res.json(updateMeal);
  } catch (error) {
    throw error;
  }
});

// Delete meal by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteMeal = await knex("meals")
      .where({
        id: req.params.id,
      })
      .del();
    res.json(`Meal with the ID '${id}' has been deleted`);
  } catch (error) {
    throw error;
  }
});

// Meals query
router.get("/", async (req, res) => {
  const { maxPrice, availableReservation, title, limit } = req.query;
  try {
    if (req.url === "/") {
      const allMeals = await knex("meals").select(
        "id",
        "title",
        "description",
        "price",
        "max_reservation"
      );
      res.json(allMeals);
    } else if (maxPrice) {
      const cheapMeal = await knex("meals")
        .select("id", "title", "price", "max_reservation")
        .where("price", "<=", maxPrice);
      res.json(cheapMeal);
    } else if (availableReservation === "true") {
      const reservation = await knex("meals")
        .join("reservation", "meals.id", "=", "reservation.meal_id")
        .select(
          "meals.id",
          "meals.title",
          "meals.max_reservation",
          "reservation.number_of_guests"
        );
      res.json(reservation);
    } else if (title) {
      const getTitle = await knex("meals")
        .select("title", "description")
        .where("title", "like", `%${title}%`);
      res.json(getTitle);
    } else if (limit) {
      const limitMeal = await knex("meals")
        .select("title", "description")
        .limit(limit);
      res.json(limitMeal);
    } else {
      res.send("Bad entry");
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
