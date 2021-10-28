$(document).ready(function(){

    MainPage()

    function MainPage() {
      setTimeout(function(){
      var pathname = window.location.href
      $.ajax({
        url: pathname+'json', 
        dataType: 'json',
        success: function(hasil){
          if(hasil.length>0){
            var latest = hasil.length-1
            $("#article").append(`
            <div class="main-article p-4 p-md-5 mb-4 text-white rounded bg-dark">
              <div class="col-md-6 px-0">
                <h1 class="display-4 fst-italic">${hasil[latest].fields.judul}</h1>
                <div class="mb-1 text-muted">${hasil[latest].fields.date_published}</div>
                <p class="lead my-3">${hasil[latest].fields.deskripsi}</p>
                <p class="lead mb-0"><a type='button' id="${hasil[latest].pk}" class="detail-artikel text-white fw-bold">Continue reading..</a></p>
              </div>
            </div>
            `);
            $("#article").append('<div class="other-article row mb-2">')
            for(i=hasil.length-2; i >= 0;i--){
              $(".other-article").append(`
              <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <h3 class="mb-0">${hasil[i].fields.judul}</h3>
                    <p class="mb-1 text-muted">${hasil[latest].fields.date_published}</p>
                    <p class="card-text mb-auto">${hasil[i].fields.deskripsi}</p>
                    <a type='button' id="${hasil[i].pk}" class="detail-artikel stretched-link">Continue reading..</a>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              `);
            }
            $("#article").append('</div>')
          }else{
            $("#article").append(`
            <div class="d-flex justify-content-sm-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="grey" class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"></path>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path>
              </svg>
            </div>
            <br>
            <p class="text-muted fst-italic fs-1 text-center">
              Artikel Belum Tersedia
            </p>`)
          }
            
      }})
    },500);}

    $('.article-page').on("click",'.detail-artikel',function(){
        var id = $(this).attr('id');
        var pathname = window.location.href
          $.ajax({
          url: pathname+'details/'+id, 
          dataType: 'json',
          success: function(hasil){
            $(".article-page").empty()
            $(".article-page").append(`
            <div class="container py-4 px-5">
              <header class="border-bottom">
                <div class="pricing-header p-3 pb-md-0 mx-auto">
                  <h3 class="display-6 fw-normal text-center">${hasil[0].fields.judul}</h3>
                  <p class="text-muted fs-7 text-center">
                  ${hasil[0].fields.penulis} <br>
                    ${hasil[0].fields.date_published}
                  </p>
                  <p>${hasil[0].fields.deskripsi}</p>
                </div>
              </header>
              <main id="article" class="container py-4 px-5">
                <div id="image-div" class="border-bottom">
                  
                  <img src="/${hasil[0].fields.gambar}" id="artikel-gambar" class="img-fluid rounded ratio" style="--bs-aspect-ratio: 75%;" alt="...">
                  
                </div>
                <div class="border-bottom">
                  <p>${hasil[0].fields.isi}</p>
                </div>
                <div class="text-center">
                  <br>
                  <a type="button" href="./" class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
                    </svg>
                    Kembali
                  </a>
                </div>
              </main>
            </div>
            `)
          }})
      });
  });