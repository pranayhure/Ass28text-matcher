const Text1 = document.getElementById("input-field1")
const Text2 = document.getElementById("input-field2")
const result = document.getElementById("Result")

const txt1 = Text1
const txt2 = Text2
const res = result

function TextMatch() {
    if ((txt1.value) == (txt2.value))
        res.innerText = "Text Match.👍"
    else
        res.innerText = "Text Not Match.👎"
}

function Reset() {
    txt1.value = " "
    txt2.value = " "
    res.innerText = " "
}