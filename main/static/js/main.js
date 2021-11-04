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

          if (!data[code]["data"][length - 1]["total_cases"]) { // kondisi total kasus belom ada di hari terakhir
                var cases = data[code]["data"][length - 2]["total_cases"];
                var date = data[code]["data"][length - 2]["date"];
          } else {
              var cases = data[code]["data"][length - 1]["total_cases"];
              var date = data[code]["data"][length - 1]["date"];
          }

          $(this).html(
                  '<iframe src="' +
                    "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~OWID_WRL&hideControls=true" +
                    '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>' +
                    '<h3 class="mt-3" style="text-align:center;">Total Kasus Terkonfirmasi:</h3>' +
                    '<h4 style="text-align:center">' + numberWithCommas(cases) + '</h4>' +
                    '<br><h6 style="text-align:center">Terakhir diperbarui: ' + date +'</h6>'
          );
      });
      $("#vaccinated").each(function() {
          var code = "OWID_WRL"; // atribut data-code

          if (!data[code]) return; // kalau tidak ada di return
          if (!data[code]["data"]) return; // kalau tidak ada di return
          var length = data[code]["data"].length;

          if (!data[code]["data"][length - 1]["people_vaccinated"]) { // kondisi data vaksinasi belom ada di hari terakhir
                var vaccinated = data[code]["data"][length - 2]["people_vaccinated"];
                var date = data[code]["data"][length - 2]["date"];
          } else {
              var vaccinated = data[code]["data"][length - 1]["people_vaccinated"];
              var date = data[code]["data"][length - 1]["date"];
          }

          $(this).html(
                  '<iframe src="' +
                    "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=People+vaccinated&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~OWID_WRL&hideControls=true" +
                    '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>'+
                    '<h3 class="mt-3" style="text-align:center;">Jumlah Orang yang Melakukan Vaksinasi:</h3>' +
                    '<h4 style="text-align:center">' + numberWithCommas(vaccinated) + '</h4>' +
                    '<br><h6 style="text-align:center">Terakhir diperbarui: ' + date +'</h6>'
          );
      });
      $("#confirmedDeaths").each(function() {
          var code = "OWID_WRL"; // atribut data-code

          if (!data[code]) return; // kalau tidak ada di return
          if (!data[code]["data"]) return; // kalau tidak ada di return
          var length = data[code]["data"].length;

          if (!data[code]["data"][length - 1]["total_deaths"]) { // kondisi total kematian belom ada di hari terakhir
                var deaths = data[code]["data"][length - 2]["total_deaths"];
                var date = data[code]["data"][length - 2]["date"];
          } else {
              var deaths = data[code]["data"][length - 1]["total_deaths"];
              var date = data[code]["data"][length - 1]["date"];
          }

          $(this).html(
                  '<iframe src="' +
                    "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=Confirmed+deaths&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~OWID_WRL&hideControls=true" +
                    '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>'+
                    '<h3 class="mt-3" style="text-align:center;">Total Kematian Terkonfirmasi:</h3>' +
                    '<h4 style="text-align:center">' + numberWithCommas(deaths) + '</h4>' +
                    '<br><h6 style="text-align:center">Terakhir diperbarui: ' + date +'</h6>'
          );
      });
    },
  });
  // diambil dari https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});