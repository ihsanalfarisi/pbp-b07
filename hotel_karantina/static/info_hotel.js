$(document).ready(function(){

    HotelPage()

    document.querySelector("form.mx-auto").addEventListener("submit",e=>{
        // alert(e.target.value)
        e.preventDefault()
        HotelPage(document.getElementById("myInput").value)
        document.querySelector(".result h3 span strong").innerHTML = document.getElementById("myInput").value
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
              if(String(item.fields.country).toLowerCase().includes(search.toLowerCase())){ 
                return item
              }
            })
          }else{
            hasil = [];
          }
          if(search!==""){
            if(hasil.length>0){
              html=`
                <h3 style="text-align: center; margin-top: 20px; margin-bottom: 10px;">
                  Hotel Karantina Terbaik di <span style="color: rgb(255, 0, 149);"><strong>${search}</strong></span>
                </h3>
                <div class="row">
              `;
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
              html = html + "</div>"
              document.querySelector(".result").innerHTML = html
            }else{
              document.querySelector(".result").innerHTML = `<h5 style="text-align: center; margin-top: 10px;">Harap ketik negara yang sesuai</h5>`
            }
          }else{
            document.querySelector(".result").innerHTML = ""
          }       
      }})
    }
  });