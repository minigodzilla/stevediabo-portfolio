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
                    $this.attr({
                    	src:    $this.attr('data-src'),
                    	srcset: $this.attr('data-srcset'),
                    	poster: $this.attr('data-poster')
                    });
                    $this.removeAttr('data-src data-srcset data-poster');
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
	let controller = new ScrollMagic.Controller();

	lazyLoad();

    // resize detection with 500ms debounce
    var resizeTimer;

    $(window).on('resize', function (e) {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {

            lazyLoad();

        }, 500);

    });

	(() => {

		// throttle the frames-per-second
		//TweenMax.ticker.fps(40);

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

		const page2scene0timeline = new TimelineLite();
			page2scene0timeline
			.fromTo('.sd-page-2 .sd-color', 0.2, { 
				opacity: '0'
			},
			{
				opacity: '1'
			})
			.fromTo('.sd-page-2 .sd-photo', 0.4, { 
				transform: 'translate3d(200%,5%,0) rotate(-260deg) scale(0.85)'
			},
			{
				transform: 'translate3d(0%,0%,0) rotate(4deg) scale(0.85)'
			})
			;

		const page2scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2 .sd-trigger-scene-1', triggerHook: 0.5, reverse: false
		})
		.setTween(page2scene0timeline)

		const page2scene1tween = TweenMax.to('.sd-page-2 .sd-signature', 1, { className: '+=sd-animated' });

		const page2scene1 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-2 .sd-signature', triggerHook: 0.75, reverse: false
		})
		.setTween(page2scene1tween)

		// pg 3

        $('.sd-page-3 .sd-xs-bezel-container').each(function () {

            var $this = $(this);

            new ScrollMagic.Scene
                ({
                    triggerElement: this,
                    triggerHook: 1,
                    duration: '350%'
                })
                .setTween(TweenMax.to($this, 1, { className: '+=sd-animated', ease: Linear.easeNone }))
                .addTo(controller);
        });

		const page3scene1tween = TweenMax.to('.sd-page-3 .sd-stripe-area, .sd-page-3 .sd-stripe-area .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

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

		const page4scene0tween = TweenMax.to('.sd-page-4 .sd-color', 1, { className: '+=sd-animated' });

		const page4scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-4 .sd-trigger-scene-1', triggerHook: 0.5, reverse: false
		})
		.setTween(page4scene0tween)

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

		const page6scene0tween = TweenMax.to('.sd-page-6 .sd-color', 1, { className: '+=sd-animated' });

		const page6scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-6 .sd-trigger-scene-1', triggerHook: 0.5, reverse: false
		})
		.setTween(page6scene0tween)

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

		const page8scene0tween = TweenMax.to('.sd-page-8 .sd-color', 1, { className: '+=sd-animated' });

		const page8scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-8 .sd-trigger-scene-1', triggerHook: 0.5, reverse: false
		})
		.setTween(page8scene0tween)

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

		const page10scene0tween = TweenMax.to('.sd-page-10 .sd-color', 1, { className: '+=sd-animated' });

		const page10scene0 = new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-10 .sd-trigger-scene-1', triggerHook: 0.5, reverse: false
		})
		.setTween(page10scene0tween)

		// pg 11

		const page11scene1tween = TweenMax.to('.sd-page-11, .sd-page-11 .sd-animated-item', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		// const page11scene1 = new ScrollMagic.Scene
		// ({
		// 	triggerElement: '.sd-page-11', triggerHook: 0, duration: '200%'
		// })
		// .setPin('.sd-page-11', { pushFollowers: true })
		// .setTween(page11scene1tween)

		const page11scene2timeline = new TimelineLite();
			page11scene2timeline
				.to('.sd-page-11 .sd-box .sd-name-container', 0.2, { 
					className: '+=sd-animated'
				})
			;

		// const page11scene2 = new ScrollMagic.Scene
		// ({
		// 	triggerElement: '.sd-page-11', triggerHook: 0
		// })
		// .setTween(page11scene2timeline)

		// Add scenes to the controller
		page1scene1.addTo (controller);
		page1scene2.addTo (controller);
		page2scene0.addTo (controller);
		page2scene1.addTo (controller);
		page3scene1.addTo (controller);
		page3scene1a.addTo (controller);
		page3scene1b.addTo (controller);
		page3scene2.addTo (controller);
		page3scene3.addTo (controller);
		page4scene0.addTo (controller);
		page5scene1.addTo (controller);
		page5scene1a.addTo (controller);
		page5scene1b.addTo (controller);
		page5scene2.addTo (controller);
		page5scene3.addTo (controller);
		page6scene0.addTo (controller);
		page7scene1.addTo (controller);
		page7scene1a.addTo (controller);
		page7scene1b.addTo (controller);
		page7scene3.addTo (controller);
		page8scene0.addTo (controller);
		page9scene1.addTo (controller);
		page9scene1a.addTo (controller);
		page9scene1b.addTo (controller);
		page9scene2.addTo (controller);
		page9scene3.addTo (controller);
		page10scene0.addTo (controller);
		//page11scene1.addTo (controller);
		//page11scene2.addTo (controller);

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
