// from data.js
var tableData = data;
let tableMatch = null;
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