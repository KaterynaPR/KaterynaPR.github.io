var objTest = {

    docBody: document.body,

    outputHeadTest: function() {
        var elementHeadTest = document.createElement('h1');
        elementHeadTest.className = 'header';
        elementHeadTest.innerHTML = 'Тест по программированию';
        elementHeadTest.style.textAlign = 'center';
        this.docBody.insertBefore(elementHeadTest, this.docBody.firstChild);
    },

    outputQuest: function() {
        var elementForm = document.createElement('form');
        this.docBody.insertBefore(elementForm, this.docBody.lastChild);

        for (var i = 1; i <= 3; i++) {

            var elementQuestion = document.createElement('p');
            elementQuestion.className = 'form__question';
            elementQuestion.innerHTML = i+ '. Вопрос №' + i;
            elementForm.appendChild(elementQuestion);
               
            for (var j=1; j <= 3; j++) {

                var elementDiv = document.createElement('div');
                elementDiv.className = 'form__checkbox-position';  
                elementForm.appendChild(elementDiv);

                var elementCheckbox = document.createElement('input');
                elementCheckbox.type = 'checkbox';
                elementCheckbox.className = 'form__checkbox';
                elementCheckbox.id = 'id-checbox' + i + '_' + j;
                elementDiv.appendChild(elementCheckbox); 

                var elementLabel = document.createElement('label');
                elementLabel.className = 'form__label';
                elementLabel.htmlFor = 'id-checbox' + i + '_' + j;
                elementLabel.id = 'id-checbox' + i + '_' + j;
                elementDiv.appendChild(elementLabel);

                var textCheckbox = document.createTextNode('Вариант ответа №' + j);              
               elementLabel.appendChild(textCheckbox);
            }
        }

        var divButton = document.createElement('div');
        divButton.className = 'form__button-position';
        elementForm.appendChild(divButton);


        var formButton = document.createElement('input');
        formButton.type = 'submit';
        formButton.value = 'Проверить мои результаты';
        formButton.className = 'form__button';
        divButton.appendChild(formButton);
    }
}

objTest.outputHeadTest();
objTest.outputQuest();