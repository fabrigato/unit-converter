const lengthConverter = document.getElementById("length-converter")
const volumeConverter = document.getElementById("volume-converter")
const massConverter = document.getElementById("mass-converter")
const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("input")

convertBtn.addEventListener("click", function(){
    convertUnits(lengthConverter,"meters","feet")
    convertUnits(volumeConverter,"liters","gallons")
    convertUnits(massConverter,"kilos","pounds")
})

function convertUnits(unit,measurement1,measurement2) {
    let answer = ""
    const metersFeet = (input.value * 3.281).toFixed(3)
    const feetMeters = (input.value / 3.281).toFixed(3)
    const litersGallons = (input.value * 0.264).toFixed(3)
    const gallonsLiters = (input.value / 0.264).toFixed(3)
    const kilogramsPounds = (input.value * 2.204).toFixed(3)
    const poundsKilograms = (input.value / 2.204).toFixed(3)
    
    if(measurement1 === "meters") {     
    answer = `
                ${input.value} ${measurement1} = 
                ${metersFeet} ${measurement2} |     
                ${input.value} ${measurement2} = 
                ${feetMeters} ${measurement1}
             `
    }else if(measurement1 === "liters") {
        answer = `
                    ${input.value} ${measurement1} =
                    ${litersGallons} ${measurement2} | 
                    ${input.value} ${measurement2} = 
                    ${gallonsLiters} ${measurement1} 
                 `
    }else {
        answer = `
                    ${input.value} ${measurement1} = 
                    ${kilogramsPounds} ${measurement2} |    
                    ${input.value} ${measurement2} = 
                    ${poundsKilograms} ${measurement1}
                 `
    }
    unit.innerHTML = answer
}