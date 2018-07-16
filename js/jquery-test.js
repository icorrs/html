
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

//show ul li description
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


//show and hide ul li
$(function() {
    $('h2').hide().slideDown()
    var $li = $('ul li').filter('.one')
    $li = $li.add($('ul').find('.two'));
    $li = $li.add('.three')
    $li = $li.add('ul li')
    $li.hide().each(function(index) {
        $(this).delay(700*index).fadeIn(700);
    })
    $li.on('click',function() {
        $(this).fadeOut(700);
        $(this).delay(700).fadeIn(700);
    })
})



$(function() {
    var $newItemButton = $('#newItemButton')
    var $newItemForm = $('#newItemForm')
    var $textInput = $('#itemDescription')

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click',function() {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $('#addButton').on('click',function(e) {
        e.preventDefault();
        $('ul').append('<li>'+$textInput.val()+'</li>');
        $newItemButton.show();
        $newItemForm.hide();
        $textInput.val('');
    });
});

var $p = $('#h2')
var $clonep = $p.clone();
$('h2').before($clonep)

$('#countcal').width('200%')


//ajax
//.load html
$('#xhrhtml').on('click',function(e) {
    e.preventDefault();
    $('#container').remove();

    /*in this part not use jquery'load  to load ajax
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        $('#content').html(xhr.responseText);
    }
    xhr.open('GET','float_test.html',true);
    xhr.send(null);
    */

    //use jquery'load

    $('#content').load('float_test.html');
})

 /*wanna use python to calculate countdown but not useful 
$('#submitcount').on('click',function(e) {
    e.preventDefault();
    var details = $('#countcal').serialize();
    $.post('python/countcal.py',details,function(data) {
        $('#result').text(data);
    })
})
*/


$.getJSON('data/sub_contractor_account.json')
.done(function(data) {
    var msg = '<hr><p>sub_contractor_data</P>'+
    '<table><tr><th class="column">序号</th>'+
    '<th class="column">分包单位名称</th>'+
    '<th class="column">开户行</th>'+
    '<th class="column">银行账号</th></tr>';
    var code = 1;
    $.each(data,function(key,val) {      
        if (val.sub_contractor_name!=null 
            //&& val.sub_contractor_name.length>13
            //&& val.sub_contractor_name.match(/^天津.+/)
        ){
        msg += '<tr>'+'<th>'+code+'</th>'+
        '<td>'+val.sub_contractor_name+'</td>'+
        '<td>'+val.bank_name+'</td>'+
        '<td>'+val.bank_count+'</td>'+'</tr>';
        code += 1
        }
    })
    msg += '</table><hr>'
    $('#jsondata').html(msg);
})

$('#locload').on('click',function() {
    navigator.geolocation.getCurrentPosition(success,fail);
    $('#locload').text('getting position...')
    function success(position) {
        var msg= position.coords.latitude+';'+position.coords.longitude;
        $('#locload').text(msg);
    }
    function fail() {
        $('#locload').text('sorry')
    }
})


//jqueryui
$('#jqueryuitest').accordion();
$('#jqueryuitest').tabs();
$('#arrival').datepicker();


//angularjs
var app = angular.module('myApp',[]);
app.controller('concretePrice',function($scope,$http) {
    $http.get('data/concrete.json')
    .success(function(data){
        $scope.sessions = data;
        console.log('loaded '+data.length+' items in concrete price')
        console.warn('console warn')
    })
})


'mzj,zm'.split(',').forEach(function(name) {
    console.log(name)
})

//use {jsonword:value,$element:$row} to filter row which can be showed.
$(function() {
    var $table = $('<table><tr><th>钢材类别</th><th>价格</th></tr></table>');
    var rows = []
    $.getJSON('data/price_of_steel.json')
    .done(function(data) {
        $.each(data,function(key,value) {
            var $row = $('<tr></tr>')
            $row.append($('<td></td>').text(value.steel_kind))
            $row.append($('<td></td>').text(value.price_of_steel))
            //save value to jsonword attr,save $row object to $element attr 
            rows.push({jsonword:value,$element:$row})
            if(value.price_of_steel!=null) {
                $table.append($row)
            }          
        })
        $('#steelprice').append($table);
        //select which row to show by json value.
        rows.forEach(function(row) {
            if(row.jsonword.price_of_steel<4) {
                row.$element.hide();
            }
        })          
    });
});



//作用域与函数运行时间点
function geta(a) {
    return a+1
}

function area(a,b) {
    var msg = ''; 
    msg = msg+geta(a)+'*'+b+'='
    return [a,b,geta(a)*b,msg];
}

console.log(area(3,6)[3]+area(3,6)[2])


var vartest = ''
function changevar() {
    vartest += 'changevaradd'
}
console.log('vartestbefore:'+vartest)
changevar()
console.log('vartestafter:'+vartest)
