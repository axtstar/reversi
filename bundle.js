(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var delay = function delay(t) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, t);
    });
};

function countUp() {
    var i;
    return regeneratorRuntime.async(function countUp$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                console.log('start');
                i = 1;

            case 2:
                if (!(i <= 10)) {
                    context$1$0.next = 9;
                    break;
                }

                context$1$0.next = 5;
                return regeneratorRuntime.awrap(delay(1000));

            case 5:
                console.log(i);

            case 6:
                i++;
                context$1$0.next = 2;
                break;

            case 9:
                console.log('end');

            case 10:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
}

console.log('before');
countUp().then(function () {
    console.log('after');
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXh0L0RvY3VtZW50cy9naXQvZ2l0aHViL3JldmVyc2kvYXBwMi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxHQUFHLFNBQVIsS0FBSyxDQUFHLENBQUM7V0FBSSxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87ZUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUFBLENBQUM7Q0FBQSxDQUFDOztBQUVsRSxTQUFlLE9BQU87UUFFVCxDQUFDOzs7O0FBRFYsdUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDWixpQkFBQyxHQUFHLENBQUM7OztzQkFBRSxDQUFDLElBQUksRUFBRSxDQUFBOzs7Ozs7Z0RBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQzs7O0FBQ2pCLHVCQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7QUFGTSxpQkFBQyxFQUFFOzs7OztBQUk1Qix1QkFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7OztDQUN0Qjs7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQ2pCLFdBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDeEIsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGRlbGF5ID0gdCA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdCkpO1xuXG5hc3luYyBmdW5jdGlvbiBjb3VudFVwKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydCcpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZW5kJyk7XG59XG5cbmNvbnNvbGUubG9nKCdiZWZvcmUnKTtcbmNvdW50VXAoKS50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWZ0ZXInKTtcbn0pO1xuIl19
