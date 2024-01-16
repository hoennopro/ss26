function inPhanTuXuatHienNhieu(arr) {
  const phanTuDem = {};
  const phanTuXuatHienNhieu = [];

  arr.forEach((element) => {
    phanTuDem[element] = (phanTuDem[element] || 0) + 1;
  });

  for (const element in phanTuDem) {
    if (phanTuDem[element] >= 2) {
      phanTuXuatHienNhieu.push(parseInt(element, 10));
    }
  }

  return phanTuXuatHienNhieu;
}

const mangSoNguyen = [1, 2, 3, 4, 2, 5, 6, 3, 4, 7, 2, 5, 8];

const phanTuXuatHienNhieu = inPhanTuXuatHienNhieu(mangSoNguyen);

console.log(
  "Các phần tử xuất hiện từ hai lần trở lên trong mảng:",
  phanTuXuatHienNhieu
);
