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
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                overflow: hidden;
                padding: 10px;
                background-color: white;
            }
            
            .poster {
                height: 320px;
                object-fit: contain;
                object-position: left;
            }
            
            .show-info {
                display: flex;
                width: 100%;
            }
            
            .show-info > h2 {
                padding: 0 0 0 16px;
                font-size: 35px;
                line-height: 125%;
            }
            
            .overview {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5; /* number of lines to show */
            }

            .overview:hover {
                -webkit-line-clamp: unset;  
            }

            @media screen and (max-width: 550px) {
                .poster {
                    height: 220px;
                }
                .overview { 
                    font-size: 20px;
                }
                .show-info > h2 {
                    padding: 0 0 0 8px;
                    font-size: 25px;
                }
            }

            @media screen and (max-width: 400px) {
                .poster {
                    height: 170px;
                }
                .overview {
                    font-size: 14px;
                }
                .show-info > h2 {
                    font-size: 18px;
                }
            }


            </style>
            

            <div class="show-info">
                <img class="poster" src="https://image.tmdb.org/t/p/w500${this._show.poster_path}" alt="Fan Art">
                <h2>${this._show.name}</h2>
            </div>
            <p class="overview">${this._show.overview}</p>`;
    }
 }
  
 customElements.define("show-item", ShowItem);