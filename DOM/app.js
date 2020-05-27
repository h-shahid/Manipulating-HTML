document.addEventListener("DOMContentLoaded", function () {
  let p = document.querySelectorAll("p");
  let button = document.createElement("button");
  button.innerText = "Submit";

  p[0].appendChild(button);
  button.addEventListener("click", function () {
    alert("Nice!");
  });
  let message = document.querySelector("#msg");
  let messageButton = document.querySelector("#messageButton");
  messageButton.addEventListener("click", function () {
    alert(message.value);
  });
  let div1 = document.querySelector("div");
  //document.body.appendChild(div1)
  //let div2 = document.querySelector ("div2")
  div1.addEventListener("mouseover", function () {
    div1.style.backgroundColor = "blue";
  });
  div1.addEventListener("mouseout", function () {
    div1.style.backgroundColor = "yellow";
  });

  let paragraph = document.querySelector(".pg");
  paragraph.innerText = "Hi, I'm a paragraph.";
  paragraph.addEventListener("click", function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    paragraph.style.color = `rgb(${r},${g},${b})`;
  }); //temperal literal `` don't have to do concatenation

  let button2 = document.createElement("button");
  let div2 = document.createElement("div");
  let me = document.querySelector("#me");
  button2.innerText = "Name";
  p[5].appendChild(button2);
  me.appendChild(div2);
  //let span = document.createElement('span')
  button2.addEventListener("click", function () {
    div2.innerHTML = "<span> Hafeeza </span>";
  });

  let friendArray = [
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
      }
      
  })
});



