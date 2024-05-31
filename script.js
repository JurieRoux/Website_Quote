document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');
    const checkboxes = document.querySelectorAll('.service-checkbox');
    const totalOneTime = document.getElementById('total-one-time');
    const monthlyQuantity = document.getElementById('monthly-quantity');
    const totalMonthly = document.getElementById('total-monthly');
    const hourlyQuantity = document.getElementById('hourly-quantity');
    const totalHourly = document.getElementById('total-hourly');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(tab.getAttribute('href')).classList.add('active');
        });
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            let total = 0;
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    total += parseFloat(cb.getAttribute('data-price'));
                }
            });
            totalOneTime.textContent = total.toFixed(2);
        });
    });

    monthlyQuantity.addEventListener('input', function () {
        const monthlyCost = 200;
        totalMonthly.textContent = (monthlyCost * monthlyQuantity.value).toFixed(2);
    });

    hourlyQuantity.addEventListener('input', function () {
        const hourlyRate = 300;
        totalHourly.textContent = (hourlyRate * hourlyQuantity.value).toFixed(2);
    });

    // Set initial tab
    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
});
