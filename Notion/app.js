function sidebarClick (){

    document.querySelector(".sidebar").classList.toggle("active")
}

document.querySelector(".sidebar .toggle-btn").addEventListener("click", sidebarClick);