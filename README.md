<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uang Kas Kelas XIIMIA-1</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background: #f2f2f2;
        }
        header {
            background: #4CAF50;
            color: white;
            padding: 15px;
            text-align: center;
        }
        section {
            display: none;
            padding: 20px;
        }
        .active {
            display: block;
        }
        form {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 300px;
            margin: 20px auto;
            text-align: center;
        }
        input, select, button {
            margin: 10px 0;
            width: 100%;
            padding: 8px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover { background: #45a049; }
        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: center;
        }
        th {
            background: #4CAF50;
            color: white;
        }
    </style>
</head>
<body>
    <header>
        <h1>Uang Kas Kelas XIIMIA-1</h1>
    </header>

    <!-- Halaman Login Bendahara -->
    <section id="login">
        <form id="loginForm">
            <h2>Login Bendahara</h2>
            <input type="text" id="username" placeholder="Nama">
            <input type="password" id="password" placeholder="Password">
            <button type="submit">Login</button>
            <button type="button" onclick="showPage('form')">Masuk Sebagai Siswa</button>
        </form>
    </section>

    <!-- Halaman Form Setor Uang -->
    <section id="form">
        <form id="cashForm">
            <h2>Form Setor Uang</h2>
            <input type="text" id="nama" placeholder="Nama" required>
            <input type="number" id="jumlah" placeholder="Jumlah Uang (Rp)" required>
            <input type="text" id="keterangan" placeholder="Keterangan" required>
            <input type="date" id="tanggal" required>
            <button type="submit">Konfirmasi</button>
        </form>
    </section>

    <!-- Halaman Tabel Data -->
    <section id="tabel">
        <h2>Data Uang Kas</h2>
        <label>Pilih Tanggal: <input type="date" id="filterTanggal"></label>
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Jumlah (Rp)</th>
                    <th>Keterangan</th>
                    <th>Tanggal</th>
                </tr>
            </thead>
            <tbody id="tabelBody"></tbody>
        </table>
        <button onclick="showPage('form')">Kembali ke Form</button>
    </section>

    <script>
        let data = JSON.parse(localStorage.getItem("kasData")) || [];
        let tabelBody = document.getElementById("tabelBody");
        let filterTanggal = document.getElementById("filterTanggal");

        // Fungsi Tampilkan Halaman
        function showPage(page) {
            document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
            document.getElementById(page).classList.add("active");
        }

        // Tampilkan data ke tabel
        function tampilkanData(filter = "") {
            tabelBody.innerHTML = "";
            data.forEach(item => {
                if (filter === "" || item.tanggal === filter) {
                    let row = `<tr>
                        <td>${item.nama}</td>
                        <td>${item.jumlah}</td>
                        <td>${item.keterangan}</td>
                        <td>${item.tanggal}</td>
                    </tr>`;
                    tabelBody.innerHTML += row;
                }
            });
        }

        // Form Setor Uang
        document.getElementById("cashForm").addEventListener("submit", function(e){
            e.preventDefault();
            data.push({
                nama: document.getElementById("nama").value,
                jumlah: document.getElementById("jumlah").value,
                keterangan: document.getElementById("keterangan").value,
                tanggal: document.getElementById("tanggal").value
            });
            localStorage.setItem("kasData", JSON.stringify(data));
            tampilkanData();
            showPage("tabel");
        });

        // Filter Tanggal
        filterTanggal.addEventListener("change", () => tampilkanData(filterTanggal.value));

        // Login Bendahara
        document.getElementById("loginForm").addEventListener("submit", function(e){
            e.preventDefault();
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            if(username === "Triasi Amanda Lamarauna" && password === "Triasi123") {
                tampilkanData();
                showPage("tabel");
            } else {
                alert("Nama atau Password salah!");
            }
        });

        // Halaman awal
        showPage("login");
    </script>
</body>
</html>
