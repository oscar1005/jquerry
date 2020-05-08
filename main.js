$('#add-skill').on('click', function(evt) {
	const input = $('input')[0].value;
	const temp = `<tr><td><button id ="remove">X</button></td><td>${input}</td></tr>`;
	$('table').append($(temp));
	$('input')[0].value = '';
});

$('table').on('click', 'button', function() {
	$(this.closest('tr').remove());
});
