import {iosVhFix} from './utils/ios-vh-fix';
import {Burger} from './vendor/burger';
import {initMap} from './modules/map/yandex-map';
import {PIN_IMAGE, PIN_INFO, DEFAULT_ZOOM, MAP_CENTER} from './modules/map/map-initials';
import {initJS} from './utils/no-js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initJS();
    const burger = new Burger();
    burger.init();
    setTimeout(() => {
      initMap({
        id: 'map',
        initials: {
          center: MAP_CENTER,
          controls: [],
          zoom: DEFAULT_ZOOM,
        },
        placemark: [
          {
            hintContent: PIN_INFO,
          },
          {
            iconImageHref: PIN_IMAGE,
            iconImageSize: [18, 22],
            iconLayout: 'default#image',
            iconShadow: false,
            iconImageOffset: [-9, -22],
          }
        ],
      });
    }, 3000);
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
