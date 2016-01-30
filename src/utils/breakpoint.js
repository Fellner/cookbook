import {EnvUtils} from 'utils';

/**
 * Exports a singleton.
 */
class Breakpoint {

  // Keep this in sync with `_breakpoints.scss`.
  small = 480;
  medium = 768;
  big = 1024;

  width = 0;
  height = 0;

  constructor() {
    if (EnvUtils.isClient()) {
      this.setupListeners();
      this.onResize(); // For initialization.
    }
  }

  setupListeners() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  isSmallerThan(bp) {
    if (!this[bp]) throw new Error('Undefined breakpoint: ' + bp);
    return this.viewport.width <= this[bp];
  }

  isWiderThan(bp) {
    if (!this[bp]) throw new Error('Undefined breakpoint: ' + bp);
    return this.viewport.width >= this[bp];
  }

  isHigherThan(bp) {
    if (!this[bp]) throw new Error('Undefined breakpoint: ' + bp);

    return this.viewport.height >= this[bp];
  }

  get viewport() {
    return {
      width: this.width,
      height: this.height
    };
  }

}

let instance = new Breakpoint();

export default instance;
