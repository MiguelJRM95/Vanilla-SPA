import view404 from '../views/404.html';

export default () => {
    const template = document.createElement('div');
    template.innerHTML = view404;

    return template;
}