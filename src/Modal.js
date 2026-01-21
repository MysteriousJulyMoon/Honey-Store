// Получаем элементы
    const modal = document.getElementById("myModal");
    const honeyImage = document.getElementById("gbuckwheat-honey-image"); // Получаем изображение гречишного меда
    const span = document.getElementsByClassName("close")[0];

    // Проверяем, что все элементы существуют, прежде чем пытаться работать с ними
    if (modal && honeyImage && span) {
        // Обработчик клика по изображению гречишного меда
        honeyImage.onclick = function() {
            // Обновляем контент модального окна (цену и дату)
            document.getElementById("modal-honey-image").src = honeyImage.src; // Дублируем фото
            document.getElementById("modal-price").textContent = "Цена: 500 руб/кг"; // Замените на актуальную цену
            document.getElementById("modal-date").textContent = "Дата сбора: 20.07.2024"; // Замените на актуальную дату
            modal.classList.add('show');
        }

        // Когда пользователь кликает на <span> (x), закрываем модальное окно
        span.onclick = function() {
          modal.classList.remove('show');
        }

        // Когда пользователь кликает вне модального окна, закрываем его
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.classList.remove('show');
          }
        }
    } else {
        console.error("Один или несколько элементов не найдены. Убедитесь, что HTML загружен.");
    }
    
