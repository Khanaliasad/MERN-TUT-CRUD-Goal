const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalmodel");

//@description getGoals
//@route GET /api/goals
// @access Private
const getGoals = asyncHandler(async function (req, res) {
  const goals = await Goal.find();
  res.status(200).json({ message: "GETTING GOAL", goals: goals });
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
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json({ message: "SETTING GOA", goal: goal });
});

//@description UPDATEGoals
//@route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async function (req, res) {
  const goal = await Goal.findById(req.params.id);
console.log('req.body.text', req.body.text)
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    message: `UPDATED YOUR GOAL number : ${req.params.id}`,
    goal: updatedGoal,
  });
});
//@description DeleteGoals
//@route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async function (req, res) {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  // const DeletedGoal = await Goal.findByIdAndDelete(req.params.id);
  const DeletedGoal = await goal.remove;
  res.status(200).json({
    message: `Deleted YOUR GOAL number : ${req.params.id}`,
    goal: goal,
    id: req.params.id
  });
});

module.exports = {
  getGoals: getGoals,
  setGoals: setGoals,
  updateGoal: updateGoal,
  deleteGoal: deleteGoal,
};
