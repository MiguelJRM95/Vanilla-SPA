import Home from '../controllers/index.controller';
let content = document.getElementById('root')
const router = (route) =>{
    if(content.hasChildNodes){
        content.innerHTML = '';
    }
    switch (route) {
        case '#/':
            return content.appendChild(Home());
        case '#/products':
            return console.log('products');
        case '#/posts':
            return console.log('posts');
        default:
            return console.log('404 route doesn\'t exists');
    }
}

export {router};