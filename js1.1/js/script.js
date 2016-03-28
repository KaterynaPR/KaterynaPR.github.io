function pow(a, b) {
    var result = Math.pow(a, b);
       for (var i = 0; i < b; i++) {
    }
    return result;
    } 
var a = prompt("Число", "");
var b = prompt("Степень", "");

if (b < 0) {
  alert('Степень ' + b +
    'Введите целую степень, большую 0');
} else {
  alert( pow(a, b) );
}