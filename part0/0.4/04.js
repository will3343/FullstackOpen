document.getElementById("add").onclick = function() {

    var node = document.createElement("li");
    var text = document.getElementById("note").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("notes").appendChild(node);
}
