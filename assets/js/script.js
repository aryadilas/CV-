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
});

btnprestasi.addEventListener('click', function(){
	btnhome.classList.remove('onpage');
	btnprestasi.classList.add('onpage');
	btnpendidikan.classList.remove('onpage');
	btnkontak.classList.remove('onpage');
	btnkeahlian.classList.remove('onpage');
});

btnpendidikan.addEventListener('click', function(){
	btnhome.classList.remove('onpage');
	btnprestasi.classList.remove('onpage');
	btnpendidikan.classList.add('onpage');
	btnkontak.classList.remove('onpage');
	btnkeahlian.classList.remove('onpage');
});

btnkontak.addEventListener('click', function(){
	btnhome.classList.remove('onpage');
	btnprestasi.classList.remove('onpage');
	btnpendidikan.classList.remove('onpage');
	btnkontak.classList.add('onpage');
	btnkeahlian.classList.remove('onpage');
});

btnkeahlian.addEventListener('click', function(){
	btnhome.classList.remove('onpage');
	btnprestasi.classList.remove('onpage');
	btnpendidikan.classList.remove('onpage');
	btnkontak.classList.remove('onpage');
	btnkeahlian.classList.add('onpage');
});