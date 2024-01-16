function timPhanTuNhoNhatChuaXuatHien(arr) {
  const setPhanTu = new Set(arr);

  for (let i = 1; i <= arr.length + 1; i++) {
    if (!setPhanTu.has(i)) {
      return i;
    }
  }
}

const mangSoNguyen1 = [1, 2, 5, 7];
const mangSoNguyen2 = [10, 5, 7];

const ketQua1 = timPhanTuNhoNhatChuaXuatHien(mangSoNguyen1);
const ketQua2 = timPhanTuNhoNhatChuaXuatHien(mangSoNguyen2);

console.log("Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng 1:", ketQua1);
console.log("Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng 2:", ketQua2);
