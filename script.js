const textInput = document.getElementById('promptBox');
const submitButton = document.getElementById('enterButton');

textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitButton.click();
    }
});


function takeAndPrint() {


    var promptBox = document.getElementById('promptBox').value;

    if (promptBox.trim() !== "") {
        var output = document.getElementById('output');
        var newText = document.createElement('p');
        newText.innerText = promptBox;
        output.appendChild(newText);
        document.getElementById('promptBox').value = ''; 
    }
}


document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};


// dragAndDrop
const input = document.getElementById('file-input');
const preview = document.getElementById('preview');
input.addEventListener('change', () => {
    const reader = new FileReader();
    reader.onload = () => {
        preview.src = reader.result;

    }
    reader.readAsDataURL(input.files[0]);

});
