<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uang Kas Kelas XIIMIA-1</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f4f8;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            max-width: 500px;
            width: 100%;
            text-align: center;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        input, select, button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 8px;
        }
        button {
            background: #3498db;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background: #2980b9;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
        }
        th {
            background: #3498db;
            color: white;
        }
    </style>
</head>
<body>
<div class="container" id="formPage">
    <h1>Uang Kas Kelas XIIMIA-1</h1>
    <input type="text" id="nama" placeholder="Nama" required>
    <input type="number" id="jumlah" placeholder="Jumlah Uang (Rp)" required>
    <input type="text" id="keterangan" placeholder="Keterangan">

    <select id="hari">
        <option value="Senin">Senin</option>
        <option value="Selasa">Selasa</option>
        <option value="Rabu">Rabu</option>
        <option value="Kamis">Kamis</option>
        <option value="Jumat">Jumat</option>
        <option value="Sabtu">Sabtu</option>
        <option value="Minggu">Minggu</option>
    </select>

    <input type="date" id="tanggal">

    <select id="bulan">
        <option value="Januari">Januari</option>
        <option value="Februari">Februari</option>
        <option value="Maret">Maret</option>
        <option value="April">April</option>
        <option value="Mei">Mei</option>
        <option value="Juni">Juni</option>
        <option value="Juli">Juli</option>
        <option value="Agustus">Agustus</option>
        <option value="September">September</option>
        <option value="Oktober">Oktober</option>
        <option value="November">November</option>
        <option value="Desember">Desember</option>
    </select>

    <input type="number" id="tahun" placeholder="Tahun">

    <button onclick="konfirmasi()">Konfirmasi</button>
</div>

<div class="container" id="tabelPage" style="display:none;">
    <h1>Daftar Uang Kas</h1>
    <table>
        <thead>
            <tr>
                <th>Nama</th>
                <th>Jumlah (Rp)</th>
                <th>Keterangan</th>
                <th>Hari</th>
                <th>Tanggal</th>
                <th>Bulan</th>
                <th>Tahun</th>
            </tr>
        </thead>
        <tbody id="tabelData"></tbody>
    </table>
    <button onclick="kembali()">Tambah Data Lagi</button>
</div>

<script>
    let dataList = [];

    function konfirmasi(){
        let data = {
            nama: document.getElementById('nama').value,
            jumlah: document.getElementById('jumlah').value,
            keterangan: document.getElementById('keterangan').value,
            hari: document.getElementById('hari').value,
            tanggal: document.getElementById('tanggal').value,
            bulan: document.getElementById('bulan').value,
            tahun: document.getElementById('tahun').value
        };

        dataList.push(data);
        tampilkanData();
        document.getElementById('formPage').style.display = 'none';
        document.getElementById('tabelPage').style.display = 'block';
    }

    function tampilkanData(){
        let tabel = document.getElementById('tabelData');
        tabel.innerHTML = '';
        dataList.forEach(item => {
            let row = `<tr>
                <td>${item.nama}</td>
                <td>${item.jumlah}</td>
                <td>${item.keterangan}</td>
                <td>${item.hari}</td>
                <td>${item.tanggal}</td>
                <td>${item.bulan}</td>
                <td>${item.tahun}</td>
            </tr>`;
            tabel.innerHTML += row;
        });
    }

    function kembali(){
        document.getElementById('formPage').style.display = 'block';
        document.getElementById('tabelPage').style.display = 'none';
    }
</script>
</body>
</html>
