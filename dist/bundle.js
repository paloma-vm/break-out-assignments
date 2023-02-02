(()=>{"use strict";var t=function(){function t(t,o,n,r,i){void 0===t&&(t=0),void 0===o&&(o=0),void 0===n&&(n=100),void 0===r&&(r=100),void 0===i&&(i="#f00"),this.x=t,this.y=o,this.width=n,this.height=r,this.color=i}return t.prototype.moveTo=function(t,o){this.x=t,this.y=o},t.prototype.moveBy=function(t,o){this.x+=t,this.y+=o},t.prototype.render=function(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()},t}();const o=t;var n,r=(n=function(t,o){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},n(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}),i=function(t){function o(o,n,r,i){void 0===o&&(o=0),void 0===n&&(n=0),void 0===r&&(r=10),void 0===i&&(i="#0095DD");var e=t.call(this,o,n,0,0,i)||this;return e.radius=r,e.dx=2,e.dy=-2,e}return r(o,t),o.prototype.move=function(){this.x+=this.dx,this.y+=this.dy},o.prototype.render=function(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fillStyle=this.color,t.fill(),t.closePath()},o}(o);const e=i;var c=function(){var t=function(o,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},t(o,n)};return function(o,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=o}t(o,n),o.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const s=function(t){function o(o,n,r,i,e){return void 0===r&&(r=75),void 0===i&&(i=10),void 0===e&&(e="#0095DD"),t.call(this,o,n,r,i,e)||this}return c(o,t),o}(o);var u=function(){var t=function(o,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},t(o,n)};return function(o,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=o}t(o,n),o.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const a=function(t){function o(o,n,r,i,e,c){void 0===o&&(o=0),void 0===n&&(n=0),void 0===r&&(r=75),void 0===i&&(i=20),void 0===e&&(e="#b6d7a8"),void 0===c&&(c=!0);var s=t.call(this,o,n,r,i,e)||this;return s.status=c,s}return u(o,t),o}(o);var h=function(){function t(t,o){this.brickPadding=10,this.brickOffsetTop=30,this.brickOffsetLeft=30,this.brickWidth=75,this.brickHeight=20,this.cols=t,this.rows=o,this.bricks=[],this.initialize()}return t.prototype.initialize=function(){for(var t=0;t<this.cols;t+=1){this.bricks[t]=[];for(var o=0;o<this.rows;o+=1){var n=t*(this.brickWidth+this.brickPadding)+this.brickOffsetLeft,r=o*(this.brickHeight+this.brickPadding)+this.brickOffsetTop;this.bricks[t][o]=new a(n,r)}}},t.prototype.render=function(t){for(var o=0;o<this.cols;o+=1)for(var n=0;n<this.rows;n+=1){var r=this.bricks[o][n];!0===r.status&&r.render(t)}},t}();const d=h;var f=function(){var t=function(o,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},t(o,n)};return function(o,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=o}t(o,n),o.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const l=function(t){function o(o,n,r,i,e){return void 0===o&&(o=0),void 0===n&&(n=0),void 0===r&&(r=100),void 0===i&&(i=100),void 0===e&&(e="#d6d6d6"),t.call(this,o,n,r,i,e)||this}return f(o,t),o}(o);var y=function(){var t=function(o,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},t(o,n)};return function(o,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=o}t(o,n),o.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),p=function(t){function o(o,n,r,i,e,c,s){void 0===n&&(n=0),void 0===r&&(r=0),void 0===s&&(s="16px Helvetica");var u=t.call(this,n,r,0,0,i)||this;return u.text=o,u.value=e,u.font=s,u.align=c,u}return y(o,t),o.prototype.render=function(t){t.font=this.font,t.fillStyle=this.color,t.fillText("".concat(this.text," ").concat(this.value),this.x,this.y),t.textAlign=this.align},o}(o);const v=p;var w=document.getElementById("myCanvas"),x=w.getContext("2d"),_=(w.width-75)/2,g=w.height-10,b=new l(0,0,w.width,w.height),O=new e,k=new s(_,g,75,10),m=!1,P=!1,j=new d(5,3),A=new v("Score: ",100,20,"blue",0,"left"),L=new v("Lives: ",w.width-70,20,"green",3,"right");function T(){O.x=w.width/2,O.y=w.height-30,O.dx=2,O.dy=-2,k.x=(w.width-k.width)/2}A.align="left",L.align="right",A.value=0,L.value=3,document.addEventListener("keydown",(function(t){"Right"===t.key||"ArrowRight"===t.key?m=!0:"Left"!==t.key&&"ArrowLeft"!==t.key||(P=!0)}),!1),document.addEventListener("keyup",(function(t){"Right"===t.key||"ArrowRight"===t.key?m=!1:"Left"!==t.key&&"ArrowLeft"!==t.key||(P=!1)}),!1),document.addEventListener("mousemove",(function(t){var o=t.clientX-w.offsetLeft;o>0&&o<w.width&&k.moveTo(o-k.width/2,g)}),!1),T(),function t(){x.clearRect(0,0,w.width,w.height),b.render(x),j.render(x),k.render(x),O.render(x),A.render(x),L.render(x),function(){for(var t=0;t<j.cols;t+=1)for(var o=0;o<j.rows;o+=1){var n=j.bricks[t][o];!0===n.status&&O.x>n.x&&O.x<n.x+n.width&&O.y>n.y&&O.y<n.y+n.height&&(O.dy=-O.dy,n.status=!1,A.value+=1,A.value===j.rows*j.cols&&(alert("YOU WIN, CONGRATULATIONS!"),document.location.reload()))}}(),O.move(),m&&k.x<w.width-k.width?k.moveBy(7,0):P&&k.x>0&&k.moveBy(-7,0),O.y+O.dy<0&&(O.dy=-O.dy),O.y+O.dy>w.height&&(O.dy=-O.dy),(O.x+O.dx>w.width||O.x+O.dx<0)&&(O.dx=-O.dx),(O.y+O.dy>w.height||O.y+O.dy<0)&&(O.dy=-O.dy),(O.x+O.dx>w.width-O.radius||O.x+O.dx<O.radius)&&(O.dx=-O.dx),O.y+O.dy<O.radius?O.dy=-O.dy:O.y+O.dy>w.height-O.radius&&(O.x>k.x&&O.x<k.x+k.width?O.dy=-O.dy:(L.value-=1,L.value<1?(alert("GAME OVER"),L.value=3,A.value=0,document.location.reload()):T())),requestAnimationFrame(t)}()})();