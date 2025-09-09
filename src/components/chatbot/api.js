// Fungsi utama AI chatbot sederhana
export const getAIResponse = (userMessage) => {
  const message = userMessage.toLowerCase().trim();

  // --- Basis data jawaban EN (bot & owner) ---
  const englishSelfKnowledgeBase = [
    {
      keywords: ["who are you", "your name", "what's your name", "who's amoraaa"],
      response: "My name is Amoraaa. I'm a virtual assistant designed to help you navigate this portfolio.",
    },
    {
      keywords: ["what do you do", "what is your purpose", "your purpose"],
      response: "My purpose is to provide relevant and efficient information about the owner of this portfolio, based on the data I have learned.",
    },
  ];
  const englishOwnerKnowledgeBase = [
    {
      keywords: ["who is he", "what's his name", "portfolio owner", "owner's name", "owner"],
      response: "The owner of this portfolio is named Topan Bagus Prasetyo. He is a computer science student.",
    },
    {
      keywords: ["college", "university", "education", "school", "graduated"],
      response: "He is an active 5th-semester student in the Computer Science program at Ganesha University of Education, with a GPA of 3.68.",
    },
    {
      keywords: ["job", "work", "employed", "status"],
      response: "Currently, he works as a Student Employee at Ganesha University of Education. Previously, he was also a Technical Consultant at PT. Rajawali Adikarya.",
    },
    {
      keywords: ["skills", "expertise", "programming", "languages", "knows"],
      response: "He has expertise in programming languages like SQL, Javascript, PHP, Python, and Java. He is also proficient with frameworks such as Vue, Bootstrap, Laravel, and ReactJS.",
    },
    {
      keywords: ["projects", "what have you worked on"],
      response: "Some of the projects he has worked on can be seen on the projects page. This portfolio is one of them.",
    },
    {
      keywords: ["work experience", "job experience"],
      response: "His work experience includes being a Technical Consultant at PT. Rajawali Adikarya and a Graphic Designer at Fibo Sports. He is also active in student organizations.",
    },
    {
      keywords: ["contact", "email", "phone", "reach out"],
      response: "You can contact the portfolio owner via email at topan.bgs197@gmail.com. You can also visit his LinkedIn profile at linkedin.com/in/topanbagusprasetyo.",
    },
    {
      keywords: ["language", "speaks"],
      response: "He is fluent in Indonesian and has intermediate English skills.",
    },
    {
      keywords: ["personality", "character", "traits"],
      response: "His traits include being responsible, adaptable, creative, proactive, and communicative.",
    },
  ];

  // --- Basis data jawaban ID (bot & owner) ---
  const indonesianSelfKnowledgeBase = [
    {
      keywords: ["siapa kamu", "nama kamu", "namamu"],
      response: "Nama saya Amoraaa. Saya adalah asisten virtual yang dirancang untuk membantu Anda menavigasi portofolio ini.",
    },
    {
      keywords: ["kamu ngapain", "apa tujuanmu", "tujuanmu"],
      response: "Tujuan saya adalah untuk memberikan informasi yang relevan dan efisien tentang pemilik portofolio ini, berdasarkan data yang telah saya pelajari.",
    },
    {
      keywords: ["kamu siapa", "kamu apa"],
      response: "Saya adalah Amoraaa, sebuah program AI yang dibuat untuk memberikan informasi seputar portofolio ini.",
    },
  ];
  const indonesianOwnerKnowledgeBase = [
    {
      keywords: ["siapa dia", "namanya", "pemilik website", "nama pemilik", "pemilik"],
      response: "Pemilik portofolio ini bernama Topan Bagus Prasetyo. Seorang mahasiswa aktif program studi Ilmu Komputer",
    },
    {
      keywords: ["kuliah", "sekolah", "pendidikan", "lulus"],
      response: "Dia adalah mahasiswa aktif semester 5 program studi Ilmu Komputer, Universitas Pendidikan Ganesha, dengan IPK 3.68.",
    },
    {
      keywords: ["pekerjaan", "kerja", "bekerja", "status", "menganggur"],
      response: "Saat ini, dia bekerja sebagai Student Employee di Universitas Pendidikan Ganesha. Sebelumnya, dia juga pernah menjadi Technical Consultant di PT. Rajawali Adikarya.",
    },
    {
      keywords: ["keahlian", "ahli", "skill", "mampu", "programming", "bahasa"],
      response: "Dia memiliki keahlian dalam pemrograman dengan bahasa SQL, Javascript, PHP, Python, dan Java. Dia juga menguasai framework seperti Vue, Bootstrap, Laravel, dan ReactJS.",
    },
    {
      keywords: ["proyek", "project", "kerjakan"],
      response: "Beberapa proyek yang pernah dia kerjakan bisa dilihat di halaman proyek. Salah satunya adalah portofolio ini.",
    },
    {
      keywords: ["pengalaman kerja", "pengalaman pekerjaan", "pengalaman", "job"],
      response: "Pengalaman kerjanya meliputi Technical Consultant di PT. Rajawali Adikarya dan Graphic Designer di Fibo Sports. Dia juga aktif dalam organisasi mahasiswa.",
    },
    {
      keywords: ["kontak", "email", "telepon", "hubungi"],
      response: "Anda bisa menghubungi pemilik portofolio melalui email di topan.bgs197@gmail.com. Anda juga bisa mengunjungi profil LinkedIn-nya di linkedin.com/in/topanbagusprasetyo.",
    },
    {
      keywords: ["bahasa", "language"],
      response: "Dia fasih berbahasa Indonesia dan memiliki kemampuan Bahasa Inggris tingkat menengah.",
    },
    {
      keywords: ["kepribadian", "karakter", "sifat"],
      response: "Sifatnya termasuk bertanggung jawab, adaptif, kreatif, proaktif, dan komunikatif.",
    },
  ];

  // Cari jawaban di basis data
  const findResponse = (knowledgeBase) => {
    for (const item of knowledgeBase) {
      if (item.keywords.some(keyword => message.includes(keyword))) {
        return item.response;
      }
    }
    return null;
  };

  // Deteksi bahasa (EN vs ID)
  const isEnglish = (msg) => {
    const englishTestKeywords = ["who", "what", "how", "when", "where", "my", "your", "name", "job", "skill", "contact", "about"];
    return englishTestKeywords.some(keyword => msg.includes(keyword));
  };

  if (isEnglish(message)) {
    return findResponse(englishSelfKnowledgeBase) ||
           findResponse(englishOwnerKnowledgeBase) ||
           "I'm sorry, I don't understand your question. Please try asking something else about this portfolio.";
  }

  const indonesianResponse = findResponse(indonesianSelfKnowledgeBase) || findResponse(indonesianOwnerKnowledgeBase);
  if (indonesianResponse) return indonesianResponse;

  // Respons out-of-context
  const outOfContextKeywords = [
    "cerita", "film", "hobi", "makanan", "minuman", "travel", "jalan-jalan", "musik", "game", "favorit", "suka",
    "apa kabar", "kamu suka", "kamu hobinya", "story", "movie", "hobbies", "food", "drinks", "traveling", "music", "games", "favorite", "like", "how are you"
  ];
  if (outOfContextKeywords.some(keyword => message.includes(keyword))) {
    return "Maaf, saya hanya bisa menjawab pertanyaan seputar portofolio ini. Jika Anda ingin bertanya tentang pemiliknya, silakan ajukan pertanyaan lain. / Sorry, I can only answer questions about this portfolio. If you want to ask about its owner, please ask another question.";
  }

  // Default
  return "Maaf, saya tidak mengerti pertanyaan Anda. Coba tanyakan hal lain seputar portofolio ini. / Sorry, I don't understand your question. Please try asking something else about this portfolio.";
};