// Element selector
const $ = (q) => {
	const elements = document.querySelectorAll(q);
	if (elements.length > 1) return elements;
	else if (elements.length === 1) return elements[0];
};

// Header height adjustment
$("#header").style.height = window.innerHeight - $("#header").offsetTop + "px";

window.addEventListener("resize", () => {
	$("#header").style.height = window.innerHeight - $("#header").offsetTop + "px";
});

// Mobile navigation menu
$(".fa-bars").addEventListener("click", () => {
	$(".nav").forEach((nav) => {
		nav.classList.toggle("active");
	});
});
