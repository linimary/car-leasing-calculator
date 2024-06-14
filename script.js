document.addEventListener('DOMContentLoaded', () => {
    const carType = document.getElementById('car-type');
    const carValue = document.getElementById('car-value');
    const carValueRange = document.getElementById('car-value-range');
    const leasePeriod = document.getElementById('lease-period');
    const downPayment = document.getElementById('down-payment');
    const downPaymentRange = document.getElementById('down-payment-range');
    const totalCost = document.getElementById('total-cost');
    const downPaymentDetails = document.getElementById('down-payment-details');
    const downPaymentPercent = document.getElementById('down-payment-percent');
    const monthlyInstallment = document.getElementById('monthly-installment');
    const interestRate = document.getElementById('interest-rate');

    const updateValues = () => {
        const carValueNum = parseFloat(carValue.value);
        const leasePeriodNum = parseInt(leasePeriod.value);
        const downPaymentPercentNum = parseFloat(downPayment.value);
        const downPaymentAmount = carValueNum * (downPaymentPercentNum / 100);
        const carTypeValue = carType.value;
        const interestRateValue = carTypeValue === 'new' ? 2.99 : 3.7;
        const principal = carValueNum - downPaymentAmount;
        const numberOfPayments = leasePeriodNum;
        const monthlyInterestRate = (interestRateValue / 100) / 12;
        const monthlyInstallmentAmount = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments)) / (Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1);
        const totalCostValue = monthlyInstallmentAmount * numberOfPayments + downPaymentAmount;

        downPaymentPercent.textContent = `${downPaymentPercentNum}%`;
        downPaymentDetails.textContent = downPaymentAmount.toFixed(2);
        monthlyInstallment.textContent = monthlyInstallmentAmount.toFixed(2);
        totalCost.textContent = totalCostValue.toFixed(2);
        interestRate.textContent = `${interestRateValue}%`;
    };

    carValue.addEventListener('input', () => {
        carValueRange.value = carValue.value;
        updateValues();
    });

    carValueRange.addEventListener('input', () => {
        carValue.value = carValueRange.value;
        updateValues();
    });

    leasePeriod.addEventListener('change', updateValues);

    downPayment.addEventListener('input', () => {
        downPaymentRange.value = downPayment.value;
        updateValues();
    });

    downPaymentRange.addEventListener('input', () => {
        downPayment.value = downPaymentRange.value;
        updateValues();
    });

    carType.addEventListener('change', updateValues);

    updateValues();
});
