let isFlipped = false;
/*-- Download Card ------*/

function downloadCard() {
	document.querySelector('#districtCard').style.display = 'block';
	document.querySelector('.loading').style.display = 'none';
	let card = document.getElementById('districtCard');
	let cardFront = document.getElementById('cardFront');
	let cardBack = document.getElementById('cardBack');

	let scale = 2;

	if (isFlipped) {
		cardFront.classList.add('hide');
		cardBack.style.transform = 'rotateY(0)';
	} else {
		cardBack.classList.add('hide');
	}

	domtoimage
		.toPng(card, {
			width: card.clientWidth * scale,
			height: card.clientHeight * scale,
			style: {
				transform: 'scale(' + scale + ')',
				transformOrigin: 'top left',
			},
		})
		.then((dataUrl) => {
			domtoimage
				.toPng(card, {
					width: card.clientWidth * scale,
					height: card.clientHeight * scale,
					style: {
						transform: 'scale(' + scale + ')',
						transformOrigin: 'top left',
					},
				})
				.then((dataUrl2) => {
					var img = new Image();
					img.src = dataUrl2;
					downloadURI(dataUrl2, 'Decelis-Academy-ID.png');
					cardFront.classList.remove('hide');
					cardBack.style.transform = 'rotateY(180deg)';
					cardBack.classList.remove('hide');
					card.style.backgroundImage = 'none';
					document.querySelector('#districtCard').style.display = 'block';
					document.querySelector('.loading').style.display = 'none';
				});
		});

	
}

function downloadURI(uri, name) {
	var link = document.createElement('a');
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}

/*-- Flip Card ------*/
function flipCard() {
	var card = document.getElementById('districtCard');
	
	var btnFlip = document.getElementById('btnFlip');

	card.classList.toggle('flip');

	btnFlip.disabled = true;
	setTimeout(() => {
		btnFlip.disabled = false;
	}, 800);

	isFlipped = !isFlipped;
}

/*-- Change Version ------*/
var radios = document.querySelectorAll('input[type=radio][name="color"]');

function changeHandler(event) {
	let body = document.querySelector('body');

	if (this.value === 'version-jungwon') {
		body.classList.remove('version-heeseung');
		body.classList.remove('version-jay');
		body.classList.remove('version-jake');
		body.classList.remove('version-sunghoon');
		body.classList.remove('version-sunoo');
		body.classList.remove('version-ni-ki');
		body.classList.remove('version-enhypen');
		document.getElementById('cardBackImg').src =
			'/assets/jungwon-back-id.png';
	} else if (this.value === 'version-heeseung') {
		body.classList.add('version-heeseung');
		body.classList.remove('version-jay');
		body.classList.remove('version-jake');
		body.classList.remove('version-sunghoon');
		body.classList.remove('version-sunoo');
		body.classList.remove('version-ni-ki');
		body.classList.remove('version-enhypen');
		document.getElementById('cardBackImg').src =
			'/assets/heeseung-back-id.png';
	} else if (this.value === 'version-jay') {
		body.classList.remove('version-heeseung');
		body.classList.add('version-jay');
		body.classList.remove('version-jake');
		body.classList.remove('version-sunghoon');
		body.classList.remove('version-sunoo');
		body.classList.remove('version-ni-ki');
		body.classList.remove('version-enhypen');
		document.getElementById('cardBackImg').src =
			'/assets/jay-back-id.png';
	} else if (this.value === 'version-jake') {
		body.classList.remove('version-heeseung');
		body.classList.remove('version-jay');
		body.classList.add('version-jake');
		body.classList.remove('version-sunghoon');
		body.classList.remove('version-sunoo');
		body.classList.remove('version-ni-ki');
		body.classList.remove('version-enhypen');
		document.getElementById('cardBackImg').src =
			'/assets/jake-back-id.png';
	} else if (this.value === 'version-sunghoon') {
		body.classList.remove('version-heeseung');
		body.classList.remove('version-jay');
		body.classList.remove('version-jake');
		body.classList.add('version-sunghoon');
		body.classList.remove('version-sunoo');
		body.classList.remove('version-ni-ki');
		body.classList.remove('version-enhypen');
		document.getElementById('cardBackImg').src =
			'/assets/sunghoon-back-id.png';
	} else if (this.value === 'version-sunoo') {
		body.classList.remove('version-heeseung');
		body.classList.remove('version-jay');
		body.classList.remove('version-jake');
		body.classList.remove('version-sunghoon');
		body.classList.add('version-sunoo');
		body.classList.remove('version-ni-ki');
		body.classList.remove('version-enhypen');
		document.getElementById('cardBackImg').src =
			'/assets/sunoo-back-id.png';
	} else if (this.value === 'version-ni-ki') {
		body.classList.remove('version-heeseung');
		body.classList.remove('version-jay');
		body.classList.remove('version-jake');
		body.classList.remove('version-sunghoon');
		body.classList.remove('version-sunoo');
		body.classList.add('version-ni-ki');
		body.classList.remove('version-enhypen');
		document.getElementById('cardBackImg').src =
			'/assets/ni-ki-back-id.png';
	} else if (this.value === 'version-enhypen') {
		body.classList.remove('version-heeseung');
		body.classList.remove('version-jay');
		body.classList.remove('version-jake');
		body.classList.remove('version-sunghoon');
		body.classList.remove('version-sunoo');
		body.classList.remove('version-ni-ki');
		body.classList.add('version-enhypen');
		document.getElementById('cardBackImg').src =
			'/assets/enhypen-back-id.png';
	}
}

Array.prototype.forEach.call(radios, function (radio) {
	radio.addEventListener('change', changeHandler);
});

/*-- Image Input Preview ------*/
var reader = new FileReader();

reader.onload = function (e) {
	document.querySelector('#imager').setAttribute('src', e.target.result);
};

function readURL(input) {
	if (input.files && input.files[0]) {
		document.querySelector('#imager').style.visibility = 'visible';
		reader.readAsDataURL(input.files[0]);
	}
}

document.querySelector('#image-input').addEventListener('change', function () {
	readURL(this);
});

/*-- Auto Format Birthday ------*/
var cleave = new Cleave('.regDate', {
    date: true,
    delimiter: '-',
    datePattern: ['Y', 'm', 'd']
});
