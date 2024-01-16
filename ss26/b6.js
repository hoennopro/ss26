const mangSoNguyen = [3, -5, 1, -8, 7, -2, 4, 6];

function chuyenPhanTuAmLenDau(arr) {
  const phanTuAm = arr.filter((item) => item < 0);
  const phanTuDuong = arr.filter((item) => item >= 0);
  return phanTuAm.concat(phanTuDuong);
}

const mangKetQua = chuyenPhanTuAmLenDau(mangSoNguyen);

console.log(
  "Mảng sau khi di chuyển các phần tử âm lên đầu và phần tử dương về cuối:",
  mangKetQua
);
