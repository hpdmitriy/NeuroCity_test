function EasySlider(options) {
	this.slider = document.getElementById(options.selector);
	this.wrapper = this.slider.querySelector('.' + options.selector + '__wrapper');
	this.slides = this.slider.querySelectorAll('.' + options.selector + '__slide');
	this.sliderWidth = this.slider.offsetWidth;
	this.touchStart = undefined;
	this.touchMove = undefined;
	this.touchShift = undefined;
	this.index = 0;
	this.longTouch = undefined;
}

EasySlider.prototype.detectTouch = function () {
	if (typeof window !== 'undefined') {
		return Boolean(
			'ontouchstart' in window ||
			window.navigator.maxTouchPoints > 0 ||
			window.navigator.msMaxTouchPoints > 0 ||
			window.DocumentTouch && document instanceof DocumentTouch
		);
	} else return false
};

EasySlider.prototype.sliderEvents = function () {
	var _this = this;
	_this.wrapper.addEventListener('touchstart', function (event) {
		_this.startTouch(event);
	});
	_this.wrapper.addEventListener("touchmove", function(event) {
		_this.moveTouch(event);
	});
	_this.wrapper.addEventListener("touchend", function(event) {
		_this.endTouch(event);
	});
};

EasySlider.prototype.startTouch = function (event) {
	var _this = this;
	_this.longTouch = false;
	setTimeout(function () {
		_this.longTouch = true;
	}, 250);
	_this.touchStart = event.touches[0].pageX;
	_this.wrapper.classList.remove('animate');
};

EasySlider.prototype.moveTouch = function (event) {
	this.touchMove =  event.touches[0].pageX;
	this.touchShift = this.index*this.sliderWidth + (this.touchStart - this.touchMove);
	if (this.touchShift < this.sliderWidth * (this.slides.length-1)) {
		this.wrapper.style.transform = 'translate3d(-' + this.touchShift + 'px,0,0)';
	}
};

EasySlider.prototype.endTouch = function (event) {
	var absShift = Math.abs(this.index * this.sliderWidth - this.touchShift);
	if ((absShift > this.sliderWidth / 2) || !this.longTouch) {
		if (this.touchShift > this.index * this.sliderWidth && this.index < this.slides.length-1) {
			this.index++;
		} else if (this.touchShift < this.index*this.sliderWidth && this.index > 0) {
			this.index--;
		}
	}
	this.wrapper.classList.add('animate');
	this.wrapper.style.transform = 'translate3d(-' + this.index*this.sliderWidth + 'px,0,0)';
};

EasySlider.prototype.init = function () {
	var isTouch = this.detectTouch();
	var _this = this;
	if(isTouch) {
		this.wrapper.style.width = this.slides.length + '00%';
		this.slides.forEach(function (slide) {
			slide.style.width = Math.round((100/_this.slides.length) * 10000) / 10000 + '%';
		});
		this.sliderEvents()
	} else console.log('Not work in Desktop')

};

var Slider = new EasySlider({
	selector: 'slider'
});

Slider.init();
