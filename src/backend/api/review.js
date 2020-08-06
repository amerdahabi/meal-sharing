const express = require("express");
const router = express.Router();
const knex = require("../database");

// Get all review
router.get("/", async (req, res) => {
  try {
    const review = await knex("review").select("*");
    res.json(review);
  } catch (error) {
    throw error;
  }
});

// Get review by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const getReviewById = await knex("review").where({ id: id });
    res.json(getReviewById);
  } catch (error) {
    throw error;
  }
});

// Add new review
router.post("/", async (req, res) => {
  try {
    const addReview = await knex("review").insert({
      title: req.body.title,
      description: req.body.description,
      meal_id: req.body.meal_id,
      star: req.body.star,
      created_date: req.body.created_date,
    });
    res.json(addReview);
  } catch (error) {
    throw error;
  }
});

// Delete review by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteReview = await knex("review").where({ id: id }).del();
    res.json(deleteReview);
  } catch (error) {
    throw error;
  }
});

// Update review by ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updateReview = await knex("review").where({ id: id }).update({
      title: req.body.title,
      description: req.body.description,
      meal_id: req.body.meal_id,
      star: req.body.star,
      created_date: req.body.created_date,
    });
    res.json(updateReview);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
