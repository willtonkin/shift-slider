!(function (d) {
	var itemClassName = "photo";
	(items = d.getElementsByClassName(itemClassName)),
		(totalItems = items.length),
		(slide = 0),
		(moving = true);

	function setClasses() {
		for (var i = 0; i < totalItems; i++) {
			let diff = Math.abs(i - slide);
			if (i < slide) {
				items[i].className = itemClassName + " prev " + "prev-" + diff;
			} else if (i === slide) {
				items[i].className = itemClassName + " current";
			} else {
				items[i].className = itemClassName + " next " + "next-" + diff;
			}
		}
	}

	function setEventListeners() {
		var next = d.getElementsByClassName("carousel-next")[0],
			prev = d.getElementsByClassName("carousel-prev")[0];

		next.addEventListener("click", moveNext);
		prev.addEventListener("click", movePrev);
	}

	function disableInteraction() {
		moving = true;

		setTimeout(function () {
			moving = false;
		}, 500);
	}

	function moveCarouselTo(slide) {
		// Check if carousel is moving, if not, allow interaction
		if (!moving) {
			// temporarily disable interactivity
			disableInteraction();

			setClasses();
		}
	}

	// Next navigation handler
	function moveNext() {
		// Check if moving

		if (!moving) {
			// If it's the last slide, reset to 0, else +1
			if (slide < totalItems - 1) {
				slide++;
			}
			console.log("next");
			// Move carousel to updated slide
			moveCarouselTo(slide);
		}
	}

	// Previous navigation handler
	function movePrev() {
		// Check if moving
		if (!moving) {
			// If it's the first slide, set as the last slide, else -1
			if (slide > 0) {
				slide--;
			}
			console.log("prev");
			// Move carousel to updated slide
			moveCarouselTo(slide);
		}
	}

	// Initialise carousel
	function initCarousel() {
		setClasses();
		setEventListeners();

		// Set moving to false now that the carousel is ready
		moving = false;
	}

	// make it rain
	initCarousel();
})(document);
