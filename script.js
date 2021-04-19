'use strict'

//=========================================================================

//#1

// Функция должна возвращать массив, а не выводить сообщение в консоль.
// Названия для переменных numerOne и numberTwo - очень плохие

// let arrayRandomNumbers = (min, max) => {
//     let arr = [];
//     function random() {
//         let rand = Math.random() * Math.floor(max);
//         return Math.round(rand);
//     }
//     for (let i = 0; i < max; i++) {
//         arr.push(random(max))

//     }
//     arr.length = min;
//    return arr;
// }
// console.log(arrayRandomNumbers(9, 100))


//=========================================================================

//#2

// Функция обрабатывает только одно значение, а должны удаляться все

// let firstArray = ['sex', 'drugs', 'rock and roll'];
// let secondArray = ['egalite', 'fraternite', 'liberte'];
// let thirdArray = ['Patria', 'o', 'muerte'];

// let deleteWordFromArray = (array, word) => {

//     if (array.includes(word)) {
//         let index = array.indexOf(word)
//         array.splice(index, 1)

//         return (array);
//     } else {

//         return (array);
//     }

// }
// console.log(deleteWordFromArray(secondArray, 'liberte'))

//=========================================================================

//#3


// Писать цикл for без параметров - нонсенс. Уже лучше заменить на 
// While. при попытке ввести в массив undefined ошибка в консоли -Uncaught SyntaxError: Unexpected token u in JSON at position 1

// let functionCreatedArray = () => {
//     let createdArrayFromUser = [];
//     while(true) {

//         let requestForUser = prompt('Enter values')
//         if (requestForUser === null || requestForUser === '') break;


//         if (requestForUser === 'true') {
//             createdArrayFromUser.push(true);
//         } else if (requestForUser === 'false') {
//             createdArrayFromUser.push(false);
//         } else if (requestForUser === 'null') {
//             createdArrayFromUser.push(null);
//         } else if (requestForUser === 'undefined') {
//             createdArrayFromUser.push(undefined);
//         } else if (!isNaN(+requestForUser)) {
//             createdArrayFromUser.push(+requestForUser);
//         } else if (requestForUser.startsWith('[')) {
//             createdArrayFromUser.push(JSON.parse(requestForUser));
//         } else {
//             createdArrayFromUser.push(requestForUser)
//         }
//     };
//     return createdArrayFromUser
// }

// console.log(functionCreatedArray())


//=========================================================================

//#4

const arrayOfPersons = [
    {
        name: 'Ferdinant',
        surname: 'Foch',
        age: 54,
        nationality: 'French',
        skill: 'Military management',
        zodiacSign: undefined,
        height: 173,
        isAlive: false
    },
    {
        name: 'Jackson',
        surname: 'Bricks',
        age: 20,
        nationality: 'USA',
        skill: 'farmer',
        height: 187,
        specialTrait: 'mechanical arms',
        isFictionalCharacter: true
    },
    {
        name: 'Hideo',
        surname: 'Kozima',
        age: 56,
        nationality: 'USA',
        skill: 'game developer',
        height: 173,
        specialTrait: 'genius',
        actualGames: ['Death Stranding', 'Metal Gear'],
        isAlive: true,
    },
    {
        name: 'Kim',
        surname: 'Kardashian',
        age: 39,
        nationality: 'USA',
        skill: 'model',
        height: 159,
        zodiacSign: 'scorpio'
    },
    {
        name: 'Mia',
        surname: 'Khalifa',
        age: 27,
        nationality: 'Lebanon',
        skill: 'actress',
        height: 157,
        zodiacSign: 'saggitarius',
        specialTrait: 'very exspressionable',
        isAlive: true,
        isFictionalCharacter: false
    },
    {
        name: 'Herman',
        surname: 'Hesse',
        age: 85,
        nationality: 'Germany',
        skill: 'writer',
        zodiacSign: undefined,
        isAlive: false,
        isFictionalCharacter: false,
        bibliography: ['Der Steppen Wolf', 'Das Glasperlenspiel',]
    },
    {
        name: 'Fedor',
        surname: 'Dostoevsky',
        age: 60,
        nationality: 'Russia',
        skill: 'writer',
        isAlive: false,
        isFictionalCharacter: false,
        bibliography: ['The demons', 'The Crime and Punishment', 'The Idiot']
    },
    {
        name: 'Doomguy',
        surname: undefined,
        age: undefined,
        nationality: undefined,
        skill: 'demon slayer',
        zodiacSign: undefined,
        isFictionalCharacter: true,
        specialTrait: 'Angry a bit',
    },
    {
        name: 'Sonic',
        surname: 'The Hedgehog',
        age: 13,
        nationality: undefined,
        zodiacSign: undefined,
        isFictionalCharacter: true,
        specialTrait: 'Fast as f#@k',
    },
    {
        name: 'Bruce',
        surname: 'Wayne',
        age: 12,
        isFictionalCharacter: true
    },
    {
        name: 'Ella',
        surname: 'Fitzgerald',
        age: 79,
        isFrictionalCharacter: false,
        isAlive: false,
        specialTrait: 'Amazing voice',
        signatureSongs: ['Cry Me a river', 'Hello Dolly', 'Summertime', 'In a sentimental mood']
    }
]

//=========================================================================
//4.1
// for (let i = 0; i < arrayOfPersons.length; i++) {
//     if (typeof arrayOfPersons[i].name === 'undefined') {
//         arrayOfPersons[i].name = null
//     }
//     if (typeof arrayOfPersons[i].surname === 'undefined') {
//         arrayOfPersons[i].surname = null
//     }
//     if (typeof arrayOfPersons[i].age === 'undefined') {
//         arrayOfPersons[i].age = null
//     }
// }

// let newArr = arrayOfPersons.map(item => {

//     return {
//         name: item.name,
//         surname: item.surname,
//         age: item.age,
//     }
// })
//     .sort((a, b) => {
//         if (a.surname > b.surname) return 1
//         if (a.surname == b.surname) return 0
//         if (a.surname < b.surname) return -1
//     })


// for (let i = 0; i < newArr.length; i++) {
//     if ((newArr[i].name === null) || (newArr[i].surname === null) || (newArr[i].age === null)) {
//         let findIndex = newArr.indexOf(newArr[i])
//         let deletElementAndAddInDown = newArr.splice(findIndex, 1)
//         newArr.push(deletElementAndAddInDown)
//     }

// }
// newArr = newArr.flat()
// console.log(newArr)

//=========================================================================
//4.2
// let newArr = []

// for (let i = 0; i < arrayOfPersons.length; i++) {
//     let lengthObjectInArrayOfPersons = Object.keys(arrayOfPersons[i]).length 

//     if (lengthObjectInArrayOfPersons >= 8) {
//         newArr.push(arrayOfPersons[i])
//     }

// }

// console.log(newArr.sort((a,b) => {
//     if ( Object.keys(a).length < Object.keys(b).length) return 1
//         if ( Object.keys(a).length == Object.keys(b).length) return 0
//         if ( Object.keys(a).length > Object.keys(b).length) return -1


// }))


//=========================================================================
//4.3
// console.log(arrayOfPersons.sort((a, b) => {
//     if (a.age > b.age) return 1
//     if (a.age == b.age) return 0
//     if (a.age < b.age) return -1
// }))
//=========================================================================

//4.4

// Свойством zodiacSign обладают шесть объектов, а не два, однако они не прошли фильтрацию. 

// let arrayZodiacSign = []
// for (let i = 0; i < arrayOfPersons.length; i++) {
//     for (let zod in arrayOfPersons[i]) {
//         if (zod == 'zodiacSign') {
//             arrayZodiacSign.push(arrayOfPersons[i])
//         }
//     }
// }
// console.log(arrayZodiacSign)

//=========================================================================

//4.5

// function sortArr(array) {
//     let arr = array.reduce((accum, cur) => {
//         let objValues = Object.values(cur);
//         let findedObj = objValues.find(item => {
//             if (typeof (item) === 'object' && item != 'null') return item;
//         })
//         if (findedObj) return [...accum, cur]
//         return accum;
//     }, [])
//     let arrSortedArr = array.reduce((accum, cur) => {
//         let objValues = Object.values(cur);
//         let findedObj = objValues.find(item => {
//             if (typeof (item) === 'object' && item != 'null') return item;
//         })
//         if (!findedObj) return [...accum, cur]
//         return accum;
//     }, arr)
//     return arrSortedArr;
// }
// console.log(sortArr(arrayOfPersons))

//=========================================================================
//4.6

// function random(min,max) {
//     let randNumber = Math.floor(min) + Math.random() * Math.floor((max + 1 - min));
//     return Math.round(randNumber);
// }

// let randomId = arrayOfPersons.map(item => item)
// for (let i = 0; i < randomId.length; i++) {
//     randomId[i].id = random(100, 999)
// }
// console.log(randomId);
//=========================================================================
//4.7

// let arrayIsFictionalCharacter = arrayOfPersons.filter(item => {
//     return item.isFictionalCharacter
// })
// for (let i = 0; i < arrayIsFictionalCharacter.length; i++) {
//     arrayIsFictionalCharacter[i].fictionalUniverse = null

// }
// console.log(arrayIsFictionalCharacter)
//=========================================================================
