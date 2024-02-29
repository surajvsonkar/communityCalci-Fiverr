const followersInput = document.getElementById('followers');
const audienceInput = document.getElementById('audience');
const pricingInput = document.getElementById('pricing');
const resultDiv = document.getElementById('result');
const audienceValue = document.getElementById('audienceValue');
const pricingValue = document.getElementById('pricingValue');
const errorMessage = document.getElementById('followerErrorMessage');
const payingMembersText = document.getElementById('payingMembers');

function calculate() {
	const followers = parseInt(followersInput.value.replace(/,/g, ''));
	const audience = parseFloat(audienceInput.value);
	const pricing = parseFloat(pricingInput.value);

	if (isNaN(followers) || followers < 0) {
		errorMessage.textContent = 'Please enter a valid number of followers';
		return;
	} else {
		errorMessage.textContent = '';
	}

	const payingMembers = Math.round(followers * audience);
	payingMembersText.textContent = `Paying Members: ${formatNumberWithCommas(
		payingMembers
	)}`;

	const result = payingMembers * pricing;
	resultDiv.innerHTML = `<p>Result: $${formatNumberWithCommas(
		result.toFixed(0)
	)}</p>`;
}

function updateGraphValue(input, valueElement) {
	valueElement.textContent = input.value;
}

function formatNumberWithCommas(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatFollowers(input) {
	input.value = input.value
		.replace(/\D/g, '')
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	calculate();
}

followersInput.addEventListener('input', () => {
	formatFollowers(followersInput);
});
audienceInput.addEventListener('input', () => {
	calculate();
	updateGraphValue(audienceInput, audienceValue);
});
pricingInput.addEventListener('input', () => {
	calculate();
	updateGraphValue(pricingInput, pricingValue);
});

// Initial calculation
calculate();
updateGraphValue(audienceInput, audienceValue);
updateGraphValue(pricingInput, pricingValue);
