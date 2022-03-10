/*const flip = (id) => {
    document.getElementById(id).style.transform = "rotateY(360deg)";
}*/

const animateHTML = function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
            console.log(positionFromTop);
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
};

const changeColor = (id) => {
    const colorArr = ["#F94548", "#FFEF08", "#FFFFFF", "#ADFF02", "#01fefe", "#ff51f6"];
    let rand = Math.floor(Math.random() * 5);
    document.getElementById(id).style.color = colorArr[rand];
}

const copyToClipboard = () => {
  var copyText = document.getElementById("myEmail");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(copyText.value);
}