const express = require("express");
const router = express.Router();
const knex = require("../database");

// Get all reservation
router.get("/", async (req, res) => {
  try {
    const reservation = await knex("reservation").select("*");
    res.json(reservation);
  } catch (error) {
    throw error;
  }
});

// Get reservation by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const getReservationById = await knex("reservation").where({ id: id });
    res.json(getReservationById);
  } catch (error) {
    throw error;
  }
});

// Add new reservation
router.post("/", async (req, res) => {
  try {
    const addReservation = await knex("reservation").insert({
      number_of_guests: req.body.number_of_guests,
      meal_id: req.body.meal_id,
      created_date: req.body.created_date,
    });
    res.json(addReservation);
  } catch (error) {
    throw error;
  }
});

// Delete reservation by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteReservation = await knex("reservation").where({ id: id }).del();
    res.json(deleteReservation);
  } catch (error) {
    throw error;
  }
});

// Update reservation by ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updateReservation = await knex("reservation")
      .where({ id: id })
      .update({
        number_of_guests: req.body.number_of_guests,
        meal_id: req.body.meal_id,
        created_date: req.body.created_date,
      });
    res.json(updateReservation);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
