//@description getGoals
//@route GET /api/goals
// @acess Private
const getGoals = function (req, res) {
  res.status(200).json({ message: "GETTING GOALS YOU BITCH" });
};

//@description setGoals
//@route POST /api/goals
// @acess Private
const setGoals = function (req, res) {
  res.status(200).json({ message: "SETTING GOAL YOU BITCH" });
};

//@description UPDATEGoals
//@route PUT /api/goals/:id
// @acess Private
const updateGoal = function (req, res) {
  res.status(200).json({
    message: `UPDATED YOUR GOAL number : ${req.params.id}  YOU BITCH`,
  });
};
//@description DeleteGoals
//@route DELETE /api/goals/:id
// @acess Private
const deleteGoal = function (req, res) {
  res.status(200).json({
    message: `Deleted YOUR GOAL number : ${req.params.id}  YOU BITCH`,
  });
};

module.exports = {
  getGoals: getGoals,
  setGoals: setGoals,
  updateGoal: updateGoal,
  deleteGoal: deleteGoal,
};
