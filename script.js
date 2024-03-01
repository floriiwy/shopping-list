/* Новые элементы должны добавляться в список по нажатию на Enter */
const messages = document.querySelector('.items');
const sendInput = document.querySelector('#input');

sendInput.addEventListener('keydown', function(event) {

    if (event.key == 'Enter') {
        const messageText = sendInput.value;

        const itemsList = messages.createElement(ul);

        const newMessage = itemsList.createElement(li);
        newMessage.classList.add('message');
        newMessage.textContent = messageText;
        const planPoint = document.querySelectorAll("li");
        for (let item of planPoint) {
            item.addEventListener('click', function() {
                item.classList.add('done');
            });
        }
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