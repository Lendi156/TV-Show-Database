class ShowItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set show(show) {
        this._show = show;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: flex;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                overflow: hidden;
                padding: 10px;
                background-color: white;
            }
            
            .poster {
                flex-basis: 30%;
                width: 100%;
                max-height: 300px;
                object-fit: contain;
                object-position: left;
            }
            
            .show-info {
                flex-basis: 90%;
                padding: 24px;
            }
            
            .show-info > h2 {
                font-weight: lighter;
            }
            
            .show-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }

            .show-info > p:hover {
                -webkit-line-clamp: 50;  
            }

            @media screen and (max-width: 550px) {
                .show-info {
                    flex-basis: 70%;
                    padding: 24px;
                }
            }

            </style>

            <img class="poster" src="https://image.tmdb.org/t/p/w500${this._show.poster_path}" alt="Fan Art">
            <div class="show-info">
                <h2>${this._show.name}</h2>
                <p>${this._show.overview}</p>
            </div>`;
    }
 }
  
 customElements.define("show-item", ShowItem);