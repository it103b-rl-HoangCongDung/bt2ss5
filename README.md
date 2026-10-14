# BÁO CÁO PHÂN TÍCH LỖI VÀ KHẮC PHỤC CHUỖI CSV DANH SÁCH SẢN PHẨM

> 👤 **Học viên:** Hoàng Công Dũng | **Mã SV:** PTIT-HCM-009
> 🏫 **Môn học:** it103b-rl-HoangCongDung

---

## 📊 Sơ đồ thiết kế hệ thống (Flowchart)

> 💡 *Sơ đồ dưới đây được render tự động trực tiếp trên GitHub bằng Mermaid. Bạn cũng có thể tải file **`bt2.drawio`** trong repository này để mở và chỉnh sửa trực tiếp trên [Draw.io (diagrams.net)](https://app.diagrams.net).* 

```mermaid
graph TD
  Start([Nhận rawTicketCode]) --> Trim[Gán rawTicketCode = rawTicketCode.trim().toUpperCase()]
  Trim --> CheckPrefix{startsWith MED-?}
  CheckPrefix -- Sai --> Err1[Báo lỗi tiền tố không hợp lệ]
  CheckPrefix -- Đúng --> GetDept[Cắt chuỗi lấy departmentCode từ slice 4, 7]
  GetDept --> CheckPrio{includes -UT?}
  CheckPrio --> ReplaceDash[Tạo displayCode bằng replaceAll - với ' | ']
  ReplaceDash --> LogResult[In kết quả ra console chính xác]
  LogResult --> End([Kết thúc xử lý])
```

---

## Nhiệm vụ 1: Phân tích lỗi & Lập bảng Test Cases

Trong JavaScript, chuỗi có tính chất bất biến (String Immutability). Các phương thức như trim(), toUpperCase(), replace() không làm thay đổi giá trị của chuỗi gốc mà luôn trả về một chuỗi mới sau khi đã xử lý.

Ở đoạn mã ban đầu của kỹ sư mới, các hàm trim() và toUpperCase() được gọi độc lập mà không lưu kết quả trả về vào bất kỳ biến số nào. Do đó, biến rawTicketCode vẫn giữ nguyên khoảng trắng thừa và chữ thường. Điều này làm cho các bước kiểm tra tiền tố startsWith('MED-'), cắt chuỗi slice() và tìm kiếm includes('-UT') bị sai lệch kết quả hoàn toàn.

- Nguyên nhân cốt lõi: Hiểu lầm về tính bất biến của chuỗi trong JavaScript.
- Hậu quả nghiệp vụ: Hệ thống không nhận diện đúng mã phiếu khám, in sai định dạng lên phiếu nhiệt của Kiosk.

## Bảng Test Cases đối chứng lỗi và kết quả

Dưới đây là bảng phân tích chi tiết 02 Test Cases đối chiếu giữa mã nguồn cũ (Sai thực tế) và mã nguồn đã khắc phục (Đúng mong đợi):

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
| --- | --- | --- | --- |
| Test Case 1: Xử lý khoảng trắng và viết hoa | '   med-card-0428-ut   ' | isValidPrefix: false, departmentCode: '', displayCode: '   med-card-0428-ut   ' | isValidPrefix: true, departmentCode: 'CAR', displayCode: 'MED | CARD | 0428 | UT' |
| Test Case 2: Chuỗi chuẩn không khoảng trắng | 'MED-GEN-1024' | Dữ liệu chạy đúng nhưng nếu thiếu gán biến sẽ gặp lỗi tiềm ẩn khi tái sử dụng | Xử lý chính xác 100% các điều kiện tiền tố, cắt chuỗi và định dạng hiển thị |

## Nhiệm vụ 2: Sửa lỗi mã nguồn

Để khắc phục triệt để sự cố trên, chúng ta cần gán lại kết quả sau khi gọi .trim().toUpperCase() vào biến rawTicketCode hoặc một biến xử lý mới. Ở đây mình gán trực tiếp để tối ưu hóa bộ nhớ và đảm bảo tính nhất quán trong các dòng lệnh tiếp theo.

Tệp mã nguồn hoàn chỉnh đã được đặt tên đúng chuẩn yêu cầu là solution_ex3.js và được đẩy lên kho lưu trữ GitHub của tổ chức it103b-rl-HoangCongDung.

- Tuân thủ nghiêm ngặt quy tắc không dùng thư viện ngoài hoặc giải thuật phức tạp chưa học.
- Sử dụng thuần các hàm cơ bản của chuỗi trong JavaScript.

---

## 📁 Danh sách tệp tin nộp bài trong Repository
- 📝 `bt2.docx`: Báo cáo tài liệu phân tích nghiệp vụ hoàn chỉnh.
- 🎨 `bt2.drawio`: File thiết kế sơ đồ chuẩn theo quy định đề bài (mở trực tiếp bằng [Draw.io](https://app.diagrams.net) hoặc Lucidchart).
- 💻 `solution_ex3.js`: Mã nguồn chương trình.
