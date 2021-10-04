class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color: lightslategray;;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            position: relative;
            z-index: 1;
        }
        div { 
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        h2 {
            padding: 20px 20px 20px 16px;
        }
        img {
            height: 40px;
            margin-left: 16px;
        }
        @media screen and (max-width: 550px) {
            img {
                height: 30px;
                margin-left: 16px;
            } 
            h2 {
                padding: 16px 16px 16px 8px;
                font-size: 1em;
            }
        }
        </style>
        <div>
            <img src="./Assets/001-television.png" alt="">
            <h2>TV Show Database</h2>
        </div>
        `;
        
    }
}

customElements.define("app-bar", AppBar);