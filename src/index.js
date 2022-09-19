// console.log('Hello!');

// ----- question ------
// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;

//   return message;
// }

// const x = makeMessage('Radar', 6150);

// console.log(x);

// const str1 = '12.45';
// const str2 = '0.55';

// console.log(str1 + str2); // 12.450.55
// console.log(str1 - str2); // 11.899999999999999

// const num1 = parseFloat(str1); // 12
// const num2 = parseFloat(str2); // 0

// console.log(Math.round(str1));
// console.log(Math.round(str2));

// ----- question ------
// let i = 1;

// console.log((i = i + 1)); // 2
// console.log((i += 1)); // 3

// console.log(i++); // 3 - post increment
// console.log(i); // 4

// console.log(++i); // 5 - pre increment

// ------ examples -------
// Example 1 - Математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// console.log(total);

// const diff = apples - grapes;
// console.log(diff);

// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;

// students += 50;
// console.log(students);

// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 10 + 10 - 2 * 5;
// console.log(result);

// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.8;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// console.log(Math.round(Math.random() * 100) + 1);

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const totalBots = repairBots + defenceBots;
// const message = `${companyName} has ${totalBots} bots in stock`;

// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3'; // string
// let height = '1.75';

// weight = weight.replace(',', '.');
// height = height.replace(',', '.');

// const bmi = (weight / Math.pow(height, 2)).toFixed(1);

// console.log(bmi); // 28.8

// const str = 'Hello world!';
// const reversedText = str.split('').reverse().join('');

// console.log(reversedText);

// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);

// Example 8 - Логические операторы
// Каким будет результат выражений?

// console.log(true && 3); // 3
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');

// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;

// console.log(value);

// Example 10 - Опертор % и методы строк
// console.log(7 % 2);

// const obj = { name: 'Bobyb', age: 15 };
// console.table(obj);

// obj.age += 1;
// console.table(obj);

// obj.age += 1;
// console.table(obj);
