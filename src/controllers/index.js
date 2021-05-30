import homeViewController from './home.controller';
import postsViewController from './posts.controller';
import productsViewController from './products.controller';
import notFoundViewController from './404.controller'

const pages = {
    home: homeViewController,
    posts: postsViewController,
    products: productsViewController,
    notFound404: notFoundViewController
}

export {pages};