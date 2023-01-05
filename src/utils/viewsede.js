import getHash from "../utils/getHash.js"
import resolveRoutes from "../utils/resolveRoutes";
import menu from "../utils/getProduct"
import nada from "../components/nada";
const routes = {
    "#specialty":nada,
    '/:id': menu
};
const viewsede = async () => {
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : nada;
    const content = document.getElementById("menu-selected")
    content.parentNode 
    content.removeChild(content.firstChild || null)
    content.innerHTML = await render()
}
export default viewsede;