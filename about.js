console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully!")
}


let form = document.querySelector('#contact');
let img = document.querySelector("img")

form.addEventListener('submit', handleSubmit);
img.addEventListener("mouseover", () => {
	alert("I think you're fantastic!")
})