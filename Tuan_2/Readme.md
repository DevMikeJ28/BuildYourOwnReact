# 🎯 Virtual DOM & Render - Week 2 Assignment

## 📋 Mục tiêu học tập

- ✅ Hiểu rõ sự khác nhau giữa **DOM thật** và **Virtual DOM**
- ✅ Biết cách biểu diễn HTML element dưới dạng Virtual DOM object
- ✅ Viết được hàm `createElement` và `render` để mô phỏng cơ chế hoạt động của Virtual DOM
- ✅ Thực hành render giao diện từ Virtual DOM sang DOM thật


## 📝 Bài tập thực hành

### 🔹 Bài 1: Tạo Virtual DOM

**Yêu cầu:** Viết hàm `createElement(type, props, ...children)` trả về một object Virtual DOM.

**Đặc điểm:**
- Nếu `child` là string hoặc number → wrap thành `TEXT_ELEMENT`
- Hỗ trợ props (attributes) và children

**Ví dụ:**
```javascript
createElement("h1", { id: "title" }, "Hello");
```

**Kết quả:**
```javascript
{
  type: "h1",
  props: { 
    id: "title", 
    children: [{ 
      type: "TEXT_ELEMENT", 
      props: { 
        nodeValue: "Hello", 
        children: [] 
      } 
    }] 
  }
}
```

### 🔹 Bài 2: Render Virtual DOM

**Yêu cầu:** Viết hàm `render(vdom, container)` để biến Virtual DOM thành DOM thật.

**Chức năng:**
- ✅ Gán được attribute (id, className, ...)
- ✅ Append được nhiều children
- ✅ Support text node
- ✅ Tạo DOM tree hoàn chỉnh

### 🔹 Bài 3: Demo thực tế

**Code demo:**
```javascript
const vdom = createElement(
  "div",
  { id: "root" },
  createElement("h1", null, "Hello World"),
  createElement("p", null, "This is a paragraph"),
  createElement(
    "ul",
    null,
    createElement("li", null, "Item 1"),
    createElement("li", null, "Item 2")
  )
);

render(vdom, document.getElementById("app"));
```

**Kết quả mong đợi:**
```html
<div id="root">
  <h1>Hello World</h1>
  <p>This is a paragraph</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

---

## 🔍 Virtual DOM vs Real DOM

### 📊 So sánh chi tiết

| Tiêu chí        | Real DOM               | Virtual DOM              |
| --------------- | ---------------------- | ------------------------ |
| **Cấu trúc**    | Tree nodes thật        | JavaScript objects       |
| **Thao tác**    | Trực tiếp trên browser | Thao tác trên JS objects |
| **Performance** | Chậm (reflow/repaint)  | Nhanh (chỉ JS)           |
| **Memory**      | Nặng                   | Nhẹ                      |
| **Diffing**     | Không có               | Có thể so sánh objects   |

### 🎯 Lợi ích của Virtual DOM

1. **Performance tối ưu:**
   - Tránh thao tác trực tiếp DOM
   - Batch updates thay vì update từng node
   - Giảm reflow/repaint

2. **Cross-platform:**
   - Có thể render trên server (SSR)
   - Hỗ trợ mobile native (React Native)
   - Platform independent

3. **Developer Experience:**
   - Declarative programming
   - Dễ debug và test
   - Component-based architecture

4. **Memory efficiency:**
   - Chỉ update những gì thay đổi
   - Garbage collection tốt hơn
   - Ít memory leaks

---

## 📁 Cấu trúc project

```
virtual-dom-assignment/
├── index.html          # File HTML chính
├── script.js           # Code Virtual DOM implementation
├── README.md           # Documentation này
└── assets/
    └── demo.png        # Screenshot kết quả
```

---

## ✅ Acceptance Criteria

- [x] `createElement` tạo đúng Virtual DOM object
- [x] `render` chuyển Virtual DOM thành DOM thật chính xác
- [x] Demo chạy ra đúng giao diện (h1, p, ul > li)
- [x] Code sạch, có comment ngắn gọn cho mỗi function
- [x] README giải thích rõ Virtual DOM và lợi ích

---

## 🛠️ Implementation Details

### Core Functions

```javascript
// Tạo Virtual DOM element
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'string' || typeof child === 'number'
          ? { type: 'TEXT_ELEMENT', props: { nodeValue: child, children: [] } }
          : child
      )
    }
  };
}

// Render Virtual DOM thành Real DOM
function render(vdom, container) {
  // Implementation details...
}
```

### Key Features

- **Text Node Handling:** Tự động wrap string/number thành TEXT_ELEMENT
- **Props Spreading:** Hỗ trợ tất cả HTML attributes
- **Recursive Rendering:** Xử lý nested children
- **Memory Management:** Clean up old nodes khi re-render

---

## 📊 Kết quả thực tế

### Screenshot Demo
![Demo Result](assets/demo.png)

### Console Output
```javascript
// Virtual DOM Object
{
  type: "div",
  props: {
    id: "root",
    children: [
      { type: "h1", props: { children: [...] } },
      { type: "p", props: { children: [...] } },
      { type: "ul", props: { children: [...] } }
    ]
  }
}
```

---

## 🎓 Kinh nghiệm rút ra

1. **Virtual DOM giúp quản lý UI bằng JavaScript objects** → dễ diff, dễ tối ưu
2. **Declarative approach** thay vì imperative DOM manipulation
3. **Performance optimization** thông qua batching và diffing
4. **Cross-platform compatibility** và better developer experience

---

## 🔍 Review Checklist

### Code Quality
- [ ] Output Virtual DOM object đúng format
- [ ] Render function gắn attribute và text node chính xác
- [ ] Code có comment và không log lỗi console
- [ ] Error handling cho edge cases

### Documentation
- [ ] README giải thích Virtual DOM rõ ràng, dễ hiểu
- [ ] Có ví dụ minh họa cụ thể
- [ ] Screenshot kết quả thực tế
- [ ] So sánh chi tiết Virtual DOM vs Real DOM

---

## ⏰ Deadline

**📅 Thứ 7, 23:59 – Tuần 2**

- ✅ Toàn bộ task hoàn thành và push lên repo
- 🔍 Review sẽ được thực hiện vào Chủ Nhật

---

## 👨‍💻 Author

**Student Name** - Virtual DOM Implementation

---

*📚 Tài liệu tham khảo: React Virtual DOM, Vue.js Virtual DOM, Modern JavaScript*