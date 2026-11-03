const cells = document.querySelectorAll('.flex > div');
const sumEl = document.getElementById('sum');
const countEl = document.getElementById('count');

let sumAndCountState = {
    sum: 0,
    count: 0,
    setSum(value) {
        this.sum += value;
    },
    setCount(value) {
        this.count += value;
    }
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const value = Number(cell.textContent);
        const isSelected = cell.classList.toggle('selected');

        sumAndCountState.setSum(isSelected * value || -value);
        sumAndCountState.setCount(isSelected || -1);

        sumEl.textContent = sumAndCountState.sum;
        countEl.textContent = sumAndCountState.count;
    });
});
