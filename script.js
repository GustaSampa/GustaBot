document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animated", {
    speed: 200,
    loop: true
  }).type('play Eu Só Quero Um Xodó', {delay: 500}).delete(24)
  .type('reddit', {delay: 500}).delete(6)
  .type('volume 5', {delay: 500}).delete(8)
  .type('ban @user', {delay: 500}).delete(9)
  .type('hug @user', {delay: 500}).delete(9)
  .type('kiss @user', {delay: 500}).delete(10)
  .type('bye', {delay: 500}).delete(3)
  .type('pong', {delay: 500}).delete(4)
  .go()
})