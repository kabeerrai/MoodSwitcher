const happy=document.querySelector(".happy");
const sad=document.querySelector(".sad");
const angry=document.querySelector(".angry");
const neutral=document.querySelector(".neutral");

const output=document.querySelector(".output");

let happyQuotes=[
     "Stay smiling — the world shines brighter with you in it. 😊",
  "Happiness looks good on you!😊",
  "Today is a perfect day to be happy!😊",
  "Smiles are contagious — pass one on!😊",
  "Joy is a choice, and you're choosing it well.😊",
  "Let your smile change the world.😊",
  "You light up the room — never forget that.😊",
  "Laughter is sunshine for the soul.😊",
  "Radiate positivity like sunshine!😊",
  "The little things make life big — enjoy them!😊"
];
let sadQuotes=[
      "It’s okay to feel sad. Even the sky cries sometimes. 💙",
  "This too shall pass.💙",
  "Be kind to yourself today.💙",
  "Every emotion is valid — even sadness.💙",
  "Healing takes time. You’re doing great.💙",
  "Let yourself feel — that’s how we grow.💙",
  "The rain will stop, and you'll bloom again.💙",
  "You’re stronger than you feel right now.💙",
  "Take your time — brighter days are ahead.💙",
  "Feel it, then let it go. You're not alone.💙"
];
let angryQuotes=[
    "Take a deep breath. Storms don’t last forever. 💢",
  "Anger is energy — use it wisely.💢",
  "Breathe in calm, breathe out tension.💢",
  "It’s okay to pause before you react.💢",
  "Let it out, but don’t let it control you.💢",
  "Even fire needs rest to burn bright again.💢",
  "You’re not your anger — you’re more.💢",
  "Punch a pillow, not a person. 😅",
  "Channel your rage into progress💢.",
  "The calm after the storm is always worth it.💢"
];
let neutralQuotes=[
      "Just chilling… sometimes peace is everything. 😌",
  "Not every moment needs a label.😌",
  "Stillness is its own kind of strength.😌",
  "Nothing wrong with a reset day.😌",
  "Let the day flow as it wants.😌",
  "Some days are just… days. That’s fine.😌",
  "Quiet minds are powerful minds.😌",
  "Neutral is balance — and balance is beautiful.😌",
  "You don’t have to feel amazing every day.😌",
  "Still waters run deep.😌"
];


happy.addEventListener('click',()=>{
    let random= Math.floor(Math.random()*happyQuotes.length);
    document.body.style.backgroundColor='yellow';
    output.textContent=happyQuotes[random];
})

sad.addEventListener('click',()=>{
    let random= Math.floor(Math.random()*sadQuotes.length);
    document.body.style.backgroundColor='lightblue';
    output.textContent=sadQuotes[random];
})

angry.addEventListener('click',()=>{
    let random= Math.floor(Math.random()*angryQuotes.length);
    document.body.style.backgroundColor='lightcoral';
    output.textContent=angryQuotes[random];
})

neutral.addEventListener('click',()=>{
    let random= Math.floor(Math.random()*neutralQuotes.length);
    document.body.style.backgroundColor='lightgray';
    output.textContent=neutralQuotes[random];
})