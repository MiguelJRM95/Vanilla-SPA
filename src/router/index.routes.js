import {pages} from '../controllers/index';
let content = document.getElementById('root')
const router = async (route) =>{
    if(content.hasChildNodes){
        content.innerHTML = '';
    }
    switch (route) {
        case '#/':
            return content.appendChild(pages.home());
        case '#/products':
            return content.appendChild(pages.products());
        case '#/posts':
            return content.appendChild(await pages.posts());
        default:
            return content.appendChild(pages.notFound404());
    }
}

export {router};