# Panduan Deployment Aplikasi Pijartech ke VPS dengan Docker

Dokumen ini berisi langkah-langkah untuk men-deploy aplikasi Pijartech ke VPS (Virtual Private Server) menggunakan Docker.

## Prasyarat

1. VPS dengan sistem operasi Linux (Ubuntu 20.04 LTS atau yang lebih baru direkomendasikan)
2. Docker dan Docker Compose terinstal di VPS
3. Akses SSH ke VPS
4. Domain (opsional, untuk mengakses aplikasi melalui nama domain)

## Langkah-langkah Deployment

### 1. Persiapan VPS

```bash
# Update sistem
sudo apt update && sudo apt upgrade -y

# Instal Docker jika belum terinstal
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    echo "Docker berhasil diinstal. Silakan logout dan login kembali untuk menerapkan perubahan grup."
    exit
fi

# Instal Docker Compose jika belum terinstal
if ! command -v docker-compose &> /dev/null; then
    sudo apt install docker-compose-plugin -y
    echo "Docker Compose berhasil diinstal."
fi
```

### 2. Menyalin Kode Aplikasi ke VPS

```bash
# Buat direktori untuk aplikasi
mkdir -p ~/pijartech

# Salin kode aplikasi ke VPS menggunakan scp atau git clone
# Opsi 1: Menggunakan SCP (jalankan di komputer lokal)
scp -r /path/to/local/pijartech user@your_vps_ip:~/pijartech

# Opsi 2: Menggunakan Git (jalankan di VPS)
cd ~/pijartech
git clone https://your-repository-url.git .
```

### 3. Konfigurasi Environment Variables (Opsional)

```bash
# Buat file .env jika diperlukan
cd ~/pijartech
cat > .env << EOL
# Konfigurasi environment variables
# DATABASE_URL=your_database_url
# API_KEY=your_api_key
EOL
```

### 4. Build dan Jalankan Aplikasi dengan Docker Compose

```bash
# Masuk ke direktori aplikasi
cd ~/pijartech

# Build dan jalankan aplikasi dalam mode detached
docker compose up -d --build
```

### 5. Verifikasi Deployment

```bash
# Periksa status container
docker compose ps

# Lihat logs aplikasi
docker compose logs -f nextjs
```

Aplikasi sekarang seharusnya berjalan di http://your_vps_ip:3000

### 6. Konfigurasi Nginx sebagai Reverse Proxy (Opsional, untuk menggunakan domain)

```bash
# Instal Nginx
sudo apt install nginx -y

# Konfigurasi Nginx sebagai reverse proxy
sudo cat > /etc/nginx/sites-available/pijartech << EOL
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

# Aktifkan konfigurasi
sudo ln -s /etc/nginx/sites-available/pijartech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 7. Konfigurasi SSL dengan Certbot (Opsional, untuk HTTPS)

```bash
# Instal Certbot
sudo apt install certbot python3-certbot-nginx -y

# Dapatkan sertifikat SSL
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Perintah Pengelolaan

### Menghentikan Aplikasi

```bash
cd ~/pijartech
docker compose down
```

### Memulai Ulang Aplikasi

```bash
cd ~/pijartech
docker compose restart
```

### Melihat Logs

```bash
cd ~/pijartech
docker compose logs -f
```

### Update Aplikasi

```bash
# Pull perubahan terbaru (jika menggunakan git)
cd ~/pijartech
git pull

# Rebuild dan restart container
docker compose up -d --build
```

## Troubleshooting

### Container Tidak Berjalan

```bash
# Periksa logs untuk error
docker compose logs nextjs

# Periksa status container
docker ps -a
```

### Masalah Koneksi

```bash
# Periksa apakah port 3000 terbuka
sudo netstat -tulpn | grep 3000

# Periksa firewall
sudo ufw status

# Jika perlu, buka port 3000
sudo ufw allow 3000/tcp
```

## Backup dan Restore

### Backup Volume Data (jika menggunakan database)

```bash
# Backup volume database
docker run --rm -v pijartech_postgres_data:/source -v $(pwd):/backup alpine tar -czf /backup/postgres_data_backup.tar.gz -C /source .
```

### Restore Volume Data

```bash
# Restore volume database
docker run --rm -v pijartech_postgres_data:/target -v $(pwd):/backup alpine sh -c "rm -rf /target/* && tar -xzf /backup/postgres_data_backup.tar.gz -C /target"
```

## Kesimpulan

Dengan mengikuti langkah-langkah di atas, aplikasi Pijartech sekarang seharusnya berjalan di VPS Anda menggunakan Docker. Konfigurasi ini memastikan aplikasi berjalan dalam lingkungan yang terisolasi dan konsisten, serta mudah untuk dikelola dan diperbarui.