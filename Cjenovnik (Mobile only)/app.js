window.onload = () => {
    //onclick border bottom for navbar
    let mi1 = document.querySelector(".menuItem1");
    mi1.addEventListener("click", function(){
        mi1.style.borderBottom = "3px solid rgb(247, 210, 44)";
        document.querySelector(".menuItem2").style.borderBottom = "none";
        document.querySelector(".menuItem3").style.borderBottom = "none";
        document.querySelector(".menuItem4").style.borderBottom = "none";
        document.querySelector(".menuItem5").style.borderBottom = "none";
    })
    let mi2 = document.querySelector(".menuItem2");
    mi2.addEventListener("click", function(){
        mi2.style.borderBottom = "3px solid rgb(247, 210, 44)"
        document.querySelector(".menuItem1").style.borderBottom = "none";
        document.querySelector(".menuItem3").style.borderBottom = "none";
        document.querySelector(".menuItem4").style.borderBottom = "none";
        document.querySelector(".menuItem5").style.borderBottom = "none";
    })
    let mi3 = document.querySelector(".menuItem3");
    mi3.addEventListener("click", function(){
        mi3.style.borderBottom = "3px solid rgb(247, 210, 44)"
        document.querySelector(".menuItem2").style.borderBottom = "none";
        document.querySelector(".menuItem1").style.borderBottom = "none";
        document.querySelector(".menuItem4").style.borderBottom = "none";
        document.querySelector(".menuItem5").style.borderBottom = "none";
    })
    let mi4 = document.querySelector(".menuItem4");
    mi4.addEventListener("click", function(){
        mi4.style.borderBottom = "3px solid rgb(247, 210, 44)"
        document.querySelector(".menuItem2").style.borderBottom = "none";
        document.querySelector(".menuItem3").style.borderBottom = "none";
        document.querySelector(".menuItem1").style.borderBottom = "none";
        document.querySelector(".menuItem5").style.borderBottom = "none";
    })
    let mi5 = document.querySelector(".menuItem5");
    mi5.addEventListener("click", function(){
        mi5.style.borderBottom = "3px solid rgb(247, 210, 44)"
        document.querySelector(".menuItem2").style.borderBottom = "none";
        document.querySelector(".menuItem3").style.borderBottom = "none";
        document.querySelector(".menuItem4").style.borderBottom = "none";
        document.querySelector(".menuItem1").style.borderBottom = "none";
    })
    //onclick closing of the menu 
   let m_1 = document.querySelector(".m_i1");
   m_1.addEventListener("click", function(){
    let menuBtn = document.querySelector(".menu__btn");
    menuBtn.click();
   })
   let m_2 = document.querySelector(".m_i2");
   m_2.addEventListener("click", function(){
    let menuBtn = document.querySelector(".menu__btn");
    menuBtn.click();
   })
   let m_3 = document.querySelector(".m_i3");
   m_3.addEventListener("click", function(){
    let menuBtn = document.querySelector(".menu__btn");
    menuBtn.click();
   })
   let m_4 = document.querySelector(".m_i4");
   m_4.addEventListener("click", function(){
    let menuBtn = document.querySelector(".menu__btn");
    menuBtn.click();
   })
   let m_5 = document.querySelector(".m_i5");
   m_5.addEventListener("click", function(){
    let menuBtn = document.querySelector(".menu__btn");
    menuBtn.click();
   })
   function scroll(){
    window.scroll(0,0);
   }
}