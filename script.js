/* Новые элементы должны добавляться в список по нажатию на Enter */
const messages = document.querySelector('.items');
const sendInput = document.querySelector('#input-wrapper');

sendInput.addEventListener('keydown', function() {
    const messageText = sendInput.value;

    const newMessage = document.createElement('p');
    newMessage.classList.add('message');
    newMessage.textContent = messageText;

    if (messageText != '') {
        messages.append(newMessage);
    }

    sendInput.value = '';
});
/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */