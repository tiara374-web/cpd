const artifactData = {

  /* =====================================================
     01. KOLABORASI
     ===================================================== */

  kolaborasi: {

    title:
      "Pembelajaran Kolaboratif & Pembagian Peran",

    subtitle:
      "Materi Array · Informatika Kelas XI-3",

    description:
      "Pembelajaran kolaboratif pada materi Array dirancang untuk memberi tanggung jawab yang lebih jelas kepada setiap anggota kelompok. Murid bekerja melalui pembagian peran agar proses penyelesaian tugas tidak hanya bergantung pada satu atau dua murid yang lebih aktif.",

    files: {

      modul: {
        title:
          "Modul Ajar Array",

        description:
          "Perangkat pembelajaran kolaboratif pada materi Array.",

        src:
          "assets/array/Modul 3.pdf"
      },

      lkpd: {
        title:
          "LKPD Array",

        description:
          "Lembar kerja pembelajaran kelompok pada materi Array.",

        src:
          "assets/array/LKPD.pdf"
      },

      media: {
        title:
          "Media Pembelajaran Array",

        description:
          "Media pendukung yang digunakan dalam pembelajaran Array.",

        src:
          "assets/array/PPT.pdf"
      },

    },

    reflection:
      "Pembagian peran membantu membuat tanggung jawab anggota kelompok lebih terlihat. Murid memiliki tugas yang lebih jelas selama proses penyelesaian masalah. Namun, beberapa murid masih membutuhkan arahan, terutama ketika merancang solusi dan mengimplementasikan kode.",

    followUp:
      "Pada pembelajaran berikutnya, tugas setiap peran perlu dibuat lebih jelas dan terarah. Scaffolding dapat diberikan pada bagian yang lebih sulit, terutama pada perancangan solusi dan implementasi kode. Rotasi peran juga perlu dilakukan agar setiap murid memperoleh pengalaman menjalankan tanggung jawab yang berbeda."

  },


  /* =====================================================
     02. CODING CLINIC
     ===================================================== */

  clinic: {

    title:
      "Coding Clinic: BUILD–CHECK–FIX",

    subtitle:
      "Pemrograman C++ · Informatika Kelas XI-3",

    description:
      "Coding Clinic BUILD–CHECK–FIX merupakan kegiatan penguatan pemrograman C++ yang memberikan kesempatan kepada murid untuk membangun program, memeriksa hasil, menemukan kesalahan, dan melakukan perbaikan. Kegiatan ini dirancang untuk mendorong keterlibatan murid selama proses latihan pemrograman.",

    files: {

      modul: {
        title:
          "Modul Ajar Coding Clinic",

        description:
          "Rancangan pembelajaran Coding Clinic BUILD–CHECK–FIX.",

        src:
          "assets/clinic/Modul clinic.pdf"
      },

      lkpd: {
        title:
          "LKPD Coding Clinic",

        description:
          "Lembar aktivitas BUILD–CHECK–FIX dalam latihan pemrograman C++.",

        src:
          "assets/clinic/LKPD clinic.pdf"
      },

        media: {
        title:
            "Media Interaktif Coding Clinic",

        description:
            "Media pembelajaran berbasis web yang digunakan dalam kegiatan Coding Clinic BUILD–CHECK–FIX.",

        type:
            "html",

        src:
            "assets/clinic/clinic.html"
        },

    },

    reflection:
      "Tahapan BUILD–CHECK–FIX memberikan ruang kepada murid untuk terlibat langsung dalam proses latihan. Murid tidak hanya menerima jawaban akhir, tetapi diarahkan untuk mencoba, memeriksa pekerjaannya, menemukan kesalahan, dan melakukan perbaikan.",

    followUp:
      "Kegiatan dapat dikembangkan dengan memberikan variasi tantangan secara bertahap. Murid yang masih mengalami kesulitan dapat diberikan petunjuk tambahan, sedangkan murid yang lebih cepat menyelesaikan tugas dapat memperoleh challenge lanjutan."

  },


  /* =====================================================
     03. CODE TRAIL
     ===================================================== */

  trail: {

    title:
      "Code Trail & Tantangan Pemrograman",

    subtitle:
      "Percabangan & Perulangan · Informatika Kelas XI-3",

    description:
      "Code Trail merupakan kegiatan pembelajaran yang mengemas latihan pemrograman dalam bentuk tantangan di beberapa pos. Murid perlu membaca instruksi, memahami permasalahan, menentukan strategi, dan menyelesaikan tantangan berdasarkan konsep pemrograman yang telah dipelajari.",

    files: {

      modul: {
        title:
          "Modul Ajar Code Trail",

        description:
          "Rancangan pembelajaran Code Trail dan tantangan pemrograman.",

        src:
          "assets/code trail/Modul 3.pdf"
      },

      lkpd: {
        title:
          "Tracer Sheet / LKPD Code Trail",

        description:
          "Lembar yang digunakan untuk mencatat hasil penyelesaian setiap tantangan.",

        src:
          "assets/code trail/LKPD 3.pdf"
      },

      media: {
        title:
          "Media & Kartu Tantangan",

        description:
          "Kartu soal dan media yang digunakan pada setiap pos Code Trail.",
        src:
          "assets/code trail/Media.pdf"
      },

    },

    reflection:
      "Code Trail memberikan variasi pengalaman belajar melalui beberapa tantangan pemrograman. Murid perlu bergerak dari satu persoalan ke persoalan lain, membaca instruksi dengan teliti, menentukan strategi, dan menerapkan konsep yang telah dipelajari.",

    followUp:
      "Tingkat kesulitan antarpos perlu disusun secara bertahap agar tantangan tetap dapat diikuti oleh murid dengan kemampuan yang berbeda. Instruksi pada setiap pos juga perlu dibuat lebih ringkas dan jelas, serta disediakan tantangan tambahan bagi murid yang menyelesaikan tugas lebih cepat."

  }

};



/* =====================================================
   AMBIL PARAMETER DARI URL
   ===================================================== */

const params =
  new URLSearchParams(window.location.search);

const activityKey =
  params.get("kegiatan") || "kolaborasi";

const data =
  artifactData[activityKey] || artifactData.kolaborasi;


/* =====================================================
   ELEMENT HALAMAN
   ===================================================== */

const title =
  document.getElementById("artifactTitle");

const subtitle =
  document.getElementById("artifactSubtitle");

const description =
  document.getElementById("artifactDescription");

const frame =
  document.getElementById("artifactFrame");

const fileTitle =
  document.getElementById("artifactFileTitle");

const fileDescription =
  document.getElementById("artifactFileDescription");

const openNewTab =
  document.getElementById("artifactOpenNewTab");

const reflection =
  document.getElementById("artifactReflection");

const followUp =
  document.getElementById("artifactFollowUp");

const tabs =
  document.querySelectorAll(".artifact-tab");


/* =====================================================
   TAMPILKAN DATA KEGIATAN
   ===================================================== */

title.textContent =
  data.title;

subtitle.textContent =
  data.subtitle;

description.textContent =
  data.description;

reflection.textContent =
  data.reflection;

followUp.textContent =
  data.followUp;


/* =====================================================
   LOAD FILE PDF
   ===================================================== */

function loadFile(type) {

  const file =
    data.files[type];

  if (!file) {
    return;
  }

  fileTitle.textContent =
    file.title;

  fileDescription.textContent =
    file.description;

  frame.src =
    file.src;

  openNewTab.href =
    file.src;


  // Jika file berupa HTML / media interaktif
  if (file.type === "html") {

    openNewTab.textContent =
      "Buka Media Interaktif ↗";

  }

  // Selain HTML dianggap PDF
  else {

    openNewTab.textContent =
      "Buka PDF ↗";

  }

}

/* DEFAULT: MODUL AJAR */

loadFile("modul");


/* =====================================================
   PERPINDAHAN TAB
   ===================================================== */

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(item => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    const fileType =
      tab.dataset.file;

    loadFile(fileType);

  });

});