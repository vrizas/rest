
const Error = {
  async render () {
    return `
      <section id="error">
        <figure>
            <img src="./images/others/error.jpg" />
            <figcaption><a href='https://www.freepik.com/vectors/graphic-design'>Graphic design vector created by storyset - www.freepik.com</a></figcaption>
        </figure>
        <p>Terdapat kesalahan sistem, silahkan coba lagi nanti.</p>
      </section>
    `
  },

  async afterRender () {

  }
}

export default Error
