const form=document.getElementById("entryForm");
const entriesContainer=document.getElementById("entries");
let entries=JSON.parse(localStorage.getItem("entries")||"[]");

function saveEntries(){
    localStorage.setItem("entries",JSON.stringify(entries));
}

function renderEntries(){
    entriesContainer.innerHTML="";

    entries.forEach((entry,index)=>{
        const article=document.createElement("article");
        article.className="entry";

        article.innerHTML=`
            <h3>${entry.title}</h3>
            <small>${entry.date}</small>
            <p>${entry.description}</p>
            <button class="delete-btn" data-index="${index}">Excluir</button>
        `;

        entriesContainer.appendChild(article);
    });
}

form.addEventListener("submit",event=>{
    event.preventDefault();

    entries.push({
        title:document.getElementById("title").value.trim(),
        description:document.getElementById("description").value.trim(),
        date:document.getElementById("date").value
    });

    saveEntries();
    renderEntries();
    form.reset();
});

entriesContainer.addEventListener("click",event=>{
    if(!event.target.classList.contains("delete-btn")) return;

    entries.splice(Number(event.target.dataset.index),1);
    saveEntries();
    renderEntries();
});

renderEntries();