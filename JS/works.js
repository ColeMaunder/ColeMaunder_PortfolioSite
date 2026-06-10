function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project');
    card.setAttribute("project-id", project.id);


    const displayImage = document.createElement('img');
    displayImage.classList.add("project-image")
    displayImage.src = "../Images/" + project.imageName;
    displayImage.alt = project.alt;

    const diaplayName = document.createElement('h3');
    diaplayName.classList.add('project-name');
    diaplayName.textContent = project.name;

    const diaplayExplain = document.createElement('p');
    diaplayExplain.classList.add('project-expl');
    diaplayExplain.textContent = project.explain 

    const btnText = document.createElement('p');
    btnText.classList = "btn-text";
    btnText.textContent = "Play"


    card.appendChild(diaplayName);
    card.appendChild(diaplayExplain);
    card.appendChild(displayImage);
    

    return card;
}

const contaner = document.querySelector(".displayWorks")
works.map(work => {
    const card = createProjectCard(work);
    contaner.appendChild(card);
})

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('scrollTarget');

    if (targetId) {
            const element = document.querySelector(`[project-id="${targetId}"]`);
        
            console.log(element)
            if (element) {
            setTimeout(() => {
                element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
                });
            }, 100);
        }
    }
});