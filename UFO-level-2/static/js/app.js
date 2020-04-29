// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(tableData);

function populatetabeldata(data){
 // tbody.text("")
 d3.selectAll("td").remove()
data.forEach((UFOdata) => {
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })};



  
  populatetabeldata(tableData);

  // Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
 // var inputDate = d3.select("#datetime");

  // Get the value property of the input element
  var inputDate = d3.select("#datetime").property("value");
  var inputcity = d3.select("#city").property("value");
  var inputstate = d3.select("#state").property("value");
  var inputcountry = d3.select("#country").property("value");
  var inputshape = d3.select("#shape").property("value");

  console.log(inputDate);
  //console.log(people);

  filteredData = tableData;

  console.log(filteredData);

  console.log(inputDate);
  console.log(inputcity);
  console.log(inputstate);
  console.log(inputcountry);
  console.log(inputshape);

  if (inputDate.length>0) {

  var filteredData = filteredData.filter(dateselected => dateselected.datetime === inputDate);
 };
 
 if (inputcity.length>0) {

  var filteredData = filteredData.filter(cityselected => cityselected.city === inputcity);
 };

 if (inputstate.length>0) {

  var filteredData = filteredData.filter(stateselected => stateselected.state === inputstate);
 };

 if (inputcountry.length>0) {

  var filteredData = filteredData.filter(countryselected => countryselected.country === inputcountry);
 };

 if (inputshape.length>0) {

  var filteredData = filteredData.filter(shapeselected => shapeselected.shape === inputshape);
 };

 
  console.log(filteredData);
  populatetabeldata(filteredData);
});
