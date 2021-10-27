$(document).ready(function () {
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
        $(this).html(data[code]["location"]);
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
        var length = data[code]["data"].length;
        $(this).html(
          data[code]["data"][length - 1]["total_cases"] +
            " CASES<br/><br/><br/><br/><br/><br/><br/>" +
            data[code]["data"][length - 1]["date"]
        );
      });
    },
  });

  // $("#addButton").click(function () {
  //   var serializedData = $("#addCountryForm");
  //   alert("berhasil 1");
  //   $.ajax({
  //     url: $("#addCountryForm").data("url"),
  //     data: serializedData,
  //     type: "post",
  //     success: function (response) {
  //       alert("berhasil 2");
  //       $("#details-list").append(
  //         '<div class="col-4 mb-4"><div class="card text-center" style="height: 400px"><h5 class="card-header" data-code="' +
  //           response.country.id +
  //           '"></h5><div class="card-body"><h3 data-code="' +
  //           response.country.id +
  //           '"></h3></div><div class="card-footer" style="padding: 0px 0px 0px 0px"><div class="d-grid gap-2"><buttontype="button"class="btn btn-light btn-block"data-bs-toggle="modal"data-bs-target="#confirmedCasesModal"id="details"data-code="' +
  //           response.country.id +
  //           '">Details</button></div></div></div></div>'
  //       );
  //     },
  //   });
  // });

  $("#countryList").on("click", "#countryName", function () {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).data("text")).select();
    document.execCommand("copy");
    $temp.remove();
  });

  $("#countryList").on("mousedown", "#countryName", function () {
    $("#" + $(this).data("id")).attr(
      "class",
      "list-group-item flex-fill text-truncate bg-light"
    );
  });

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
