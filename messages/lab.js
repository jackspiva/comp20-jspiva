function parse() {
    var xmlhttp = new XMLHttpRequest();
    var url = "data.json";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var parsed_data = JSON.parse(xmlhttp.responseText);
            output(parsed_data);
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function output(parsed_data) {
    var messages = "";
    var i;
    for(i = 0; i < parsed_data.length; i++) {
        messages += '<p id="parsed.data[i].id">' +
                    '<span class="content">'    + parsed_data[i].content    + '</span>'     + " " +
                    '<span class="username">'   + parsed_data[i].username   + '</span></p>'
    }
    document.getElementById("messages").innerHTML = messages;
}
