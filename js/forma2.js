$ (document).ready(function () {
	$('.prosledi').click(function (event) {
		event.preventDefault()
		console.log('Korisnik je pritisnuo dugme')
		
		var imekorisnika=$('.imekorisnika').val()
		var emailkorisnika=$('.emailkorisnika').val()
		var naslovporuke=$('.naslovporuke').val()
		var poruka=$('.poruka').val()
		if(imekorisnika.length == 0) {
		alert('Niste uneli vaše ime!')
			
		}
		if(emailkorisnika.length > 5 && emailkorisnika.includes('@') && emailkorisnika.includes('.')){
			
		}
		else{
			alert('Niste uneli vaš email, ili ste uneli pogrešan zapis!')
		}
		if(naslovporuke.length == 0){
			alert('Niste uneli naslov poruke!')
			
		}
		
		if(poruka.length >= 5) {
	
		}
		else {
			alert('Niste uneli poruku!')
		}
	

		
	})
}) 