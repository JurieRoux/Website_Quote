document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');
    const checkboxes = document.querySelectorAll('.service-checkbox');
    const monthlyCheckboxes = document.querySelectorAll('.monthly-checkbox');
    const hourlyCheckboxes = document.querySelectorAll('.hourly-checkbox');
    const totalOneTime = document.getElementById('total-one-time');
    const totalMonthly = document.getElementById('total-monthly');
    const totalHourly = document.getElementById('total-hourly');
    const complexitySlider = document.getElementById('complexity-slider');
    const complexityPrice = document.getElementById('complexity-price');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(tab.getAttribute('href')).classList.add('active');
        });
    });

    const calculateTotal = (checkboxes, totalElement) => {
        let total = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) {
                total += parseFloat(cb.getAttribute('data-price'));
            }
        });
        totalElement.textContent = total.toFixed(2);
    };

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => calculateTotal(checkboxes, totalOneTime));
    });

    monthlyCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => calculateTotal(monthlyCheckboxes, totalMonthly));
    });

    hourlyCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => calculateTotal(hourlyCheckboxes, totalHourly));
    });

    complexitySlider.addEventListener('input', function () {
        complexityPrice.textContent = complexitySlider.value;
        calculateTotal(checkboxes, totalOneTime);
    });

    // Set initial tab
    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
});
