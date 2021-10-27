$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "",
    success: function () {
      $("#confirmedCases").html(
        '<iframe src="' +
          "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~OWID_WRL&hideControls=true" +
          '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>'
      );
      $("#vaccinated").html(
        '<iframe src="' +
          "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=People+vaccinated&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~OWID_WRL&hideControls=true" +
          '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>'
      );
      $("#confirmedDeaths").html(
        '<iframe src="' +
          "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=Confirmed+deaths&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~OWID_WRL&hideControls=true" +
          '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>'
      );
    },
  });
});