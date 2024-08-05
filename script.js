import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue,
         remove
 } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-appp-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database , "Leads")


const inputEl = document.getElementById("input-box");
const saveEl = document.getElementById("save-btn") ;
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")

onValue(referenceInDB , function(snapshot){
    const snapshotExist = snapshot.exists()
     if(snapshotExist){
        const snapshotValues = snapshot.val()
            const leads = Object.values(snapshotValues)
            render(leads)
     }
})


saveEl.addEventListener('click',function(){
        if(inputEl.value !== "" ){
            inputEl.placeholder = "eg: https://www.google.com"
            push(referenceInDB, inputEl.value);
            inputEl.value = "";
        }
        else{
            inputEl.placeholder = "Please type the link"
        }
})


deleteBtn.addEventListener('dblclick' , function(){
    remove(referenceInDB)
    ulEl.innerHTML = ""
})

function render(leads){
    let listItems = "";
    for (let i = 0 ; i < leads.length ; i++){
        listItems += `
        <li>
            <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listItems ;
}


