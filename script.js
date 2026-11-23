// Enter Website

function enterSite() {

document.getElementById("home").style.display = "none";

document.getElementById("main-content").classList.remove("hidden");

}

// Open When Messages

let messages = [

"Ayeee cutu Puppy,i know things are so much difficult but iska mtlb ye nhi ki you stay sad all the time.. some things take time aur ye bhi thikh ho hi jaayega bachha toh khudh ka dhyan rkhna is very necessary.",

"Missing someone is a very human thing. Some people become important parts of our stories. You can cherish those memories while still making room for new ones.",

"Being alone sometimes doesn't mean you're unwanted. You matter, and your presence makes a difference.",

"Please don't measure your worth by your mistakes, your past or somebody else's opinion. You're still growing, and that's okay.",

"Not every Questions and feelings  needs answers. Sometimes you just need to rest and let tomorrow be tomorrow.",

"I hope you remember this feeling. You deserve good days, silly laughter and moments that make you genuinely happy."

];

function showMessage(index) {

document.getElementById("message-box").innerText =
    messages[index];

}

// Random Reminders

let reminders = [

"You are more than enough cutu.",

"You Deserve each and every kind of happiness puppyyy.",

"There are still so many beautiful memories waiting to be made.",

"Its okay to not be okayy.",

"Your story is still being written.",

"Please remember to be kind to yourself today.",

"i know tujhe fresh start nhi krni haii... and i know ki chizzen jo khrab ho rhi hai aur hui haii vo sab thikh ho hi jaayegii puppyy so please dont hurt yourself ... talk to me when you are overwhelmed, Come to me whenever you feel sad or think ki mere pass koi nhi aur sab chor ke chle jaayenge ... come to me okaie."

];

function randomMessage() {

let randomIndex = Math.floor(
    Math.random() * reminders.length
);

document.getElementById("random-message").innerText =
    reminders[randomIndex];

}