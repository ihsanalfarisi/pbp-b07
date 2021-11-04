$(document).ready(function(){

    HotelPage()

    document.getElementById("myInput").addEventListener("keyup",e=>{
      HotelPage(e.target.value)
    })

    function HotelPage(search="") {
      var pathname = window.location.href
      $.ajax({
        url: pathname+'json', 
        dataType: 'json',
        success: function(res){
          let hasil = res;
          if(search!==""){
            hasil = res.filter(item=>{
              if(String(item).toLowerCase().includes(search.toLowerCase())){
                return item
              }
            })
          }
          if(hasil.length>0){
            html="";
            hasil.forEach(item=>{
              html = html + `
              <div class="col-lg-6 col-md-6"> 
                <div class="card" style="margin-bottom: 30px;">
                  <div class="card-header">
                    ${item.fields.country}
                  </div>
                  <img class="card-img-top" src="${item.fields.foto}" alt="hotel image">
                  <div class="card-body">
                    <h5 class="card-title"><strong>${item.fields.nama_hotel}</strong></h5>
                    <p class="card-text"><strong>Harga: </strong>${item.fields.harga}</p>
                  </div>
                  <div class="card-footer" style="text-align: center;">
                    <a href='${item.fields.detail}' class="btn btn-primary">Info Detail</a>
                  </div>
                </div>
              </div>
            `
            })
            document.querySelector(".result .row").innerHTML = html
          }            
      }})
    }
  });
