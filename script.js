let myleads = []
const inputEl = document.getElementById("input-box");
const saveEl = document.getElementById("save-btn") ;
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myleads") );

if(leadsFromLocalStorage){
    myleads = leadsFromLocalStorage ;
    render(myleads)
}

saveEl.addEventListener('click',function(){
        if(inputEl.value !== "" ){
            inputEl.placeholder = ""
            myleads.push(inputEl.value);
            inputEl.value = "";
            render(myleads)
            localStorage.setItem("myleads" , JSON.stringify(myleads))
        }
        else{
            inputEl.placeholder = "Please type the link"
        }
})

tabBtn.addEventListener('click' , function(){
    inputEl.placeholder = ""
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){    
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads" , JSON.stringify(myleads) )
        render(myleads)
    })
})

deleteBtn.addEventListener('dblclick', function(){
    inputEl.placeholder = ""
    localStorage.clear()
    myleads = []
    render(myleads)
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


