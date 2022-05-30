/* eslint-disable no-tabs */
class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="jumbotron">
		<div class="container">
			<h1 class="title">Make Money Only From Home</h1>
			<p class="text">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Quibusdam cupiditate obcaecati in eveniet tempore?</p>
			<div class="content">

				<ul class="features">
					<li><span class="icon"><i class="fas fa-check"></i></span> Lorem, ipsum, dolor.</li>
					<li><span class="icon"><i class="fas fa-check"></i></span> Lorem, ipsum dolor.</li>
					<li><span class="icon"><i class="fas fa-check"></i></span> Lorem, ipsum, dolor.</li>
				</ul>
			</div>
		</div>
		<svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L80,160C160,192,320,256,480,250.7C640,245,800,171,960,154.7C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
	</section>
        `;
  }
}
customElements.define('custom-jumbotron', HeroContent);
