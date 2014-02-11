function forEach(array, action) {
	for (var i = 0; i < array.length; i++)
		action(array[i]);
}

$(document).ready(function() {
	var articles = $('articles');
	forEach(articles, print);

  $('#mobile-nav').children('select').bind('change', function(event) {
      if (event.target.value) { window.location.href = event.target.value; }
    });
});
// $(document).ready(function() {
//   articles = $('articles')
//   articles.forEach( ->
//   	article.addClass('article2')
//   	return
//   )
//   return
// });

