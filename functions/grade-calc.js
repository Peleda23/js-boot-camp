const studentScoreCalc = function (score, total = 20) {
  if (typeof score !== 'number' || typeof total !== 'number') {
    throw Error('Argument is not a number');
  };

  const points = (score / total) * 100;
  let letterGrade = " ";

  if (points >= 90) {
    letterGrade = "A";
  } else if (points >= 80) {
    letterGrade = "B";
  } else if (points >= 70) {
    letterGrade = "C";
  } else if (points >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You got a ${letterGrade} (${points}%)!`;
};



try {
  const result = studentScoreCalc('num  ');
  console.log(result);
} catch (e) {
  console.log(e.message);
}