// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
// только собственных свойств. Данная функция не должна возвращать значение.

function objectValue(obj){
    for (let key in obj){
    if (obj.hasOwnProperty(key)){
        console.log(`key: ${key}  | value: ${obj[key]}`)
    }
    }
}

const obj1 = {
    a: 1,
    b: 'Вася',
    c: 2.7
};

objectValue(obj1)
