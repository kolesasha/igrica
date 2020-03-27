jQuery(document).ready(function ($) {
	var wrapp = $('#wrapp'); //jQuery
	wrapp.append('<div class="container"></div>'); //dodavanje wrapp-u
	var container = $('.container');
	var itemAr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,]; //niz za izbacivanje rendom broja u polju
	var testCliks = 0; // da ne moze tri polja da otvori
	var savedAr = []; // da sacuvamo kliknuto
	var kraj = 0;

	for (var i =0; i < 16; i++) {        //polja

		var rand = Math.floor(Math.random()*itemAr.length)   //rendom brojevi
		container.append('<div class="box"><div class="back">'+ itemAr[rand] +'</div><div class="front"></div></div>');  //dodavanje container-u
		itemAr.splice(rand,1); //za izbacivanje jednog broja iz niza (ne moze se ponoviti isti broj 3 puta)

};

 var boxes = $('.box');   //za odredjeno polje
 start();
 function start() {
 	
 	boxes.click(function()
 {
 	savedAr.push($(this)); //cuva sta smo kliknuli
 	testCliks ++;
 	$(this).find('.front').css('transform', 'perspective(900px) rotateY(180deg)');    //kada se klinke na to polje da se ono  rotira 
 	$(this).find('.back').css('transform', 'perspective(900px) rotateY(0deg)');
 	if (testCliks === 2) {
         boxes.off(); // da korisnik sme samo dva polja da otvori

    if (savedAr[0].html()=== savedAr[1].html()) { //proveravamo da li su savedAr isti
        testCliks = 0;
        savedAr.length= 0;
        kraj ++;
        if (kraj===8) {
        	alert('igra je završena');
        }
        start();
    }
    else{ //kada korisnik klikne i nije isto da nam se polja vrate u pocetni polozaj
        
        setTimeout(function()
        {
        savedAr[0].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');
    	savedAr[0].find('.back').css('transform', 'perspective(900px) rotateY(180deg)');
    	savedAr[1].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');
    	savedAr[1].find('.back').css('transform', 'perspective(900px) rotateY(180deg)');
    	testCliks = 0;
    	savedAr.length = 0;
    	start();	
        }, 800)
    	
    }

 	}
 });
 }
 

});