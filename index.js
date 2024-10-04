window.onload = function () {
 
  var slideIndex = 0;
  showSlides(slideIndex);

  let prev = document.getElementsByClassName('prev')[0];
  let next = document.getElementsByClassName('next')[0];
  let navs = document.getElementsByClassName('dot');
  // 上一张点击事件
  prev.addEventListener('click', function () {
      plusSlides(-1);
  });
  // 下一张点击事件
  next.addEventListener('click', function () {
      plusSlides(1);
  });

  for (let i = 1; i <= navs.length; i++) {
      navs[i - 1].addEventListener('click', function () {
          currentSlide(i);
      });
  }

  function currentSlide(n) {
      clearTimeout(timeout);
      showSlides(slideIndex = n);
  }

  function plusSlides(n) {
      clearTimeout(timeout);
      showSlides(slideIndex += n - 1);
  }

  function showSlides(n) {
      var i;
      let imgs = document.getElementsByClassName('sideItem');
      let navs = document.getElementsByClassName('dot');

      if (n > imgs.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = imgs.length; }
      for (i = 0; i < imgs.length; i++) {
          imgs[i].classList.remove("slideActive")//移出slideActive类
      }

      for (i = 0; i < navs.length; i++) {
          navs[i].classList.remove("dotActive");
      }
      imgs[slideIndex - 1].classList.add("slideActive");//增加slideActive类
      navs[slideIndex - 1].classList.add("dotActive");//增加dotActive类
      timeout = setTimeout(showSlides, 4000); // 切换时间为 4 秒
      slideIndex++;
      if (slideIndex > imgs.length) {
          slideIndex = 1;
      }
      return timeout;
  }
}

document.getElementById('mapImage').addEventListener('click', function() {
    var latitude = -36.7306;
    var longitude = 174.7064;
    var zoom = 15; // 缩放级别
    var mapUrl = 'https://www.google.com/maps/@' + latitude + ',' + longitude + ',' + zoom + 'z';

    window.open(mapUrl, '_blank');
});
