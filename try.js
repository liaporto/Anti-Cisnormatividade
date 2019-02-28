
var elements = document.getElementsByTagName('*');
var cisterms = [
    "menstruação",
    "menstrual",
    "gineco",
    "menstruar",
    "tpm",
    "menstruada"
];

var wrongterms = [
    /mulheres/gi,
    /mulher/gi,
    /menina/gi,
    /feminino/gi,
    /menstruada/gi
]

var rightterms = [
    "pessoas",
    "pessoa",
    "criança",
    "",
    "menstruade"
]

var re = new RegExp(cisterms.join('|'), "gi");


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
       // if (node.nodeType === 3) {
           var text = node.nodeValue;
           var replaceText = text;
   
           if(re.test(text)) {

                    var replaceF = '';
                    for(var k = 0; k<wrongterms.length; k++)
                    {
                        replaceF = replaceF + '.replace(wrongterms['+k+'], rightterms['+k+'])';
                    }


                    var command = 'text'+replaceF;

                    replacedText = eval(command);
                    
                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }

               
            	
            }

            
        //}
    }
 }
