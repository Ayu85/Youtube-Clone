function formatTimeUnit(input, unit) {
    var index = input.indexOf(unit);
    var output = "00"
    if (index < 0) {
        return output; // unit isn't in the input
    }
    if (isNaN(input.charAt(index - 2))) {
        return '0' + input.charAt(index - 1);
    } else {
        return input.charAt(index - 2) + input.charAt(index - 1);
    }
}
export function ISO8601toDuration(input) {
    var H = formatTimeUnit(input, 'H');
    var M = formatTimeUnit(input, 'M');
    var S = formatTimeUnit(input, 'S');
    if (H == "00") {
        H = "";
    } else {
        H += ":"
    }
    return H + M + ':' + S;
}
