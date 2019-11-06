// init controller
var controller = new ScrollMagic.Controller();

$(function () {

	// Create an instance of the Scroll Magic Controller
	let scrollController = new ScrollMagic.Controller();

	(() => {


		const page1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-1', triggerHook: 0, duration: '200%'
		})
		.setPin('.sd-page-1', { pushFollowers: false })
		.addIndicators({name: 'pg1'})

		const tween = TweenMax.to('.sd-stripe', 1, { className: '+=sd-animated', ease: Power0.easeNone });

		const page1line1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-1', triggerHook: 0, duration: '200%'
		})
		.setTween(tween)

		const page2 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2', triggerHook: 0, duration: '100%'
		})
		.setPin('.sd-page-2')
		.addIndicators({name: 'pg2'})

		const page3 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3', triggerHook: 0, duration: '100%'
		})
		.setPin('.sd-page-3')
		.addIndicators({name: 'pg3'})

		const page4 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-4', triggerHook: 0, duration: '100%'
		})
		.setPin('.sd-page-4')
		.addIndicators({name: 'pg4'})


		// Add scenes to the controller
		page1.addTo (scrollController);
		page1line1.addTo (scrollController);
		page2.addTo (scrollController);
		page3.addTo (scrollController);
		page4.addTo (scrollController);

	})();

});
