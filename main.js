"use strict";
// exports.__esModule = true;
var projectList = [
    { id: 1, name: 'Huy Ran', image: 'https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7', link: 'http://project1.com', member: 4 },
    { id: 2, name: 'Huy Snake', image: 'https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7', link: 'http://project2.com', member: 2 },
    { id: 3, name: 'Huy ki nang', image: 'https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7', link: 'http://project3.com', member: 5 }
];
var listProject = function (projects) {
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = projects.map(function (item) {
            return "\n            <div class=\"project-item\">\n            <img src=\"".concat(item.image, "\" alt=\"").concat(item.name, "\">\n            <h3>").concat(item.name, "</h3>\n            <p>Th\u00E0nh vi\u00EAn: ").concat(item.member, "</p>\n            <a href=\"").concat(item.link, "\" target=\"_blank\">Xem chi ti\u1EBFt</a>\n          </div>\n            ");
        }).join("");
    }
};
listProject(projectList);
// Khởi tạo mảng projectList rỗng
var projectListe = [];
// Hàm thêm mới project vào mảng projectList
function addProject(projectObject) {
    // Kiểm tra projectObject có phải là một object không
    if (typeof projectObject === 'object' && projectObject !== null) {
        // Thêm projectObject vào mảng projectList
        projectList.push(projectObject);
    }
    else {
        // Nếu tham số truyền vào không phải là object sẽ thông báo lỗi
        console.error('Tham số truyền vào không phải là object');
    }
    // Trả về mảng projectList
    return projectList;
}
addProject(projectListe);
