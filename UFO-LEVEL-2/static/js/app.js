// From data.js
var tableData = data;
console.log(tableData);

// Variable declariation
let tbody = d3.select("tbody");
let filtered = 0;

// Select button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers 
button.on("click", handleClick);
form.on("submit",handleClick);

// Build table
function buildTable(data){
    // Clear existing data
    tbody.html("");
    // Loop through `data` 
    data.forEach((dataRow) => {
        // Append table row `tr` for each UFO sighting value
        row = tbody.append("tr");
        // Use `Object.values` & `forEach` to 
        Object.values(dataRow).forEach((value) => {
            // Append a cell to the row for each value
            cell = row.append("td");
            cell.text(value);
        });
    })
}

// Trigger function when the button is clicked
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }

    // Get the value property of the input elements and set all text to lowercase
    var dateTime = d3.select("#datetime").property("value");
    var selectedCountry = d3.select("#country").property("value").toLowerCase();
    var selectedState = d3.select("#state").property("value").toLowerCase();
    var selectedCity = d3.select("#city").property("value").toLowerCase();
    var selectedShape = d3.select("#shape").property("value").toLowerCase();

    // initialize tableData as filteredData
    filteredData = tableData;
    if (dateTime) {
        var filteredData = filteredData.filter(record => record.datetime === dateTime);
    }
    if (selectedCountry) {
        var filteredData = filteredData.filter(record => record.country === selectedCountry);
    }
    if (selectedState) {
        var filteredData = filteredData.filter(record => record.state === selectedState);
    }
    if (selectedCity) {
        var filteredData = filteredData.filter(record => record.city === selectedCity);
    }
    if (selectedShape) {
        var filteredData = filteredData.filter(record => record.shape === selectedShape);
    }

    // Build Table with Filtered Data
    buildTable(filterData);
}

// Build Table with data.js 
buildTable(tableData);