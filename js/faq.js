let acc = document.getElementsByClassName("question");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active_faq");
    let answer = this.nextElementSibling;
    const icon = this.querySelector(".fa-solid");

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");

    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      
    } 
  });
}