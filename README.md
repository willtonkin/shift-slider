# Shift Slider

> A CSS first, pragmatic JavaScript slider

## Demo

See some examples of it in action [here](./docs)

## How to use

On page load Shift Slider looks for `data-ShiftSlider` attributes and instantiates a slider for for each one found.

A slider can take the following structure, where only the `data-ShiftSlider-` style attributes matter:

```html
  <div data-ShiftSlider>
    <div data-ShiftSlider-item></div>
    <div data-ShiftSlider-item></div>
    <div data-ShiftSlider-item></div>

    <div data-ShiftSlider-prev></div>
    <div data-ShiftSlider-next></div>
  </div>
```

Once initiated classes are added to the slider, expressing current slides and the others' relative positions to that slide:

```html
  <div data-ShiftSlider>
    <div data-ShiftSlider-item class="ShiftSlider-prev ShiftSlider-prev-1"></div>
    <div data-ShiftSlider-item class="ShiftSlider-current"></div>
    <div data-ShiftSlider-item class="ShiftSlider-next ShiftSlider-next-1"></div>
    <div data-ShiftSlider-item class="ShiftSlider-next ShiftSlider-next-2"></div>

    <div data-ShiftSlider-prev></div>
    <div data-ShiftSlider-next></div>
  </div>
```

**This leaves styling and animating up to CSS 💅**

## Features

- [x] trigger slide changes from other elements or function calls
- [x] support multiple instances on the page
- [x] build-chain (minify and transpiling) & extended browser support
- [ ] navigate from #hash-url-changes
