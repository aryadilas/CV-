const toggleMenu = document.querySelector('#toggle-menu input');
const nav = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function(){
	nav.classList.toggle('slide');
});

const btnhome = document.querySelector('#homebtn');
const btnprestasi = document.querySelector('#prestasibtn');
const btnpendidikan = document.querySelector('#pendidikanbtn');
const btnkontak = document.querySelector('#kontakbtn');
const btnkeahlian = document.querySelector('#keahlianbtn');


btnhome.addEventListener('click', function(){
	btnhome.classList.add('onpage');
	btnprestasi.classList.remove('onpage');
	btnpendidikan.classList.remove('onpage');
	btnkontak.classList.remove('onpage');
	btnkeahlian.classList.remove('onpage');
	nav.classList.toggle('slide');
	var sRate1 = document.getElementsByClassName('rate1');
	var sRate2 = document.getElementsByClassName('rate2');
	var sRate3 = document.getElementsByClassName('rate3');
	var sRate4 = document.getElementsByClassName('rate4');
	var sRate5 = document.getElementsByClassName('rate5');
	for(var i = 0; i < sRate1.length; i++){sRate1[i].classList.remove('r1');}
	for(var i = 0; i < sRate2.length; i++){sRate2[i].classList.remove('r2');}
	for(var i = 0; i < sRate3.length; i++){sRate3[i].classList.remove('r3');}
	for(var i = 0; i < sRate4.length; i++){sRate4[i].classList.remove('r4');}
	for(var i = 0; i < sRate5.length; i++){sRate5[i].classList.remove('r5');}
});

btnprestasi.addEventListener('click', function(){
	btnhome.classList.remove('onpage');
	btnprestasi.classList.add('onpage');
	btnpendidikan.classList.remove('onpage');
	btnkontak.classList.remove('onpage');
	btnkeahlian.classList.remove('onpage');
	nav.classList.toggle('slide');
	var sRate1 = document.getElementsByClassName('rate1');
	var sRate2 = document.getElementsByClassName('rate2');
	var sRate3 = document.getElementsByClassName('rate3');
	var sRate4 = document.getElementsByClassName('rate4');
	var sRate5 = document.getElementsByClassName('rate5');
	for(var i = 0; i < sRate1.length; i++){sRate1[i].classList.remove('r1');}
	for(var i = 0; i < sRate2.length; i++){sRate2[i].classList.remove('r2');}
	for(var i = 0; i < sRate3.length; i++){sRate3[i].classList.remove('r3');}
	for(var i = 0; i < sRate4.length; i++){sRate4[i].classList.remove('r4');}
	for(var i = 0; i < sRate5.length; i++){sRate5[i].classList.remove('r5');}
});

btnpendidikan.addEventListener('click', function(){
	btnhome.classList.remove('onpage');
	btnprestasi.classList.remove('onpage');
	btnpendidikan.classList.add('onpage');
	btnkontak.classList.remove('onpage');
	btnkeahlian.classList.remove('onpage');
	nav.classList.toggle('slide');
	var sRate1 = document.getElementsByClassName('rate1');
	var sRate2 = document.getElementsByClassName('rate2');
	var sRate3 = document.getElementsByClassName('rate3');
	var sRate4 = document.getElementsByClassName('rate4');
	var sRate5 = document.getElementsByClassName('rate5');
	for(var i = 0; i < sRate1.length; i++){sRate1[i].classList.remove('r1');}
	for(var i = 0; i < sRate2.length; i++){sRate2[i].classList.remove('r2');}
	for(var i = 0; i < sRate3.length; i++){sRate3[i].classList.remove('r3');}
	for(var i = 0; i < sRate4.length; i++){sRate4[i].classList.remove('r4');}
	for(var i = 0; i < sRate5.length; i++){sRate5[i].classList.remove('r5');}
});

btnkontak.addEventListener('click', function(){
	btnhome.classList.remove('onpage');
	btnprestasi.classList.remove('onpage');
	btnpendidikan.classList.remove('onpage');
	btnkontak.classList.add('onpage');
	btnkeahlian.classList.remove('onpage');
	nav.classList.toggle('slide');
	var sRate1 = document.getElementsByClassName('rate1');
	var sRate2 = document.getElementsByClassName('rate2');
	var sRate3 = document.getElementsByClassName('rate3');
	var sRate4 = document.getElementsByClassName('rate4');
	var sRate5 = document.getElementsByClassName('rate5');
	for(var i = 0; i < sRate1.length; i++){sRate1[i].classList.remove('r1');}
	for(var i = 0; i < sRate2.length; i++){sRate2[i].classList.remove('r2');}
	for(var i = 0; i < sRate3.length; i++){sRate3[i].classList.remove('r3');}
	for(var i = 0; i < sRate4.length; i++){sRate4[i].classList.remove('r4');}
	for(var i = 0; i < sRate5.length; i++){sRate5[i].classList.remove('r5');}
});

btnkeahlian.addEventListener('click', function(){
	btnhome.classList.remove('onpage');
	btnprestasi.classList.remove('onpage');
	btnpendidikan.classList.remove('onpage');
	btnkontak.classList.remove('onpage');
	btnkeahlian.classList.add('onpage');
	nav.classList.toggle('slide');
	var sRate1 = document.getElementsByClassName('rate1');
	var sRate2 = document.getElementsByClassName('rate2');
	var sRate3 = document.getElementsByClassName('rate3');
	var sRate4 = document.getElementsByClassName('rate4');
	var sRate5 = document.getElementsByClassName('rate5');
	for(var i = 0; i < sRate1.length; i++){sRate1[i].classList.toggle('r1');}
	for(var i = 0; i < sRate2.length; i++){sRate2[i].classList.toggle('r2');}
	for(var i = 0; i < sRate3.length; i++){sRate3[i].classList.toggle('r3');}
	for(var i = 0; i < sRate4.length; i++){sRate4[i].classList.toggle('r4');}
	for(var i = 0; i < sRate5.length; i++){sRate5[i].classList.toggle('r5');}
});
