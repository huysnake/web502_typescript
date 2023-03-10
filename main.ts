export {}


interface projectList {
    id: number | string, 
    name: string,
    image: string,
    link: string,
    member: number
}


const projectList = [
    {id:1,name: 'Huy Ran',image: 'https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7',link: 'http://project1.com',member: 4},
    {id:2,name: 'Huy Snake',image: 'https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7',link: 'http://project2.com',member: 2},
    {id:3, name:'Huy ki nang', image:'https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7', link: 'http://project3.com', member:5}
]

const listProject = (projects) => {
    const app = document.querySelector("#app")
    if (app) {
        app.innerHTML = projects.map((item) => {
            return `
            <div class="project-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Thành viên: ${item.member}</p>
            <a href="${item.link}" target="_blank">Xem chi tiết</a>
          </div>
            `
        }).join("")
    }
}
listProject(projectList)



