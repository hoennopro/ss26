const mangSoNguyen = [1, 2, 3, 4, 5, 2, 3, 1, 4, 5, 1, 2, 2, 3];

const soNguyenCanTim = parseInt(prompt("Nhập vào một số nguyên:"), 10);

const soLanXuatHien = mangSoNguyen.reduce((acc, currentValue) => {
  return currentValue === soNguyenCanTim ? acc + 1 : acc;
}, 0);

console.log(`Số ${soNguyenCanTim} xuất hiện ${soLanXuatHien} lần trong mảng.`);
