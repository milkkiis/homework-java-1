/* Теоритическая часть
Типы данных
Тип	          Пример	      Смысл
string	      "hello"	      Текст
number	      42, 3.14	    Целые и дробные числа
boolean         true	      Логическое значение
null	          null	      Намеренное «ничего»
undefined   	undefined	  	Значение не задано
symbol	      Symbol("id")  Уникальный неизменяемый идентификатор
bigint	        123n	      Целые числа произвольной длины

Примитивы неизменяемы: значение нельзя поправить на месте, можно только присвоить переменной новое. Они передаются по значению, 
то есть при присваивании или передаче в функцию создаётся копия. 
К ссылочным типам относятся объекты, массивы и функции.
Они передаются по ссылке, и две переменные могут указывать на один и тот же объект.

Шаблонные литералы
Внутри ${ } можно писать переменную или любое выражение

const name = "Алексей";
console.log(`Привет, ${name}! Через год тебе ${25 + 1}.`);

Оператор typeof
typeof возвращает строку с названием типа

1. typeof null возвращает "object". Это историческая особенность языка, поэтому null проверяют через === null.
2. Для функций typeof возвращает "function", а для массивов и обычных объектов "object"
console.log(typeof 123);       "number"
console.log(typeof "hello");   "string"
console.log(typeof true);      "boolean"
console.log(typeof undefined); "undefined"
console.log(typeof null);      "object" (особенность)
console.log(typeof 10n);       "bigint"
*/



console.log("Домашняя работа по итогам урока 1");

const name = "Алексей";
const age = 25;
const isMarried = false;

// Вывод через шаблонные литералы: ${} подставляет значение переменной в строку
console.log(`Имя: ${name}.`);
console.log(`Возраст: ${age}.`);
console.log(`Есть супруг/супруга: ${isMarried}.`);

// typeof возвращает тип данных переменной в виде строки
console.log(
  `Тип данных переменных name, age, isMarried: ${typeof name}, ${typeof age}, ${typeof isMarried}.`
);

// Дополнительное задание

// undefined: переменная объявлена, но значение не задано
const notDefined = undefined;
// null: намеренно "пустое" значение
const empty = null;
// symbol: уникальный идентификатор, "id" - только описание
const uniqueId = Symbol("id");
// bigint: целое число любой длины
const bigNumber = BigInt(123456789012345678901234567890n);

console.log(`Значение: ${notDefined}, тип: ${typeof notDefined}`);
// typeof null вернёт "object"
console.log(`Значение: ${empty}, тип: ${typeof empty}`);
// Symbol нельзя вставить в шаблон напрямую, поэтому toString()
console.log(`Значение: ${uniqueId.toString()}, тип: ${typeof uniqueId}`);
console.log(`Значение: ${bigNumber}, тип: ${typeof bigNumber}`);


// Глобальная переменная: объявлена вне функций, доступна во всём файле
const globalVariable = "Я глобальная!";

function showLocalVariable() {
  // Локальная переменная: существует только внутри этой функции
  const localVariable = "Я локальная!";
  console.log(localVariable);
  // Глобальная переменная видна и внутри функции
  console.log(globalVariable);
}

showLocalVariable();
console.log(globalVariable); // работает
// console.log(localVariable); // ReferenceError: вне функции переменной нет


// В командной строке мы получаем такой ответ:
// Домашняя работа по итогам урока 1
// Имя: Алексей.
// Возраст: 25.
// Есть супруг/супруга: false.
// Тип данных переменных name, age, isMarried: string, number, boolean.
// Значение: undefined, тип: undefined
// Значение: null, тип: object
// Значение: Symbol(id), тип: symbol
// Значение: 123456789012345678901234567890, тип: bigint
// Я локальная!
// Я глобальная!
// Я глобальная!