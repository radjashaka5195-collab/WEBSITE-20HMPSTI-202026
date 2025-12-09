import { Header } from "@/components/Header";
import { Brain, Radio, Zap } from "lucide-react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

function DepartemenCarousel({ departments }: { departments: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex gap-4">
          {departments.map((dept, idx) => (
            <div key={idx} className="flex-shrink-0 w-full sm:w-80 min-w-0">
              <button className="w-full relative overflow-hidden group rounded-full py-4 px-6 border-2 border-primary bg-transparent hover:bg-primary text-white hover:text-black font-black transition duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <span className="relative">{dept}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const Decor = ({ className = "" }) => (
    <svg className={`absolute ${className}`} viewBox="0 0 200 200" width="200" height="200" fill="none">
      <path d="M200 200 Q100 100, 0 200" stroke="white" strokeWidth="2" opacity="0.2" />
    </svg>
  );

  const Star = ({ size = 20, className = "" }) => (
    <div className={`absolute ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z" />
      </svg>
    </div>
  );

  const evaluationPoints = [
    {
      number: "01",
      title: "Kurangnya profesionalitas dalam internal himpunan.",
      description:
        "Sistem penilaian pengurus saat ini terlalu fokus pada karakter personal bukannya berdasarkan KPI sehingga rentan terjadinya ketidakadilan karena faktor kedekatan pertemanan",
      color: "bg-primary",
    },
    {
      number: "02",
      title: "Himpunan minim adanya kegiatan pembinaan rutin",
      description:
        "untuk meningkatkan soft skill dan hard skill yang manfaatnya sangat dirasakan mahasiswa teknologi informasi",
      color: "bg-secondary",
    },
    {
      number: "03",
      title: "Penampungan aspirasi mahasiswa TI kurang menyebar.",
      description:
        "Wadah aspirasi mahasiswa saat ini hanya menjadi formalitas tanpa adanya tindak lanjut yang transparan dan solutif",
      color: "bg-primary",
    },
    {
      number: "04",
      title: "Penempatan program pelatihan yang tidak sesuai dengan fungsi utama departemennya.",
      description:
        "Contohnya berani bicara di departemen perhubungan yang seharusnya ada di departemen psdm. Perhubungan seharusnya hanya berfokus pada eksternal saja",
      color: "bg-secondary",
    },
  ];

  const missions = [
    {
      number: "01",
      title: "Membangun tata kelola organisasi yang Profesional berbasis kinerja (KPI)",
      color: "bg-primary",
    },
    {
      number: "02",
      title: "Mempererat rasa kebersamaan serta menjalin kolaborasi dengan organisasi, institusi, dan industri.",
      color: "bg-secondary",
    },
    {
      number: "03",
      title: "Menjadi jembatan aspirasi mahasiswa TI dengan memperhatikan hak, kebutuhan, dan kesejahteraan bersama.",
      color: "bg-primary",
    },
    {
      number: "04",
      title:
        "Meningkatkan kualitas mahasiswa melalui program pengembangan, guna meningkatkan Hard Skill dan Soft Skill mahasiswa untuk mencetak segudang Prestasi",
      color: "bg-secondary",
    },
    {
      number: "05",
      title: "Menghadirkan Inovasi program kerja yang tepat sasaran dan fungsional",
      color: "bg-secondary",
    },
  ];

  const departments = [
    "PSDM",
    "INOVASI DAN TEKNOLOGI",
    "MEDIA DAN INFORMASI DIGITAL",
    "ADVOKESMA",
    "HUBUNGAN EKSTERNAL",
    "EKONOMI KREATIF",
    "KREATIFITAS DAN OLAHRAGA",
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <Decor className="top-0 left-0 w-96 h-96 opacity-30" />
        <Decor className="bottom-0 right-0 w-96 h-96 opacity-30 rotate-180" />

        <Star size={60} className="top-20 left-10 text-primary opacity-70 shimmer" style={{ animationDelay: "0s" }} />
        <Star size={40} className="top-32 right-20 text-white opacity-50 shimmer" style={{ animationDelay: "1s" }} />
        <Star size={50} className="bottom-32 left-1/4 text-secondary opacity-60 shimmer" style={{ animationDelay: "0.5s" }} />
        <Star size={35} className="bottom-20 right-1/3 text-primary opacity-70 shimmer" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            <span className="text-white block tracking-tighter">KABINET</span>
            <span className="bg-gradient-to-r from-primary via-primary to-yellow-300 bg-clip-text text-transparent block tracking-tighter">
              INNOVARA
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mt-8 leading-relaxed">
            HMPSTI 2026
          </p>

          <button className="mt-12 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-yellow-400 transition transform hover:scale-105">
            Jelajahi Lebih Lanjut
          </button>
        </div>
      </section>

      {/* Evaluation Points Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="text-white">POIN EVALUASI</span>
              <br />
              <span className="text-primary">HMPSTI 2025</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {evaluationPoints.map((point, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-6 items-start">
                  <div
                    className={`${point.color} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg sm:text-2xl text-black group-hover:scale-110 transition transform`}
                  >
                    {point.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">{point.title}</h3>
                    <p className="text-white/70 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="filosofi" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Decor className="top-0 right-0 w-96 h-96 opacity-20 rotate-90" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12">
                <span className="text-white">FILOSOFI</span>
                <br />
                <span className="text-primary">INNOVARA</span>
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="bg-primary text-black px-6 py-2 inline-block font-black text-xl mb-4 rounded">
                    INNOVA
                  </div>
                  <p className="text-white/80 leading-relaxed text-lg">
                    diambil dari kata innovation atau inovasi yang berarti menciptakan hal baru yang beda dari
                    sebelumnya
                  </p>
                </div>

                <div>
                  <div className="bg-primary text-black px-6 py-2 inline-block font-black text-xl mb-4 rounded">
                    RA
                  </div>
                  <p className="text-white/80 leading-relaxed text-lg">
                    diambil dari kata era atau zaman. zaman yang dimana aspirasi didengar, Kolaborasi yang terbuka
                    dan Prestasi terbentuk melalui pembinaan yang ada
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 sm:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
              <Star size={80} className="top-10 right-10 text-primary shimmer" />
              <Star size={60} className="bottom-20 left-5 text-secondary shimmer" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="text-white">TIGA</span>
              <span className="text-primary ml-3">PILAR AKSI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Brain, title: "KOLABORASI", desc: "Membangun kerjasama yang solid" },
              { icon: Radio, title: "INOVASI", desc: "Menciptakan solusi baru dan kreatif" },
              { icon: Zap, title: "PRESTASI", desc: "Meraih kesuksesan bersama" },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              const colors = [
                { bg: "bg-primary", border: "border-primary" },
                { bg: "bg-secondary", border: "border-secondary" },
                { bg: "bg-primary", border: "border-primary" },
              ];
              const color = colors[idx];

              return (
                <div key={idx} className="group text-center">
                  <div className={`w-24 h-24 mx-auto mb-6 ${color.bg} rounded-full flex items-center justify-center group-hover:scale-110 transition transform`}>
                    <Icon className="w-12 h-12 text-black" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-white">{pillar.title}</h3>
                  <p className="text-white/70">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 px-4 py-8 bg-white/5 rounded-xl border border-white/10">
            <p className="text-center text-white/80 text-lg leading-relaxed">
              Kami berkomitmen untuk membangun <span className="text-primary font-bold">Himpunan Mahasiswa Teknologi Informasi</span> sebagai{" "}
              <span className="text-primary font-bold">Rumah Kolaborasi</span> yang menciptakan <span className="text-primary font-bold">Inovasi</span> untuk mewujudkan{" "}
              <span className="text-primary font-bold">Prestasi</span>
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="visi-misi" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Decor className="bottom-0 left-0 w-96 h-96 opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white px-8 py-3 inline-block font-black text-2xl text-black rounded mb-8">VISI</div>

              <p className="text-white/80 text-xl leading-relaxed">
                Mewujudkan <span className="text-primary font-bold">Himpunan Mahasiswa Teknologi Informasi</span> sebagai{" "}
                <span className="text-primary font-bold">Rumah Kolaborasi</span> yang menciptakan{" "}
                <span className="text-primary font-bold">Inovasi</span> untuk mewujudkan{" "}
                <span className="text-primary font-bold">Prestasi</span>
              </p>
            </div>

            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <div className="relative text-6xl sm:text-7xl font-black text-primary/30">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="bg-white px-8 py-3 inline-block font-black text-2xl text-black rounded mb-8">MISI</div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {missions.map((mission, idx) => (
                <div key={idx} className="group">
                  <div
                    className={`${mission.color} w-20 h-20 rounded-full flex items-center justify-center font-black text-2xl text-black mb-6 group-hover:scale-110 transition transform`}
                  >
                    {mission.number}
                  </div>
                  <p className="text-white/80 leading-relaxed group-hover:text-white transition">{mission.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Program Section */}
      <section id="program" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Decor className="top-0 right-0 w-96 h-96 opacity-20 rotate-180" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-16">
            <span className="text-white">PROGRAM</span>
            <br />
            <span className="text-primary">UNGGULAN</span>
            <br />
            <span className="bg-primary text-black px-4 inline-block mt-4">INNO CLASS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Pelatihan rutin <span className="text-primary font-bold">Hard Skill & Soft Skill</span> yang terbuka agar seluruh mahasiswa TI memiliki kesempatan yang sama untuk berkembang
              </p>

              <div className="bg-white/5 border border-primary/30 rounded-xl p-6">
                <h3 className="text-primary font-black text-lg mb-3">OUTPUT</h3>
                <p className="text-white/80 leading-relaxed">
                  Terwujudnya peningkatan kualitas <span className="text-primary font-bold">Soft skill dan Hard Skill</span> mahasiswa TI, sehingga melahirkan SDM yang berkompeten dan siap
                  bersaing
                </p>
              </div>
            </div>

            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
              <Star size={80} className="top-10 right-10 text-primary shimmer" />
              <Star size={60} className="bottom-20 left-10 text-secondary shimmer" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departemen" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black overflow-hidden">
        <Decor className="bottom-0 left-0 w-96 h-96 opacity-20 rotate-90" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="bg-white px-8 py-3 inline-block font-black text-2xl text-black rounded mb-8">DEPARTEMEN</div>
          </div>

          <DepartemenCarousel departments={departments} />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-primary font-black text-lg mb-4">KABINET INNOVARA</h3>
              <p className="text-white/60">Membangun masa depan melalui kolaborasi, inovasi, dan prestasi.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Navigasi</h4>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a href="#filosofi" className="hover:text-primary transition">
                    Filosofi
                  </a>
                </li>
                <li>
                  <a href="#visi-misi" className="hover:text-primary transition">
                    Visi & Misi
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-primary transition">
                    Program
                  </a>
                </li>
                <li>
                  <a href="#departemen" className="hover:text-primary transition">
                    Departemen
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Kontak</h4>
              <p className="text-white/60">HMPSTI 2025</p>
              <p className="text-white/60 text-sm mt-2">Institut Teknologi Sumatera</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2025 Kabinet INNOVARA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Decorative Elements */}
      <Star size={40} className="fixed top-1/4 right-10 text-primary opacity-20 pointer-events-none shimmer" />
      <Star size={30} className="fixed bottom-1/3 left-5 text-secondary opacity-20 pointer-events-none shimmer" style={{ animationDelay: "1s" }} />
    </div>
  );
}
