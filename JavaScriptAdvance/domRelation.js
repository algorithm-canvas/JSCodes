
    const parent = document.querySelector('.parent')
    console.log(parent);
    console.log(parent.children);
    console.log(parent.children[1].innerHTML);

    for (let i = 0; i < parent.children.length; i++) {
        console.log(parent.children[i].innerHTML);
        
    }
    parent.children[1].style.color =  "orange"
    console.log(parent.firstElementChild);
    console.log(parent.lastElementChild);

    const dayOne = document.querySelector('.day')
    console.log(dayOne);
    console.log(dayOne.parentElement);
    console.log(dayOne.nextElementSibling);

    console.log("NODES: ",parent.childNodes);

    const div = document.createElement('div')
    console.log(div);

    div.className ="main"
    div.id = Math.round(Math.random() * 10 + 1)

    div.setAttribute("title","generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"

    //adding list items
    function addLanguage(langName) {
        const li = document.createElement('li')
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)

    }
    addLanguage("second list value")
    addLanguage("aonther list value")

    function addOptiLanguage(langName){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')

    //Edit
    const secondLang = document.querySelector("li:nth-child(2)")
   // secondLang.innerHTML ="mojo"
   const newli = document.createElement('li')
   newli.textContent = "mojo"
   secondLang.replaceWith(newli)

   //Edit
   const firstLang = document.querySelector("li:first-child")
   firstLang.outerHTML = '<li>TypeScript</li>'

   // Remove
   const lastLang = document.querySelector('li:last-child')
   lastLang.remove()
