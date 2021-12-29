//const ib = document.querySelector("#calc-input")

function addInput(inputValue) {
    const ib = document.querySelector("#calc-input")
    const currentInput = ib.value
    const operations = ['*', '/', '+', '-']
    const lastChar = currentInput[currentInput.length - 1]
    let isOperationExists = operations.includes(lastChar) && operations.includes(inputValue)

    if (isOperationExists) {
        return
    } else {
        isOperationExists = false
    }
    const newValue = currentInput + inputValue
    ib.value = newValue
}

function result() {
    const ib = document.querySelector("#calc-input")
    try {
        ib.value = eval(ib.value)
    } catch (error) {
        alert('please enter valid operation')
        ib.value = ''
    }
}

function allClear() {
    const ib = document.querySelector("#calc-input")
    ib.value = ''
}