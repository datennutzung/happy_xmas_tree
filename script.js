var elem = {
    width: document.getElementById("width"),
    height: document.getElementById("height"),
    stem_height: document.getElementById("stem_height"),
    stem_width: document.getElementById("stem_width"),
};

function generate() {
    let tree_char = '*';
    for (const key in elem) 
        if (!elem[key].checkValidity())
            return false;

    let width = parseInt(elem.width.value);
    let height = parseInt(elem.height.value);
    let stem_height = parseInt(elem.stem_height.value);
    let stem_width = parseInt(elem.stem_width.value);

    let current_layer_width = 1;
    let tree_html = "";
    for (let i = 1; i < height+1; i++) {
        for (let o = 0; o < current_layer_width; o++) {
            tree_html += tree_char;
        }
        let imod = i%width;
        console.log(imod)
        current_layer_width = imod+1
        
        tree_html += "<br>";  
    }

    for (let i = 0; i < stem_height; i++) {
        for (let o = 0; o < stem_width; o++) {
            tree_html += tree_char;
        }
        tree_html +="<br>";
    }

    document.getElementById("tree").innerHTML = tree_html;
}