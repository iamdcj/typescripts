// Enums are an object like approach to grouping closely-related values;
// they allow code authors to easily understand the relationships of values to each oter

// Enum declaration
enum ResultOptions {
  HomeWin = "Home win",
  AwayWin = "Away win",
  Draw = "Draw"
}

let result = "";

// Use enum options to
// update result binding
switch (result) {
  case "H":
    result = ResultOptions.HomeWin;
  case "A":
    result = ResultOptions.AwayWin;
  default:
    result = ResultOptions.Draw;
}
