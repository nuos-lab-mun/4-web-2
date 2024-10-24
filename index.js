document.getElementById('submit1').addEventListener('click', function (event) {
	event.preventDefault();
	calculate();
});
document.getElementById('submit2').addEventListener('click', function (event) {
	event.preventDefault();
	calculateArray();
});

function calculate() {
	const a = Number(document.getElementById('a').value);
	const b = Number(document.getElementById('b').value);
	const x = Number(document.getElementById('x').value);

	const formulaY = Math.sin((x * x + a) ** 2) ** 3 - Math.sqrt(x / b);
	const formulaZ = x ** 2 / a + Math.cos(x + b) ** 3;

	document.getElementById('answer1').innerHTML = `Y: ${formulaY}, Z: ${formulaZ}`;
}

function calculateArray() {
	let numElements = Number(document.getElementById('numberOfElements').value);
	const answer2 = document.getElementById('answer2');
	numElements = Math.min(parseInt(numElements), 50);

	const n = 7; // Вариант
	const p = [];
	const a = [];

	p[0] = n;
	for (let i = 0; i < numElements; i++) {
		p[i + 1] = (p[i] * 67 + 11) % 128;

		a[i] = p[i] - 64;
	}

	const table = document.getElementById('tbody');
	table.innerHTML = '';

	for (let i = 0; i < numElements; i++) {
		const tr = document.createElement('tr');
		const td_1 = document.createElement('td');
		const td_2 = document.createElement('td');
		const td_3 = document.createElement('td');

		td_1.innerText = i;
		td_2.innerText = p[i];
		td_3.innerText = a[i];

		tr.appendChild(td_1);
		tr.appendChild(td_2);
		tr.appendChild(td_3);

		table.appendChild(tr);
	}

	const sumElement = document.getElementById('sum');
	sumElement.innerHTML = '';
	sumElement.innerHTML += '<p>Array a[]: ' + a.join(', ') + '</p>';

	let sum = a.reduce((accumulator, currentValue) => {
		if (((currentValue >= 10 && currentValue <= 99) || (currentValue <= -10 && currentValue >= -99)) && currentValue % 2 !== 0) {
			return accumulator + currentValue;
		}
		return accumulator;
	}, 0);

	sumElement.innerHTML += `<p>Sum:  ${sum} </p>`;
}
