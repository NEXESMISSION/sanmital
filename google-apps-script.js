/**
 * SAN METAL BY BEN AMOR - Form to Google Sheet Integration (Corrected for Form Data)
 * 
 * This script is specifically designed to handle data sent as URL parameters
 * or from a standard form submission, which is what your `formSubmission.js` file does.
 * It reads the data from the `e.parameter` object.
 */

// --- Configuration ---
const SPREADSHEET_ID = "1NOECC6ADH_uTrDRXrbwFb7i7-Kx6rdTHCIH9pAizNlk";
const SHEET_NAME = "SAN METAL BY BEN AMOR";

/**
 * Handles GET requests. Useful for checking if the web app URL is active.
 */
function doGet(e) {
  return ContentService.createTextOutput("The script is active. Please submit data via POST request.")
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Handles POST requests from your website's form.
 * The event object 'e' will contain the submitted form data in 'e.parameter'.
 */
function doPost(e) {
  try {
    // Log the received parameters for debugging.
    Logger.log("doPost received parameters: " + JSON.stringify(e.parameter));

    const data = e.parameter;

    // Check if any data was received.
    if (!data || Object.keys(data).length === 0) {
      throw new Error("No data received in e.parameter. The form might be submitting empty.");
    }
    
    // Store the data in the sheet.
    const result = storeData(data);
    
    if (!result.success) {
      throw new Error(result.error);
    }
    
    // Return a success response. Because your client-side code uses `mode: 'no-cors'`,
    // this response will not be readable by the browser, but it confirms a successful execution.
    return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' }))
      .setMimeType(ContentService.MimeType.JSON)
      .addHeader('Access-Control-Allow-Origin', '*');

  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    // Return an error response.
    return ContentService.createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .addHeader('Access-Control-Allow-Origin', '*');
  }
}

/**
 * Stores the provided data in the Google Sheet.
 */
function storeData(data) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }
    
    const headers = ['Timestamp', 'Name', 'Company', 'Email', 'Phone', 'CustomerType', 'Message', 'Source'];
    
    // If the sheet is empty, add the headers.
    if (sheet.getLastRow() < 1) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    }
    
    // Get the final headers to ensure correct column order.
    const finalHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    const newRow = finalHeaders.map(header => {
      // Find the corresponding key in the data object (case-insensitive)
      const key = Object.keys(data).find(k => k.toLowerCase() === header.toLowerCase());
      
      if (header.toLowerCase() === 'timestamp') {
        return new Date();
      }
      return key ? data[key] : ""; // Return data or an empty string if not found
    });
    
    sheet.appendRow(newRow);
    
    return { success: true };

  } catch (error) {
    Logger.log("Error in storeData: " + error.toString());
    return { success: false, error: error.toString() };
  }
}

/**
 * A test function to run manually from the editor to verify sheet access.
 * This helps confirm that the script has the necessary permissions.
 */
function testSheetSetup() {
  const testData = {
    name: "Manual Test User",
    company: "Test Corp",
    email: "test@example.com",
    phone: "123456789",
    customerType: "Client",
    message: "This is a test run directly from the script editor.",
    source: "manual_test"
  };
  const result = storeData(testData);
  Logger.log("Test execution result: " + JSON.stringify(result));
}