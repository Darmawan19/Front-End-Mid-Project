Baik, berikut adalah kodingan JAVASCRIPT untuk membuat website PuddingFest yang diinginkan oleh Pak Raja:

```javascript
// Landing Page
const navbar = document.createElement('nav');
navbar.innerHTML = `
  <a href="#">PuddingFest</a>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#event">Event</a></li>
    <li><a href="#contact">Contact Us</a></li>
  </ul>
`;
document.body.appendChild(navbar);

const landingPage = document.createElement('div');
landingPage.innerHTML = `
  <h1>Welcome to PuddingFest!</h1>
  <p>PuddingFest merupakan sebuah event tahunan garapan PT Meksiko yang akan memamerkan beberapa teknologi-teknologi terbaru dari berbagai perusahaan ternama di Indonesia. Event ini akan diselenggarakan secara online dan terdiri dari beberapa rangkaian acara untuk setiap perusahaan yang akan melakukan presentasi.</p>
`;
document.body.appendChild(landingPage);

// Event Page
const eventPage = document.createElement('div');
eventPage.id = 'event';
eventPage.innerHTML = `
  <h2>Event</h2>
  <p>Berikut adalah rangkaian acara PuddingFest:</p>
  <ul>
    <li>Presentasi Perusahaan A - Penjelasan singkat tentang Perusahaan A</li>
    <li>Presentasi Perusahaan B - Penjelasan singkat tentang Perusahaan B</li>
    <li>Presentasi Perusahaan C - Penjelasan singkat tentang Perusahaan C</li>
  </ul>

  <h3>Timeline</h3>
  <p>Berikut adalah timeline dari seluruh rangkaian acara PuddingFest:</p>
  <ol>
    <li>Presentasi Perusahaan A - Hari Pertama, Jam 09.00-10.00 WIB</li>
    <li>Presentasi Perusahaan B - Hari Pertama, Jam 10.00-11.00 WIB</li>
    <li>Presentasi Perusahaan C - Hari Pertama, Jam 11.00-12.00 WIB</li>
    <li>Presentasi Perusahaan A - Hari Kedua, Jam 09.00-10.00 WIB</li>
    <li>Presentasi Perusahaan B - Hari Kedua, Jam 10.00-11.00 WIB</li>
    <li>Presentasi Perusahaan C - Hari Kedua, Jam 11.00-12.00 WIB</li>
  </ol>

  <h3>Form Registrasi</h3>
  <form id="registration-form">
    <label for="name">Nama:</label><br />
    <input type="text" id="name" name="name" required minlength="3" /><br />

    <label for="email">Email:</label><br />
    <input type="email" id="email" name="email" required /><br />

    <label for="phone-number">Nomor Telepon:</label><br />
    <input type="tel" id="phone-number" name="phone-number" required pattern="[0-9]{12}" /><br />

    <label for="event">Event yang akan diikuti:</label><br />
    <select id="event" name="event" required>
      <option value="">Pilih Event</option>
      <option value="Perusahaan A">Perusahaan A</option>
      <option value="Perusahaan B">Perusahaan B</option>
      <option value="Perusahaan C">Perusahaan C</option>
    </select><br />

    <button type="submit">Daftar Sekarang!</button>
  </form>

  <!-- Carousel -->
`;

// Contact Us Page
const contactUsPage = document.createElement('div');
contactUsPage.id = 'contact';
contactUsPage.innerHTML = `
  <h2>Contact Us</h2>

  <!-- Data nomor telepon serta email dari penyelenggara -->
`;
document.body.appendChild(contactUsPage);