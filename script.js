/* Блок генерации тела */

const faceSide = document.querySelector('.faceSide');

const faceBlock_1 = document.querySelector('.faceBlock-1');
const faceBlock_2 = document.querySelector('.faceBlock-2');
const faceBlock_3 = document.querySelector('.faceBlock-3');

const personageBodyBlue = document.querySelector('#bigBodyBlue');
const personageBodyGreen = document.querySelector('#bigBodyGreen');
const personageBodyPink = document.querySelector('#bigBodyPink');

const allBodies = document.querySelectorAll('.bodyBlock-checks');
allBodies.forEach(function (elementBody) {
    elementBody.addEventListener('click', function () {
        if (this.classList.contains('bodyBlock-checks1')) {
            faceBlock_2.remove();
            faceBlock_3.remove();
            faceSide.appendChild(faceBlock_1);
            faceBlock_1.style.display = 'flex';
            personageBodyBlue.style.display = 'block';
            personageBodyGreen.style.display = 'none';
            personageBodyPink.style.display = 'none';
        } else if (this.classList.contains('bodyBlock-checks2')) {
            faceBlock_1.remove();
            faceBlock_3.remove();
            faceSide.appendChild(faceBlock_2);
            faceBlock_2.style.display = 'flex';
            personageBodyBlue.style.display = 'none';
            personageBodyGreen.style.display = 'block';
            personageBodyPink.style.display = 'none';
        } else if (this.classList.contains('bodyBlock-checks3')) {
            faceBlock_1.remove();
            faceBlock_2.remove();
            faceSide.appendChild(faceBlock_3);
            faceBlock_3.style.display = 'flex';
            personageBodyBlue.style.display = 'none';
            personageBodyGreen.style.display = 'none';
            personageBodyPink.style.display = 'block';
        }
    });
});

/* Блок генерации лиц */

const allFacesChecks = document.querySelectorAll('.faceBlock-checks');
const allFaces = document.querySelectorAll('.faces');

allFacesChecks.forEach((element, i) => {
    element.addEventListener('click', function () {
        allFaces.forEach((elementFace) => {
            elementFace.style.display = 'none';
        });
        allFaces[i].style.display = 'block';
    });
});

/* Блок генерации облака */

let allSkills = [];
let juniorSkill = ['HTML', 'CSS', 'SQL', 'Adaptive', 'Base JS', 'Webpack', 'ESLint', 'Gulp', 'SASS'];
let middleSkill = ['Git', 'Pug', 'TDD', 'JS', 'Canvas', 'SVG', 'Bash', 'CI/CD', 'React', 'D3.js', 'Vue', 'SPA', 'ES6'];
let seniorSkill = ['ThreeJs', 'WebGL', 'Chrome Extensions', 'Node', 'Express', 'Architecture'];

const innerField = document.querySelector('.sliderArea-slider');
const cloudsSkills = document.querySelector('.cloudsSkills');

innerField.addEventListener('change', function () {
    if (this.value == 1) {
        allSkills = juniorSkill.concat();
        removeElement(cloudsSkills);
        allSkills.forEach((element, i) => {
            addElementDom(element, i, 1);
        });
    } else if (this.value == 2) {
        allSkills = juniorSkill.concat();
        allSkills = allSkills.concat(middleSkill);
        removeElement(cloudsSkills);
        allSkills.forEach((element, i) => {
            addElementDom(element, i, 2);
        });
    } else if (this.value == 3) {
        allSkills = juniorSkill.concat();
        allSkills = allSkills.concat(middleSkill);
        allSkills = allSkills.concat(seniorSkill);
        removeElement(cloudsSkills);
        allSkills.forEach((element, i) => {
            addElementDom(element, i, 3);
        });
    }
});

function addElementDom(elementDom, i, visible) {
    let str = '<div class="cloudsSkills_cloud cloudsSkills_cloud' + i + ' visible' + visible + '">' + elementDom + '</div>';
    cloudsSkills.innerHTML += str;
}

function removeElement(cloudsSkills) {
    while (cloudsSkills.firstChild) {
        cloudsSkills.removeChild(cloudsSkills.firstChild);
    }
}