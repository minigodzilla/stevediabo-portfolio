(() => {

	function lazyLoad() {

		$('img.sd-lazy, video.sd-lazy').each(function () {

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

	$('.sd-page-simple-title').each(function () {

		var $this = $(this);
		var i = $this.attr('sd-page');

		const tween = TweenMax.to('.sd-page-'+i+' .sd-color', 1, { className: '+=sd-animated' });

		new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-'+i+' .sd-trigger-scene-1', triggerHook: 0.5, reverse: false
		})
		.setTween(tween)
		.addTo(controller);
	});

	$('.sd-page-work-detail').each(function () {

		var $this = $(this);
		var i = $this.attr('sd-page');

		// animating stripe areas and stripes

		const stripeTween = TweenMax.to('.sd-page-'+i+' .sd-stripe-area, .sd-page-'+i+' .sd-stripe-area .sd-stripe', 1, { className: '+=sd-animated', ease: Linear.easeNone });

		new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-'+i+' .sd-trigger-scene-1',
			triggerHook: 1,
			duration: '350%'
		})
		.setTween(stripeTween)
		.addTo(controller);

		// adding classes that control bezel container positioning on desktop

		new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-'+i+' .sd-trigger-scene-1', triggerHook: 1
		})
		.setClassToggle('.sd-page-'+i, 'sd-in-view')
		.addTo(controller);

		new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-'+i+' .sd-trigger-scene-1', triggerHook: 0
		})
		.setClassToggle('.sd-page-'+i, 'sd-past-top')
		.addTo(controller);

		new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-'+i+' .sd-trigger-scene-3', triggerHook: 1
		})
		.setClassToggle('.sd-page-'+i, 'sd-past-bottom')
		.addTo(controller);

		// fade in/out multiple bezels on desktop, if present

		const bezelTimeline = new TimelineLite();
			bezelTimeline
				.fromTo('.sd-page-'+i+' .sd-bezel-container .sd-bezel-1', 0.2, { 
					opacity: 1,
					pointerEvents: 'auto',
					immediateRender: false
				},
				{ 
					opacity: 0,
					pointerEvents: 'none'
				})
				.fromTo('.sd-page-'+i+' .sd-bezel-container .sd-bezel-2', 0.2, { 
					opacity: 0,
					pointerEvents: 'none'
				},
				{ 
					opacity: 1,
					pointerEvents: 'auto'
				},"=-0.2")
			;

		new ScrollMagic.Scene
		({
			triggerElement: '.sd-page-'+i+' .sd-trigger-scene-2', triggerHook: 0.5
		})
		.setTween(bezelTimeline)
		.addTo(controller);

	});

	// animate bezel container background image position on mobile

	$('.sd-bezel-container').each(function () {

		var $this = $(this);

		const tween = TweenMax.to($this, 1, { className: '+=sd-animated', ease: Linear.easeNone });

		new ScrollMagic.Scene
		({
			triggerElement: this,
			triggerHook: 1,
			duration: '300%'
		})
		.setTween(tween)
		.addTo(controller);
	});

	// pg 1

	const page1scene1tween = TweenMax.to('.sd-page-1, .sd-page-1 .sd-stripe-area .sd-stripe', 1, { className: '+=sd-animated', ease: Linear.easeNone });

	const page1scene1 = new ScrollMagic.Scene
	({
		triggerElement: '.sd-page-1', triggerHook: 0, duration: '200%'
	})
	.setPin('.sd-page-1', { pushFollowers: false })
	.setTween(page1scene1tween)
	.addTo(controller);

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
	.addTo(controller);

	// pg 2

	const photoTimeline = new TimelineLite();
		photoTimeline
			.fromTo('.sd-photo', 0.4, { 
				transform: 'translate3d(200%,5%,0) rotate(-260deg) scale(0.85)'
			},
			{
				transform: 'translate3d(0%,0%,0) rotate(4deg) scale(0.85)'
			})
		;

	const photoScene = new ScrollMagic.Scene
	({
		triggerElement: '.sd-photo', triggerHook: 0.5, reverse: false
	})
	.setTween(photoTimeline)
	.addTo(controller);

	const signatureTween = TweenMax.to('.sd-signature', 1, { className: '+=sd-animated' });

	const signatureScene = new ScrollMagic.Scene
	({
		triggerElement: '.sd-signature', triggerHook: 0.75, reverse: false
	})
	.setTween(signatureTween)
	.addTo(controller);

	// video controls

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
