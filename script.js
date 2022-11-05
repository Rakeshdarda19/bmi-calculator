let button = document.getElementById('btn')
let clear =  document.getElementById('clr')

button.addEventListener('click',() => {
    let height = parseInt(document.getElementById('height').value)
    let weight = parseInt(document.getElementById('weight').value)
    let age = parseInt(document.getElementById('age').value)
    let res = document.getElementById('output')
    let height_data = false
    let weight_data = false
    let age_data = false 
     
    if(age === '' || isNaN(age) || (age<2) || (age>120)){
        document.getElementById('age_err').innerHTML = 'Please provide a age between 2 and 120'
    } else{
        document.getElementById('height_err').innerHTML = ''
        age_data = true
    }

    if(height === '' || isNaN(height) || (height<=0)){
        document.getElementById('height_err').innerHTML = 'Positive Numbers Only'
    } else{
        document.getElementById('height_err').innerHTML = ''
        height_data = true
    }

    if(weight === '' || isNaN(weight) || (weight<=0)){
        document.getElementById('weight_err').innerHTML = 'Positive Numbers Only'
    } else{
        document.getElementById('weight_err').innerHTML = ''
        weight_data = true
    }

    if(height_data && weight_data && age_data){
        let bmi = (weight /((height*height)/10000)).toFixed(2)
        if(bmi < 16){
            res.innerHTML = 'BMI = ' +bmi+ ' Severe Thinness'
        } else if(bmi >= 16 && bmi <=17){
            res.innerHTML = 'BMI = ' +bmi+ ' Modelrate Thinness'
        } else if(bmi > 17 && bmi <=18.5){
            res.innerHTML = 'BMI = ' +bmi+ ' Mild Thinness'
        } else if(bmi > 18.5 && bmi <=25){
            res.innerHTML = 'BMI = ' +bmi+ ' Normal'
        } else if(bmi > 25 && bmi <=30){
            res.innerHTML = 'BMI = ' +bmi+ ' Overweight'
        } else if(bmi > 30 && bmi <=35){
            res.innerHTML = 'BMI = ' +bmi+ ' Obese Class 1'
        } else if(bmi > 35 && bmi <=40){
            res.innerHTML = 'BMI = ' +bmi+ ' Obese Class 2'
        } else if(bmi > 40){
            res.innerHTML = 'BMI = ' +bmi+ ' Obese Class 3'
        } 
    }
})

clear.addEventListener('click',() => {
    let result = document.getElementById('output')
    let height = document.getElementById('height')
    let weight = document.getElementById('weight')
    let age = document.getElementById('age')
    result.innerHTML = ''
    height.innerHTML = ''
    weight.innerHTML = ''
    age.innerHTML = ''
})