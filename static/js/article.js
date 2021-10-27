$(document).ready(function(){
    TableValue()

    function TableValue() {
      setTimeout(function(){
      console.log("hwdbqwlb")
      $.ajax({
        url: "http://127.0.0.1:8000/article/json", 
        dataType: 'json',
        success: function(hasil){
          var latest = hasil.length-1
          $(".article-page").append(`
          <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div class="col-md-6 px-0">
              <h1 class="display-4 fst-italic">${hasil[latest].fields.judul}</h1>
              <p class="lead my-3">${hasil[latest].fields.deskripsi}</p>
              <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
            </div>
          </div>
          `);
          $(".article-page").append('<div class="list-artikel row mb-2">');
          for(i=hasil.length-2; i >= 0; i--){
            $(".article-page").append(`
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">${hasil[i].fields.judul}</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">${hasil[i].fields.deskripsi}</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              </div>
            </div>
            `);
          }
          $(".article-page").append('</div>');
      }})
    },500);}

    $('#tr_note').on("click",'.view',function(){
      var id = $(this).attr('id');
        $.ajax({
        url: 'http://127.0.0.1:8000/lab-5/notes/'+id, 
        dataType: 'json',
        success: function(hasil){
          var temp1 = "<div class='modal-header'><h4 class='modal-title d-flex justify-content-center'>"+hasil[0].fields.title+"</h4><h5 class='modal-title'>To: "+hasil[0].fields.to+"</h5><br><h5 class='modal-title'>From: "+hasil[0].fields.from_m+"</h5><br><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body'><p>"+hasil[0].fields.message+"</p></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button></div>";
          $('body').append("<div id='modal-view' class='modal' tabindex='-1'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'><div class='modal-content'>"+temp1+"</div></div></div>");
          $('#modal-view').modal('show');
        }})
    });

    let pk = "";
    $('#tr_note').on("click",'.show-edit-modal',function(){
      console.log("ini edit");
      pk = $(this).attr('id');
      $('#modal-edit').modal('show');
    });

    $("#form-gtw").submit(function(e) {
      e.preventDefault();

      $.ajax({
        type: 'POST',
        url: '/lab-5/notes/'+pk+'/update',
        dataType: 'json',
        data: {
          'title': $("#input-from").val(),
          'to': $("#input-to").val(),
          'from_m': $("#input-title").val(),
          'message': $("#input-message").val(),
          'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val(),
        },
        success: function (response) {
          $("#input-from").val("") 
          $("#input-to").val("") 
          $("#input-title").val("") 
          $("#input-message").val("")

          $("#tr_note").empty();
          TableValue()
        }})
    });
});