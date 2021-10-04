import '../Component/search-bar.js';
import '../Component/show-list.js';
import SumberData from '../data/data-source.js';


const main = () => {
    const pencarianAcara = document.querySelector("search-bar");
    const daftarAcara = document.querySelector("show-list");

    const ButtonSearchClicked = async () => {
        try{
            const result = await SumberData.searchShow(pencarianAcara.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = result => {
        daftarAcara.shows = result;
   };

    const fallbackResult = message => {
        daftarAcara.renderError(message);
    };

    pencarianAcara.clickEvent = ButtonSearchClicked;
};

export default main;