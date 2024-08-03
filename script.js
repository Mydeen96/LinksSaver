let myleads = []
const inputEl = document.getElementById("input-box");
const saveEl = document.getElementById("save-btn") ;
const ulEl = document.getElementById("ul-el");
const para = document.getElementById("para");


for(i=0 ;i <= 100 ;i++ ){
    para.innerHTML += "love you pondati 💑" + "<br>" ;
}

localStorage.setItem("myleads" , "www.google.com")

saveEl.addEventListener('click',function(){
        if(inputEl.value !== ""){
            myleads.push(inputEl.value);
        inputEl.value = "";
        console.log(localStorage.getItem("myleads"))
        renderLead()
        }
        else{
            alert('please eneter the input')
        }
})

function renderLead(){
    let listItems = "";
    for (let i = 0 ; i < myleads.length ; i++){
        listItems += `
        <li>
            <a href='${myleads[i]}' target='_blank'>${myleads[i]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listItems ;
}


