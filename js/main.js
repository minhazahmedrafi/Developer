// Counter Animation
let nCount = function (selector) {
  $(selector).each(function () {
    $(this).animate({
      Counter: $(this).text()
    }, {
      duration: 5000,
      easing: "swing",
      step: function (value) {
        $(this).text(Math.ceil(value));
      }
    });
  });
}

let a = 0
$(window).scroll(function () {
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect>h1")
  }
});




// Scroll Up Button
let myButton = document.getElementById('myBtn');

// When the user scroll 20px from top than show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}

// When the user click the on button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}