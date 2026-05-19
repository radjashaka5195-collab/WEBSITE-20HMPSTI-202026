import { delay } from "framer-motion";
import { Calendar, LayoutGrid, ShoppingBag, Users } from "lucide-react";

export const PLACEHOLDER_MAN =
  "https://ouch-cdn2.icons8.com/3Ro3XNdxB8qJ2XJjZ_zYgZtWv51k5G7oJ7uW_JzZ_Jz/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOC82/YWU4NzQ2MS0wZGM4/LTRjODMtYjNjOC02/YjQ0OGIyOWFhZGYu/cG5n.png";

export const quickMenus = [
  {
    name: "Struktur",
    icon: Users,
    path: "/struktur",
    color: "text-sky-400 border-sky-500/20 bg-sky-500/5",
  },
  {
    name: "Divisi",
    icon: LayoutGrid,
    path: "/departemen",
    color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  },
  {
    name: "Kalender",
    icon: Calendar,
    path: "/kalender",
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
  },
  {
    name: "Store",
    icon: ShoppingBag,
    path: "/merch",
    color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
  },
];

export const misi = [
  {
    title: "Tata Kelola Profesional",
    text: "Tata kelola organisasi Profesional berbasis kinerja (KPI) untuk memastikan setiap langkah strategis terukur dan berdampak.",
    isBlue: true,
    delay: 0.1,
  },
  {
    title: "Kolaborasi Sinergis",
    text: "Menjalin kolaborasi erat dengan organisasi internal, institusi, dan industri luar untuk memperluas jaringan.",
    isBlue: false,
    delay: 0.2,
  },
  {
    title: "Jembatan Aspirasi",
    text: "Menjadi garda terdepan dalam memperhatikan hak & kesejahteraan mahasiswa melalui advokasi yang responsif.",
    isBlue: true,
    delay: 0.3,
  },
  {
    title: "Pengembangan Prestasi",
    text: "Fokus pada pengembangan Hard Skill & Soft Skill mahasiswa untuk mencetak prestasi di tingkat nasional maupun internasional.",
    isBlue: false,
    delay: 0.4,
  },
  {
    title: "Inovasi Fungsional",
    text: "Menghadirkan inovasi program kerja yang tidak hanya baru, tapi juga tepat sasaran dan fungsional bagi mahasiswa.",
    isBlue: true,
    delay: 0.5,
  },
];

export const struktur = {
  coreStaff: [
    {
      role: "leader",
      nama: "Radja Shaka",
      jabatan: "Ketua Himpunan",
      foto: "/assets/logos/images/radja.png",
      quote: "Memimpin dengan visi, melangkah dengan aksi.",
      instagram: "https://www.instagram.com/rs.quranique/",
    },
    {
      role: "leader",
      nama: "Putri Salsabila",
      jabatan: "Wakil Ketua",
      foto: "/assets/logos/images/putri.png",
      quote: "Sinergi adalah kunci keberhasilan.",
      instagram: "https://www.instagram.com/ptrisabill/",
    },
    {
      role: "staff",
      nama: "Mutia Aura",
      jabatan: "Sekretaris I",
      foto: "/assets/logos/images/mutia.png",
      instagram: "https://www.instagram.com/mutiaauraaaa_/",
    },
    {
      role: "staff",
      nama: "Raja Esa",
      jabatan: "Sekretaris II",
      foto: "/assets/logos/images/esa.png",
      instagram: "https://www.instagram.com/rajaesa_/",
    },
    {
      role: "staff",
      nama: "Vivi",
      jabatan: "Bendahara I",
      foto: "/assets/logos/images/vivi.png",
      instagram: "https://www.instagram.com/fwairypiyy/",
    },
    {
      role: "staff",
      nama: "Angel",
      jabatan: "Bendahara II",
      foto: "/assets/logos/images/angel.png",
      instagram: "https://www.instagram.com/angelinvcn_/",
    },
  ],
  kompas: {
    leader: {
      nama: "Ghabriel Sagala",
      jabatan: "Ketua KOMPAS",
      foto: "/assets/logos/images/gabriel.png",
      instagram: "https://www.instagram.com/ghabrielsagala/",
    },
    staff: [
      {
        nama: "Divo Farelly",
        jabatan: "Kompas PSDM",
        instagram: "https://www.instagram.com/divo.farrelly/",
        foto: "/assets/logos/images/divo.png",
      },
      {
        nama: "Jiddan",
        jabatan: "Kompas Inotek",
        instagram: "https://www.instagram.com/jiddanfillah_/",
        foto: "/assets/logos/images/jiddan.png",
      },
      {
        nama: "Daffa Ahmad",
        jabatan: "Kompas Medinfo",
        instagram: "https://www.instagram.com/dfaahm/",
        foto: "/assets/logos/images/damad.png",
      },
      {
        nama: "Alisya",
        jabatan: "Kompas Advokesma",
        instagram: "https://www.instagram.com/alisyaauraf/",
        foto: "/assets/logos/images/alisya.png",
      },
      {
        nama: "Brillian Pratama",
        jabatan: "Kompas Hubeks",
        instagram: "https://www.instagram.com/brilianpratama__/",
        foto: "/assets/logos/images/brillian.png",
      },
      {
        nama: "Felisha",
        jabatan: "Kompas Ekraf",
        instagram: "https://www.instagram.com/felisharegitaa/",
        foto: "/assets/logos/images/felisha.png",
      },
      {
        nama: "Ghatan Naufal",
        jabatan: "Kompas Kora",
        instagram: "https://www.instagram.com/ghatan.naufal/",
        foto: "/assets/logos/images/ghatan.png",
      },
    ],
  },
};

export const departments = [
  {
    id: "psdm",
    nama: "PSDM",
    panjang: "Pengembangan Sumber Daya Mahasiswa",
    desc: "Mewujudkan sumber daya mahasiswa Teknologi Informasi yang aktif, kompeten, berintegritas, adaptif, dan berjiwa kepemimpinan melalui proses kaderisasi dan pengembangan organisasi yang berkelanjutan.",
    theme: "sky",
    logo: "/assets/logos/PSDM.png",
    motto: "Membentuk Kader, Membangun Karakter.",
    focus: [
      "Leadership Development Camp",
      "TI Career Simulation",
      "Rangkaian Samba TI",
      "Maba to Maba (M2M)",
    ],
    leaders: [
      {
        nama: "Adam Ahmad Bimantoro",
        jabatan: "Ketua Departemen",
        foto: "",
        ig: "",
      },
      {
        nama: "Muhammad Hafizh Fajariyanto",
        jabatan: "Wakil Ketua 1",
        foto: "/assets/leaders/Hafizh_Wakil Ketua Departemen 1_PSDM .jpg",
        ig: "hapiz24_",
      },
      {
        nama: "Vallerina Gracela Purba",
        jabatan: "Wakil Ketua 2",
        foto: "/assets/leaders/Vallerina_Wakil Ketua Departemen 2_PSDM.jpg",
        ig: "vallerinacelaa",
      },
    ],
  },
  {
    id: "inotek",
    nama: "INOTEK",
    panjang: "Inovasi & Teknologi",
    desc: "Pusat pengembangan kompetensi teknis yang praktis dan berdampak nyata. Kami berperan sebagai 'Tech-Hub' yang menjembatani mahasiswa dengan tren industri IT terkini melalui riset, kompetisi, dan portofolio karya.",
    theme: "amber",
    logo: "/assets/logos/Inotek.png",
    motto: "Explore, Compete, Create.",
    focus: ["Ignite Academy", "InKnowledge", "Roots X InnoFair"],
    leaders: [
      {
        nama: "Muhammad Rohan Rifqi",
        jabatan: "Ketua Departemen",
        foto: "/assets/leaders/Muhammad Rohan Rifqi_Ketua Departemen_INOTEK.jpeg",
        ig: "rclhan",
      },
      {
        nama: "Muhammad Mu'taz Syafiq",
        jabatan: "Wakil Ketua 1",
        foto: "/assets/leaders/Muhammad Mu_taz Syafiq_Wakil Ketua Departemen 1_INOTEK.jpg",
        ig: "mutazsyafiq_",
      },
      {
        nama: "Seila Salsabiela",
        jabatan: "Wakil Ketua 2",
        foto: "/assets/leaders/Seila Salsabiela_Wakil Departemen_Inotek.jpg",
        ig: "selai_____x",
      },
    ],
  },
  {
    id: "medinfo",
    nama: "MEDINFO",
    panjang: "Media & Informasi",
    desc: "Gardu kreatif yang mengoptimalkan sistem komunikasi dan informasi berbasis teknologi. Kami fokus memperkuat identitas visual, menjembatani arus informasi, dan meningkatkan citra digital HMPSTI secara profesional.",
    theme: "sky",
    logo: "/assets/logos/Medinfo.png",
    motto: "Creativity Beyond Limit.",
    focus: [
      "Company Profile & Branding",
      "Workshop Design & Video",
      "Medinfo Class",
    ],
    leaders: [
      {
        nama: "Muhammad Raihan Hidayah",
        jabatan: "Ketua Departemen",
        foto: "/assets/leaders/Han_Kepala Departemen Medinfo.JPG",
        ig: "raihanhidayah06",
      },
      {
        nama: "Tiara Nurfadilah",
        jabatan: "Wakil Ketua 1",
        foto: "/assets/leaders/Tiara_Wakil Departemen 1_MEDINFO.png",
        ig: "tiaraa_nfh",
      },
      {
        nama: "Latisha Syifa Pratiwi",
        jabatan: "Wakil Ketua 2",
        foto: "/assets/leaders/Latisha_Wakil Departemen 2_MEDINFO.png",
        ig: "latisha.prtiwi",
      },
    ],
  },
  {
    id: "advo",
    nama: "ADVOKESMA",
    panjang: "Advokasi & Kesejahteraan",
    desc: "Pusat advokasi dan pengabdian yang progresif. Kami hadir sebagai jembatan strategis untuk memperjuangkan hak mahasiswa, menyalurkan aspirasi, serta memberikan solusi nyata bagi kesejahteraan mahasiswa dan masyarakat.",
    theme: "amber",
    logo: "/assets/logos/Advokesma.png",
    motto: "Melayani dengan Hati.",
    focus: [
      "TI Speaks (Layanan Advokasi)",
      "HaloADVO (Pusat Aspirasi)",
      "IT Charity (Pengabdian)",
      "SEAVO (Social Event)",
      "SE-TI",
    ],
    leaders: [
      {
        nama: "Kayla Alodia Calista",
        jabatan: "Ketua Departemen",
        foto: "/assets/leaders/Kayla Alodia Calista_Kepala DepartmentAdvokesma.jpg",
        ig: "kaylalodia",
      },
      {
        nama: "Dean Adiba Anugrah",
        jabatan: "Wakil Ketua 1",
        foto: "/assets/leaders/Dean Adiba Anugrah_Wakil Kepala Departemen Bidang Kesma_ADVOKESMA.jpg",
        ig: "deanadiba._",
      },
      {
        nama: "Nadia Salwa Oktavia",
        jabatan: "Wakil Ketua 2",
        foto: "/assets/leaders/Nadia Salwa Oktavia_Wakil Kepala Departemen Bidang Advokasi_ADVOKESMA.jpg",
        ig: "naadiiiaaa.a",
      },
    ],
  },
  {
    id: "hubeks",
    nama: "HUBEKS",
    panjang: "Hubungan Eksternal",
    desc: "Inisiator kolaborasi yang adaptif dan profesional. Kami menjadi garda terdepan dalam membangun sinergi strategis dengan mitra eksternal, alumni, dan industri untuk membuka peluang karier dan networking bagi mahasiswa.",
    theme: "sky",
    logo: "/assets/logos/Hubeks.png",
    motto: "The Synergy Hub.",
    focus: [
      "Vistech 2.0 (Visit Technology)",
      "Tech Career Radar",
      "Ramadhan Charity Connect",
    ],
    leaders: [
      {
        nama: "Nathanael Eleazar Handata",
        jabatan: "Ketua Departemen",
        foto: "/assets/leaders/nathanael_ketua departemen_hubeks.png",
        ig: "nthanaellll",
      },
      {
        nama: "Evan Swardana Adinata",
        jabatan: "Wakil Ketua",
        foto: "/assets/leaders/Evan_Wakil Kepala Departemen_HUBEKS.jpg",
        ig: "epanlagi_",
      },
    ],
  },
  {
    id: "ekraf",
    nama: "EKRAF",
    panjang: "Ekonomi Kreatif",
    desc: "Inkubator wirausaha bagi mahasiswa TI. Kami membekali mahasiswa dengan kemampuan mengemas skill IT menjadi produk bernilai ekonomi, sekaligus menjadi motor penggerak kemandirian finansial organisasi.",
    theme: "amber",
    logo: "/assets/logos/Ekraf.png",
    motto: "Business with Passion.",
    focus: ["Jelajah Teknologi", "TI Merch", "Inspired Talk", "Creatrip"],
    leaders: [
      {
        nama: "Muktabar Zaki Pramana Wlbisono",
        jabatan: "Ketua Departemen",
        foto: "/assets/leaders/Muktabar Zaki_KadepEkraf_HMPSTI.jpg",
        ig: "muktabarzaki",
      },
      {
        nama: "Dinda Eka Cantika",
        jabatan: "Wakil Ketua",
        foto: "/assets/leaders/Dinda_WakilDepartemen_EKRAF.png",
        ig: "dindaecaa",
      },
    ],
  },
  {
    id: "mikat",
    nama: "KORA",
    panjang: "Kreatifitas & Olahraga",
    desc: "Wadah pengembangan potensi non-akademik yang berbasis kolaborasi dan inovasi. Kami memfasilitasi penyaluran minat bakat di bidang seni dan olahraga untuk mendorong prestasi dan keseimbangan hidup mahasiswa.",
    theme: "sky",
    logo: "/assets/logos/Kora.png",
    motto: "Sportive Spirit, Creative Mind.",
    focus: [
      "Techno Competition",
      "Techno Cup (E-Sport)",
      "IT Fun Game",
      "Hall Of Fame & Akustik",
    ],
    leaders: [
      {
        nama: "Wiratama Satrio Herlambang",
        jabatan: "Ketua Departemen",
        foto: "/assets/leaders/Wiratama Satrio H_Ketua Departemen_Kora",
        ig: "wirattamaa_",
      },
      {
        nama: "Raihan Ammar Ahsani",
        jabatan: "Wakil Ketua 1",
        foto: "/assets/leaders/Raihan Ammar Ahsani_Wakil Departemen_KORA.jpg",
        ig: "amar.rhn",
      },
      {
        nama: "Damar Putra Hartono",
        jabatan: "Wakil Ketua 2",
        foto: "",
        ig: "",
      },
    ],
  },
];
