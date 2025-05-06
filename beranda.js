// Data dummy cerita
const stories = [
    {
      judul: "Melangkah di Tengah Sepi",
      lokasi: "Sempaja",
      isi: "Aku merasa sangat sendiri akhir-akhir ini. Tidak ada yang benar-benar memahami...",
    },
    {
      judul: "Harapan Baru dari Jalan Juanda",
      lokasi: "Jalan Juanda",
      isi: "Pagi itu matahari terasa hangat, dan aku merasa semuanya akan baik-baik saja...",
    },
    {
      judul: "Cerita dari Jalan Ahmad Yani",
      lokasi: "Jalan Ahmad Yani",
      isi: "Waktu kecil aku sering bermain di sini, tapi semuanya berubah saat aku dewasa...",
    },
    {
      judul: "Kehilangan di Sungai Dama",
      lokasi: "Sungai Dama",
      isi: "Aku kehilangan seseorang yang sangat berarti di tempat ini, dan rasanya sulit...",
    }
  ];
  
  // Elemen
  const sidebar = document.getElementById('sidebar');
  const toggleSidebarBtn = document.getElementById('toggleSidebar');
  const closeSidebarBtn = document.getElementById('closeSidebar');
  const storyContainer = document.getElementById('storyContainer');
  const lokasiFilter = document.getElementById('filterLokasi');
  const noStoriesMsg = document.getElementById('noStoriesMessage');
  
  // Sidebar toggle
  toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
  });
  
  closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.add('hidden');
  });
  
  // Render cerita
  function renderStories(filteredStories) {
    storyContainer.innerHTML = '';
    if (filteredStories.length === 0) {
      noStoriesMsg.classList.remove('hidden');
    } else {
      noStoriesMsg.classList.add('hidden');
      filteredStories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
          <h3>${story.judul}</h3>
          <p><strong>Lokasi:</strong> ${story.lokasi}</p>
          <p>${story.isi.substring(0, 80)}...</p>
          <a href="#" class="read-more">Baca Selengkapnya</a>
        `;
        storyContainer.appendChild(card);
      });
    }
  }
  
  // Filter berdasarkan lokasi
  lokasiFilter.addEventListener('change', () => {
    const lokasi = lokasiFilter.value;
    const filtered = lokasi ? stories.filter(s => s.lokasi === lokasi) : stories;
    renderStories(filtered);
  });
  
  // Load awal
  renderStories(stories);

  