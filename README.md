# 🛍️ Suncart – Modern E-commerce Web App

Suncart is a modern e-commerce web application built with **Next.js**, featuring authentication, product browsing, and responsive UI.

---

## 🚀 Live Demo

👉 https://suncart-nine.vercel.app/

---

## 📸 Features

* 🔐 User Authentication (Better Auth)
* 🛍️ Product Listing Page
* 🔎 Product Details (Protected Route)
* 📱 Fully Responsive Design
* ⚡ Fast performance with Next.js
* 🎨 Modern UI with Tailwind CSS + HeroUI

---

## 🧑‍💻 Tech Stack

* **Frontend:** Next.js (App Router)
* **Styling:** Tailwind CSS, DaisyUI, HeroUI
* **Authentication:** Better Auth
* **Database:** MongoDB
* **Deployment:** Vercel

---

## 📂 Project Structure

```
src/
 ├── app/
 │   ├── page.js
 │   ├── products/
 │   │   ├── page.jsx
 │   │   └── [id]/page.jsx
 │   ├── signin/
 │   └── signup/
 │
 ├── components/
 │   ├── shared/
 │   │   ├── Navbar.jsx
 │   │   └── Footer.jsx
 │
 ├── lib/
 │   ├── auth.js
 │   └── auth-client.js
 │
public/
 └── data/products.json
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/suncart.git
cd suncart
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_uri
AUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 📦 Build & Deploy

```bash
npm run build
npm start
```

👉 Deployed easily on **Vercel**

---

## 🧠 Future Improvements

* 🛒 Add to Cart system
* 💳 Payment Integration
* ⭐ Wishlist feature
* 🔍 Search & Filter
* 📦 Order management

---

## 👨‍💻 Author

**Atikur Rahman**

* GitHub: https://github.com/atikurr

---

## 📄 License

This project is licensed under the MIT License.
