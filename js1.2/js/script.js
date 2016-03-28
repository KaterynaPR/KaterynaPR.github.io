// 1.others names

var names = [];
  for (var i = 0; i < 5; i++) {
    names[i] = prompt('Введите имя ' + (i+1) , i+1);
  }
  console.log(names);

// 2.
var user = prompt('Введите имя пользователя', '');

// 3. 
  if ( names.indexOf(user) >= 0) {
    console.log(user + ', вы успешно вошли');
  } else {
    console.log('Неверное имя пользователя');
    alert('Неверное имя пользователя');
  }