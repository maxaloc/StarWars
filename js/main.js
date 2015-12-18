var liste = [
	{ url : 'Ask', value : ' Ask Aak'},
	{ url : 'Ackbar', value : ' Amiral Ackbar'},
	{ url : 'Binks', value : ' Jar Jar Binks'},
	{ url : 'Lando', value : ' Lando Calrissian'},
	{ url : 'Chewbacca', value : ' Chewbacca'},
	{ url : 'Boba', value : ' Boba Fett'},
	{ url : 'Grievous', value : ' Général Grievous'},
	{ url : 'Jango', value : ' Jango Fett'},
	{ url : 'Fisto', value : ' Kit Fisto'},
	{ url : 'Jabba', value : ' Jabba le Hutt '},
	{ url : 'Jinn', value : 'Qui-Gon Jinn'},
	{ url : 'Kenobi', value : 'Obi-Wan Kenobi'},
	{ url : 'Mundi', value : 'Ki-Adi-Mundi'},
	{ url : 'Maul', value : ' Dark Maul'},
	{ url : 'Nass', value : ' Boss Nass'},
	{ url : 'Bail', value : ' Bail Organa'},
	{ url : 'Sebulba', value : ' Sebulba'},
	{ url : 'Aayla', value : ' Aayla Secura'},
	{ url : 'Shmi', value : ' Shmi Skywalker '},
	{ url : 'Typho', value : ' Capitaine Typho '},
	{ url : 'Padme', value : ' Padme Amidala'},
	{ url : 'Sidious', value : ' Dark Sidious'},
	{ url : 'Tarkin', value : ' Grand Moff Tarkin'},
	{ url : 'Solo', value : ' Han Solo'},
	{ url : 'Lama', value : ' Lama Su'},
	{ url : 'Wicket', value : ' Wicket'},
	{ url : 'Windu', value : ' Mace Windu'},
	{ url : 'Watto', value : ' Watto'},
    { url : 'Vador', value : ' Dark Vador'},  // personnage
    { url : 'Yoda', value : ' Yoda'}, // personnage
    { url : 'R2D2', value : ' R2D2'}, // personnage
	{ url : 'C3PO', value : ' C3PO'}, // personnage
    { url : 'Dooku', value : ' Comte Dooku'}, // personnage
    { url : 'Luke', value : ' Luke Skywalker'}, // personnage
	{ url : 'Leia', value : ' Leia Organa (Princesse Leia)'}, // personnage
    { url : 'Anakin', value : ' Anakin Skywalker'}, // personnage
    { url : 'Palpatine', value : ' Chancelier Palpatine'} // personnage
];

$('.search').on("keyup", function(){
						
	if ($('input').val().length === 0) {
			$( ".no-result" ).hide( "slow" );
		}
				
})

$('.search').autocomplete({ // on va chercher la liste
//    source : liste,
	
	source: function( request, response ) {
        var matcher = new RegExp( "^ *" + $.ui.autocomplete.escapeRegex( request.term ) , "i" ),
			results = [];
		
		$.each(liste, function (i, e) {
			if (matcher.test( e.value )) {
				results.push(e);
			}
		});
		
		if (results.length === 0 && $('input').val() !== 0) {
			// Pas de resultat 	
			$( ".no-result" ).show( "slow" );
		} else {
			// Resultat
			$( ".no-result" ).hide( "slow" );
		}
		response(results);
    },
    
    select : function(event, ui){ // lors de la sélection d'une proposition
        $('.search').removeClass( 'anakin leia dooku luke C3PO R2D2 yoda vador jinn kenobi sidious windu fisto' ).addClass( ui.item.url ); // couleur de la selection (en fonction du personnage
		$('.search').data('name', ui.item.url) // on stocke une valeur name (ex : name : Vador
    }
	
});
	
	$('form').submit(function (e) {
		var name = $('.search').data('name'); // on va chercher la data name
			if (name != undefined) {
				window.location.href = "http://maxallouch.fr/STAR%20WARS%20CHARACTERS/Personnages/Personnages/" + name + "/index.html"
	}	
	e.preventDefault();
});