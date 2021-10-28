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
            <div class="card bg-light">
                <div class="view overlay hm-yellow-slight">
                  <img src="${hasil[latest].fields.gambar}" style="width: 1043px; height: 350px" class="card-img opacity-25" alt="...">
                  <div class="card-img-overlay text-center">
                    <br>
                    <h3 class="display-6">${hasil[latest].fields.judul}</h3>
                    <p class="card-text mb-1 opacity-75">${hasil[latest].fields.date_published}</p>
                    <p class="card-text lead my-3">${hasil[latest].fields.deskripsi}</p>
                    <br>
                    <a href="details2/${hasil[latest].pk}" class="btn btn-primary">Lanjutkan Membaca</a>
                  </div>
                </div>
            </div>
            <br>
            `);
            $("#article").append('<div class="other-article row mb-2">')
            for(i=hasil.length-2; i >= 0;i--){
              $(".other-article").append(`
              <div class="col-md-6">
              <div class="card" style="width: 32rem;">
                <div class="view overlay hm-yellow-slight">
                  <img src="${hasil[i].fields.gambar}" style="width: 510px; height: 300px" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title mb-0">${hasil[i].fields.judul}</h5>
                    <p class="mb-1 text-muted">${hasil[latest].fields.date_published}</p>
                    <p class="card-text mb-auto">${hasil[i].fields.deskripsi}</p>
                    <br>
                    <a href="details2/${hasil[i].pk}" class="btn btn-primary">Lanjutkan Membaca</a>
                  </div>
                </div>
              </div>
              <br>
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

    // $('.article-page').on("click",'.detail-artikel',function(){
    //     var id = $(this).attr('id');
    //     var pathname = window.location.href
    //       $.ajax({
    //       url: pathname+'details/'+id, 
    //       dataType: 'json',
    //       success: function(hasil){
    //         $(".article-page").empty()
    //         $(".article-page").append(`
    //         <div class="container py-4 px-5">
    //           <header class="border-bottom">
    //             <div class="pricing-header p-3 pb-md-0 mx-auto">
    //               <h3 class="display-6 fw-normal text-center">${hasil[0].fields.judul}</h3>
    //               <p class="text-muted fs-7 text-center">
    //               ${hasil[0].fields.penulis} <br>
    //                 ${hasil[0].fields.date_published}
    //               </p>
    //               <p>${hasil[0].fields.deskripsi}</p>
    //             </div>
    //           </header>
    //           <main id="article" class="container py-4 px-5">
    //             <div id="image-div" class="border-bottom">
                  
    //               <img src="/media/${hasil[0].fields.gambar}" id="artikel-gambar" class="img-fluid rounded ratio" style="--bs-aspect-ratio: 75%;" alt="...">
                  
    //             </div>
    //             <div class="border-bottom">
    //               <p>${hasil[0].fields.isi}</p>
    //             </div>
    //             <div class="text-center">
    //               <br>
    //               <a type="button" href="./" class="btn btn-primary">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
    //                   <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
    //                 </svg>
    //                 Kembali
    //               </a>
    //             </div>
    //           </main>
    //         </div>
    //         `)
    //       }})
      // });
  });