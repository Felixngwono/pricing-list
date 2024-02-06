function togglePricing() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const starterPriceMonthly = document.getElementById('starterPriceMonthly');
  const starterPriceAnnual = document.getElementById('starterPriceAnnual');
  // Repeat similar lines for Pro and Premium plans

  if (toggleSwitch.checked) {
    starterPriceMonthly.style.display = 'none';
    starterPriceAnnual.style.display = 'inline';
    // Repeat similar lines for Pro and Premium plans
    document.querySelectorAll('.toggle-label').forEach(label => label.innerText = 'Billed Annually');
  } else {
    starterPriceMonthly.style.display = 'inline';
    starterPriceAnnual.style.display = 'none';
    // Repeat similar lines for Pro and Premium plans
    document.querySelectorAll('.toggle-label').forEach(label => label.innerText = 'Billed Monthly');
  }
}
function togglePricing() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const plansContainer = document.querySelector('.plans-container');

  if (toggleSwitch.checked) {
    plansContainer.style.transform = 'translateX(-100%)';
    document.querySelectorAll('.toggle-label').forEach(label => label.innerText = 'Billed Annually');
  } else {
    plansContainer.style.transform = 'translateX(0)';
    document.querySelectorAll('.toggle-label').forEach(label => label.innerText = 'Billed Monthly');
  }
}