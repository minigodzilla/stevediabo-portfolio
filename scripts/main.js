$(function () {

	function lazyLoad() {

        $('img.sd-lazy:visible, video.sd-lazy:visible').each(function () {

            var $this = $(this);

            new ScrollMagic.Scene
                ({
                    triggerElement: this,
                    triggerHook: 1,
                    offset: -512
                })
                .on("enter", function () {
                    $this.removeClass('sd-lazy');
                    $this.attr('src', $this.attr('data-src'));
                    $this.removeAttr('data-src');
                    $this.attr('poster', $this.attr('data-poster'));
                    $this.removeAttr('data-poster');
                })
                .addTo(controller);
        });

        $('section.sd-lazy').each(function () {

            var $this = $(this);

            new ScrollMagic.Scene
                ({
                    triggerElement: this,
                    triggerHook: 1,
                    offset: -512
                })
                .on("enter", function () {
                    $this.removeClass('sd-lazy');
                })
                .addTo(controller);
        });
	};

	// Create an instance of the Scroll Magic Controller
	var controller = new ScrollMagic.Controller();

	lazyLoad();

	(() => {

		// TODO: remove duplication in scenes

		// pg 1

		const page1scene1tween = TweenMax.to('.sd-page-1, .sd-page-1 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page1scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-1', triggerHook: 0, duration: '200%'
		})
		.setPin('.sd-page-1', { pushFollowers: false })
		.setTween(page1scene1tween)

		const page1scene2timeline = new TimelineLite();
			page1scene2timeline
				.to('.sd-page-1 .sd-box .sd-name-container', 0.2, { 
					className: '+=sd-animated',
					delay: 1
				})
				.to('.sd-page-1 .sd-box .sd-role-container', 0.2, { 
					className: '+=sd-animated',
					delay: 0.2
				})
				.to('.sd-page-1 .sd-box .sd-location-container', 0.2, { 
					className: '+=sd-animated'
				})
			;

		const page1scene2 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-1', triggerHook: 0
		})
		.setTween(page1scene2timeline)

		// pg 2

		const page2scene0tween = TweenMax.to('.sd-page-2 .sd-color', 1, { opacity: 1, ease: Linear.easeNone });

		const page2scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2 .sd-trigger-scene-1', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page2scene0tween)

		const page2scene00tween = TweenMax.to('.sd-page-2 .sd-color', 1, { opacity: 0, ease: Linear.easeNone });

		const page2scene00 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2 .sd-trigger-scene-3', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page2scene00tween)

		const page2scene1tween = TweenMax.to('.sd-page-2 .sd-signature', 1, { className: '+=sd-animated' });

		const page2scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2 .sd-signature', triggerHook: 0.88, reverse: false
		})
		.setTween(page2scene1tween)

		// pg 3

		const page3scene1tween = TweenMax.to('.sd-page-3 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page3scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3 .sd-trigger-scene-1', triggerHook: 1, duration: '350%'
		})
		.setTween(page3scene1tween)

		const page3scene1a = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3 .sd-trigger-scene-1', triggerHook: 1
		})
		.setClassToggle('.sd-page-3', 'sd-in-view')

		const page3scene1b = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3 .sd-trigger-scene-1', triggerHook: 0
		})
		.setClassToggle('.sd-page-3', 'sd-past-top')

		const page3scene2timeline = new TimelineLite();
			page3scene2timeline
				.fromTo('.sd-page-3 .sd-lg-bezel-container .sd-bezel-laptop', 0.2, { 
					opacity: 1,
					pointerEvents: 'auto',
					immediateRender: false
				},
				{ 
					opacity: 0,
					pointerEvents: 'none'
				})
				.fromTo('.sd-page-3 .sd-lg-bezel-container .sd-bezel-phone', 0.2, { 
					opacity: 0,
					pointerEvents: 'none'
				},
				{ 
					opacity: 1,
					pointerEvents: 'auto'
				},"=-0.2")
			;

		const page3scene2 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3 .sd-trigger-scene-2', triggerHook: 0.5
		})
		.setTween(page3scene2timeline)

		const page3scene3 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-3 .sd-trigger-scene-3', triggerHook: 1
		})
		.setClassToggle('.sd-page-3', 'sd-past-bottom')

		// pg 4

		const page4scene0tween = TweenMax.to('.sd-page-4 .sd-color', 1, { opacity: 1, ease: Linear.easeNone });

		const page4scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-4 .sd-trigger-scene-1', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page4scene0tween)

		const page4scene00tween = TweenMax.to('.sd-page-4 .sd-color', 1, { opacity: 0, ease: Linear.easeNone });

		const page4scene00 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-4 .sd-trigger-scene-3', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page4scene00tween)

		// pg 5

		const page5scene1tween = TweenMax.to('.sd-page-5 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page5scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-5 .sd-trigger-scene-1', triggerHook: 1, duration: '350%'
		})
		.setTween(page5scene1tween)

		const page5scene1a = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-5 .sd-trigger-scene-1', triggerHook: 1
		})
		.setClassToggle('.sd-page-5', 'sd-in-view')

		const page5scene1b = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-5 .sd-trigger-scene-1', triggerHook: 0
		})
		.setClassToggle('.sd-page-5', 'sd-past-top')

		const page5scene2timeline = new TimelineLite();
			page5scene2timeline
				.fromTo('.sd-page-5 .sd-lg-bezel-container .sd-bezel-laptop', 0.2, { 
					opacity: 1,
					pointerEvents: 'none',
					immediateRender: false
				},
				{ 
					opacity: 0,
					pointerEvents: 'auto'
				})
				.fromTo('.sd-page-5 .sd-lg-bezel-container .sd-bezel-phone', 0.2, { 
					opacity: 0,
					pointerEvents: 'none'
				},
				{ 
					opacity: 1,
					pointerEvents: 'auto'
				},"=-0.2")
			;

		const page5scene2 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-5 .sd-trigger-scene-2', triggerHook: 0.5
		})
		.setTween(page5scene2timeline)

		const page5scene3 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-5 .sd-trigger-scene-3', triggerHook: 1
		})
		.setClassToggle('.sd-page-5', 'sd-past-bottom')		

		// pg 6

		const page6scene0tween = TweenMax.to('.sd-page-6 .sd-color', 1, { opacity: 1, ease: Linear.easeNone });

		const page6scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-6 .sd-trigger-scene-1', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page6scene0tween)

		const page6scene00tween = TweenMax.to('.sd-page-6 .sd-color', 1, { opacity: 0, ease: Linear.easeNone });

		const page6scene00 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-6 .sd-trigger-scene-3', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page6scene00tween)

		// pg 7

		const page7scene1tween = TweenMax.to('.sd-page-7 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page7scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-7 .sd-trigger-scene-1', triggerHook: 1, duration: '350%'
		})
		.setTween(page7scene1tween)

		const page7scene1a = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-7 .sd-trigger-scene-1', triggerHook: 1
		})
		.setClassToggle('.sd-page-7', 'sd-in-view')

		const page7scene1b = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-7 .sd-trigger-scene-1', triggerHook: 0
		})
		.setClassToggle('.sd-page-7', 'sd-past-top')

		const page7scene3 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-7 .sd-trigger-scene-3', triggerHook: 1
		})
		.setClassToggle('.sd-page-7', 'sd-past-bottom')		

		// pg 8

		const page8scene0tween = TweenMax.to('.sd-page-8 .sd-color', 1, { opacity: 1, ease: Linear.easeNone });

		const page8scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-8 .sd-trigger-scene-1', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page8scene0tween)

		const page8scene00tween = TweenMax.to('.sd-page-8 .sd-color', 1, { opacity: 0, ease: Linear.easeNone });

		const page8scene00 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-8 .sd-trigger-scene-3', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page8scene00tween)

		// pg 9

		const page9scene1tween = TweenMax.to('.sd-page-9 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		const page9scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-9 .sd-trigger-scene-1', triggerHook: 1, duration: '350%'
		})
		.setTween(page9scene1tween)

		const page9scene1a = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-9 .sd-trigger-scene-1', triggerHook: 1
		})
		.setClassToggle('.sd-page-9', 'sd-in-view')

		const page9scene1b = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-9 .sd-trigger-scene-1', triggerHook: 0
		})
		.setClassToggle('.sd-page-9', 'sd-past-top')

		const page9scene2timeline = new TimelineLite();
			page9scene2timeline
				.fromTo('.sd-page-9 .sd-lg-bezel-container .sd-bezel-winphone', 0.2, { 
					opacity: 1,
					pointerEvents: 'none',
					immediateRender: false
				},
				{ 
					opacity: 0,
					pointerEvents: 'auto'
				})
				.fromTo('.sd-page-9 .sd-lg-bezel-container .sd-bezel-surface', 0.2, { 
					opacity: 0,
					pointerEvents: 'none'
				},
				{ 
					opacity: 1,
					pointerEvents: 'auto'
				},"=-0.2")
			;

		const page9scene2 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-9 .sd-trigger-scene-2', triggerHook: 0.5
		})
		.setTween(page9scene2timeline)

		const page9scene3 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-9 .sd-trigger-scene-3', triggerHook: 1
		})
		.setClassToggle('.sd-page-9', 'sd-past-bottom')		

		// pg 10

		const page10scene0tween = TweenMax.to('.sd-page-10 .sd-color', 1, { opacity: 1, ease: Linear.easeNone });

		const page10scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-10 .sd-trigger-scene-1', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page10scene0tween)

		const page10scene00tween = TweenMax.to('.sd-page-10 .sd-color', 1, { opacity: 0, ease: Linear.easeNone });

		const page10scene00 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-10 .sd-trigger-scene-3', triggerHook: 0.5, duration: '25%'
		})
		.setTween(page10scene00tween)

		// Add scenes to the controller
		page1scene1.addTo (controller);
		page1scene2.addTo (controller);
		page2scene0.addTo (controller);
		page2scene00.addTo (controller);
		page2scene1.addTo (controller);
		page3scene1.addTo (controller);
		page3scene1a.addTo (controller);
		page3scene1b.addTo (controller);
		page3scene2.addTo (controller);
		page3scene3.addTo (controller);
		page4scene0.addTo (controller);
		page4scene00.addTo (controller);
		page5scene1.addTo (controller);
		page5scene1a.addTo (controller);
		page5scene1b.addTo (controller);
		page5scene2.addTo (controller);
		page5scene3.addTo (controller);
		page6scene0.addTo (controller);
		page6scene00.addTo (controller);
		page7scene1.addTo (controller);
		page7scene1a.addTo (controller);
		page7scene1b.addTo (controller);
		page7scene3.addTo (controller);
		page8scene0.addTo (controller);
		page8scene00.addTo (controller);
		page9scene1.addTo (controller);
		page9scene1a.addTo (controller);
		page9scene1b.addTo (controller);
		page9scene2.addTo (controller);
		page9scene3.addTo (controller);
		page10scene0.addTo (controller);
		page10scene00.addTo (controller);

		// Smooth Scroll
		// var scroll = new SmoothScroll('a[href*="#"]', {
		// 	speed: 750
		// });

		$('.sd-screen-content-video').one('click', function() {

			var v = $(this);

			v[0].load();

			v.on('canplaythrough', function() {
				v[0].play();
			});

			v.on('click', function() {
				if (v[0].paused)
				{
					v[0].play();
				}
				else
				{
					v[0].pause();
				}
			});

			v.on('loadstart', function() {
				v.parent().addClass('sd-loading');
				v.addClass('sd-loading');
			});

			v.on('play', function() {
				v.parent().removeClass('sd-paused sd-loading').addClass('sd-playing');
				v.removeClass('sd-paused sd-loading').addClass('sd-playing');
			});

			v.on('pause', function() {
				v.parent().removeClass('sd-playing').addClass('sd-paused');
				v.removeClass('sd-playing').addClass('sd-paused');
			});

		});

	})();
});