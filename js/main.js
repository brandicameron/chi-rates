let yearBuilt = document.getElementById('year-built');
let totalPrice;

function calculateRate(size, year) {
	let sqft = document.getElementById('sqft');

	// minimum inspection rate
	size = 375;

	if (sqft.value < 999) {
		size = size;
	} else if (sqft.value < 1500) {
		size = size + 25;
	} else if (sqft.value < 2000) {
		size = size + 50;
	} else if (sqft.value < 2500) {
		size = size + 75;
	} else if (sqft.value < 3000) {
		size = size + 100;
	} else if (sqft.value < 3500) {
		size = size + 125;
	} else if (sqft.value < 4000) {
		size = size + 150;
	} else if (sqft.value < 4500) {
		size = size + 175;
	} else if (sqft.value < 5000) {
		size = size + 200;
	} else if (sqft.value < 5500) {
		size = size + 225;
	} else if (sqft.value <= 5999) {
		size = size + 250;
	} else if (sqft.value >= 6000) {
		size = Math.round(sqft.value * .11);
	}

	if (yearBuilt.value === "" || yearBuilt.value >= 2000) {
		year = 0;
		// anything before 1919 is handled below in display rate function
	} else if (yearBuilt.value <= 1939) {
		year = 100;
	} else if (yearBuilt.value <= 1959) {
		year = 75;
	} else if (yearBuilt.value <= 1979) {
		year = 50;
	} else if (yearBuilt.value <= 1999) {
		year = 25;
	}
	totalPrice = size + year;
}


function displayRate(e) {
	e.preventDefault();

	let displayEnteredSqFt = document.querySelector('.entered-sqft');
	let displayEnteredYear = document.querySelector('.entered-year');
	let displayTotal = document.getElementById('total');

	calculateRate();

	displayEnteredSqFt.textContent = sqft.value;
	displayEnteredYear.textContent = yearBuilt.value;

	if (yearBuilt.value <= 1919) {
		displayTotal.textContent = "Call";
	} else {
		displayTotal.textContent = `$${totalPrice}`;
	}
	form.reset();
	//sqft.focus();
	yearBuilt.blur(); //to make number keyboard go away
}

const form = document.getElementById('the-form');
let submitBtn = document.getElementById('submit');
let resetBtn = document.getElementById('resetBtn');

submitBtn.addEventListener('click', displayRate);

resetBtn.addEventListener('click', () => {
	form.reset();
});
