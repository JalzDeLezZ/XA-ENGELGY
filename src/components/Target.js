class Target extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return [
      "data_firstName",
      "data_lastName",
      "data_email",
      "data_image",
      "data_identity",
      "data_fullName",
    ];
  }
  attributeChangedCallback(attribute, prev_value, next_value) {
    if (attribute === "data_firstName") {
      this.data_firstName = next_value;
      console.log("name ", next_value);
    }
    if (attribute === "data_lastName") {
      this.data_lastName = next_value;
    }
    if (attribute === "data_email") {
      this.data_email = next_value;
    }
    if (attribute === "data_image") {
      this.data_image = next_value;
    }
    if (attribute === "data_identity") {
      this.data_identity = next_value;
    }
    if (attribute === "data_fullName") {
      this.data_fullName = next_value;
    }
  }

  getContainer() {
    console.log(this.data);
    const container = document.createElement("section");
    container.innerHTML = `
              <div id="${this.data_identity}"  >
              <img src=${this.data_image}>
                <h2 class="fullname"><slot name="fullName"></slot></h2>
                <p>${this.data_email}</p>
              </div>
              ${this.getStyles()}
            `;
    return container;
  }
  getStyles() {
    return `
            <style>
                section{
                  width: 120px
                  height: 30vh;
                  border-radius: 10px;
                  border: 2px solid white;
                  padding: 10px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  align-items: center;
                  backdrop-filter: blur(6px);
                  padding: 16px;
                  font-size: 1.2rem;
                  color:white;
                }
                img{
                  width: 100px;
                  height: 100px;
                }
            </style>
            `;
  }
  render() {
    this.shadowRoot.appendChild(this.getContainer());
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("user-target", Target);

/* 
  :host{
              --primary-color: rgba(35,46,209,1);
              --secondary-color: rgba(16,29,66,1);
              --tertiary-color: rgba(101, 100, 219, 1);
              --quaternary-color:#89D2DC;
            }
              .user-card{
                  width: 250px;
                  height: 270px;
                  background: var(--secondary-color);
                  background: linear-gradient(45deg, var(--secondary-color) 0%, var(--primary-color) 100%);
                  margin: 15px;
                  padding: 20px;
                  padding-top: 20px;
                  box-sizing:border-box;
                  overflow: hidden;
                  display:flex;
                  flex-wrap:wrap;
                  justify-content: center;
                  cursor: pointer;
                  border-radius: 10px;
                  position:relative;
                  box-shadow: 0px 0px 6px 1px var(--tertiary-color);
              }
  
              .user-card .user-card__decoration{
                  width:15px;
                  height:15px;
                  border-radius:50%;
                  position: absolute;
                  background: #0D1317;
                  top: 5%;
                  right: 5%;
                  border: 3px solid rgba(255,255,255,0.5);
              }
              .user-card .user-card__content{
                  width:100%;
                  text-align: center;
                  font-family: "mulish";
                  margin-top: 5%;
                  padding: 3%;
                  background: rgba(0,0,0,0.5);
                  border-radius:10px;
              }
              .user-card .user-card__content h2{
                  width:100%;
                  color: white;
                  font-size: 1.2rem;
                  letter-spacing: 2px;
                  margin:0;
                  opacity: 0;
                  
              }
              .user-card .user-card__content h3{
                  width:100%;
                  font-size: 1rem;
                  color: var(--quaternary-color);
                  margin:0;
                  opacity: 0;
                  margin-botton:50%;
              }
              .user-card .user-card__content a{
                  width:100%;
                  text-decoration: none;
                  font-size: 0.87rem;
                  color: white;
                  font-weight:200;
                  cursor: pointer;
                  margin.top: 2%;
              }
              .user-card img{
                  width: 220px;
                  height: 220px;
                  border-radius: 50%;
                  transition: all 0.8s;
              }
  
              .user-card:hover{
                  padding-top: 20px;
              }
              .user-card:hover img{
                  width: 150px;
                  height: 150px;
                  border-radius: 50%;  
              }
              .user-card:hover h2{
                  opacity: 1;
              }
              .user-card:hover h3{
                  opacity: 1;
              }
              @media only screen and (max-width:950px){
                .user-card img{
                  width: 150px;
                  height: 150px;
                }
                .user-card .user-card__content h2{
                    opacity:1;
                }
                .user-card .user-card__content h3{
                    opacity:1;
                }
  */
