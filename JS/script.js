let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn2');
let currentSlide = 1;
var x = window.matchMedia('(max-width: 768px)');
function autoRefresh() {
	window.location = window.location.href;
}
if (!x.matches) {
	let manualNav = function (manual) {
		slides.forEach((slide) => {
			slide.classList.remove('active');
			btns.forEach((btn) => {
				btn.classList.remove('active');
			});
		});
		slides[manual].classList.add('active');
		btns[manual].classList.add('active');
	};
	btns.forEach((btn, i) => {
		btn.addEventListener('click', () => {
			manualNav(i);
			currentSlide = i;
		});
	});
	let repeat = function (activeClass) {
		let active = document.getElementsByClassName(`active`);
		let i = 1;
		let repeater = () => {
			setTimeout(function () {
				[...active].forEach((activeSlide) => {
					activeSlide.classList.remove('active');
				});
				slides[i].classList.add('active');
				btns[i].classList.add('active');
				i++;
				if (slides.length === i) {
					i = 0;
				}
				if (i >= slides.length) {
					return;
				}
				repeater();
			}, 7000);
		};
		repeater();
	};
	repeat();
}
if (x.matches) {
	let imgSlider = document.querySelector(`.imgSlider`);
	imgSlider.innerHTML = '';
	imgSlider.innerHTML = `
    <div class="JSinfo">
						<h2 class="JStitle">Sportivo<br/> <span class="JSspan">4.0</span></h2>
						<p class="JStext"><span class="JStextSpan">ANUAL</span> SPORTS MEET <Span class="JStextSpan">2024</Span></p>
						<div class="JSwrapper">
							<div class="link_wrapper">
								<a class="registration" href="./registration.html">Registration</a>
								<div class="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 268.832 268.832"
									>
										<path
											d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>`;
}
var countDownDate = new Date('Feb 29, 2024 00:00: 00').getTime();
var x = setInterval(function () {
	var now = new Date().getTime();

	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
		document.getElementById('days').innerHTML = `00`;
		document.getElementById('hours').innerHTML = `00`;
		document.getElementById('minutes').innerHTML = `00`;
		document.getElementById('seconds').innerHTML = `00`;
	} else {
		document.getElementById('days').innerHTML = `0` + days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
	}
}, 1000);
// ********** set date ************
// select span
const date = (document.getElementById('date').innerHTML =
	new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
// add event listener
navBtn.addEventListener('click', () => {
	links.classList.toggle('show-links');
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		// prevent default
		e.preventDefault();
		links.classList.remove('show-links');

		const id = e.target.getAttribute('href').slice(1);
		const element = document.getElementById(id);
		//
		let position = element.offsetTop - 62;

		window.scrollTo({
			left: 0,
			top: position,
			behavior: 'smooth',
		});
	});
});
addEventListener('resize', (event) => {
	//console.log(window.innerHeight);
	console.log(window.innerWidth);
	if (window.innerWidth > 500) {
		autoRefresh();
	}
	//autoRefresh();
});
