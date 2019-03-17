function loadFile() {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", 'events/robocom_score.json', false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    return result;
}

function update_robo_table() {
    var new_state = JSON.parse(loadFile());
    console.log(new_state);
    var state_list = [
        {
            "name" : "raph",   
            "score": new_state["raph"]
        },
        {
            "name": "donny",
            "score": new_state["donny"]
        },
        {
            "name": "mikey",
            "score": new_state["mikey"]
        },
        {
            "name": "leo",
            "score": new_state["leo"]
        }
    ];
    
    state_list.sort((r1, r2) => parseFloat(r2.score) - parseFloat(r1.score));
    console.log(state_list)

    var table = document.getElementById("robocom_table");

    while (table.hasChildNodes()) {
        table.removeChild(table.lastChild);
    }

    var tr = table.insertRow();
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('Robo-Contestant'));
    td = tr.insertCell();
    td.appendChild(document.createTextNode('Score'));

    state_list.forEach(function(robot) {
        tr = table.insertRow();
        td = tr.insertCell();
        td.appendChild(document.createTextNode(robot.name));
        td = tr.insertCell();
        td.appendChild(document.createTextNode(robot.score));
    });

    // and repeat
    setTimeout(update_robo_table, 60);
}

update_robo_table();