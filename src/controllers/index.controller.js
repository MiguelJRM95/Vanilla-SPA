import viewHome from '../views/home.html';

export default () => {
   
    let template = document.createElement('div');
    template.classList = 'text-dark';
    template.innerHTML = viewHome;
    const btn = template.querySelector('#btnClick');
    let counter = template.querySelector('#counterP');
    let clicks = 0;
    btn.addEventListener('click', ()=>{
        clicks += 1;
        counter.innerHTML= clicks;
    })

    return template;
}