var bmi={
    userHeight: 0,
    userWeight: 0,
    
    getStats: function(){
        bmi.userHeight=Number(prompt("What is your height in inches?",""));
        bmi.userWeight=Number(prompt("What is your weight in pounds.",""));
        
    },

    calcBmi: function(){
        bmiCalculated = (bmi.userWeight / bmi.userHeight ** 2) * 703;
        message="<b>My Body Mass Index</b> <br />"
        message+="Height: "+bmi.userHeight+" inches<br />"
        message+="Weight: "+bmi.userWeight+" pounds<br />"
        message+="BMI: "+bmiCalculated

        document.getElementById("bmihere").innerHTML=message;
    },
   

};
window.onload=bmi.calcBmi;