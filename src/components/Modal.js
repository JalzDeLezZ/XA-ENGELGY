class Modal extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this._render();
      this._attachEventHandlers();
    }
  
    static get observedAttributes() {
      return ["visible", "name", "lastname", "email", "avatar"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "name" && this.shadowRoot) {
        this.shadowRoot.querySelector(".name").textContent = newValue;
      }
      if (name === "lastname" && this.shadowRoot) {
        this.shadowRoot.querySelector(".lastname").textContent = newValue;
      }
      if (name === "email" && this.shadowRoot) {
        this.shadowRoot.querySelector(".email").textContent = newValue;
      }
      if (name === "avatar" && this.shadowRoot) {
          this.shadowRoot.querySelector(".avatar").src=newValue;
        }
      if (name === "visible" && this.shadowRoot) {
        if (newValue === null) {
          this.shadowRoot.querySelector(".wrapper").classList.remove("visible");
        } else {
          this.shadowRoot.querySelector(".wrapper").classList.add("visible");
        }
      }
    }
  
    _attachEventHandlers() {
      const cancelButton = this.shadowRoot.querySelector(".cancel");
      cancelButton.addEventListener("click", (e) => {
        this.dispatchEvent(new CustomEvent("cancel"));
        this.removeAttribute("visible");
      });
    }
    _render() {
      const wrapperClass = this.visible ? "wrapper visible" : "wrapper";
      const container = document.createElement("div");
      container.innerHTML = `
          <style>
            .wrapper {
              position: fixed;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: rgba(0,0,0,0.85);
              opacity: 0;
              visibility: hidden;
              transform: scale(1.1);
              transition: visibility 0s linear .25s,opacity .25s 0s,transform .25s;
              z-index: 1;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .visible {
              opacity: 1;
              visibility: visible;
              transform: scale(1);
              transition: visibility 0s linear 0s,opacity .25s 0s,transform .25s;
            }
            .modal{
              background: white;
              width: 90%;
              max-width:600px;
              box-shadow: 0px 0px 6px 1px rgb(251 251 251);
              height: 70vh;
              position: relative;
              border-radius: 20px;
              margin: 0 auto;
              margin-top: 3%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .cancel{
                position: absolute;
                top: 0;
                right: 0;
                border-radius: 10px 28px 10px 10px;
                background: red;
                color: white;
                box-shadow: inherit;
                border: none;
                outline: none;
            }
            .avatar{
                border-radius: 50%;
            }
          </style>
          
          <div class='${wrapperClass}'>
            <div class='modal'>
              <div class="modal_decoration"></div>
              <div class='content'>
                  <h2 class='name'>${this.name}</h2>
                  <h3 class='lastname'>${this.lastname}</h3>
                  <h4 class='email'>${this.email}</h4>
              </div>
              <img class='avatar' src=""/>
              <button class="cancel" >x</button>
            </div>
          </div>`;
  
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(container);
    }
  }
  window.customElements.define("modal-x", Modal);
  