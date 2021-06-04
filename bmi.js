let weight = document.getElementById("fillWeight")
let height = document.getElementById("fillHeight")
let display = document.getElementById("display")
let btn = document.getElementById("clickMe")


const bmiCalcul =  () => {
    let weightV=parseFloat(weight.value)
    let heightV=parseFloat(height.value)

    console.log(weightV);
    console.log(heightV);

    let BMI = weightV/Math.pow(heightV, 2)
    let round = Math.round(BMI)
    /**
     * BMI < 18.5, the output should be: "Your BMI is , so you are underweight."
        BMI 18.5 - 24.9, the output should be: "Your BMI is , so you have a normal weight."
        BMI > 24.9, the output should be: "Your BMI is , so you are overweight."
     */
        let displayM
        if (round < 18.5) {
            displayM = `Your BMI is ${round} , so you are underweight.`
        } else if(round >= 18.5 && round <= 24.9) {
            displayM=`Your BMI is  ${round} , so you have a normal weight.`
        }else{
            displayM=`Your BMI is  ${round} , so you are overweight.`
        }
    console.log(round)
    return display.innerHTML=displayM

}


btn.addEventListener("click", bmiCalcul)