
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
       // if (node.nodeType === 3) {
           var text = node.nodeValue;
   
           if(/menstruação/gi.test(text) || /menstrual/gi.test(text) || /gineco/gi.test(text) || /menstruar/gi.test(text) || /tpm/gi.test(text) || /menstruada/gi.test(text)) {
  
            	var replacedText = text.replace(/mulheres/gi, 'pessoas').replace(/mulher/gi, 'pessoa').replace(/menina/gi, 'criança').replace(/feminino/gi, '').replace(/menstruada/gi, 'menstruade');
            	
            	if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            	}
            	
            }

            
        //}
    }
 }
