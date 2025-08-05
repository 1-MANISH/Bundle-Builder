# 🛍️ Bundle Builder Web App

A responsive web application that allows users to create a custom product bundle, add selected items to their cart, and receive an automatic discount when purchasing 3 or more items.

---

## 🚀 Features

- ✅ Responsive UI using **CSS Grid** and **Flexbox**
- ✅ Dynamic rendering of products from a JavaScript array
- ✅ Add products to a "Bundle" using interactive buttons
- ✅ Real-time **bundle progress tracker** with a progress bar
- ✅ Automatically apply **30% discount** when 3 or more items are selected
- ✅ Sidebar displays:
  - Selected items list
  - Total before/after discount
  - Checkout button
- ✅ Prevents duplicate additions to the bundle
- ✅ Remove item from bundle using a delete icon
- ✅ SVG icons used for “Add” and “Delete” actions
- ✅ Fully responsive on both desktop and mobile devices

---

## 🧱 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

---

## 📁 Folder Structure

```
/bundle-builder/
├── assets/
│   ├── images/
│   │   └── product-image-1.jpg (and more...)
│   └── icons/
│       ├── Plus.svg
│       └── deleteIcon.svg etc
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/bundle-builder.git
   cd bundle-builder
   ```

2. **Open `index.html` in your browser:**
   - You can use Live Server (VS Code extension) for auto-reload.
   - Or just double-click `index.html`.

---

## 🧪 Demo Products Format (in `script.js`)

```js
let products = [
        {
                id:1,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-1.jpg",
                added:false
        },
        {
                id:2,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-2.jpg",
                  added:false
        },
        {
                id:3,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-3.jpg",
                  added:false
        },
        {
                id:4,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-4.jpg",
                  added:false
        },
         {
                id:5,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-5.jpg",
                  added:false
        },
        {
                id:6,
                title:"Tie-Dye-Lounge Set",
                price:150,
                image:"assets/images/product-image-6.jpg",
                  added:false
        },

]
```

---

## 💡 Future Improvements

- [ ] Add backend for storing cart data
- [ ] Login and user authentication
- [ ] Persist cart using `localStorage` or database
- [ ] Accessibility improvements (keyboard nav, ARIA)
- [ ] Add animation transitions for better UX

---

## 👨‍💻 Author

**Manish Patidar**  
Web Developer | MERN Stack | Full Stack Enthusiast

[LinkedIn](https://www.linkedin.com/in/manishpatidar7/) | [GitHub](https://github.com/yourusername) [Portfolio](https://manish-next-js-portfoliofrontend.vercel.app/)

---

## 🪪 License

This project is open-source and free to use under the MIT License.