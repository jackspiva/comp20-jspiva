function parse() {                                                  // XMLHttpRequest code based
    var xmlhttp = new XMLHttpRequest();                             // off the example code at
    var url = "data.json";                                          // http://www.w3schools.com/json/json_http.asp

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var parsed_data = JSON.parse(xmlhttp.responseText);     // parse data
            output(parsed_data);                                    // send parsed data do output function
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function output(parsed_data) {
    var messages = "";
    var i;
    for(i = 0; i < parsed_data.length; i++) {                           // create html to add into index.html
        messages += '<p class="message" id="parsed.data[i].id">' +
                    '<span class="username">'   + parsed_data[i].username   + '</span>'     + ": " +
                    '<span class="content">'    + parsed_data[i].content    + '</span></p>'

    }
    document.getElementById("messages").innerHTML = messages;           // add html into index.html
}
