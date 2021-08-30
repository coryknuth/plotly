function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result);
  });
}





// d3.selectAll("body").on("change", updatePage);

// function updatePage() {
//   var dropdownMenu = d3.selectAll("#selectOption").node();
//   var dropdownMenuID = dropdownMenu.id;
//   var selectedOption = dropdownMenu.value;

//   console.log(dropdownMenuID);
//   console.log(selectedOption);
// };

// d3.json("samples.json").then(function(data){
//   console.log(data);
// });

// d3.json("samples.json").then(function(data){
//   wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//   filteredWfreq = wfreq.filter(element => element !=
// null);
//   console.log(filteredWfreq);
// });

// d3.json("samples.json").then(function(data){
//   firstPerson = data.metadata[0];
//   Object.entries(firstPerson).forEach(([key, value]) =>
//     {console.log(key + ': ' + value);});
// });