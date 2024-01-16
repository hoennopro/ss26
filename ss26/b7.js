function timMangConCoTong(arr, targetSum) {
  let currentSum = 0;
  let startIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    while (currentSum > targetSum) {
      currentSum -= arr[startIndex];
      startIndex++;
    }

    if (currentSum === targetSum) {
      return arr.slice(startIndex, i + 1);
    }
  }

  return null;
}

const mangSoNguyen = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

const soNhapVao = parseInt(prompt("Nhập vào một số nguyên:"), 10);

const mangCon = timMangConCoTong(mangSoNguyen, soNhapVao);

if (mangCon) {
  console.log(`Mảng con có tổng bằng ${soNhapVao}:`, mangCon);
} else {
  console.log("Không có mảng con thỏa mãn.");
}
