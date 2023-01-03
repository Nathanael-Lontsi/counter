let data = 0;

function addition() {
    data = Math.max(data, Math.floor(Math.random() * 1000));
}
function minus() {
    data = Math.min(data, Math.floor(Math.random() * 1000));
}
function getCurrentValue() {
    return data;
}

export { addition, minus, getCurrentValue };
