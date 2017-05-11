Array 函数对低版本IE不兼容的方法
//添加array map函数的IE兼容
var arrayMap4IE = function(){
    if (!Array.prototype.map) {
        Array.prototype.map = function(callback, thisArg) {

            var T, A, k;

            if (this == null) {
                throw new TypeError(" this is null or not defined");
            }

            var O = Object(this);

            var len = O.length >>> 0;

            if (typeof callback !== "function") {
                throw new TypeError(callback + " is not a function");
            }

            if (thisArg) {
                T = thisArg;
            }

            A = new Array(len);

            k = 0;

            while(k < len) {

                var kValue, mappedValue;

                if (k in O) {

                    kValue = O[ k ];

                    mappedValue = callback.call(T, kValue, k, O);
                    A[ k ] = mappedValue;
                }
                k++;
            }
            return A; 
        };
    }
} 
//添加IE低版本对forEach函数的支持
var arrayForeach4IE = function(){
    if (!Array.prototype.forEach)  
      {  
          Array.prototype.forEach = function(fun /*, thisp*/)  
          {  
              var len = this.length;  
              if (typeof fun != "function")  
                  throw new TypeError();  

              var thisp = arguments[1];  
              for (var i = 0; i < len; i++)  
              {  
                  if (i in this)  
                      fun.call(thisp, this[i], i, this);  
              }  
          };  
      }  
}
