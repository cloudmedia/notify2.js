/**
 * jQuery.notifyField.js
 * Written by: Jay Simons
 * Cloudulus.Media (https://code.cloudulus.media)
 * 
 * This plugin allows you to attach a Notify2 notification to a provided element
 * 
 */

(function ($) {
    $.fn.notifyField = function (opts, callback) {
        var settings = $.extend({
            message: "An error occurred!",
            class: 'error',
            autoHide: false,
            delay: 3000,
            doConfirm: false,
            callBackYes: null,
            callBackNo: null,
            clearField: false,
            scrollToField: true,
            topOffset: 0,
            scrollTime: 1000
        }, opts);

        var n = new Notify2(settings.message, settings.class, settings.autoHide, settings.delay);
        if (settings.doConfirm) n.doConfirm(settings.callBackYes, settings.callBackNo);

        if (settings.scrollToField)
        {
            $('html, body').animate({
                scrollTop: (this.offset().top - settings.topOffset)
            }, settings.scrollTime);
        }

        if (settings.clearField) this.val("");
        this.focus();
        n.notify();
        if (typeof callback === 'function')
        {
            return callback(this);
        }else{
            return this;
        }
    }
})(jQuery);