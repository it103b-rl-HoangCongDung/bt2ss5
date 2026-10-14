/*
 * Bài tập: Bài 2 - Session 5
 * Tiêu đề: Sửa lỗi Phân tách Chuỗi CSV Danh sách Sản phẩm do Khoảng trắng Thừa
 * Nguyên lý String Immutability: Các hàm trim(), toUpperCase(), replace() trả về chuỗi mới,
 * không làm thay đổi chuỗi gốc. Do đó bắt buộc phải gán lại kết quả vào biến.
 */

let rawTicketCode = "   med-card-0428-ut   ";

// Khắc phục: Gán lại kết quả đã làm sạch và viết hoa vào biến
rawTicketCode = rawTicketCode.trim().toUpperCase();

const isValidPrefix = rawTicketCode.startsWith("MED-");
const departmentCode = rawTicketCode.slice(4, 7);
const isPriority = rawTicketCode.includes("-UT");
const displayCode = rawTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Chuỗi ưu tiên:", isPriority);
console.log("Chuỗi in phiếu:", displayCode);