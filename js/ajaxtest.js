function add1(num) {
    return num + 1
}
var a = 2;
a = add1(a)  
var elementa = document.getElementById('a')
elementa.textContent = 'a:'+a


var b = 0;

    $.getJSON('data/ajaxtest.json')
    .done(function(data) {
        b = data[0].bvalue;
        console.log('json中b:'+b)
        msg = $('#b').text();
        msg += ';'+'json中b:'+b
        $('#b').text(msg)
    });

$('#b').text('原b:'+b)