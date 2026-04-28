// ================================
// FADILLEDU - JavaScript Interactions
// Nama: Fadill | NIM: 21134657
// ================================

// --- NAVBAR SCROLL EFFECT ---
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// --- HAMBURGER MENU TOGGLE ---
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
}

// Tutup menu kalau klik di luar
document.addEventListener('click', function (e) {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (navLinks && hamburger) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  }
});

// --- LAYANAN FILTER (halaman layanan.html) ---
function filterLayanan(level, btn) {
  // Update active tab
  const allBtns = document.querySelectorAll('.tab-btn');
  allBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Filter cards
  const allCards = document.querySelectorAll('.layanan-card');
  allCards.forEach(card => {
    if (level === 'all') {
      card.classList.remove('hidden');
    } else {
      if (card.dataset.level === level) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });
}

// --- MODAL GALERI (halaman galeri.html) ---
function openModal(el) {
  const overlay = document.getElementById('modalOverlay');
  const modalImg = document.getElementById('modalImg');
  const modalInfo = document.getElementById('modalInfo');

  if (!overlay) return;

  const icon = el.querySelector('.g-icon') ? el.querySelector('.g-icon').textContent : '🖼️';
  const caption = el.querySelector('.galeri-overlay p') ? el.querySelector('.galeri-overlay p').textContent : '';
  const sub = el.querySelector('.galeri-overlay small') ? el.querySelector('.galeri-overlay small').textContent : '';

  modalImg.innerHTML = icon;
  modalInfo.innerHTML = `<p>${caption}</p><small>${sub}</small>`;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Tutup modal dengan ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

// --- FORM VALIDASI & SUBMIT (halaman kontak.html) ---
function submitForm() {
  const nama = document.getElementById('nama');
  const email = document.getElementById('email');
  const telepon = document.getElementById('telepon');
  const jenjang = document.getElementById('jenjang');
  const mapel = document.getElementById('mapel');

  // Kalau elemen form tidak ada (bukan halaman kontak), stop
  if (!nama || !email || !telepon || !jenjang || !mapel) return;

  const namaVal = nama.value.trim();
  const emailVal = email.value.trim();
  const teleponVal = telepon.value.trim();
  const jenjangVal = jenjang.value;
  const mapelVal = mapel.value;

  // Validasi kosong
  if (!namaVal) {
    alert('⚠️ Nama lengkap wajib diisi!');
    nama.focus();
    return;
  }

  if (!emailVal) {
    alert('⚠️ Email wajib diisi!');
    email.focus();
    return;
  }

  // Validasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    alert('⚠️ Format email tidak valid!\nContoh: nama@email.com');
    email.focus();
    return;
  }

  if (!teleponVal) {
    alert('⚠️ Nomor telepon wajib diisi!');
    telepon.focus();
    return;
  }

  // Validasi format nomor telepon (minimal 10 digit)
  const phoneRegex = /^[0-9+\-\s]{10,15}$/;
  if (!phoneRegex.test(teleponVal)) {
    alert('⚠️ Format nomor telepon tidak valid!\nContoh: 0812-2113-4657');
    telepon.focus();
    return;
  }

  if (!jenjangVal) {
    alert('⚠️ Jenjang wajib dipilih!');
    jenjang.focus();
    return;
  }

  if (!mapelVal) {
    alert('⚠️ Mata pelajaran wajib dipilih!');
    mapel.focus();
    return;
  }

  // Semua valid
  const jenjangLabel = { sd: 'SD', smp: 'SMP', sma: 'SMA' }[jenjangVal];
  const mapelLabel = {
    matematika: 'Matematika',
    ipa: 'IPA / Fisika / Kimia',
    ips: 'IPS / Ekonomi',
    bindo: 'Bahasa Indonesia',
    bing: 'Bahasa Inggris'
  }[mapelVal];

  alert(
    `✅ Pendaftaran Berhasil!\n\n` +
    `Halo ${namaVal}! 👋\n` +
    `Terima kasih sudah mendaftar di FadillEdu.\n\n` +
    `📋 Ringkasan Pendaftaran:\n` +
    `• Nama   : ${namaVal}\n` +
    `• Email  : ${emailVal}\n` +
    `• Telp   : ${teleponVal}\n` +
    `• Jenjang: ${jenjangLabel}\n` +
    `• Mapel  : ${mapelLabel}\n\n` +
    `Tim kami akan menghubungi Anda dalam 1x24 jam.\n` +
    `WhatsApp: 0812-2113-4657`
  );

  // Reset form setelah sukses
  nama.value = '';
  email.value = '';
  telepon.value = '';
  jenjang.value = '';
  mapel.value = '';
  document.getElementById('pesan').value = '';
}

// --- SCROLL REVEAL ANIMASI SEDERHANA ---
function revealOnScroll() {
  const elements = document.querySelectorAll(
    '.feature-card, .jenjang-card, .team-card, .layanan-card, .testi-card, .vm-card, .paket-card, .galeri-item'
  );

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.style.opacity = '1';
      el.style.transform = el.style.transform.replace('translateY(20px)', 'translateY(0)');
    }
  });
}

// Set initial state untuk animasi
document.addEventListener('DOMContentLoaded', function () {
  const animEls = document.querySelectorAll(
    '.feature-card, .jenjang-card, .team-card, .layanan-card, .testi-card, .vm-card, .paket-card, .galeri-item'
  );
  animEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    el.style.transform = 'translateY(20px)';
  });

  // Trigger sekali pas load
  setTimeout(revealOnScroll, 100);
});

window.addEventListener('scroll', revealOnScroll);