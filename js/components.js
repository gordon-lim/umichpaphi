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
        <div class="section-inner">
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
        <div class="section-inner">
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
        </div>
    `;
    }
}

customElements.define('slide-component-l', SlideL);

class Brothers extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var src1 = this.attributes.src1.value
        var src2 = this.attributes.src2.value
        var src3 = this.attributes.src3.value
        var src4 = this.attributes.src4.value
        var src5 = this.attributes.src5.value
        var src6 = this.attributes.src6.value

        var bro1 = this.attributes.bro1.value
        var bro2 = this.attributes.bro2.value
        var bro3 = this.attributes.bro3.value
        var bro4 = this.attributes.bro4.value
        var bro5 = this.attributes.bro5.value
        var bro6 = this.attributes.bro6.value

        this.innerHTML = `
        <div class="section-inner">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-sm-4">
                            <h2 class="font_2"
                            style="font-size:32px; line-height:0.8em; margin=0px;">
                            <span class="color_14" style=" font-size:18px; font-family:open sans,sans-serif;">
                            ${bro1}</span>
                            </h2>
                            <figure class="about-img animate" data-animate="fadeInUp"><img
                                    src=${src1} class="rounded" alt="" loading="lazy">
                            </figure>
                            
                        </div>
                        <div class="col-sm-4">
                        <h2 class="font_2"
                            style="font-size:32px; line-height:0.8em; margin=0px;">
                            <span class="color_14" style=" font-size:18px; font-family:open sans,sans-serif;">
                            ${bro2}</span>
                            </h2>
                            <figure class="about-img animate" data-animate="fadeInUp"><img
                                    src=${src2} class="rounded" alt="" loading="lazy">
                            </figure>
                        </div>
                        <div class="col-sm-4">
                        <h2 class="font_2"
                            style="font-size:32px; line-height:0.8em; margin=0px;">
                            <span class="color_14" style=" font-size:18px; font-family:open sans,sans-serif;">
                            ${bro3}</span>
                            </h2>
                            <figure class="about-img animate" data-animate="fadeInUp"><img
                                    src=${src3} class="rounded" alt="" loading="lazy">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
                        <div class="row justify-content-center">
                <div class="col-md-6">
                                           <div class="row">
    <div class="col-sm-4">
    <h2 class="font_2"
                            style="font-size:32px; line-height:0.8em; margin=0px;">
                            <span class="color_14" style=" font-size:18px; font-family:open sans,sans-serif;">
                            ${bro4}</span>
                            </h2>
        <figure class="about-img animate" data-animate="fadeInUp"><img
            src=${src4} class="rounded" alt="" loading="lazy">
        </figure>
    </div>
    <div class="col-sm-4">
    <h2 class="font_2"
                            style="font-size:32px; line-height:0.8em; margin=0px;">
                            <span class="color_14" style=" font-size:18px; font-family:open sans,sans-serif;">
                            ${bro5}</span>
                            </h2>
        <figure class="about-img animate" data-animate="fadeInUp"><img
            src=${src5} class="rounded" alt="" loading="lazy">
        </figure>
    </div>
    <div class="col-sm-4">
    <h2 class="font_2"
                            style="font-size:32px; line-height:0.8em; margin=0px;">
                            <span class="color_14" style=" font-size:18px; font-family:open sans,sans-serif;">
                            ${bro6}</span>
                            </h2>
        <figure class="about-img animate" data-animate="fadeInUp"><img
            src=${src6} class="rounded" alt="" loading="lazy">
        </figure>
    </div>
</div>
                </div>
            </div>
        </div>
    `;
    }

}

customElements.define('bros-component', Brothers);