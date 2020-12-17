var navigation = document.querySelector('.header__navigation');
var navToggle = document.querySelector('.header__toggle');

navigation.classList.remove('header__navigation--opened');

navToggle.addEventListener('click', function () {
  if (navigation.classList.contains('header__navigation--closed')) {
    navigation.classList.remove('header__navigation--closed');
    navigation.classList.add('header__navigation--opened');
  } else {
    navigation.classList.add('header__navigation--closed');
    navigation.classList.remove('header__navigation--opened');
  }
}
)
