// var srcValue = $('#www').attr('src');
// console.log(srcValue); 

// var hrefValue = $('.www a').attr('href');
// console.log(hrefValue);

// $('img').each(function() {
//     var srcValue = $(this).attr('src');
//     console.log(srcValue);
// });

// $('a').each(function() {
//     console.log($(this).attr('href'));
// });
// $('li').attr('value', 'test');
// $('a').attr('href', '!');
// $('a').attr('target', '_blank');
// $('a').each(function() {
//     var hrefValue = $(this).attr('href');
//     $(this).text(hrefValue); 
// });
// $('a').each(function() {
//     var hrefValue = $(this).attr('href');
//     $(this).text('(' + hrefValue + ')');
// });
// $('a').each(function() {
//     var anchorText = $(this).text();
//     $(this).attr('title', anchorText);
// });
// $('input[type="text"]').each(function(index) {
//     if (index % 2 === 1) {
//         let currentValue = $(this).val();
//         $(this).val(currentValue + ' ' + index);
//     }
// });
// // $('li').attr('class', 'Bober')
// $('li').attr('class', '');

// $('button').click(function() {
//     $('#test').toggleClass('red', false);
// });

// console.log( $('a').hasClass('www') );

// $('h3').wrap('<div>');
// $('h4').wrap('<div class="www"> </div>');

// $('p').unwrap('div');

// $('span').unwrap('p');

// $('h3').wrapInner('<i></i>');

// $('h2').wrapAll('<i></i>');

// $('h2').prepend('<h2>!!!</h2>');

// $('h2').append('<h2>???</h2>');

// $('h1').prepend('<h1>!!!</h1>').append('<h2>???</h2>').css('color', 'red');

// $('h2').before('<p>!</p>')

// $('h2').after('<p>?</p>')

// $('h1').before('<p>!</p>').after('<p>?</p>')

// $('h2').replaceWith('<h2></h2>').wrap('p');

// $('<h2></h2>').replaceAll('h2');

// $('h3').remove('.zzz')

// let $elem = $('#test');
// $elem.detach(); 

// $elem.insertBefore('h3');

// $('h2').empty();

// let width = $('#wrapper').width();
// let height = $('#wrapper').height();
// $('#one').text('Width: ' + width + ' Height: ' + height);


// let w = $('#wrapper').innerWidth();
// let h = $('#wrapper').innerHeight();
// $('#two').text('Width: ' + w + ' Height: ' + h);

// console.log($('li').get(4));

// let num = $('li').length;
// console.log(num);

// let num1 = $('li').index($('#test'));
// console.log(num1);

// let num2 = $('li').index($('#first'));
// console.log(num2);

// let num3 = $('li').not('#test').length;
// console.log(num3)

// $('li').eq(5).css('color', 'green');

// $('li').eq(4).css('color', 'red');

// $('li').first().css('color', 'red');

// $('li').last().css('color', 'green');

// $('li').has('i').css('color', 'red');

// $('li').slice(3, 10).css('color', 'red');

// $('li').filter('.www').append('!');

// $('.test').prev();

// $('.test').next();

// $('li').siblings();

// $('li').siblings('.www').html('');

// $('li.www').siblings(':not(.test)');

// $('.test').prevAll();

// $('.test').nextAll();

// $('.test').prevUntil('.www')

// $('.www').nextUntil('.test');

// $('p').parent('.www').css('color', 'red');

// $('b').parent('').css('color', 'red');

// $('b').parents().filter('.test').css('color', 'red');

// $('b').parents().filter('.test').css('color', 'red');

// $('b').closest('div').css('color', 'red');

// $('#text').children().each(
// 	function() {
// 		console.log($(this).text()); // выведет 'bold'
// 	}
// );

// $('#text').contents().each(
// 	function() {
// 		console.log($(this).text()); // выведет 'bold'
// 	}
// );

// $('b.www').css('color', 'red').filter('.test').css('font-size', '30px');

// $('.www').css('color', 'red').filter('p').append('!');

// $('p.www').prepend('!').append('!!').add('h2').css('color', 'red');

// $('li.www').parent().addBack().css('color', 'red');

// $('h2.www').css('color', 'red').filter('.test').css('font-size', '30px');

// $('.www').clone().css('color', 'red').text('???').insertBefore('.www');

if ($('h2.test').length) {
    console.log('Есть h2 с классом test');
  } else {
    console.log('Нет h2 с классом test');
  }