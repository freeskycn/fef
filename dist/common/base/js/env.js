define(function(require,exports,module){function c(c){return c.test(a)}var a=navigator.userAgent;module.exports={isPc:function(){return c(/(mac|window)/i)},isMobile:function(){return c(/(android|iphone)/i)}}});