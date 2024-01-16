const mang = [10, 20, 30, 40, 50, "abc", "xyz", true, false];

const giaTriCanTim = prompt("Nhập giá trị cần tìm kiếm:");

const viTri = mang.indexOf(giaTriCanTim);

if (viTri !== -1) {
  console.log(
    `Phần tử "${giaTriCanTim}" được tìm thấy tại vị trí ${viTri} trong mảng.`
  );
} else {
  console.log(`Phần tử "${giaTriCanTim}" không tồn tại trong mảng.`);
}
