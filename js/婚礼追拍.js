/**
 * Created by dingjiebing on 2018/1/8.
 */
//top
window.onload = function(){
  var nowimg = 0;

  $(".baozha").prepend("<div class='maoni'></div>");

  for(var i = 0 ; i <= 24 ; i++){
    $(".maoni").append("<p></p>");
    $(".maoni p").eq(i).css("top",parseInt(i / 5) * 82);
    $(".maoni p").eq(i).css("left",i % 5 * 194);
    $(".maoni p").eq(i).css("background-position", (i % 5 * -194) + "px " + parseInt(i / 5) * -82 +  "px");

  }

  $("input").click(
      function(){

        if(nowimg < 6){
          nowimg++;
        }else{
          nowimg = 0;
        }
        $(".zhentu").attr("src",'../images/'+nowimg + ".jpg");

        $(".maoni p").css("transition","all 1s ease 0s");
        $(".baozha").addClass("fei");

        //添加飞的方向：
        $(".maoni p").each(
            function(){
              $(this).css("-webkit-transform","rotateX(" + -parseInt(Math.random() * 90)+ "deg) rotateY(" + parseInt(Math.random() *  100) + "deg) translateZ(500px)")
            }
        );


        setTimeout(function(){
          $(".baozha").removeClass("fei");
          $(".maoni p").css("transition","none");
          $(".maoni p").css("background-image","url(../images/" + nowimg + ".jpg)");

          $(".maoni p").css("-webkit-transform","none");
        },1000);
      }
  );
}


//top
//  content B

$(function(){
  $('.E_content>ul>li').mouseenter(function(){
    $(this).css('opacity',1).slideDown(2000).siblings().css('opacity',0.3);
  });
  $('.E_content').mouseleave(function(){
    $('.E_content>ul>li').css('opacity',1);
  })
});

//  content E

//左侧飘窗 开始
$(function(){

  $('#demo1').jcContact({
    speed:700,
    position:'top',
    posOffsetY : 300,
    btnPosition : 'top',
    btnPosoffsetY : 44 ,
  });

});

//左侧飘窗结束



// 图片动画
function Index(node) {
  this.node = node;
  this.init();
};
Index.prototype.init = function () {
  var self = this;
  this.nodes = [];
  Array.prototype.slice.call(self.node, 0).forEach(function (item, index) {
    self.nodes.push(self.update(item));
    self.bindEvents(item, index);
  });
};
Index.prototype.update = function (item) {
  return {
    w: item.offsetWidth,
    h: item.offsetHeight,
    l: item.offsetLeft,
    t: item.offsetTop
  }
};
Index.prototype.bindEvents = function (item, index) {
  var self = this;
  $(item).on('mouseenter', function (e) {
    self.addClass(e, item, 'in', index);
    return false;

  })
  $(item).on('mouseleave', function (e) {
    self.addClass(e, item, 'out', index);
    return false;
  })
};
Index.prototype.addClass = function (e, item, state, index) {
  var direction = this.getDirection(e, index);
  var class_suffix = '';
  switch (direction) {
    case 0:
      class_suffix = '-top';
      break;
    case 1:
      class_suffix = '-right';
      break;
    case 2:
      class_suffix = '-bottom';
      break;
    case 3:
      class_suffix = '-left';
      break;
  }
  item.className = '';
  item.classList.add(state + class_suffix);
};
Index.prototype.getDirection = function (e, index) {
  var w = this.nodes[index].w,
      h = this.nodes[index].h,
      x = e.pageX - this.nodes[index].l - w / 2 ,
      y = e.pageY - this.nodes[index].t - h / 2 ;
  // 取到x,y两点坐标
  d=(Math.round(((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90)+3) % 4;


  return d;//d的数值用于判断方向上下左右。
};
new Index($('.wrapper>ul>li'));