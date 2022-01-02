function isValid(str) {


    let matchingOpeningBracket
    let char = ""
    const stack = []

    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']

    for (let i = 0; i < str.length; i++) {
        ch = str[i]
            // console.log(closingBrackets.indexOf(ch))
        if (closingBrackets.indexOf(ch) > -1) {
            //console.log(closingBrackets.indexOf(ch))
            var x = closingBrackets.indexOf(ch)
                // console.log(openingBrackets[(x)])
            matchingOpeningBracket = openingBrackets[(x)]
            if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                return false
            }
        } else {
            stack.push(ch)
        }
    }

    return (stack.length == 0)
};

console.log(isValid('({}})'))