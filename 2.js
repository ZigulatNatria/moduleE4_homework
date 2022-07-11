// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function objectIn(str, obj){
    return str in obj
}

const obj1 = {
    a: 1,
    b: 'Вася',
    c: 2.7
};

console.log(objectIn('a', obj1))
console.log(objectIn('d', obj1))