# 🏨 Hotel Room Booking System – Projek Web Sekolah

Sistem pemesanan kamar hotel berbasis web yang dibuat untuk memenuhi tugas mata pelajaran **Pemrograman Web**.  
Aplikasi ini terdiri dari **frontend**, **backend**, dan **admin panel** dalam satu repository.

---

## 📌 Fitur Utama

### 👤 User
- Registrasi dan login
- Melihat daftar kamar hotel
- Booking kamar berdasarkan tanggal
- Melihat riwayat booking
- Memberikan review dan rating

### 🏢 Admin
- Login admin
- Manajemen data kamar
- Manajemen user
- Manajemen booking
- Dashboard statistik

---

## 🧱 Struktur Folder

```
Hotel-Room-Booking-System
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── pages
│   ├── components
│   ├── public
│   └── styles
│
├── admin-panel
│   ├── src
│   ├── components
│   └── pages
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🛠️ Teknologi yang Digunakan

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Bcrypt

### Frontend
- Next.js
- React.js
- Redux Toolkit
- Axios
- Ant Design

### Admin Panel
- React.js
- Tailwind CSS
- Redux Toolkit
- Ant Design

---

## ⚙️ Instalasi & Menjalankan Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/CHESTA511/Projek-web-sekolah-.git
```

```bash
cd Hotel-Room-Booking-System
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm run dev
```

Backend berjalan di:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend berjalan di:

```
http://localhost:3034
```

---

### 4️⃣ Setup Admin Panel

```bash
cd admin-panel
npm install
npm start
```

Admin Panel berjalan di:

```
http://localhost:3033
```

---

## 🗄️ Database

Menggunakan **MongoDB**  
Disarankan memakai **MongoDB Atlas**.

Contoh file `.env` backend:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

## 🎯 Tujuan Project

- Memahami konsep Fullstack Web Development
- Menerapkan REST API
- Menggunakan frontend dan backend terpisah
- Menerapkan authentication & authorization
- Melatih penggunaan Git dan GitHub

---

## 👨‍🎓 Identitas

Nama   : __________________________  
Kelas  : __________________________  
Sekolah: __________________________  
Mapel  : Pemrograman Web  

---

## 📄 Lisensi

Project ini dibuat khusus untuk **keperluan pembelajaran dan tugas sekolah**.

---

⭐ Terima kasih telah melihat project ini  
