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

var el = document.getElementById('level 3')
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
