import getHash from "../utils/getHash.js"
import resolveRoutes from "../utils/resolveRoutes";
import menu from "../utils/getProduct"
import nada from "../components/nada";
const routes = {
    "#specialty":nada,
    '/:id': menu
};
const router = async () => {
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : nada;
    const content = document.getElementById("main-container")
    content.parentNode 
    content.removeChild(content.firstChild || null)
    content.innerHTML = await render()
    const removesede = document.getElementById("menu-selected")
    removesede.innerHTML = nada
}
export default router;