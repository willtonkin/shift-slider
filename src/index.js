const states = {};
const NAMESPACE = "ShiftSlider";
const CLASS_PATTERN = new RegExp(`${NAMESPACE}-\\S*`, "g");

function updateClasses(state) {
	if (state.moving) return;

	state.moving = true;

	setTimeout(() => {
		state.moving = false;
	}, 500);

	state.slideElements.forEach((element, i) => {
		// remove all previous dynamic classes
		element.className = element.className.replaceAll(CLASS_PATTERN, "");

		const relativeIndex = Math.abs(i - state.slide);
		if (i < state.slide) {
			element.classList.add(
				`${NAMESPACE}-prev`,
				`${NAMESPACE}-prev-${relativeIndex}`
			);
		} else if (i > state.slide) {
			element.classList.add(
				`${NAMESPACE}-next`,
				`${NAMESPACE}-next-${relativeIndex}`
			);
		} else {
			element.classList.add(`${NAMESPACE}-current`);
		}
	});
}

function moveNext(state) {
	if (state.moving) return;

	const slideCount = state.slideElements.length;

	state.slide++;
	if (state.slide >= slideCount) state.slide = 0;

	updateClasses(state);
}

function movePrev(state) {
	if (state.moving) return;

	const slideCount = state.slideElements.length;

	state.slide--;
	if (state.slide < 0) state.slide = slideCount - 1;

	updateClasses(state);
}

function initShiftSlider(id, element) {
	const slideElements = Array.from(
		element.querySelectorAll(`[data-${NAMESPACE}-item]`)
	);

	states[id] = {
		element,
		slideElements,
		moving: false,
		slide: 0,
	};

	updateClasses(states[id]);
	addEventListeners(states[id]);
}

function addEventListeners(state) {
	const element = state.element;
	const next = element.querySelector(`[data-${NAMESPACE}-next]`);
	const prev = element.querySelector(`[data-${NAMESPACE}-prev]`);

	next.addEventListener("click", () => moveNext(state));
	prev.addEventListener("click", () => movePrev(state));
}

// make it rain
document &&
	document.addEventListener("DOMContentLoaded", () => {
		const sliderElms = document.querySelectorAll(`[data-${NAMESPACE}]`);

		for (let i = 0; i < sliderElms.length; i++)
			initShiftSlider(i, sliderElms[i]);
	});
