let myLeads=[]
let inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")


tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})


function render(Leads){
let listItems=""
for(let i=0;i<Leads.length;i++){
  listItems+=` 
        <li>
            <a target="_blank" href="${Leads[i]}"> 
                ${Leads[i]}
            </a>
        </li>`
}
ulEl.innerHTML=listItems
}
const toggleBtn = document.getElementById("dark-btn")

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode")

})


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    inputEl.value=""
})

deleteBtn.addEventListener("click", function() {
    const confirmDelete = confirm("Are you sure you want to delete all leads?")
    
    if (confirmDelete) {
        localStorage.removeItem("myLeads")
        myLeads = []
        render(myLeads)
    }
})

