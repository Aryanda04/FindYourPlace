/* eslint-disable require-jsdoc */
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="bg-dark text-white p-5 mt-5">
    <div class="row">
      <div class="col-md-3">
        <h6>COSTUMER SERVICE</h6>
        <div id="bawahweb">
          </i><p1>09.00 - 17.00 (Senin - Minggu)</p1>
          <br>
          <p1>(+62) 82211188811</p1>
          <br>
          <p1>fyp@travel.com
          <hr color="white">
        </div>
        <h6>FOLLOW US</h6>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
      </div>

      <div class="col-md-3">
        <h6>INFORMASI</h6>
        <div id="bawahweb">
          <a href="#">Lokasi Toko</a>
          <br>
          <a href="#">Kebijakan Privasi</a>
          <br>
          <a href="#">Kebijakan Hak Cipta</a>
          <br>
          <a href="#">Syarat & Ketentuan Berlaku</a>
          <br>
          <a href="#">Aturan Pengguna</a>
        </div>
      </div>

      <div class="col-md-3">
        <h6>BANTUAN</h6>
        <div id="bawahweb">
          <a href="#">Pertanyaan Umum</a>
          <br>
          <a href="#">Cara Berbelanja</a>
          <br>
          <a href="#">Panduan Ukuran</a>
          <br>
          <a href="#">Ketetntuan & Cek Pengiriman</a>
          <br>
          <a href="#">Retur & Pengembalian Dana</a>
        </div>
      </div>

      <div class="col-md-3">
        <h6>METODE PEMBAYARAN</h6>
          <img src="pub/icon footer/Prima copy.png">
          <img src="Gambar/icon footer/atm bersama copy.png">
          <img src="Gambar/icon footer/Indomaret copy.png">
          <img src="Gambar/icon footer/GoPay copy.png">
          <br>
          <img src="Gambar/icon footer/Visa copy.png">
          <img src="Gambar/icon footer/OVO copy.png" width="50px" height="25px">
          <img src="Gambar/icon footer/GoPay copy.png">
          <img src="Gambar/icon footer/Akulaku copy.png">
        <hr color="white">
        <h6>BANK TRANSFER</h6>
          <img src="Gambar/icon footer/BCA copy.png">
          <img src="Gambar/icon footer/Mandiri copy.png">
        <hr color="white">
        <h6>JASA TOUR GUIDE</h6>
      </div>
    </div>
    <div id="bawahweb">
  <div class="copyright text-center text-white bg-dark p-2">
  <p>Copyright <i class="far fa-copyright"></i>2022, <a href="Index.html">FIND YOUR PLACE</a> All Rights Reserved.</p>
</div>
</div>
      `;
  }
}

customElements.define('custom-footer', CustomFooter);
