/**
 * Created by Administrator on 2018/1/7.
 */

//顶部的轮播图
var wlimg = document.getElementById('wlimg');
var wlcount = 0;//默认为0，表示第一个li显示
var $wllis = $(".wlslider .top li");//所有li
//1 设置右按钮操作
$(".wlarrow-right").click(function () {
    wlcount++;
    (wlcount === $wllis.length) && (wlcount = 0)
    $wllis.eq(wlcount).stop().fadeIn(1500).siblings().stop().fadeOut(1500);
});
//2 设置左按钮操作
$(".wlarrow-left").click(function () {
    wlcount--;
    (wlcount === -1) && (wlcount = $wllis.length - 1)
    $wllis.eq(wlcount).stop().fadeIn(1500).siblings().stop().fadeOut(1500);
});
var wlflag;
function run() {
    wlflag = setInterval(function () {
        $(".wlarrow-right").click();
    }, 1500)
}
run();

//小图片放上去就显哪张大图片
$('#wllunbotu>li').mouseenter(function () {
    var index = $(this).index();
    $wllis.eq(index).stop().fadeIn(1500).siblings().stop().fadeOut(1500);
});
$('#wllunbotu').mouseenter(function () {
    console.log(1);
    clearInterval(wlflag);
}).mouseleave(function () {
    console.log(2);
    run();
});
//function animate(node, targetValue, callack) {
//    if (node.time != undefined) {
//        clearInterval(node.timer);
//    }
//    node.time = setInterval(function () {
//        var currentValue = node.offsetLeft;
//        var step = (targetValue - currentValue) / 20;
//        if (step > 0) {
//            step = Math.ceil(step);
//        } else if (step < 0) {
//            step = Math.floor(step);
//        }
//        if (currentValue == targetValue) {
//            clearInterval(node.time);
//            if (callack != undefined) {
//                callack();
//            }
//            return;
//        }
//        node.style.left = currentValue + step + 'px';
//    }, 10)
//
//}
//两排图片有一个盒子盖住的那种效果
$('.chf_mainpic li').mouseenter(function () {
    var index = $(this).index();
    //console.log(index);
    $('.chf_mainpic li').eq(index).children('.wlshower').css({
        top: '0px',
        opacity: '0.5'
    }).slideDown(3000).siblings().stop().slideDown();

})
$('.chf_mainpic li').mouseleave(function () {
    var index = $(this).index();
    //console.log(index);
    $('.chf_mainpic li').eq(index).children('.wlshower').css({
        top: '-455px',
        opacity: '0'
    }).slideDown(3000).siblings().stop().slideDown();

})


//过渡的那张图图片
var wwl = setInterval(function () {
    $('#wlpicture').slideUp();
}, 3000)
$('.chf_fl span').click(function () {
    console.log(111);
    $('#wlpicture').slideDown(3000);
    clearInterval(wwl);
});
//两张图片的特效
/*
 //只是把图片的大小变大了，可视区域并没有变化
 $(function () {
 var w = $(".wlinfobanner_left_l").width();
 var h = $(".wlinfobanner_left_l").height();
 var w2 = w + 20;
 var h2 = h + 20;

 $(".wlinfobanner_left_l").hover(function () {
 $(this).stop().animate({height: h2, width: w2, left: "-10px", top: "-10px"}, 400);
 }, function () {
 $(this).stop().animate({height: h, width: w, left: "0px", top: "0px"}, 400);
 });
 });
 $(function () {
 var w = $(".wlinfobanner_right_r").width();
 var h = $(".wlinfobanner_right_r").height();
 var w2 = w + 20;
 var h2 = h + 20;

 $(".wlinfobanner_right_r").hover(function () {
 $(this).stop().animate({height: h2, width: w2, left: "-10px", top: "-10px"}, 400);
 }, function () {
 $(this).stop().animate({height: h, width: w, left: "0px", top: "0px"}, 400);
 });
 });
 */
//$(function () {
//    var w = $(".wlinfobanner_left").width();
//    var h = $(".wlinfobanner_left").height();
//    var w2 = w + 50;
//    var h2 = h + 50;
//    $(".wlinfobanner_left").mouseenter(function () {
//
//        $(this).stop().animate({height: h2, width: w2, left: "-25px", top: "-25px"}, 200, "linear"
//
//        );
//    });
//    $(".wlinfobanner_left").mouseleave(function () {
//
//        $(this).stop().animate({height: h, width: w, left: "0px", top: "-25px"}, 100, "linear"
//        );
//    });
//});
//$(function () {
//    var w = $(".wlinfobanner_right").width();
//    var h = $(".wlinfobanner_right").height();
//    var w2 = w + 50;
//    var h2 = h + 50;
//    $(".wlinfobanner_right").mouseenter(function () {
//
//        $(this).stop().animate({height: h2, width: w2, left: "-25px", top: "-25px"}, 200, "linear", function () {
//
//        });
//    });
//    $(".wlinfobanner_right").mouseleave(function () {
//
//        $(this).stop().animate({height: h, width: w, left: "0px", top: "-25px"}, 100, "linear", function () {
//        });
//    });
//});
$(function () {
    var w = $(".wlinfobanner_left_l").width();
    var h = $(".wlinfobanner_left_l").height();
    var w2 = w + 50;
    var h2 = h + 50;

    $(".wlinfobanner_left_l").hover(function () {
        $(this).stop().animate({height: h2, width: w2, left: "-150px", top: "-60px"}, 400);
    }, function () {
        $(this).stop().animate({height: h, width: w, left: "-50px", top: "-20px"}, 400);
    });
});
$(function () {
    var w = $(".wlinfobanner_right_r").width();
    var h = $(".wlinfobanner_right_r").height();
    var w2 = w + 20;
    var h2 = h + 20;

    $(".wlinfobanner_right_r").hover(function () {
        $(this).stop().animate({height: h2, width: w2, left: "-150px", top: "-60px"}, 400);
    }, function () {
        $(this).stop().animate({height: h, width: w, left: "-50px", top: "-20px"}, 400);
    });
});

//下面三张图片的特效
var $li = $('.wlcontainer li ');
$li.mouseenter(function () {
    $(this).css('opacity', '1').siblings().css('opacity', '0.5')
})
$('.wlcontainer').mouseleave(function () {
    $('li').css('opacity', '1');
});


//tab悬浮固定效果

/*二维码特效*/
var icon1 = document.getElementById("icon1");
var ewm = document.getElementById("ewm");
//icon1.onmouseenter = function () {
//    ewm.className = "ewm";
//}
//icon1.onmouseleave = function () {
//    ewm.className = "";
//}

/*登录注册按钮特效*/
$(function () {
    $("#chf_login").mouseenter(function () {
        //console.log(123);
        $(".change").animate({"left": "0px"}, 400, function () {
            $("#chf_login a").css("color", "white");
        });
        $("#chf_register a").css("color", "#353535");
    })
    $("#chf_register").mouseenter(function () {
        //console.log(123);
        $(".change").animate({"left": "50px"}, 400, function () {
            $("#chf_register a").css("color", "white");
        });
        $("#chf_login a").css("color", "#353535");
    })
})
/*悬浮框特效*/

//翻书动画效果
$(function () {
    var oBox = document.getElementById('box');
    var oPag = document.querySelector('#box .pag1');
    var oFront = document.querySelector('#box .pag1 .front');
    var oBack = document.querySelector('#box .pag1 .back');
    var oPag2 = document.querySelector('#box .pag2');

    var iNow = 0;
    var bReady = true;
    oBox.onclick = function () {
        if (bReady == false) return;
        bReady = false;

        iNow++;
        oPag.style.transition = '2s all ease';
        oPag.style.transform = 'rotateY(-180deg)';
        oPag.addEventListener('transitionend', function () {
            oPag.style.transition = 'none';
            oPag.style.transform = 'rotateY(0deg)';
            oFront.style.backgroundImage = oBox.style.backgroundImage = 'url(images/wlbfanye' + iNow % 4 + '.jpg)';  //4有几张banner就%几
            oBack.style.backgroundImage = oPag2.style.backgroundImage = 'url(images/wlbfanye' + (iNow + 1) % 4 + '.jpg)';
            bReady = true;
        }, false);
    }
})
setInterval(function () {
    $("#box").trigger("click")
}, 2000)
$(function () {
    $(".btn").click(function () {
        $("#box").fadeToggle();
    })
})

//火箭地方
function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
var rocket = document.getElementById('rocket')
window.onscroll = function () {
    if (scroll().top > 1000) {
        rocket.style.display = 'block';
    } else {
        rocket.style.display = 'none';
    }
    leader = scroll().top;

}
var time = null;
var target = 0;
var leader = 0;
rocket.onclick = function () {
    clearInterval(time);
    time = setInterval(function () {
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        window.scrollTo(0, leader);
        if (leader == 0) {
            clearInterval(time)
        }
    }, 25)
}
//克隆网页，模拟后台的数据
var datas = [
    {
        "img": "images/wlzixun2.jpg",
        "title": "你适合穿什么婚纱？",
        "content": "婚纱还是得选一款适合自己的，扬长避短很重要！"
    },
    {
        "img": "images/wlzixun3.jpg",
        "title": "国民奥运冠军CP秦凯&何姿西安大婚，我们准备好了！",
        "content": "Amazing 只为有婚礼梦想的你 完美浪漫等待开启~~~"
    },
    {
        "img": "images/wlzixun4.jpg",
        "title": "如何防晒才能做美美哒新娘",
        "content": "夏天灼热的阳光都要把人晒化，那么问题来了，如何优雅自如的做美美滴新娘？"
    }
];
var $article = $(".article-cell"), $newArticle, obj;
var $ul = $(".article-list");
for (var i = 0; i < datas.length; i++) {
    $newArticle = $article.clone(); //克隆一条新的婚礼资讯
    $newArticle.appendTo($ul);//新克隆的放到li中
    obj = datas[i];
    $newArticle.find('img').attr("src", obj["img"]);
    $newArticle.find(".article-title").text(obj["title"]);
    $newArticle.find(".article-desc").text(obj["content"]);
}


//-------------------------------------------------------------------------------------------------------
//3d导航背景及字体颜色设置
$(function () {
    var $tab_ljj_odd = $(".tab_ljj>li:odd");
    console.log($tab_ljj_odd);
    $tab_ljj_odd.children(".tab_ljj_before").css({color: "pink", backgroundColor: "#fff", fontWeight: "700"});
});


//新闻动画效果
//新闻内容部分p标签文字效果
$(function () {
    var $newsCon_ljj_li = $("#newsCon_ljj").children("li");
    $newsCon_ljj_li.mouseenter(function () {
        var index = $(this).index();
        $newsCon_ljj_li.eq(index).children("p").stop().animate({top: "410px"}, 100, "linear");
    });
});
//新闻大图部分轮播效果
//(function () {
//    function run_ljj(node, targetValue, callBack) {
//        if (node.timer != undefined) {
//            clearInterval(node.timer);
//        }
//        node.timer = setInterval(function () {
//            var currentVlaue = node.offsetLeft;
//            if (targetValue > currentVlaue) {
//                var step = 10;
//            } else if (targetValue < currentVlaue) {
//                var step = -10;
//            }
//            //console.log(step,currentVlaue,targetValue);
//            if (targetValue == currentVlaue) {
//                clearInterval(node.timer);
//                if (callBack != undefined) {
//                    callBack();
//                }
//                return;
//            }
//            node.style.left = currentVlaue + step + "px";
//        }, 20);
//    }
//
//    var run_pic = document.getElementById("newspic_run_ljj");
//    console.log(1);
//    var lock = true;
//    var count = 0;
//    var targetVlau;
//    console.log(run_pic);
//    run_pic.onclick = function () {
//
//        if (lock) {
//            count++;
//            lock = false;
//            targetVlau = -1150 * count;
//            run_ljj(run_pic, targetVlau, function () {
//                if (count == 2) {
//                    count = 0;
//                    run_pic.style.left = "0px";
//                }
//                lock = true;
//            });
//        }
//    }
//    var timer_run;
//
//    function autoPlay() {
//        timer_run = setInterval(function () {
//            run_pic.onclick();
//        }, 3000)
//    }
//
//    //autoPlay();
//    run_pic.onmouseenter = function () {
//        clearInterval(timer_run);
//    }
//    run_pic.onmouseleave = function () {
//        autoPlay();
//    }
//})();


//旅拍部分动画效果
//phototgraph4_ljj部分
$(function () {
    var $phototgraph4_ljj_li = $("#phototgraph4_ljj");
    var $phototgraph4_ljj_li = $phototgraph4_ljj_li.children("li");
    //console.log($phototgraph4_ljj_li);
    $phototgraph4_ljj_li.mouseenter(function () {
        var count = $(this).index();
        console.log(count);
        $phototgraph4_ljj_li.eq(count).stop().animate({padding: "15px"}, 500, "linear");
    });
    $phototgraph4_ljj_li.mouseleave(function () {
        var count = $(this).index();
        $phototgraph4_ljj_li.eq(count).stop().animate({padding: "0px"}, 500, "linear");
    });

});
//-----------------------------------------------------
var chf_banner = document.getElementById("chf_banner");
var ban_pic = document.getElementById("ban_pic")
var chf_lBtn = document.getElementById("chf_lBtn");
var chf_rBtn = document.getElementById("chf_rBtn");
var ban_btn = document.getElementById("ban_btn");
//var lis = ban_btn.getElementsByTagName("li");
var count = 0;//当前显示标识
var lock = true;
//点击右侧按钮实现轮播
//chf_rBtn.onclick = function () {
//    if (lock) {
//        lock = false;
//        count++;
//        var targetValue = count * -1150;
//        var temp = count;
//        animate(ban_pic, targetValue, function () {
//            if (count === 6) {
//                count = 0;
//                ban_pic.style.left = 0 + "px";
//            }
//            lock = true;
//        });
//        //改变小圆点样式
//        if (temp === 6) {
//            temp = 0;
//        }
//        for (var i = 0; i < lis.length; i++) {
//            lis[i].className = "";
//        }
//        lis[temp].className = "active";
//    }
//}
//点击左侧按钮实现轮播
//chf_lBtn.onclick = function () {
//    if (lock) {
//        lock = false;
//        count--;
//        if (count < 0) {
//            count = 5;
//            ban_pic.style.left = "-8055px";
//        }
//        var targetValue = count * -1150;
//        var temp = count;
//        animate(ban_pic, targetValue, function () {
//            lock = true;
//        })
//        //改变圆点样式
//        for (var i = 0; i < lis.length; i++) {
//            lis[i].className = "";
//        }
//        lis[temp].className = "active";
//    }
//}
//小按钮控制轮播
//for (var i = 0; i < lis.length; i++) {
//    lis[i].weizhi = i;
//}
//ban_btn.onclick = function (e) {
//    var _e = window.event || e;
//    var _t = _e.target || _e.srcElement;
//    if (_t.tagName === "LI") {
//        count = _t.weizhi;
//        var temp = count;
//        var targetValue = count * -1150;
//        animate(ban_pic, targetValue);
//        //改变圆点样式
//        for (var i = 0; i < lis.length; i++) {
//            lis[i].className = "";
//        }
//        lis[temp].className = "active";
//    }
//}
//自动轮播
var timer;
//function autoPlay() {
//    timer = setInterval(function () {
//        chf_rBtn.onclick();
//    }, 2000)
//}
//autoPlay();
//鼠标进入chf_banner停止轮播
//chf_banner.onmouseenter = function () {
//    clearInterval(timer);
//}
//鼠标离开chf_banner启动轮播
//chf_banner.onmouseleave = function () {
//    autoPlay();
//}


/*婚礼图片页面悬浮框特效*/
//获取操作元素
var chf_topnav = document.getElementById("chf_topnav");
//获取chf_logo到文档顶部的距离
var v = chf_topnav.offsetTop;
//给window绑定滚动事件
window.onscroll = function () {
    var v1 = document.documentElement.scrollTop || document.body.scrollTop;
    if (v1 > v) {
        chf_topnav.className = "chf_topnav active2";
    } else {
        chf_topnav.className = "chf_topnav";
    }
}

/*婚礼图片页面二维码特效*/
var icon1 = document.getElementById("icon1");
var ewm = document.getElementById("ewm");
icon1.onmouseenter = function () {
    ewm.className = "ewm";
}
icon1.onmouseleave = function () {
    ewm.className = "";
}

/*jquery部分*/
$(function () {
    /*婚礼图片页面登录注册按钮特效*/
    $("#chf_login").mouseenter(function () {
        //console.log(123);
        $(".change").animate({"left": "0px"}, 400, function () {
            $("#chf_login a").css("color", "white");
        });
        $("#chf_register a").css("color", "#353535");
    })
    $("#chf_register").mouseenter(function () {
        //console.log(123);
        $(".change").animate({"left": "50px"}, 400, function () {
            $("#chf_register a").css("color", "white");
        });
        $("#chf_login a").css("color", "#353535");
    })

    /*婚礼图片页面lazyload部分*/
    $("img.lazy").lazyload();


})
//------------------------------------
/**
 * Created by dell on 2018/1/7.
 */
/*
 功能：动画
 参数：
 node 运动谁？  节点对象  必填
 targetValue   目标值   必填
 callback  一个物体运动完之后要执行的代码  函数 可选
 */
function animate(node, targetValue, callback) {
    //var flag
    //时间：定时器
    //状态：更改div的状态（更改left值）
    //点击按钮会产生一个新的定时器，新的定时器产生之前，把之前的定时器停止了。
    if (node.flag != undefined) { //给每一个运动物体添加 一个flag属性表示这个运动物体的定时器标识
        clearInterval(node.flag); //把之前的定时器停止了。
    }
    //给每一个运动物体添加一个定时器标识
    node.flag = setInterval(function () {

        //原有的left值
        var currentValue = node.offsetLeft;
        //步长
        var step = (targetValue - currentValue) / 20;
        if (step > 0) {
            step = Math.ceil(step);
        } else if (step < 0) {
            step = Math.floor(step);
        }

        //判断是否到达目标
        if (currentValue == targetValue) { //到达目标
            clearInterval(node.flag);//结束定时器,下一时间后定时器不在执行]
            if (callback != undefined) {
                callback();
            }
            return;//结束函数的执行
        }
        node.style.left = currentValue + step + 'px';

    }, 10);
}