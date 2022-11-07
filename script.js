const select = (name) => document.querySelector(name);

const cartIcon = select('.header__icons--cart');
const cartContainer = select('.container');

console.log('done')

const enter = () => {
  cartContainer.style.visibility = 'visible'
  cartContainer.style.opacity = '1'
}
const leave = () => {
  cartContainer.style.visibility = 'hidden'
  cartContainer.style.opacity = '0'
}

cartIcon.addEventListener('mouseenter', enter, false)
cartIcon.addEventListener('mouseleave', leave, false)
cartContainer.addEventListener('mouseenter', enter, false)
cartContainer.addEventListener('mouseleave', leave, false)