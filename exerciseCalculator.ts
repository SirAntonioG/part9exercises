interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
};

const calculateExercises = (exerciseHours: Array<number>, originalTarget: number): Result => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter(item => item !== 0).length;
  const target = originalTarget;
  const average = exerciseHours.reduce((acc, item) => acc + item, 0)/periodLength;
  const rating = average >= target ? 3 : average >= target*0.5 ? 2 : 1;
  const ratingDescription = rating === 3 ? "Excelent" : rating === 2 ? "Not to bad but could be better" : "Terrible, make an effort to improve";
  const success = average >= target ? true : false;
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2));
