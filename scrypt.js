


// Получите элементы
const toggleButton = document.getElementById('toggleButton');
const dispElements = document.querySelectorAll('.disp');
const disp2Elements = document.querySelectorAll('.disp2');


// Функция для переключения видимости блоков
function toggleVisibility() {
    // Переключаем видимость для блоков с классом 'disp'
    dispElements.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });

    // Проверяем, если экран планшетный, добавляем переключение для 'disp2'
    if (window.matchMedia("(max-width: 1024px)").matches) {
        disp2Elements.forEach(element => {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
           
        });
       
    }
}

// Изначально скрываем элементы
dispElements.forEach(element => element.style.display = 'none');

if (window.matchMedia("(max-width: 1024px)").matches) {
    disp2Elements.forEach(element => element.style.display = 'none');
   
}else{
    disp2Elements.forEach(element => element.style.display = 'block'); 
}

// Привязываем обработчик событий к кнопке
toggleButton.addEventListener('click', toggleVisibility);




/*----------------------------------------------------------------------------*/



  