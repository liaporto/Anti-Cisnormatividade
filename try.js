let elements = document.querySelectorAll('*');

let cisterms = [
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
    "doenças",
    "doença",
    "OB",
    "copinho"
];

let wrongterms = [
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

let rightterms = [
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

let re = new RegExp(cisterms.join('|'), "gi");



for (let i = 0; i < elements.length; i++) {

    let element = elements[i];
    let nextnd = false;

    for (let j = 0; j < element.childNodes.length; j++) {

        let node = element.childNodes[j];
        let text = '';
    
        if (node.nodeType == 3) {

            text = node.nodeValue;

            if (re.test(text) || nextnd){
 
                if(re.test(text) && nextnd){
                    nextnd = true;
                }
                else if(re.test(text)){
                    nextnd=true;
                }
                else if(nextnd){
                    nextnd=false;
                }

                let replaceF = '';

                for (let k = 0; k < wrongterms.length; k++) {
                    replaceF = replaceF + '.replace(wrongterms[' + k + '], rightterms[' + k + '])';
                }


                let command = 'text' + replaceF;

                let replacedText = eval(command);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }

            }
        }

        else if (node.nodeName == "STRONG" || node.nodeName == "#strong" || node.nodeName == "#em" || node.nodeName == "EM") {

            text = node.textContent;

            if (re.test(text)) {

                if(re.test(text) && nextnd){
                    nextnd = true;
                }
                else if(re.test(text)){
                    nextnd=true;
                }
                else if(nextnd){
                    nextnd=false;
                }

                let replaceF = '';

                for (let k = 0; k < wrongterms.length; k++) {
                    replaceF = replaceF + '.replace(wrongterms[' + k + '], rightterms[' + k + '])';
                }

                let command = 'text' + replaceF;

                let replacedText = eval(command);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }


            }
          
        }
    }

}



