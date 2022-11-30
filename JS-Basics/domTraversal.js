//const grandparent = document.getElementById("grandparentid")
//const parents = Array.from(document.getElementsByClassName("parent"))
//const grandparent = document.querySelector("#grandparentid")
//const grandparent = document.querySelector(".grandparent") // note that query selector works for both class and id.

//changeColor(grandparent)

//grandparent.style.backgroundColor = "#333"

function changeColor(element){
    element.style.backgroundColor = "#333"
}

//changeColor(grandparent)

//parents.forEach(changeColor)

//----------------------------------------------------------------------------------------------------//
//this is for chaning only the first parent color:
//const parents = document.querySelector(".parent")
//changeColor(parents)

//----------------------------------------------------------------------------------------------------//
//this is for changing all the parents color:
//const parents = document.querySelectorAll(".parent")
//parents.forEach(changeColor)

//----------------------------------------------------------------------------------------------------//

//const parents = Array.from(grandparent.children)
//parents.forEach(changeColor)

//----------------------------------------------------------------------------------------------------//

//const parentOne = parents[0]
//const children = parentOne.children

//changeColor(children[0])

//----------------------------------------------------------------------------------------------------//

//const childOne = grandparent.querySelector(".child")
//changeColor(childOne)

//----------------------------------------------------------------------------------------------------//

//const children = grandparent.querySelectorAll(".child")
//children.forEach(changeColor)

const childOne = document.querySelector("#child-one")
//changeColor(childOne)

//----------------------------------------------------------------------------------------------------//

const parent = childOne.parentElement
//changeColor(parent)

//const grandparent = parent.parentElement
//changeColor(grandparent)

//----------------------------------------------------------------------------------------------------//

const grandparent = childOne.closest('.grandparent') //closest is similar to queryslector as it moves up the tree.
//changeColor(grandparent)

//----------------------------------------------------------------------------------------------------//

const childTwo = childOne.nextElementSibling
//changeColor(childTwo)
changeColor(childTwo.previousElementSibling)

//----------------------------------------------------------------------------------------------------//