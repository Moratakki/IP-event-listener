const cells = document.querySelectorAll('.flex > div');
const sumEl = document.getElementById('sum');
const countEl = document.getElementById('count');

let sum = 0;
let count = 0;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const value = Number(cell.textContent);

        const isSelected = cell.classList.toggle('selected');

        if (isSelected) {
            sum += value;
            count += 1;
        } else {
            sum -= value;
            count -= 1;
        }

        sumEl.textContent = sum;
        countEl.textContent = count;
    });
});