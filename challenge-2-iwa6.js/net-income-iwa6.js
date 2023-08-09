const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

net_income_calc = function (decimals = 4) {
	let balance;
	const default_decimals = 4;

	if (decimals === "undefined") {
		decimals = default_decimals;
	}

	if (hourOfDay === 0 && minuteOfDay === 0) {
		const tax_as_decimal = Number(tax.replace("%", "")) / 100;
		const salary_after_tax = salary * (1 - tax_as_decimal);
		const net_income = salary_after_tax - rent - food - transport;
		balance = parseFloat(net_income.toFixed(default_decimals));
	}

	if (typeof balance === "number") {
		console.log("R" + balance.toFixed(decimals));
	} else {
		console.log("Balance:", (balance = null));
	}
};

net_income_calc(2);
