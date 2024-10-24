function saveText() {
    const editableDiv = document.getElementById('editable');
    const text = editableDiv.innerText;
    localStorage.setItem('savedText', text);
    alert('Texto guardado!');
}

// Cargar el texto guardado al iniciar la página
window.onload = function() {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('editable').innerText = savedText;
    }
};
