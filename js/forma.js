$ (document).ready(function () {
	$('.posalji').click(function (event) {
		event.preventDefault()
		console.log('Korisnik je pritisnuo dugme')
		
		var emailkorisnika=$('.emailkorisnika').val()
		if(emailkorisnika.length > 5 && emailkorisnika.includes('@') && emailkorisnika.includes('.')){
			alert('Uspešno ste se pretplatili')
		}
		else{
			alert('Niste uneli vaš email, ili ste uneli pogrešan zapis!')
		}

		
		
		
	
		

	})
});


	