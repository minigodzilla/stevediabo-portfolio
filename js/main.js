// init controller
var controller = new ScrollMagic.Controller();

$(function () {

	// Create an instance of the Scroll Magic Controller
	let scrollController = new ScrollMagic.Controller();

	(() => {

		// locking down page heights based on initial 100vh

		var n = $(".sd-lock-height");
		n.length > 0 && n.css("height", n.height() + "px");

		// TODO: remove duplication in scenes

		// pg 1

		const page1tween = TweenMax.to('.sd-page-1 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page1scene = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-1', triggerHook: 0, duration: '200%'
		})
		.setPin('.sd-page-1', { pushFollowers: false })
		.setTween(page1tween)
		.addIndicators({name: 'pg1'})

		// pg 2

		const page2tween = TweenMax.to('.sd-page-2 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page2scene = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2', triggerHook: 0, duration: '100%'
		})
		.setPin('.sd-page-2', { pushFollowers: false })
		.setTween(page2tween)
		.addIndicators({name: 'pg2'})

		// pg 3

		const page3tween1 = TweenMax.to('.sd-page-3', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page3scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3', triggerHook: 0, duration: '500%'
		})
		.setPin('.sd-page-3', { pushFollowers: false })
		.setTween(page3tween1)
		.addIndicators({name: 'pg3 sc1'})

		const page3scene2timeline = new TimelineLite();
			page3scene2timeline
				.fromTo('.sd-page-3 .sd-bg-box', 0.2, { scaleX: 0, ease: Power2.easeInOut }, { scaleX: 1, ease: Power2.easeInOut })
				.fromTo('.sd-page-3 .sd-fg-box', 0.2, { opacity: 0, ease: Power2.easeInOut }, { opacity: 1, ease: Power2.easeInOut })
				.set('.sd-page-3 .sd-title-box', { opacity: 0 })
			;

		const page3scene2 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-trigger-page-3-scene-2', triggerHook: 0
		})
		.setTween(page3scene2timeline)
		.addIndicators({name: 'pg3 sc2'})

		const page3scene3timeline = new TimelineLite();
			page3scene3timeline
				.fromTo('.sd-page-3 .sd-fg-box .sd-bezel-laptop', 0.2, { opacity: 1, ease: Power2.easeInOut }, { opacity: 0, ease: Power2.easeInOut })
				.fromTo('.sd-page-3 .sd-fg-box .sd-bezel-phone', 0.2, { opacity: 0, ease: Power2.easeInOut }, { opacity: 1, ease: Power2.easeInOut })
			;

		const page3scene3 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-trigger-page-3-scene-3', triggerHook: 0
		})
		.setTween(page3scene3timeline)
		.addIndicators({name: 'pg3 sc3'})

		const page3scene4timeline = new TimelineLite();
			page3scene4timeline
				.fromTo('.sd-page-3 .sd-fg-box', 0.2, { opacity: 1, ease: Power2.easeInOut, immediateRender: false }, { opacity: 0, ease: Power2.easeInOut })
				.fromTo('.sd-page-3 .sd-bg-box', 0.2, { scaleX: 1, ease: Power2.easeInOut, immediateRender: false }, { scaleX: 0, ease: Power2.easeInOut })
			;

		const page3scene4 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-trigger-page-3-scene-4', triggerHook: 0
		})
		.setTween(page3scene4timeline)		
		.addIndicators({name: 'pg3 sc4'})

		// pg 4

		const page4tween = TweenMax.to('.sd-page-4 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page4scene = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-4', triggerHook: 0, duration: '100%'
		})
		.setPin('.sd-page-4', { pushFollowers: false })
		.setTween(page4tween)
		.addIndicators({name: 'pg4'})


		// Add scenes to the controller
		page1scene.addTo (scrollController);
		page2scene.addTo (scrollController);
		page3scene1.addTo (scrollController);
		page3scene2.addTo (scrollController);
		page3scene3.addTo (scrollController);
		page3scene4.addTo (scrollController);
		page4scene.addTo (scrollController);

		// Smooth Scroll
		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 750
		});

	})();
});
