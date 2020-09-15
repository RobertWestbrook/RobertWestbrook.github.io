// Declared Variables
const color = document.getElementById("colorPicker");
const sizePicker = document.getElementById("sizePicker")

//Get Size

sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    reset()
    makeGrid(height, width);
})


// Resets the table rows
function reset(){
    let table = document.getElementById("pixelCanvas");
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

//Creates grid.
function makeGrid(h, w) {
    let table = document.getElementById("pixelCanvas");
    for (var r = 0; r < h; r++) { 
        let row = table.insertRow(r);
        for (var c = 0; c < w; c++) {
            let cell = row.insertCell(c);
            cell.addEventListener("click", function() { 
                cell.style.backgroundColor = color.value;
            })
        }
    }
}

makeGrid(10,10)