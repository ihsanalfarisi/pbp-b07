$(document).ready(function(){
    console.log("masuk main")
    $("#Malaysia").load("malaysia.html/");
    $("#Singapore").load("singapore.html/");
    $("#Thailand").load("thailand.html/");

    $("#countryForm").submit(function(e) {
        e.preventDefault();
        var negara = $("#myInput").val();
        var pathname = window.location.href;
        $.ajax({
            type: 'POST',
            url: pathname +'json', 
            dataType: 'json',
            data: {'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val()},
            success: function (response) {
                $("#myInput").val("");
                if(negara.toUpperCase() === 'MALAYSIA'){
                $("#list_swab").empty();
                $("#list_swab").append(`
                    <tr>
                        <th>Nama Fasilitas</th>
                        <th>Alamat</th>
                    </tr>
                    <tr>
                        <td><a href="http://www.malaysiaairports.com.my/media-centre/news/new-private-covid-19-screening-facility-klia-now-open">BP Clinical Lab</a></td>
                        <td>Kuala Lumpur International Airport, Sepang Selangor Darul Ehsan, Malaysia</td>
                    </tr>
                    <tr>
                        <td><a href="https://klinik-sairamserikembangan.business.site/">Klinik Sairam Seri Kembangan</a></td>
                        <td>No. 39 G, Jalan Atmosphere 1, Pusat Perniagaan The Atmosphere, 43300 Seri Kembangan, Selangor, Malaysia</td>
                    </tr>
                    <tr>
                        <td><a href="https://klihc.com.my/covid-19/">Kuala Lumpur International Health Care Centre</a></td>
                        <td>500-1-6, Wisma Indah, Jln Tun Razak, 55100 Kuala Lumpur, Malaysia</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.pantai.com.my/klang/drive-thru-service-covid-19-test">Pantai Hospital Klang</a></td>
                        <td>Lot 5921, Persiaran Raja Muda Musa, Taman Radzi, 41200 Klang, Selangor, Malaysia</td>
                    </tr>
                    <tr>
                        <td><a href="https://klinik-sairamserikembangan.business.site/">Dr. Tan and Partners</a></td>
                        <td>25-1, Jalan PJU 1/3f, Sunway Mas Commercial Center, 47301 Petaling Jaya, Selangor, Malaysia</td>
                    </tr>
                `)}else if(negara.toUpperCase() === 'SINGAPORE'){
                    $("#list_swab").empty();
                    $("#list_swab").append(`
                        <tr>
                        <th>Nama Fasilitas</th>
                        <th>Alamat</th>
                        <tr>
                            <td><a href="https://safetravel.changiairport.com/arrivalswabtest/en.html#/">Safe Travel</a></td>
                            <td>Changi Airport, Airport Blvd., Singapore</td>
                        </tr>
                        <tr>
                            <td><a href="https://www.rafflesmedicalgroup.com/raffles-connect/covid-19-swab-test/">Raffles Medical Center</a></td>
                            <td>10 Tampines Central 1, #03-28, Singapore 529536</td>
                        </tr>
                        <tr>
                            <td><a href="https://www.parkwayshenton.com/covid-19/pre-departure-test">Parkway Shenton Medical Group</a></td>
                            <td>18 Toh Yi Dr, #01-103, Block 18, Singapore 590018</td>
                        </tr>
                        <tr>
                            <td><a href="https://atamed.sg/book-covid-19-pre-departure-test?gclid=CjwKCAjwiY6MBhBqEiwARFSCPvv_8_mIQCkG4Mktq59HOzotmVE5ONLioBYbkZnaj4SDTp7rk4g_ShoCxKcQAvD_BwE">Ata Medical</a></td>
                            <td>Anson House, 72 Anson Rd #01-02, Singapore 079911</td>
                        </tr>
                    `)}else if(negara.toUpperCase() === 'THAILAND'){
                        $("#list_swab").empty();
                        $("#list_swab").append(`
                        <tr>
                            <th>Nama Fasilitas</th>
                            <th>Alamat</th>
                        </tr>
                        <tr>
                            <td><a href="https://www.praram9.com/en/covid-19-testing-for-foreigners/">Phraram 9 Hospital</a></td>
                            <td>99 Rama IX Rd, Bang Kapi, Huai Khwang, Bangkok 10310, Thailand</td>
                        </tr>
                        <tr>
                            <td><a href="https://www.bangkokhospital.com/en/package/covid-19-testing-package">Bangkok Hospital</a></td>
                            <td>2 Soi Soonvijai 7, New Petchburi Rd., Huaykwang, Bangkok 10310 Thailand</td>
                        </tr>
                    `)}  
            }
        })
    });

});