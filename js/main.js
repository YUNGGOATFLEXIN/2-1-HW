// let user = ('user name');
//     user = 5;

// console.log(user);



// Домашнее задание №2

const newArray = ['one', 2, true, 'four', 5];
console.log(newArray[2]);

const newObj = {
    color: '#fff',
    model: 'iphone',
    price: 50000,
};

// Создавать дополнительную переменную, в которой будет храниться ключ - плохая идея.
// Просто используем точечную нотацию к объектам

// console.log(newObj.color);

const key = 'color';
console.log(newObj[key]);

const keyTwo = 'model';
console.log(newObj[keyTwo]);

const keyThree = 'price';
console.log(newObj[keyThree]);
