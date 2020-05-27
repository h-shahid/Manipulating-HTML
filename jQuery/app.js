$(function () {
  $("#p1").append("<button>Hi</button>");
  $("button").click(function () {
    alert("Be well");
  });
  $("#btn").click(function () {
    alert($("#input").val());
  });
  $("#div1").mouseover(function () {
    $("#div1").css("backgroundColor", "pink");
  });
  $("#div1").mouseout(function () {
    $("#div1").css("backgroundColor", "yellow");
  });
  $('#para').click(function(){
      
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
  
      $('#para').css('color', `rgb(${r},${g},${b})`) })
})
let button2 = $("#Btn");
let div2 = $("#Div2");
Btn.click(function() {
    Div2.append($("<span>Hafeeza</span>"));
});
/*let friendArray = [
    "Dana",
    "Kamiesha",
    "Gina",
    "Kesha",
    "Sonia",
    "Rajeeyah",
    "Zarinah",
    "Jackie",
    "Eddie",
    "Shell",
  ];
  let friends = document.querySelector('#friends')
  let list = document.querySelector('#list')
  let i = 0;
  friends.addEventListener('click', function() {
      if (i < friendArray.length){
        let friend = friendArray[i]
        let li = document.createElement('li')
        li.textContent = friend
        list.appendChild(li)
        i++
      } */


