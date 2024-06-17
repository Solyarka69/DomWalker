function DomWalker(node){

    if (node.nodeType == Node.ELEMENT_NODE){
        console.log(node.tagName);
        node = node.firstChild;
        
        while (node){
            DomWalker(node);
            node = node.nextSibling;
        }
    }
    
}

console.log('------------------------');

let walk = document.querySelector('html');
DomWalker(walk);

console.log('------------------------');