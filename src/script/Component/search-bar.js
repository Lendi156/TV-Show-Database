class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent (event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#search").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            border-style: none; 
            padding: 50px 16px 16px 16px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            position: relative;
            background-color: whitesmoke;
        }
        .pencarian {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
            border-radius: 40px;
        }

        
        .pencarian > input {
            flex: 1;
            padding: 16px 0 16px 16px;
            width: 100%;
            min-width: 130px;
            border-radius: 40px;
            font-weight: bold;
            border:none;
        }
        
        .pencarian > input:focus {
            outline: 0;
        }
        
        .pencarian > input:focus::placeholder {
            font-weight: bold;
        }
        
        .pencarian >  input::placeholder {
            color: lightslategray;;
            font-weight: normal;
        }
        
        .pencarian > button {
            cursor: pointer;
            font-size: 14px;
            padding: 0 16px;
            margin-left: auto;
            background-color: lightslategray;;
            color: white;
            border: 0;
            text-transform: uppercase;
            border-radius: 30px;
            position: relative;
            z-index: 1;
            min-width: 80px;
        }

        img {
            object-fit:contain;
            width:100%;
            object-position: -90px;
        }

        @media screen and (max-width: 766px) {
            img {
                display: none;
            }
            .pencarian > input {
                width: 100%;
            }
            :host {
                flex: none;
                padding: 16px 16px 16px 16px;
            }   
        }

        </style>
        <div id="pencarian" class="pencarian">
            <input placeholder="Search TV Show" id="search" type="search">
            <button id="tombolPencarian" type="submit">Search</button>
        </div>
        <img src="./Assets/remote.png" alt="">
        `;
        
        this.shadowDOM.querySelector("#tombolPencarian").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);