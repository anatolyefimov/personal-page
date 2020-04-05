let $greeting = document.querySelector('.greeting__text');
$greeting.classList.toggle('greeting__text_disable')

let $infoItems = document.querySelectorAll('.info__item')

for (let $infoItem of $infoItems) {
    $infoItem.addEventListener('click', () => $infoItem.classList.toggle('info__item_picked'));
}