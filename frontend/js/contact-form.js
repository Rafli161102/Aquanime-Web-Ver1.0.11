// Inisialisasi EmailJS dengan public key yang benar
emailjs.init("2tQt_0ldRIoW6V-KK");

// Fungsi kirim email untuk form apapun (logika seperti pesan.html)
function sendEmailJSForm(formId, statusId, templateParams) {
    const status = document.getElementById(statusId);
    if (status) {
        status.textContent = "Mengirim...";
        status.style.color = "#1565c0";
    }
    emailjs
        .send("service_gc1bb7h", "template_iqjyj4r", templateParams)
        .then(
            () => {
                if (status) {
                    status.textContent = "Email terkirim!";
                    status.style.color = "green";
                }
                document.getElementById(formId).reset();
            },
            (error) => {
                if (status) {
                    status.textContent = "Gagal mengirim email. Coba lagi.";
                    status.style.color = "red";
                }
                console.error("EmailJS error:", error.status, error.text);
            }
        );
}

// Untuk form kontak utama (id="contact-form")
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const subject = document.getElementById("subject").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const statusId = "status";
        if (!name || !subject || !email || !message) {
            document.getElementById(statusId).textContent = "Harap isi semua kolom!";
            document.getElementById(statusId).style.color = "red";
            return;
        }
        sendEmailJSForm("contact-form", statusId, { name, subject, email, message });
    });
}

// Untuk form pesan lain (misal: contactMessageForm, bugReportForm, feedbackForm)
const contactMessageForm = document.getElementById("contactMessageForm");
if (contactMessageForm) {
    contactMessageForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject") ? document.getElementById("subject").value : "";
        const message = document.getElementById("message").value;
        let statusId = "status";
        if (!document.getElementById(statusId)) {
            const statusDiv = document.createElement("div");
            statusDiv.id = statusId;
            statusDiv.style.marginTop = "10px";
            contactMessageForm.appendChild(statusDiv);
        }
        if (!name || !email || !message) {
            document.getElementById(statusId).textContent = "Harap isi semua kolom!";
            document.getElementById(statusId).style.color = "red";
            return;
        }
        sendEmailJSForm("contactMessageForm", statusId, { name, subject, email, message });
    });
}

const bugReportForm = document.getElementById("bugReportForm");
if (bugReportForm) {
    bugReportForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("bug-name").value;
        const email = document.getElementById("bug-email").value;
        const location = document.getElementById("bug-location").value;
        const description = document.getElementById("bug-description").value;
        let statusId = "bug-status";
        if (!document.getElementById(statusId)) {
            const statusDiv = document.createElement("div");
            statusDiv.id = statusId;
            statusDiv.style.marginTop = "10px";
            bugReportForm.appendChild(statusDiv);
        }
        if (!description) {
            document.getElementById(statusId).textContent = "Deskripsi bug wajib diisi!";
            document.getElementById(statusId).style.color = "red";
            return;
        }
        sendEmailJSForm("bugReportForm", statusId, {
            name, email, subject: "Bug Report: " + location, message: description
        });
    });
}

const feedbackForm = document.getElementById("feedbackForm");
if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("feedback-name").value;
        const email = document.getElementById("feedback-email").value;
        const type = document.getElementById("feedback-type").value;
        const description = document.getElementById("feedback-message").value;
        let statusId = "feedback-status";
        if (!document.getElementById(statusId)) {
            const statusDiv = document.createElement("div");
            statusDiv.id = statusId;
            statusDiv.style.marginTop = "10px";
            feedbackForm.appendChild(statusDiv);
        }
        if (!description) {
            document.getElementById(statusId).textContent = "Pesan masukan wajib diisi!";
            document.getElementById(statusId).style.color = "red";
            return;
        }
        sendEmailJSForm("feedbackForm", statusId, {
            name, email, subject: "Feedback: " + type, message: description
        });
    });
}

