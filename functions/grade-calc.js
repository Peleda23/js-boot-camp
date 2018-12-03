let studentScoreCalc = function(score, total = 20){
  let points = (score / total) * 100;
  let letterGrade = " ";
 
  if (points >= 90) {
    letterGrade = "A";
  } else if (points >= 80){
    letterGrade = "B";
  } else if (points >= 70){
    letterGrade = "C";
  } else if (points >= 60){
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You got a ${letterGrade} (${points}%)!`;
};

let result = studentScoreCalc(13);
console.log(result);