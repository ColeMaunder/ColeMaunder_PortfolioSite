const homeIDList = [{ id: 1, type: "art" }, { id: 1, type: "design" }, { id: 2, type: "art" } ,{ id: 2, type: "design" }];

function createProjectCard(project, right) {
    const card = document.createElement('div');
    card.classList.add('project');
    card.setAttribute("project-id", project.id);

    const displayLink = document.createElement('button');
    displayLink.classList = "project-link"

    displayLink.addEventListener("click", () => {
        const link =  project.link + "?scrollTarget=" + project.id;
        window.location.href = link;
    });

    const displayImage = document.createElement('img');
    displayImage.classList.add("project-image")
    displayImage.src = "../Images/" + project.imageName;
    displayImage.alt = project.alt;

    const diaplayName = document.createElement('h2');
    diaplayName.classList.add('project-name');
    diaplayName.textContent = project.name;

    if (right) {
        card.classList.add('right');
    }

    displayLink.appendChild(displayImage);
    card.appendChild(displayLink);
    card.appendChild(diaplayName);

    return card;
}

const contaner = document.querySelector(".displayProjects")
var right = false
homeIDList.map(idIn => {
    var project;
    switch (idIn.type) {
        case ("art"):
            project = projects.find(project => project.id == idIn.id);
            break;
        case ("design"):
            project = works.find(project => project.id == idIn.id);
            break;
    }
     console.log(project)
    const card = createProjectCard(project, right);
    right = !right
    contaner.appendChild(card);
})


