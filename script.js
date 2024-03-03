/* Новые элементы должны добавляться в список по нажатию на Enter */
const messages = document.querySelector('.items');
const sendInput = document.querySelector('#input');

sendInput.addEventListener('keydown', function(event) {

    if (event.key == 'Enter') {
        const messageText = sendInput.value;

        const itemsList = document.createElement('ul');
        messages.append(itemsList);

        const newMessage = document.createElement('li');
        itemsList.append(newMessage);
        newMessage.classList.add('message');
        newMessage.textContent = messageText;
        newMessage.addEventListener('click', function() {
            newMessage.classList.toggle('done');
        });
        if (messageText != '') {
            messages.append(newMessage);
        }

        sendInput.value = '';
    }
});

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */