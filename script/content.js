chrome.runtime.onMessage.addListener(function(message) {

  if (message === 'secret') {
    $('body').css('background', 'url(https://avatars3.githubusercontent.com/u/6164474?s=460&v=4)');
  }
  if (message === 'night') {
    $('*').css('background-color', '#000');
    changeTextColor('grey');
    $('input').css('color', 'grey');
    $('a').css('color', 'gold');
  }
  if (message === 'day') {
    $('*').css('background-color', '#fff');
    changeTextColor('black');
    $('a').css('color', 'blue');
  }
  if (message === 'disappear') {
    $('*').css('color', 'rgba(0, 0, 0, 0)');
  }
  if (message === 'fonts') {
    const fonts = ['Impact', 'Luminari', 'Chalkduster', 'Stencil Std', 'Marker Felt', 'Trattatello'];

    $('*').css('font-family', fonts[Math.floor(Math.random() * 6)]);
  }
  if (message === 'upside-down') {
    let rotation = 0;

    $('body').css('transform', `rotate(${rotation += 180}deg)`);
  }
  if (message === 'rotate') {
    let rotation = 0;

    setInterval(function(){
      $('body').css('transform', `rotate(${rotation += 10}deg)`);
    }, 30);
  }
  if (message === 'random') {
    changeToRandomColor();
  }
  if (message === 'party') {
    let rotation = 0;

    setInterval(function(){
      changeToRandomColor();
      $('body').css('transform', `rotate(${rotation += 10}deg)`);
    }, 30);
  }
  if (message === 'reset') {
    location.reload();
  }


  // random color generation
  function colorGen() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  // changes all the components in the webpage to random colors
  function changeToRandomColor() {
    $('*').css('background-color', colorGen());
    $('div').css('background-color', colorGen());
    $('h1').css('color', colorGen());
    $('h2').css('color', colorGen());
    $('h3').css('color', colorGen());
    $('h4').css('color', colorGen());
    $('h5').css('color', colorGen());
    $('h6').css('color', colorGen());
    $('p').css('color', colorGen());
    $('span').css('color', colorGen());
    $('a').css('color', colorGen());
  }

  // change all the texts to the passed color
  function changeTextColor(color) {
    $('h1').css('color', color);
    $('h2').css('color', color);
    $('h3').css('color', color);
    $('h4').css('color', color);
    $('h5').css('color', color);
    $('h6').css('color', color);
    $('p').css('color', color);
    $('span').css('color', color);
  }
});