var today = new Date()
var hournow = today.getHours()
var greeting;

if (hournow > 18) {
    greeting = 'good evening'
} else if (hournow > 12) {
    greeting = 'good afternoon'
} else if (hournow > 0) {
    greeting = 'good morning'
} else {
    greeting = 'welcome'
}

var el = document.getElementById('h2')
el.textContent = greeting

function hotel(name,total,ordered) {
    this.name = name;
    this.total = total;
    this.ordered = ordered;
    this.leftCal = function() {
        return this.total-this.ordered
    }
}

var rujia = new hotel('rujia',100,30)
var rujia_left =rujia.leftCal()

var elhotel = document.getElementById('rujia')
elhotel.textContent = rujia.name+' left:'+rujia_left

var elwindows = document.getElementById('windowsclass')
elwindows.textContent = window.location

var innerhtmltest = document.getElementById('innerhtmltest')
innerhtmltest.innerHTML = '<b> page title:</b>'+document.title+'<br />'

var today = new Date()
var year1 = document.getElementById('year')
year1.innerHTML =  today.getFullYear()+('3'==3)

var list1 = document.getElementsByTagName('li')
for(i=0;i<list1.length;i++) {
    list1[i].textContent = i+':'+list1[i].textContent
}

var texttest = document.getElementById('level 3')
var textcontent_word = texttest.textContent
var nodevalue_word = texttest.nodeValue
var msg = 'textcontent:'+textcontent_word+';'+'<br>'+'nodevalue:'+nodevalue_word+';'
var scriptout = document.getElementById('level3 innerhtmlscript')
var scriptout1 = document.getElementById('level3 textcontentscript')
scriptout.innerHTML = msg
scriptout1.textContent = msg

function inputlenCheck(e,minilen) {
    if (e.target.value.length < minilen) {
        alert('input length less than'+minilen+',input again!')
        e.target.value = ''
    }
    else {
    }
}

/*var username1 = document.getElementById('username')
//username1.onblur = inputlenCheck  

username1.addEventListener('blur',function(e) {
    inputlenCheck(e,6)
},false)

var mailname1 = document.getElementById('email')
mailname1.addEventListener('blur',function(e) {
    inputlenCheck(e,7)
},false)
*/

var namecheck1 = document.getElementById('namecheck')
namecheck1.addEventListener('focusout',function(e) {
    inputlenCheck(e,6)
},false)


function showli(e) {
    if(e.target.nodeName.toLowerCase()=='li') {
        alert('li')
    }
}

var li_box1 = document.getElementById('li_box')
li_box1.addEventListener('click',showli,false)

function countdownCal(full,countdown,price) {
    var num
    var realprice
    if (full%price == 0) {
        num = full/price;
        realprice = (full-countdown)/num;
    }
    else {
        num = Math.floor(full/price)+1;
        realprice = (price*num-countdown)/num
    }
    return '应购数量:'+num+';<br />折后单价:'+realprice
}

var full
var countdown
var price
var countdowncal1 = document.getElementById('cal')

var elfull = document.getElementById('full')
elfull.addEventListener('input',function() {
    full = this.value;
    countdowncal1.innerHTML = countdownCal(full,countdown,price)
},false)

var elcountdown =document.getElementById('countdown')
elcountdown.addEventListener('input',function() {
    countdown = this.value;
    countdowncal1.innerHTML = countdownCal(full,countdown,price)
},false)

var elprice =document.getElementById('price')
elprice.addEventListener('input',function() {
    price = this.value;
    countdowncal1.innerHTML = countdownCal(full,countdown,price)
},false)

