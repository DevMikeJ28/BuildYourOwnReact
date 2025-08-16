# 📌 Week 1 – DOM & JavaScript Foundation

## 🎯 Objective
Tuần này tập trung vào **củng cố kiến thức cơ bản về DOM tree và JavaScript thao tác DOM**.  
Sau khi hoàn thành, dev phải:
- Hiểu được DOM là gì, các loại node phổ biến, và cách DOM tree được tổ chức.  
- Thao tác được với DOM thông qua API chuẩn.  
- Viết được các bài tập nhỏ chứng minh khả năng thao tác DOM.

---

## 📝 Requirements

### 1. Kiến thức cần nắm
- DOM tree:
  - Document node, Element node, Text node, Comment node.
  - Phân biệt Node vs Element.
- DOM API cơ bản:
  - Truy xuất: `getElementById`, `querySelector`, `querySelectorAll`.
  - Tạo/Xóa: `createElement`, `appendChild`, `removeChild`.
  - Chỉnh sửa: `setAttribute`, `textContent`, `innerHTML`.
  - Di chuyển trong DOM: `firstChild`, `nextSibling`, `parentNode`, `childNodes`.
- Event cơ bản:
  - `addEventListener`.
  - Event bubbling vs capturing.
  - Event delegation.

### 2. Bài tập bắt buộc
- [ X ] **Bài 1:** Tạo một danh sách `<ul>` từ một mảng dữ liệu JS.  
- [ X ] **Bài 2:** Thêm mới và xóa phần tử `<li>` trong danh sách bằng button.  
- [ ] **Bài 3:** Sử dụng event delegation để xử lý click trên từng `<li>` (không gắn listener cho từng item).  
- [ ] **Bài 4:** Render 1000 item vào DOM và so sánh hiệu năng giữa:
  - Thêm trực tiếp từng item vào DOM.
  - Dùng `DocumentFragment` để tối ưu.  
- [ ] **Bài 5:** Viết ví dụ sử dụng bubbling và capturing để log event order.

---

## 📂 Deliverables
- Thư mục `week1/` chứa:
  - `index.html` (có phần root để render).
  - `script.js` (toàn bộ logic).
  - `README.md` (ghi chú cách chạy, kết quả mong đợi).
- Code phải có **comment giải thích ngắn gọn** (tối đa 2–3 dòng / function).
- Bài tập phải có **screenshot hoặc mô tả kết quả** trong README.

---

## ✅ Acceptance Criteria
- Dev giải thích được các loại node trong DOM tree.  
- Code chạy đúng, không lỗi console.  
- Bài 4 chứng minh rõ sự khác biệt hiệu năng (console log thời gian render).  
- Event delegation trong Bài 3 hoạt động khi thêm mới phần tử.  
- README đầy đủ, leader khác clone repo có thể chạy ngay.  

---

## ⏰ Deadline
- Toàn bộ task phải hoàn thành và push lên repo trước **Thứ 7, 23:59 – Tuần 1**.  
- Review sẽ được thực hiện vào Chủ Nhật.  
