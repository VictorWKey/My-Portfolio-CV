// const home = document.getElementById("home");
// const portfolio = document.getElementById("portfolio");
// const skills = document.getElementById("skills");
// const about = document.getElementById("about");
// const hobbies = document.getElementById("hobbies");
// const contact = document.getElementById("contact");
// const allArray = [home, portfolio, skills, about, hobbies, contact];

// const options = {
//     threshold: 0.5
// }

// const visible = section=>{
//     const option = document.getElementById(section);
//     option.style.color = "var(--light-blue)";
//     option.style.borderBottom = "2px solid var(--light-blue)";

// }

// const invisible = section=>{
//     const option = document.getElementById(section);
//     option.style.color = "var(--gray)";
//     option.style.borderBottom = "2px solid transparent";
// }

// const callback = entries=>{
//     for(let entry of entries ){
//         if(entry.isIntersecting){
//             visible(`${entry.target.className}_option`);
//         } else{
//             invisible(`${entry.target.className}_option`);
//         }

//     }
// }

// const observer = new IntersectionObserver(callback, options);

// for(let section of allArray){
//     observer.observe(section);
// }
