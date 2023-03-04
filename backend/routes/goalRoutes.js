const express = require("express");
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();

// router.get("/", getGoals);
// router.post("/", setGoals);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

// another convention to clean the code is to use .routes
router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoal).delete(deleteGoal);




module.exports = router;
