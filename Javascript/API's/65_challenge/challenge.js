let btn = document.getElementById('wordbtn');

// btn.addEventListener('click', async()=>
   async function dictionory() {
    let userWord = document.getElementById('word').value ;
    let div = document.getElementById('container');
    div.innerHTML = '';

    try{
        let allwords = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`);
        let response = await allwords.json();
        console.log(response);

        response.forEach(res =>{
            console.log(res);
            res.meanings.forEach(meaning =>{
                let meaningDiv = document.createElement('div');
                meaningDiv.classList.add('meaning');
                
                let meaningPara = document.createElement('p');
                meaningPara.innerHTML = `
                <strong> Part of Speech -: </strong> ${meaning.partOfSpeech}
                `
                meaningDiv.appendChild(meaningPara);
                div.appendChild(meaningDiv)

                meaning.definitions.forEach((def,ind)=>{
                    let definitionDiv = document.createElement('div');
                    definitionDiv.classList.add('definition');
                    definitionDiv.innerHTML = `<strong> Definition ${ind + 1}: </strong> ${def.definition}`;
                    meaningDiv.appendChild(definitionDiv);

                    if (def.example) {
                        let exampleDiv = document.createElement('div');
                        exampleDiv.classList.add('example');
                        exampleDiv.innerHTML = `<strong>Example:</strong> ${def.example}`;
                        meaningDiv.appendChild(exampleDiv);
                    }

                    if (def.synonyms && def.synonyms.length > 0) {
                        let synonymsDiv = document.createElement('div');
                        synonymsDiv.classList.add('synonyms');
                        synonymsDiv.innerHTML = `<strong>Synonyms:</strong> ${def.synonyms.join(', ')}`;
                        meaningDiv.appendChild(synonymsDiv);
                    }else{
                       let noSynonym = document.createElement('div');
                       noSynonym.innerHTML = `<strong> No synonym </strong>`
                       meaningDiv.appendChild(noSynonym)
                    }

                    if (def.antonyms && def.antonyms.length > 0) {
                        let antonymsDiv = document.createElement('div');
                        antonymsDiv.classList.add('antonyms');
                        antonymsDiv.innerHTML = `<strong>Antonyms:</strong> ${def.antonyms.join(', ')}`;
                        meaningDiv.appendChild(antonymsDiv);
                    }
                })
            })
           
            
        })
        
    }catch(err){
        console.log(err);
        
    }
}

btn.addEventListener('click',dictionory);
word.addEventListener('keydown',(event)=>{
    if(event.key === "Enter"){
        dictionory();
    }
})