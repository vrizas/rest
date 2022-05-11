
const Error404 = {
  async render () {
    return `
        <section id="error">
          <figure>
              <img src="./images/others/404.jpg" />
              <figcaption><a href="https://www.freepik.com/vectors/computer-error">Computer error vector created by storyset - www.freepik.com</a></figcaption>
          </figure>
          <p>Halaman tidak ditemukan. <a href="#">Kembali ke halaman utama</a></p>
        </section>
      `
  },

  async afterRender () {

  }
}

export default Error404
