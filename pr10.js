let name = prompt('Как тебя зовут?', 'Никита');
let age = prompt('Сколько тебе лет?', 100);
if(age>= 18)
    alert('Вы совершеннолетний!');
else
    alert('Вы несовершеннолетний!');
for(let i=1; i<11; i++){
    console.log(i);
}
let i = 10;
while(i!= 0){
    console.log(i);
    i -= 1;
}

const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push('Тема 4');
practices.unshift('Практика 4');

console.log('Лекции:');
lectures.forEach((lecture) => console.log(lecture));

console.log('Практики:');
practices.forEach((practice) => console.log(practice));

function arrayToString(array) {
    return array.join(', ');
}

console.log('Лекции через запятую:', arrayToString(lectures));
console.log('Практики через запятую:', arrayToString(practices));

function filterByLetterO(array) {
    return array.filter(item => item.startsWith('О'));
}

const lecturesWithO = ['Обучение', 'Операции', 'Тема 1', 'Тема 2'];

const filteredLectures = filterByLetterO(lecturesWithO);
console.log('Темы, начинающиеся с буквы "О":', filteredLectures);
