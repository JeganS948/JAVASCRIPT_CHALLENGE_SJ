// from data.js
var tableData = data;
console.log(tableData);

// Variable declariation
let tbody = d3.select("tbody");
let filtered = 0;

// Build table
function buildTable(data){
    // Clear existing data
    tbody.html("");
    // Loop through `data` 
    data.forEach((dataRow) => {
        // Append table row `tr` for each UFO sighting value
        let row = tbody.append("tr");
        // Use `Object.values` & `forEach` to 
        Object.values(dataRow).forEach((val) => {
            // Append a cell to the row for each value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

// Trigger F" when the button is clicked
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
    // Build Table with Filtered Data
    buildTable(filterData);
}

// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);

// Build Table with data.js 
buildTable(tableData);

// Reset button - click 
btnReset.on("click", () => {
	// window.location.href = "index.html";
	document.getElementById("searchDate").value='';
	
	// Load original dataset
	loadTableRows(tableData);
})

// alternatively allow user to just hit Enter to filter by date
dateField.on("keyup", function() {
    if (d3.event.keyCode == 13){
        filterDate();
    }
});