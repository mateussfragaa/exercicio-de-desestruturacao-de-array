const elementos = [
    {tag: 'h2', texto: 'Frase 1'},
    {tag: 'h3', texto: 'Frase 2'},
    {tag: 'h4', texto: 'Frase 3'},
    {tag: 'h5', texto: 'Frase 4'}
];

const container = document.querySelector('#container');
const div = document.createElement('div');


for (const { tag, texto } of elementos){
    const elemento = document.createElement(tag);
    elemento.innerHTML = texto;
    div.appendChild(elemento);
};

container.appendChild(div);