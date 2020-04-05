let $greeting = document.querySelector('.greeting__text');
let $cons = $greeting.querySelector('.text');
let $dot = $greeting.querySelector('.punctuation.dot');
let $log = $greeting.querySelector('.function');
let $leftBrack = $greeting.querySelector('.punctuation.l-brack');
let $str = $greeting.querySelector('.string');
let $rightBrack = $greeting.querySelector('.punctuation.r-brack');
let $semicolon = $greeting.querySelector('.punctuation.semicolon');

const cons = 'console';
const dot = '.';
const log = 'log';
const leftBrack = '(';
const rightBrack = ')';
const semicolon = ';';
const str = `'Hello 👋 \nЯ Ефимов Анатолий'`;
const cursor = `<span class="cursor" style="border-right: 2px solid blue; height: 100%"></span>`


function printToken(element, token, index = 0) {
    if (index === token.length) {
        element.innerHTML = element.innerHTML.replace(cursor, '');
        return;
    }
    return new Promise(resolve => setTimeout(() => {
        element.innerHTML = element.textContent + token[index++] + cursor;
        resolve(printToken(element, token, index));
    }, 100 + Math.floor(Math.random() * Math.floor(100))))
}

printToken($cons, cons)
    .then(() => printToken($dot, dot))
    .then(() => printToken($log, log))
    .then(() => printToken($leftBrack, leftBrack))
    .then(() => printToken($str, str))
    .then(() => printToken($rightBrack, rightBrack))
    .then(() => printToken($semicolon, semicolon))
    .then(() => {
        $greeting.innerHTML += `<div style='width: 3px; text-align: center'>` + cursor + `</div>`
        let $cursor = $greeting.querySelector('.cursor');
        setInterval(() => {
            $cursor.style.display = $cursor.style.display === 'none' ? 'inline-block' : 'none';
        }, 600)
    })


let $infoItems = document.querySelectorAll('.info__item')

for (let $infoItem of $infoItems) {
    $infoItem.addEventListener('click', () => $infoItem.classList.toggle('info__item_picked'));
}