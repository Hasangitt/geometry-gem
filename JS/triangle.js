function triangleAreaCalculate(){
    // collect base input
    const triangleInputBase = document.getElementById('base-input');
    const inputBaseText = triangleInputBase.value;
    const finalBase = parseFloat(inputBaseText);
    // collect length input
    const triangleInputLength = document.getElementById('length-input');
    const inputLengthText = triangleInputLength.value;
    const finalLength = parseFloat(inputLengthText);
    // make result
    const triangleResult = 0.5 * finalBase * finalLength;
    console.log('Triangle Area Result is:', triangleResult);
    
};