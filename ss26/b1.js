const mang = [1, "abc", 3.14, "xyz", 5, 6, "ghi"];

function laSoNguyen(value) {
  return typeof value === "number" && Number.isInteger(value);
}

let tonTaiSoNguyen = false;

for (let i = 0; i < mang.length; i++) {
  if (laSoNguyen(mang[i])) {
    console.log(`Phần tử thứ ${i} trong mảng là số nguyên: ${mang[i]}`);
    tonTaiSoNguyen = true;
  }
}

if (!tonTaiSoNguyen) {
  console.log("Trong mảng không tồn tại số nguyên");
}
