// init controller
var controller = new ScrollMagic.Controller();

$(function () {

	// Create an instance of the Scroll Magic Controller
	let scrollController = new ScrollMagic.Controller();

	(() => {

		// locking down page heights based on initial 100vh

		// var n = $(".sd-lock-height");
		// n.length > 0 && n.css("height", n.height() + "px");

		// TODO: remove duplication in scenes

		// pg 1

		const page1tween = TweenMax.to('.sd-page-1 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page1scene = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-1', triggerHook: 0, duration: '200%'
		})
		.setPin('.sd-page-1', { pushFollowers: false })
		.setTween(page1tween)
		// .addIndicators({name: 'pg1'})

		// pg 2

		const page2scene1tween = TweenMax.to('.sd-page-2 .sd-box', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page2scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2', triggerHook: 0, duration: '100%'
		})
		.setPin('.sd-page-2', { pushFollowers: false })
		.setTween(page2scene1tween)
		// .addIndicators({name: 'pg2 sc1'})

		const page2scene2tween = TweenMax.to('.sd-page-2 .sd-signature', 1, { className: '+=sd-animated' });

		const page2scene2 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2', triggerHook: 0, reverse: false
		})
		.setTween(page2scene2tween)
		// .addIndicators({name: 'pg2 sc2'})

		// pg 3

		const page3scene1tween = TweenMax.to('.sd-page-3 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page3scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3', triggerHook: 1, duration: '350%'
		})
		.setTween(page3scene1tween)
		// .addIndicators({name: 'pg3 sc1'})

		const page3scene1a = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3', triggerHook: 1
		})
		.setClassToggle('.sd-page-3', 'sd-in-view')
		// .addIndicators({name: 'pg3 sc1a'})

		const page3scene2 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-trigger-page-3-scene-2', triggerHook: 0
		})
		.setClassToggle('.sd-page-3', 'sd-past-top')
		// .addIndicators({name: 'pg3 sc2'})

		const page3scene3timeline = new TimelineLite();
			page3scene3timeline
				.fromTo('.sd-page-3 .sd-lg-bezel-container .sd-bezel-laptop', 0.2, { 
					opacity: 1,
					immediateRender: false
				},
				{ 
					opacity: 0
				})
				.fromTo('.sd-page-3 .sd-lg-bezel-container .sd-bezel-phone', 0.2, { 
					opacity: 0
				},
				{ 
					opacity: 1
				})
			;

		const page3scene3 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-trigger-page-3-scene-3', triggerHook: 0.5
		})
		.setTween(page3scene3timeline)
		// .addIndicators({name: 'pg3 sc3'})

		const page3scene4 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-trigger-page-3-scene-4', triggerHook: 1
		})
		.setClassToggle('.sd-page-3', 'sd-past-bottom')		
		// .addIndicators({name: 'pg3 sc4'})

		const page3scene5 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3 .sd-xs-bezel-container .sd-bezel-laptop', triggerHook: 0.5, reverse: false
		})
		.setClassToggle('.sd-page-3 .sd-xs-bezel-container .sd-bezel-laptop', 'sd-animated')		
		// .addIndicators({name: 'pg3 sc5'})

		const page3scene6 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3 .sd-xs-bezel-container .sd-bezel-phone', triggerHook: 0.5, reverse: false
		})
		.setClassToggle('.sd-page-3 .sd-xs-bezel-container .sd-bezel-phone', 'sd-animated')		
		// .addIndicators({name: 'pg3 sc6'})

		// pg 4

		const page4tween = TweenMax.to('.sd-page-4 .sd-box', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page4scene = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-4', triggerHook: 0, duration: '100%'
		})
		.setPin('.sd-page-4', { pushFollowers: false })
		.setTween(page4tween)
		// .addIndicators({name: 'pg4'})


		// Add scenes to the controller
		page1scene.addTo (scrollController);
		page2scene1.addTo (scrollController);
		page2scene2.addTo (scrollController);
		page3scene1.addTo (scrollController);
		page3scene1a.addTo (scrollController);
		page3scene2.addTo (scrollController);
		page3scene3.addTo (scrollController);
		page3scene4.addTo (scrollController);
		page3scene5.addTo (scrollController);
		page3scene6.addTo (scrollController);
		page4scene.addTo (scrollController);

		// Smooth Scroll
		// var scroll = new SmoothScroll('a[href*="#"]', {
		// 	speed: 750
		// });

	})();
});
