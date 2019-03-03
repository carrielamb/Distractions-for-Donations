var tff;
//localStorage.badwebsite = true;
var web_stat;
function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
        	html += ' part1 ';
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
        	html += ' part2 ';
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
        	html += ' part3 ';
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
        	html += ' part4 ';
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
        	html += ' part5 ';
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    console.log(html)
    if(html.includes('vcccd') ||html.includes('.edu')) {
        chrome.runtime.sendMessage({
            action: "websitestatus",
            source: false
        });
        console.log('good website')
        web_stat = false;
        console.log(web_stat);
        return 'This is a good website:)';
    }
    else {
        chrome.runtime.sendMessage({
            action: "websitestatus",
            source: true
        });
        console.log('not good website')
        web_stat = true;
        console.log(web_stat);
        return 'This is not a good website:(';
    }

}
var counter = 0;
var int = setInterval(function () {
    if (!document.hidden) {
        if (web_stat === true) {
            console.log('here')
            // Bad Website
            //localStorage.timer = new Date().getTime() - localStorage.old;
            counter = parseInt(counter) + 1000;  
            console.log("Counter is now at " + counter);
            chrome.runtime.sendMessage({
                action: "incCounter",
                source: counter
            });
        } else {
            chrome.runtime.sendMessage({
                action: "incCounter",
                source: "No counter. It's a good website"
            });
        }
    }
}, 1000);
    

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
    
});
