
function customRender(reactElement,container){
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)*/
    //Even though it is the correct code but not the best approach to set each attribute manually so we will use a loop based approach.

    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to open google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)