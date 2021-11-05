$(document).ready(function () {
  // Untuk popover bootstrap
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Nambahain nama negara
  $.ajax({
    type: "GET",
    url: "https://covid.ourworldindata.org/data/owid-covid-data.json/",
    success: function (data) {
      $("h5").each(function () {
        var code = $(this).data("code"); // atribut data-code
        if (!data[code]) return; // kalau tidak ada di return
        $(this).html(data[code]["location"] + "<br/><br/>");
      });
    },
  });

  // Nambahain total yang covid + tanggal
  $.ajax({
    type: "GET",
    url: "https://covid.ourworldindata.org/data/owid-covid-data.json/",
    success: function (data) {
      $("h3").each(function () {
        var code = $(this).data("code"); // atribut data-code

        if (!data[code]) return; // kalau tidak ada di return
        if (!data[code]["data"]) return; // kalau tidak ada di return
        var length = data[code]["data"].length;

        if (!data[code]["data"][length - 1]["total_cases"]) return; // kalau tidak ada di return
        var cases = data[code]["data"][length - 1]["total_cases"];

        if (!data[code]["data"][length - 1]["date"]) return; // kalau tidak ada di return
        var date = data[code]["data"][length - 1]["date"];

        $(this).html(
          "Kasus Virus Corona:<br/>" +
            numberWithCommas(cases) +
            "<br/><br/><br/><span class = 'fs-6'>Terakhir diperbarui: " +
            date +
            "</span>"
        );
      });
    },
  });

  // ngasih , di angka
  // diambil dari https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // copy text saat di klik
  $("#countryList").on("click", "#countryName", function () {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).data("text")).select();
    document.execCommand("copy");
    $temp.remove();
  });

  // ubah warna saat di klik
  $("#countryList").on("mousedown", "#countryName", function () {
    $("#" + $(this).data("id")).attr(
      "class",
      "list-group-item flex-fill text-truncate bg-light"
    );
  });

  // balikin warna setelah di klik
  $("#countryList").on("mouseup", "#countryName", function () {
    $("#" + $(this).data("id")).attr(
      "class",
      "list-group-item flex-fill text-truncate"
    );
  });

  // Buat ngeclick tombol details
  // html baru dibuat pas di click tombolny
  $("#details-list").on("click", "#details", function () {
    var dataCode = $(this).data("code"); // atribut data-code
    var urlCases =
      "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~" +
      dataCode +
      "&hideControls=true";
    var urlVaccinated =
      "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=People+vaccinated&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~" +
      dataCode +
      "&hideControls=true";

    var urlDeaths =
      "https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=Confirmed+deaths&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=~" +
      dataCode +
      "&hideControls=true";

    $("#confirmedCases").html(
      '<iframe src="' +
        urlCases +
        '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>'
    );

    $("#vaccinated").html(
      '<iframe src="' +
        urlVaccinated +
        '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>'
    );

    $("#confirmedDeaths").html(
      '<iframe src="' +
        urlDeaths +
        '"loading="lazy"style="width: 100%; height: 600px; border: 0px none"id="stat-1"></iframe>'
    );
  });
});
