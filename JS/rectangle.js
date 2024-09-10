function rectangleAreaCalculate(){
    const rectangleWidthInput = document.getElementById('rect-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
   

    const lengthInput = document.getElementById('rect-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
 

    const rectangleArea = width * length;
    console.log('Rectangle Area Result Is:', rectangleArea);

    const rectArea = document.getElementById('rectarea-result');
    rectArea.innerText = rectangleArea;
    
}