var Accordion = function (options) {
	this.$el = $(options.someClass);
	this.closeAllButFirst();
	this.bind();
};

Accordion.prototype.closeAllButFirst = function() {

	this.$el.find('.content').hide().first().show();
	this.$el.find('.label').first().addClass('active');


};

Accordion.prototype.bind = function() {
	var that = this;

	this.$el.on('click', '.label', function() {

		var disp = $(this).next().css('display');
		if (disp === 'none') {

			//console.log(this, that);
			that.$el.find('.content').slideUp(300);
			$(this).next().slideDown(300);

			that.$el.find('.label').removeClass('active');
			$(this).addClass('active');
		}
		

	});

	
};