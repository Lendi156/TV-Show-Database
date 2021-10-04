import './show-item.js';
     
class ShowList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
   set shows(shows) {
       this._shows = shows;
       this.render();
   }
 
   renderError(message) {
       this.shadowDOM.innerHTML = `
       <style>
       .error {
           font-weight: lighter;
           -webkit-user-select: none;
           -moz-user-select: none;
           -ms-user-select: none;
           user-select: none;
           text-align: center;
           font-size: 90px;
           position:relative;
           vertical-align: middle;
       }
       div {
           height: 90%;
           vertical-align: middle;
           display: flex;
           align-items:center;
           justify-content:center;
           background-color: white;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
       }
       @media screen and (max-width: 550px) {
        .error {
            font-size: 45px;
            }
        }
      </style>`;
       this.shadowDOM.innerHTML += `
        <div>
            <h2 class="error">${message}</h2>
        </div>
       `;
   }
 
   render() {
       this.shadowDOM.innerHTML = `
      `
       ;
       this._shows.forEach(show1 => {
           const clubItemElement = document.createElement("show-item");
           clubItemElement.show = show1;
           this.shadowDOM.appendChild(clubItemElement);
       })
   }
}
 
customElements.define("show-list", ShowList);