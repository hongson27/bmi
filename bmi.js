let inputWeight = +prompt('Nhap can nang (kg)');
let inputHeight = +prompt('Nhap chieu cao (m)');
let bmi = inputWeight / (inputHeight * inputHeight);
if (bmi < 18.5) {
    alert('UnderWeight');
} else if (bmi < 25) {
    alert('Normal');
} else if (bmi < 30) {
    alert('Overweight');
} else {
    alert('Obese');
}