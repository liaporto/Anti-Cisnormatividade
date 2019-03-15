
var elements = document.getElementsByTagName('*');
var cisterms = [
    "menstruação",
    "menstrual",
    "gineco",
    "menstruar",
    "tpm",
    "menstruada",
    "menstruais",
    "menstruam",
    "anticoncepcional",
    "vagina",
    "vaginal",
    "vaginais",
    "cólica",
    "cólicas",
    "dismenorreia",
    "fértil",
    "ginecologista",
    "óvulos",
    "fecundação",
    "íntima",
    "gravidez",
    "ciclo",
    "absorvente",
    "OB",
    "copinho"
];

var wrongterms = [
    /mulheres/gi,
    /mulher/gi,
    /garotas/gi,
    /garota/gi,
    /meninas/gi,
    /menina/gi,
    /feminino/gi,   
    /feminina/gi,    
    /femininos/gi,
    /femininas/gi,
    /menstruada/gi,
    /amiga/gi
    
]

var rightterms = [
    "pessoas",
    "pessoa",
    "pessoas",
    "pessoa",
    "crianças",
    "criança",
    "",
    "",
    "",
    "",
    "menstruade",
    "amigue"
    
]

var re = new RegExp(cisterms.join('|'), "gi");


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        
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

            
        
    }
 }
