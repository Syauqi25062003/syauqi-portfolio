
from pathlib import Path
import pymupdf

# Lokasi folder project
BASE_DIR = Path(__file__).resolve().parent.parent
CERTIFICATE_DIR = BASE_DIR / "public" / "certificates"
THUMBNAIL_DIR = CERTIFICATE_DIR / "thumbnails"

# Daftar sertifikat
certificates = {
    "Basics of Machine Learning.pdf": "basics-machine-learning.png",
    "Machine Learning Algoritma.pdf": "machine-learning-algorithms.png",
    "introduction to Supervised Learning.pdf": "supervised-learning.png",
    "Introduction to Unsupervised Learning.pdf": "unsupervised-learning.png",
    "Big Data Analytics Course.pdf": "big-data-analytics.png",
    "Data Visualisation with Python.pdf": "data-visualisation-python.png",
    "Data Visualization using Python (3).pdf": "data-visualization-python.png",
    "Wadhwani Foundation Certificate - 6777d3a2cdb748e542d223b4.pdf": "obtain-appropriate-job.png",
    "Wadhwani Foundation Certificate - 6777d502d95a8cf1203587f8.pdf": "jobready-employability.png",
}

# Buat folder thumbnail
THUMBNAIL_DIR.mkdir(parents=True, exist_ok=True)

success = 0

for pdf_name, image_name in certificates.items():
    pdf_path = CERTIFICATE_DIR / pdf_name

    if not pdf_path.exists():
        print(f"[TIDAK DITEMUKAN] {pdf_name}")
        continue

    try:
        with pymupdf.open(pdf_path) as document:
            if len(document) == 0:
                print(f"[PDF KOSONG] {pdf_name}")
                continue

            # Ambil halaman pertama
            page = document[0]

            # Ubah halaman PDF menjadi PNG
            pixmap = page.get_pixmap(
                matrix=pymupdf.Matrix(2, 2),
                alpha=False
            )

            output_path = THUMBNAIL_DIR / image_name
            pixmap.save(output_path)

            print(f"[BERHASIL] {image_name}")
            success += 1

    except Exception as error:
        print(f"[GAGAL] {pdf_name}: {error}")

print(f"\nSelesai! {success} dari {len(certificates)} thumbnail berhasil dibuat.")
