const a = parseInt(prompt("Nhập số nguyên dương a:"), 10);
const b = parseInt(prompt("Nhập số nguyên dương b:"), 10);

function laSoChiaHet(num, divisor) {
  return num % divisor === 0;
}

const mangSoChiaHet = [];

for (let i = 1; i <= Math.max(a, b); i++) {
  if (laSoChiaHet(i, b) || laSoChiaHet(i, a)) {
    mangSoChiaHet.push(i);
  }
}

console.log(
  "Các số chia hết cho a hoặc b trong khoảng từ 1 đến",
  Math.max(a, b),
  "là:",
  mangSoChiaHet
);
