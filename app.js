// 1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.
function parsingString() {
    let obj = {
        DOMInput: document.querySelector("#userString").value,
        result: document.querySelector(".resultParsingString"),
        reg: [/[a-zA-Zа-яА-ЯёЁїЇіІ]/g, /[\d]/g, /[^a-zA-Zа-яА-ЯёЁїЇіІ0-9]/g],
        arr: [],
        br: "<br>",
        error: ["Букв - ", "Цифр - ", "Символов - "]
    };

    obj.result.innerHTML = "В строке: " + obj.br;
    
    for(let i = 0; i < 3; i++) {
        obj.arr = obj.DOMInput.match(obj.reg[i]);

        if(obj.arr == null) {
            obj.result.innerHTML += obj.error[i] + "нет."; 
        } else {
            obj.result.innerHTML += `${obj.error[i]} ${obj.arr.length} (${obj.arr.join(", ")}).${obj.br}`;
        }     
    }    
}

// 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде. Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать. 
function isNumberToString() {
    let obj = {
        DOMInput: document.querySelector("#userNumb").value,
        result: document.querySelector(".resultUserNumb"),
        arrUnits: ["один", "два", "три", "четыри", "пять", "шесть", "семь", "восемь", "девять", "десять", "одиннадцать", "двенадцать",
                   "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семьнадцать", "восемьнадцать", "девятнадцать"],
        objDozens: {
            2: "двадцать",
            3: "тридцать",
            4: "сорок",
            5: "пятьдесят",
            6: "шестьдесят",
            7: "семьдесят",
            8: "восемьдесят",
            9: "девяносто"
        }
    };

    if(obj.DOMInput < 1 || obj.DOMInput > 99) {
        return obj.result.innerHTML = "Введите число от 1 до 99!";
    }

    if(obj.DOMInput > 0 && obj.DOMInput < 20) {
        return obj.result.innerHTML = `${obj.DOMInput} - ${obj.arrUnits[obj.DOMInput - 1]}`;
    }
    
    if(obj.DOMInput >= 20 && obj.DOMInput < 100) {
        obj.DOMInput += "";
        if(obj.DOMInput[1] == 0) {
            return obj.result.innerHTML = `${obj.DOMInput} - ${obj.objDozens[obj.DOMInput[0]]}`;
        } else {
            return obj.result.innerHTML = `${obj.DOMInput} - ${obj.objDozens[obj.DOMInput[0]]} ${obj.arrUnits[(obj.DOMInput[1] - 1)]}`;
        }
    }
}

// 3. Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания. 
function isChangeString() {
    let obj = {
        DOMInput: document.querySelector("#userStringEnter").value,
        result: document.querySelector(".resultChangeString"),
        reg: [/\d/g, /[a-zA-Zа-яА-ЯёЁїЇіІ]/g],
        objF: {
            f0: function() {return "_";},
            f1: function(s) {
                    let re = /[A-ZА-ЯЁЇІ]/g;

                    if(re.test(s)) {
                        return s.toLowerCase();
                    } else {
                        return s.toUpperCase();
                    }
            },
        }
    };

    for(let i = 0; i < 2; i++) {
        obj.DOMInput = obj.DOMInput.replace(obj.reg[i], obj.objF["f" + i]);
    }

    obj.result.innerHTML = obj.DOMInput;
}

// 4. Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, textalign в textAlign.
function isDoStyle() {
    let obj = {
        DOMInput: document.querySelector("#doStyle").value,
        result: document.querySelector(".resultDoStyle"),
        reg: /-[a-z]/g,
        func: function(l) {return l[1].toUpperCase();}
    };

    obj.result.innerHTML = obj.DOMInput.replace(obj.reg, obj.func);
}

// 5. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру. Например: cascading style sheets в CSS, объектноориентированное программирование в ООП
function isAbbr() {
    let obj = {
        DOMInput: document.querySelector("#doAbbreviation").value,
        result: document.querySelector(".resultAbbr"),
        separator: /[^a-zA-Zа-яА-ЯёЁїЇіІ0-9]+/g,
        arr: [],
        abbr: ""
    };

    obj.arr = obj.DOMInput.split(obj.separator);
    obj.arr.forEach(function(el) {
        obj.abbr += el[0].toUpperCase();
    });
    obj.result.innerHTML = obj.abbr;
}

// 6. Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее. 
function isOneString() {
    let obj = {
        DOMInput: document.querySelector("#doOneString").value,
        result: document.querySelector(".resultOneString"),
        reg: /\t\r\n\v\f/g
    };
    
    obj.result.innerHTML = obj.DOMInput.replace(obj.reg, "");
}


// 7. Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо выполнить (+ - * /), 
// переводит операнды в числа, решает пример и возвращает результат.
function isCalc() {
    let obj = {
        DOMInput: document.querySelector("#doCalc").value,
        result: document.querySelector(".resultCalc"),
        regExample: /[^\d\+\-\*\/ ]/g,
        regSymbol: /[\+\-\*\/]/g,
        regDigital: /\d+/g,
        arrS: [],
        arrD: [],
        myCase: 0
    };

    if(obj.regExample.test(obj.DOMInput)) {
        return obj.result.innerHTML = "Пример введен неверно!";
    } else {
        obj.arrS = obj.DOMInput.match(obj.regSymbol);
        obj.arrD = obj.DOMInput.match(obj.regDigital);

        if((obj.arrD.length - obj.arrS.length) == 1) {
            obj.arrD.forEach(function(currentValue, index, array) {
                array[index] = currentValue * 1;
            });

            obj.myCase += obj.arrD[0];
            for(let i = 0; i < obj.arrS.length; i++) {
                switch(obj.arrS[i]) {
                    case "+":
                        obj.myCase += obj.arrD[i + 1];
                        break;
                    case "-":
                        obj.myCase -= obj.arrD[i + 1];
                        break;
                    case "*":
                        obj.myCase *= obj.arrD[i + 1];
                        break;
                    case "/":
                        obj.myCase /= obj.arrD[i + 1];
                        break;
                    default:
                        break;
                }
            }

            obj.result.innerHTML = obj.myCase;
        } else {
            obj.result.innerHTML = "Пример введен неверно!";
        }
    }
}

/*
8. Написать функцию, которая получает url и выводит подробную информацию о нем. Например: url “https://itstep.org/ua/about”, 
информация “протокол: https, домен: itstep.org, путь: /ua/about”.
*/
function isUrl() {
    let obj = {
        DOMInput: document.querySelector("#doUrl").value,
        result: document.querySelector(".resultUrl"),
        searchValue: ["://", "/"],
        reg: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i,
        arr: []
    };

    if(obj.reg.test(obj.DOMInput)) {
        obj.arr.push(obj.DOMInput.substring(0, obj.DOMInput.indexOf(obj.searchValue[0])));
        obj.DOMInput = obj.DOMInput.substring(obj.DOMInput.indexOf(obj.searchValue[0]) + 3);
        obj.arr.push(obj.DOMInput.substring(0, obj.DOMInput.indexOf(obj.searchValue[1])));
        obj.arr.push(obj.DOMInput.substring(obj.DOMInput.indexOf(obj.searchValue[1])));
        obj.result.innerHTML = `Протокол: ${obj.arr[0]}, домен: ${obj.arr[1]}, путь: ${obj.arr[2]}.`;
    } else {
        obj.result.innerHTML = "url введен неверно.";
    }
}

/*
9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя.
    Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”. Выполняя задание, не используйте функцию split()
*/
function isStringSepar(){
    let obj = {
        DOMInputString: document.querySelector("#stringSepar").value,
        DOMInputSeparator: document.querySelector("#doSepar").value,
        result: document.querySelector(".resultSepar"),
        reg: "",
        arr: [],
        arrQuotes: ["&#171;", "&#187;"]
    };

    if(obj.DOMInputSeparator == "") {
        return obj.result.innerHTML = "Не указан разделитель!";
    } else {
        obj.reg = new RegExp("[^\\" + obj.DOMInputSeparator + "]+", "g");
    }
    
    obj.arr = obj.DOMInputString.match(obj.reg);
    obj.result.innerHTML = "Результат:";
    obj.arr.forEach(el => obj.result.innerHTML += " " + obj.arrQuotes[0] + el + obj.arrQuotes[1]);
    obj.result.innerHTML += ".";
}

/**
10. Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте которого может использоваться %, 
после символа % указывается индекс входного параметра. При выводе вместо %индекс необходимо вывести значение соответствующего входного параметра.
Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”.
 */
function lastTask() {
    let obj = {
        DOMInputTemplate: document.querySelector("#textTemplate").value,
        DOMInputParam: document.querySelector("#indexPrint").value,
        result: document.querySelector(".resultTextIndex"),
        arrParam: [],
        arrTemp: [],
        reg: /[^a-zA-Zа-яА-ЯёЁїЇіІ0-9]\d+/g
    };

    obj.arrTemp = obj.DOMInputTemplate.match(obj.reg);
    obj.arrParam = obj.DOMInputParam.split(",");
    
    for(let i = 0; i < obj.arrTemp.length; i++) {
        let index = obj.arrTemp[i].substring(1),
            re = new RegExp("\\" + obj.arrTemp[i], "g");

        obj.DOMInputTemplate = obj.DOMInputTemplate.replace(re, obj.arrParam[index - 1]);
    }

    obj.result.innerHTML = obj.DOMInputTemplate;
}

let btnEvent = "click";
const EV = [
    {
        selector: "#btnUserString",
        listener: parsingString
    },
    {
        selector: "#btnUserNumb",
        listener: isNumberToString
    },
    {
        selector: "#btnChangeString",
        listener: isChangeString 
    },
    {
        selector: "#btnDoStyle",
        listener: isDoStyle
    },
    {
        selector: "#btnAbbr",
        listener: isAbbr
    },
    {
        selector: "#btnOneString",
        listener: isOneString
    },
    {
        selector: "#btnCalc",
        listener: isCalc
    },
    {
        selector: "#btnUrl",
        listener: isUrl
    },
    {
        selector: "#btnSepar",
        listener: isStringSepar
    },
    {
        selector: "#btnTextIndex",
        listener: lastTask
    }
];

EV.forEach(list => document.querySelector(list.selector).addEventListener(btnEvent, list.listener));