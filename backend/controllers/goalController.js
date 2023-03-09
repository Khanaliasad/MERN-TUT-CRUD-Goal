const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalmodel");

//@description getGoals
//@route GET /api/goals
// @access Private
const getGoals = asyncHandler(async function (req, res) {
  const goals = await Goal.find();
  res.status(200).json({ message: "GETTING GOALS YOU BITCH", goals: goals });
});

//@description setGoals
//@route POST /api/goals
// @access Private
const setGoals = asyncHandler(async function (req, res) {
  console.log("req.", req.body);
  if (!req.body.text) {
    // res.status(400).json({message:"bad user input"});
    // above code is for custom error below we will use express error handler
    res.status(400);
    throw new Error("please add text feild");
  }
  res.status(200).json({ message: "SETTING GOAL YOU BITCH" });
});

//@description UPDATEGoals
//@route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async function (req, res) {
  res.status(200).json({
    message: `UPDATED YOUR GOAL number : ${req.params.id}  YOU BITCH`,
  });
});
//@description DeleteGoals
//@route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async function (req, res) {
  res.status(200).json({
    message: `Deleted YOUR GOAL number : ${req.params.id}  YOU BITCH`,
  });
});

module.exports = {
  getGoals: getGoals,
  setGoals: setGoals,
  updateGoal: updateGoal,
  deleteGoal: deleteGoal,
};
