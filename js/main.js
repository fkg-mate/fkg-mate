// remove specified element in Array
function removeArrayElement(array, element) {
    var index = array.indexOf(element);

    // remove element if found
    if (index > -1) {
        array.splice(index, 1);
    }

    return index;
}

// create array in object if it does not exist, 
//  then push element into array
function pushSmart(object, key, item) {
    if (!(key in object)) {
        object[key] = [];
    }

    object[key].push(item);
}


/* ---------- */
window.addEventListener("load", function() {
    // construct charater list
    CharaViewer.init();

    // debug
    //document.querySelector('#chara-top-bar .ability-filter').click();
});