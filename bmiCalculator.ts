const calculateBmi = (height: number, weight: number): string  => {
  const bmi = weight / ((height*0.01)*(height*0.01));
  if (bmi < 25) {
    return ('Normal ' + bmi)
  } else if (bmi >= 25 && bmi < 30) {
    return ('Overweight ' + bmi)
  } else {
    return ('Obese ' + bmi)
  }
  
}
console.log(calculateBmi(180, 74))