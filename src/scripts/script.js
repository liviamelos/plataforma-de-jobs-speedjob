
function criarJobsFront(frontEndJobs){

    let section = document.querySelector('.front-end')
       
    let ul = document.createElement('ul')
    ul.classList.add('lista-frontend')
    ul.innerHTML = ""
    section.appendChild(ul)

    for(let i = 0; i < frontEndJobs.length; i++){
        let vaga = frontEndJobs[i]

        let li = document.createElement('li')
        li.classList.add("card")
        ul.appendChild(li)
      
        let divIconBox = document.createElement("div")
        divIconBox.classList.add("icon_box")
        li.appendChild(divIconBox)

        let divIcon = document.createElement("div")
        divIcon.classList.add("icon")
        divIconBox.appendChild(divIcon)

        let img = document.createElement("img")
        img.src = vaga.img
        divIcon.appendChild(img)

        let divName = document.createElement("div")
        divName.classList.add("name")
        divIconBox.appendChild(divName)

        let pName = document.createElement("p")
        pName.innerText = vaga.title
        divName.appendChild(pName)

        let divCidade = document.createElement("div")
        divCidade.classList.add("cidade")
        li.appendChild(divCidade)

        let pCidade = document.createElement("p")
        pCidade.innerText = "Curitiba - Paraná"
        divCidade.appendChild(pCidade)

        let divDescription = document.createElement("div")
        divDescription.classList.add("descrription")
        li.appendChild(divDescription)
        
        let pDescription = document.createElement("p")
        pDescription.innerText = vaga.descrription
        divDescription.appendChild(pDescription)

        let divCategorias = document.createElement("div")
        divCategorias.classList.add("categories")
        li.appendChild(divCategorias)
        
        let buttonFullTime = document.createElement("button")
        buttonFullTime.classList.add("button-categories")
        buttonFullTime.innerText = "FullTime"
        divCategorias.appendChild(buttonFullTime)

        let buttonRemote = document.createElement("button")
        buttonRemote.classList.add("button-categories")
        buttonRemote.innerText = "Remote"
        divCategorias.appendChild(buttonRemote)
    }
}
criarJobsFront(frontEndJobs)

function criarJobsBack(backEndJobs){

    let section = document.querySelector('.back-end')
       
    let ul = document.createElement('ul')
    ul.classList.add('lista-backend')
    ul.innerHTML = ""
    section.appendChild(ul)

    for(let i = 0; i < backEndJobs.length; i++){
        let vaga = backEndJobs[i]

        let li = document.createElement('li')
        li.classList.add("card")
        ul.appendChild(li)
      
        let divIconBox = document.createElement("div")
        divIconBox.classList.add("icon_box")
        li.appendChild(divIconBox)

        let divIcon = document.createElement("div")
        divIcon.classList.add("icon")
        divIconBox.appendChild(divIcon)

        let img = document.createElement("img")
        img.src = vaga.img
        divIcon.appendChild(img)

        let divName = document.createElement("div")
        divName.classList.add("name")
        divIconBox.appendChild(divName)

        let pName = document.createElement("p")
        pName.innerText = vaga.title
        divName.appendChild(pName)

        let divCidade = document.createElement("div")
        divCidade.classList.add("cidade")
        li.appendChild(divCidade)

        let pCidade = document.createElement("p")
        pCidade.innerText = "Curitiba - Paraná"
        divCidade.appendChild(pCidade)

        let divDescription = document.createElement("div")
        divDescription.classList.add("descrription")
        li.appendChild(divDescription)
        
        let pDescription = document.createElement("p")
        pDescription.innerText = vaga.descrription
        divDescription.appendChild(pDescription)

        let divCategorias = document.createElement("div")
        divCategorias.classList.add("categories")
        li.appendChild(divCategorias)
        
        let buttonFullTime = document.createElement("button")
        buttonFullTime.classList.add("button-categories")
        buttonFullTime.innerText = "FullTime"
        divCategorias.appendChild(buttonFullTime)

        let buttonRemote = document.createElement("button")
        buttonRemote.classList.add("button-categories")
        buttonRemote.innerText = "Remote"
        divCategorias.appendChild(buttonRemote)
    }
}
criarJobsBack(backEndJobs)