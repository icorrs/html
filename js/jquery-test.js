// .html .text 
/*
var $list1 = $('ol').html()
$('ol').append($list1)
*/

var $list1 = $('ol').text()
$('ol').append('<li>'+$list1+'</li>')

/*
var $list2 = $('ul li').html()
$('ul li').append($list2)


var $list2 = $('ul li').text()
$('ul li').append('<li>'+$list2+'<li>')
*/

/*
$('ul li').html(function() {
    return '<em>'+$(this).text()+'<em>'
})
*/

//before after prepend append attr addClass css
$('ul')
.before('<p>before</p>')
.after('<p>after</p>')
$('ul li')
.prepend('prepend')
.append('append')

$('ul').attr('id','libox')
$('ul li').addClass('liclass')

//using jquery's css attrbute may make the following js not work.
$('#jquerycss').css(
    'background-color','#efabea'
)

