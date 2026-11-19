function getHtmlCardTemplate(pokemon) {

    let typesHtml = ""
    pokemon.types.forEach(element => {
                  typesHtml += getHtmlCardTypeTemplate(element);  
                });


  return  `<article onClick="showPokeModal('${pokemon.name}')" class="card" style="--type1-dark: var(--type-${pokemon.types[0]}-dark); --type2-dark: var(--type-${pokemon.types[pokemon.types.length - 1]}-dark);">
            <div class="card__header">
                <p class="pkm-id">#${getNumberWithLeadingZeros(pokemon.id, 4)}</p>
                <img class="icon" src="./assets/img/icons/favorite.png"/>
            </div>
            <img class="card__image" src='${pokemon.imgPath}' alt="" />
            <h3 class="pkm-name">${capitalizeFirstLetter(pokemon.name)}</h3>
            <div class="card__types">
                ${typesHtml}
            </div>
            <div class="separator"></div>
                <div class="card__quickinfos">
                    <p class="card__quickinfo"> <img class="icon" src="./assets/img/icons/height.png"/>${pokemon.height / 10} m</p>
                    <p class="card__quickinfo"> <img class="icon" src="./assets/img/icons/weight.png"/>${pokemon.weight / 10} kg</p>
                </div>
           </article>`;
}

function getHtmlCardTypeTemplate (type){
   
    return `<div class="card__type" style="--type: var(--type-${type}-dark); --type-border: var(--type-${type});">
                <img src="${"./assets/img/type-icons/"}${type}.png" alt="">
                <p>${capitalizeFirstLetter(type)}</p>
            </div>`;
}

function getStatsbarTemplate(color, value){
    return `<div class="statusbar__border">
                <div class="statusbar__value" style="background-color: ${color}; width: ${value}%"></div>
            </div>`;
}

                   
