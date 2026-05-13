let myLeads=[]
let inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
//the main difference between const and let is that const cannot be reassigned because it is a constant
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
        </li>`//target="_blank"==> new tab mein kholne ke liye

  //  ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"//same as below three lines
    // const li=document.createElement("li")
    // li.textContent=myLeads[i]
    //ulEl.append(li)
}
ulEl.innerHTML=listItems
}
// function render(Leads){
// let listItems="<li>"+inputEl.value+"<\li>"
// ulEl.innerHTML+=listItems
// }

const toggleBtn = document.getElementById("dark-btn")

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode")
    // classList.toggle ka matlab:
    // agar "dark-mode" class hai → remove kar dega
    // agar nahi hai → add kar dega
    // yani ON/OFF switch jaisa kaam
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
    // alert("button working")
})

//localstorage sirf string store karta hai
//JSON.Stringify()==>object/array ko string mein convert karta hain==>ye tab use karna hai jab
//localStorage.setItem karna ho

//JSON.parse()==>string ko object/array me convert===>ye tab use karna hai jab
//localStorage.getItem karna ho

