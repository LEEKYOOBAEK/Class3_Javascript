var Links = { 
    setColor:function(color){ 
    //   var alist = document.querySelectorAll('a');
    //   var i = 0; 
    //   while( i < alist.length ) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }
    $('a').css("color", color);
  } 
}
var Body = {
  setColor:function (color) {
    $('body').css('color',color);
    },
  setBackgroundColor:function (color){
  $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('yellow');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    
    Links.setColor('blue');
  }
}