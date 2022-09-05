export const calculateBmi = (height: number, weight: number): string  => {
  const bmi = weight / ((height*0.01)*(height*0.01));
  if (bmi < 25) {
    return ('Normal')
  } else if (bmi >= 25 && bmi < 30) {
    return ('Overweight')
  } else {
    return ('Obese')
  }
}