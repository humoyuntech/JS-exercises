/**
 * Reduce это просто. JavaScript
 * https://youtu.be/m4qMknyBzSo?si=QZA-SBNsQBls65mL
 */

// let a = [1, 2, 3, 4];

// let b = a.reduce((previousValue, currentItem) => previousValue + currentItem, 0);
// console.log(b);

//===================================================================
//Eng kattani topish

// let max = [1, 78, 86, 45, 1893, 63];

// let c = max.reduce((previousValue, currentItem) => {
//     if(previousValue < currentItem) {
//         return currentItem;
//     }else{
//         return previousValue;
//     };
// }, max[0]);
// console.log(c);
//===================================================================
//Eng katta sonni indexni topish

// let d = max.reduce((previousValue, currentItem, index) =>{
//     if(currentItem > previousValue[1]) {
//         return [index, currentItem];
//     }else{
//         return previousValue;
//     }
// }, [0, max[0]]);

// console.log(d);

//===================================================================
// const data = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];

// const flat = data.reduce((prev, item) => {
//     return prev.concat(item);
// }, []);

// console.log(flat);

//============================================================================================================================================
//============================================================================================================================================
//============================================================================================================================================
//============================================================================================================================================
//============================================================================================================================================

/**
 * 
 * Функция reduce на примерах. Решаем задачи на reduce в javascript
 * https://youtu.be/cLonzUdj4q8?si=eEtAA3iD-HCHyrEt
 */

const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];

const users = [{
    username: "lando12",
    jedi: false
}, {
    username: "kvaigon99",
    jedi: true
}, {
    username: "anakin skywalker",
    jedi: false // DARK SIDE ISN'T JEDI WAY!!!
}, {
    username: "littlegreenpug",
    jedi: true
}, {
    username: "ray",
    jedi: true
}, {
    username: "padmebestqueenever",
    jedi: false
}];

const documents = [{
    content: "Ты был мне как брат! Я любил тебя!",
    author: "Obi-Wan Kenobi",
    date: "2017-01-17 07:13:07"
}, {
    content: "База повстанцев находится на Дантуине.",
    author: "Leia Organa",
    date: "1999-02-19 16:56:11"
}, {
    content: "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
    author: "Yoda",
    date: "2019-11-27 21:33:56"
}];


// 1==========================================================================================

//yig'indini o'rtachasini topish
const getAveroge = (numbers) => {
    const total = numbers.reduce((total, number) => {
        return total + number;
    }, 0)
  return total  / numbers.length;
};


console.log(getAveroge(numbers));

// 2==========================================================================================

const countJedi = (users) => {
    return users.reduce((count, user) => {
        if(user.jedi){
             count++;
        }

        return count;
    }, 0);
};

console.log(countJedi(users));
// 3==========================================================================================
//Jedini arrayga yig'ish
const getArrayOnlyJedi = (users) => {
    return users.reduce((names, user) => {
        if(user.jedi){
            names.push(user.username);
        }
        return names;
    }, []);
};


console.log(getArrayOnlyJedi(users));
// 4==========================================================================================
const composeDocuments = (documents) => {
    return documents.reduce((generalDocument, document) => {
        generalDocument.content = generalDocument.content + " " + document.content;
        generalDocument.authors.push(document.author);
        if(!generalDocument.date ||
            new Date(generalDocument.date) <= new Date(document.date)){
            generalDocument.date = document.date;
        }
        return generalDocument;
    }, {
        content: "",
        authors: [],
        date: null
    });
};
console.log(composeDocuments(documents));















