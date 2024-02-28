const followersInput = document.getElementById('followers');
        const audienceInput = document.getElementById('audience');
        const pricingInput = document.getElementById('pricing');
        const resultDiv = document.getElementById('result');
        const audienceValue = document.getElementById('audienceValue');
        const pricingValue = document.getElementById('pricingValue');
        const errorMessage = document.getElementById('followerErrorMessage');

        function calculate() {
            const followers = parseInt(followersInput.value);
            const audience = parseFloat(audienceInput.value);
            const pricing = parseFloat(pricingInput.value);

            if (isNaN(followers)) {
                errorMessage.textContent = 'Invalid number';
                return;
            } else {
                errorMessage.textContent = '';
            }

            const result = followers * (audience/100);
            resultDiv.textContent = `Result: $${result * pricing}`;
        }

        function updateGraphValue(input, valueElement) {
            valueElement.textContent = input.value;
        }

        followersInput.addEventListener('input', calculate);
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