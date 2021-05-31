import viewPosts from '../views/posts.html';

const getPosts = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   return await response.json();
}

export default async () =>{
    const template = document.createElement('div');
    template.innerHTML = viewPosts;
    const postElement = template.querySelector('#post');
    const postNumber = template.querySelector('#postCount');
    let counter = 0;
    const posts = await getPosts();
    posts.forEach(post => {
        counter += 1;
        postNumber.innerHTML= counter;
        postElement.innerHTML += `
            <li class="list-group border-primary bg-white text-dark m-1 p-3 shadow">
                <h5>${post.title}</h5>
                <p>${post.body}</p>
            </li>
        `
    });
    return template;
}