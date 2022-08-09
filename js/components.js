class SlideR extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var image = this.attributes.src.value
        var text = this.attributes.text.value
        var pillar = this.attributes.pillar.value
        var desc = this.attributes.desc.value

        this.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-lg-8 wide-col-laptop">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="about-contentbox">
                                <div class="animate" data-animate="fadeInUp">
                                    <span>${text}</span>
                                    <h2>${pillar}</h2>
                                    <p>${desc}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <figure class="about-img animate" data-animate="fadeInUp"><img
                                    src=${image} class="rounded" alt="" loading="lazy">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
    `;
    }
}

customElements.define('slide-component-r', SlideR);

class SlideL extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var image = this.attributes.src.value
        var text = this.attributes.text.value
        var pillar = this.attributes.pillar.value
        var desc = this.attributes.desc.value

        this.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-lg-8 wide-col-laptop">
                    <div class="row">
                        <div class="col-md-6">
                            <figure class="about-img animate" data-animate="fadeInUp"><img
                                    src=${image} class="rounded" alt="" loading="lazy">
                            </figure>
                        </div>
                        <div class="col-md-6">
                            <div class="about-contentbox">
                                <div class="animate" data-animate="fadeInUp">
                                    <span>${text}</span>
                                    <h2>${pillar}</h2>
                                    <p>${desc}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    `;
    }
}

customElements.define('slide-component-l', SlideL);