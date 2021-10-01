$("<link/>", {
    rel: "stylesheet",
    type: "text/css",
    href: "../css/styles.css"
}).appendTo("head");

var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTl0RQNVcbyf2p6jdjIaD39LBwfAATxTJeQQPMVLJQJ3zep-X5k6ygiiJI7mTzSq3ODtz431fCtc_NI/pub?gid=622768861&single=true&output=csv';
$(document).ready(function () {
    $.ajax({
        url: url,
        dataType: "text",
        success: function (data) {
            var c = 1;
            var certificates_data = data.split(/\r?\n|\r/);
            var table_data = '<table class="table table-bordered">';
            for (var count = 0; count < certificates_data.length; count++) {
                var cell_data = certificates_data[count].split(",");
                table_data += '<tr>';
                for (var cell_count = 0; cell_count < 7; cell_count++) {
                    if (count === 0) {
                        if ((cell_count ==1) || (cell_count == 5) || (cell_count == 6))
                        {
                            table_data += '<th class="data">' + cell_data[cell_count] + '</th>';

                        }
                        else{
                            table_data += '<th class="remove data">' + cell_data[cell_count] + '</th>';

                        }
                        
                    }
                    else {
                        if (cell_count ==  0) {
                            table_data += '<td class="remove data">' + c++ + '</td>';
                        }
                        else if (cell_count ==  1) {
                            table_data += '<td class="data">' + cell_data[cell_count] + '</td>';
                        }
                        else if ((cell_count ==  5)||(cell_count ==  6)) {
                            if (cell_data[cell_count] == 0){
                                table_data += '<th>' +"-"+ '</th>';
                            }
                            else{
                                table_data += '<th>' + '<a href="' + cell_data[cell_count] + '" class="btn custom-btn custom-btn2 custom-btn-bg custom-btn-link" target="_blank" title="Click here to View" >🔗</a>' + '</th>';
                            }    
                        }
                        else {
                            table_data += '<td class="data remove">' + cell_data[cell_count] + '</td>';
                        }

                    }
                }
                table_data += '</tr>';
            }
            table_data += '</table>';
            $('#certificates_table').html(table_data);
        }
    });
});