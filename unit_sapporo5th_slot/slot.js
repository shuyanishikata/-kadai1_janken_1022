

$(".スタートボタン内").on("click", function () {
$(".ストップボタン").css("color", "red");
$("#play-startbutton").get(0).play();
})


// ***********リールの中身***********//
var random1 = 1 + Math.floor(Math.random() * 13);
var random2 = 1 + Math.floor(Math.random() * 13);
var random3 = 1 + Math.floor(Math.random() * 13);
// ***********リールの中身***********//

console.log(random1)
console.log(random2)
console.log(random3)


// ***********1つめ***********//
$(".ストップボタン１").on("click", function () {
$(".ストップボタン１").css("color", "yellow ");
if(random1==1){
    $('.リール１').attr('src', 'S01_いっしー.png');
}
if(random1==2){
    $('.リール１').attr('src', 'S02_梅king.png');
}
if(random1==3){
    $('.リール１').attr('src', 'S03_ちゃんくぼ.png');
}
if(random1==4){
    $('.リール１').attr('src', 'S04_サガット.png');
}
if(random1==5){
    $('.リール１').attr('src', 'S05_ちゃんりな.png');
}
if(random1==6){
    $('.リール１').attr('src', 'S06_ぴーや.png');
}
if(random1==7){
    $('.リール１').attr('src', 'S14_よね.png');
}
if(random1==8){
    $('.リール１').attr('src', 'S08_とうま.png');
}
if(random1==9){
    $('.リール１').attr('src', 'S09_まっきー.png');
}
if(random1==10){
    $('.リール１').attr('src', 'S10_もりくん.png');
}
if(random1==11){
    $('.リール１').attr('src', 'S11_なべさん.png');
}
if(random1==12){
    $('.リール１').attr('src', 'S12_近藤すず音.png');
}
if(random1==13){
    $('.リール１').attr('src', 'S13_イソノカツオ.png');
}
$("#play-stopbutton").get(0).play();
}
)

// ***********1つめ***********//
    

// ***********2つめ***********//
$(".ストップボタン２").on("click", function () {
    $(".ストップボタン２").css("color", "yellow ");
    if(random2==1){
        $('.リール２').attr('src', 'S01_いっしー.png');
    }
    if(random2==2){
        $('.リール２').attr('src', 'S02_梅king.png');
    }
    if(random2==3){
        $('.リール２').attr('src', 'S03_ちゃんくぼ.png');
    }
    if(random2==4){
        $('.リール２').attr('src', 'S04_サガット.png');
    }
    if(random2==5){
        $('.リール２').attr('src', 'S05_ちゃんりな.png');
    }
    if(random2==6){
        $('.リール２').attr('src', 'S06_ぴーや.png');
    }
    if(random2==7){
        $('.リール２').attr('src', 'S14_よね.png');
    }
    if(random2==8){
        $('.リール２').attr('src', 'S08_とうま.png');
    }
    if(random2==9){
        $('.リール２').attr('src', 'S09_まっきー.png');
    }
    if(random2==10){
        $('.リール２').attr('src', 'S10_もりくん.png');
    }
    if(random2==11){
        $('.リール２').attr('src', 'S11_なべさん.png');
    }
    if(random2==12){
        $('.リール２').attr('src', 'S12_近藤すず音.png');
    }
    if(random2==13){
        $('.リール２').attr('src', 'S13_イソノカツオ.png');
    }
    $("#play-stopbutton").get(0).play();
    if(random1==random2){
        $(".画面").text("リーチ！");
        document.getElementById("画面").style.fontSize = '60px';
         }
    })
    
// ***********2つめ***********//


// ***********3つめ***********//
$(".ストップボタン３").on("click", function () {
    $(".ストップボタン３").css("color", "yellow ");
    if(random3==1){
        $('.リール３').attr('src', 'S01_いっしー.png');
    }
    if(random3==2){
        $('.リール３').attr('src', 'S02_梅king.png');
    }
    if(random3==3){
        $('.リール３').attr('src', 'S03_ちゃんくぼ.png');
    }
    if(random3==4){
        $('.リール３').attr('src', 'S04_サガット.png');
    }
    if(random3==5){
        $('.リール３').attr('src', 'S05_ちゃんりな.png');
    }
    if(random3==6){
        $('.リール３').attr('src', 'S06_ぴーや.png');
    }
    if(random3==7){
        $('.リール３').attr('src', 'S14_よね.png');
    }
    if(random3==8){
        $('.リール３').attr('src', 'S08_とうま.png');
    }
    if(random3==9){
        $('.リール３').attr('src', 'S09_まっきー.png');
    }
    if(random3==10){
        $('.リール３').attr('src', 'S10_もりくん.png');
    }
    if(random3==11){
        $('.リール３').attr('src', 'S11_なべさん.png');
    }
    if(random3==12){
        $('.リール３').attr('src', 'S12_近藤すず音.png');
    }
    if(random3==13){
        $('.リール３').attr('src', 'S13_イソノカツオ.png');
    }
    $("#play-stopbutton").get(0).play();
    if(random1 !== random2){
        $(".画面").text("ざんねん！");
        document.getElementById("画面").style.fontSize = '60px';
        $(".画面").fadeOut(3000);
        $(".画面").fadeIn(1000);
    }
    if(random2 !== random3){
        $(".画面").text("ざんねん！");
        document.getElementById("画面").style.fontSize = '60px';
        $(".画面").fadeOut(3000);
        $(".画面").fadeIn(1000);
    }
    if(random1 == random2){
        if(random2 == random3){
        $(".画面").text("Congratulations!!!");
        document.getElementById("画面").style.fontSize = '70px';
    }
    }else{
        $(".画面").text("ざんねん！");
        document.getElementById("画面").style.fontSize = '60px';
        $(".画面").fadeOut(3000);
        $(".画面").fadeIn(1000);
    }
    })
    
// ***********3つめ***********//

// ***********リセットボタン***********//
$(".reload").on("click", function () {
    $("#play-reloadbutton").get(0).play();
    window.location.reload();
})
// ***********リセットボタン***********//


// ***********プロフ表示***********//
let pdf1 = document.getElementById('pdf1');
let pdf2 = document.getElementById('pdf2');
let pdf3 = document.getElementById('pdf3');

let S01pdf = 'S01_いっしー.pdf';
let S02pdf = 'S02_梅king.pdf';
let S03pdf = 'S03_ちゃんくぼ.pdf';
let S04pdf = 'S04_サガット.pdf';
let S05pdf = 'S05_ちゃんりな.pdf';
let S06pdf = 'S06_ぴーや.pdf';
let S14pdf = 'S14_よね.pdf';
let S08pdf = 'S08_とうま.pdf';
let S09pdf = 'S09_まっきー.pdf';
let S10pdf = 'S10_もりくん.pdf';
let S11pdf = 'S11_なべさん.pdf';
let S12pdf = 'S12_近藤すず音.pdf';
let S13pdf = 'S13_イソノカツオ.pdf';


// S01いっしー
if(random1==1){
pdf1.setAttribute('href', S01pdf);
}
if(random2==1){
    pdf2.setAttribute('href', S01pdf);
}
if(random3==1){
    pdf3.setAttribute('href', S01pdf);
}

// S02
if(random1==2){
    pdf1.setAttribute('href',S02pdf);
}
if(random2==2){
    pdf2.setAttribute('href',S02pdf );
}
if(random3==2){
    pdf3.setAttribute('href',S02pdf );
}


// S03
if(random1==3){
    pdf1.setAttribute('href',S03pdf );
}
if(random2==3){
    pdf2.setAttribute('href',S03pdf );
}
if(random3==3){
    pdf3.setAttribute('href',S03pdf );
}

// S04
if(random1==4){
    pdf1.setAttribute('href',S04pdf );
}
if(random2==4){
    pdf2.setAttribute('href',S04pdf );
}
if(random3==4){
    pdf3.setAttribute('href',S04pdf );
}

// S05
if(random1==5){
    pdf1.setAttribute('href',S05pdf );
}
if(random2==5){
    pdf2.setAttribute('href',S05pdf );
}
if(random3==5){
    pdf3.setAttribute('href',S05pdf );
}

// S06
if(random1==6){
    pdf1.setAttribute('href',S06pdf );
}
if(random2==6){
    pdf2.setAttribute('href',S06pdf );
}
if(random3==6){
    pdf3.setAttribute('href',S06pdf );
}

// S07
if(random1==7){
    pdf1.setAttribute('href',S14pdf );
}
if(random2==7){
    pdf2.setAttribute('href',S14pdf );
}
if(random3==7){
    pdf3.setAttribute('href',S14pdf );
}

// S08
if(random1==8){
    pdf1.setAttribute('href',S08pdf );
}
if(random2==8){
    pdf2.setAttribute('href',S08pdf );
}
if(random3==8){
    pdf3.setAttribute('href',S08pdf );
}

// S09
if(random1==9){
    pdf1.setAttribute('href',S09pdf );
}
if(random2==9){
    pdf2.setAttribute('href',S09pdf );
}
if(random3==9){
    pdf3.setAttribute('href',S09pdf );
}

// S10
if(random1==10){
    pdf1.setAttribute('href',S10pdf );
}
if(random2==10){
    pdf2.setAttribute('href',S10pdf );
}
if(random3==10){
    pdf3.setAttribute('href',S10pdf );
}

// S11
if(random1==11){
    pdf1.setAttribute('href',S11pdf );
}
if(random2==11){
    pdf2.setAttribute('href',S11pdf );
}
if(random3==11){
    pdf3.setAttribute('href',S11pdf );
}

// S12
if(random1==12){
    pdf1.setAttribute('href', S12pdf);
}
if(random2==12){
    pdf2.setAttribute('href',S12pdf );
}
if(random3==12){
    pdf3.setAttribute('href',S12pdf );
}

// S13
if(random1==13){
    pdf1.setAttribute('href',S13pdf );
}
if(random2==13){
    pdf2.setAttribute('href',S13pdf );
}
if(random3==13){
    pdf3.setAttribute('href',S13pdf );
}


// ***********プロフ表示***********//
