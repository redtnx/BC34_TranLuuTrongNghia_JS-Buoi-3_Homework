// Bài tập 1: Tính tiền lương nhân viên

document.getElementById("calcSalary").onclick = function () {
  // Đầu vào
  const moneyPerDay = 100000;
  var workingDays = document.getElementById("workingDays").value;
  // Xử lý
  var salary = workingDays * moneyPerDay;
  // format VND
  //   var result = "Tổng lương là: " + salary.toLocaleString() + "VND";
  // Đầu ra
  var format = new Intl.NumberFormat("vn-VN");
  var totalVND = "Tổng lương là: " + format.format(salary) + "VND";
  document.getElementById("totalSalary").innerHTML = totalVND;
};

// Bài tập 2: Tính giá trị trung bình
document.getElementById("averageButton").onclick = function () {
  // Đầu vào
  var number1 = document.getElementById("num1").value * 1;
  var number2 = document.getElementById("num2").value * 1;
  var number3 = document.getElementById("num3").value * 1;
  var number4 = document.getElementById("num4").value * 1;
  var number5 = document.getElementById("num5").value * 1;
  // Xử lý
  var average = (number1 + number2 + number3 + number4 + number5) / 5;
  // Đầu ra
  average = "Giá trị trung bình là: " + average;
  document.getElementById("averageAnswer").innerHTML = average;
};

// Bài tập 3: Quy đổi tiền
document.getElementById("exchange").onclick = function () {
  // Đầu vào
  var usd = 23500;
  var amount = document.getElementById("amountUsd").value;
  // Xử lý
  var total = amount * usd;
  // Đầu ra
  var totalMoney = "Số tiền đổi được là: " + total.toLocaleString() + "VND";
  document.getElementById("totalVnd").innerHTML = totalMoney;
};

//Bài tập 4: Tính diện tính, chu vi hình chữ nhật
document.getElementById("calcPerimeter").onclick = function () {
  // Đầu vào
  var length = document.getElementById("length").value * 1;
  var width = document.getElementById("width").value * 1;
  // Xử lý
  var perimeter = (length + width) * 2;
  // Đầu ra
  perimeter = "Chu vi hình chữ nhật bằng: " + perimeter;
  document.getElementById("result").innerHTML = perimeter;
};
document.getElementById("calcArea").onclick = function () {
  // Đầu vào
  var length = document.getElementById("length").value * 1;
  var width = document.getElementById("width").value * 1;
  // Xử lý
  var area = length * width;
  // Đầu ra
  area = "Diện tích hình chữ nhật bằng: " + area;
  document.getElementById("result").innerHTML = area;
};

//Bài tập 5: Tính tổng 2 ký số
document.getElementById("calcSum").onclick = function () {
  // Đầu vào
  var numTwoDigits = document.getElementById("numTwoDigits").value;
  // Xử lý
  var onesDigit = numTwoDigits % 10;
  var tensDigit = Math.floor(numTwoDigits / 10);
  var sumResult = onesDigit + tensDigit;
  // Đầu ra
  sumResult = "Tổng 2 ký số là: " + sumResult;
  document.getElementById("sumResult").innerHTML = sumResult;
};
