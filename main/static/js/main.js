$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://covid.ourworldindata.org/data/owid-covid-data.json/",
    success: function (data) {
      $("#confirmedCases").each(function() {
          var code = "OWID_WRL"; // atribut data-code

          if (!data[code]) return; // kalau tidak ada di return
          if (!data[code]["data"]) return; // kalau tidak ada di return
          var length = data[code]["data"].length;

          if (!data[code]["data"][length - 1]["total_cases"]) return; // kalau tidak ada di return
          var cases = data[code]["data"][length - 1]["total_cases"];

          if (!data[code]["data"][length - 1]["date"]) return; // kalau tidak ada di return
          var date = data[code]["data"][length - 1]["date"];

          $(this).html(
                  '<iframe src="' +
                    "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~OWID_WRL&hideControls=true" +
                    '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>' +
                    '<h3 class="mt-3" style="text-align:center;">Total Cases:</h3>' +
                    '<h4 style="text-align:center">' + numberWithCommas(cases) + '</h4>' +
                    '<br><h6 style="text-align:center">Last updated on ' + date +'</h6>'
                );
      });
      $("#vaccinated").each(function() {
          var code = "OWID_WRL"; // atribut data-code

          if (!data[code]) return; // kalau tidak ada di return
          if (!data[code]["data"]) return; // kalau tidak ada di return
          var length = data[code]["data"].length;

          if (!data[code]["data"][length - 1]["people_vaccinated"]) return; // kalau tidak ada di return
          var vaccinated = data[code]["data"][length - 1]["people_vaccinated"];

          if (!data[code]["data"][length - 1]["date"]) return; // kalau tidak ada di return
          var date = data[code]["data"][length - 1]["date"];

          $(this).html(
                  '<iframe src="' +
                    "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=People+vaccinated&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~OWID_WRL&hideControls=true" +
                    '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>' +
                    '<h3 class="mt-3" style="text-align:center;">Number of People who have been Vaccinated:</h3>' +
                    '<h4 style="text-align:center">' + numberWithCommas(vaccinated) + '</h4>' +
                    '<br><h6 style="text-align:center">Last updated on ' + date +'</h6>'
                );
      });
      $("#confirmedDeaths").each(function() {
          var code = "OWID_WRL"; // atribut data-code

          if (!data[code]) return; // kalau tidak ada di return
          if (!data[code]["data"]) return; // kalau tidak ada di return
          var length = data[code]["data"].length;

          if (!data[code]["data"][length - 1]["total_deaths"]) return; // kalau tidak ada di return
          var deaths = data[code]["data"][length - 1]["total_deaths"];

          if (!data[code]["data"][length - 1]["date"]) return; // kalau tidak ada di return
          var date = data[code]["data"][length - 1]["date"];

          $(this).html(
                  '<iframe src="' +
                    "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=Confirmed+deaths&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~OWID_WRL&hideControls=true" +
                    '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>'+
                    '<h3 class="mt-3" style="text-align:center;">Total Deaths:</h3>' +
                    '<h4 style="text-align:center">' + numberWithCommas(deaths) + '</h4>' +
                    '<br><h6 style="text-align:center">Last updated on ' + date +'</h6>'
                );
      });
    },
  });
  // diambil dari https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});