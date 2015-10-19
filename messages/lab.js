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
    console.log(parsed_data.length)
}
