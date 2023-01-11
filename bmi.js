const readline = require('readline-sync') 

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

// A função main é o ponto de partida do nosso programa
function main() {
    //numFloat = readlineSync.questionFloat([query[, options]])
    const weight = readline.questionFloat('What\'s your weight? (kg) ');
    const height = readline.questionInt('What\'s your height? (cm) ');
 
    const bmi = handleBMI(weight, height);

    if (bmi < 18.5) {
        console.log(`BMI: ${bmi.toFixed(2)}, magreza`);
    } else if (bmi < 24.9) {
        console.log(`BMI: ${bmi.toFixed(2)}, peso normal`);
    }else if (bmi < 29.9) {
        console.log(`BMI: ${bmi.toFixed(2)}, sobrepeso`);
    }else if ( bmi < 34.9) {
        console.log(`BMI: ${bmi.toFixed(2)}, obesidade 1`);
    }else if ( bmi < 39.9) {
        console.log(`BMI: ${bmi.toFixed(2)}, obesidade 2`);
    }else if ( bmi > 40) {
        console.log(`BMI: ${bmi.toFixed(2)}, obesidade 3`);
    }

}

main();