// frontend/js/upload_handler.js

document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk menginisialisasi drag and drop pada formulir tertentu
    function initializeUploadForm(formId, fileInputId, dropAreaId, fileNameDisplayId, selectFileLinkId, allowedMimeTypes, apiUrl) {
        const submissionForm = document.getElementById(formId);
        if (!submissionForm) return;

        const dropArea = document.getElementById(dropAreaId);
        const fileInput = document.getElementById(fileInputId);
        const fileNameDisplay = document.getElementById(fileNameDisplayId);
        const selectFileLink = dropArea.querySelector('.select-file-link');
        let uploadedFile = null; // Variable to hold the single file

        // Fungsi untuk mencegah perilaku default drag
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
            // Penting: mencegah drop default di luar dropArea juga
            document.body.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        // Fungsi untuk menyorot area drop
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false);
        });

        // Fungsi untuk menghilangkan sorotan area drop
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false);
        });

        function highlight(e) {
            dropArea.classList.add('highlight');
        }

        function unhighlight(e) {
            dropArea.classList.remove('highlight');
        }

        // Handle dropped files
        dropArea.addEventListener('drop', handleDrop, false);

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;

            if (files.length > 0) {
                const file = files[0];
                if (isValidFileType(file, allowedMimeTypes)) {
                    uploadedFile = file;
                    displayFileName(uploadedFile);
                } else {
                    alert('Format file tidak didukung. Harap unggah file dengan format yang sesuai.');
                    uploadedFile = null;
                    displayFileName(null);
                }
            }
        }

        // Handle file input change (when user clicks to select file)
        if (selectFileLink) {
            selectFileLink.addEventListener('click', () => {
                fileInput.click();
            });
        }


        fileInput.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                const file = files[0];
                if (isValidFileType(file, allowedMimeTypes)) {
                    uploadedFile = file;
                    displayFileName(uploadedFile);
                } else {
                    alert('Format file tidak didukung. Harap unggah file dengan format yang sesuai.');
                    uploadedFile = null;
                    displayFileName(null);
                }
            }
            // Reset input file agar event 'change' bisa terpicu lagi jika file yang sama dipilih
            fileInput.value = '';
        });

        function isValidFileType(file, allowedTypes) {
            const fileType = file.type;
            const fileName = file.name;

            // Check against MIME types or file extensions
            for (const type of allowedTypes) {
                if (type.endsWith('/*')) { // Wildcard like 'image/*' or 'video/*'
                    if (fileType.startsWith(type.slice(0, -1))) {
                        return true;
                    }
                } else if (fileType === type) { // Exact MIME type
                    return true;
                } else if (type.startsWith('.')) { // File extension like '.txt'
                    if (fileName.toLowerCase().endsWith(type.toLowerCase())) {
                        return true;
                    }
                }
            }
            return false;
        }

        function displayFileName(file) {
            if (file) {
                fileNameDisplay.innerHTML = `File dipilih: <strong>${file.name}</strong> <span class="clear-file-btn" style="color: red; cursor: pointer; margin-left: 10px;">&times;</span>`;
                fileNameDisplay.style.display = 'block';

                // Tambahkan event listener untuk tombol clear
                const clearBtn = fileNameDisplay.querySelector('.clear-file-btn');
                if (clearBtn) {
                    clearBtn.addEventListener('click', () => {
                        uploadedFile = null;
                        displayFileName(null);
                    });
                }
            } else {
                fileNameDisplay.textContent = '';
                fileNameDisplay.style.display = 'none';
            }
        }

        // Form submission logic
        submissionForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Mencegah form refresh halaman

            const formData = new FormData(); // Gunakan FormData untuk mengirim file

            // Kumpulkan data form sesuai ID yang diberikan
            if (formId === 'submissionForm') { // Form Kirim Tulisan / Fanart
                formData.append('authorName', document.getElementById('submission-name').value);
                formData.append('authorEmail', document.getElementById('submission-email').value);
                formData.append('category', document.getElementById('submission-type').value);
                formData.append('title', document.getElementById('submission-title').value);
                formData.append('description', document.getElementById('submission-description').value);

                if (uploadedFile) {
                    formData.append('mediaFile', uploadedFile);
                } else if (document.getElementById('submission-imageUrl').value) {
                    formData.append('imageUrl', document.getElementById('submission-imageUrl').value);
                } else {
                    alert('Harap unggah file atau berikan link gambar/media.');
                    return;
                }
            } else if (formId === 'uploadMediaForm') { // Form Upload Video / Musik
                formData.append('authorName', document.getElementById('uploader-name').value); // Sesuaikan dengan nama backend Anda
                formData.append('authorEmail', document.getElementById('uploader-email').value); // Sesuaikan
                formData.append('category', document.getElementById('media-type').value); // Sesuaikan
                formData.append('title', document.getElementById('media-title').value); // Sesuaikan
                formData.append('description', document.getElementById('media-description').value); // Sesuaikan

                if (uploadedFile) {
                    formData.append('mediaFile', uploadedFile);
                } else if (document.getElementById('media-link').value) {
                    formData.append('mediaLink', document.getElementById('media-link').value);
                } else {
                    alert('Harap unggah file atau berikan link media.');
                    return;
                }
            }


            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    body: formData, // FormData akan otomatis mengatur Content-Type
                });

                const result = await response.json();

                if (response.ok) {
                    alert('Karya berhasil dikirim! Akan segera ditampilkan di galeri setelah diverifikasi.');
                    submissionForm.reset(); // Bersihkan formulir
                    uploadedFile = null; // Reset file
                    displayFileName(null); // Clear file name display
                } else {
                    alert(`Gagal mengirim karya: ${result.error || response.statusText}`);
                    console.error('Error response:', result);
                }
            } catch (error) {
                alert('Terjadi kesalahan jaringan atau server. Coba lagi nanti.');
                console.error('Network or server error:', error);
            }
        });
    }

    // Inisialisasi formulir upload untuk masing-masing halaman
    // Untuk kirim_tulisan_fanart.html
    initializeUploadForm(
        'submissionForm',
        'submission-file-input',
        'drop-area',
        'file-name-display',
        '.select-file-link',
        ['image/jpeg', 'image/png', 'image/gif', '.txt', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        'http://localhost:5000/api/karya'
    );

    // Untuk upload_video_musik.html
    // Perhatikan bahwa ID form di upload_video_musik.html saat ini tidak memiliki ID.
    // Saya akan mengasumsikan Anda akan menambahkan ID 'uploadMediaForm' ke form tersebut.
    // Jika tidak ada ID, saya akan menggunakan document.querySelector('form') di dalam fungsi initializeUploadForm
    initializeUploadForm(
        'uploadMediaForm', // ID formulir di upload_video_musik.html, perlu ditambahkan
        'media-file-input',
        'drop-area',
        'file-name-display',
        '.select-file-link',
        ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'audio/mpeg', 'audio/wav', 'audio/aac'],
        'http://localhost:5000/api/karya'
    );

});