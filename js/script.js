/* DOM */
const containerModal = document.querySelector('.container--modal');
const modalOverlay = document.querySelector('.modal-overlay');
const btnOpenModalPhoto = document.querySelector('.order__btn');
const btnOpenModalQuestion = document.querySelector('.confectioner__btn');
const btnOpenModalPolicy = document.querySelector('.form__checkbox-link');


/* Скролл до якорных ссылок */
document.querySelector('.hero__action-button').addEventListener('click', (e) => { 
  e.preventDefault();
  document.getElementById('catalog').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelectorAll('.product__btn').forEach(el => {
  el.addEventListener('click', (e) => { 
    e.preventDefault();
    document.getElementById('feedback').scrollIntoView({
      behavior: 'smooth'
    });
  })
});

/* Модальное окно */
const closeModal = () => {
  containerModal.innerHTML = '';
  modalOverlay.style.display = 'none';
};

const openModal = (textHtml) => {
  modalOverlay.style.display = 'flex';

  containerModal.innerHTML = textHtml;

  modalOverlay.addEventListener('click', ({target}) => {
    if (target === modalOverlay || target.closest('.modal-overlay__close-button')) {
      closeModal();
    };
  });
};

/* Модальное окно "загрузить фото" */
const photoText = `
    <div class="modal">
      <button class="modal-overlay__close-button" aria-label="Закрыть окно с информацией о политике обработки персональных данных">&times;</button>
      <div class="container">
        <form class="modal__form form" action="#" method="post">
          <h2 class="form__title">
            Загрузите фотографию или эскиз капкейков
          </h2>
          <p class="form__text">
            Мы&nbsp;перезвоним, чтобы уточнить ваши пожелания
          </p>
          <fieldset class="form__field">
            <label class="form__input-file">
              <input type="file" name="photo-file" id="photo-file" aria-label="Добавьте ваше фотографию или эскиз капкейков" accept=".png, .jpg, .jpeg" multiple required>
              <span>Выберите файл</span>
            </label>
            <input class="form__input" type="tel" name="photo-phone" id="photo-phone" aria-label="Введите свой номер телефона в это поле" placeholder="Номер телефона" required>
            <button class="button-effect form__btn" type="submit" aria-label="Отправить номер телефона, чтобы мы вам перезвонили">Сделать заказ</button>
            <label class="form__checkbox-label"><input class="form__checkbox" name="photo-checkbox" id="photo-checkbox" type="checkbox" checked required>Нажамая на&nbsp;кнопку, вы&nbsp;соглашаетесь с&nbsp;условиями обработки персональных данных
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  `

btnOpenModalPhoto.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(photoText);
});


/* Модальное окно "задать вопрос" */
const questionText = `
    <div class="modal">
      <button class="modal-overlay__close-button" aria-label="Закрыть окно с вашим вопросом Юлии">&times;</button>
      <div class="container">
        <form class="modal__form form" action="#" method="post">
          <h2 class="form__title">
            Задайте вопрос Юлии
          </h2>
          <p class="form__text">
            Мы&nbsp;перезвоним и&nbsp;ответим на&nbsp;ваш вопрос
          </p>
          <fieldset class="form__field">
            <textarea class="form__textarea" name="question-text" id="question-text" maxlength="500" rows="3" aria-label="Введите свой вопрос в это поле" placeholder="Ваш вопрос" required></textarea>
            <input class="form__input" type="tel" name="question-phone" id="question-phone" aria-label="Введите свой номер телефона в это поле" placeholder="Номер телефона" required>
            <button class="button-effect form__btn" type="submit" aria-label="Отправить номер телефона, чтобы мы вам перезвонили">Сделать заказ</button>
            <label class="form__checkbox-label"><input class="form__checkbox" name="question-checkbox" id="question-checkbox" type="checkbox" checked required>Нажамая на&nbsp;кнопку, вы&nbsp;соглашаетесь с&nbsp;условиями обработки персональных данных
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  `

btnOpenModalQuestion.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(questionText);
});


/* Модальное окно "политика обработки персональных данных" */
const policyText = `
      <div class="modal">
        <h2 class="modal__title">
          Политика обработки персональных данных
        </h2>
        <button class="modal-overlay__close-button" aria-label="Закрыть окно с информацией о политике обработки персональных данных">&times;</button>
        <ol class="modal__list-subtitle">
          <li class="modal__item-subtitle">
            <h3 class="modal__subtitle">Общие положения</h3>
            <ol class="modal__list">
              <li class="modal__item">Сладкий сундук (далее по&nbsp;тексту&nbsp;&mdash; Оператор) ставит соблюдение прав и&nbsp;свобод граждан одним из&nbsp;важнейших условий осуществления своей деятельности.</li>
              <li class="modal__item">Политика Оператора в&nbsp;отношении обработки персональных данных (далее по&nbsp;тексту&nbsp;&mdash; Политика) применяется ко&nbsp;всей информации, которую Оператор может получить о&nbsp;посетителях веб-сайта website.ru. Персональные данные обрабатывается в&nbsp;соответствии с&nbsp;ФЗ&nbsp;&laquo;О&nbsp;персональных данных&raquo; &#8470;&nbsp;152-ФЗ.</li>
            </ol>
          </li>
          <li class="modal__item-subtitle">
            <h3 class="modal__subtitle">Основные понятия, используемые в&nbsp;Политике</h3>
            <ol class="modal__list">
              <li class="modal__item">Веб-сайт&nbsp;&mdash; совокупность графических и&nbsp;информационных материалов, а&nbsp;также программ для ЭВМ и&nbsp;баз данных, обеспечивающих их&nbsp;доступность в&nbsp;сети интернет по&nbsp;сетевому адресу website.ru;</li>
              <li class="modal__item">Пользователь&nbsp;&mdash; любой посетитель веб-сайта website.ru;</li>
              <li class="modal__item">Персональные данные&nbsp;&mdash; любая информация, относящаяся к&nbsp;Пользователю веб-сайта website.ru;</li>
              <li class="modal__item">Обработка персональных данных&nbsp;&mdash; любое действие с&nbsp;персональными данными, совершаемые с&nbsp;использованием ЭВМ, равно как и&nbsp;без их&nbsp;использования;</li>
              <li class="modal__item">Обезличивание персональных данных&nbsp;&mdash; действия, результатом которых является невозможность без использования дополнительной информации определить принадлежность персональных данных конкретному Пользователю или лицу;</li>
              <li class="modal__item">Распространение персональных данных&nbsp;&mdash; любые действия, результатом которых является раскрытие персональных данных неопределенному кругу лиц;</li>
              <li class="modal__item">Предоставление персональных данных&nbsp;&mdash; любые действия, результатом которых является раскрытие персональных данных определенному кругу лиц;</li>
              <li class="modal__item">Уничтожение персональных данных&nbsp;&mdash; любые действия, результатом которых является безвозвратное уничтожение персональных на&nbsp;ЭВМ или любых других носителях.</li>
            </ol>
          </li>
          <li class="modal__item-subtitle">
            <h3 class="modal__subtitle">Оператор может обрабатывать следующие персональные данные Пользователя</h3>
            <ol class="modal__list">
              <li class="modal__item">Список персональных данных, которые обрабатывает оператор: номер телефона.</li>
              <li class="modal__item">Кроме того, на&nbsp;сайте происходит сбор и&nbsp;обработка обезличенных данных о&nbsp;посетителях (в&nbsp;т.ч. файлов &laquo;cookie&raquo;) с&nbsp;помощью сервисов интернет-статистики (Яндекс Метрика, Гугл Аналитика и&nbsp;других).</li>
            </ol>
          </li>
          <li class="modal__item-subtitle">
            <h3 class="modal__subtitle">Цели обработки персональных данных</h3>
            <ol class="modal__list">
              <li class="modal__item">Персональные данные пользователя&nbsp;&mdash; номер телефона&nbsp;&mdash; обрабатываются со&nbsp;следующей целью: уточнение деталей заказа. Оператор имеет право направлять Пользователю уведомления о&nbsp;новых продуктах и&nbsp;услугах, специальных предложениях и&nbsp;различных событиях. Пользователь всегда может отказаться от&nbsp;получения информационных сообщений, направив Оператору письмо на&nbsp;адрес support@cakes.ru</li>
              <li class="modal__item">Обезличенные данные Пользователей, собираемые с&nbsp;помощью сервисов интернет-статистики, служат для сбора информации о&nbsp;действиях Пользователей на&nbsp;сайте, улучшения качества сайта и&nbsp;его содержания.</li>
            </ol>
          </li>
          <li class="modal__item-subtitle">
            <h3 class="modal__subtitle">Правовые основания обработки персональных данных</h3>
            <ol class="modal__list">
              <li class="modal__item">Оператор обрабатывает персональные данные Пользователя только в&nbsp;случае их&nbsp;отправки Пользователем через формы, расположенные на&nbsp;веб-сайте website.ru. Отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с&nbsp;данной Политикой.</li>
              <li class="modal__item">Оператор обрабатывает обезличенные данные о&nbsp;Пользователе в&nbsp;случае, если Пользователь разрешил это в&nbsp;настройках браузера (включено сохранение файлов &laquo;cookie&raquo; и&nbsp;использование технологии JavaScript).</li>
            </ol>
          </li>
          <li class="modal__item-subtitle">
            <h3 class="modal__subtitle">Порядок сбора, хранения, передачи и&nbsp;других видов обработки персональных данных</h3>
            <ol class="modal__list">
              <li class="modal__item">Оператор обеспечивает сохранность персональных данных и&nbsp;принимает все возможные меры, исключающие доступ к&nbsp;персональным данным неуполномоченных лиц.</li>
              <li class="modal__item">Персональные данные Пользователя никогда, ни&nbsp;при каких условиях не&nbsp;будут переданы третьим лицам, за&nbsp;исключением случаев, связанных с&nbsp;исполнением действующего законодательства.</li>
              <li class="modal__item">В&nbsp;случае выявления неточностей в&nbsp;персональных данных, Пользователь может актуализировать&nbsp;их, направив Оператору уведомление с&nbsp;помощью электронной почты на&nbsp;электронный адрес Оператора support@cakes.ru, с&nbsp;пометкой &laquo;Актуализация персональных данных&raquo;.</li>
              <li class="modal__item">Срок обработки персональных данных является неограниченным. Пользователь может в&nbsp;любой момент отозвать свое согласие на&nbsp;обработку персональных данных, направив Оператору уведомление с&nbsp;помощью электронной почты на&nbsp;электронный адрес Оператора support@cakes.ru, с&nbsp;пометкой &laquo;Отзыв согласия на&nbsp;обработку персональных данных&raquo;.</li>
            </ol>
          </li>
          <li class="modal__item-subtitle">
            <h3 class="modal__subtitle">Заключительные положения</h3>
            <ol class="modal__list">
              <li class="modal__item">Пользователь может получить любые разъяснения по&nbsp;интересующим вопросам, касающимся обработки его персональных данных, обратившись к&nbsp;Оператору с&nbsp;помощью электронной почты support@cakes.ru.</li>
              <li class="modal__item">В&nbsp;данном документе будут отражены любые изменения политики обработки персональных данных Оператором. В&nbsp;случае существенных изменений Пользователю может быть выслана информация на&nbsp;указанный им&nbsp;электронный адрес.</li>
            </ol>
          </li>
        </ol>
      </div>
  `

btnOpenModalPolicy.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(policyText);
});