const addName = document.querySelector('#addName');
const nameInput = document.querySelector('#name')
const addAge = document.querySelector('#addAge');
const age = document.querySelector('#age');
const addSubject = document.querySelector('#addSubject');
const subjects = document.querySelector('#subjects');
const addScore = document.querySelector('#addScores');
const scores = document.querySelector('#scores');
const divInput = document.querySelector('.inputs');
const average = document.querySelector('#average');
const popupContainer = document.querySelector('#popupContainer');
const popupremove = document.querySelector('#popupremove');
const enterpop = document.querySelector('#existpopup');
const popup = document.querySelector('#popup');
const popupinput = document.querySelector('.popupcontent');
const editsubscocontainer = document.querySelector('#editsubscocontainer');
const editsubsco = document.querySelector('#editsubsco');
const editsubremove = document.querySelector('#editsubremove');
const editsubjectinput = document.querySelector('#editsub');
const editscoreinput = document.querySelector('#editsco');
const enterEditSubjects = document.querySelector('.editSubjects');


//slide in animation in page load
const pageslide = document.querySelectorAll('.pageslide');
const subContainer = document.querySelectorAll('.subContainer');
window.addEventListener('DOMContentLoaded', ()=>{
    subContainer.forEach((subs, t)=>{
        setTimeout(()=>{
            subs.classList.add('subContaineranimate');
        }, t*100)
    })    

    pageslide.forEach((slide, t)=>{
        setTimeout(()=>{
            slide.classList.add("animatepageslide");  
        }, t*100)
    })
})
function mainObject (name, age){
    this.name = name;
    this.age = age;
}
const clrbtn = document.createElement('button');
clrbtn.classList.add('add');
clrbtn.classList.add('opacityOfbtn');
clrbtn.append('Clear Data');
clrbtn.classList.add('lastbtn')
divInput.append(clrbtn);


const slideininfo = document.querySelector(".slideininfo");
addName.addEventListener('click', ()=>{

    clrbtn.classList.remove('opacityOfbtn')
    const outputContainer = document.createElement('p');
    if (nameInput.value === '') {
        alert("Please input the Student's name");
    } else {
        const studentName = document.createElement('span');
        studentName.classList.add('capital');
        outputContainer.classList.add('outputContainer');
        divInput.append(outputContainer);
        studentName.append(nameInput.value);
        const studentNameOutput = `Name : ${studentName.textContent}`
        outputContainer.append(studentNameOutput);
        let sname = document.querySelector('.sname');
        setTimeout(()=> {
            sname.append(nameInput.value);
            slideininfo.classList.add("popslide");
        }, 500);
        setTimeout(()=>{
            slideininfo.classList.add('popslideout');
            slideininfo.classList.remove('popslide');
        }, 5000);
        slideininfo.classList.remove('popslideout');
        // sname.remove();
    }
    
    clrbtn.addEventListener('click', () =>{
        outputContainer.remove();
        nameInput.value = '';
        age.value = '';
        subjects.value = '';
        scores.value = '';
    })

    let i = 1;
    addAge.addEventListener('click', () =>{
        const studentAge = document.createElement('span');
        const studentAgeOutput = document.createElement('span')
        if (age.value === '') {
            alert("Please input Student's age");
        } else {
            while ( i <= 1) {
                studentAge.append(age.value);
                studentAgeOutput.append(`Age : ${studentAge.textContent}`);
                outputContainer.append(studentAgeOutput);

                i++;
            }
        } 
        subjects.value = ''; 
        scores.value = '';

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const th = document.createElement('th')
        const tdSubject = document.createElement('td');
        const tdScore = document.createElement('td');
        tdSubject.textContent = "Subject";
        tdScore.textContent = "Score";
        th.append(tdSubject);
        th.append(tdScore);
        thead.append(th);
        table.append(thead);
        table.classList.add('tableUi');

        outputContainer.append(table)

        const subjectScores = {
        }
        const addrow = document.createElement('button')
        addrow.classList.add('add');
        addrow.append('Add More');
        addrow.classList.add('editSubjects');

        const tr = document.createElement('tr');
        thead.append(tr);
        
        
            addSubject.addEventListener('click', () =>{
                const scoredata = document.createElement('p');
                scoredata.classList.add('scoredata');
                if (subjects.value === '') {
                    alert('please Enter subject ')
                } else {
                    const tdsubject = document.createElement('td');
                    tdsubject.classList.add('inputeditsubject');
                    const removeScore = document.createElement('button');
                    removeScore.append('-');
                    removeScore.classList.add('editSubjects');
                    const studentSubject = document.createElement('span');
                    studentSubject.append(subjects.value);
                    scoredata.append(studentSubject);
                    tdsubject.append(`${studentSubject.textContent}`);
                    tdsubject.append(removeScore);
                    tr.append(tdsubject);
                    // trnew.append(tdSubject);
                    removeScore.addEventListener('click', ()=>{
                        tdsubject.remove();
                    })
                }
            })

                const arrayOfScores = [];
                const arrayOfSubjects = [];
                counter = 1;
                addScore.addEventListener('click', () => { 
                    const tdscore = document.createElement('td');
                    tdscore.classList.add('inputeditsubject')
                    const removeScore = document.createElement('button');
                    removeScore.append('-');
                    removeScore.classList.add('editSubjects');
                    arrayOfScores.push(scores.value);
                    arrayOfSubjects.push(subjects.value);
                    tr.append(tdscore);
                    // trnew.append(tdscore)
                    tdscore.append(`${scores.value}%`);
                    
                    tdscore.append(removeScore);
                    console.log(arrayOfScores);
                    subjectScores[subjects.value] = scores.value;
                    student.subjectScores = subjectScores;

                    removeScore.addEventListener('click', ()=>{
                        tdscore.remove();
                        counter--;
                    })
                    counter++;

                    nameInput.value = '';
                    age.value = '';
                    subjects.value = '';
                    scores.value = '';
                   
                    
                    
                })

                console.log(arrayOfScores);
                average.addEventListener('click', ()=>{
                    const averageoutput = document.createElement('p')
                    const solve = () =>{
                        const sum = arrayOfScores.map(Number).reduce((a, b) => a + b,0);
                        return sum/arrayOfScores.length;
                    }
                    console.log(solve());
                    averageoutput.append(`Current Average: ${solve()}`)
                    outputContainer.append(averageoutput);
                })

                console.log(subjectScores);
        // })
                

        const student = new mainObject(nameInput.value, age.value);
        console.log(student);
        const editSubjects = document.createElement('button');
        editSubjects.append('Edit Subjects');
        editSubjects.classList.add('editSubjects');
        enterpop.classList.add('add');
        
        outputContainer.append(addrow);

        editSubjects.addEventListener('click', ()=>{
            popupContainer.classList.add('popupContainer');
            popupremove.classList.add('popremove');
            popup.classList.add('popup');
            popup.style.visibility = 'visible';
        });

        popupremove.addEventListener('click', ()=>{
            popupContainer.classList.remove('popupContainer')
            popupremove.classList.remove('popremove');
            popup.classList.remove('popup');
            popup.style.visibility = 'hidden';
        });
        
        enterpop.addEventListener('click', ()=>{
            const v = popupinput.value--;
            console.log(v);
            const editsubject = Object.keys(subjectScores);
            const editscores = Object.values(subjectScores);
            if(popupinput.value !== '' && popupinput.value <= editsubject.length){
                popupContainer.classList.remove('popupContainer')
                popupremove.classList.remove('popremove');
                popup.classList.remove('popup');
                popup.style.visibility = 'hidden';
                editsubscocontainer.classList.add('popupContainer');
                editsubsco.classList.add('popup');
                editsubsco.style.visibility = 'visible';
                editsubremove.classList.add('popremove');
                console.log(popupinput);
                editsubjectinput.value = editsubject[v];
                editscoreinput.value = editscores[v];

            }else{
                alert('Please input a number within the range of the listed subject');
            }
        })

        editsubremove.addEventListener('click', () =>{
            editsubscocontainer.classList.remove('popupContainer');
            editsubsco.classList.remove('popup');
            editsubsco.style.visibility = 'hidden';
            editsubremove.classList.remove('popremove');
        });

        enterEditSubjects.addEventListener('click', () =>{
            editsubscocontainer.classList.remove('popupContainer');
            editsubsco.classList.remove('popup');
            editsubsco.style.visibility = 'hidden';
            editsubremove.classList.remove('popremove');
            alert(outputContainer.textContent);
        })
        
        outputContainer.append(editSubjects);
    })
}

)
    