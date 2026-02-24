
<!-- Question-1 Answer -->

answer: 
1.getElementById--  হলো একটা নির্দিষ্ট id দিয়ে একটা Element কে select করতে পারি।
2.getElementByClassName --হলো একটা class name দিয়ে সব গুলো Element কে Select করাতে পারি।
3.querySelector--হলো css selector দিয়ে প্রথম matching Element কে Select করতে পারি।
4.querySelectorAll -- হলো css selector দিয়ে সব matching Element কে select করতে পারি ।


<!-- Question-2 Answer -->

answer:
নতুন element তৈরি করার জন্য ৩টা ধাপ ফলো করতে হয়।
১.Element তৈরি করা -- createElement()
২.Content যোগ করা--innerText
৩.DOM এ বসানো -- appendChild()

উদাহরন:
const p = document.createElement('p');
p.innerText = 'Hellow Bangladesh';
document.body.appendChild(p);


<!-- Question-3 -->
 ‍answer:
 Event Bubbling হলো এমন একটি process যেখানে কোনো element এ event ঘটলে  (যেমন click) ,সেই event child element থেকে parent - parent - document পর্যন্ত উপরের দিকে ছড়ায়।

 উদাহরন:
 <div id="parent">
 <button id='child'>click me</button>
</div>
১.প্রথমে button এ event চলবে ।
২.তারপর event div (parent) এ যাবে ।
৩.তারপর body - document পর্যন্ত যাবে ।

<!-- Question -4 -->

answer:
Event Delegation হলো child element গুলোর জন্য আলাদা আলাদা event না দিয়ে parent element এ একটাই event listener বসানো ।

উদাহরন
<ul id='list'>
<li>item-1</li>
<li>item-2</li>
<li>item-3</li>
</ul>
document.getElementById('list').addEventlistener('click',function(e){
          console.log(e.target.innerText)
})

১. যেকোনো li এ click করলে কাজ করবে।
২.প্রতিটি li তে আলাদা আলাদা event দিতে হয়নি।


<!-- Question-5 -->

1.preventDefault()

<a href="https://www.google.com" id="link">Go to Google</a>

document.getElementById("link").addEventListener("click", function(e) {
  e.preventDefault(); 
  alert("Link clicked, but page won't redirect");
});
click করলে alert দেখাবে
brower Google এ redirect হবে না
 default কাজ বন্ধ করা


 2.stopPropagation()
 Event bubbling বন্ধ করতে ব্যবহার হয়।

 <div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("child").addEventListener("click", function(e) {
  e.stopPropagation(); 
  alert("Button clicked only");
});

document.getElementById("parent").addEventListener("click", function() {
  alert("Parent clicked");
});
Button এ click করলে শুধু Button clicked only দেখাবে ।
event উপরে যাবে না।

-----------
PreventDefault()--Element এর default action বন্ধ করে।
stopPropagation()--Event এর bubbling বন্ধ করে ।


