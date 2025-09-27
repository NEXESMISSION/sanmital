/**
 * Form Submission Utility
 * Handles form submissions to Google Sheet via Google Apps Script
 */

// Google Apps Script Web App URL
const FORM_SUBMISSION_URL = "https://script.google.com/macros/s/AKfycbzqvZaVsGMaHD36CivhZPmD4c5XsFAXcL4NlTwFURl1b0M7LMc6Jj-R8zoko795NGWbsw/exec";

/**
 * Submit form data to Google Sheets
 * 
 * @param {Object} formData - Form data object containing form fields
 * @param {string} source - Source of the submission (e.g., 'homepage', 'contact')
 * @returns {Promise} - Promise resolving to submission result
 */
export const submitFormToGoogleSheet = async (formData, source = 'website') => {
  try {
    console.log('Submitting form with data:', formData);
    
    // Add source to the form data
    const dataWithSource = {
      ...formData,
      source
    };
    
    // Use only the hidden form method to avoid duplicate submissions
    const result = await submitViaHiddenForm(dataWithSource);
    console.log('Form submission result:', result);
    
    return result;
    
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "An error occurred while submitting the form. Please try again later.",
      error: error.toString()
    };
  }
};

/**
 * Submit form data using URL parameters
 */
async function submitViaURLParams(data) {
  try {
    // Create URL with parameters
    const url = new URL(FORM_SUBMISSION_URL);
    
    // Add each form field as a URL parameter
    Object.keys(data).forEach(key => {
      url.searchParams.append(key, data[key]);
    });
    
    console.log('Submitting via URL params to:', url.toString());
    
    // Send the request
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors', // This is important for CORS issues
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Since we're using no-cors, we can't actually read the response
    return {
      success: true,
      message: "Form submitted successfully (URL params method)",
      method: 'url_params'
    };
    
  } catch (error) {
    console.error("Error in URL params submission:", error);
    return {
      success: false,
      message: "URL params submission failed",
      error: error.toString(),
      method: 'url_params'
    };
  }
}

/**
 * Submit form data using a hidden form (more reliable method)
 */
async function submitViaHiddenForm(data) {
  return new Promise(resolve => {
    try {
      // Create a hidden iframe to target the form submission
      const iframe = document.createElement('iframe');
      iframe.name = `hidden-form-target-${Date.now()}`;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Create a form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = FORM_SUBMISSION_URL;
      form.target = iframe.name;
      form.style.display = 'none';
      
      // Add all form fields
      Object.keys(data).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
      });
      
      // Add form to the document
      document.body.appendChild(form);
      
      console.log('Submitting via hidden form');
      
      // Set a timeout to consider the submission complete
      setTimeout(() => {
        // Clean up the DOM
        if (document.body.contains(form)) document.body.removeChild(form);
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
        
        resolve({
          success: true,
          message: "Form submitted successfully (hidden form method)",
          method: 'hidden_form'
        });
      }, 2000);
      
      // Submit the form
      form.submit();
      
    } catch (error) {
      console.error("Error in hidden form submission:", error);
      resolve({
        success: false,
        message: "Hidden form submission failed",
        error: error.toString(),
        method: 'hidden_form'
      });
    }
  });
}

/**
 * Validate form data
 * 
 * @param {Object} formData - Form data object containing form fields
 * @returns {Object} - Validation result with success and errors
 */
export const validateFormData = (formData) => {
  const errors = {};
  
  // Check required fields
  if (!formData.name || formData.name.trim() === '') {
    errors.name = "Le nom est requis";
  }
  
  if (!formData.email || formData.email.trim() === '') {
    errors.email = "L'email est requis";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Format d'email invalide";
  }
  
  if (!formData.phone || formData.phone.trim() === '') {
    errors.phone = "Le téléphone est requis";
  }
  
  if (!formData.message || formData.message.trim() === '') {
    errors.message = "Le message est requis";
  }
  
  // Return validation result
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Check if email is valid
 * 
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
