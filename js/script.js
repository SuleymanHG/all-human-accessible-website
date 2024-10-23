// we gebruiken lenis om infinite scroll te creeeren
console.log(hello world)

const lenisScroll = new Lenis({
	infinite: true
})

const lenis = new Lenis({
	infinite: true,
	syncTouch: true
});

function onRaf(time) {
	lenis.raf(time);
	requestAnimationFrame(onRaf);
}

requestAnimationFrame(onRaf);


