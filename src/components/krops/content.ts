/**
 * Krops site copy, kept in one place so wording can be reviewed and later
 * translated (e.g. an /en version for investors). Where each claim comes
 * from is listed in docs/CONTENT.md.
 */

export const APP_STORE_URL = "https://apps.apple.com/id/app/krops-oil-palm-agritech/id6829691522";

/**
 * Social links. Kept even without a URL yet (product decision); fill in the
 * company page URL here and it updates the footer and the mobile menu.
 * TODO(linkedin): replace "#" with the Krops LinkedIn company page.
 */
export const social = {
  linkedin: "#",
};

export const site = {
  title: "Krops — Dosis Pupuk Tepat untuk Setiap Pohon Sawit",
  description:
    "Drone memetakan kebun, aplikasi Krops menghitung dosis pupuk tiap pohon sawit, dan spreader menaburkannya. Tanpa tes lab. Unduh gratis di App Store.",
  company: "PT Tunas Karya Tunggal",
};

export const hero = {
  proof: { label: "Berjalan di", value: "12 ha kebun sawit · Bintan" },
  news: { tag: "Baru", text: "Krops 1.1 kini terhubung langsung ke spreader pupuk", href: "#how" },
  headline: "Dosis pupuk yang tepat untuk setiap pohon sawit",
  primaryCta: { label: "Lihat cara kerjanya", href: "#how" },
  accentCta: { label: "Unduh gratis di App Store", href: APP_STORE_URL },
  problem: {
    label: "Masalahnya",
    body: "Satu kebun bisa berisi 260–650 pohon, dan tiap pohon butuh pupuk berbeda. Dari bawah semuanya tampak sama, jadi dosisnya cuma ditebak.",
  },
  response: {
    label: "Solusi kami",
    body: "Drone memotret seluruh kebun, aplikasi Krops menghitung dosis tiap pohon, lalu spreader menaburkan tepat sebanyak itu. Tanpa tes lab, tanpa menebak.",
  },
  /**
   * Hero video, encoded from KROPS/drone-keynote.mov (720p HEVC source) with
   * scripts/video-to-web.swift. Filenames carry a content hash, so they can
   * be cached for a year (see next.config.ts). The first source whose media
   * query matches and whose codec the browser can play is used
   * (behaviors/heroStory.ts). Phones in portrait only ever show the centre
   * of the frame, so they get a 9:16 centre crop at a fraction of the size.
   */
  video: {
    portraitMedia: "(max-width: 600px) and (orientation: portrait)",
    poster: {
      landscape: "/assets/video/hero-poster-1280.7523de05.webp",
      portrait: "/assets/video/hero-poster-portrait.25ef6634.webp",
    },
    sources: [
      { src: "/assets/video/hero-portrait.hevc.eaf6c435.mp4", type: 'video/mp4; codecs="hvc1"', media: "portrait" },
      { src: "/assets/video/hero-portrait.h264.327789c9.mp4", type: 'video/mp4; codecs="avc1.640028"', media: "portrait" },
      { src: "/assets/video/hero-1280.hevc.0ed1d55f.mp4", type: 'video/mp4; codecs="hvc1"', media: "" },
      { src: "/assets/video/hero-1280.h264.aceffa52.mp4", type: 'video/mp4; codecs="avc1.640028"', media: "" },
    ],
  },
};

/** "Cara kerja": one step per app screen. */
export const how = {
  title: "Cara kerja Krops",
  steps: [
    {
      title: "Petakan kebun",
      caption: "Ketuk setiap sudut kebun di peta, lalu operator kami menerbangkan drone untuk memotret seluruh area.",
      image: "/assets/how/01-petakan-kebun.webp",
      alt: "Layar Buat Batas Kebun di aplikasi Krops: batas kebun 1,7 ha digambar di atas foto udara",
    },
    {
      title: "Cek tiap pohon",
      caption: "Krops menemukan setiap pohon dan memberinya warna: normal, terindikasi, atau defisiensi.",
      image: "/assets/how/02-kondisi-pohon.webp",
      alt: "Layar Kondisi Pohon: peta kebun dengan warna kesehatan tiap pohon sawit",
    },
    {
      title: "Hitung kebutuhan hara",
      caption: "Lihat selisih pupuk yang Anda berikan sekarang dengan kebutuhan nitrogen, fosfor, dan kalium kebun.",
      image: "/assets/how/03-kondisi-hara.webp",
      alt: "Layar Kondisi Hara: kebutuhan nitrogen dan fosfor dibandingkan praktik pemupukan saat ini",
    },
    {
      title: "Ikuti jadwal pupuk",
      caption: "Jenis, jumlah, dan urutan pupuk disusun sesuai anggaran Anda, lengkap dengan tanggalnya.",
      image: "/assets/how/04-jadwal-pemupukan.webp",
      alt: "Layar Jadwal Pemupukan: dolomit, NPK 15-15-15, lalu urea dengan jumlah dan tanggalnya",
    },
    {
      title: "Tabur tepat dosis",
      caption: "Jalan seperti biasa. Spreader yang terhubung lewat Bluetooth mengeluarkan dosis yang pas di tiap zona.",
      image: "/assets/how/05-spreader.webp",
      alt: "Layar mode pemupukan: spreader Krops terhubung lewat Bluetooth, Zona 2 dosis 1,5 kg per pohon",
    },
  ],
};

/**
 * "Teknologi" — on the template's pinned two-chapter story (the
 * layout), with a Krops visual in the video slot. Claims are limited to what
 * the deck and the app show. VARI
 * values are computed from the three photos themselves (canopy-pixel mean).
 */
export const tech = {
  pill: "Teknologi",
  title: "Teknologi yang melihat setiap pohon",
  crumbs: { a: "Deteksi", b: "Warna", result: "Dosis per pohon" },
  chapters: [
    {
      key: "payload",
      title: "Deteksi pohon dengan AI",
      text: "Ratusan foto drone disatukan menjadi satu peta kebun. Model kami, yang dilatih dengan lebih dari 10.000 foto sawit dari udara, menemukan setiap tajuk dan memberinya nomor.",
    },
    {
      key: "targeting",
      title: "Indeks warna VARI",
      text: "Kehijauan tiap tajuk dihitung dari piksel merah, hijau, dan biru, lalu dibandingkan dengan pohon di sekitarnya yang difoto dalam cahaya yang sama. Cukup kamera drone biasa.",
    },
  ],
  visual: {
    raw: "/assets/tech/ortho-raw.webp",
    detect: "/assets/tech/ortho-detect.webp",
    trees: [
      { image: "/assets/tech/vari-1.webp", value: 0.24, label: "Sehat" },
      { image: "/assets/tech/vari-2.webp", value: 0.16, label: "Cukup sehat" },
      { image: "/assets/tech/vari-3.webp", value: 0.11, label: "Kurang sehat" },
    ],
  },
  platform: {
    pill: "Satu sistem",
    title: "Dari peta sampai pupuk",
    blurb: "Drone, aplikasi, dan spreader bekerja sebagai satu sistem\nuntuk menentukan takaran setiap pohon\ndi kebun petani swadaya.",
    extra: "Tanpa tes lab, dan disesuaikan\ndengan anggaran pupuk Anda.",
    cards: [
      "Dosis per pohon, bukan per hektare",
      "Kamera drone biasa, tanpa sensor mahal",
      "Tanpa sampel daun dan tes lab",
      "Takaran sesuai anggaran petani",
      "Terhubung ke spreader lewat Bluetooth",
    ],
  },
} as const;

/**
 * "Tim": intro + a carousel of the 8 team portraits (krops-team/*.HEIC,
 * cropped head-and-shoulders by face position into
 * public/assets/team/). Claims in the intro come from the deck (drone
 * mapping, Core ML, iOS app, tested with Bintan farmers).
 *
 * Names and roles come from the photo filenames in krops-team/ (casing
 * normalised). Cards without a `linkedin` render as plain cards (no link
 * arrow).
 */
export type TeamMember = { name: string; role: string; image: string; bio?: string; linkedin?: string };

export const team = {
  pill: "Tim kami",
  title: "Dibangun oleh tim yang turun langsung ke kebun",
  blurb:
    "Kami menggabungkan pemetaan drone, machine learning, dan pengembangan aplikasi iOS, lalu mengujinya langsung bersama petani sawit di Bintan.",
  cta: { label: "Hubungi kami", href: "#contact" },
  carouselLabel: "Anggota tim Krops",
  autoplayMs: 2000,
  members: (
    [
      ["Raja Rafael P. S.", "Founder"],
      ["Darren C. Liharja", "Co-Founder"],
      ["Hatami K. Sugandi", "Co-Founder"],
      ["Lucky Akbar", "Lead Software Engineer"],
      ["Deni Wijaya", "Product Designer"],
      ["Ferdinand Kee", "Product Manager"],
      ["Putra G. Dewata", "AI Engineer"],
      ["Hafizh Ramli", "IoT Engineer"],
    ] as const
  ).map(
    ([name, role], i): TeamMember => ({
      name,
      role,
      image: `/assets/team/team-${i + 1}.webp`,
    }),
  ),
};

/**
 * "Untuk siapa": one 4:3 field video (KROPS/website-video-spreader.mov,
 * centre-cropped: a farmer using the app + spreader) beside a single
 * explanation card covering all three audiences. Claims come from the deck
 * (slides 4, 6, 10, 11, 12) and the App Store listing.
 */
export const builtFor = {
  title: "Dibuat untuk semua yang merawat sawit rakyat",
  pill: "Manfaat",
  context: "sawit rakyat",
  heading: "Satu sistem, dari kebun petani sampai koperasi.",
  points: [
    { who: "Petani", text: "Tahu kondisi tiap pohon tanpa tes lab, dan takaran pupuk disesuaikan dengan anggaran." },
    { who: "Koperasi", text: "Satu peta drone untuk seluruh kebun anggota, lengkap dengan kebutuhan NPK dan perkiraan biaya." },
    { who: "Mitra", text: "Pemupukan presisi untuk petani swadaya, sudah berjalan di 12 ha kebun sawit rakyat di Bintan." },
  ],
  ctas: [
    { label: "Unduh gratis di App Store", href: APP_STORE_URL, external: true, accent: true },
    { label: "Hubungi kami", href: "#contact", external: false, accent: false },
  ],
  video: {
    label: "Petani memakai aplikasi Krops dan spreader pupuk di kebun sawit",
    smallMedia: "(max-width: 768px)",
    poster: {
      large: "/assets/video/spreader43-poster-1280.494270b5.webp",
      small: "/assets/video/spreader43-poster-720.087a6eda.webp",
    },
    sources: [
      { src: "/assets/video/spreader43-720.hevc.6d8ef487.mp4", type: 'video/mp4; codecs="hvc1"', media: "small" },
      { src: "/assets/video/spreader43-720.h264.e73b37cd.mp4", type: 'video/mp4; codecs="avc1.640028"', media: "small" },
      { src: "/assets/video/spreader43-1280.hevc.e882743c.mp4", type: 'video/mp4; codecs="hvc1"', media: "" },
      { src: "/assets/video/spreader43-1280.h264.617000f6.mp4", type: 'video/mp4; codecs="avc1.640028"', media: "" },
    ],
  },
};

/**
 * "Rencana berikutnya": public roadmap on the template's principles layout
 * (two cards + one wide card). Written the way public startup roadmaps are:
 * customer value first, no dates, every item labelled as a concept so
 * nothing reads as a shipped feature. Images: KROPS/concept renders.
 */
export const nextPlan = {
  pill: "Rencana berikutnya",
  title: "Yang sedang kami\nbangun berikutnya",
  lede: "Peta dan dosis per pohon baru langkah pertama. Berikutnya, kami ingin pekerjaan di kebun makin ringan. Semuanya masih tahap konsep dan kami kembangkan bersama petani.",
  items: [
    {
      tag: "Konsep · Darat",
      title: "Robot pemupuk\notonom",
      body: "Kendaraan lapangan yang menaburkan dosis tiap pohon mengikuti peta Krops, jadi petani tidak perlu memikul pupuk keliling kebun.",
      image: "/assets/next/traktor.webp",
      alt: "Render konsep robot pemupuk beroda rantai di kebun",
      focus: "38% 60%",
    },
    {
      tag: "Konsep · Udara",
      title: "Drone yang\nterbang terjadwal",
      body: "Penerbangan berkala untuk memantau kebun, jadi peta kondisi tiap pohon selalu terbaru tanpa menunggu jadwal survei.",
      image: "/assets/next/drone.webp",
      alt: "Render konsep drone Krops terbang di atas kebun",
      focus: "48% 50%",
    },
    {
      tag: "Konsep · Sensor",
      title: "Sensor pohon KROPS-N01",
      body: "Dipasang di batang sawit untuk memantau kondisi pohon setiap hari, supaya takaran pupuk bisa diperbarui di antara penerbangan drone.",
      image: "/assets/next/collar.webp",
      alt: "Render konsep sensor KROPS-N01 yang dipasang melingkari batang pohon",
      focus: "70% 50%",
    },
  ],
};

/**
 * Footer ("closer"): the page's last call to action. The main conversion is
 * the free App Store download; "Hubungi kami" opens the contact form for
 * cooperatives and partners. Links only point to pages that exist (no
 * template blog/careers links).
 */
export const closer = {
  pill: "Mari mulai",
  title: "Bawa pemupukan presisi ke kebun sawit Anda",
  ctas: [
    { label: "Unduh gratis di App Store", href: APP_STORE_URL, external: true, accent: true },
    { label: "Hubungi kami", href: "#contact", external: false, accent: false },
  ],
  links: [
    { label: "Cara kerja", href: "#how" },
    { label: "Teknologi", href: "#technology" },
    { label: "Rencana", href: "#rencana" },
    { label: "Tim", href: "#team" },
    { label: "App Store", href: APP_STORE_URL, external: true },
    { label: "LinkedIn", href: social.linkedin, external: true },
  ],
};

/**
 * Contact modal. There is no form backend yet, so a valid submit opens the
 * visitor's email app with the message pre-filled to `email` (mailto:);
 * the address is also shown for copying.
 */
export const contact = {
  email: "contact@krops.tech",
  pill: "Formulir kontak",
  title: "Hubungi kami",
  ledeBefore: "Isi formulir di bawah atau email kami langsung di ",
  ledeAfter: ". Kami siap membantu mencari cara pemupukan yang paling pas untuk kebun Anda.",
  fields: {
    name: { label: "Nama lengkap", placeholder: "mis. Budi Santoso", empty: "Mohon isi nama Anda." },
    email: {
      label: "Alamat email",
      placeholder: "mis. budi@email.com",
      empty: "Alamat email wajib diisi.",
      invalid: "Format email belum benar.",
    },
    org: { label: "Kebun / koperasi / instansi (opsional)", placeholder: "mis. Kelompok Tani Sawit Makmur" },
    message: {
      label: "Pesan",
      placeholder: "Ceritakan luas kebun, jumlah pohon, atau rencana kerja sama Anda…",
      empty: "Mohon tulis pesan Anda.",
    },
  },
  submit: "Kirim pesan",
  sending: "Membuka email…",
  legal: "Data Anda hanya kami gunakan\nuntuk membalas pesan ini.",
  successTitle: "Satu langkah lagi",
  successText: "Aplikasi email Anda sudah terbuka dengan pesan ini. Tekan kirim untuk menyelesaikannya.",
  successFallback: "Tidak terbuka? Kirim langsung ke ",
  mailSubject: "Pertanyaan dari website Krops",
};

export const nav = {
  homeLabel: "Beranda Krops",
  links: [
    { label: "Cara kerja", href: "/#how" },
    { label: "Teknologi", href: "/#technology" },
    { label: "Untuk siapa", href: "/#built-for" },
    { label: "Tim", href: "/#team" },
  ],
  cta: { label: "Hubungi kami", href: "#contact" },
};
