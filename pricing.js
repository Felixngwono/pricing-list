function togglePricing(sectionToShow) {
    const monthlyPricing = document.getElementById('monthlyPricing');
    const annualPricing = document.getElementById('annualPricing');
  
    if (sectionToShow === 'annualPricing') {
        monthlyPricing.style.display = 'none';
        annualPricing.style.display = 'block';
    } else {
        monthlyPricing.style.display = 'block';
        annualPricing.style.display = 'none';
    }
  }
  
  function openModal(plan) {
    $('#choosePlanModal').modal('show');
    $('#planOptions').val(plan);
  }
  
  function confirmPlan() {
    var selectedPlan = $('#planOptions').val();
    var selectedFeature = $('#featureOptions').val();
    var billingType = $('input[type=checkbox]').prop('checked') ? 'Yearly' : 'Monthly';
  
    // Display the confirmation message on the page
    $('#confirmationMessage').html("Your selected plan is: " + selectedPlan + ", selected feature is: " + selectedFeature + ", and billing type is: " + billingType);
    $('#confirmationMessage').show();
    $('#choosePlanModal').modal('hide');
  }
  