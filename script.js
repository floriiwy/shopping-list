/* Новые элементы должны добавляться в список по нажатию на Enter */
const messages = document.querySelector('.items');
const sendInput = document.querySelector('#input-wrapper');

messages.addEventListener('keydown', function(event) {
    const messageText = sendInput.value;

    const itemsList = messages.createElement(ul);

    const newMessage = itemsList.createElement(li);
    newMessage.classList.add('message');
    newMessage.textContent = messageText;

    if (messageText != '' && event.key == 'Enter') {
        messages.append(newMessage);
    }

    sendInput.value = '';
});

const planPoint = document.querySelectorAll("li");
for (let item of planPoint) {
    item.addEventListener('click', function() {
        item.classList.add('done');
    });
}
/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */