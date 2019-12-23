function generate(num = 0) {
    let tree_char = '*';
    let maxHeight = num;
    if (num == 0)
        maxHeight = getRandomInt(8, 23);
    document.getElementById("height_label").innerText = maxHeight;
    document.getElementById("treesize_range").value = maxHeight;
    let tree_html = "";
    let nextWidth = 0;
    let layerHeight = 6;
    let lastLayer = 0;
    for (let height = 0; height < maxHeight; height++) {
        nextWidth++;
        lastLayer++;
        if (layerTree(maxHeight-height, layerHeight, lastLayer)) {
            nextWidth -=3;
            lastLayer = 0;
        }
        for (let width = 0; width < nextWidth; width++) {
            tree_html += tree_char;
        }
        tree_html += "<br>";  
    }

    tree_html += "| |";
    document.getElementById("tree").innerHTML = tree_html;
}

/** A function that gives you a random integer in [min, max) */
function getRandomInt(min, max) {
    return Math.floor(min+Math.random()*(max-min));
}

function layerTree(remainingHeight, layerHeight, lastLayer) {
    return (layerHeight == lastLayer && remainingHeight >= layerHeight);
}