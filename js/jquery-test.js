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
/*
//before after prepend append attr addClass css
$('ul')
.before('<p>before</p>')
.after('<p>after</p>')
$('ul li')
.prepend('prepend')
.append('append')
*/

$('ul').attr('id','libox')
$('ul li').addClass('liclass')

//using jquery's css attrbute may make the following js not work.
$('#jquerycss').css(
    'background-color','#efabea'
);


$('#jquerycss').on('click',function() {
    $(this).append(' click jquerycss');
});

/*
$(function() {
    $('ul li').on('click',function(e) {
        $('li span').remove();
        var date = new Date();
        date.setTime(e.timeStamp);
        var clicked = date.toDateString();
        $(this).append('<span class="date">'+clicked+' '+e.type+'</span>');
    });
});
*/

$('ul').on(
'click mouseover',
':not(.one)',
{status:'important'},
function(e) {
    var listItem = 'item:'+e.target.textContent+'<br />';
    var itemStatus = 'status:'+e.data.status+'<br />';
    var eventType = 'event:'+e.type;
    $('#four').html(listItem+itemStatus+eventType);
});


$(function() {
    $('h2').hide().slideDown()
    var $li = $('ul li').filter('.one')
    $li = $li.add($('ul').find('.two'));
    $li = $li.add('.three')
    $li.hide().each(function(index) {
        $(this).delay(700*index).fadeIn(700);
    })
    $li.on('click',function() {
        $(this).fadeOut(700);
        $(this).delay(700).fadeIn(700);
    })
})

