import viewHome from '../views/home.html';

export default () => {
   
    let template = document.createElement('div');
    template.classList = 'text-danger';
    template.innerHTML = viewHome;

    return template;
}