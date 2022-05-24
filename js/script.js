function showTextSend() {
    document.getElementById('pick').removeAttribute('hidden')
    document.getElementById('trans').setAttribute('hidden', true)
    document.getElementById('send').setAttribute('hidden', true)
}

function showTextTransport() {
    document.getElementById('trans').removeAttribute('hidden')
    document.getElementById('pick').setAttribute('hidden', true)
    document.getElementById('send').setAttribute('hidden', true)
}

function showTextReceive() {    
    document.getElementById('send').removeAttribute('hidden')
    document.getElementById('pick').setAttribute('hidden', true)
    document.getElementById('trans').setAttribute('hidden', true)
    
}