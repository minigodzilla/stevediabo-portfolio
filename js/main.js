// init controller
var controller = new ScrollMagic.Controller();

$(function () {

	// Create an instance of the Scroll Magic Controller
	let scrollController = new ScrollMagic.Controller();

	(() => {

		// lock down the min-height of all the pages, based on the current px size of 100vh

		var n = $(".sd-page");
		n.length > 0 && n.css("min-height", n.height() + "px");

		// pg 1

		const page1tween = TweenMax.to('.sd-page-1 .sd-animated-item', 1, { className: '+=sd-animated', ease: Power0.easeNone });

		const page1scene = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-1', triggerHook: 0, duration: '200%'
		})
		.setPin('.sd-page-1', { pushFollowers: false })
		.setTween(page1tween)
		.addIndicators({name: 'pg1'})

		// pg 2

		const page2tween = TweenMax.to('.sd-page-2 .sd-animated-item', 1, { className: '+=sd-animated', ease: Power0.easeNone });

		const page2scene = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2', triggerHook: 0, duration: '100%'
		})
		.setPin('.sd-page-2', { pushFollowers: false })
		.setTween(page2tween)
		.addIndicators({name: 'pg2'})

		// pg 3

		const page3tween1 = TweenMax.to('.sd-page-3', 1, { className: '+=sd-animated', ease: Power0.easeNone });

		const page3scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3', triggerHook: 0, duration: '400%'
		})
		.setPin('.sd-page-3')
		.setTween(page3tween1)
		.addIndicators({name: 'pg3'})

		const page3timeline1 = new TimelineLite();
		page3timeline1
			.fromTo('.sd-page-3 .sd-detail-bg-box', 0.2, { scaleX: 0, ease: Power2.easeInOut }, { scaleX: 1, ease: Power2.easeInOut })
			.fromTo('.sd-page-3 .sd-detail-fg-box', 0.1, { opacity: 0, ease: Power2.easeInOut }, { opacity: 1, ease: Power2.easeInOut });

		const page3scene2 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3', triggerHook: 0, offset: (n.height() * 1.5)
		})
		.setTween(page3timeline1)		
		.addIndicators({name: 'pg3 t1'})


		// Add scenes to the controller
		page1scene.addTo (scrollController);
		page2scene.addTo (scrollController);
		page3scene1.addTo (scrollController);
		page3scene2.addTo (scrollController);

		// Smooth Scroll
		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 750
		});

	})();
});
