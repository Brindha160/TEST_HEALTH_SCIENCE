// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// BMI Calculator
function calculateBMI() {
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const resultDiv = document.getElementById('bmi-result');
    const valueSpan = resultDiv.querySelector('.value');
    const categorySpan = resultDiv.querySelector('.category');

    if (!heightInput || !weightInput) {
        alert("Please fill in both height and weight!");
        return;
    }

    const heightInMeters = heightInput / 100;
    const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(1);

    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3b82f6'; // Blue
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal Weight';
        color = '#22c55e'; // Green
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        color = '#eab308'; // Yellow
    } else {
        category = 'Obese';
        color = '#ef4444'; // Red
    }

    valueSpan.textContent = bmi;
    categorySpan.textContent = category;
    valueSpan.style.color = color;

    resultDiv.classList.remove('hidden');
}

// Water Intake Calculator
function calculateWater() {
    const weight = document.getElementById('water-weight').value;
    const activity = document.getElementById('activity-level').value;
    const resultDiv = document.getElementById('water-result');
    const valueSpan = resultDiv.querySelector('.value');

    if (!weight) {
        alert("Please enter your weight.");
        return;
    }

    let multiplier = 0.033; // Base: 33ml per kg

    if (activity === 'medium') multiplier += 0.005; // +5ml/kg
    if (activity === 'high') multiplier += 0.01;   // +10ml/kg

    const liters = (weight * multiplier).toFixed(1);

    valueSpan.textContent = liters;
    resultDiv.classList.remove('hidden');
}

// Nav Header Active State
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) {
            current = '#' + section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === current) {
            a.classList.add('active');
        }
    });
});
