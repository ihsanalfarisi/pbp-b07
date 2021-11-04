$(document).ready(function() {
    $.ajax({    
        url: "https://restcountries.com/v2/all?fields=name",
        method: "GET",
        success: function(result) {
            negara_yang_dituju_result = document.getElementById('Negara_yang_dituju');

            for (var i = 0; i<result.length; i++){
                var opt = document.createElement('option');
                opt.value = result[i].name;
                opt.innerHTML = result[i].name;
                negara_yang_dituju_result.appendChild(opt);
            }
        }
    })
})