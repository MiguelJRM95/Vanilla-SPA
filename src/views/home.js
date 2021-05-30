
export default () => {
    const homeView = `
        <h1>Hello World</h1>
        <p>Vanila SPA with JS</p>
    `;
    
    let template = document.createElement('div');
    template.innerHTML = homeView;

    return template;
}