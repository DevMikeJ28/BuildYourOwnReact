# 🎯 Week 3 – Diffing & Reconciliation Assignment

## 📋 Mục tiêu học tập:

- ✅ Hiểu và mô phỏng được thuật toán diff heuristic mà React dùng để so sánh giữa 2 VDOM.
- ✅ Biết cách chỉ update thay đổi thay vì toàn bộ như VDOM.
- ✅ Tìm hiểu về fiber và cách mà chỉ re-render 1 lần thay vì mỗi lần khi có state thay đổi.

## 📝 Bài tập thực hành:

### 🔹 Bài 1: Trình bày được khái niệm Reconciliation và lý do mà React dùng heuristic thay vì thuật toán so sánh bình thường.

### 🔹 Bài 2: Viết được hàm mô phỏng diff heuristic để so sánh giữa 2 cây VDOM.

### 🔹 Bài 3: Viết được hàm update VDOM với cả 3 trường hợp:
          +, Thay đổi type: Thay đổi toàn bộ Node.
          +, Thay đổi props: Chỉ updates props như text, attribute,...
          +, Thay đổi children: Thay đổi 1 children bên trong 1 node nào đó. 

### 🔹 Bài 4: Viết hàm fiber để có thể so sánh được tốc độ giữa re-render toàn bộ và render theo diff heuristic.


## ✅ Acceptance Criteria:

- [  ] Hiểu và mô phỏng đúng được thuật toán diff heuristic.
- [  ] Viết được hàm update VDOM theo cả 3 trường hợp.
- [  ] Code sạch, không có lỗi console, không có bug.
- [  ] Viết docs để có thể nắm được từng hàm.
- [  ] Viết được Unit Test để đảm bảo chương trình chạy đúng.

---




