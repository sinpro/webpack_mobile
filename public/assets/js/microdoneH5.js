function $$(name) {}
Ajax = {
  get: function (url, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if ((xhr.readyState == 4 && xhr.status == 200) || xhr.status == 304) {
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send();
  },
  post: function (url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send(data);
  },
};
$$.prototype = {
  css: function (name, obj) {
    var cssStyle = "";
    if (typeof obj == "string") {
      return document.querySelectorAll(name)[0].style[obj];
    } else {
      for (x in obj) {
        var arr = x.split("");
        for (var i = 0; i < arr.length; i++) {
          if (/[A-Z]+/.test(arr[i])) {
            arr[i] = "-" + arr[i].toLowerCase();
          }
        }
        y = arr.join("");
        cssStyle += y + ":" + obj[x] + ";";
      }
      for (var i = 0; i < document.querySelectorAll(name).length; i++) {
        document.querySelectorAll(name)[i].style.cssText += cssStyle;
      }
    }
  },
  val: function (name, val) {
    if (val == undefined) {
      return document.querySelectorAll(name)[0].value;
    } else {
      document.querySelectorAll(name)[0].value = val;
    }
  },
  filter: function (name, biaoqian, fn) {
    var dom = document.querySelectorAll(name + ">" + biaoqian);
    for (var i = dom.length - 1; i >= 0; i--) {
      fn(dom[i]);
    }
  },
  attr: function (name, attr, val) {
    if (val == undefined) {
      return document.querySelectorAll(name)[0].getAttribute(attr);
    } else {
      document.querySelectorAll(name)[0].setAttribute(attr, val);
    }
  },
  click: function (name, eq, fn) {
    var dom = document.querySelectorAll(name);
    if (eq == undefined) {
      if (dom.length == 1) {
        dom[0].onclick = function (e) {
          fn();
        };
      } else {
        for (var i = dom.length - 1; i >= 0; i--) {
          dom[i].onclick = function (e) {
            fn();
          };
        }
      }
    } else {
      dom[eq].onclick = function () {
        fn();
      };
    }
  },
  touchstart: function (name, eq, fn, bool) {
    var bool = bool == undefined ? true : false;
    var dom = document.querySelectorAll(name);
    if (bool) {
      if (eq == undefined || eq == "") {
        if (dom.length == 1) {
          dom[0].addEventListener(
            "touchstart",
            function (e) {
              fn(e);
            },
            true
          );
        } else {
          for (var i = dom.length - 1; i >= 0; i--) {
            dom[i].addEventListener(
              "touchstart",
              function (e) {
                fn(e);
              },
              true
            );
          }
        }
      } else {
        dom[eq].addEventListener(
          "touchstart",
          function (e) {
            fn(e);
          },
          true
        );
      }
    } else {
      var $name = name.substring(1, name.length);
      function touchstartfn(e) {
        if (
          e.target.className.indexOf($name) !== -1 ||
          e.target.id.indexOf($name) !== -1 ||
          e.target.tagName.toLowerCase().indexOf(name) !== -1
        ) {
          fn(e);
        }
      }
      document
        .querySelectorAll("body")[0]
        .addEventListener("touchstart", touchstartfn, true);
    }
  },
  touchmove: function (name, eq, fn1, bool) {
    var bool = bool == undefined ? true : false;
    var dom = document.querySelectorAll(name);
    if (bool) {
      if (eq == undefined || eq == "") {
        if (dom.length == 1) {
          dom[0].addEventListener(
            "touchmove",
            function (e) {
              fn1(e);
            },
            true
          );
        } else {
          for (var i = dom.length - 1; i >= 0; i--) {
            dom[i].addEventListener(
              "touchmove",
              function (e) {
                fn1(e);
              },
              true
            );
          }
        }
      } else {
        dom[eq].addEventListener(
          "touchmove",
          function (e) {
            fn1(e);
          },
          true
        );
      }
    } else {
      var $name = name.substring(1, name.length);
      function touchstartfn(e) {
        if (
          e.target.className.indexOf($name) !== -1 ||
          e.target.id.indexOf($name) !== -1 ||
          e.target.tagName.toLowerCase().indexOf(name) !== -1
        ) {
          fn(e);
        }
      }
      document
        .querySelectorAll("body")[0]
        .addEventListener("touchmove", touchstartfn, true);
    }
  },
  touchend: function (name, eq, fn, bool) {
    var bool = bool == undefined ? true : false;
    var dom = document.querySelectorAll(name);
    if (bool) {
      if (eq == undefined || eq == "") {
        if (dom.length == 1) {
          dom[0].addEventListener(
            "touchend",
            function (e) {
              fn(e);
            },
            true
          );
          dom[0].addEventListener(
            "touchcancel",
            function (e) {
              fn(e);
            },
            true
          );
        } else {
          for (var i = dom.length - 1; i >= 0; i--) {
            dom[i].addEventListener(
              "touchend",
              function (e) {
                fn(e);
              },
              true
            );
            dom[i].addEventListener(
              "touchcancel",
              function (e) {
                fn(e);
              },
              true
            );
          }
        }
      } else {
        dom[eq].addEventListener(
          "touchend",
          function (e) {
            fn(e);
          },
          true
        );
        dom[eq].addEventListener(
          "touchcancel",
          function (e) {
            fn(e);
          },
          true
        );
      }
    } else {
      var $name = name.substring(1, name.length);
      function touchstartfn(e) {
        if (
          e.target.className.indexOf($name) !== -1 ||
          e.target.id.indexOf($name) !== -1 ||
          e.target.tagName.toLowerCase().indexOf(name) !== -1
        ) {
          fn(e);
        }
      }
      document
        .querySelectorAll("body")[0]
        .addEventListener("touchend", touchstartfn, true);
      document
        .querySelectorAll("body")[0]
        .addEventListener("touchcancel", touchstartfn, true);
    }
  },
  hasClass: function (name, eq, cls) {
    cls = cls || "";
    if (cls.replace(/\s/g, "").length == 0) return false;
    var dom = document.querySelectorAll(name);
    if (eq == undefined || eq == "") {
      return new RegExp(" " + cls + " ").test(" " + dom[0].className + " ");
    } else {
      return new RegExp(" " + cls + " ").test(" " + dom[eq].className + " ");
    }
  },
  removeClass: function (name, eq, cls) {
    if (this.hasClass(name, eq, cls)) {
      var dom = document.querySelectorAll(name);
      if (eq == undefined || eq == "") {
        if (dom.length == 1) {
          var newClass = " " + dom[0].className.replace(/^\s+|\s+$/g, "") + " ";
          if (newClass.indexOf(" " + cls + " ") > -1) {
            newClass = newClass.replace(" " + cls + " ", " ");
          }
          dom[0].className = newClass.replace(/^\s+|\s+$/g, "");
        } else {
          for (var i = dom.length - 1; i >= 0; i--) {
            var newClass =
              " " + dom[i].className.replace(/^\s+|\s+$/g, "") + " ";
            if (newClass.indexOf(" " + cls + " ") > -1) {
              newClass = newClass.replace(" " + cls + " ", " ");
            }
            dom[i].className = newClass.replace(/^\s+|\s+$/g, "");
          }
        }
      } else {
        var newClass = " " + dom[eq].className.replace(/^\s+|\s+$/g, "") + " ";
        if (newClass.indexOf(" " + cls + " ") > -1) {
          newClass = newClass.replace(" " + cls + " ", " ");
        }
        dom[eq].className = newClass.replace(/^\s+|\s+$/g, "");
      }
    }
  },
  addClass: function (name, eq, cls) {
    if (!this.hasClass(name, cls, eq)) {
      var dom = document.querySelectorAll(name);
      if (eq == undefined || eq == "") {
        if (dom.length == 1) {
          var newClass = " " + dom[0].className.replace(/^\s+|\s+$/g, "") + " ";
          if (newClass.indexOf(" " + cls + " ") < 0) {
            newClass += " " + cls + " ";
          }
          dom[0].className = newClass.replace(/^\s+|\s+$/g, "");
        } else {
          for (var i = dom.length - 1; i >= 0; i--) {
            var newClass =
              " " + dom[i].className.replace(/^\s+|\s+$/g, "") + " ";
            if (newClass.indexOf(" " + cls + " ") < 0) {
              newClass += " " + cls + " ";
            }
            dom[i].className = newClass.replace(/^\s+|\s+$/g, "");
          }
        }
      } else {
        var newClass = " " + dom[eq].className.replace(/^\s+|\s+$/g, "") + " ";
        if (newClass.indexOf(" " + cls + " ") < 0) {
          newClass += " " + cls + " ";
        }
        dom[eq].className = newClass.replace(/^\s+|\s+$/g, "");
      }
    }
  },
  onclick: function (name, name2, fn) {
    for (var i = 0; i < document.querySelectorAll(name).length; i++) {
      document.querySelectorAll(name)[i].addEventListener(
        "click",
        function (e) {
          if (
            e.target.className.indexOf(name2) !== -1 ||
            e.target.id.indexOf(name2) !== -1 ||
            e.target.tagName.toLowerCase().indexOf(name2) !== -1
          ) {
            fn();
          }
        },
        false
      );
    }
  },
  onfocus: function (name, name2, fn) {
    var $name2 = name2.substring(1, name2.length);
    function touchstartfn(e) {
      if (
        e.target.className.indexOf($name2) !== -1 ||
        e.target.id.indexOf($name2) !== -1 ||
        e.target.tagName.toLowerCase().indexOf(name2) !== -1
      ) {
        for (var j = 0; j < document.querySelectorAll(name2).length; j++) {
          document
            .querySelectorAll(name2)
            [j].removeEventListener("focus", fn, true);
        }
        for (var k = 0; k < document.querySelectorAll(name2).length; k++) {
          document
            .querySelectorAll(name2)
            [k].addEventListener("focus", fn, true);
        }
      }
    }
    for (var i = 0; i < document.querySelectorAll(name).length; i++) {
      document
        .querySelectorAll(name)
        [i].addEventListener("touchstart", touchstartfn, false);
    }
  },
  remove: function (name) {
    for (var i = 0; i < document.querySelectorAll(name).length; i++) {
      if (!document.querySelectorAll(name)[i]) {
        return false;
      }
      document
        .querySelectorAll(name)
        [i].parentNode.removeChild(document.querySelectorAll(name)[i]);
    }
  },
  windowHeigth: function () {
    return Math.max(window.innerHeight, document.documentElement.clientHeight);
  },
};
var $1 = new $$();
var base64EncodeChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  62,
  -1,
  -1,
  -1,
  63,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  -1,
  -1,
  -1,
  -1,
  -1
);
var kbh, winHeight, justic2;
var val = 0;
var justic3,
  Tim = 0,
  M = [],
  MM = [],
  T = [],
  miss = null,
  M3,
  Hid,
  Show = 0,
  Show2;
var BL = {
  sv: "",
  ad: "",
  heig: "",
  lol: "0",
  olo: "0",
  hide: "0",
  T: "",
  kb: "",
  FD: "",
  WH: "",
  double: "0",
  key2: "",
  once: "0",
  Mov: "0",
  fixed: "",
  charORnum: "",
};
var PH = {
  Id: "",
  s_n: "",
  pm: "",
  cs: "0",
  add: "1",
  arrPlace: new Array(),
  L: [],
  arrId: [],
  arrPGD: [],
  version: "1.7.5",
};
function base64decode(str) {
  var c1, c2, c3, c4;
  var i, len, out;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    do {
      c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c1 == -1);
    if (c1 == -1) break;
    do {
      c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c2 == -1);
    if (c2 == -1) break;
    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
    do {
      c3 = str.charCodeAt(i++) & 0xff;
      if (c3 == 61) return out;
      c3 = base64DecodeChars[c3];
    } while (i < len && c3 == -1);
    if (c3 == -1) break;
    out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));
    do {
      c4 = str.charCodeAt(i++) & 0xff;
      if (c4 == 61) return out;
      c4 = base64DecodeChars[c4];
    } while (i < len && c4 == -1);
    if (c4 == -1) break;
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }
  return out;
}
var u = navigator.userAgent;
var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var isMobile = function () {
  var r = true;
  if (/MediaPad/i.test(u)) return false;
  r = /Mobile/i.test(u) && !/ipad/i.test(u);
  return r;
};
var isIphoneX = function () {
  return (
    /iphone/gi.test(navigator.userAgent) &&
    screen.height == 812 &&
    screen.width == 375
  );
};
function keyBoard(options) {
  this.settings = {
    id: "",
    chaosMode: 0,
    pressStatus: 1,
    kbType: 0,
    pg: {},
    odd: 1,
    reset: 0,
    svg: "",
  };
  this.activeobj = undefined;
  if (options != undefined) {
    this.settings = options;
  }
  this.caps = false;
  this.shift = false;
  this.dt = false;
  this.init = false;
  BL.sv = 'assets/' + this.settings.svg;
  var obj = this;
  this.handler = function () {
    var curid = "#" + obj.settings.id;
    document.getElementById(obj.settings.id).style.cssText += "display:none";
    document
      .querySelector(curid)
      .removeEventListener("webkitAnimationEnd", obj.handler, false);
    document
      .querySelector(curid)
      .removeEventListener("animationEnd", obj.handler, false);
    document
      .querySelector(curid)
      .removeEventListener("webkitAnimationEnd", obj.endshow, false);
    document
      .querySelector(curid)
      .removeEventListener("animationEnd", obj.endshow, false);
  };
  this.orientation = function () {
    var b = u.indexOf("SM-T800") > -1;
    if (!b) {
      return window.orientation;
    }
    var ret = 0;
    switch (window.orientation) {
      case 0:
        ret = 90;
        break;
      case 90:
        ret = 180;
        break;
      case 180:
        ret = -90;
        break;
      case -90:
        ret = 180;
        break;
    }
    return ret;
  };
  this.proportion = function () {
    var r = 0;
    if (this.orientation() == 90 || this.orientation() == -90) {
      if (isiOS) {
        if (isIphoneX()) {
          r = 0.5;
        } else if (isMobile()) {
          r = 0.6;
        } else {
          r = 0.5;
        }
      } else if (isAndroid) {
        if (isMobile()) r = 0.5;
        else r = 0.5;
      } else {
        r = 0.6;
      }
    } else {
      if (isiOS) {
        if (isIphoneX()) {
          r = 0.3;
        } else if (isMobile()) {
          r = 0.4;
        } else {
          r = 0.35;
        }
      } else if (isAndroid) {
        if (isMobile()) r = 0.4;
        else r = 0.35;
      } else {
        r = 0.4;
      }
    }
    return r;
  };
  this.endshow = function () {
    var curid = "#" + obj.settings.id;
    if (obj.orientation() == 90 || obj.orientation() == -90) {
      if (obj.caps) {
        $1.css("#kb_c_CAP", {
          background: "url(" + BL.sv + "/shift_DS_H.svg) ",
          backgroundSize: "100% 100%",
        });
      } else if (obj.shift) {
        $1.css("#kb_c_CAP", {
          background: "url(" + BL.sv + "/shift_D_H.svg) ",
          backgroundSize: "100% 100%",
        });
      } else {
        $1.css("#kb_c_CAP", {
          background: "url(" + BL.sv + "/shift_H.svg) ",
          backgroundSize: "100% 100%",
        });
      }
    } else {
      if (obj.caps) {
        $1.css("#kb_c_CAP", "#kb_c_CAP", {
          background: "url(" + BL.sv + "/shift_DS.svg) ",
          backgroundSize: "100% 100%",
        });
      } else if (obj.shift) {
        $1.css("#kb_c_CAP", {
          background: "url(" + BL.sv + "/shift_D.svg) ",
          backgroundSize: "100% 100%",
        });
      } else {
        $1.css("#kb_c_CAP", {
          background: "url(" + BL.sv + "/shift.svg) ",
          backgroundSize: "100% 100%",
        });
      }
    }
    $1.css(".row1pwd,.row2pwd,.row3pwdb", {
      background: "url(" + BL.sv + "/anjian.svg)",
      backgroundSize: "100% 100%",
    });
    $1.css(".row123", {
      background: "url(" + BL.sv + "/123.svg) ",
      backgroundSize: "100% 100%",
    });
    $1.css(".rowdelet,#kb_s_N,#kb_n_S", {
      background: "url(" + BL.sv + "/quanDEL.svg) ",
      backgroundSize: "100% 100%",
    });
    $1.css(".row3pwdd", {
      background: "url(" + BL.sv + "/quanDEL_2.svg) ",
      backgroundSize: "100% 100%",
    });
    $1.css(".rowspace", {
      background: "url(" + BL.sv + "/space.svg) ",
      backgroundSize: "100% 100%",
    });
    $1.css(".rowclose", {
      background: "url(" + BL.sv + "/123.svg) ",
      backgroundSize: "100% 100%",
    });
    $1.css(".pwd", {
      background: "url(" + BL.sv + "/shuzi_1.svg) ",
      backgroundSize: "100% 100%",
    });
    $1.css("#kb_p_D,#kb_p_CLOSE", {
      background: "url(" + BL.sv + "/shuzi_2.svg) ",
      backgroundSize: "100% 100%",
    });
    $1.css("#kb_p_D>div", {
      background: "url(" + BL.sv + "/shuzi_delete1.svg) ",
      backgroundSize: "100% 100%",
    });
    $1.css(".rowdelet>div", {
      background: "url(" + BL.sv + "/DEL.svg) ",
      backgroundSize: "100% 100%",
    });
    $1.css("#kb_p_CLOSE>div,.rowclose>div", {
      background: "url(" + BL.sv + "/done_1.svg) ",
      backgroundSize: "100% 100%",
    });
    document
      .querySelector(curid)
      .removeEventListener("webkitAnimationEnd", obj.handler, false);
    document
      .querySelector(curid)
      .removeEventListener("animationEnd", obj.handler, false);
    document
      .querySelector(curid)
      .removeEventListener("webkitAnimationEnd", obj.endshow, false);
    document
      .querySelector(curid)
      .removeEventListener("animationEnd", obj.endshow, false);
  };
}
keyBoard.prototype.generate = function () {
  this.settings.id = "testkbid";
  var k000 = "<div id=" + this.settings.id,
    k001 =
      "IGNsYXNzPSJwd2RrZXlib2FyZG91dCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7IGJvdHRvbTogMHB4OyBtYXJnaW4tbGVmdDogMHB4OyIgPjxkaXYgaWQ9ImNoYXJfa2V5Ym9hcmQiIHN0eWxlPSJ3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJSA7IGRpc3BsYXk6bm9uZTsiPjxkaXYgY2xhc3M9InJvdzEiPg==",
    k002 =
      "PGRpdiBpZD0ia2JfY18wIiBjbGFzcz0icm93MXB3ZCByb3dsZWZ0IiBkYXRhLW5hbWU9ImNfMCI+cTwvZGl2Pg==",
    k003 =
      "PGRpdiBpZD0ia2JfY18xIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzEiPnc8L2Rpdj4=",
    k004 =
      "PGRpdiBpZD0ia2JfY18yIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzIiPmU8L2Rpdj4=",
    k005 =
      "PGRpdiBpZD0ia2JfY18zIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzMiPnI8L2Rpdj4=",
    k006 =
      "PGRpdiBpZD0ia2JfY180IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzQiPnQ8L2Rpdj4=",
    k007 =
      "PGRpdiBpZD0ia2JfY181IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzUiPnk8L2Rpdj4=",
    k008 =
      "PGRpdiBpZD0ia2JfY182IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzYiPnU8L2Rpdj4=",
    k009 =
      "PGRpdiBpZD0ia2JfY183IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzciPmk8L2Rpdj4=",
    k010 =
      "PGRpdiBpZD0ia2JfY184IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzgiPm88L2Rpdj4=",
    k011 =
      "PGRpdiBpZD0ia2JfY185IiBjbGFzcz0icm93MXB3ZCByb3dyaWdodCIgZGF0YS1uYW1lPSJjXzkiPnA8L2Rpdj4=",
    k012 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93MiI+PGRpdiBpZD0ia2JfY18xMCIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xMCI+YTwvZGl2Pg==",
    k013 =
      "PGRpdiBpZD0ia2JfY18xMSIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xMSI+czwvZGl2Pg==",
    k014 =
      "PGRpdiBpZD0ia2JfY18xMiIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xMiI+ZDwvZGl2Pg==",
    k015 =
      "PGRpdiBpZD0ia2JfY18xMyIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xMyI+ZjwvZGl2Pg==",
    k016 =
      "PGRpdiBpZD0ia2JfY18xNCIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xNCI+ZzwvZGl2Pg==",
    k017 =
      "PGRpdiBpZD0ia2JfY18xNSIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xNSI+aDwvZGl2Pg==",
    k018 =
      "PGRpdiBpZD0ia2JfY18xNiIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xNiI+ajwvZGl2Pg==",
    k019 =
      "PGRpdiBpZD0ia2JfY18xNyIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xNyI+azwvZGl2Pg==",
    k020 =
      "PGRpdiBpZD0ia2JfY18xOCIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xOCI+bDwvZGl2Pg==",
    k021 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+PGRpdiBpZD0ia2JfY19DQVAiIGNsYXNzPSJyb3czcHdkYSIgZGF0YS1uYW1lPSJjX0NBUCI+PC9kaXY+",
    k022 =
      "PGRpdiBpZD0ia2JfY18yMCIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjAiPno8L2Rpdj4=",
    k023 =
      "PGRpdiBpZD0ia2JfY18yMSIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjEiPng8L2Rpdj4=",
    k024 =
      "PGRpdiBpZD0ia2JfY18yMiIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjIiPmM8L2Rpdj4=",
    k025 =
      "PGRpdiBpZD0ia2JfY18yMyIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjMiPnY8L2Rpdj4=",
    k026 =
      "PGRpdiBpZD0ia2JfY18yNCIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjQiPmI8L2Rpdj4=",
    k027 =
      "PGRpdiBpZD0ia2JfY18yNSIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjUiPm48L2Rpdj4=",
    k028 =
      "PGRpdiBpZD0ia2JfY18yNiIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjYiPm08L2Rpdj4=",
    k029 =
      "PGRpdiBpZD0ia2JfY19EIiBjbGFzcz0icm93M3B3ZGMgcm93ZGVsZXQiIGRhdGEtbmFtZT0iY19EIj48ZGl2PjwvZGl2PjwvZGl2Pg==",
    k030 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93NCI+PGRpdiBpZD0ia2JfY19OIiBjbGFzcz0icm93NHB3ZGEgcm93MTIzIiBkYXRhLW5hbWU9ImNfTiI+Lj8xMjM8L2Rpdj4=",
    k031 =
      "PGRpdiBpZD0ia2JfY19TUEFDRSIgY2xhc3M9InJvdzRwd2RiIHJvd3NwYWNlIiBkYXRhLW5hbWU9ImNfU1BBQ0UiPnNwYWNlPC9kaXY+",
    k032 =
      "PGRpdiBpZD0ia2JfY19DTE9TRSIgY2xhc3M9InJvdzRwd2RhIHJvd2Nsb3NlIiBkYXRhLW5hbWU9ImNfQ0xPU0UiPjxkaXY+PC9kaXY+PC9kaXY+",
    k033 = "PC9kaXY+PC9kaXY+PGRpdiBpZD0ibnVtYmVyX2tleWJvYXJkIj4=",
    k034 =
      "PGRpdiBjbGFzcz0icm93MSI+PGRpdiBpZD0ia2Jfbl8wIiBjbGFzcz0icm93MXB3ZCByb3dsZWZ0IGNoZyIgZGF0YS1uYW1lPSJuXzAiPjE8L2Rpdj4=",
    k035 =
      "PGRpdiBpZD0ia2Jfbl8xIiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl8xIj4yPC9kaXY+",
    k036 =
      "PGRpdiBpZD0ia2Jfbl8yIiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl8yIj4zPC9kaXY+",
    k037 =
      "PGRpdiBpZD0ia2Jfbl8zIiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl8zIj40PC9kaXY+",
    k038 =
      "PGRpdiBpZD0ia2Jfbl80IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl80Ij41PC9kaXY+",
    k039 =
      "PGRpdiBpZD0ia2Jfbl81IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl81Ij42PC9kaXY+",
    k040 =
      "PGRpdiBpZD0ia2Jfbl82IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl82Ij43PC9kaXY+",
    k041 =
      "PGRpdiBpZD0ia2Jfbl83IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl83Ij44PC9kaXY+",
    k042 =
      "PGRpdiBpZD0ia2Jfbl84IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl84Ij45PC9kaXY+",
    k043 =
      "PGRpdiBpZD0ia2Jfbl85IiBjbGFzcz0icm93MXB3ZCByb3dyaWdodCBjaGciIGRhdGEtbmFtZT0ibl85Ij4wPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+",
    k044 =
      "PGRpdiBpZD0ia2Jfbl8xMCIgY2xhc3M9InJvdzFwd2Qgcm93bGVmdCIgZGF0YS1uYW1lPSJuXzEwIj4tPC9kaXY+",
    k045 =
      "PGRpdiBpZD0ia2Jfbl8xMSIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xMSI+LzwvZGl2Pg==",
    k046 =
      "PGRpdiBpZD0ia2Jfbl8xMiIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xMiI+OjwvZGl2Pg==",
    k047 =
      "PGRpdiBpZD0ia2Jfbl8xMyIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xMyI+OzwvZGl2Pg==",
    k048 =
      "PGRpdiBpZD0ia2Jfbl8xNCIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xNCI+KDwvZGl2Pg==",
    k049 =
      "PGRpdiBpZD0ia2Jfbl8xNSIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xNSI+KTwvZGl2Pg==",
    k050 =
      "PGRpdiBpZD0ia2Jfbl8xNiIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xNiI+JDwvZGl2Pg==",
    k051 =
      "PGRpdiBpZD0ia2Jfbl8xNyIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xNyI+JjwvZGl2Pg==",
    k052 =
      "PGRpdiBpZD0ia2Jfbl8xOCIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xOCI+QDwvZGl2Pg==",
    k053 =
      "PGRpdiBpZD0ia2Jfbl8xOSIgY2xhc3M9InJvdzFwd2Qgcm93cmlnaHQgcm93YWxvbmUiIGRhdGEtbmFtZT0ibl8xOSI+IjwvZGl2Pg==",
    k054 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+PGRpdiBpZD0ia2Jfbl9TIiBjbGFzcz0icm93M3B3ZGEiIGRhdGEtbmFtZT0ibl9TIj4jKz08L2Rpdj4=",
    k055 =
      "PGRpdiBpZD0ia2Jfbl8yMSIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9Im5fMjEiPi48L2Rpdj4=",
    k056 =
      "PGRpdiBpZD0ia2Jfbl8yMiIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9Im5fMjIiPiw8L2Rpdj4=",
    k057 =
      "PGRpdiBpZD0ia2Jfbl8yMyIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9Im5fMjMiPj88L2Rpdj4=",
    k058 =
      "PGRpdiBpZD0ia2Jfbl8yNCIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9Im5fMjQiPiE8L2Rpdj4=",
    k059 =
      "PGRpdiBpZD0na2Jfbl8yNScgY2xhc3M9J3JvdzNwd2RkJyBkYXRhLW5hbWU9J25fMjUnPic8L2Rpdj4=",
    k060 =
      "PGRpdiBpZD0ia2Jfbl9EIiBjbGFzcz0icm93M3B3ZGMgcm93ZGVsZXQiIGRhdGEtbmFtZT0ibl9EIj48ZGl2PjwvZGl2PjwvZGl2Pg==",
    k061 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93NCI+PGRpdiBpZD0ia2Jfbl9DIiBjbGFzcz0icm93NHB3ZGEgcm93MTIzIiBkYXRhLW5hbWU9Im5fQyI+QUJDPC9kaXY+",
    k062 =
      "PGRpdiBpZD0ia2Jfbl9TUEFDRSIgY2xhc3M9InJvdzRwd2RiIHJvd3NwYWNlIiBkYXRhLW5hbWU9Im5fU1BBQ0UiPnNwYWNlPC9kaXY+",
    k063 =
      "PGRpdiBpZD0ia2Jfbl9DTE9TRSIgY2xhc3M9InJvdzRwd2RhIHJvd2Nsb3NlIiBkYXRhLW5hbWU9Im5fQ0xPU0UiPjxkaXY+PC9kaXY+PC9kaXY+",
    k064 =
      "PC9kaXY+PC9kaXY+PGRpdiBpZD0ic3ltYmxlX2tleWJvYXJkIiAgc3R5bGU9IndpZHRoOjEwMCU7IGhlaWdodDoxMDAlIDsgZGlzcGxheTpub25lOyI+PGRpdiBjbGFzcz0icm93MSI+",
    k065 =
      "PGRpdiBpZD0ia2Jfc18wIiBjbGFzcz0icm93MXB3ZCByb3dsZWZ0IiBkYXRhLW5hbWU9InNfMCI+WzwvZGl2Pg==",
    k066 =
      "PGRpdiBpZD0ia2Jfc18xIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzEiPl08L2Rpdj4=",
    k067 =
      "PGRpdiBpZD0ia2Jfc18yIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzIiPns8L2Rpdj4=",
    k068 =
      "PGRpdiBpZD0ia2Jfc18zIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzMiPn08L2Rpdj4=",
    k069 =
      "PGRpdiBpZD0ia2Jfc180IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzQiPiM8L2Rpdj4=",
    k070 =
      "PGRpdiBpZD0ia2Jfc181IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzUiPiU8L2Rpdj4=",
    k071 =
      "PGRpdiBpZD0ia2Jfc182IiBjbGFzcz0icm93MXB3ZCByb3dhbG9uZSIgZGF0YS1uYW1lPSJzXzYiPl48L2Rpdj4=",
    k072 =
      "PGRpdiBpZD0ia2Jfc183IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzciPio8L2Rpdj4=",
    k073 =
      "PGRpdiBpZD0ia2Jfc184IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzgiPis8L2Rpdj4=",
    k074 =
      "PGRpdiBpZD0ia2Jfc185IiBjbGFzcz0icm93MXB3ZCByb3dyaWdodCIgZGF0YS1uYW1lPSJzXzkiPj08L2Rpdj4=",
    k075 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+PGRpdiBpZD0ia2Jfc18xMCIgY2xhc3M9InJvdzFwd2Qgcm93bGVmdCByb3dsb25lbHkiIGRhdGEtbmFtZT0ic18xMCI+XzwvZGl2Pg==",
    k076 =
      "PGRpdiBpZD0ia2Jfc18xMSIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xMSI+XDwvZGl2Pg==",
    k077 =
      "PGRpdiBpZD0ia2Jfc18xMiIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xMiI+fDwvZGl2Pg==",
    k078 =
      "PGRpdiBpZD0ia2Jfc18xMyIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xMyI+fjwvZGl2Pg==",
    k079 =
      "PGRpdiBpZD0ia2Jfc18xNCIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xNCI+PDwvZGl2Pg==",
    k080 =
      "PGRpdiBpZD0ia2Jfc18xNSIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xNSI+PjwvZGl2Pg==",
    k081 =
      "PGRpdiBpZD0ia2Jfc18xNiIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xNiI+JDwvZGl2Pg==",
    k082 =
      "PGRpdiBpZD0ia2Jfc18xNyIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xNyI+JjwvZGl2Pg==",
    k083 =
      "PGRpdiBpZD0ia2Jfc18xOCIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xOCI+QDwvZGl2Pg==",
    k084 =
      "PGRpdiBpZD0ia2Jfc18xOSIgY2xhc3M9InJvdzFwd2Qgcm93cmlnaHQgcm93YWxvbmUiIGRhdGEtbmFtZT0ic18xOSI+YDwvZGl2Pg==",
    k085 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+PGRpdiBpZD0ia2Jfc19OIiBjbGFzcz0icm93M3B3ZGEiIGRhdGEtbmFtZT0ic19OIj4xMjM8L2Rpdj4=",
    k086 =
      "PGRpdiBpZD0ia2Jfc18yMSIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9InNfMjEiPi48L2Rpdj4=",
    k087 =
      "PGRpdiBpZD0ia2Jfc18yMiIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9InNfMjIiPiw8L2Rpdj4=",
    k088 =
      "PGRpdiBpZD0ia2Jfc18yMyIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9InNfMjMiPj88L2Rpdj4=",
    k089 =
      "PGRpdiBpZD0ia2Jfc18yNCIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9InNfMjQiPiE8L2Rpdj4=",
    k090 =
      "PGRpdiBpZD0na2Jfc18yNScgY2xhc3M9J3JvdzNwd2RkJyBkYXRhLW5hbWU9J3NfMjUnPic8L2Rpdj4=",
    k091 =
      "PGRpdiBpZD0ia2Jfc19EIiBjbGFzcz0icm93M3B3ZGMgcm93ZGVsZXQiIGRhdGEtbmFtZT0ic19EIj48ZGl2PjwvZGl2PjwvZGl2Pg==",
    k092 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93NCI+PGRpdiBpZD0ia2Jfc19DIiBjbGFzcz0icm93NHB3ZGEgcm93MTIzIiBkYXRhLW5hbWU9InNfQyI+QUJDPC9kaXY+",
    k093 =
      "PGRpdiBpZD0ia2Jfc19TUEFDRSIgY2xhc3M9InJvdzRwd2RiIHJvd3NwYWNlIiBkYXRhLW5hbWU9InNfU1BBQ0UiPnNwYWNlPC9kaXY+",
    k094 =
      "PGRpdiBpZD0ia2Jfc19DTE9TRSIgY2xhc3M9InJvdzRwd2RhIHJvd2Nsb3NlIiBkYXRhLW5hbWU9InNfQ0xPU0UiPjxkaXY+PC9kaXY+PC9kaXY+",
    k095 =
      "PC9kaXY+PC9kaXY+PGRpdiBpZD0icHVyZW51bWJlcl9rZXlib2FyZCIgc3R5bGU9ImRpc3BsYXk6bm9uZTsiPjxkaXYgY2xhc3M9InJvdzYiPg==",
    k096 =
      "PGRpdiBpZD0ia2JfcF8wIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfMCI+MTwvZGl2Pg==",
    k097 =
      "PGRpdiBpZD0ia2JfcF8xIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfMSI+MjwvZGl2Pg==",
    k098 =
      "PGRpdiBpZD0ia2JfcF8yIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfMiI+MzwvZGl2Pg==",
    k099 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93NSI+PGRpdiBpZD0ia2JfcF8zIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfMyI+NDwvZGl2Pg==",
    k100 =
      "PGRpdiBpZD0ia2JfcF80IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfNCI+NTwvZGl2Pg==",
    k101 =
      "PGRpdiBpZD0ia2JfcF81IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfNSI+NjwvZGl2Pg==",
    k102 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93NSI+PGRpdiBpZD0ia2JfcF82IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfNiI+NzwvZGl2Pg==",
    k103 =
      "PGRpdiBpZD0ia2JfcF83IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfNyI+ODwvZGl2Pg==",
    k104 =
      "PGRpdiBpZD0ia2JfcF84IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfOCI+OTwvZGl2Pg==",
    k105 =
      "PC9kaXY+PGRpdiBjbGFzcz0icm93NSI+PGRpdiBpZD0ia2JfcF9EIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfRCI+PGRpdj48L2Rpdj48L2Rpdj4=",
    k106 =
      "PGRpdiBpZD0ia2JfcF8xMCIgY2xhc3M9InB3ZCIgZGF0YS1uYW1lPSJwXzEwIj4wPC9kaXY+",
    k107 =
      "PGRpdiBpZD0ia2JfcF9DTE9TRSIgY2xhc3M9InB3ZCIgZGF0YS1uYW1lPSJwX0NMT1NFIj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2Pg==",
    k108 = "",
    k109 = "",
    k110 = "";
  var fkb =
    k000 +
    base64decode(k001) +
    base64decode(k002) +
    base64decode(k003) +
    base64decode(k004) +
    base64decode(k005) +
    base64decode(k006) +
    base64decode(k007) +
    base64decode(k008) +
    base64decode(k009) +
    base64decode(k010);
  fkb +=
    base64decode(k011) +
    base64decode(k012) +
    base64decode(k013) +
    base64decode(k014) +
    base64decode(k015) +
    base64decode(k016) +
    base64decode(k017) +
    base64decode(k018) +
    base64decode(k019) +
    base64decode(k020);
  fkb +=
    base64decode(k021) +
    base64decode(k022) +
    base64decode(k023) +
    base64decode(k024) +
    base64decode(k025) +
    base64decode(k026) +
    base64decode(k027) +
    base64decode(k028) +
    base64decode(k029) +
    base64decode(k030);
  fkb +=
    base64decode(k031) +
    base64decode(k032) +
    base64decode(k033) +
    base64decode(k034) +
    base64decode(k035) +
    base64decode(k036) +
    base64decode(k037) +
    base64decode(k038) +
    base64decode(k039) +
    base64decode(k040);
  fkb +=
    base64decode(k041) +
    base64decode(k042) +
    base64decode(k043) +
    base64decode(k044) +
    base64decode(k045) +
    base64decode(k046) +
    base64decode(k047) +
    base64decode(k048) +
    base64decode(k049) +
    base64decode(k050);
  fkb +=
    base64decode(k051) +
    base64decode(k052) +
    base64decode(k053) +
    base64decode(k054) +
    base64decode(k055) +
    base64decode(k056) +
    base64decode(k057) +
    base64decode(k058) +
    base64decode(k059) +
    base64decode(k060);
  fkb +=
    base64decode(k061) +
    base64decode(k062) +
    base64decode(k063) +
    base64decode(k064) +
    base64decode(k065) +
    base64decode(k066) +
    base64decode(k067) +
    base64decode(k068) +
    base64decode(k069) +
    base64decode(k070);
  fkb +=
    base64decode(k071) +
    base64decode(k072) +
    base64decode(k073) +
    base64decode(k074) +
    base64decode(k075) +
    base64decode(k076) +
    base64decode(k077) +
    base64decode(k078) +
    base64decode(k079) +
    base64decode(k080);
  fkb +=
    base64decode(k081) +
    base64decode(k082) +
    base64decode(k083) +
    base64decode(k084) +
    base64decode(k085) +
    base64decode(k086) +
    base64decode(k087) +
    base64decode(k088) +
    base64decode(k089) +
    base64decode(k090);
  fkb +=
    base64decode(k091) +
    base64decode(k092) +
    base64decode(k093) +
    base64decode(k094) +
    base64decode(k095) +
    base64decode(k096) +
    base64decode(k097) +
    base64decode(k098) +
    base64decode(k099) +
    base64decode(k100);
  fkb +=
    base64decode(k101) +
    base64decode(k102) +
    base64decode(k103) +
    base64decode(k104) +
    base64decode(k105) +
    base64decode(k106) +
    base64decode(k107) +
    base64decode(k108) +
    base64decode(k109) +
    base64decode(k110);
  var div = document.createElement("div");
  div.innerHTML = fkb;
  verifyLicense(this.settings.license);
  document.getElementsByTagName("body")[0].appendChild(div.childNodes[0]);
  winHeight = document.documentElement.clientHeight;
  $1.css(".row1pwd,.row2pwd,.row3pwdb", {
    background: "url(" + BL.sv + "/anjian.svg)",
    backgroundSize: "100% 100%",
  });
  $1.css(".row123", {
    background: "url(" + BL.sv + "/123.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css("#kb_c_CAP", {
    background: "url(" + BL.sv + "/shift.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css(".rowdelet,#kb_s_N,#kb_n_S", {
    background: "url(" + BL.sv + "/quanDEL.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css(".row3pwdd", {
    background: "url(" + BL.sv + "/quanDEL_2.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css(".rowspace", {
    background: "url(" + BL.sv + "/space.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css(".rowclose", {
    background: "url(" + BL.sv + "/123.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css(".pwd", {
    background: "url(" + BL.sv + "/shuzi_1.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css("#kb_p_D,#kb_p_CLOSE", {
    background: "url(" + BL.sv + "/shuzi_2.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css("#kb_p_D>div", {
    background: "url(" + BL.sv + "/shuzi_delete1.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css(".rowdelet>div", {
    background: "url(" + BL.sv + "/DEL.svg) ",
    backgroundSize: "100% 100%",
  });
  $1.css("#kb_p_CLOSE>div,.rowclose>div", {
    background: "url(" + BL.sv + "/done_1.svg) ",
    backgroundSize: "100% 100%",
  });
  if (this.settings.kbType != 0) {
    $1.css("#purenumber_keyboard", { display: "block" });
    $1.css("#char_keyboard", { display: "none" });
    $1.css("#number_keyboard", { display: "none" });
    $1.css("#symble_keyboard", { display: "none" });
  } else {
    $1.css("#purenumber_keyboard", { display: "none" });
    $1.css("#char_keyboard", { display: "block" });
    $1.css("#number_keyboard", { display: "none" });
    $1.css("#symble_keyboard", { display: "none" });
  }
  var kbobj = this;
  var curid = "#" + this.settings.id;
  kbh = 0;
  var curh = parseInt($1.css(curid, "height"));
  justic2 = function () {
    if (kbobj.orientation() == 90 || kbobj.orientation() == -90) {
      var viewportH = Math.max(
        window.innerHeight,
        document.documentElement.clientHeight
      );
      kbh = viewportH * kbobj.proportion();
    } else {
      var viewportH = Math.max(document.documentElement.clientHeight);
      kbh = viewportH * kbobj.proportion();
      if (kbh < curh) {
        kbh = curh;
      }
    }
    $1.css(curid, { height: kbh + "px" });
    $1.css("#purenumber_keyboard", { height: kbh + "px" });
    $1.css("#char_keyboard", { height: kbh + "px" });
    $1.css("#number_keyboard", { height: kbh + "px" });
    $1.css("#symble_keyboard", { height: kbh + "px" });
    $1.css(".row1,.row6", { marginTop: kbh * 0.02 + "px" });
    var r1 = new RegExp("row\\d");
    var r2 = new RegExp("_keyboard");
    $1.filter(curid, "div", function (dom) {
      if (dom.id != "purenumber_keyboard") {
        $1.filter("#" + dom.id, "div", function (dom2) {
          if (r1.test(dom2.className)) {
            $1.filter(
              "#" + dom.id + " ." + dom2.className,
              "div",
              function (dom3) {
                var h = 0.21 * kbh;
                $1.css("#" + dom3.id, {
                  height: h + "px",
                  lineHeight: h + "px",
                });
                $1.css(".rowdelet>div", { width: h * 0.51154 + "px" });
                $1.css(".rowclose>div", { width: h * 0.76521 + "px" });
              }
            );
          }
        });
      } else {
        $1.filter("#" + dom.id, "div", function (dom2) {
          if (r1.test(dom2.className)) {
            $1.filter(
              "#" + dom.id + " ." + dom2.className,
              "div",
              function (dom3) {
                var h = 0.225 * kbh;
                $1.css("#" + dom3.id, {
                  height: h + "px",
                  lineHeight: h + "px",
                });
                $1.css("#kb_p_D>div", { width: h * 0.65263 + "px" });
                $1.css("#kb_p_CLOSE>div", { width: h * 0.5625 + "px" });
              }
            );
          }
        });
      }
    });
  };
  justic2();
  justic3 = function () {
    $1.css(curid, { height: kbh + "px" });
    $1.css("#purenumber_keyboard", { height: kbh + "px" });
    $1.css("#char_keyboard", { height: kbh + "px" });
    $1.css("#number_keyboard", { height: kbh + "px" });
    $1.css("#symble_keyboard", { height: kbh + "px" });
    $1.css(".row1,.row6", { marginTop: kbh * 0.02 + "px" });
    var r1 = new RegExp("row\\d");
    var r2 = new RegExp("_keyboard");
    $1.filter(curid, "div", function (dom) {
      if (dom.id != "purenumber_keyboard") {
        $1.filter("#" + dom.id, "div", function (dom2) {
          if (r1.test(dom2.className)) {
            $1.filter(
              "#" + dom.id + " ." + dom2.className,
              "div",
              function (dom3) {
                var h = 0.21 * kbh;
                $1.css("#" + dom3.id, {
                  height: h + "px",
                  lineHeight: h + "px",
                });
                $1.css(".rowdelet>div", { width: h * 0.51154 + "px" });
                $1.css(".rowclose>div", { width: h * 0.76521 + "px" });
              }
            );
          }
        });
      } else {
        $1.filter("#" + dom.id, "div", function (dom2) {
          if (r1.test(dom2.className)) {
            $1.filter(
              "#" + dom.id + " ." + dom2.className,
              "div",
              function (dom3) {
                var h = 0.225 * kbh;
                $1.css("#" + dom3.id, {
                  height: h + "px",
                  lineHeight: h + "px",
                });
                $1.css("#kb_p_D>div", { width: h * 0.65263 + "px" });
                $1.css("#kb_p_CLOSE>div", { width: h * 0.5625 + "px" });
              }
            );
          }
        });
      }
    });
  };
  if (!this.init) {
    var regkb = new RegExp("_keyboard");
    var reName = new RegExp("kb_");
    var regrow = new RegExp("row\\d");
    var images = new Array();
    function preload() {
      for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
      }
    }
    preload(
      BL.sv + "/123.svg",
      BL.sv + "/123_2.svg",
      BL.sv + "/anjian.svg",
      BL.sv + "/anjian_2.svg",
      BL.sv + "/DEL.svg",
      BL.sv + "/DEL_2.svg",
      BL.sv + "/shuzi_delete2.svg",
      BL.sv + "/shuzi_delete1.svg",
      BL.sv + "/done_1.svg",
      BL.sv + "/shuzi_1.svg",
      BL.sv + "/shuzi_2.svg",
      BL.sv + "/space.svg",
      BL.sv + "/space_2.svg",
      BL.sv + "/dianji_left.svg",
      BL.sv + "/dianji_right.svg",
      BL.sv + "/dianji.svg",
      BL.sv + "/quanDEL.svg",
      BL.sv + "/quanDEL_2.svg",
      BL.sv + "/shift.svg",
      BL.sv + "/shift_D.svg",
      BL.sv + "/shift_DS.svg"
    );
    var dealbt = function (cid) {
      function call(url, color) {
        var img = new Image();
        img.onload = function () {
          if (!color) {
            $1.css("#" + cid, {
              backgroundImage: "url(" + img.src + ")",
              backgroundSize: "100% 100%",
            });
          } else {
            $1.css("#" + cid, {
              backgroundImage: "url(" + img.src + ")",
              backgroundSize: "100% 100%",
              color: color,
            });
          }
        };
        img.src = url;
      }
      function call2(url) {
        var img = new Image();
        img.onload = function () {
          $1.css("#" + cid + ">div", {
            backgroundImage: "url(" + img.src + ")",
            backgroundSize: "100% 100%",
          });
        };
        img.src = url;
      }
      var event = 0;
      if (reName.test(cid)) {
        var regpn = /_p_/;
        var regn = /_n_/;
        var regc = /_c_/;
        var regs = /_s_/;
        if (regpn.test(cid)) {
          function del() {
            if (
              kbobj.settings.pressStatus == 1 ||
              kbobj.settings.pressStatus == 2
            ) {
              setTimeout(function () {
                var url = BL.sv + "/shuzi_2.svg";
                var url2 = BL.sv + "/shuzi_delete1.svg";
                var img = new Image();
                img.onload = function () {
                  $1.css("#kb_p_D", {
                    backgroundImage: "url(" + img.src + ")",
                    backgroundSize: "100% 100%",
                  });
                  $1.css("#kb_p_D>div", {
                    backgroundImage: "url(" + img.src2 + ")",
                    backgroundSize: "100% 100%",
                  });
                };
                img.src = url;
                img.src2 = url2;
              }, 100);
            }
            clearInterval(delInter);
            for (var int = 0; int < dels.length; int++) {
              clearInterval(dels[int]);
            }
            dels = [];
            var input = document.getElementById(kbobj.settings.pg.settings.id);
            var xingStr = "";
            if (kbobj.settings.hasMap) {
              for (var i = 0; i < kbobj.settings.pg.mappingStr.length; i++) {
                xingStr += "*";
              }
            } else {
              for (var i = 0; i < kbobj.settings.pg.valueStr; i++) {
                xingStr += "*";
              }
            }
            if (kbobj.settings.pg.settings.displayMode == 1) {
              var pass_num = kbobj.settings.pg;
              var pg = pass_num;
              if (kbobj.settings.pg.valueStr == 0) {
                input.value = "";
              } else {
                input.value = (
                  zhuwei2(pg.asm) +
                  zhuwei2(pg.bsm) +
                  zhuwei2(pg.csm) +
                  zhuwei2(pg.dsm) +
                  zhuwei2(pg.esm) +
                  zhuwei2(pg.fsm) +
                  zhuwei2(pg.gsm) +
                  zhuwei2(pg.hsm) +
                  zhuwei2(pg.ism) +
                  zhuwei2(pg.jsm) +
                  zhuwei2(pg.ksm) +
                  zhuwei2(pg.lsm) +
                  zhuwei2(pg.msm) +
                  zhuwei2(pg.nsm) +
                  zhuwei2(pg.osm) +
                  zhuwei2(pg.psm) +
                  zhuwei2(pg.qsm) +
                  zhuwei2(pg.rsm) +
                  zhuwei2(pg.ssm) +
                  zhuwei2(pg.tsm) +
                  zhuwei2(pg.usm) +
                  zhuwei2(pg.vsm) +
                  zhuwei2(pg.wsm) +
                  zhuwei2(pg.xsm) +
                  zhuwei2(pg.ysm) +
                  zhuwei2(pg.zsm) +
                  zhuwei2(pg.aasm) +
                  zhuwei2(pg.bbsm) +
                  zhuwei2(pg.ccsm) +
                  zhuwei2(pg.ddsm)
                ).substring(0, pass_num.valueStr);
              }
            } else {
              input.value = xingStr;
            }
            BL.double = 0;
          }
          if (cid != "kb_p_D" && cid != "kb_p_CLOSE") {
            $1.touchstart("#" + cid, undefined, function (e) {
              if (BL.double == 0) {
                BL.once = 0;
                BL.Mov = 0;
                var key = e.target.innerText;
                BL.key2 = $1.attr("#" + cid, "data-name");
                BL.double = 1;
                if (
                  kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2
                ) {
                  var url = BL.sv + "/shuzi_2.svg";
                  var img = new Image();
                  img.src = url;
                  img.onload = function () {
                    $1.css(".anxia2", {
                      background: "url(" + BL.sv + "/shuzi_1.svg)",
                      backgroundSize: "100% 100%",
                    });
                    $1.removeClass(
                      "#purenumber_keyboard div",
                      undefined,
                      "anxia2"
                    );
                    $1.addClass("#" + cid, undefined, "anxia2");
                    $1.css("#" + cid, {
                      backgroundImage: "url(" + BL.sv + "/shuzi_2.svg)",
                      backgroundSize: "100% 100%",
                      color: "#000",
                    });
                  };
                }
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
              }
              e.preventDefault();
            });
            $1.touchmove("#" + cid, "", function (e) {
              if (isAndroid) {
                return;
              }
              var MH = e.targetTouches[0].clientY;
              if (BL.WH <= MH + 1) {
                setTimeout(function () {
                  call(BL.sv + "/shuzi_1.svg");
                }, 100);
                BL.double = 0;
                e.preventDefault();
                if (
                  kbobj.settings.chaosMode == 2 &&
                  event == 0 &&
                  BL.once == 0
                ) {
                  var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
                  arr = kbobj.randArray(arr);
                  var chars = document
                    .getElementById("purenumber_keyboard")
                    .querySelectorAll(".pwd");
                  var charst = [];
                  for (var j = 0, i = 0; j < chars.length; j++) {
                    if (chars[j].id == "kb_p_CLOSE" || chars[j].id == "kb_p_D")
                      continue;
                    i++;
                    charst.push(chars[j]);
                  }
                  for (var j = 0; j < charst.length; j++) {
                    charst[j].innerHTML = arr[j];
                  }
                }
                BL.once = 1;
                BL.Mov = 1;
              }
            });
            $1.touchend("#" + cid, "", function (e) {
              if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
                BL.double = 0;
                setTimeout(function () {
                  call(BL.sv + "/shuzi_1.svg");
                }, 100);
                e.preventDefault();
                if (kbobj.settings.chaosMode == 2 && event == 0) {
                  var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
                  arr = kbobj.randArray(arr);
                  var chars = document
                    .getElementById("purenumber_keyboard")
                    .querySelectorAll(".pwd");
                  var charst = [];
                  for (var j = 0, i = 0; j < chars.length; j++) {
                    if (chars[j].id == "kb_p_CLOSE" || chars[j].id == "kb_p_D")
                      continue;
                    i++;
                    charst.push(chars[j]);
                  }
                  for (var j = 0; j < charst.length; j++) {
                    charst[j].innerHTML = arr[j];
                  }
                }
              }
            });
          } else if (cid == "kb_p_D") {
            var event = 2;
            var delInter;
            dels = [];
            $1.touchstart("#" + cid, "", function (e) {
              if (BL.double == 0) {
                BL.double = 1;
                BL.once = 0;
                BL.Mov = 0;
                var key = e.target.innerText;
                BL.key2 = $1.attr("#" + cid, "data-name");
                $1.css(".anxia2", {
                  background: "url(" + BL.sv + "/shuzi_1.svg)",
                  backgroundSize: "100% 100%",
                });
                $1.removeClass(".pwd", "", "anxia2");
                if (
                  kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2
                ) {
                  var url = BL.sv + "/shuzi_1.svg";
                  var url2 = BL.sv + "/shuzi_delete2.svg";
                  var img = new Image();
                  img.onload = function () {
                    $1.css("#kb_p_D", {
                      backgroundImage: "url(" + img.src + ")",
                      backgroundSize: "100% 100%",
                    });
                    $1.css("#kb_p_D>div", {
                      backgroundImage: "url(" + img.src2 + ")",
                      backgroundSize: "100% 100%",
                    });
                  };
                  img.src = url;
                  img.src2 = url2;
                }
                startT = new Date().getTime();
                delInter = window.setInterval(function () {
                  endT = new Date().getTime();
                  var x = endT - startT;
                  if (x > 500) {
                    var input = document.getElementById(
                      kbobj.settings.pg.settings.id
                    );
                    var xI = setInterval(function () {
                      if (kbobj.settings.hasMap) {
                        kbobj.settings.pg.mappingStr =
                          kbobj.settings.pg.mappingStr.substr(
                            0,
                            kbobj.settings.pg.mappingStr.length - 1
                          );
                      }
                      kbobj.settings.pg.valueStr -= 1;
                      if (kbobj.settings.pg.valueStr < 0)
                        kbobj.settings.pg.valueStr = 0;
                      if (kbobj.settings.pg.valueStr == 0)
                        kbobj.settings.pg.asm = "";
                      if (kbobj.settings.pg.valueStr == 1)
                        kbobj.settings.pg.bsm = "";
                      if (kbobj.settings.pg.valueStr == 2)
                        kbobj.settings.pg.csm = "";
                      if (kbobj.settings.pg.valueStr == 3)
                        kbobj.settings.pg.dsm = "";
                      if (kbobj.settings.pg.valueStr == 4)
                        kbobj.settings.pg.esm = "";
                      if (kbobj.settings.pg.valueStr == 5)
                        kbobj.settings.pg.fsm = "";
                      if (kbobj.settings.pg.valueStr == 6)
                        kbobj.settings.pg.gsm = "";
                      if (kbobj.settings.pg.valueStr == 7)
                        kbobj.settings.pg.hsm = "";
                      if (kbobj.settings.pg.valueStr == 8)
                        kbobj.settings.pg.ism = "";
                      if (kbobj.settings.pg.valueStr == 9)
                        kbobj.settings.pg.jsm = "";
                      if (kbobj.settings.pg.valueStr == 10)
                        kbobj.settings.pg.ksm = "";
                      if (kbobj.settings.pg.valueStr == 11)
                        kbobj.settings.pg.lsm = "";
                      if (kbobj.settings.pg.valueStr == 12)
                        kbobj.settings.pg.msm = "";
                      if (kbobj.settings.pg.valueStr == 13)
                        kbobj.settings.pg.nsm = "";
                      if (kbobj.settings.pg.valueStr == 14)
                        kbobj.settings.pg.osm = "";
                      if (kbobj.settings.pg.valueStr == 15)
                        kbobj.settings.pg.psm = "";
                      if (kbobj.settings.pg.valueStr == 16)
                        kbobj.settings.pg.qsm = "";
                      if (kbobj.settings.pg.valueStr == 17)
                        kbobj.settings.pg.rsm = "";
                      if (kbobj.settings.pg.valueStr == 18)
                        kbobj.settings.pg.ssm = "";
                      if (kbobj.settings.pg.valueStr == 19)
                        kbobj.settings.pg.tsm = "";
                      if (kbobj.settings.pg.valueStr == 20)
                        kbobj.settings.pg.usm = "";
                      if (kbobj.settings.pg.valueStr == 21)
                        kbobj.settings.pg.vsm = "";
                      if (kbobj.settings.pg.valueStr == 22)
                        kbobj.settings.pg.wsm = "";
                      if (kbobj.settings.pg.valueStr == 23)
                        kbobj.settings.pg.xsm = "";
                      if (kbobj.settings.pg.valueStr == 24)
                        kbobj.settings.pg.ysm = "";
                      if (kbobj.settings.pg.valueStr == 25)
                        kbobj.settings.pg.zsm = "";
                      if (kbobj.settings.pg.valueStr == 26)
                        kbobj.settings.pg.aasm = "";
                      if (kbobj.settings.pg.valueStr == 27)
                        kbobj.settings.pg.bbsm = "";
                      if (kbobj.settings.pg.valueStr == 28)
                        kbobj.settings.pg.ccsm = "";
                      if (kbobj.settings.pg.valueStr == 29)
                        kbobj.settings.pg.ddsm = "";
                      input.value = input.value.substr(
                        0,
                        input.value.length - 1
                      );
                      if (kbobj.settings.pg.settings.jump == 1) {
                        kbobj.settings.pg.settings.del(
                          kbobj.settings.pg.valueStr
                        );
                      }
                    }, 50);
                    dels.push(xI);
                    clearInterval(delInter);
                  }
                }, 1);
                e.preventDefault();
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
                return false;
              }
            });
            $1.touchend("#" + cid, "", function (e) {
              if (BL.key2 == $1.attr("#" + cid, "data-name")) {
                del();
                e.preventDefault();
                return false;
              }
            });
            $1.touchmove("#" + cid, "", function (e) {
              if (isAndroid) {
                return;
              }
              var MH = e.targetTouches[0].clientY;
              if (BL.WH <= MH + 1) {
                del();
                e.preventDefault();
                return false;
              }
            });
          }
          $1.touchend("#" + cid, "", function (e) {
            if (
              cid == "kb_p_CLOSE" &&
              (kbobj.settings.pressStatus == 1 ||
                kbobj.settings.pressStatus == 2)
            ) {
              setTimeout(function () {
                call(BL.sv + "/shuzi_2.svg");
              }, 100);
            }
          });
          $1.touchstart("#" + cid, "", function (e) {
            var key = e.target.innerText;
            BL.WH = $1.windowHeigth();
            if (cid != "kb_p_D") {
              if (cid == "kb_p_CLOSE" && BL.double == 0) {
                if (
                  kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2
                ) {
                  call(BL.sv + "/shuzi_1.svg");
                }
                if (BL.fixed == "") {
                  $1.css("body", {
                    position: "relative",
                    left: 0,
                    top: 0,
                    transition: "all 0.3s",
                  });
                } else {
                  $1.css("body", {
                    position: "relative",
                    left: 0,
                    top: 0,
                    transition: "all 0.3s",
                  });
                  $1.css("#" + BL.fixed, {
                    bottom: 0 + "px",
                    transition: "all 0.3s",
                  });
                }
                setTimeout(function () {
                  PH.s_n();
                  PH.add++;
                  PH.cs = 1;
                  kbobj.settings.pg.preCallBack(
                    event,
                    key.charCodeAt() ^ kbobj.settings.odd
                  );
                }, 50);
                $1.removeClass(curid, "", "pwdkeyboard");
                $1.addClass(curid, "", "pwdkeyboardout");
                document
                  .querySelector(curid)
                  .addEventListener("webkitAnimationEnd", kbobj.handler, false);
                document
                  .querySelector(curid)
                  .addEventListener("animationEnd", kbobj.handler, false);
                event = 1;
                e.preventDefault();
              }
            }
          });
        }
        if (regc.test(cid)) {
          function del2() {
            if (
              kbobj.settings.pressStatus == 1 ||
              kbobj.settings.pressStatus == 2
            ) {
              setTimeout(function () {
                var url = BL.sv + "/quanDEL.svg";
                var img = new Image();
                img.src = url;
                img.onload = function () {
                  $1.css("#kb_c_D", {
                    backgroundImage: "url(" + BL.sv + "/quanDEL.svg)",
                    backgroundSize: "100% 100%",
                  });
                  $1.css("#kb_c_D>div", {
                    backgroundImage: "url(" + BL.sv + "/DEL.svg)",
                    backgroundSize: "100% 100%",
                  });
                };
              }, 100);
            }
            clearInterval(delInter);
            for (var int = 0; int < dels.length; int++) {
              clearInterval(dels[int]);
            }
            dels = [];
            var input = document.getElementById(kbobj.settings.pg.settings.id);
            var xingStr = "";
            if (kbobj.settings.hasMap) {
              for (var i = 0; i < kbobj.settings.pg.mappingStr.length; i++) {
                xingStr += "*";
              }
            } else {
              for (var i = 0; i < kbobj.settings.pg.valueStr; i++) {
                xingStr += "*";
              }
            }
            if (kbobj.settings.pg.settings.displayMode == 1) {
              var pass_num = kbobj.settings.pg;
              var pg = pass_num;
              if (kbobj.settings.pg.valueStr == 0) {
                input.value = "";
              } else {
                input.value = (
                  zhuwei2(pg.asm) +
                  zhuwei2(pg.bsm) +
                  zhuwei2(pg.csm) +
                  zhuwei2(pg.dsm) +
                  zhuwei2(pg.esm) +
                  zhuwei2(pg.fsm) +
                  zhuwei2(pg.gsm) +
                  zhuwei2(pg.hsm) +
                  zhuwei2(pg.ism) +
                  zhuwei2(pg.jsm) +
                  zhuwei2(pg.ksm) +
                  zhuwei2(pg.lsm) +
                  zhuwei2(pg.msm) +
                  zhuwei2(pg.nsm) +
                  zhuwei2(pg.osm) +
                  zhuwei2(pg.psm) +
                  zhuwei2(pg.qsm) +
                  zhuwei2(pg.rsm) +
                  zhuwei2(pg.ssm) +
                  zhuwei2(pg.tsm) +
                  zhuwei2(pg.usm) +
                  zhuwei2(pg.vsm) +
                  zhuwei2(pg.wsm) +
                  zhuwei2(pg.xsm) +
                  zhuwei2(pg.ysm) +
                  zhuwei2(pg.zsm) +
                  zhuwei2(pg.aasm) +
                  zhuwei2(pg.bbsm) +
                  zhuwei2(pg.ccsm) +
                  zhuwei2(pg.ddsm)
                ).substring(0, pass_num.valueStr);
              }
            } else {
              input.value = xingStr;
            }
            BL.double = 0;
          }
          if (cid != "kb_c_D" && cid != "kb_c_CLOSE" && cid != "kb_c_CAP") {
            var mun = 1;
            $1.touchstart("#" + cid, "", function (e) {
              if (BL.double == 0) {
                var key = e.target.innerText;
                clearTimeout(BL.FD);
                BL.once = 0;
                BL.Mov = 0;
                BL.key2 = $1.attr("#" + cid, "data-name");
                BL.double = 1;
                $1.remove(".fd");
                if (/_SPACE/i.test(cid)) {
                  event = 7;
                  if (
                    kbobj.settings.pressStatus == 1 ||
                    kbobj.settings.pressStatus == 2
                  ) {
                    var url = BL.sv + "/space_2.svg";
                    var img = new Image();
                    img.src = url;
                    img.onload = function () {
                      $1.css(".anxia", {
                        background: "url(" + BL.sv + "/anjian.svg) ",
                        backgroundSize: "100% 100%",
                      });
                      $1.removeClass("#char_keyboard div", "", "anxia");
                      $1.css("#kb_c_SPACE", {
                        backgroundImage: "url(" + BL.sv + "/space_2.svg)",
                        backgroundSize: "100% 100%",
                      });
                    };
                  }
                } else if (/_N/.test(cid) || /_C/.test(cid) || /_S/.test(cid)) {
                  event = 7;
                  if (
                    kbobj.settings.pressStatus == 1 ||
                    kbobj.settings.pressStatus == 2
                  ) {
                    call(BL.sv + "/123_2.svg");
                  }
                } else {
                  if (kbobj.settings.pressStatus == 1) {
                    var div = document.createElement("div");
                    var Html = e.target.innerText;
                    div.innerHTML = Html;
                    div.className = "fd";
                    $1.css("#" + cid, { position: "relative" });
                    if ($1.hasClass("#" + cid, "", "rowleft")) {
                      var img = new Image();
                      img.src = BL.sv + "/dianji_left.svg";
                      img.onload = function () {
                        document.getElementById(cid).appendChild(div);
                        $1.css(".fd", {
                          backgroundImage: "url(" + img.src + ")",
                          backgroundSize: "100% 100%",
                          position: "absolute",
                          width: "140%",
                          height: kbh * 0.4 + "px",
                          left: 0,
                          bottom: "0px",
                          textAlign: "center",
                          fontSize: "1.5em",
                          zIndex: "999",
                          lineHeight: kbh * 0.23 + "px",
                        });
                      };
                    } else if ($1.hasClass("#" + cid, "", "rowright")) {
                      var img = new Image();
                      img.src = BL.sv + "/dianji_right.svg";
                      img.onload = function () {
                        document.getElementById(cid).appendChild(div);
                        $1.css(".fd", {
                          backgroundImage: "url(" + img.src + ")",
                          backgroundSize: "100% 100%",
                          position: "absolute",
                          width: "140%",
                          height: kbh * 0.4 + "px",
                          right: 0,
                          bottom: "0px",
                          textAlign: "center",
                          fontSize: "1.5em",
                          zIndex: "999",
                          lineHeight: kbh * 0.23 + "px",
                        });
                      };
                    } else {
                      var img = new Image();
                      img.src = BL.sv + "/dianji.svg";
                      img.onload = function () {
                        document.getElementById(cid).appendChild(div);
                        $1.css(".fd", {
                          backgroundImage: "url(" + img.src + ")",
                          backgroundSize: "100% 100%",
                          position: "absolute",
                          width: "140%",
                          height: kbh * 0.4 + "px",
                          left: "-20%",
                          bottom: "0px",
                          textAlign: "center",
                          fontSize: "1.5em",
                          zIndex: "999",
                          lineHeight: kbh * 0.23 + "px",
                        });
                      };
                    }
                  } else if (kbobj.settings.pressStatus == 2) {
                    var url = BL.sv + "/anjian_2.svg";
                    var img = new Image();
                    img.src = url;
                    img.onload = function () {
                      $1.css(".anxia", {
                        background: "url(" + BL.sv + "/anjian.svg) ",
                        backgroundSize: "100% 100%",
                      });
                      $1.removeClass("#char_keyboard div", "", "anxia");
                      $1.addClass("#" + cid, "", "anxia");
                      $1.css("#" + cid, {
                        backgroundImage: "url(" + BL.sv + "/anjian_2.svg)",
                        backgroundSize: "100% 100%",
                      });
                    };
                  }
                }
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
                e.preventDefault();
              }
            });
            $1.touchmove("#" + cid, "", function (e) {
              if (isAndroid) {
                return;
              }
              var MH = e.targetTouches[0].clientY;
              if (BL.WH <= MH + 1 && BL.Mov == 0) {
                if (/_SPACE/i.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/space.svg");
                  }, 100);
                } else if (/_N/.test(cid) || /_C/.test(cid) || /_S/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/123.svg");
                  }, 100);
                } else {
                  setTimeout(function () {
                    $1.remove(".fd");
                  }, 100);
                  call(BL.sv + "/anjian.svg");
                  if (!kbobj.caps && kbobj.shift) {
                    setTimeout(function () {
                      $1.filter("#char_keyboard", "div>div", function (e) {
                        var c = e.innerText;
                        if (c.length == 1) {
                          e.innerText = c.toLowerCase();
                        } else if (2 <= c.length && c.length <= 3) {
                          e.innerText = c.substring(0, 1).toLowerCase();
                        }
                      });
                    }, 100);
                    if (
                      kbobj.orientation() == 90 ||
                      kbobj.orientation() == -90
                    ) {
                      $1.css("#kb_c_CAP", {
                        background: "url(" + BL.sv + "/shift_H.svg) ",
                        backgroundSize: "100% 100%",
                      });
                    } else {
                      $1.css("#kb_c_CAP", {
                        background: "url(" + BL.sv + "/shift.svg) ",
                        backgroundSize: "100% 100%",
                      });
                    }
                  }
                  kbobj.shift = false;
                  if (
                    kbobj.settings.chaosMode == 2 &&
                    event == 0 &&
                    BL.Mov == 0
                  ) {
                    var arr = [
                      "q",
                      "w",
                      "e",
                      "r",
                      "t",
                      "y",
                      "u",
                      "i",
                      "o",
                      "p",
                      "a",
                      "s",
                      "d",
                      "f",
                      "g",
                      "h",
                      "j",
                      "k",
                      "l",
                      "z",
                      "x",
                      "c",
                      "v",
                      "b",
                      "n",
                      "m",
                    ];
                    arr = kbobj.randArray(arr, kbobj.caps);
                    var chars = document
                      .getElementById("char_keyboard")
                      .querySelectorAll(".row1pwd,.row2pwd,.row3pwdb");
                    setTimeout(function () {
                      for (var j = 0; j < chars.length; j++) {
                        chars[j].innerHTML = arr[j];
                      }
                    }, 100);
                  }
                }
                BL.once = 1;
                BL.Mov = 1;
                BL.double = 0;
                e.preventDefault();
              }
            });
            $1.touchend("#" + cid, "", function (e) {
              if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
                BL.double = 0;
                if (/_SPACE/i.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/space.svg");
                  }, 100);
                } else if (/_N/.test(cid) || /_C/.test(cid) || /_S/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/123.svg");
                  }, 100);
                } else {
                  BL.FD = setTimeout(function () {
                    $1.remove(".fd");
                  }, 100);
                  setTimeout(function () {
                    call(BL.sv + "/anjian.svg");
                  }, 100);
                }
              }
              e.preventDefault();
            });
          } else if (cid == "kb_c_D") {
            var delInter;
            var dels = [];
            var event = 2;
            $1.touchstart("#" + cid, "", function (e) {
              var key = e.target.innerText;
              if (BL.double == 0) {
                BL.double = 1;
                BL.once = 0;
                BL.Mov = 0;
                BL.key2 = $1.attr("#" + cid, "data-name");
                var key = e.target.innerText;
                if (
                  kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2
                ) {
                  $1.css(".anxia", {
                    background: "url(" + BL.sv + "/anjian.svg) ",
                    backgroundSize: "100% 100%",
                  });
                  $1.removeClass("#char_keyboard div", "", "anxia");
                  var url = BL.sv + "/quanDEL_2.svg";
                  var img = new Image();
                  img.src = url;
                  img.onload = function () {
                    $1.css("#kb_c_D", {
                      backgroundImage: "url(" + BL.sv + "/quanDEL_2.svg)",
                      backgroundSize: "100% 100%",
                    });
                    $1.css("#kb_c_D>div", {
                      backgroundImage: "url(" + BL.sv + "/DEL_2.svg)",
                      backgroundSize: "100% 100%",
                    });
                  };
                }
                startT = new Date().getTime();
                delInter = window.setInterval(function () {
                  endT = new Date().getTime();
                  var x = endT - startT;
                  if (x > 500) {
                    var input = document.getElementById(
                      kbobj.settings.pg.settings.id
                    );
                    var xI = setInterval(function () {
                      if (kbobj.settings.hasMap) {
                        kbobj.settings.pg.mappingStr =
                          kbobj.settings.pg.mappingStr.substr(
                            0,
                            kbobj.settings.pg.mappingStr.length - 1
                          );
                      }
                      kbobj.settings.pg.valueStr -= 1;
                      if (kbobj.settings.pg.valueStr < 0)
                        kbobj.settings.pg.valueStr = 0;
                      if (kbobj.settings.pg.valueStr == 0)
                        kbobj.settings.pg.asm = "";
                      if (kbobj.settings.pg.valueStr == 1)
                        kbobj.settings.pg.bsm = "";
                      if (kbobj.settings.pg.valueStr == 2)
                        kbobj.settings.pg.csm = "";
                      if (kbobj.settings.pg.valueStr == 3)
                        kbobj.settings.pg.dsm = "";
                      if (kbobj.settings.pg.valueStr == 4)
                        kbobj.settings.pg.esm = "";
                      if (kbobj.settings.pg.valueStr == 5)
                        kbobj.settings.pg.fsm = "";
                      if (kbobj.settings.pg.valueStr == 6)
                        kbobj.settings.pg.gsm = "";
                      if (kbobj.settings.pg.valueStr == 7)
                        kbobj.settings.pg.hsm = "";
                      if (kbobj.settings.pg.valueStr == 8)
                        kbobj.settings.pg.ism = "";
                      if (kbobj.settings.pg.valueStr == 9)
                        kbobj.settings.pg.jsm = "";
                      if (kbobj.settings.pg.valueStr == 10)
                        kbobj.settings.pg.ksm = "";
                      if (kbobj.settings.pg.valueStr == 11)
                        kbobj.settings.pg.lsm = "";
                      if (kbobj.settings.pg.valueStr == 12)
                        kbobj.settings.pg.msm = "";
                      if (kbobj.settings.pg.valueStr == 13)
                        kbobj.settings.pg.nsm = "";
                      if (kbobj.settings.pg.valueStr == 14)
                        kbobj.settings.pg.osm = "";
                      if (kbobj.settings.pg.valueStr == 15)
                        kbobj.settings.pg.psm = "";
                      if (kbobj.settings.pg.valueStr == 16)
                        kbobj.settings.pg.qsm = "";
                      if (kbobj.settings.pg.valueStr == 17)
                        kbobj.settings.pg.rsm = "";
                      if (kbobj.settings.pg.valueStr == 18)
                        kbobj.settings.pg.ssm = "";
                      if (kbobj.settings.pg.valueStr == 19)
                        kbobj.settings.pg.tsm = "";
                      if (kbobj.settings.pg.valueStr == 20)
                        kbobj.settings.pg.usm = "";
                      if (kbobj.settings.pg.valueStr == 21)
                        kbobj.settings.pg.vsm = "";
                      if (kbobj.settings.pg.valueStr == 22)
                        kbobj.settings.pg.wsm = "";
                      if (kbobj.settings.pg.valueStr == 23)
                        kbobj.settings.pg.xsm = "";
                      if (kbobj.settings.pg.valueStr == 24)
                        kbobj.settings.pg.ysm = "";
                      if (kbobj.settings.pg.valueStr == 25)
                        kbobj.settings.pg.zsm = "";
                      if (kbobj.settings.pg.valueStr == 26)
                        kbobj.settings.pg.aasm = "";
                      if (kbobj.settings.pg.valueStr == 27)
                        kbobj.settings.pg.bbsm = "";
                      if (kbobj.settings.pg.valueStr == 28)
                        kbobj.settings.pg.ccsm = "";
                      if (kbobj.settings.pg.valueStr == 29)
                        kbobj.settings.pg.ddsm = "";
                      input.value = input.value.substr(
                        0,
                        input.value.length - 1
                      );
                      if (kbobj.settings.pg.settings.jump == 1) {
                        kbobj.settings.pg.settings.del(
                          kbobj.settings.pg.valueStr
                        );
                      }
                    }, 50);
                    dels.push(xI);
                    clearInterval(delInter);
                  }
                }, 1);
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
                e.preventDefault();
                return false;
              }
            });
            $1.touchmove("#" + cid, "", function (e) {
              if (isAndroid) {
                return;
              }
              var MH = e.targetTouches[0].clientY;
              if (BL.WH <= MH) {
                del2();
              }
              e.preventDefault();
              return false;
            });
            $1.touchend("#" + cid, "", function (e) {
              if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
                del2();
                BL.Mov = 1;
                e.preventDefault();
                return false;
              }
            });
          }
          if (cid == "kb_c_CAP") {
            function CAPtap() {
              if (!kbobj.dt) {
                if (kbobj.caps) {
                  kbobj.caps = false;
                  kbobj.shift = false;
                  if (kbobj.orientation() == 90 || kbobj.orientation() == -90) {
                    call(BL.sv + "/shift_H.svg");
                  } else {
                    call(BL.sv + "/shift.svg");
                  }
                } else {
                  if (kbobj.shift) {
                    kbobj.shift = false;
                    if (
                      kbobj.orientation() == 90 ||
                      kbobj.orientation() == -90
                    ) {
                      call(BL.sv + "/shift_H.svg");
                    } else {
                      call(BL.sv + "/shift.svg");
                    }
                  } else {
                    kbobj.shift = true;
                    if (
                      kbobj.orientation() == 90 ||
                      kbobj.orientation() == -90
                    ) {
                      call(BL.sv + "/shift_D_H.svg");
                    } else {
                      call(BL.sv + "/shift_D.svg");
                    }
                  }
                  if (kbobj.caps) {
                    kbobj.caps = false;
                    if (
                      kbobj.orientation() == 90 ||
                      kbobj.orientation() == -90
                    ) {
                      call(BL.sv + "/shift_H.svg");
                    } else {
                      call(BL.sv + "/shift.svg");
                    }
                  }
                }
              } else {
                kbobj.dt = false;
              }
              if (kbobj.caps || kbobj.shift) {
                $1.filter("#char_keyboard", "div>div", function (e) {
                  var c = e.innerText;
                  if (c.length == 1) {
                    e.innerText = c.toUpperCase();
                  } else if (2 <= c.length && c.length <= 3) {
                    e.innerText = c.substring(0, 1).toUpperCase();
                  }
                });
              } else {
                $1.filter("#char_keyboard", "div>div", function (e) {
                  var c = e.innerText;
                  if (c.length == 1) {
                    e.innerText = c.toLowerCase();
                  } else if (2 <= c.length && c.length <= 3) {
                    e.innerText = c.substring(0, 1).toLowerCase();
                  }
                });
              }
              $1.remove(".fd");
              var now = new Date().getTime();
              var lastTouch = $1.attr("#kb_c_CAP", "lastTouch") || now + 1;
              var delta = now - lastTouch;
              if (delta < 600 && delta > 0) {
                kbobj.caps = true;
                if (kbobj.orientation() == 90 || kbobj.orientation() == -90) {
                  call(BL.sv + "/shift_DS_H.svg");
                } else {
                  call(BL.sv + "/shift_DS.svg");
                }
                $1.filter("#char_keyboard", "div>div", function (e) {
                  var c = e.innerText;
                  if (c.length == 1) {
                    e.innerText = c.toUpperCase();
                  }
                });
              } else {
                $1.attr("#kb_c_CAP", "lastTouch", now);
              }
              BL.double = 0;
            }
            $1.touchstart("#" + cid, "", function (e) {
              if (BL.double == 0) {
                BL.double = 1;
                BL.once = 0;
                BL.Mov = 0;
                var key = e.target.innerText;
                BL.key2 = $1.attr("#" + cid, "data-name");
              }
            });
            $1.touchmove("#" + cid, "", function (e) {
              if (isAndroid) {
                return;
              }
              var MH = e.targetTouches[0].clientY;
              console.log("BL.Mov:" + BL.Mov);
              if (BL.WH <= MH && BL.Mov == 0) {
                console.log(1);
                if (!kbobj.dt) {
                  if (kbobj.caps) {
                    kbobj.caps = false;
                    kbobj.shift = false;
                    if (
                      kbobj.orientation() == 90 ||
                      kbobj.orientation() == -90
                    ) {
                      call(BL.sv + "/shift_H.svg");
                    } else {
                      call(BL.sv + "/shift.svg");
                    }
                  } else {
                    if (kbobj.shift) {
                      kbobj.shift = false;
                      if (
                        kbobj.orientation() == 90 ||
                        kbobj.orientation() == -90
                      ) {
                        call(BL.sv + "/shift_H.svg");
                      } else {
                        call(BL.sv + "/shift.svg");
                      }
                    } else {
                      kbobj.shift = true;
                      if (
                        kbobj.orientation() == 90 ||
                        kbobj.orientation() == -90
                      ) {
                        call(BL.sv + "/shift_D_H.svg");
                      } else {
                        call(BL.sv + "/shift_D.svg");
                      }
                    }
                    if (kbobj.caps) {
                      kbobj.caps = false;
                      if (
                        kbobj.orientation() == 90 ||
                        kbobj.orientation() == -90
                      ) {
                        call(BL.sv + "/shift_H.svg");
                      } else {
                        call(BL.sv + "/shift.svg");
                      }
                    }
                  }
                } else {
                  kbobj.dt = false;
                }
                if (kbobj.caps || kbobj.shift) {
                  $1.filter("#char_keyboard", "div>div", function (e) {
                    var c = e.innerText;
                    if (c.length == 1) {
                      e.innerText = c.toUpperCase();
                    } else if (2 <= c.length && c.length <= 3) {
                      e.innerText = c.substring(0, 1).toUpperCase();
                    }
                  });
                } else {
                  $1.filter("#char_keyboard", "div>div", function (e) {
                    var c = e.innerText;
                    if (c.length == 1) {
                      e.innerText = c.toLowerCase();
                    } else if (2 <= c.length && c.length <= 3) {
                      e.innerText = c.substring(0, 1).toLowerCase();
                    }
                  });
                }
                BL.double = 0;
                BL.once = 1;
                BL.Mov = 1;
              }
              e.preventDefault();
              return false;
            });
            $1.touchend("#" + cid, "", function (event) {
              if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
                CAPtap();
                BL.Mov = 1;
              }
            });
            event = 7;
          }
          $1.touchend("#" + cid, "", function (e) {
            if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
              if (
                cid != "kb_c_D" &&
                cid != "kb_c_SPACE" &&
                cid != "kb_c_CLOSE" &&
                cid != "kb_c_CAP" &&
                cid != "kb_c_N"
              ) {
                if (!kbobj.caps && kbobj.shift) {
                  setTimeout(function () {
                    $1.filter("#char_keyboard", "div>div", function (e) {
                      var c = e.innerText;
                      if (c.length == 1) {
                        e.innerText = c.toLowerCase();
                      } else if (2 <= c.length && c.length <= 3) {
                        e.innerText = c.substring(0, 1).toLowerCase();
                      }
                    });
                  }, 100);
                  if (kbobj.orientation() == 90 || kbobj.orientation() == -90) {
                    $1.css("#kb_c_CAP", {
                      background: "url(" + BL.sv + "/shift_H.svg) ",
                      backgroundSize: "100% 100%",
                    });
                  } else {
                    $1.css("#kb_c_CAP", {
                      background: "url(" + BL.sv + "/shift.svg) ",
                      backgroundSize: "100% 100%",
                    });
                  }
                }
                kbobj.shift = false;
              }
              if (cid == "kb_c_N") {
                setTimeout(function () {
                  $1.css(
                    "#char_keyboard,#symble_keyboard,#purenumber_keyboard",
                    { display: "none" }
                  );
                  $1.css("#number_keyboard", { display: "block" });
                  justic3();
                }, 80);
              }
              if (
                cid == "kb_c_CLOSE" &&
                (kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2)
              ) {
                setTimeout(function () {
                  call(BL.sv + "/123.svg");
                }, 100);
              }
              if (kbobj.settings.chaosMode == 2 && event == 0 && BL.Mov == 0) {
                var arr = [
                  "q",
                  "w",
                  "e",
                  "r",
                  "t",
                  "y",
                  "u",
                  "i",
                  "o",
                  "p",
                  "a",
                  "s",
                  "d",
                  "f",
                  "g",
                  "h",
                  "j",
                  "k",
                  "l",
                  "z",
                  "x",
                  "c",
                  "v",
                  "b",
                  "n",
                  "m",
                ];
                arr = kbobj.randArray(arr, kbobj.caps);
                var chars = document
                  .getElementById("char_keyboard")
                  .querySelectorAll(".row1pwd,.row2pwd,.row3pwdb");
                setTimeout(function () {
                  for (var j = 0; j < chars.length; j++) {
                    chars[j].innerHTML = arr[j];
                  }
                }, 100);
              }
              BL.Mov = 1;
            }
          });
          $1.touchstart("#" + cid, "", function (e) {
            BL.WH = $1.windowHeigth();
            var key = e.target.innerText;
            if (cid != "kb_c_D") {
              if (cid == "kb_c_SPACE") {
                return;
              } else if (cid == "kb_c_CLOSE" && BL.double == 0) {
                if (
                  kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2
                ) {
                  call(BL.sv + "/123_2.svg");
                }
                if (BL.fixed == "") {
                  $1.css("body", {
                    position: "relative",
                    left: 0,
                    top: 0,
                    transition: "all 0.3s",
                  });
                } else {
                  $1.css("body", {
                    position: "relative",
                    left: 0,
                    top: 0,
                    transition: "all 0.3s",
                  });
                  $1.css("#" + BL.fixed, {
                    bottom: 0 + "px",
                    transition: "all 0.3s",
                  });
                }
                $1.removeClass(curid, "", "pwdkeyboard");
                $1.addClass(curid, "", "pwdkeyboardout");
                document
                  .querySelector(curid)
                  .addEventListener("webkitAnimationEnd", kbobj.handler, false);
                document
                  .querySelector(curid)
                  .addEventListener("animationEnd", kbobj.handler, false);
                event = 1;
                setTimeout(function () {
                  PH.s_n();
                  PH.add++;
                  PH.cs = 1;
                  kbobj.settings.pg.preCallBack(
                    event,
                    key.charCodeAt() ^ kbobj.settings.odd
                  );
                }, 80);
              }
              e.preventDefault();
            }
          });
        }
        if (regn.test(cid)) {
          function del3() {
            if (
              kbobj.settings.pressStatus == 1 ||
              kbobj.settings.pressStatus == 2
            ) {
              setTimeout(function () {
                var url = BL.sv + "/quanDEL.svg";
                var img = new Image();
                img.src = url;
                img.onload = function () {
                  $1.css("#kb_n_D", {
                    backgroundImage: "url(" + BL.sv + "/quanDEL.svg)",
                    backgroundSize: "100% 100%",
                  });
                  $1.css("#kb_n_D>div", {
                    backgroundImage: "url(" + BL.sv + "/DEL.svg)",
                    backgroundSize: "100% 100%",
                  });
                };
              }, 80);
            }
            clearInterval(delInter);
            for (var int = 0; int < dels.length; int++) {
              clearInterval(dels[int]);
            }
            dels = [];
            var input = document.getElementById(kbobj.settings.pg.settings.id);
            var xingStr = "";
            if (kbobj.settings.hasMap) {
              for (var i = 0; i < kbobj.settings.pg.mappingStr.length; i++) {
                xingStr += "*";
              }
            } else {
              for (var i = 0; i < kbobj.settings.pg.valueStr; i++) {
                xingStr += "*";
              }
            }
            if (kbobj.settings.pg.settings.displayMode == 1) {
              var pass_num = kbobj.settings.pg;
              var pg = pass_num;
              if (kbobj.settings.pg.valueStr == 0) {
                input.value = "";
              } else {
                input.value = (
                  zhuwei2(pg.asm) +
                  zhuwei2(pg.bsm) +
                  zhuwei2(pg.csm) +
                  zhuwei2(pg.dsm) +
                  zhuwei2(pg.esm) +
                  zhuwei2(pg.fsm) +
                  zhuwei2(pg.gsm) +
                  zhuwei2(pg.hsm) +
                  zhuwei2(pg.ism) +
                  zhuwei2(pg.jsm) +
                  zhuwei2(pg.ksm) +
                  zhuwei2(pg.lsm) +
                  zhuwei2(pg.msm) +
                  zhuwei2(pg.nsm) +
                  zhuwei2(pg.osm) +
                  zhuwei2(pg.psm) +
                  zhuwei2(pg.qsm) +
                  zhuwei2(pg.rsm) +
                  zhuwei2(pg.ssm) +
                  zhuwei2(pg.tsm) +
                  zhuwei2(pg.usm) +
                  zhuwei2(pg.vsm) +
                  zhuwei2(pg.wsm) +
                  zhuwei2(pg.xsm) +
                  zhuwei2(pg.ysm) +
                  zhuwei2(pg.zsm) +
                  zhuwei2(pg.aasm) +
                  zhuwei2(pg.bbsm) +
                  zhuwei2(pg.ccsm) +
                  zhuwei2(pg.ddsm)
                ).substring(0, pass_num.valueStr);
              }
            } else {
              input.value = xingStr;
            }
            BL.double = 0;
          }
          if (cid != "kb_n_D" && cid != "kb_n_CLOSE") {
            $1.touchstart("#" + cid, "", function (e) {
              if (BL.double == 0) {
                var key = e.target.innerText;
                clearTimeout(BL.FD);
                BL.once = 0;
                BL.Mov = 0;
                BL.key2 = $1.attr("#" + cid, "data-name");
                BL.double = 1;
                $1.remove(".fd");
                if (/_SPACE/i.test(cid)) {
                  event = 7;
                  if (
                    kbobj.settings.pressStatus == 1 ||
                    kbobj.settings.pressStatus == 2
                  ) {
                    var url = BL.sv + "/space_2.svg";
                    var img = new Image();
                    img.src = url;
                    img.onload = function () {
                      $1.css(".anxia", {
                        background: "url(" + BL.sv + "/anjian.svg) ",
                        backgroundSize: "100% 100%",
                      });
                      $1.css(".anxia5", {
                        background: "url(" + BL.sv + "/quanDEL_2.svg) ",
                        backgroundSize: "100% 100%",
                      });
                      $1.removeClass("#number_keyboard div", "", "anxia");
                      $1.css("#kb_n_SPACE", {
                        backgroundImage: "url(" + BL.sv + "/space_2.svg)",
                        backgroundSize: "100% 100%",
                      });
                    };
                  }
                } else if (/_C/.test(cid)) {
                  event = 7;
                  if (
                    kbobj.settings.pressStatus == 1 ||
                    kbobj.settings.pressStatus == 2
                  ) {
                    call(BL.sv + "/123_2.svg");
                  }
                } else if (/_S/.test(cid)) {
                  event = 7;
                  if (
                    kbobj.settings.pressStatus == 1 ||
                    kbobj.settings.pressStatus == 2
                  ) {
                    call(BL.sv + "/quanDEL_2.svg");
                  }
                } else {
                  if (kbobj.settings.pressStatus == 1) {
                    var div = document.createElement("div");
                    var Html = e.target.innerText;
                    div.innerHTML = Html;
                    div.className = "fd";
                    $1.css("#" + cid, { position: "relative" });
                    if ($1.hasClass("#" + cid, "", "rowleft")) {
                      var img = new Image();
                      img.src = BL.sv + "/dianji_left.svg";
                      img.onload = function () {
                        document.getElementById(cid).appendChild(div);
                        $1.css(".fd", {
                          backgroundImage: "url(" + img.src + ")",
                          backgroundSize: "100% 100%",
                          position: "absolute",
                          width: "140%",
                          height: kbh * 0.4 + "px",
                          left: 0,
                          bottom: "0px",
                          textAlign: "center",
                          fontSize: "1.5em",
                          zIndex: "999",
                          lineHeight: kbh * 0.23 + "px",
                        });
                      };
                    } else if ($1.hasClass("#" + cid, "", "rowright")) {
                      var img = new Image();
                      img.src = BL.sv + "/dianji_right.svg";
                      img.onload = function () {
                        document.getElementById(cid).appendChild(div);
                        $1.css(".fd", {
                          backgroundImage: "url(" + img.src + ")",
                          backgroundSize: "100% 100%",
                          position: "absolute",
                          width: "140%",
                          height: kbh * 0.4 + "px",
                          right: 0,
                          bottom: "0px",
                          textAlign: "center",
                          fontSize: "1.5em",
                          zIndex: "999",
                          lineHeight: kbh * 0.23 + "px",
                        });
                      };
                    } else {
                      if ($1.hasClass("#" + cid, "", "row3pwdd")) {
                        var img = new Image();
                        img.src = BL.sv + "/dianji.svg";
                        img.onload = function () {
                          document.getElementById(cid).appendChild(div);
                          $1.css(".fd", {
                            backgroundImage: "url(" + img.src + ")",
                            position: "absolute",
                            width: "150%",
                            height: kbh * 0.4 + "px",
                            left: "-25%",
                            bottom: "0px",
                            textAlign: "center",
                            fontSize: "1.5em",
                            zIndex: "999",
                            lineHeight: kbh * 0.19 + "px",
                            backgroundSize: "100% 100%",
                          });
                        };
                      } else {
                        var img = new Image();
                        img.src = BL.sv + "/dianji.svg";
                        img.onload = function () {
                          document.getElementById(cid).appendChild(div);
                          $1.css(".fd", {
                            backgroundImage: "url(" + img.src + ")",
                            position: "absolute",
                            width: "140%",
                            height: kbh * 0.4 + "px",
                            left: "-20%",
                            bottom: "0px",
                            textAlign: "center",
                            fontSize: "1.5em",
                            zIndex: "999",
                            lineHeight: kbh * 0.19 + "px",
                            backgroundSize: "100% 100%",
                          });
                        };
                      }
                    }
                  } else if (kbobj.settings.pressStatus == 2) {
                    if ($1.hasClass("#" + cid, "", "row3pwdd")) {
                      var url = BL.sv + "/quanDEL.svg";
                      var img = new Image();
                      img.src = url;
                      img.onload = function () {
                        $1.css(".anxia", {
                          background: "url(" + BL.sv + "/anjian.svg) ",
                          backgroundSize: "100% 100%",
                        });
                        $1.css(".anxia5", {
                          background: "url(" + BL.sv + "/quanDEL_2.svg) ",
                          backgroundSize: "100% 100%",
                        });
                        $1.removeClass("#number_keyboard div", "", "anxia");
                        $1.removeClass("#number_keyboard div", "", "anxia5");
                        $1.addClass("#" + cid, "", "anxia5");
                        $1.css("#" + cid, {
                          backgroundImage: "url(" + BL.sv + "/quanDEL.svg)",
                          backgroundSize: "100% 100%",
                        });
                      };
                    } else {
                      var url = BL.sv + "/anjian_2.svg";
                      var img = new Image();
                      img.src = url;
                      img.onload = function () {
                        $1.css(".anxia", {
                          background: "url(" + BL.sv + "/anjian.svg) ",
                          backgroundSize: "100% 100%",
                        });
                        $1.css(".anxia5", {
                          background: "url(" + BL.sv + "/quanDEL_2.svg) ",
                          backgroundSize: "100% 100%",
                        });
                        $1.removeClass("#number_keyboard div", "", "anxia");
                        $1.removeClass("#number_keyboard div", "", "anxia5");
                        $1.addClass("#" + cid, "", "anxia5");
                        $1.css("#" + cid, {
                          backgroundImage: "url(" + BL.sv + "/anjian_2.svg)",
                          backgroundSize: "100% 100%",
                        });
                      };
                    }
                  }
                }
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
                e.preventDefault();
              }
            });
            $1.touchmove("#" + cid, "", function (e) {
              if (isAndroid) {
                return;
              }
              var MH = e.targetTouches[0].clientY;
              if (BL.WH <= MH + 1 && BL.Mov == 0) {
                if (/_SPACE/i.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/space.svg");
                  }, 100);
                } else if (/_C/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/123.svg");
                  }, 80);
                } else if (/_S/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/quanDEL.svg");
                  }, 80);
                } else {
                  if ($("#" + cid).hasClass("row3pwdd")) {
                    call(BL.sv + "/quanDEL_2.svg");
                  } else {
                    call(BL.sv + "/anjian.svg");
                  }
                  BL.FD = setTimeout(function () {
                    $1.remove(".fd");
                  }, 100);
                }
                if (e.target.className.indexOf("chg") > -1) {
                  if (kbobj.settings.chaosMode == 2 && event == 0) {
                    var arr = [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "0",
                    ];
                    arr = kbobj.randArray(arr);
                    var charst = [];
                    var chars = document
                      .querySelectorAll("#number_keyboard > .row1")[0]
                      .querySelectorAll(".row1pwd");
                    setTimeout(function () {
                      for (var j = 0, i = 0; j < chars.length; j++) {
                        if (
                          chars[j].id == "kb_n_CLOSE" ||
                          chars[j].id == "kb_n_D"
                        )
                          continue;
                        i++;
                        charst.push(chars[j]);
                      }
                      for (var j = 0; j < charst.length; j++) {
                        charst[j].innerHTML = arr[j];
                      }
                    }, 100);
                  }
                }
                BL.once = 1;
                BL.Mov = 1;
                BL.double = 0;
                e.preventDefault();
              }
            });
            $1.touchend("#" + cid, "", function (e) {
              if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
                BL.double = 0;
                if (/_SPACE/i.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/space.svg");
                  }, 100);
                } else if (/_C/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/123.svg");
                  }, 80);
                } else if (/_S/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/quanDEL.svg");
                  }, 80);
                } else {
                  setTimeout(function () {
                    if ($1.hasClass("#" + cid, "", "row3pwdd")) {
                      call(BL.sv + "/quanDEL_2.svg");
                    } else {
                      call(BL.sv + "/anjian.svg");
                    }
                  }, 100);
                  BL.FD = setTimeout(function () {
                    $1.remove(".fd");
                  }, 100);
                }
                e.preventDefault();
              }
            });
          } else if (cid == "kb_n_D") {
            var event = 2;
            var delInter;
            var dels = [];
            $1.touchstart("#" + cid, "", function (e) {
              var key = e.target.innerText;
              if (BL.double == 0) {
                BL.double = 1;
                BL.once = 0;
                BL.Mov = 0;
                BL.key2 = $1.attr("#" + cid, "data-name");
                var key = e.target.innerText;
                if (
                  kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2
                ) {
                  $1.css(".anxia", {
                    background: "url(" + BL.sv + "/anjian.svg) ",
                    backgroundSize: "100% 100%",
                  });
                  $1.css(".anxia5", {
                    background: "url(" + BL.sv + "/quanDEL_2.svg) ",
                    backgroundSize: "100% 100%",
                  });
                  $1.removeClass("#number_keyboard div", "", "anxia");
                  var url = BL.sv + "/quanDEL_2.svg";
                  var img = new Image();
                  img.src = url;
                  img.onload = function () {
                    $1.css("#kb_n_D", {
                      backgroundImage: "url(" + BL.sv + "/quanDEL_2.svg)",
                      backgroundSize: "100% 100%",
                    });
                    $1.css("#kb_n_D>div", {
                      backgroundImage: "url(" + BL.sv + "/DEL_2.svg)",
                      backgroundSize: "100% 100%",
                    });
                  };
                }
                startT = new Date().getTime();
                delInter = window.setInterval(function () {
                  endT = new Date().getTime();
                  var x = endT - startT;
                  if (x > 500) {
                    var input = document.getElementById(
                      kbobj.settings.pg.settings.id
                    );
                    var xI = setInterval(function () {
                      if (kbobj.settings.hasMap) {
                        kbobj.settings.pg.mappingStr =
                          kbobj.settings.pg.mappingStr.substr(
                            0,
                            kbobj.settings.pg.mappingStr.length - 1
                          );
                      }
                      kbobj.settings.pg.valueStr -= 1;
                      if (kbobj.settings.pg.valueStr < 0)
                        kbobj.settings.pg.valueStr = 0;
                      if (kbobj.settings.pg.valueStr == 0)
                        kbobj.settings.pg.asm = "";
                      if (kbobj.settings.pg.valueStr == 1)
                        kbobj.settings.pg.bsm = "";
                      if (kbobj.settings.pg.valueStr == 2)
                        kbobj.settings.pg.csm = "";
                      if (kbobj.settings.pg.valueStr == 3)
                        kbobj.settings.pg.dsm = "";
                      if (kbobj.settings.pg.valueStr == 4)
                        kbobj.settings.pg.esm = "";
                      if (kbobj.settings.pg.valueStr == 5)
                        kbobj.settings.pg.fsm = "";
                      if (kbobj.settings.pg.valueStr == 6)
                        kbobj.settings.pg.gsm = "";
                      if (kbobj.settings.pg.valueStr == 7)
                        kbobj.settings.pg.hsm = "";
                      if (kbobj.settings.pg.valueStr == 8)
                        kbobj.settings.pg.ism = "";
                      if (kbobj.settings.pg.valueStr == 9)
                        kbobj.settings.pg.jsm = "";
                      if (kbobj.settings.pg.valueStr == 10)
                        kbobj.settings.pg.ksm = "";
                      if (kbobj.settings.pg.valueStr == 11)
                        kbobj.settings.pg.lsm = "";
                      if (kbobj.settings.pg.valueStr == 12)
                        kbobj.settings.pg.msm = "";
                      if (kbobj.settings.pg.valueStr == 13)
                        kbobj.settings.pg.nsm = "";
                      if (kbobj.settings.pg.valueStr == 14)
                        kbobj.settings.pg.osm = "";
                      if (kbobj.settings.pg.valueStr == 15)
                        kbobj.settings.pg.psm = "";
                      if (kbobj.settings.pg.valueStr == 16)
                        kbobj.settings.pg.qsm = "";
                      if (kbobj.settings.pg.valueStr == 17)
                        kbobj.settings.pg.rsm = "";
                      if (kbobj.settings.pg.valueStr == 18)
                        kbobj.settings.pg.ssm = "";
                      if (kbobj.settings.pg.valueStr == 19)
                        kbobj.settings.pg.tsm = "";
                      if (kbobj.settings.pg.valueStr == 20)
                        kbobj.settings.pg.usm = "";
                      if (kbobj.settings.pg.valueStr == 21)
                        kbobj.settings.pg.vsm = "";
                      if (kbobj.settings.pg.valueStr == 22)
                        kbobj.settings.pg.wsm = "";
                      if (kbobj.settings.pg.valueStr == 23)
                        kbobj.settings.pg.xsm = "";
                      if (kbobj.settings.pg.valueStr == 24)
                        kbobj.settings.pg.ysm = "";
                      if (kbobj.settings.pg.valueStr == 25)
                        kbobj.settings.pg.zsm = "";
                      if (kbobj.settings.pg.valueStr == 26)
                        kbobj.settings.pg.aasm = "";
                      if (kbobj.settings.pg.valueStr == 27)
                        kbobj.settings.pg.bbsm = "";
                      if (kbobj.settings.pg.valueStr == 28)
                        kbobj.settings.pg.ccsm = "";
                      if (kbobj.settings.pg.valueStr == 29)
                        kbobj.settings.pg.ddsm = "";
                      input.value = input.value.substr(
                        0,
                        input.value.length - 1
                      );
                      if (kbobj.settings.pg.settings.jump == 1) {
                        kbobj.settings.pg.settings.del(
                          kbobj.settings.pg.valueStr
                        );
                      }
                    }, 50);
                    dels.push(xI);
                    clearInterval(delInter);
                  }
                }, 1);
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
                e.preventDefault();
                return false;
              }
            });
            $1.touchmove("#" + cid, "", function (e) {
              if (isAndroid) {
                return;
              }
              var MH = e.targetTouches[0].clientY;
              if (BL.WH <= MH) {
                del3();
              }
              e.preventDefault();
              return false;
            });
            $1.touchend("#" + cid, "", function (e) {
              if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
                del3();
                BL.Mov = 1;
                e.preventDefault();
                return false;
              }
            });
          }
          $1.touchend("#" + cid, "", function (e) {
            if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
              if (
                cid == "kb_n_CLOSE" &&
                (kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2)
              ) {
                setTimeout(function () {
                  call(BL.sv + "/123.svg");
                }, 80);
              }
              if (cid == "kb_n_S") {
                setTimeout(function () {
                  $1.css(
                    "#char_keyboard,#number_keyboard,#purenumber_keyboard",
                    { display: "none" }
                  );
                  $1.css("#symble_keyboard", { display: "block" });
                  justic3();
                }, 80);
              }
              if (cid == "kb_n_C") {
                setTimeout(function () {
                  $1.css(
                    "#symble_keyboard,#number_keyboard,#purenumber_keyboard",
                    { display: "none" }
                  );
                  $1.css("#char_keyboard", { display: "block" });
                  justic3();
                }, 80);
              }
              if (e.target.className.indexOf("chg") > -1) {
                if (kbobj.settings.chaosMode == 2 && event == 0) {
                  var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
                  arr = kbobj.randArray(arr);
                  var charst = [];
                  var chars = document
                    .querySelectorAll("#number_keyboard > .row1")[0]
                    .querySelectorAll(".row1pwd");
                  setTimeout(function () {
                    for (var j = 0, i = 0; j < chars.length; j++) {
                      if (
                        chars[j].id == "kb_n_CLOSE" ||
                        chars[j].id == "kb_n_D"
                      )
                        continue;
                      i++;
                      charst.push(chars[j]);
                    }
                    for (var j = 0; j < charst.length; j++) {
                      charst[j].innerHTML = arr[j];
                    }
                  }, 100);
                }
              }
              BL.Mov = 1;
            }
          });
          $1.touchstart("#" + cid, "", function (e) {
            BL.WH = $1.windowHeigth();
            var key = e.target.innerText;
            if (cid == "kb_n_SPACE") {
              return;
            } else if (cid == "kb_n_D") {
              event = 2;
            } else if (cid == "kb_n_CLOSE" && BL.double == 0) {
              if (
                kbobj.settings.pressStatus == 1 ||
                kbobj.settings.pressStatus == 2
              ) {
                call(BL.sv + "/123_2.svg");
              }
              if (BL.fixed == "") {
                $1.css("body", {
                  position: "relative",
                  left: 0,
                  top: 0,
                  transition: "all 0.3s",
                });
              } else {
                $1.css("body", {
                  position: "relative",
                  left: 0,
                  top: 0,
                  transition: "all 0.3s",
                });
                $1.css("#" + BL.fixed, {
                  bottom: 0 + "px",
                  transition: "all 0.3s",
                });
              }
              $1.removeClass(curid, "", "pwdkeyboard");
              $1.addClass(curid, "", "pwdkeyboardout");
              document
                .querySelector(curid)
                .addEventListener("webkitAnimationEnd", kbobj.handler, false);
              document
                .querySelector(curid)
                .addEventListener("animationEnd", kbobj.handler, false);
              event = 1;
              setTimeout(function () {
                PH.s_n();
                PH.add++;
                PH.cs = 1;
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
              }, 80);
            } else if (cid == "kb_n_S") {
              event = 6;
            } else if (cid == "kb_n_C") {
              event = 5;
            } else {
            }
            e.preventDefault();
          });
        }
        if (regs.test(cid)) {
          function del4() {
            if (
              kbobj.settings.pressStatus == 1 ||
              kbobj.settings.pressStatus == 2
            ) {
              setTimeout(function () {
                var url = BL.sv + "/quanDEL.svg";
                var img = new Image();
                img.src = url;
                img.onload = function () {
                  $1.css("#kb_s_D", {
                    backgroundImage: "url(" + BL.sv + "/quanDEL.svg)",
                    backgroundSize: "100% 100%",
                  });
                  $1.css("#kb_s_D>div", {
                    backgroundImage: "url(" + BL.sv + "/DEL.svg)",
                    backgroundSize: "100% 100%",
                  });
                };
              }, 80);
            }
            clearInterval(delInter);
            for (var int = 0; int < dels.length; int++) {
              clearInterval(dels[int]);
            }
            dels = [];
            var input = document.getElementById(kbobj.settings.pg.settings.id);
            var xingStr = "";
            if (kbobj.settings.hasMap) {
              for (var i = 0; i < kbobj.settings.pg.mappingStr.length; i++) {
                xingStr += "*";
              }
            } else {
              for (var i = 0; i < kbobj.settings.pg.valueStr; i++) {
                xingStr += "*";
              }
            }
            if (kbobj.settings.pg.settings.displayMode == 1) {
              var pass_num = kbobj.settings.pg;
              var pg = pass_num;
              if (kbobj.settings.pg.valueStr == 0) {
                input.value = "";
              } else {
                input.value = (
                  zhuwei2(pg.asm) +
                  zhuwei2(pg.bsm) +
                  zhuwei2(pg.csm) +
                  zhuwei2(pg.dsm) +
                  zhuwei2(pg.esm) +
                  zhuwei2(pg.fsm) +
                  zhuwei2(pg.gsm) +
                  zhuwei2(pg.hsm) +
                  zhuwei2(pg.ism) +
                  zhuwei2(pg.jsm) +
                  zhuwei2(pg.ksm) +
                  zhuwei2(pg.lsm) +
                  zhuwei2(pg.msm) +
                  zhuwei2(pg.nsm) +
                  zhuwei2(pg.osm) +
                  zhuwei2(pg.psm) +
                  zhuwei2(pg.qsm) +
                  zhuwei2(pg.rsm) +
                  zhuwei2(pg.ssm) +
                  zhuwei2(pg.tsm) +
                  zhuwei2(pg.usm) +
                  zhuwei2(pg.vsm) +
                  zhuwei2(pg.wsm) +
                  zhuwei2(pg.xsm) +
                  zhuwei2(pg.ysm) +
                  zhuwei2(pg.zsm) +
                  zhuwei2(pg.aasm) +
                  zhuwei2(pg.bbsm) +
                  zhuwei2(pg.ccsm) +
                  zhuwei2(pg.ddsm)
                ).substring(0, pass_num.valueStr);
              }
            } else {
              input.value = xingStr;
            }
            BL.double = 0;
          }
          if (cid != "kb_s_D" && cid != "kb_s_CLOSE") {
            $1.touchstart("#" + cid, "", function (e) {
              if (BL.double == 0) {
                var key = e.target.innerText;
                clearTimeout(BL.FD);
                BL.once = 0;
                BL.Mov = 0;
                BL.key2 = $1.attr("#" + cid, "data-name");
                BL.double = 1;
                $1.remove(".fd");
                if (/_SPACE/i.test(cid)) {
                  event = 7;
                  if (
                    kbobj.settings.pressStatus == 1 ||
                    kbobj.settings.pressStatus == 2
                  ) {
                    var url = BL.sv + "/space_2.svg";
                    var img = new Image();
                    img.src = url;
                    img.onload = function () {
                      $1.css(".anxia", {
                        background: "url(" + BL.sv + "/anjian.svg) ",
                        backgroundSize: "100% 100%",
                      });
                      $1.css(".anxia5", {
                        background: "url(" + BL.sv + "/quanDEL_2.svg) ",
                        backgroundSize: "100% 100%",
                      });
                      $1.removeClass("#symble_keyboard div", "", "anxia");
                      $1.removeClass("#symble_keyboard div", "", "anxia5");
                      $1.css("#kb_s_SPACE", {
                        backgroundImage: "url(" + BL.sv + "/space_2.svg)",
                        backgroundSize: "100% 100%",
                      });
                    };
                  }
                } else if (/_C/.test(cid)) {
                  event = 7;
                  if (
                    kbobj.settings.pressStatus == 1 ||
                    kbobj.settings.pressStatus == 2
                  ) {
                    call(BL.sv + "/123_2.svg");
                  }
                } else if (/_N/.test(cid)) {
                  event = 7;
                  if (
                    kbobj.settings.pressStatus == 1 ||
                    kbobj.settings.pressStatus == 2
                  ) {
                    call(BL.sv + "/quanDEL_2.svg");
                  }
                } else {
                  if (kbobj.settings.pressStatus == 1) {
                    var div = document.createElement("div");
                    var Html = e.target.innerText;
                    div.innerHTML = Html;
                    div.className = "fd";
                    $1.css("#" + cid, { position: "relative" });
                    if ($1.hasClass("#" + cid, "", "rowleft")) {
                      var img = new Image();
                      img.src = BL.sv + "/dianji_left.svg";
                      img.onload = function () {
                        document.getElementById(cid).appendChild(div);
                        $1.css(".fd", {
                          backgroundImage: "url(" + img.src + ")",
                          backgroundSize: "100% 100%",
                          position: "absolute",
                          width: "140%",
                          height: kbh * 0.4 + "px",
                          left: 0,
                          bottom: "0px",
                          textAlign: "center",
                          fontSize: "1.5em",
                          zIndex: "999",
                          lineHeight: kbh * 0.23 + "px",
                        });
                      };
                    } else if ($1.hasClass("#" + cid, "", "rowright")) {
                      var img = new Image();
                      img.src = BL.sv + "/dianji_right.svg";
                      img.onload = function () {
                        document.getElementById(cid).appendChild(div);
                        $1.css(".fd", {
                          backgroundImage: "url(" + img.src + ")",
                          backgroundSize: "100% 100%",
                          position: "absolute",
                          width: "140%",
                          height: kbh * 0.4 + "px",
                          right: 0,
                          bottom: "0px",
                          textAlign: "center",
                          fontSize: "1.5em",
                          zIndex: "999",
                          lineHeight: kbh * 0.23 + "px",
                        });
                      };
                    } else {
                      if ($1.hasClass("#" + cid, "", "row3pwdd")) {
                        var img = new Image();
                        img.src = BL.sv + "/dianji.svg";
                        img.onload = function () {
                          document.getElementById(cid).appendChild(div);
                          $1.css(".fd", {
                            backgroundImage: "url(" + img.src + ")",
                            position: "absolute",
                            width: "150%",
                            height: kbh * 0.4 + "px",
                            left: "-25%",
                            bottom: "0px",
                            textAlign: "center",
                            fontSize: "1.5em",
                            zIndex: "999",
                            lineHeight: kbh * 0.19 + "px",
                            backgroundSize: "100% 100%",
                          });
                        };
                      } else {
                        var img = new Image();
                        img.src = BL.sv + "/dianji.svg";
                        img.onload = function () {
                          document.getElementById(cid).appendChild(div);
                          $1.css(".fd", {
                            backgroundImage: "url(" + img.src + ")",
                            position: "absolute",
                            width: "140%",
                            height: kbh * 0.4 + "px",
                            left: "-20%",
                            bottom: "0px",
                            textAlign: "center",
                            fontSize: "1.5em",
                            zIndex: "999",
                            lineHeight: kbh * 0.19 + "px",
                            backgroundSize: "100% 100%",
                          });
                        };
                      }
                    }
                  } else if (kbobj.settings.pressStatus == 2) {
                    if ($1.hasClass("#" + cid, "", "row3pwdd")) {
                      var url = BL.sv + "/quanDEL.svg";
                      var img = new Image();
                      img.src = url;
                      img.onload = function () {
                        $1.css(".anxia", {
                          background: "url(" + BL.sv + "/anjian.svg) ",
                          backgroundSize: "100% 100%",
                        });
                        $1.css(".anxia5", {
                          background: "url(" + BL.sv + "/quanDEL_2.svg) ",
                          backgroundSize: "100% 100%",
                        });
                        $1.removeClass("#symble_keyboard div", "", "anxia");
                        $1.removeClass("#symble_keyboard div", "", "anxia5");
                        $1.addClass("#" + cid, "", "anxia5");
                        $1.css("#" + cid, {
                          backgroundImage: "url(" + BL.sv + "/quanDEL.svg)",
                          backgroundSize: "100% 100%",
                        });
                      };
                    } else {
                      var url = BL.sv + "/anjian_2.svg";
                      var img = new Image();
                      img.src = url;
                      img.onload = function () {
                        $1.css(".anxia", {
                          background: "url(" + BL.sv + "/anjian.svg) ",
                          backgroundSize: "100% 100%",
                        });
                        $1.css(".anxia5", {
                          background: "url(" + BL.sv + "/quanDEL_2.svg) ",
                          backgroundSize: "100% 100%",
                        });
                        $1.removeClass("#symble_keyboard div", "", "anxia");
                        $1.removeClass("#symble_keyboard div", "", "anxia5");
                        $1.addClass("#" + cid, "", "anxia");
                        $1.css("#" + cid, {
                          backgroundImage: "url(" + BL.sv + "/anjian_2.svg)",
                          backgroundSize: "100% 100%",
                        });
                      };
                    }
                  }
                }
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
                e.preventDefault();
              }
            });
            $1.touchmove("#" + cid, "", function (e) {
              if (isAndroid) {
                return;
              }
              var MH = e.targetTouches[0].clientY;
              if (BL.WH <= MH + 1 && BL.Mov == 0) {
                if (/_SPACE/i.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/space.svg");
                  }, 100);
                } else if (/_C/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/123.svg");
                  }, 100);
                } else if (/_N/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/quanDEL.svg");
                  }, 100);
                } else {
                  if ($1.hasClass("#" + cid, "", "row3pwdd")) {
                    call(BL.sv + "/quanDEL_2.svg");
                  } else {
                    call(BL.sv + "/anjian.svg");
                  }
                  BL.FD = setTimeout(function () {
                    $1.remove(".fd");
                  }, 100);
                }
                BL.once = 1;
                BL.Mov = 1;
                BL.double = 0;
                e.preventDefault();
              }
            });
            $1.touchend("#" + cid, "", function (e) {
              if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
                BL.double = 0;
                if (/_SPACE/i.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/space.svg");
                  }, 100);
                } else if (/_C/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/123.svg");
                  }, 100);
                } else if (/_N/.test(cid)) {
                  setTimeout(function () {
                    call(BL.sv + "/quanDEL.svg");
                  }, 100);
                } else {
                  setTimeout(function () {
                    if ($1.hasClass("#" + cid, "", "row3pwdd")) {
                      call(BL.sv + "/quanDEL_2.svg");
                    } else {
                      call(BL.sv + "/anjian.svg");
                    }
                  }, 100);
                  BL.FD = setTimeout(function () {
                    $1.remove(".fd");
                  }, 100);
                }
                e.preventDefault();
              }
            });
          } else if (cid == "kb_s_D") {
            var event = 2;
            var delInter;
            var dels = [];
            $1.touchstart("#" + cid, "", function (e) {
              if (BL.double == 0) {
                BL.double = 1;
                BL.once = 0;
                BL.Mov = 0;
                BL.key2 = $1.attr("#" + cid, "data-name");
                var key = e.target.innerText;
                if (
                  kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2
                ) {
                  $1.css(".anxia", {
                    background: "url(" + BL.sv + "/anjian.svg) ",
                    backgroundSize: "100% 100%",
                  });
                  $1.css(".anxia5", {
                    background: "url(" + BL.sv + "/quanDEL_2.svg) ",
                    backgroundSize: "100% 100%",
                  });
                  $1.removeClass("#symble_keyboard div", "", "anxia");
                  $1.removeClass("#symble_keyboard div", "", "anxia5");
                  var url = BL.sv + "/quanDEL_2.svg";
                  var img = new Image();
                  img.src = url;
                  img.onload = function () {
                    $1.css("#kb_s_D", {
                      backgroundImage: "url(" + BL.sv + "/quanDEL_2.svg)",
                      backgroundSize: "100% 100%",
                    });
                    $1.css("#kb_s_D>div", {
                      backgroundImage: "url(" + BL.sv + "/DEL_2.svg)",
                      backgroundSize: "100% 100%",
                    });
                  };
                }
                startT = new Date().getTime();
                delInter = window.setInterval(function () {
                  endT = new Date().getTime();
                  var x = endT - startT;
                  if (x > 500) {
                    var input = document.getElementById(
                      kbobj.settings.pg.settings.id
                    );
                    var xI = setInterval(function () {
                      if (kbobj.settings.hasMap) {
                        kbobj.settings.pg.mappingStr =
                          kbobj.settings.pg.mappingStr.substr(
                            0,
                            kbobj.settings.pg.mappingStr.length - 1
                          );
                      }
                      kbobj.settings.pg.valueStr -= 1;
                      if (kbobj.settings.pg.valueStr < 0)
                        kbobj.settings.pg.valueStr = 0;
                      if (kbobj.settings.pg.valueStr == 0)
                        kbobj.settings.pg.asm = "";
                      if (kbobj.settings.pg.valueStr == 1)
                        kbobj.settings.pg.bsm = "";
                      if (kbobj.settings.pg.valueStr == 2)
                        kbobj.settings.pg.csm = "";
                      if (kbobj.settings.pg.valueStr == 3)
                        kbobj.settings.pg.dsm = "";
                      if (kbobj.settings.pg.valueStr == 4)
                        kbobj.settings.pg.esm = "";
                      if (kbobj.settings.pg.valueStr == 5)
                        kbobj.settings.pg.fsm = "";
                      if (kbobj.settings.pg.valueStr == 6)
                        kbobj.settings.pg.gsm = "";
                      if (kbobj.settings.pg.valueStr == 7)
                        kbobj.settings.pg.hsm = "";
                      if (kbobj.settings.pg.valueStr == 8)
                        kbobj.settings.pg.ism = "";
                      if (kbobj.settings.pg.valueStr == 9)
                        kbobj.settings.pg.jsm = "";
                      if (kbobj.settings.pg.valueStr == 10)
                        kbobj.settings.pg.ksm = "";
                      if (kbobj.settings.pg.valueStr == 11)
                        kbobj.settings.pg.lsm = "";
                      if (kbobj.settings.pg.valueStr == 12)
                        kbobj.settings.pg.msm = "";
                      if (kbobj.settings.pg.valueStr == 13)
                        kbobj.settings.pg.nsm = "";
                      if (kbobj.settings.pg.valueStr == 14)
                        kbobj.settings.pg.osm = "";
                      if (kbobj.settings.pg.valueStr == 15)
                        kbobj.settings.pg.psm = "";
                      if (kbobj.settings.pg.valueStr == 16)
                        kbobj.settings.pg.qsm = "";
                      if (kbobj.settings.pg.valueStr == 17)
                        kbobj.settings.pg.rsm = "";
                      if (kbobj.settings.pg.valueStr == 18)
                        kbobj.settings.pg.ssm = "";
                      if (kbobj.settings.pg.valueStr == 19)
                        kbobj.settings.pg.tsm = "";
                      if (kbobj.settings.pg.valueStr == 20)
                        kbobj.settings.pg.usm = "";
                      if (kbobj.settings.pg.valueStr == 21)
                        kbobj.settings.pg.vsm = "";
                      if (kbobj.settings.pg.valueStr == 22)
                        kbobj.settings.pg.wsm = "";
                      if (kbobj.settings.pg.valueStr == 23)
                        kbobj.settings.pg.xsm = "";
                      if (kbobj.settings.pg.valueStr == 24)
                        kbobj.settings.pg.ysm = "";
                      if (kbobj.settings.pg.valueStr == 25)
                        kbobj.settings.pg.zsm = "";
                      if (kbobj.settings.pg.valueStr == 26)
                        kbobj.settings.pg.aasm = "";
                      if (kbobj.settings.pg.valueStr == 27)
                        kbobj.settings.pg.bbsm = "";
                      if (kbobj.settings.pg.valueStr == 28)
                        kbobj.settings.pg.ccsm = "";
                      if (kbobj.settings.pg.valueStr == 29)
                        kbobj.settings.pg.ddsm = "";
                      input.value = input.value.substr(
                        0,
                        input.value.length - 1
                      );
                      if (kbobj.settings.pg.settings.jump == 1) {
                        kbobj.settings.pg.settings.del(
                          kbobj.settings.pg.valueStr
                        );
                      }
                    }, 50);
                    dels.push(xI);
                    clearInterval(delInter);
                  }
                }, 1);
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
                e.preventDefault();
                return false;
              }
            });
            $1.touchmove("#" + cid, "", function (e) {
              if (isAndroid) {
                return;
              }
              var MH = e.targetTouches[0].clientY;
              if (BL.WH <= MH + 1) {
                del4();
                e.preventDefault();
                return false;
              }
            });
            $1.touchend("#" + cid, "", function (e) {
              if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
                del4();
                BL.Mov = 1;
                e.preventDefault();
                return false;
              }
            });
          }
          $1.touchend("#" + cid, "", function (e) {
            if (BL.key2 == $1.attr("#" + cid, "data-name") && BL.Mov == 0) {
              if (
                cid == "kb_s_CLOSE" &&
                (kbobj.settings.pressStatus == 1 ||
                  kbobj.settings.pressStatus == 2)
              ) {
                setTimeout(function () {
                  call(BL.sv + "/123.svg");
                }, 100);
              }
              if (cid == "kb_s_N") {
                setTimeout(function () {
                  $1.css(
                    "#char_keyboard,#symble_keyboard,#purenumber_keyboard",
                    { display: "none" }
                  );
                  $1.css("#number_keyboard", { display: "block" });
                  justic3();
                }, 80);
              }
              if (cid == "kb_s_C") {
                setTimeout(function () {
                  $1.css(
                    "#number_keyboard,#symble_keyboard,#purenumber_keyboard",
                    { display: "none" }
                  );
                  $1.css("#char_keyboard", { display: "block" });
                  justic3();
                }, 80);
              }
              BL.Mov = 1;
            }
          });
          $1.touchstart("#" + cid, "", function (e) {
            BL.WH = $1.windowHeigth();
            var key = e.target.innerText;
            if (cid == "kb_s_SPACE") {
              return;
            } else if (cid == "kb_s_D") {
              event = 2;
            } else if (cid == "kb_s_CLOSE" && BL.double == 0) {
              if (
                kbobj.settings.pressStatus == 1 ||
                kbobj.settings.pressStatus == 2
              ) {
                call(BL.sv + "/123_2.svg");
              }
              if (BL.fixed == "") {
                $1.css("body", {
                  position: "relative",
                  left: 0,
                  top: 0,
                  transition: "all 0.3s",
                });
              } else {
                $1.css("body", {
                  position: "relative",
                  left: 0,
                  top: 0,
                  transition: "all 0.3s",
                });
                $1.css("#" + BL.fixed, {
                  bottom: 0 + "px",
                  transition: "all 0.3s",
                });
              }
              $1.removeClass(curid, "", "pwdkeyboard");
              $1.addClass(curid, "", "pwdkeyboardout");
              document
                .querySelector(curid)
                .addEventListener("webkitAnimationEnd", kbobj.handler, false);
              document
                .querySelector(curid)
                .addEventListener("animationEnd", kbobj.handler, false);
              event = 1;
              setTimeout(function () {
                PH.s_n();
                PH.add++;
                PH.cs = 1;
                kbobj.settings.pg.preCallBack(
                  event,
                  key.charCodeAt() ^ kbobj.settings.odd
                );
              }, 80);
            } else if (cid == "kb_s_N") {
              event = 4;
            } else if (cid == "kb_s_C") {
              event = 5;
            } else {
            }
            e.preventDefault();
          });
        }
      }
    };
    $1.filter(curid, "div", function (dom) {
      if (regkb.test(dom.id)) {
        var dom2 = document.querySelectorAll("#" + dom.id + ">div");
        for (var i = dom2.length - 1; i >= 0; i--) {
          if (regrow.test(dom2[i].className)) {
            var dom3 = dom2[i].querySelectorAll("div");
            for (var k = dom3.length - 1; k >= 0; k--) {
              if (dom3[k].className !== "") {
                dealbt(dom3[k].id);
              }
            }
          } else {
            dealbt(dom2.id);
          }
        }
      }
    });
    $1.touchstart(
      ".fd",
      undefined,
      function (e) {
        window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      },
      false
    );
    $1.touchstart("#testkbid", undefined, function (e) {
      e.preventDefault();
    });
    $1.onfocus("body", ".de2", function () {
      for (var int = 0; int < M.length; int++) {
        window.clearInterval(M[int]);
      }
      for (var int = 0; int < MM.length; int++) {
        window.clearInterval(MM[int]);
      }
      for (var int = 0; int < PH.L.length; int++) {
        window.clearInterval(PH.L[int]);
      }
      M2 = MM2 = undefined;
      miss = "";
      BL.hide = 1;
      clearTimeout(M3);
      clearTimeout(BL.ad);
      BL.ad = setTimeout(function () {
        if (BL.fixed == "") {
          $1.css("body", {
            position: "relative",
            left: 0,
            top: 0,
            transition: "all 0.3s",
          });
        } else {
          $1.css("body", {
            position: "relative",
            left: 0,
            top: 0,
            transition: "all 0.3s",
          });
          $1.css("#" + BL.fixed, { bottom: 0 + "px", transition: "all 0.3s" });
        }
        BL.hide = 0;
      }, 400);
      $1.removeClass("#testkbid", undefined, "pwdkeyboard");
      $1.addClass("#testkbid", undefined, "pwdkeyboardout2");
      $1.css("#testkbid", { display: "none" });
      if (miss == "") {
        miss = setInterval(function () {
          $1.removeClass("#testkbid", undefined, "pwdkeyboard");
          $1.addClass("#testkbid", undefined, "pwdkeyboardout2");
          $1.css("#testkbid", { display: "none" });
        }, 20);
        PH.L.push(miss);
      }
      if (BL.olo == 1) {
        event = 1;
        kbobj.settings.pg.preCallBack(
          event,
          "0".charCodeAt() ^ kbobj.settings.odd
        );
        if (
          PH.Id != "" &&
          ($1.hasClass("#testkbid", undefined, "pwdkeyboardout") ||
            $1.hasClass("#testkbid", undefined, "pwdkeyboardout2"))
        ) {
          if (PH.add == 1) {
            PH.s_n();
            PH.add++;
          }
          PH.cs = 1;
        }
      }
    });
    $1.touchstart("body", undefined, function (e) {
      if (
        !document.getElementById("testkbid").contains(e.target) &&
        e.target.id != "testkbid"
      ) {
        if (
          e.target.className.indexOf("default") > -1 ||
          e.target.className == "fd" ||
          e.target.className.indexOf("de2") > -1
        ) {
          $1.remove(".fd");
          return;
        } else {
          for (var int = 0; int < PH.L.length; int++) {
            window.clearInterval(PH.L[int]);
          }
          miss = "";
          Show = 1;
          clearTimeout(Show2);
          Show2 = setTimeout(function () {
            Show = 0;
          }, 350);
          clearTimeout(Hid);
          Hid = setTimeout(function () {
            for (var int = 0; int < M.length; int++) {
              window.clearInterval(M[int]);
            }
            for (var int = 0; int < MM.length; int++) {
              window.clearInterval(MM[int]);
            }
            setTimeout(function () {
              if (
                PH.Id != "" &&
                ($1.hasClass("#testkbid", undefined, "pwdkeyboardout") ||
                  $1.hasClass("#testkbid", undefined, "pwdkeyboardout2"))
              ) {
                if (PH.add == 1) {
                  PH.s_n();
                  PH.add++;
                } else if (PH.add == 2) {
                  var pass_num;
                  PH.pm = PH.arrId.indexOf(PH.Id);
                  pass_num = eval("(" + PH.arrPGD[PH.pm] + ")");
                  if (
                    pass_num.settings.blur != "" &&
                    pass_num.settings.blur != undefined
                  ) {
                    pass_num.settings.blur();
                  }
                }
                PH.cs = 1;
              }
              BL.kb = setInterval(function () {
                var kb = document.getElementById("testkbid");
                if (
                  kb.className == "pwdkeyboard" &&
                  $1.css("#testkbid", "display") == "none"
                ) {
                  $1.css("#testkbid", { display: "block" });
                }
              }, 20);
              T.push(BL.kb);
              setTimeout(function () {
                for (var i = 0; i < T.length; i++) {
                  window.clearInterval(T[i]);
                }
              }, 2000);
            }, 300);
            var hold;
            clearTimeout(hold);
            var b = $1.css(curid, "display") == "block" ? 1 : 0;
            if (
              BL.lol == 0 &&
              Tim == 0 &&
              b &&
              e.target.className.indexOf("de2") == -1
            ) {
              if (BL.fixed == "") {
                $1.css("body", {
                  position: "relative",
                  left: 0,
                  top: 0 + "px",
                  transition: "all 0.3s",
                });
              } else {
                $1.css("body", {
                  position: "relative",
                  left: 0,
                  top: 0 + "px",
                  transition: "all 0.3s",
                });
                $1.css("#" + BL.fixed, {
                  bottom: 0 + "px",
                  transition: "all 0.3s",
                });
              }
              $1.removeClass(curid, undefined, "pwdkeyboard");
              $1.addClass(curid, undefined, "pwdkeyboardout");
              document
                .querySelector(curid)
                .addEventListener("webkitAnimationEnd", kbobj.handler, false);
              document
                .querySelector(curid)
                .addEventListener("animationEnd", kbobj.handler, false);
              event = 1;
              kbobj.settings.pg.preCallBack(
                event,
                "0".charCodeAt() ^ kbobj.settings.odd
              );
              var pass_num;
              PH.pm = PH.arrId.indexOf(PH.Id);
              $1.attr("#" + PH.Id, "placeholder", PH.arrPlace[PH.pm]);
              Tim = 1;
              hold = setTimeout(function () {
                Tim = 0;
              }, 300);
            }
          }, 300);
        }
      }
    });
    window.addEventListener("orientationchange", function () {
      setTimeout(function () {
        $1.css(".fd", { display: "none" });
        var intel = isAndroid ? 300 : 0;
        if (/ OPR/i.test(u) || / OPiOS/i.test(u) || /MicroMessenger/i.test(u)) {
          kbobj.activeobj = document.activeElement;
          if (kbobj.activeobj != undefined) {
            kbobj.activeobj.blur();
            setTimeout(function () {
              if (kbobj.activeobj != undefined) {
                kbobj.activeobj = undefined;
              }
            }, 300);
          }
        }
        var or;
        if ($1.css(curid, "display") == "block") {
          if ($1.css("#char_keyboard", "display") !== "block") {
            or = 1;
          } else {
            or = 0;
          }
        } else {
          or = 2;
        }
        $1.addClass(curid, undefined, "pwdkeyboardout2");
        $1.css(curid, { display: "none" });
        if (BL.fixed == "") {
          $1.css("body", {
            position: "relative",
            left: 0,
            top: 0 + "px",
            transition: "all 0.3s",
          });
        } else {
          $1.css("body", {
            position: "relative",
            left: 0,
            top: 0 + "px",
            transition: "all 0.3s",
          });
          $1.css("#" + BL.fixed, { bottom: 0 + "px", transition: "all 0.3s" });
        }
        setTimeout(function () {
          justic2();
          winHeight = $1.windowHeigth();
        }, 200);
        if (or != 2) {
          setTimeout(function () {
            if (or == 1) {
              BL.heig = $1.css("#testkbid", "height");
            } else {
              BL.heig = $1.css("#testkbid", "height");
            }
            kbobj.show(or);
          }, 300);
        }
      }, 200);
    });
    this.init = true;
  }
};
keyBoard.prototype.randArray = function (data, flag) {
  var arrlen = data.length;
  var try1 = new Array();
  for (var i = 0; i < arrlen; i++) {
    try1[i] = i;
  }
  var try2 = new Array();
  for (var i = 0; i < arrlen; i++) {
    try2[i] = try1.splice(Math.floor(Math.random() * try1.length), 1);
  }
  var try3 = new Array();
  for (var i = 0; i < arrlen; i++) {
    if (flag) {
      try3[i] = data[try2[i]].toUpperCase();
    } else {
      try3[i] = data[try2[i]].toLowerCase();
    }
  }
  return try3;
};
var M2 = (MM2 = null);
keyBoard.prototype.show = function (or) {
  var kbobj = this;
  var curid = "#" + this.settings.id;
  if (
    (kbobj.settings.chaosMode == 1 || kbobj.settings.chaosMode == 2) &&
    or == 0 &&
    ($1.css(curid, "display") !== "block" || BL.charORnum == 1)
  ) {
    var arr = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
    ];
    arr = kbobj.randArray(arr);
    var chars = document
      .getElementById("char_keyboard")
      .querySelectorAll(".row1pwd,.row2pwd,.row3pwdb");
    if (kbobj.caps || kbobj.shift) {
      for (var j = 0; j < chars.length; j++) {
        chars[j].innerHTML = arr[j].toUpperCase();
      }
    } else {
      for (var j = 0; j < chars.length; j++) {
        chars[j].innerHTML = arr[j];
      }
    }
  }
  if (
    (kbobj.settings.chaosMode == 1 || kbobj.settings.chaosMode == 2) &&
    or == 1 &&
    ($1.css(curid, "display") !== "block" || BL.charORnum != 1)
  ) {
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    arr = kbobj.randArray(arr);
    var chars = document
      .getElementById("purenumber_keyboard")
      .querySelectorAll(".pwd");
    var charst = [];
    for (var j = 0, i = 0; j < chars.length; j++) {
      if (chars[j].id == "kb_p_CLOSE" || chars[j].id == "kb_p_D") continue;
      i++;
      charst.push(chars[j]);
    }
    for (var j = 0; j < charst.length; j++) {
      charst[j].innerHTML = arr[j];
    }
  }
  BL.charORnum = or;
  $1.css(curid, { height: "0px" });
  var curh = parseInt($1.css(curid, "height"));
  $1.css("#purenumber_keyboard", { height: kbh + "px" });
  $1.css("#char_keyboard", { height: kbh + "px" });
  $1.css("#number_keyboard", { height: kbh + "px" });
  $1.css("#symble_keyboard", { height: kbh + "px" });
  $1.css(curid, { height: kbh + "px" });
  if (BL.lol == 0) {
    if (BL.hide == 0) {
      M2 = setInterval(function () {
        if ($1.windowHeigth() >= winHeight * 0.8) {
          BL.T = 0;
          setTimeout(function () {
            var H3 =
              $1.windowHeigth() -
              document.getElementById(PH.Id).offsetHeight -
              document.getElementById(PH.Id).getBoundingClientRect().top;
            if (!!kbobj.settings.pg.settings.overHeight) {
              H3 -= Number(kbobj.settings.pg.settings.overHeight);
            }
            var H = parseInt(BL.heig);
            if (H3 < H) {
              var bodyTop = !!parseInt($1.css("body", "top"))
                ? parseInt($1.css("body", "top"))
                : 0;
              if (BL.fixed == "") {
                $1.css("body", {
                  position: "relative",
                  left: 0,
                  top: H3 - H - 2 + bodyTop + "px",
                  transition: "all 0.3s",
                });
              } else {
                $1.css("body", {
                  position: "relative",
                  left: 0,
                  top: -H + "px",
                  transition: "all 0.3s",
                });
                $1.css("#" + BL.fixed, {
                  bottom: H + "px",
                  transition: "all 0.3s",
                });
              }
            }
            $1.css(curid, { display: "block" });
            if (
              $1.hasClass(curid, undefined, "pwdkeyboardout") ||
              $1.hasClass(curid, undefined, "pwdkeyboardout2")
            ) {
              $1.removeClass(curid, undefined, "pwdkeyboardout");
              $1.removeClass(curid, undefined, "pwdkeyboardout2");
              $1.addClass(curid, undefined, "pwdkeyboard");
            }
            kbobj.endshow();
          }, 100);
          BL.lol = 1;
          setTimeout(function () {
            BL.lol = 0;
          }, 100);
          clearInterval(M2);
          for (var int = 0; int < M.length; int++) {
            window.clearInterval(M[int]);
          }
          for (var int = 0; int < MM.length; int++) {
            window.clearInterval(MM[int]);
          }
          M2 == undefined;
        }
      }, 20);
      M.push(M2);
    } else {
      clearTimeout(M3);
      M3 = setTimeout(function () {
        MM2 = setInterval(function () {
          if ($1.windowHeigth() >= winHeight * 0.8) {
            BL.T = 0;
            setTimeout(function () {
              var H3 =
                $1.windowHeigth() -
                document.getElementById(PH.Id).offsetHeight -
                document.getElementById(PH.Id).getBoundingClientRect().top;
              if (!!kbobj.settings.pg.settings.overHeight) {
                H3 -= Number(kbobj.settings.pg.settings.overHeight);
              }
              var H = parseInt(BL.heig);
              if (H3 < H) {
                var bodyTop = !!parseInt($1.css("body", "top"))
                  ? parseInt($1.css("body", "top"))
                  : 0;
                if (BL.fixed == "") {
                  $1.css("body", {
                    position: "relative",
                    left: 0,
                    top: H3 - H - 2 + bodyTop + "px",
                    transition: "all 0.3s",
                  });
                } else {
                  $1.css("body", {
                    position: "relative",
                    left: 0,
                    top: -H + "px",
                    transition: "all 0.3s",
                  });
                  $1.css("#" + BL.fixed, {
                    bottom: H + "px",
                    transition: "all 0.3s",
                  });
                }
              }
              $1.css(curid, { display: "block" });
              if (
                $1.hasClass(curid, undefined, "pwdkeyboardout") ||
                $1.hasClass(curid, undefined, "pwdkeyboardout2")
              ) {
                $1.removeClass(curid, undefined, "pwdkeyboardout");
                $1.removeClass(curid, undefined, "pwdkeyboardout2");
                $1.addClass(curid, undefined, "pwdkeyboard");
              }
              kbobj.endshow();
            }, 100);
            BL.lol = 1;
            setTimeout(function () {
              BL.lol = 0;
            }, 100);
            clearInterval(MM2);
            for (var int = 0; int < M.length; int++) {
              window.clearInterval(M[int]);
            }
            for (var int = 0; int < MM.length; int++) {
              window.clearInterval(MM[int]);
            }
            MM2 == undefined;
          }
        }, 20);
        MM.push(MM2);
      }, 300);
    }
  }
};
keyBoard.prototype.hide = function (e) {
  BL.double = 0;
  var kbobj = this;
  var curid = "#" + this.settings.id;
  for (var int = 0; int < M.length; int++) {
    window.clearInterval(M[int]);
  }
  for (var int = 0; int < MM.length; int++) {
    window.clearInterval(MM[int]);
  }
  for (var int = 0; int < PH.L.length; int++) {
    window.clearInterval(PH.L[int]);
  }
  $(curid).removeClass("pwdkeyboard").addClass("pwdkeyboardout2").hide();
  if (BL.fixed == "") {
    $("body").css({
      position: "relative",
      left: 0,
      top: 0 + "px",
      transition: "all 0.3s",
    });
  } else {
    $("body").css({
      position: "relative",
      left: 0,
      top: 0 + "px",
      transition: "all 0.3s",
    });
    $("#" + BL.fixed).css({ bottom: 0 + "px", transition: "all 0.3s" });
  }
  if (BL.olo == 1) {
    event = 1;
    kbobj.settings.pg.preCallBack(event, "0".charCodeAt() ^ kbobj.settings.odd);
    if (
      PH.Id != "" &&
      ($("#testkbid").hasClass("pwdkeyboardout") ||
        $("#testkbid").hasClass("pwdkeyboardout2"))
    ) {
      if (PH.add == 1) {
        PH.s_n();
        PH.add++;
      }
      PH.cs = 1;
    }
  }
  return false;
};
function passGuard(options) {
  this.settings = {
    id: "",
    maxLength: 12,
    regExp1: "[0-9]",
    displayMode: 0,
    rsaPublicKey: "",
    mappurl: "",
    randomKey: "",
    enterEvent: "",
    keyBoard: {},
    mappingArray: [],
  };
  this.valueStr = 0;
  this.mappingStr = "";
  if (options != undefined) {
    this.settings = options;
  }
}
passGuard.intervs = [];
passGuard.inputs = [];
passGuard.mapArr = undefined;
passGuard.prototype.generate = function (id, keyBoard, pgd, or) {
  this.settings.keyBoard = keyBoard;
  this.settings.id = id;
  if (PH.arrId.indexOf(id) == -1) {
    PH.arrId.push(id);
    PH.arrPlace.push($1.attr("#" + id, "placeholder"));
  }
  if (PH.arrPGD.indexOf(pgd) == -1) {
    PH.arrPGD.push(pgd);
  }
  var obj = document.getElementById(id);
  passGuard.inputs.push(obj);
  var pg = this;
  var interv = null;
  var flag = false;
  var flag2 = false;
  PH.s_n = function () {
    var pass_num;
    PH.pm = PH.arrId.indexOf(PH.Id);
    pass_num = eval("(" + PH.arrPGD[PH.pm] + ")");
    $1.attr("#" + PH.Id, "placeholder", PH.arrPlace[PH.pm]);
    if (PH.cs == 0) {
      if (pass_num.settings.blur != undefined) {
        pass_num.settings.blur();
      }
      if (pass_num.settings.callBack == "") {
      } else {
        var parrt2 = new RegExp(pass_num.settings.regExp2);
        var pg = pass_num;
        if (pass_num.asm == undefined) {
          pass_num.settings.errorCallBack();
        } else if (
          parrt2.test(
            (
              zhuwei2(pg.asm) +
              zhuwei2(pg.bsm) +
              zhuwei2(pg.csm) +
              zhuwei2(pg.dsm) +
              zhuwei2(pg.esm) +
              zhuwei2(pg.fsm) +
              zhuwei2(pg.gsm) +
              zhuwei2(pg.hsm) +
              zhuwei2(pg.ism) +
              zhuwei2(pg.jsm) +
              zhuwei2(pg.ksm) +
              zhuwei2(pg.lsm) +
              zhuwei2(pg.msm) +
              zhuwei2(pg.nsm) +
              zhuwei2(pg.osm) +
              zhuwei2(pg.psm) +
              zhuwei2(pg.qsm) +
              zhuwei2(pg.rsm) +
              zhuwei2(pg.ssm) +
              zhuwei2(pg.tsm) +
              zhuwei2(pg.usm) +
              zhuwei2(pg.vsm) +
              zhuwei2(pg.wsm) +
              zhuwei2(pg.xsm) +
              zhuwei2(pg.ysm) +
              zhuwei2(pg.zsm) +
              zhuwei2(pg.aasm) +
              zhuwei2(pg.bbsm) +
              zhuwei2(pg.ccsm) +
              zhuwei2(pg.ddsm)
            ).substring(0, pass_num.valueStr)
          )
        ) {
          pass_num.settings.callBack();
        } else {
          pass_num.settings.errorCallBack();
        }
      }
    }
  };
  obj.onfocus = function (e) {
    BL.double = 0;
    var pass_num;
    PH.pm = PH.arrId.indexOf(id);
    pass_num = eval("(" + PH.arrPGD[PH.pm] + ")");
    if (pass_num.settings.focus != undefined) {
      pass_num.settings.focus();
    }
    this.blur();
    if (Show == 0 || id != PH.Id) {
      for (var int = 0; int < PH.L.length; int++) {
        window.clearInterval(PH.L[int]);
      }
      for (var i = 0; i < T.length; i++) {
        window.clearInterval(T[i]);
      }
      this.placeholder = "";
      PH.add = 1;
      BL.olo = 1;
      press2 = 1;
      BL.T = 1;
      clearTimeout(Hid);
      if (or == 1) {
        $1.css("#char_keyboard,#number_keyboard,#symble_keyboard", {
          display: "none",
        });
        $1.css("#purenumber_keyboard", { display: "block" });
        BL.heig = $1.css("#testkbid", "height");
      } else {
        $1.css("#purenumber_keyboard,#number_keyboard,#symble_keyboard", {
          display: "none",
        });
        $1.css("#char_keyboard", { display: "block" });
        BL.heig = $1.css("#testkbid", "height");
      }
      var input = this;
      this.mappingStr = "";
      for (var int = 0; int < passGuard.intervs.length; int++) {
        window.clearInterval(passGuard.intervs[int]);
      }
      for (var int2 = 0; int2 < passGuard.inputs.length; int2++) {
        passGuard.inputs[int2].value = passGuard.inputs[int2].value.replace(
          "|",
          ""
        );
      }
      passGuard.intervs = [];
      if (keyBoard.settings.hasMap == 1) {
        if (passGuard.mapArr == undefined) {
          if (pg.settings.mappurl == undefined || pg.settings.mappurl == "") {
            alert("无效的映射申请地址。");
            return;
          }
          Ajax.get(
            pg.settings.mappurl + "?" + get_time(),
            function (mappingStr) {
              console.log("1:" + mappingStr);
              pg.setMapping(mappingStr);
            },
            false
          );
        }
      }
      interv = setInterval(function () {
        if (!document.getElementById(id)) {
          return;
        }
        document.getElementById(id).setAttribute("placeholder", "");
        if (flag) {
          input.value = input.value.replace("|", "");
          flag = false;
        } else {
          input.value = input.value + "|";
          flag = true;
        }
      }, 500);
      passGuard.intervs.push(interv);
      setTimeout(function () {
        keyBoard.preCallBack = pg.preCallBack;
        if (pg.settings.fixed == undefined) {
          BL.fixed = "";
        } else {
          BL.fixed = pg.settings.fixed;
        }
        keyBoard.settings.pg = pg;
        keyBoard.settings.odd = 51;
        keyBoard.show(or);
        if (PH.Id != "" && PH.Id != id) {
          PH.s_n();
          PH.cs = 0;
        }
        PH.cs = 0;
        PH.Id = id;
        e.preventDefault();
        return false;
      }, 20);
    }
  };
};
var SH;
passGuard.prototype.preCallBack = function (event, key) {
  var realkey = key ^ 51;
  var pg = this;
  var input = document.getElementById(pg.settings.id);
  input.value = input.value.replace("|", "");
  if (event == 1) {
    BL.T = 0;
    for (var int = 0; int < passGuard.intervs.length; int++) {
      window.clearInterval(passGuard.intervs[int]);
    }
  } else if (event == 2) {
    input.value = input.value.substr(0, input.value.length - 1);
    if (pg.settings.keyBoard.settings.hasMap) {
      pg.mappingStr = pg.mappingStr.substr(0, pg.mappingStr.length - 1);
    }
    pg.valueStr -= 1;
    if (pg.valueStr < 0) pg.valueStr = 0;
    if (pg.valueStr == 0) pg.asm = "";
    if (pg.valueStr == 1) pg.bsm = "";
    if (pg.valueStr == 2) pg.csm = "";
    if (pg.valueStr == 3) pg.dsm = "";
    if (pg.valueStr == 4) pg.esm = "";
    if (pg.valueStr == 5) pg.fsm = "";
    if (pg.valueStr == 6) pg.gsm = "";
    if (pg.valueStr == 7) pg.hsm = "";
    if (pg.valueStr == 8) pg.ism = "";
    if (pg.valueStr == 9) pg.jsm = "";
    if (pg.valueStr == 10) pg.ksm = "";
    if (pg.valueStr == 11) pg.lsm = "";
    if (pg.valueStr == 12) pg.msm = "";
    if (pg.valueStr == 13) pg.nsm = "";
    if (pg.valueStr == 14) pg.osm = "";
    if (pg.valueStr == 15) pg.psm = "";
    if (pg.valueStr == 16) pg.qsm = "";
    if (pg.valueStr == 17) pg.rsm = "";
    if (pg.valueStr == 18) pg.ssm = "";
    if (pg.valueStr == 19) pg.tsm = "";
    if (pg.valueStr == 20) pg.usm = "";
    if (pg.valueStr == 21) pg.vsm = "";
    if (pg.valueStr == 22) pg.wsm = "";
    if (pg.valueStr == 23) pg.xsm = "";
    if (pg.valueStr == 24) pg.ysm = "";
    if (pg.valueStr == 25) pg.zsm = "";
    if (pg.valueStr == 26) pg.aasm = "";
    if (pg.valueStr == 27) pg.bbsm = "";
    if (pg.valueStr == 28) pg.ccsm = "";
    if (pg.valueStr == 29) pg.ddsm = "";
    if (pg.settings.jump == 1) {
      pg.settings.del(pg.valueStr);
    }
  } else if (event == 0) {
    var parrt = new RegExp(pg.settings.regExp1);
    var realCha = String.fromCharCode(realkey);
    var maxLen = pg.settings.maxLength;
    var len = input.value.length;
    if (len < maxLen && parrt.test(realCha)) {
      var realCha2 = zhuwei(realCha);
      pg.valueStr += 1;
      if (pg.valueStr == 1) pg.asm = realCha2;
      if (pg.valueStr == 2) pg.bsm = realCha2;
      if (pg.valueStr == 3) pg.csm = realCha2;
      if (pg.valueStr == 4) pg.dsm = realCha2;
      if (pg.valueStr == 5) pg.esm = realCha2;
      if (pg.valueStr == 6) pg.fsm = realCha2;
      if (pg.valueStr == 7) pg.gsm = realCha2;
      if (pg.valueStr == 8) pg.hsm = realCha2;
      if (pg.valueStr == 9) pg.ism = realCha2;
      if (pg.valueStr == 10) pg.jsm = realCha2;
      if (pg.valueStr == 11) pg.ksm = realCha2;
      if (pg.valueStr == 12) pg.lsm = realCha2;
      if (pg.valueStr == 13) pg.msm = realCha2;
      if (pg.valueStr == 14) pg.nsm = realCha2;
      if (pg.valueStr == 15) pg.osm = realCha2;
      if (pg.valueStr == 16) pg.psm = realCha2;
      if (pg.valueStr == 17) pg.qsm = realCha2;
      if (pg.valueStr == 18) pg.rsm = realCha2;
      if (pg.valueStr == 19) pg.ssm = realCha2;
      if (pg.valueStr == 20) pg.tsm = realCha2;
      if (pg.valueStr == 21) pg.usm = realCha2;
      if (pg.valueStr == 22) pg.vsm = realCha2;
      if (pg.valueStr == 23) pg.wsm = realCha2;
      if (pg.valueStr == 24) pg.xsm = realCha2;
      if (pg.valueStr == 25) pg.ysm = realCha2;
      if (pg.valueStr == 26) pg.zsm = realCha2;
      if (pg.valueStr == 27) pg.aasm = realCha2;
      if (pg.valueStr == 28) pg.bbsm = realCha2;
      if (pg.valueStr == 29) pg.ccsm = realCha2;
      if (pg.valueStr == 30) pg.ddsm = realCha2;
      if (pg.settings.keyBoard.settings.hasMap) {
        pg.mappingStr += pg.mapping(realCha);
      }
      if (pg.settings.displayMode == 1) {
        input.value = (
          zhuwei2(pg.asm) +
          zhuwei2(pg.bsm) +
          zhuwei2(pg.csm) +
          zhuwei2(pg.dsm) +
          zhuwei2(pg.esm) +
          zhuwei2(pg.fsm) +
          zhuwei2(pg.gsm) +
          zhuwei2(pg.hsm) +
          zhuwei2(pg.ism) +
          zhuwei2(pg.jsm) +
          zhuwei2(pg.ksm) +
          zhuwei2(pg.lsm) +
          zhuwei2(pg.msm) +
          zhuwei2(pg.nsm) +
          zhuwei2(pg.osm) +
          zhuwei2(pg.psm) +
          zhuwei2(pg.qsm) +
          zhuwei2(pg.rsm) +
          zhuwei2(pg.ssm) +
          zhuwei2(pg.tsm) +
          zhuwei2(pg.usm) +
          zhuwei2(pg.vsm) +
          zhuwei2(pg.wsm) +
          zhuwei2(pg.xsm) +
          zhuwei2(pg.ysm) +
          zhuwei2(pg.zsm) +
          zhuwei2(pg.aasm) +
          zhuwei2(pg.bbsm) +
          zhuwei2(pg.ccsm) +
          zhuwei2(pg.ddsm)
        ).substring(0, pg.valueStr);
      } else {
        input.value += "*";
      }
      if (pg.settings.jump == 1) {
        pg.settings.add(pg.valueStr);
      }
    }
  }
};
passGuard.prototype.setMapping = function (mapStr) {
  if (mapStr) {
    passGuard.mapArr = mapStr;
  }
};
passGuard.prototype.clearPWD = function () {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  var input = document.getElementById(this.settings.id);
  input.value = "";
  this.valueStr = 0;
  this.asm = "";
  this.bsm = "";
  this.csm = "";
  this.dsm = "";
  this.esm = "";
  this.fsm = "";
  this.gsm = "";
  this.hsm = "";
  this.ism = "";
  this.jsm = "";
  this.ksm = "";
  this.lsm = "";
  this.msm = "";
  this.nsm = "";
  this.osm = "";
  this.psm = "";
  this.qsm = "";
  this.rsm = "";
  this.ssm = "";
  this.tsm = "";
  this.usm = "";
  this.vsm = "";
  this.wsm = "";
  this.xsm = "";
  this.ysm = "";
  this.zsm = "";
  this.aasm = "";
  this.bbsm = "";
  this.ccsm = "";
  this.ddsm = "";
};
function CharMode(iN, or) {
  if (iN >= 48 && iN <= 57) return 1;
  if (iN >= 65 && iN <= 90) return 2;
  if (iN >= 97 && iN <= 122 && or == 1) return 4;
  if (iN >= 97 && iN <= 122 && or == 0) return 2;
  else return 8;
}
passGuard.prototype.pwdCommon = function () {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  this.mimaReset();
  var pwd =
    Math.floor(Math.random() * 900) +
    100 +
    zhuwei2(this.asm) +
    zhuwei2(this.bsm) +
    zhuwei2(this.csm) +
    zhuwei2(this.dsm) +
    zhuwei2(this.esm) +
    zhuwei2(this.fsm) +
    zhuwei2(this.gsm) +
    zhuwei2(this.hsm) +
    zhuwei2(this.ism) +
    zhuwei2(this.jsm) +
    zhuwei2(this.ksm) +
    zhuwei2(this.lsm) +
    zhuwei2(this.msm) +
    zhuwei2(this.nsm) +
    zhuwei2(this.osm) +
    zhuwei2(this.psm) +
    zhuwei2(this.qsm) +
    zhuwei2(this.rsm) +
    zhuwei2(this.ssm) +
    zhuwei2(this.tsm) +
    zhuwei2(this.usm) +
    zhuwei2(this.vsm) +
    zhuwei2(this.wsm) +
    zhuwei2(this.xsm) +
    zhuwei2(this.ysm) +
    zhuwei2(this.zsm) +
    zhuwei2(this.aasm) +
    zhuwei2(this.bbsm) +
    zhuwei2(this.ccsm) +
    zhuwei2(this.ddsm);
  var Modes = 0;
  for (var i = 0; i < pwd.length - 3; i++) {
    Modes |= CharMode(pwd[i + 3].charCodeAt(), 1);
  }
  if (Modes == 0) {
    return 0;
  } else if (Modes == 1) {
    return 1;
  } else if (Modes == 4) {
    return 2;
  } else if (Modes == 5) {
    return 3;
  } else if (Modes == 2) {
    return 4;
  } else if (Modes == 3) {
    return 5;
  } else if (Modes == 6) {
    return 6;
  } else if (Modes == 7) {
    return 7;
  } else if (Modes == 8) {
    return 8;
  } else if (Modes == 9) {
    return 9;
  } else if (Modes == 12) {
    return 10;
  } else if (Modes == 13) {
    return 11;
  } else if (Modes == 10) {
    return 12;
  } else if (Modes == 11) {
    return 13;
  } else if (Modes == 14) {
    return 14;
  } else if (Modes == 15) {
    return 15;
  }
};
passGuard.prototype.pwdNum = function () {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  this.mimaReset();
  var pwd =
    Math.floor(Math.random() * 900) +
    100 +
    zhuwei2(this.asm) +
    zhuwei2(this.bsm) +
    zhuwei2(this.csm) +
    zhuwei2(this.dsm) +
    zhuwei2(this.esm) +
    zhuwei2(this.fsm) +
    zhuwei2(this.gsm) +
    zhuwei2(this.hsm) +
    zhuwei2(this.ism) +
    zhuwei2(this.jsm) +
    zhuwei2(this.ksm) +
    zhuwei2(this.lsm) +
    zhuwei2(this.msm) +
    zhuwei2(this.nsm) +
    zhuwei2(this.osm) +
    zhuwei2(this.psm) +
    zhuwei2(this.qsm) +
    zhuwei2(this.rsm) +
    zhuwei2(this.ssm) +
    zhuwei2(this.tsm) +
    zhuwei2(this.usm) +
    zhuwei2(this.vsm) +
    zhuwei2(this.wsm) +
    zhuwei2(this.xsm) +
    zhuwei2(this.ysm) +
    zhuwei2(this.zsm) +
    zhuwei2(this.aasm) +
    zhuwei2(this.bbsm) +
    zhuwei2(this.ccsm) +
    zhuwei2(this.ddsm);
  var Modes = 0;
  for (var i = 0; i < pwd.length - 3; i++) {
    Modes |= CharMode(pwd[i + 3].charCodeAt(), 0);
  }
  var num = 0;
  for (i = 0; i < 4; i++) {
    if (Modes & 1) num++;
    Modes >>>= 1;
  }
  return num;
};
passGuard.prototype.pwdSimple = function () {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  this.mimaReset();
  var parrt;
  var pwd =
    Math.floor(Math.random() * 900) +
    100 +
    zhuwei2(this.asm) +
    zhuwei2(this.bsm) +
    zhuwei2(this.csm) +
    zhuwei2(this.dsm) +
    zhuwei2(this.esm) +
    zhuwei2(this.fsm) +
    zhuwei2(this.gsm) +
    zhuwei2(this.hsm) +
    zhuwei2(this.ism) +
    zhuwei2(this.jsm) +
    zhuwei2(this.ksm) +
    zhuwei2(this.lsm) +
    zhuwei2(this.msm) +
    zhuwei2(this.nsm) +
    zhuwei2(this.osm) +
    zhuwei2(this.psm) +
    zhuwei2(this.qsm) +
    zhuwei2(this.rsm) +
    zhuwei2(this.ssm) +
    zhuwei2(this.tsm) +
    zhuwei2(this.usm) +
    zhuwei2(this.vsm) +
    zhuwei2(this.wsm) +
    zhuwei2(this.xsm) +
    zhuwei2(this.ysm) +
    zhuwei2(this.zsm) +
    zhuwei2(this.aasm) +
    zhuwei2(this.bbsm) +
    zhuwei2(this.ccsm) +
    zhuwei2(this.ddsm);
  var vlen = pwd.length - 3;
  if (vlen > 8) {
    return 0;
  }
  var count = 0;
  for (var i = 0; i < vlen; i++) {
    parrt = pwd[3];
    for (var i = 0; i < vlen; i++) {
      if (parrt == pwd[3 + i]) {
        count = count + 1;
      }
      if (count == vlen) {
        return 1;
      }
    }
  }
  var mm2 = pwd.substr(3, 3);
  if (mm2 == pwd.substr(6, 3)) {
    return 1;
  }
  var arr = new Array();
  arr[0] = "01234567890";
  arr[1] = "09876543210";
  arr[2] = "mnbvcxz";
  arr[3] = "zxcvbnm";
  arr[4] = "lkjhgfdsa";
  arr[5] = "asdfghjkl";
  arr[6] = "poiuytrewq";
  arr[7] = "qwertyuiop";
  arr[8] = "zyxwvutsrqponmlkjihgfedcba";
  arr[9] = "abcdefghijklmnopqrstuvwxyz";
  arr[10] = '-/:;()$&@"';
  arr[11] = '"@&$)(;:/-';
  arr[12] = ".,?!'";
  arr[13] = "'!?,.";
  arr[14] = "[]{}#%^*+=";
  arr[15] = "=+*^%#}{][";
  arr[16] = "_\\|~<>$&@`";
  arr[17] = "`@&$><~|\\_";
  for (var c = 0; c < arr.length; c++) {
    var temp = pwd.substr(3, pwd.length).toLowerCase();
    if (temp.indexOf("\\") > -1) {
      temp = temp.replace(/\\/g, "\\\\");
    }
    if (temp.indexOf("|") > -1) {
      temp = temp.replace(/\|/g, "\\|");
    }
    if (temp.indexOf("$") > -1) {
      temp = temp.replace(/\$/g, "\\$");
    }
    if (temp.indexOf("(") > -1) {
      temp = temp.replace(/\(/g, "\\(");
    }
    if (temp.indexOf(")") > -1) {
      temp = temp.replace(/\)/g, "\\)");
    }
    if (temp.indexOf("[") > -1) {
      temp = temp.replace(/\[/g, "\\[");
    }
    if (temp.indexOf("*") > -1) {
      temp = temp.replace(/\*/g, "\\*");
    }
    if (temp.indexOf("^") > -1) {
      temp = temp.replace(/\^/g, "\\^");
    }
    if (temp.indexOf("+") > -1) {
      temp = temp.replace(/\+/g, "\\+");
    }
    if (arr[c].match(temp)) {
      return 1;
    }
  }
  return 0;
};
passGuard.prototype.getValid = function () {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  var pg = this;
  this.mimaReset();
  var parrt = new RegExp(pg.settings.regExp2);
  if (pg.asm == undefined) {
    var pare = 1;
  } else {
    var pare = parrt.test(
      (
        zhuwei2(pg.asm) +
        zhuwei2(pg.bsm) +
        zhuwei2(pg.csm) +
        zhuwei2(pg.dsm) +
        zhuwei2(pg.esm) +
        zhuwei2(pg.fsm) +
        zhuwei2(pg.gsm) +
        zhuwei2(pg.hsm) +
        zhuwei2(pg.ism) +
        zhuwei2(pg.jsm) +
        zhuwei2(pg.ksm) +
        zhuwei2(pg.lsm) +
        zhuwei2(pg.msm) +
        zhuwei2(pg.nsm) +
        zhuwei2(pg.osm) +
        zhuwei2(pg.psm) +
        zhuwei2(pg.qsm) +
        zhuwei2(pg.rsm) +
        zhuwei2(pg.ssm) +
        zhuwei2(pg.tsm) +
        zhuwei2(pg.usm) +
        zhuwei2(pg.vsm) +
        zhuwei2(pg.wsm) +
        zhuwei2(pg.xsm) +
        zhuwei2(pg.ysm) +
        zhuwei2(pg.zsm) +
        zhuwei2(pg.aasm) +
        zhuwei2(pg.bbsm) +
        zhuwei2(pg.ccsm) +
        zhuwei2(pg.ddsm)
      ).substring(0, pg.valueStr)
    )
      ? 0
      : 1;
  }
  return pare;
};
passGuard.prototype.getHash = function () {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  var pg = this;
  this.mimaReset();
  return CryptoJS.MD5(
    (
      zhuwei2(pg.asm) +
      zhuwei2(pg.bsm) +
      zhuwei2(pg.csm) +
      zhuwei2(pg.dsm) +
      zhuwei2(pg.esm) +
      zhuwei2(pg.fsm) +
      zhuwei2(pg.gsm) +
      zhuwei2(pg.hsm) +
      zhuwei2(pg.ism) +
      zhuwei2(pg.jsm) +
      zhuwei2(pg.ksm) +
      zhuwei2(pg.lsm) +
      zhuwei2(pg.msm) +
      zhuwei2(pg.nsm) +
      zhuwei2(pg.osm) +
      zhuwei2(pg.psm) +
      zhuwei2(pg.qsm) +
      zhuwei2(pg.rsm) +
      zhuwei2(pg.ssm) +
      zhuwei2(pg.tsm) +
      zhuwei2(pg.usm) +
      zhuwei2(pg.vsm) +
      zhuwei2(pg.wsm) +
      zhuwei2(pg.xsm) +
      zhuwei2(pg.ysm) +
      zhuwei2(pg.zsm) +
      zhuwei2(pg.aasm) +
      zhuwei2(pg.bbsm) +
      zhuwei2(pg.ccsm) +
      zhuwei2(pg.ddsm)
    ).substring(0, pg.valueStr)
  ).toString();
};
passGuard.prototype.mimaReset = function () {
  if (this.asm == undefined) this.asm = "";
  if (this.bsm == undefined) this.bsm = "";
  if (this.csm == undefined) this.csm = "";
  if (this.dsm == undefined) this.dsm = "";
  if (this.esm == undefined) this.esm = "";
  if (this.fsm == undefined) this.fsm = "";
  if (this.gsm == undefined) this.gsm = "";
  if (this.hsm == undefined) this.hsm = "";
  if (this.ism == undefined) this.ism = "";
  if (this.jsm == undefined) this.jsm = "";
  if (this.ksm == undefined) this.ksm = "";
  if (this.lsm == undefined) this.lsm = "";
  if (this.msm == undefined) this.msm = "";
  if (this.nsm == undefined) this.nsm = "";
  if (this.osm == undefined) this.osm = "";
  if (this.psm == undefined) this.psm = "";
  if (this.qsm == undefined) this.qsm = "";
  if (this.rsm == undefined) this.rsm = "";
  if (this.ssm == undefined) this.ssm = "";
  if (this.tsm == undefined) this.tsm = "";
  if (this.usm == undefined) this.usm = "";
  if (this.vsm == undefined) this.vsm = "";
  if (this.wsm == undefined) this.wsm = "";
  if (this.xsm == undefined) this.xsm = "";
  if (this.ysm == undefined) this.ysm = "";
  if (this.zsm == undefined) this.zsm = "";
  if (this.aasm == undefined) this.aasm = "";
  if (this.bbsm == undefined) this.bbsm = "";
  if (this.ccsm == undefined) this.ccsm = "";
  if (this.ddsm == undefined) this.ddsm = "";
};
passGuard.prototype.mimaEmpty = function () {
  var input = document.getElementById(this.settings.id);
  input.value = "";
  passGuard.mapArr = undefined;
  this.valueStr = 0;
  this.asm = "";
  this.bsm = "";
  this.csm = "";
  this.dsm = "";
  this.esm = "";
  this.fsm = "";
  this.gsm = "";
  this.hsm = "";
  this.ism = "";
  this.jsm = "";
  this.ksm = "";
  this.lsm = "";
  this.msm = "";
  this.nsm = "";
  this.osm = "";
  this.psm = "";
  this.qsm = "";
  this.rsm = "";
  this.ssm = "";
  this.tsm = "";
  this.usm = "";
  this.vsm = "";
  this.dsm = "";
  this.xsm = "";
  this.ysm = "";
  this.zsm = "";
  this.aasm = "";
  this.bbsm = "";
  this.ccsm = "";
  this.ddsm = "";
  if (this.settings.keyBoard.settings.hasMap) {
    this.mappingStr = "";
  }
};
passGuard.prototype.getLength = function () {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  return this.valueStr;
};
passGuard.prototype.mapping = function (key) {
  var keyCode = key.charCodeAt(0);
  var str = base64decode(passGuard.mapArr);
  var mapR = eval(str);
  return String.fromCharCode(mapR[keyCode - 33]);
};
passGuard.prototype.setRandKey = function (ranKey) {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  try {
    if (ranKey) this.settings.randomKey = ranKey;
  } catch (e) {
    alert(e);
  }
};
passGuard.prototype.getOutputSM = function () {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  if (this.asm == undefined) this.asm = "";
  if (this.bsm == undefined) this.bsm = "";
  if (this.csm == undefined) this.csm = "";
  if (this.dsm == undefined) this.dsm = "";
  if (this.esm == undefined) this.esm = "";
  if (this.fsm == undefined) this.fsm = "";
  if (this.gsm == undefined) this.gsm = "";
  if (this.hsm == undefined) this.hsm = "";
  if (this.ism == undefined) this.ism = "";
  if (this.jsm == undefined) this.jsm = "";
  if (this.ksm == undefined) this.ksm = "";
  if (this.lsm == undefined) this.lsm = "";
  if (this.msm == undefined) this.msm = "";
  if (this.nsm == undefined) this.nsm = "";
  if (this.osm == undefined) this.osm = "";
  if (this.psm == undefined) this.psm = "";
  if (this.qsm == undefined) this.qsm = "";
  if (this.rsm == undefined) this.rsm = "";
  if (this.ssm == undefined) this.ssm = "";
  if (this.tsm == undefined) this.tsm = "";
  if (this.usm == undefined) this.usm = "";
  if (this.vsm == undefined) this.vsm = "";
  if (this.wsm == undefined) this.wsm = "";
  if (this.xsm == undefined) this.xsm = "";
  if (this.ysm == undefined) this.ysm = "";
  if (this.zsm == undefined) this.zsm = "";
  if (this.aasm == undefined) this.aasm = "";
  if (this.bbsm == undefined) this.bbsm = "";
  if (this.ccsm == undefined) this.ccsm = "";
  if (this.ddsm == undefined) this.ddsm = "";
  var vlen = this.valueStr;
  var retdata;
  if (this.settings.keyBoard.settings.hasMap == 1) {
    retdata = O(this.mappingStr, this.settings.sm2KeyHex, "1", false);
  } else {
    retdata = O(
      zhuwei2(this.asm) +
        zhuwei2(this.bsm) +
        zhuwei2(this.csm) +
        zhuwei2(this.dsm) +
        zhuwei2(this.esm) +
        zhuwei2(this.fsm) +
        zhuwei2(this.gsm) +
        zhuwei2(this.hsm) +
        zhuwei2(this.ism) +
        zhuwei2(this.jsm) +
        zhuwei2(this.ksm) +
        zhuwei2(this.lsm) +
        zhuwei2(this.msm) +
        zhuwei2(this.nsm) +
        zhuwei2(this.osm) +
        zhuwei2(this.psm) +
        zhuwei2(this.qsm) +
        zhuwei2(this.rsm) +
        zhuwei2(this.ssm) +
        zhuwei2(this.tsm) +
        zhuwei2(this.usm) +
        zhuwei2(this.vsm) +
        zhuwei2(this.wsm) +
        zhuwei2(this.xsm) +
        zhuwei2(this.ysm) +
        zhuwei2(this.zsm) +
        zhuwei2(this.aasm) +
        zhuwei2(this.bbsm) +
        zhuwei2(this.ccsm) +
        zhuwei2(this.ddsm),
      this.settings.sm2KeyHex,
      "1",
      false
    );
  }
  retdata = retdata.toUpperCase();
  var sKey = this.settings.randomKey;
  var neiKey = [
    0x3c, 0x2b, 0x3a, 0x4e, 0x5a, 0x6c, 0x79, 0x1c, 0x2f, 0x2b, 0x2c, 0x2d,
    0x2e, 0x2f, 0x3a, 0x3b, 0x11, 0x22, 0x33, 0x41, 0x55, 0x46, 0x77, 0x6a,
    0x2a, 0x2b, 0x2c, 0x2d, 0x4e, 0x2f, 0x3d, 0x3f,
  ];
  var fkey = "";
  var lx = "";
  for (var i = 0; i < sKey.length; i++) {
    lx = String.fromCharCode(sKey[i].charCodeAt(0) ^ neiKey[i]);
    fkey += lx;
  }
  var sm4obj = sm4();
  var rks = fkey;
  var kks = [];
  for (var i = 0; i < 32; i++) {
    kks.push(rks.charCodeAt(i));
  }
  var key = [],
    input = [];
  for (var i = 0, j = 16; i < 16, j < 32; i++, j++) {
    key.push(kks[i]);
    input.push(kks[j]);
  }
  sm4obj.init(key);
  var cipher = sm4obj.cipher(input, true);
  var plian = sm4obj.cipher(cipher, false);
  var encryptdata = sm4obj.encryptstring(retdata, true);
  var base64str = sm4obj.base64encode(encryptdata);
  passGuard.mapArr = undefined;
  this.valueStr = 0;
  this.asm = "";
  this.bsm = "";
  this.csm = "";
  this.dsm = "";
  this.esm = "";
  this.fsm = "";
  this.gsm = "";
  this.hsm = "";
  this.ism = "";
  this.jsm = "";
  this.ksm = "";
  this.lsm = "";
  this.msm = "";
  this.nsm = "";
  this.osm = "";
  this.psm = "";
  this.qsm = "";
  this.rsm = "";
  this.ssm = "";
  this.tsm = "";
  this.usm = "";
  this.vsm = "";
  this.dsm = "";
  this.xsm = "";
  this.ysm = "";
  this.zsm = "";
  this.aasm = "";
  this.bbsm = "";
  this.ccsm = "";
  this.ddsm = "";
  this.mappingStr = "";
  return base64str;
};
passGuard.prototype.getOutput = function () {
  if (!verifyFlag) {
    alert("license verify error!");
    return false;
  }
  this.mimaReset();
  var crypt = new JSEncrypt();
  crypt.setPublicKey(this.settings.rsaPublicKey);
  if (this.settings.keyBoard.settings.hasMap == 1) {
    var rsaStr = crypt.encrypt(this.mappingStr);
  } else {
    var rsaStr = crypt.encrypt(
      zhuwei2(this.asm) +
        zhuwei2(this.bsm) +
        zhuwei2(this.csm) +
        zhuwei2(this.dsm) +
        zhuwei2(this.esm) +
        zhuwei2(this.fsm) +
        zhuwei2(this.gsm) +
        zhuwei2(this.hsm) +
        zhuwei2(this.ism) +
        zhuwei2(this.jsm) +
        zhuwei2(this.ksm) +
        zhuwei2(this.lsm) +
        zhuwei2(this.msm) +
        zhuwei2(this.nsm) +
        zhuwei2(this.osm) +
        zhuwei2(this.psm) +
        zhuwei2(this.qsm) +
        zhuwei2(this.rsm) +
        zhuwei2(this.ssm) +
        zhuwei2(this.tsm) +
        zhuwei2(this.usm) +
        zhuwei2(this.vsm) +
        zhuwei2(this.wsm) +
        zhuwei2(this.xsm) +
        zhuwei2(this.ysm) +
        zhuwei2(this.zsm) +
        zhuwei2(this.aasm) +
        zhuwei2(this.bbsm) +
        zhuwei2(this.ccsm) +
        zhuwei2(this.ddsm)
    );
  }
  var aesstr = getEnStr(this.settings.randomKey.trim(), rsaStr.trim());
  passGuard.mapArr = undefined;
  this.valueStr = 0;
  this.asm = "";
  this.bsm = "";
  this.csm = "";
  this.dsm = "";
  this.esm = "";
  this.fsm = "";
  this.gsm = "";
  this.hsm = "";
  this.ism = "";
  this.jsm = "";
  this.ksm = "";
  this.lsm = "";
  this.msm = "";
  this.nsm = "";
  this.osm = "";
  this.psm = "";
  this.qsm = "";
  this.rsm = "";
  this.ssm = "";
  this.tsm = "";
  this.usm = "";
  this.vsm = "";
  this.wsm = "";
  this.xsm = "";
  this.ysm = "";
  this.zsm = "";
  this.aasm = "";
  this.bbsm = "";
  this.ccsm = "";
  this.ddsm = "";
  this.mappingStr = "";
  return aesstr;
};
var cert = "-----BEGIN CERTIFICATE-----\n";
cert +=
  "MIICHjCCAYegAwIBAgIFBO2Kp0UwDQYJKoZIhvcNAQELBQAwVDEOMAwGA1UEAxMFU0lDQ0ExCzAJ\n";
cert +=
  "BgNVBAsTAlNDMQ4wDAYDVQQKEwVTSUNDQTELMAkGA1UEBxMCQkoxCzAJBgNVBAgTAkJKMQswCQYD\n";
cert +=
  "VQQGEwJDTjAeFw0xNzAxMTYwODM3MzlaFw0xNzAxMTYwODM3MzlaMFIxDDAKBgNVBAMTA0xlZTEL\n";
cert +=
  "MAkGA1UECxMCU0MxDjAMBgNVBAoTBVNJQ0NBMQswCQYDVQQHEwJCSjELMAkGA1UECBMCQkoxCzAJ\n";
cert +=
  "BgNVBAYTAkNOMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDm0MpZBsaKYQSGj1lytQ+ubUm/\n";
cert +=
  "4pvmIKTWtqtrGo75cF4N7Hajlm29wjOf7I7fTe4+JlxYmMhqxoXeoiLFwPUgVm6oMGU5T80R9Iw6\n";
cert +=
  "cg36dX8l7bYwiETs/rI09Kzs+r7GZAEI1XueCNQygN9wfUcBDuXIsjjmzcUkpC5GNFGzxQIDAQAB\n";
cert +=
  "MA0GCSqGSIb3DQEBCwUAA4GBADq6BvU5ILNZ9OanxqrTZ86o6qNgYMkopZrw0h0skNDRQ4GX1deQ\n";
cert +=
  "AKSamow9ZW6g93/KkatMmF2vc2P43zeJ+vwunt+Tu57IUb4VJ+eKafGSo9ySilzVcWTUW8dR0zoN\n";
cert += "N3cAL5v1zWqhe/9z09xtsLwShtvv/PF0xgs3qmTKe8tG\n";
cert += "-----END CERTIFICATE-----";
function getYMD() {
  var myDate = new Date();
  var yy = myDate.getFullYear();
  var mm = myDate.getMonth() + 1;
  if (mm < 10) {
    mm = "0" + mm;
  }
  var dd = myDate.getDate();
  if (dd < 10) {
    dd = "0" + dd;
  }
  return "" + yy + mm + dd;
}
var verifyFlag = true;
function verifyLicense(str) {
  var b64oneStr = base64decode(str);
  var indexs = b64oneStr.indexOf("{");
  var sMsg = b64oneStr.substring(indexs);
  b64oneStr = b64oneStr.substring(0, indexs);
  hexoneStr = new Base642().decode(b64oneStr);
  var x509 = new X509();
  x509.readCertPEM(cert);
  var isValid = x509.subjectPublicKeyRSA.verifyString(sMsg, hexoneStr);
  var obj = JSON.parse(sMsg);
  var today = getYMD();
  if (isValid) {
    if (obj.type == "test") {
      console.log("this is a test license!");
      if (today > obj.notafter) {
        verifyFlag = false;
        console.log("this license is out date!");
      }
    } else if (obj.type == "product") {
      console.log("this is a product license!");
      var hostname = location.hostname;
      var apps = obj.applyname;
      if (apps.length == 1) {
        var regobj = new RegExp(
          apps[0].replace(/\./g, "[.]*").replace(/\*/, "[.]*")
        );
        if (regobj.test(hostname)) {
        } else {
          verifyFlag = false;
          console.log("hostname verify error!");
        }
      } else if (apps.length > 1) {
        var flag = false;
        for (var i = 0; i < apps.length; i++) {
          var regobj = new RegExp(
            apps[i].replace(/\./g, "\\.").replace("*", ".")
          );
          if (regobj.test(hostname)) {
            flag = true;
            break;
          }
        }
        if (!flag) {
          verifyFlag = false;
          console.log("hostname verify error!");
        }
      }
    }
  } else {
    verifyFlag = false;
    console.log("license verify error!");
  }
}
(function (root, factory) {
  if (typeof exports === "object") {
    module.exports = exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.CryptoJS = factory();
  }
})(window, function () {
  var CryptoJS =
    CryptoJS ||
    (function (Math, undefined) {
      var C = {};
      var C_lib = (C.lib = {});
      var Base = (C_lib.Base = (function () {
        function F() {}
        return {
          extend: function (overrides) {
            F.prototype = this;
            var subtype = new F();
            if (overrides) {
              subtype.mixIn(overrides);
            }
            if (!subtype.hasOwnProperty("init")) {
              subtype.init = function () {
                subtype.$super.init.apply(this, arguments);
              };
            }
            subtype.init.prototype = subtype;
            subtype.$super = this;
            return subtype;
          },
          create: function () {
            var instance = this.extend();
            instance.init.apply(instance, arguments);
            return instance;
          },
          init: function () {},
          mixIn: function (properties) {
            for (var propertyName in properties) {
              if (properties.hasOwnProperty(propertyName)) {
                this[propertyName] = properties[propertyName];
              }
            }
            if (properties.hasOwnProperty("toString")) {
              this.toString = properties.toString;
            }
          },
          clone: function () {
            return this.init.prototype.extend(this);
          },
        };
      })());
      var WordArray = (C_lib.WordArray = Base.extend({
        init: function (words, sigBytes) {
          words = this.words = words || [];
          if (sigBytes != undefined) {
            this.sigBytes = sigBytes;
          } else {
            this.sigBytes = words.length * 4;
          }
        },
        toString: function (encoder) {
          return (encoder || Hex).stringify(this);
        },
        concat: function (wordArray) {
          var thisWords = this.words;
          var thatWords = wordArray.words;
          var thisSigBytes = this.sigBytes;
          var thatSigBytes = wordArray.sigBytes;
          this.clamp();
          if (thisSigBytes % 4) {
            for (var i = 0; i < thatSigBytes; i++) {
              var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
              thisWords[(thisSigBytes + i) >>> 2] |=
                thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
            }
          } else {
            for (var i = 0; i < thatSigBytes; i += 4) {
              thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
            }
          }
          this.sigBytes += thatSigBytes;
          return this;
        },
        clamp: function () {
          var words = this.words;
          var sigBytes = this.sigBytes;
          words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
          words.length = Math.ceil(sigBytes / 4);
        },
        clone: function () {
          var clone = Base.clone.call(this);
          clone.words = this.words.slice(0);
          return clone;
        },
        random: function (nBytes) {
          var words = [];
          var r = function (m_w) {
            var m_w = m_w;
            var m_z = 0x3ade68b1;
            var mask = 0xffffffff;
            return function () {
              m_z = (0x9069 * (m_z & 0xffff) + (m_z >> 0x10)) & mask;
              m_w = (0x4650 * (m_w & 0xffff) + (m_w >> 0x10)) & mask;
              var result = ((m_z << 0x10) + m_w) & mask;
              result /= 0x100000000;
              result += 0.5;
              return result * (Math.random() > 0.5 ? 1 : -1);
            };
          };
          for (var i = 0, rcache; i < nBytes; i += 4) {
            var _r = r((rcache || Math.random()) * 0x100000000);
            rcache = _r() * 0x3ade67b7;
            words.push((_r() * 0x100000000) | 0);
          }
          return new WordArray.init(words, nBytes);
        },
      }));
      var C_enc = (C.enc = {});
      var Hex = (C_enc.Hex = {
        stringify: function (wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var hexChars = [];
          for (var i = 0; i < sigBytes; i++) {
            var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            hexChars.push((bite >>> 4).toString(16));
            hexChars.push((bite & 0x0f).toString(16));
          }
          return hexChars.join("");
        },
        parse: function (hexStr) {
          var hexStrLength = hexStr.length;
          var words = [];
          for (var i = 0; i < hexStrLength; i += 2) {
            words[i >>> 3] |=
              parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
          }
          return new WordArray.init(words, hexStrLength / 2);
        },
      });
      var Latin1 = (C_enc.Latin1 = {
        stringify: function (wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var latin1Chars = [];
          for (var i = 0; i < sigBytes; i++) {
            var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            latin1Chars.push(String.fromCharCode(bite));
          }
          return latin1Chars.join("");
        },
        parse: function (latin1Str) {
          var latin1StrLength = latin1Str.length;
          var words = [];
          for (var i = 0; i < latin1StrLength; i++) {
            words[i >>> 2] |=
              (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
          }
          return new WordArray.init(words, latin1StrLength);
        },
      });
      var Utf8 = (C_enc.Utf8 = {
        stringify: function (wordArray) {
          try {
            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
          } catch (e) {
            throw new Error("Malformed UTF-8 data");
          }
        },
        parse: function (utf8Str) {
          return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        },
      });
      var BufferedBlockAlgorithm = (C_lib.BufferedBlockAlgorithm = Base.extend({
        reset: function () {
          this._data = new WordArray.init();
          this._nDataBytes = 0;
        },
        _append: function (data) {
          if (typeof data == "string") {
            data = Utf8.parse(data);
          }
          this._data.concat(data);
          this._nDataBytes += data.sigBytes;
        },
        _process: function (doFlush) {
          var data = this._data;
          var dataWords = data.words;
          var dataSigBytes = data.sigBytes;
          var blockSize = this.blockSize;
          var blockSizeBytes = blockSize * 4;
          var nBlocksReady = dataSigBytes / blockSizeBytes;
          if (doFlush) {
            nBlocksReady = Math.ceil(nBlocksReady);
          } else {
            nBlocksReady = Math.max(
              (nBlocksReady | 0) - this._minBufferSize,
              0
            );
          }
          var nWordsReady = nBlocksReady * blockSize;
          var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
          if (nWordsReady) {
            for (var offset = 0; offset < nWordsReady; offset += blockSize) {
              this._doProcessBlock(dataWords, offset);
            }
            var processedWords = dataWords.splice(0, nWordsReady);
            data.sigBytes -= nBytesReady;
          }
          return new WordArray.init(processedWords, nBytesReady);
        },
        clone: function () {
          var clone = Base.clone.call(this);
          clone._data = this._data.clone();
          return clone;
        },
        _minBufferSize: 0,
      }));
      var Hasher = (C_lib.Hasher = BufferedBlockAlgorithm.extend({
        cfg: Base.extend(),
        init: function (cfg) {
          this.cfg = this.cfg.extend(cfg);
          this.reset();
        },
        reset: function () {
          BufferedBlockAlgorithm.reset.call(this);
          this._doReset();
        },
        update: function (messageUpdate) {
          this._append(messageUpdate);
          this._process();
          return this;
        },
        finalize: function (messageUpdate) {
          if (messageUpdate) {
            this._append(messageUpdate);
          }
          var hash = this._doFinalize();
          return hash;
        },
        blockSize: 512 / 32,
        _createHelper: function (hasher) {
          return function (message, cfg) {
            return new hasher.init(cfg).finalize(message);
          };
        },
        _createHmacHelper: function (hasher) {
          return function (message, key) {
            return new C_algo.HMAC.init(hasher, key).finalize(message);
          };
        },
      }));
      var C_algo = (C.algo = {});
      return C;
    })(Math);
  (function () {
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;
    var Base64 = (C_enc.Base64 = {
      stringify: function (wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = this._map;
        wordArray.clamp();
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
          var byte2 =
            (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
          var byte3 =
            (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
          var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
          }
        }
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }
        return base64Chars.join("");
      },
      parse: function (base64Str) {
        var base64StrLength = base64Str.length;
        var map = this._map;
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);
          if (paddingIndex != -1) {
            base64StrLength = paddingIndex;
          }
        }
        var words = [];
        var nBytes = 0;
        for (var i = 0; i < base64StrLength; i++) {
          if (i % 4) {
            var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
            var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
            words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
            nBytes++;
          }
        }
        return WordArray.create(words, nBytes);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    });
  })();
  (function () {
    if (typeof ArrayBuffer != "function") {
      return;
    }
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var superInit = WordArray.init;
    var subInit = (WordArray.init = function (typedArray) {
      if (typedArray instanceof ArrayBuffer) {
        typedArray = new Uint8Array(typedArray);
      }
      if (
        typedArray instanceof Int8Array ||
        (typeof Uint8ClampedArray !== "undefined" &&
          typedArray instanceof Uint8ClampedArray) ||
        typedArray instanceof Int16Array ||
        typedArray instanceof Uint16Array ||
        typedArray instanceof Int32Array ||
        typedArray instanceof Uint32Array ||
        typedArray instanceof Float32Array ||
        typedArray instanceof Float64Array
      ) {
        typedArray = new Uint8Array(
          typedArray.buffer,
          typedArray.byteOffset,
          typedArray.byteLength
        );
      }
      if (typedArray instanceof Uint8Array) {
        var typedArrayByteLength = typedArray.byteLength;
        var words = [];
        for (var i = 0; i < typedArrayByteLength; i++) {
          words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
        }
        superInit.call(this, words, typedArrayByteLength);
      } else {
        superInit.apply(this, arguments);
      }
    });
    subInit.prototype = WordArray;
  })();
  CryptoJS.lib.Cipher ||
    (function (undefined) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
      var C_enc = C.enc;
      var Utf8 = C_enc.Utf8;
      var Base64 = C_enc.Base64;
      var C_algo = C.algo;
      var EvpKDF = C_algo.EvpKDF;
      var Cipher = (C_lib.Cipher = BufferedBlockAlgorithm.extend({
        cfg: Base.extend(),
        createEncryptor: function (key, cfg) {
          return this.create(this._ENC_XFORM_MODE, key, cfg);
        },
        createDecryptor: function (key, cfg) {
          return this.create(this._DEC_XFORM_MODE, key, cfg);
        },
        init: function (xformMode, key, cfg) {
          this.cfg = this.cfg.extend(cfg);
          this._xformMode = xformMode;
          this._key = key;
          this.reset();
        },
        reset: function () {
          BufferedBlockAlgorithm.reset.call(this);
          this._doReset();
        },
        process: function (dataUpdate) {
          this._append(dataUpdate);
          return this._process();
        },
        finalize: function (dataUpdate) {
          if (dataUpdate) {
            this._append(dataUpdate);
          }
          var finalProcessedData = this._doFinalize();
          return finalProcessedData;
        },
        keySize: 128 / 32,
        ivSize: 128 / 32,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: (function () {
          function selectCipherStrategy(key) {
            if (typeof key == "string") {
              return PasswordBasedCipher;
            } else {
              return SerializableCipher;
            }
          }
          return function (cipher) {
            return {
              encrypt: function (message, key, cfg) {
                return selectCipherStrategy(key).encrypt(
                  cipher,
                  message,
                  key,
                  cfg
                );
              },
              decrypt: function (ciphertext, key, cfg) {
                return selectCipherStrategy(key).decrypt(
                  cipher,
                  ciphertext,
                  key,
                  cfg
                );
              },
            };
          };
        })(),
      }));
      var StreamCipher = (C_lib.StreamCipher = Cipher.extend({
        _doFinalize: function () {
          var finalProcessedBlocks = this._process(!!"flush");
          return finalProcessedBlocks;
        },
        blockSize: 1,
      }));
      var C_mode = (C.mode = {});
      var BlockCipherMode = (C_lib.BlockCipherMode = Base.extend({
        createEncryptor: function (cipher, iv) {
          return this.Encryptor.create(cipher, iv);
        },
        createDecryptor: function (cipher, iv) {
          return this.Decryptor.create(cipher, iv);
        },
        init: function (cipher, iv) {
          this._cipher = cipher;
          this._iv = iv;
        },
      }));
      var CBC = (C_mode.CBC = (function () {
        var CBC = BlockCipherMode.extend();
        CBC.Encryptor = CBC.extend({
          processBlock: function (words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            xorBlock.call(this, words, offset, blockSize);
            cipher.encryptBlock(words, offset);
            this._prevBlock = words.slice(offset, offset + blockSize);
          },
        });
        CBC.Decryptor = CBC.extend({
          processBlock: function (words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            cipher.decryptBlock(words, offset);
            xorBlock.call(this, words, offset, blockSize);
            this._prevBlock = thisBlock;
          },
        });
        function xorBlock(words, offset, blockSize) {
          var iv = this._iv;
          if (iv) {
            var block = iv;
            this._iv = undefined;
          } else {
            var block = this._prevBlock;
          }
          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= block[i];
          }
        }
        return CBC;
      })());
      var C_pad = (C.pad = {});
      var Pkcs7 = (C_pad.Pkcs7 = {
        pad: function (data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);
          var paddingWord =
            (nPaddingBytes << 24) |
            (nPaddingBytes << 16) |
            (nPaddingBytes << 8) |
            nPaddingBytes;
          var paddingWords = [];
          for (var i = 0; i < nPaddingBytes; i += 4) {
            paddingWords.push(paddingWord);
          }
          var padding = WordArray.create(paddingWords, nPaddingBytes);
          data.concat(padding);
        },
        unpad: function (data) {
          var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
          data.sigBytes -= nPaddingBytes;
        },
      });
      var BlockCipher = (C_lib.BlockCipher = Cipher.extend({
        cfg: Cipher.cfg.extend({ mode: CBC, padding: Pkcs7 }),
        reset: function () {
          Cipher.reset.call(this);
          var cfg = this.cfg;
          var iv = cfg.iv;
          var mode = cfg.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            var modeCreator = mode.createEncryptor;
          } else {
            var modeCreator = mode.createDecryptor;
            this._minBufferSize = 1;
          }
          this._mode = modeCreator.call(mode, this, iv && iv.words);
        },
        _doProcessBlock: function (words, offset) {
          this._mode.processBlock(words, offset);
        },
        _doFinalize: function () {
          var padding = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            padding.pad(this._data, this.blockSize);
            var finalProcessedBlocks = this._process(!!"flush");
          } else {
            var finalProcessedBlocks = this._process(!!"flush");
            padding.unpad(finalProcessedBlocks);
          }
          return finalProcessedBlocks;
        },
        blockSize: 128 / 32,
      }));
      var CipherParams = (C_lib.CipherParams = Base.extend({
        init: function (cipherParams) {
          this.mixIn(cipherParams);
        },
        toString: function (formatter) {
          return (formatter || this.formatter).stringify(this);
        },
      }));
      var C_format = (C.format = {});
      var OpenSSLFormatter = (C_format.OpenSSL = {
        stringify: function (cipherParams) {
          var ciphertext = cipherParams.ciphertext;
          var salt = cipherParams.salt;
          if (salt) {
            var wordArray = WordArray.create([0x53616c74, 0x65645f5f])
              .concat(salt)
              .concat(ciphertext);
          } else {
            var wordArray = ciphertext;
          }
          return wordArray.toString(Base64);
        },
        parse: function (openSSLStr) {
          var ciphertext = Base64.parse(openSSLStr);
          var ciphertextWords = ciphertext.words;
          if (
            ciphertextWords[0] == 0x53616c74 &&
            ciphertextWords[1] == 0x65645f5f
          ) {
            var salt = WordArray.create(ciphertextWords.slice(2, 4));
            ciphertextWords.splice(0, 4);
            ciphertext.sigBytes -= 16;
          }
          return CipherParams.create({ ciphertext: ciphertext, salt: salt });
        },
      });
      var SerializableCipher = (C_lib.SerializableCipher = Base.extend({
        cfg: Base.extend({ format: OpenSSLFormatter }),
        encrypt: function (cipher, message, key, cfg) {
          cfg = this.cfg.extend(cfg);
          var encryptor = cipher.createEncryptor(key, cfg);
          var ciphertext = encryptor.finalize(message);
          var cipherCfg = encryptor.cfg;
          return CipherParams.create({
            ciphertext: ciphertext,
            key: key,
            iv: cipherCfg.iv,
            algorithm: cipher,
            mode: cipherCfg.mode,
            padding: cipherCfg.padding,
            blockSize: cipher.blockSize,
            formatter: cfg.format,
          });
        },
        decrypt: function (cipher, ciphertext, key, cfg) {
          cfg = this.cfg.extend(cfg);
          ciphertext = this._parse(ciphertext, cfg.format);
          var plaintext = cipher
            .createDecryptor(key, cfg)
            .finalize(ciphertext.ciphertext);
          return plaintext;
        },
        _parse: function (ciphertext, format) {
          if (typeof ciphertext == "string") {
            return format.parse(ciphertext, this);
          } else {
            return ciphertext;
          }
        },
      }));
      var C_kdf = (C.kdf = {});
      var OpenSSLKdf = (C_kdf.OpenSSL = {
        execute: function (password, keySize, ivSize, salt) {
          if (!salt) {
            salt = WordArray.random(64 / 8);
          }
          var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(
            password,
            salt
          );
          var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
          key.sigBytes = keySize * 4;
          return CipherParams.create({ key: key, iv: iv, salt: salt });
        },
      });
      var PasswordBasedCipher = (C_lib.PasswordBasedCipher =
        SerializableCipher.extend({
          cfg: SerializableCipher.cfg.extend({ kdf: OpenSSLKdf }),
          encrypt: function (cipher, message, password, cfg) {
            cfg = this.cfg.extend(cfg);
            var derivedParams = cfg.kdf.execute(
              password,
              cipher.keySize,
              cipher.ivSize
            );
            cfg.iv = derivedParams.iv;
            var ciphertext = SerializableCipher.encrypt.call(
              this,
              cipher,
              message,
              derivedParams.key,
              cfg
            );
            ciphertext.mixIn(derivedParams);
            return ciphertext;
          },
          decrypt: function (cipher, ciphertext, password, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var derivedParams = cfg.kdf.execute(
              password,
              cipher.keySize,
              cipher.ivSize,
              ciphertext.salt
            );
            cfg.iv = derivedParams.iv;
            var plaintext = SerializableCipher.decrypt.call(
              this,
              cipher,
              ciphertext,
              derivedParams.key,
              cfg
            );
            return plaintext;
          },
        }));
    })();
  CryptoJS.mode.CFB = (function () {
    var CFB = CryptoJS.lib.BlockCipherMode.extend();
    CFB.Encryptor = CFB.extend({
      processBlock: function (words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        generateKeystreamAndEncrypt.call(
          this,
          words,
          offset,
          blockSize,
          cipher
        );
        this._prevBlock = words.slice(offset, offset + blockSize);
      },
    });
    CFB.Decryptor = CFB.extend({
      processBlock: function (words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var thisBlock = words.slice(offset, offset + blockSize);
        generateKeystreamAndEncrypt.call(
          this,
          words,
          offset,
          blockSize,
          cipher
        );
        this._prevBlock = thisBlock;
      },
    });
    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
      var iv = this._iv;
      if (iv) {
        var keystream = iv.slice(0);
        this._iv = undefined;
      } else {
        var keystream = this._prevBlock;
      }
      cipher.encryptBlock(keystream, 0);
      for (var i = 0; i < blockSize; i++) {
        words[offset + i] ^= keystream[i];
      }
    }
    return CFB;
  })();
  CryptoJS.mode.ECB = (function () {
    var ECB = CryptoJS.lib.BlockCipherMode.extend();
    ECB.Encryptor = ECB.extend({
      processBlock: function (words, offset) {
        this._cipher.encryptBlock(words, offset);
      },
    });
    ECB.Decryptor = ECB.extend({
      processBlock: function (words, offset) {
        this._cipher.decryptBlock(words, offset);
      },
    });
    return ECB;
  })();
  CryptoJS.pad.AnsiX923 = {
    pad: function (data, blockSize) {
      var dataSigBytes = data.sigBytes;
      var blockSizeBytes = blockSize * 4;
      var nPaddingBytes = blockSizeBytes - (dataSigBytes % blockSizeBytes);
      var lastBytePos = dataSigBytes + nPaddingBytes - 1;
      data.clamp();
      data.words[lastBytePos >>> 2] |=
        nPaddingBytes << (24 - (lastBytePos % 4) * 8);
      data.sigBytes += nPaddingBytes;
    },
    unpad: function (data) {
      var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
      data.sigBytes -= nPaddingBytes;
    },
  };
  CryptoJS.pad.Iso10126 = {
    pad: function (data, blockSize) {
      var blockSizeBytes = blockSize * 4;
      var nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);
      data
        .concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1))
        .concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
    },
    unpad: function (data) {
      var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
      data.sigBytes -= nPaddingBytes;
    },
  };
  CryptoJS.pad.Iso97971 = {
    pad: function (data, blockSize) {
      data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));
      CryptoJS.pad.ZeroPadding.pad(data, blockSize);
    },
    unpad: function (data) {
      CryptoJS.pad.ZeroPadding.unpad(data);
      data.sigBytes--;
    },
  };
  CryptoJS.mode.OFB = (function () {
    var OFB = CryptoJS.lib.BlockCipherMode.extend();
    var Encryptor = (OFB.Encryptor = OFB.extend({
      processBlock: function (words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var keystream = this._keystream;
        if (iv) {
          keystream = this._keystream = iv.slice(0);
          this._iv = undefined;
        }
        cipher.encryptBlock(keystream, 0);
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      },
    }));
    OFB.Decryptor = Encryptor;
    return OFB;
  })();
  CryptoJS.pad.NoPadding = { pad: function () {}, unpad: function () {} };
  (function (undefined) {
    var C = CryptoJS;
    var C_lib = C.lib;
    var CipherParams = C_lib.CipherParams;
    var C_enc = C.enc;
    var Hex = C_enc.Hex;
    var C_format = C.format;
    var HexFormatter = (C_format.Hex = {
      stringify: function (cipherParams) {
        return cipherParams.ciphertext.toString(Hex);
      },
      parse: function (input) {
        var ciphertext = Hex.parse(input);
        return CipherParams.create({ ciphertext: ciphertext });
      },
    });
  })();
  (function () {
    var C = CryptoJS;
    var C_lib = C.lib;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;
    var SBOX = [];
    var INV_SBOX = [];
    var SUB_MIX_0 = [];
    var SUB_MIX_1 = [];
    var SUB_MIX_2 = [];
    var SUB_MIX_3 = [];
    var INV_SUB_MIX_0 = [];
    var INV_SUB_MIX_1 = [];
    var INV_SUB_MIX_2 = [];
    var INV_SUB_MIX_3 = [];
    (function () {
      var d = [];
      for (var i = 0; i < 256; i++) {
        if (i < 128) {
          d[i] = i << 1;
        } else {
          d[i] = (i << 1) ^ 0x11b;
        }
      }
      var x = 0;
      var xi = 0;
      for (var i = 0; i < 256; i++) {
        var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
        sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
        SBOX[x] = sx;
        INV_SBOX[sx] = x;
        var x2 = d[x];
        var x4 = d[x2];
        var x8 = d[x4];
        var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
        SUB_MIX_0[x] = (t << 24) | (t >>> 8);
        SUB_MIX_1[x] = (t << 16) | (t >>> 16);
        SUB_MIX_2[x] = (t << 8) | (t >>> 24);
        SUB_MIX_3[x] = t;
        var t =
          (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
        INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
        INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
        INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
        INV_SUB_MIX_3[sx] = t;
        if (!x) {
          x = xi = 1;
        } else {
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        }
      }
    })();
    var RCON = [
      0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36,
    ];
    var AES = (C_algo.AES = BlockCipher.extend({
      _doReset: function () {
        var key = this._key;
        var keyWords = key.words;
        var keySize = key.sigBytes / 4;
        var nRounds = (this._nRounds = keySize + 6);
        var ksRows = (nRounds + 1) * 4;
        var keySchedule = (this._keySchedule = []);
        for (var ksRow = 0; ksRow < ksRows; ksRow++) {
          if (ksRow < keySize) {
            keySchedule[ksRow] = keyWords[ksRow];
          } else {
            var t = keySchedule[ksRow - 1];
            if (!(ksRow % keySize)) {
              t = (t << 8) | (t >>> 24);
              t =
                (SBOX[t >>> 24] << 24) |
                (SBOX[(t >>> 16) & 0xff] << 16) |
                (SBOX[(t >>> 8) & 0xff] << 8) |
                SBOX[t & 0xff];
              t ^= RCON[(ksRow / keySize) | 0] << 24;
            } else if (keySize > 6 && ksRow % keySize == 4) {
              t =
                (SBOX[t >>> 24] << 24) |
                (SBOX[(t >>> 16) & 0xff] << 16) |
                (SBOX[(t >>> 8) & 0xff] << 8) |
                SBOX[t & 0xff];
            }
            keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
          }
        }
        var invKeySchedule = (this._invKeySchedule = []);
        for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
          var ksRow = ksRows - invKsRow;
          if (invKsRow % 4) {
            var t = keySchedule[ksRow];
          } else {
            var t = keySchedule[ksRow - 4];
          }
          if (invKsRow < 4 || ksRow <= 4) {
            invKeySchedule[invKsRow] = t;
          } else {
            invKeySchedule[invKsRow] =
              INV_SUB_MIX_0[SBOX[t >>> 24]] ^
              INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
              INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^
              INV_SUB_MIX_3[SBOX[t & 0xff]];
          }
        }
      },
      encryptBlock: function (M, offset) {
        this._doCryptBlock(
          M,
          offset,
          this._keySchedule,
          SUB_MIX_0,
          SUB_MIX_1,
          SUB_MIX_2,
          SUB_MIX_3,
          SBOX
        );
      },
      decryptBlock: function (M, offset) {
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
        this._doCryptBlock(
          M,
          offset,
          this._invKeySchedule,
          INV_SUB_MIX_0,
          INV_SUB_MIX_1,
          INV_SUB_MIX_2,
          INV_SUB_MIX_3,
          INV_SBOX
        );
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
      },
      _doCryptBlock: function (
        M,
        offset,
        keySchedule,
        SUB_MIX_0,
        SUB_MIX_1,
        SUB_MIX_2,
        SUB_MIX_3,
        SBOX
      ) {
        var nRounds = this._nRounds;
        var s0 = M[offset] ^ keySchedule[0];
        var s1 = M[offset + 1] ^ keySchedule[1];
        var s2 = M[offset + 2] ^ keySchedule[2];
        var s3 = M[offset + 3] ^ keySchedule[3];
        var ksRow = 4;
        for (var round = 1; round < nRounds; round++) {
          var t0 =
            SUB_MIX_0[s0 >>> 24] ^
            SUB_MIX_1[(s1 >>> 16) & 0xff] ^
            SUB_MIX_2[(s2 >>> 8) & 0xff] ^
            SUB_MIX_3[s3 & 0xff] ^
            keySchedule[ksRow++];
          var t1 =
            SUB_MIX_0[s1 >>> 24] ^
            SUB_MIX_1[(s2 >>> 16) & 0xff] ^
            SUB_MIX_2[(s3 >>> 8) & 0xff] ^
            SUB_MIX_3[s0 & 0xff] ^
            keySchedule[ksRow++];
          var t2 =
            SUB_MIX_0[s2 >>> 24] ^
            SUB_MIX_1[(s3 >>> 16) & 0xff] ^
            SUB_MIX_2[(s0 >>> 8) & 0xff] ^
            SUB_MIX_3[s1 & 0xff] ^
            keySchedule[ksRow++];
          var t3 =
            SUB_MIX_0[s3 >>> 24] ^
            SUB_MIX_1[(s0 >>> 16) & 0xff] ^
            SUB_MIX_2[(s1 >>> 8) & 0xff] ^
            SUB_MIX_3[s2 & 0xff] ^
            keySchedule[ksRow++];
          s0 = t0;
          s1 = t1;
          s2 = t2;
          s3 = t3;
        }
        var t0 =
          ((SBOX[s0 >>> 24] << 24) |
            (SBOX[(s1 >>> 16) & 0xff] << 16) |
            (SBOX[(s2 >>> 8) & 0xff] << 8) |
            SBOX[s3 & 0xff]) ^
          keySchedule[ksRow++];
        var t1 =
          ((SBOX[s1 >>> 24] << 24) |
            (SBOX[(s2 >>> 16) & 0xff] << 16) |
            (SBOX[(s3 >>> 8) & 0xff] << 8) |
            SBOX[s0 & 0xff]) ^
          keySchedule[ksRow++];
        var t2 =
          ((SBOX[s2 >>> 24] << 24) |
            (SBOX[(s3 >>> 16) & 0xff] << 16) |
            (SBOX[(s0 >>> 8) & 0xff] << 8) |
            SBOX[s1 & 0xff]) ^
          keySchedule[ksRow++];
        var t3 =
          ((SBOX[s3 >>> 24] << 24) |
            (SBOX[(s0 >>> 16) & 0xff] << 16) |
            (SBOX[(s1 >>> 8) & 0xff] << 8) |
            SBOX[s2 & 0xff]) ^
          keySchedule[ksRow++];
        M[offset] = t0;
        M[offset + 1] = t1;
        M[offset + 2] = t2;
        M[offset + 3] = t3;
      },
      keySize: 256 / 32,
    }));
    C.AES = BlockCipher._createHelper(AES);
  })();
  (function (Math) {
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;
    var T = [];
    (function () {
      for (var i = 0; i < 64; i++) {
        T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
      }
    })();
    var MD5 = (C_algo.MD5 = Hasher.extend({
      _doReset: function () {
        this._hash = new WordArray.init([
          0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476,
        ]);
      },
      _doProcessBlock: function (M, offset) {
        for (var i = 0; i < 16; i++) {
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];
          M[offset_i] =
            (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
            (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00);
        }
        var H = this._hash.words;
        var M_offset_0 = M[offset + 0];
        var M_offset_1 = M[offset + 1];
        var M_offset_2 = M[offset + 2];
        var M_offset_3 = M[offset + 3];
        var M_offset_4 = M[offset + 4];
        var M_offset_5 = M[offset + 5];
        var M_offset_6 = M[offset + 6];
        var M_offset_7 = M[offset + 7];
        var M_offset_8 = M[offset + 8];
        var M_offset_9 = M[offset + 9];
        var M_offset_10 = M[offset + 10];
        var M_offset_11 = M[offset + 11];
        var M_offset_12 = M[offset + 12];
        var M_offset_13 = M[offset + 13];
        var M_offset_14 = M[offset + 14];
        var M_offset_15 = M[offset + 15];
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        a = FF(a, b, c, d, M_offset_0, 7, T[0]);
        d = FF(d, a, b, c, M_offset_1, 12, T[1]);
        c = FF(c, d, a, b, M_offset_2, 17, T[2]);
        b = FF(b, c, d, a, M_offset_3, 22, T[3]);
        a = FF(a, b, c, d, M_offset_4, 7, T[4]);
        d = FF(d, a, b, c, M_offset_5, 12, T[5]);
        c = FF(c, d, a, b, M_offset_6, 17, T[6]);
        b = FF(b, c, d, a, M_offset_7, 22, T[7]);
        a = FF(a, b, c, d, M_offset_8, 7, T[8]);
        d = FF(d, a, b, c, M_offset_9, 12, T[9]);
        c = FF(c, d, a, b, M_offset_10, 17, T[10]);
        b = FF(b, c, d, a, M_offset_11, 22, T[11]);
        a = FF(a, b, c, d, M_offset_12, 7, T[12]);
        d = FF(d, a, b, c, M_offset_13, 12, T[13]);
        c = FF(c, d, a, b, M_offset_14, 17, T[14]);
        b = FF(b, c, d, a, M_offset_15, 22, T[15]);
        a = GG(a, b, c, d, M_offset_1, 5, T[16]);
        d = GG(d, a, b, c, M_offset_6, 9, T[17]);
        c = GG(c, d, a, b, M_offset_11, 14, T[18]);
        b = GG(b, c, d, a, M_offset_0, 20, T[19]);
        a = GG(a, b, c, d, M_offset_5, 5, T[20]);
        d = GG(d, a, b, c, M_offset_10, 9, T[21]);
        c = GG(c, d, a, b, M_offset_15, 14, T[22]);
        b = GG(b, c, d, a, M_offset_4, 20, T[23]);
        a = GG(a, b, c, d, M_offset_9, 5, T[24]);
        d = GG(d, a, b, c, M_offset_14, 9, T[25]);
        c = GG(c, d, a, b, M_offset_3, 14, T[26]);
        b = GG(b, c, d, a, M_offset_8, 20, T[27]);
        a = GG(a, b, c, d, M_offset_13, 5, T[28]);
        d = GG(d, a, b, c, M_offset_2, 9, T[29]);
        c = GG(c, d, a, b, M_offset_7, 14, T[30]);
        b = GG(b, c, d, a, M_offset_12, 20, T[31]);
        a = HH(a, b, c, d, M_offset_5, 4, T[32]);
        d = HH(d, a, b, c, M_offset_8, 11, T[33]);
        c = HH(c, d, a, b, M_offset_11, 16, T[34]);
        b = HH(b, c, d, a, M_offset_14, 23, T[35]);
        a = HH(a, b, c, d, M_offset_1, 4, T[36]);
        d = HH(d, a, b, c, M_offset_4, 11, T[37]);
        c = HH(c, d, a, b, M_offset_7, 16, T[38]);
        b = HH(b, c, d, a, M_offset_10, 23, T[39]);
        a = HH(a, b, c, d, M_offset_13, 4, T[40]);
        d = HH(d, a, b, c, M_offset_0, 11, T[41]);
        c = HH(c, d, a, b, M_offset_3, 16, T[42]);
        b = HH(b, c, d, a, M_offset_6, 23, T[43]);
        a = HH(a, b, c, d, M_offset_9, 4, T[44]);
        d = HH(d, a, b, c, M_offset_12, 11, T[45]);
        c = HH(c, d, a, b, M_offset_15, 16, T[46]);
        b = HH(b, c, d, a, M_offset_2, 23, T[47]);
        a = II(a, b, c, d, M_offset_0, 6, T[48]);
        d = II(d, a, b, c, M_offset_7, 10, T[49]);
        c = II(c, d, a, b, M_offset_14, 15, T[50]);
        b = II(b, c, d, a, M_offset_5, 21, T[51]);
        a = II(a, b, c, d, M_offset_12, 6, T[52]);
        d = II(d, a, b, c, M_offset_3, 10, T[53]);
        c = II(c, d, a, b, M_offset_10, 15, T[54]);
        b = II(b, c, d, a, M_offset_1, 21, T[55]);
        a = II(a, b, c, d, M_offset_8, 6, T[56]);
        d = II(d, a, b, c, M_offset_15, 10, T[57]);
        c = II(c, d, a, b, M_offset_6, 15, T[58]);
        b = II(b, c, d, a, M_offset_13, 21, T[59]);
        a = II(a, b, c, d, M_offset_4, 6, T[60]);
        d = II(d, a, b, c, M_offset_11, 10, T[61]);
        c = II(c, d, a, b, M_offset_2, 15, T[62]);
        b = II(b, c, d, a, M_offset_9, 21, T[63]);
        H[0] = (H[0] + a) | 0;
        H[1] = (H[1] + b) | 0;
        H[2] = (H[2] + c) | 0;
        H[3] = (H[3] + d) | 0;
      },
      _doFinalize: function () {
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
        var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
        var nBitsTotalL = nBitsTotal;
        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] =
          (((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
          (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00);
        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] =
          (((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
          (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00);
        data.sigBytes = (dataWords.length + 1) * 4;
        this._process();
        var hash = this._hash;
        var H = hash.words;
        for (var i = 0; i < 4; i++) {
          var H_i = H[i];
          H[i] =
            (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
            (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
        }
        return hash;
      },
      clone: function () {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      },
    }));
    function FF(a, b, c, d, x, s, t) {
      var n = a + ((b & c) | (~b & d)) + x + t;
      return ((n << s) | (n >>> (32 - s))) + b;
    }
    function GG(a, b, c, d, x, s, t) {
      var n = a + ((b & d) | (c & ~d)) + x + t;
      return ((n << s) | (n >>> (32 - s))) + b;
    }
    function HH(a, b, c, d, x, s, t) {
      var n = a + (b ^ c ^ d) + x + t;
      return ((n << s) | (n >>> (32 - s))) + b;
    }
    function II(a, b, c, d, x, s, t) {
      var n = a + (c ^ (b | ~d)) + x + t;
      return ((n << s) | (n >>> (32 - s))) + b;
    }
    C.MD5 = Hasher._createHelper(MD5);
    C.HmacMD5 = Hasher._createHmacHelper(MD5);
  })(Math);
  CryptoJS.mode.CTRGladman = (function () {
    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
    function incWord(word) {
      if (((word >> 24) & 0xff) === 0xff) {
        var b1 = (word >> 16) & 0xff;
        var b2 = (word >> 8) & 0xff;
        var b3 = word & 0xff;
        if (b1 === 0xff) {
          b1 = 0;
          if (b2 === 0xff) {
            b2 = 0;
            if (b3 === 0xff) {
              b3 = 0;
            } else {
              ++b3;
            }
          } else {
            ++b2;
          }
        } else {
          ++b1;
        }
        word = 0;
        word += b1 << 16;
        word += b2 << 8;
        word += b3;
      } else {
        word += 0x01 << 24;
      }
      return word;
    }
    function incCounter(counter) {
      if ((counter[0] = incWord(counter[0])) === 0) {
        counter[1] = incWord(counter[1]);
      }
      return counter;
    }
    var Encryptor = (CTRGladman.Encryptor = CTRGladman.extend({
      processBlock: function (words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;
        if (iv) {
          counter = this._counter = iv.slice(0);
          this._iv = undefined;
        }
        incCounter(counter);
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      },
    }));
    CTRGladman.Decryptor = Encryptor;
    return CTRGladman;
  })();
  (function () {
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;
    var S = [];
    var C_ = [];
    var G = [];
    var Rabbit = (C_algo.Rabbit = StreamCipher.extend({
      _doReset: function () {
        var K = this._key.words;
        var iv = this.cfg.iv;
        for (var i = 0; i < 4; i++) {
          K[i] =
            (((K[i] << 8) | (K[i] >>> 24)) & 0x00ff00ff) |
            (((K[i] << 24) | (K[i] >>> 8)) & 0xff00ff00);
        }
        var X = (this._X = [
          K[0],
          (K[3] << 16) | (K[2] >>> 16),
          K[1],
          (K[0] << 16) | (K[3] >>> 16),
          K[2],
          (K[1] << 16) | (K[0] >>> 16),
          K[3],
          (K[2] << 16) | (K[1] >>> 16),
        ]);
        var C = (this._C = [
          (K[2] << 16) | (K[2] >>> 16),
          (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
          (K[3] << 16) | (K[3] >>> 16),
          (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
          (K[0] << 16) | (K[0] >>> 16),
          (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
          (K[1] << 16) | (K[1] >>> 16),
          (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
        ]);
        this._b = 0;
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[(i + 4) & 7];
        }
        if (iv) {
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];
          var i0 =
            (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) |
            (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
          var i2 =
            (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) |
            (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
          var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
          var i3 = (i2 << 16) | (i0 & 0x0000ffff);
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },
      _doProcessBlock: function (M, offset) {
        var X = this._X;
        nextState.call(this);
        S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
        S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
        S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
        S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
        for (var i = 0; i < 4; i++) {
          S[i] =
            (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) |
            (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);
          M[offset + i] ^= S[i];
        }
      },
      blockSize: 128 / 32,
      ivSize: 64 / 32,
    }));
    function nextState() {
      var X = this._X;
      var C = this._C;
      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      }
      C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
      C[1] = (C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0)) | 0;
      C[2] = (C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0)) | 0;
      C[3] = (C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0)) | 0;
      C[4] = (C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0)) | 0;
      C[5] = (C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0)) | 0;
      C[6] = (C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0)) | 0;
      C[7] = (C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0)) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i];
        var ga = gx & 0xffff;
        var gb = gx >>> 16;
        var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
        var gl =
          (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);
        G[i] = gh ^ gl;
      }
      X[0] =
        (G[0] +
          ((G[7] << 16) | (G[7] >>> 16)) +
          ((G[6] << 16) | (G[6] >>> 16))) |
        0;
      X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
      X[2] =
        (G[2] +
          ((G[1] << 16) | (G[1] >>> 16)) +
          ((G[0] << 16) | (G[0] >>> 16))) |
        0;
      X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
      X[4] =
        (G[4] +
          ((G[3] << 16) | (G[3] >>> 16)) +
          ((G[2] << 16) | (G[2] >>> 16))) |
        0;
      X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
      X[6] =
        (G[6] +
          ((G[5] << 16) | (G[5] >>> 16)) +
          ((G[4] << 16) | (G[4] >>> 16))) |
        0;
      X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
    }
    C.Rabbit = StreamCipher._createHelper(Rabbit);
  })();
  CryptoJS.mode.CTR = (function () {
    var CTR = CryptoJS.lib.BlockCipherMode.extend();
    var Encryptor = (CTR.Encryptor = CTR.extend({
      processBlock: function (words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;
        if (iv) {
          counter = this._counter = iv.slice(0);
          this._iv = undefined;
        }
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);
        counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      },
    }));
    CTR.Decryptor = Encryptor;
    return CTR;
  })();
  (function () {
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;
    var S = [];
    var C_ = [];
    var G = [];
    var RabbitLegacy = (C_algo.RabbitLegacy = StreamCipher.extend({
      _doReset: function () {
        var K = this._key.words;
        var iv = this.cfg.iv;
        var X = (this._X = [
          K[0],
          (K[3] << 16) | (K[2] >>> 16),
          K[1],
          (K[0] << 16) | (K[3] >>> 16),
          K[2],
          (K[1] << 16) | (K[0] >>> 16),
          K[3],
          (K[2] << 16) | (K[1] >>> 16),
        ]);
        var C = (this._C = [
          (K[2] << 16) | (K[2] >>> 16),
          (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
          (K[3] << 16) | (K[3] >>> 16),
          (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
          (K[0] << 16) | (K[0] >>> 16),
          (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
          (K[1] << 16) | (K[1] >>> 16),
          (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
        ]);
        this._b = 0;
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[(i + 4) & 7];
        }
        if (iv) {
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];
          var i0 =
            (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) |
            (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
          var i2 =
            (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) |
            (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
          var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
          var i3 = (i2 << 16) | (i0 & 0x0000ffff);
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },
      _doProcessBlock: function (M, offset) {
        var X = this._X;
        nextState.call(this);
        S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
        S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
        S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
        S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
        for (var i = 0; i < 4; i++) {
          S[i] =
            (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) |
            (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);
          M[offset + i] ^= S[i];
        }
      },
      blockSize: 128 / 32,
      ivSize: 64 / 32,
    }));
    function nextState() {
      var X = this._X;
      var C = this._C;
      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      }
      C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
      C[1] = (C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0)) | 0;
      C[2] = (C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0)) | 0;
      C[3] = (C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0)) | 0;
      C[4] = (C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0)) | 0;
      C[5] = (C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0)) | 0;
      C[6] = (C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0)) | 0;
      C[7] = (C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0)) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i];
        var ga = gx & 0xffff;
        var gb = gx >>> 16;
        var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
        var gl =
          (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);
        G[i] = gh ^ gl;
      }
      X[0] =
        (G[0] +
          ((G[7] << 16) | (G[7] >>> 16)) +
          ((G[6] << 16) | (G[6] >>> 16))) |
        0;
      X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
      X[2] =
        (G[2] +
          ((G[1] << 16) | (G[1] >>> 16)) +
          ((G[0] << 16) | (G[0] >>> 16))) |
        0;
      X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
      X[4] =
        (G[4] +
          ((G[3] << 16) | (G[3] >>> 16)) +
          ((G[2] << 16) | (G[2] >>> 16))) |
        0;
      X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
      X[6] =
        (G[6] +
          ((G[5] << 16) | (G[5] >>> 16)) +
          ((G[4] << 16) | (G[4] >>> 16))) |
        0;
      X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
    }
    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
  })();
  CryptoJS.pad.ZeroPadding = {
    pad: function (data, blockSize) {
      var blockSizeBytes = blockSize * 4;
      data.clamp();
      data.sigBytes +=
        blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
    },
    unpad: function (data) {
      var dataWords = data.words;
      var i = data.sigBytes - 1;
      while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
        i--;
      }
      data.sigBytes = i + 1;
    },
  };
  return CryptoJS;
});
function getEnStr(sKey, Str) {
  var neiKey = [
    0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x1a, 0x2a, 0x2b, 0x2c, 0x2d,
    0x2e, 0x2f, 0x3a, 0x3b, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x1a,
    0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x3a, 0x3b,
  ];
  var fkey = "";
  var lx = "";
  for (var i = 0; i < sKey.length; i++) {
    lx = String.fromCharCode(sKey[i].charCodeAt(0) ^ neiKey[i]);
    fkey += lx;
  }
  fkey = fkey.substr(0, fkey.length - 16);
  var hexKey = window.CryptoJS.enc.Utf8.parse(fkey);
  var enStr = window.CryptoJS.AES.encrypt(Str, hexKey, {
    mode: window.CryptoJS.mode.ECB,
    padding: window.CryptoJS.pad.Pkcs7,
  });
  return enStr.toString();
}
var zhuweikeyrandom = "";
var zhuweikey = "";
try {
  zhuweikeyrandom = new Date().getTime().toString();
  zhuweikey = zhuweikeyrandom.substring(zhuweikeyrandom.length - 8);
} catch (ex) {}
function zhuwei(message) {
  var key = "18412584";
  if (zhuweikey) {
    key = zhuweikey;
  }
  var ciphertext = des(key, message, 1, 0);
  var hex = new Hex2();
  var a = hex._string2Bin(ciphertext);
  var b64 = new Base6422();
  return b64.encode(a);
}
function zhuwei2(message) {
  if (!message) return message;
  var key = "18412584";
  if (zhuweikey) {
    key = zhuweikey;
  }
  var b64 = new Base6422();
  var str = des(key, b64.decode(message), 0, 0);
  return fix_des_result(str);
}
function hash(str) {
  return window.CryptoJS.MD5(str);
}
var JSEncryptExports = {};
(function (exports) {
  var dbits;
  var canary = 0xdeadbeefcafe;
  var j_lm = (canary & 0xffffff) == 0xefcafe;
  function BigInteger(a, b, c) {
    if (a != null)
      if ("number" == typeof a) this.fromNumber(a, b, c);
      else if (b == null && "string" != typeof a) this.fromString(a, 256);
      else this.fromString(a, b);
  }
  function nbi() {
    return new BigInteger(null);
  }
  function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
      var v = x * this[i++] + w[j] + c;
      c = Math.floor(v / 0x4000000);
      w[j++] = v & 0x3ffffff;
    }
    return c;
  }
  function am2(i, x, w, j, c, n) {
    var xl = x & 0x7fff,
      xh = x >> 15;
    while (--n >= 0) {
      var l = this[i] & 0x7fff;
      var h = this[i++] >> 15;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
      c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
      w[j++] = l & 0x3fffffff;
    }
    return c;
  }
  function am3(i, x, w, j, c, n) {
    var xl = x & 0x3fff,
      xh = x >> 14;
    while (--n >= 0) {
      var l = this[i] & 0x3fff;
      var h = this[i++] >> 14;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
      c = (l >> 28) + (m >> 14) + xh * h;
      w[j++] = l & 0xfffffff;
    }
    return c;
  }
  if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
    BigInteger.prototype.am = am2;
    dbits = 30;
  } else if (j_lm && navigator.appName != "Netscape") {
    BigInteger.prototype.am = am1;
    dbits = 26;
  } else {
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = (1 << dbits) - 1;
  BigInteger.prototype.DV = 1 << dbits;
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2, BI_FP);
  BigInteger.prototype.F1 = BI_FP - dbits;
  BigInteger.prototype.F2 = 2 * dbits - BI_FP;
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr, vv;
  rr = "0".charCodeAt(0);
  for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) {
    return BI_RM.charAt(n);
  }
  function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return c == null ? -1 : c;
  }
  function bnpCopyTo(r) {
    for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  function bnpFromInt(x) {
    this.t = 1;
    this.s = x < 0 ? -1 : 0;
    if (x > 0) this[0] = x;
    else if (x < -1) this[0] = x + this.DV;
    else this.t = 0;
  }
  function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r;
  }
  function bnpFromString(s, b) {
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 256) k = 8;
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 4) k = 2;
    else {
      this.fromRadix(s, b);
      return;
    }
    this.t = 0;
    this.s = 0;
    var i = s.length,
      mi = false,
      sh = 0;
    while (--i >= 0) {
      var x = k == 8 ? s[i] & 0xff : intAt(s, i);
      if (x < 0) {
        if (s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if (sh == 0) this[this.t++] = x;
      else if (sh + k > this.DB) {
        this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
        this[this.t++] = x >> (this.DB - sh);
      } else this[this.t - 1] |= x << sh;
      sh += k;
      if (sh >= this.DB) sh -= this.DB;
    }
    if (k == 8 && (s[0] & 0x80) != 0) {
      this.s = -1;
      if (sh > 0) this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
    }
    this.clamp();
    if (mi) BigInteger.ZERO.subTo(this, this);
  }
  function bnpClamp() {
    var c = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == c) --this.t;
  }
  function bnToString(b) {
    if (this.s < 0) return "-" + this.negate().toString(b);
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1 << k) - 1,
      d,
      m = false,
      r = "",
      i = this.t;
    var p = this.DB - ((i * this.DB) % k);
    if (i-- > 0) {
      if (p < this.DB && (d = this[i] >> p) > 0) {
        m = true;
        r = int2char(d);
      }
      while (i >= 0) {
        if (p < k) {
          d = (this[i] & ((1 << p) - 1)) << (k - p);
          d |= this[--i] >> (p += this.DB - k);
        } else {
          d = (this[i] >> (p -= k)) & km;
          if (p <= 0) {
            p += this.DB;
            --i;
          }
        }
        if (d > 0) m = true;
        if (m) r += int2char(d);
      }
    }
    return m ? r : "0";
  }
  function bnNegate() {
    var r = nbi();
    BigInteger.ZERO.subTo(this, r);
    return r;
  }
  function bnAbs() {
    return this.s < 0 ? this.negate() : this;
  }
  function bnCompareTo(a) {
    var r = this.s - a.s;
    if (r != 0) return r;
    var i = this.t;
    r = i - a.t;
    if (r != 0) return this.s < 0 ? -r : r;
    while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
    return 0;
  }
  function nbits(x) {
    var r = 1,
      t;
    if ((t = x >>> 16) != 0) {
      x = t;
      r += 16;
    }
    if ((t = x >> 8) != 0) {
      x = t;
      r += 8;
    }
    if ((t = x >> 4) != 0) {
      x = t;
      r += 4;
    }
    if ((t = x >> 2) != 0) {
      x = t;
      r += 2;
    }
    if ((t = x >> 1) != 0) {
      x = t;
      r += 1;
    }
    return r;
  }
  function bnBitLength() {
    if (this.t <= 0) return 0;
    return (
      this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM))
    );
  }
  function bnpDLShiftTo(n, r) {
    var i;
    for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
    for (i = n - 1; i >= 0; --i) r[i] = 0;
    r.t = this.t + n;
    r.s = this.s;
  }
  function bnpDRShiftTo(n, r) {
    for (var i = n; i < this.t; ++i) r[i - n] = this[i];
    r.t = Math.max(this.t - n, 0);
    r.s = this.s;
  }
  function bnpLShiftTo(n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB),
      c = (this.s << bs) & this.DM,
      i;
    for (i = this.t - 1; i >= 0; --i) {
      r[i + ds + 1] = (this[i] >> cbs) | c;
      c = (this[i] & bm) << bs;
    }
    for (i = ds - 1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp();
  }
  function bnpRShiftTo(n, r) {
    r.s = this.s;
    var ds = Math.floor(n / this.DB);
    if (ds >= this.t) {
      r.t = 0;
      return;
    }
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for (var i = ds + 1; i < this.t; ++i) {
      r[i - ds - 1] |= (this[i] & bm) << cbs;
      r[i - ds] = this[i] >> bs;
    }
    if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
    r.t = this.t - ds;
    r.clamp();
  }
  function bnpSubTo(a, r) {
    var i = 0,
      c = 0,
      m = Math.min(a.t, this.t);
    while (i < m) {
      c += this[i] - a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    if (a.t < this.t) {
      c -= a.s;
      while (i < this.t) {
        c += this[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }
      c += this.s;
    } else {
      c += this.s;
      while (i < a.t) {
        c -= a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = c < 0 ? -1 : 0;
    if (c < -1) r[i++] = this.DV + c;
    else if (c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  function bnpMultiplyTo(a, r) {
    var x = this.abs(),
      y = a.abs();
    var i = x.t;
    r.t = i + y.t;
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
    r.s = 0;
    r.clamp();
    if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
  }
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = (r.t = 2 * x.t);
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < x.t - 1; ++i) {
      var c = x.am(i, x[i], r, 2 * i, 0, 1);
      if (
        (r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >=
        x.DV
      ) {
        r[i + x.t] -= x.DV;
        r[i + x.t + 1] = 1;
      }
    }
    if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
    r.s = 0;
    r.clamp();
  }
  function bnpDivRemTo(m, q, r) {
    var pm = m.abs();
    if (pm.t <= 0) return;
    var pt = this.abs();
    if (pt.t < pm.t) {
      if (q != null) q.fromInt(0);
      if (r != null) this.copyTo(r);
      return;
    }
    if (r == null) r = nbi();
    var y = nbi(),
      ts = this.s,
      ms = m.s;
    var nsh = this.DB - nbits(pm[pm.t - 1]);
    if (nsh > 0) {
      pm.lShiftTo(nsh, y);
      pt.lShiftTo(nsh, r);
    } else {
      pm.copyTo(y);
      pt.copyTo(r);
    }
    var ys = y.t;
    var y0 = y[ys - 1];
    if (y0 == 0) return;
    var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
    var d1 = this.FV / yt,
      d2 = (1 << this.F1) / yt,
      e = 1 << this.F2;
    var i = r.t,
      j = i - ys,
      t = q == null ? nbi() : q;
    y.dlShiftTo(j, t);
    if (r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t, r);
    }
    BigInteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y);
    while (y.t < ys) y[y.t++] = 0;
    while (--j >= 0) {
      var qd =
        r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
      if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
        y.dlShiftTo(j, t);
        r.subTo(t, r);
        while (r[i] < --qd) r.subTo(t, r);
      }
    }
    if (q != null) {
      r.drShiftTo(ys, q);
      if (ts != ms) BigInteger.ZERO.subTo(q, q);
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0) r.rShiftTo(nsh, r);
    if (ts < 0) BigInteger.ZERO.subTo(r, r);
  }
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a, null, r);
    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
    return r;
  }
  function Classic(m) {
    this.m = m;
  }
  function cConvert(x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) {
    return x;
  }
  function cReduce(x) {
    x.divRemTo(this.m, null, x);
  }
  function cMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
  }
  function cSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
  }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  function bnpInvDigit() {
    if (this.t < 1) return 0;
    var x = this[0];
    if ((x & 1) == 0) return 0;
    var y = x & 3;
    y = (y * (2 - (x & 0xf) * y)) & 0xf;
    y = (y * (2 - (x & 0xff) * y)) & 0xff;
    y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff;
    y = (y * (2 - ((x * y) % this.DV))) % this.DV;
    return y > 0 ? this.DV - y : -y;
  }
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 0x7fff;
    this.mph = this.mp >> 15;
    this.um = (1 << (m.DB - 15)) - 1;
    this.mt2 = 2 * m.t;
  }
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
    return r;
  }
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  function montReduce(x) {
    while (x.t <= this.mt2) x[x.t++] = 0;
    for (var i = 0; i < this.m.t; ++i) {
      var j = x[i] & 0x7fff;
      var u0 =
        (j * this.mpl +
          (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) &
        x.DM;
      j = i + this.m.t;
      x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
      while (x[j] >= x.DV) {
        x[j] -= x.DV;
        x[++j]++;
      }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
  }
  function montSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
  }
  function montMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
  }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  function bnpIsEven() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
  }
  function bnpExp(e, z) {
    if (e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(),
      r2 = nbi(),
      g = z.convert(this),
      i = nbits(e) - 1;
    g.copyTo(r);
    while (--i >= 0) {
      z.sqrTo(r, r2);
      if ((e & (1 << i)) > 0) z.mulTo(r2, g, r);
      else {
        var t = r;
        r = r2;
        r2 = t;
      }
    }
    return z.revert(r);
  }
  function bnModPowInt(e, m) {
    var z;
    if (e < 256 || m.isEven()) z = new Classic(m);
    else z = new Montgomery(m);
    return this.exp(e, z);
  }
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  function bnClone() {
    var r = nbi();
    this.copyTo(r);
    return r;
  }
  function bnIntValue() {
    if (this.s < 0) {
      if (this.t == 1) return this[0] - this.DV;
      else if (this.t == 0) return -1;
    } else if (this.t == 1) return this[0];
    else if (this.t == 0) return 0;
    return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
  }
  function bnByteValue() {
    return this.t == 0 ? this.s : (this[0] << 24) >> 24;
  }
  function bnShortValue() {
    return this.t == 0 ? this.s : (this[0] << 16) >> 16;
  }
  function bnpChunkSize(r) {
    return Math.floor((Math.LN2 * this.DB) / Math.log(r));
  }
  function bnSigNum() {
    if (this.s < 0) return -1;
    else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  function bnpToRadix(b) {
    if (b == null) b = 10;
    if (this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b, cs);
    var d = nbv(a),
      y = nbi(),
      z = nbi(),
      r = "";
    this.divRemTo(d, y, z);
    while (y.signum() > 0) {
      r = (a + z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d, y, z);
    }
    return z.intValue().toString(b) + r;
  }
  function bnpFromRadix(s, b) {
    this.fromInt(0);
    if (b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b, cs),
      mi = false,
      j = 0,
      w = 0;
    for (var i = 0; i < s.length; ++i) {
      var x = intAt(s, i);
      if (x < 0) {
        if (s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b * w + x;
      if (++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w, 0);
        j = 0;
        w = 0;
      }
    }
    if (j > 0) {
      this.dMultiply(Math.pow(b, j));
      this.dAddOffset(w, 0);
    }
    if (mi) BigInteger.ZERO.subTo(this, this);
  }
  function bnpFromNumber(a, b, c) {
    if ("number" == typeof b) {
      if (a < 2) this.fromInt(1);
      else {
        this.fromNumber(a, c);
        if (!this.testBit(a - 1))
          this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
        if (this.isEven()) this.dAddOffset(1, 0);
        while (!this.isProbablePrime(b)) {
          this.dAddOffset(2, 0);
          if (this.bitLength() > a)
            this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
        }
      }
    } else {
      var x = new Array(),
        t = a & 7;
      x.length = (a >> 3) + 1;
      b.nextBytes(x);
      if (t > 0) x[0] &= (1 << t) - 1;
      else x[0] = 0;
      this.fromString(x, 256);
    }
  }
  function bnToByteArray() {
    var i = this.t,
      r = new Array();
    r[0] = this.s;
    var p = this.DB - ((i * this.DB) % 8),
      d,
      k = 0;
    if (i-- > 0) {
      if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
        r[k++] = d | (this.s << (this.DB - p));
      while (i >= 0) {
        if (p < 8) {
          d = (this[i] & ((1 << p) - 1)) << (8 - p);
          d |= this[--i] >> (p += this.DB - 8);
        } else {
          d = (this[i] >> (p -= 8)) & 0xff;
          if (p <= 0) {
            p += this.DB;
            --i;
          }
        }
        if ((d & 0x80) != 0) d |= -256;
        if (k == 0 && (this.s & 0x80) != (d & 0x80)) ++k;
        if (k > 0 || d != this.s) r[k++] = d;
      }
    }
    return r;
  }
  function bnEquals(a) {
    return this.compareTo(a) == 0;
  }
  function bnMin(a) {
    return this.compareTo(a) < 0 ? this : a;
  }
  function bnMax(a) {
    return this.compareTo(a) > 0 ? this : a;
  }
  function bnpBitwiseTo(a, op, r) {
    var i,
      f,
      m = Math.min(a.t, this.t);
    for (i = 0; i < m; ++i) r[i] = op(this[i], a[i]);
    if (a.t < this.t) {
      f = a.s & this.DM;
      for (i = m; i < this.t; ++i) r[i] = op(this[i], f);
      r.t = this.t;
    } else {
      f = this.s & this.DM;
      for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
      r.t = a.t;
    }
    r.s = op(this.s, a.s);
    r.clamp();
  }
  function op_and(x, y) {
    return x & y;
  }
  function bnAnd(a) {
    var r = nbi();
    this.bitwiseTo(a, op_and, r);
    return r;
  }
  function op_or(x, y) {
    return x | y;
  }
  function bnOr(a) {
    var r = nbi();
    this.bitwiseTo(a, op_or, r);
    return r;
  }
  function op_xor(x, y) {
    return x ^ y;
  }
  function bnXor(a) {
    var r = nbi();
    this.bitwiseTo(a, op_xor, r);
    return r;
  }
  function op_andnot(x, y) {
    return x & ~y;
  }
  function bnAndNot(a) {
    var r = nbi();
    this.bitwiseTo(a, op_andnot, r);
    return r;
  }
  function bnNot() {
    var r = nbi();
    for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
    r.t = this.t;
    r.s = ~this.s;
    return r;
  }
  function bnShiftLeft(n) {
    var r = nbi();
    if (n < 0) this.rShiftTo(-n, r);
    else this.lShiftTo(n, r);
    return r;
  }
  function bnShiftRight(n) {
    var r = nbi();
    if (n < 0) this.lShiftTo(-n, r);
    else this.rShiftTo(n, r);
    return r;
  }
  function lbit(x) {
    if (x == 0) return -1;
    var r = 0;
    if ((x & 0xffff) == 0) {
      x >>= 16;
      r += 16;
    }
    if ((x & 0xff) == 0) {
      x >>= 8;
      r += 8;
    }
    if ((x & 0xf) == 0) {
      x >>= 4;
      r += 4;
    }
    if ((x & 3) == 0) {
      x >>= 2;
      r += 2;
    }
    if ((x & 1) == 0) ++r;
    return r;
  }
  function bnGetLowestSetBit() {
    for (var i = 0; i < this.t; ++i)
      if (this[i] != 0) return i * this.DB + lbit(this[i]);
    if (this.s < 0) return this.t * this.DB;
    return -1;
  }
  function cbit(x) {
    var r = 0;
    while (x != 0) {
      x &= x - 1;
      ++r;
    }
    return r;
  }
  function bnBitCount() {
    var r = 0,
      x = this.s & this.DM;
    for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
    return r;
  }
  function bnTestBit(n) {
    var j = Math.floor(n / this.DB);
    if (j >= this.t) return this.s != 0;
    return (this[j] & (1 << n % this.DB)) != 0;
  }
  function bnpChangeBit(n, op) {
    var r = BigInteger.ONE.shiftLeft(n);
    this.bitwiseTo(r, op, r);
    return r;
  }
  function bnSetBit(n) {
    return this.changeBit(n, op_or);
  }
  function bnClearBit(n) {
    return this.changeBit(n, op_andnot);
  }
  function bnFlipBit(n) {
    return this.changeBit(n, op_xor);
  }
  function bnpAddTo(a, r) {
    var i = 0,
      c = 0,
      m = Math.min(a.t, this.t);
    while (i < m) {
      c += this[i] + a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    if (a.t < this.t) {
      c += a.s;
      while (i < this.t) {
        c += this[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }
      c += this.s;
    } else {
      c += this.s;
      while (i < a.t) {
        c += a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = c < 0 ? -1 : 0;
    if (c > 0) r[i++] = c;
    else if (c < -1) r[i++] = this.DV + c;
    r.t = i;
    r.clamp();
  }
  function bnAdd(a) {
    var r = nbi();
    this.addTo(a, r);
    return r;
  }
  function bnSubtract(a) {
    var r = nbi();
    this.subTo(a, r);
    return r;
  }
  function bnMultiply(a) {
    var r = nbi();
    this.multiplyTo(a, r);
    return r;
  }
  function bnSquare() {
    var r = nbi();
    this.squareTo(r);
    return r;
  }
  function bnDivide(a) {
    var r = nbi();
    this.divRemTo(a, r, null);
    return r;
  }
  function bnRemainder(a) {
    var r = nbi();
    this.divRemTo(a, null, r);
    return r;
  }
  function bnDivideAndRemainder(a) {
    var q = nbi(),
      r = nbi();
    this.divRemTo(a, q, r);
    return new Array(q, r);
  }
  function bnpDMultiply(n) {
    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
  }
  function bnpDAddOffset(n, w) {
    if (n == 0) return;
    while (this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while (this[w] >= this.DV) {
      this[w] -= this.DV;
      if (++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  function NullExp() {}
  function nNop(x) {
    return x;
  }
  function nMulTo(x, y, r) {
    x.multiplyTo(y, r);
  }
  function nSqrTo(x, r) {
    x.squareTo(r);
  }
  NullExp.prototype.convert = nNop;
  NullExp.prototype.revert = nNop;
  NullExp.prototype.mulTo = nMulTo;
  NullExp.prototype.sqrTo = nSqrTo;
  function bnPow(e) {
    return this.exp(e, new NullExp());
  }
  function bnpMultiplyLowerTo(a, n, r) {
    var i = Math.min(this.t + a.t, n);
    r.s = 0;
    r.t = i;
    while (i > 0) r[--i] = 0;
    var j;
    for (j = r.t - this.t; i < j; ++i)
      r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
    for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
    r.clamp();
  }
  function bnpMultiplyUpperTo(a, n, r) {
    --n;
    var i = (r.t = this.t + a.t - n);
    r.s = 0;
    while (--i >= 0) r[i] = 0;
    for (i = Math.max(n - this.t, 0); i < a.t; ++i)
      r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
    r.clamp();
    r.drShiftTo(1, r);
  }
  function Barrett(m) {
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
    this.m = m;
  }
  function barrettConvert(x) {
    if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
    else if (x.compareTo(this.m) < 0) return x;
    else {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }
  }
  function barrettRevert(x) {
    return x;
  }
  function barrettReduce(x) {
    x.drShiftTo(this.m.t - 1, this.r2);
    if (x.t > this.m.t + 1) {
      x.t = this.m.t + 1;
      x.clamp();
    }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
    x.subTo(this.r2, x);
    while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
  }
  function barrettSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
  }
  function barrettMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
  }
  Barrett.prototype.convert = barrettConvert;
  Barrett.prototype.revert = barrettRevert;
  Barrett.prototype.reduce = barrettReduce;
  Barrett.prototype.mulTo = barrettMulTo;
  Barrett.prototype.sqrTo = barrettSqrTo;
  function bnModPow(e, m) {
    var i = e.bitLength(),
      k,
      r = nbv(1),
      z;
    if (i <= 0) return r;
    else if (i < 18) k = 1;
    else if (i < 48) k = 3;
    else if (i < 144) k = 4;
    else if (i < 768) k = 5;
    else k = 6;
    if (i < 8) z = new Classic(m);
    else if (m.isEven()) z = new Barrett(m);
    else z = new Montgomery(m);
    var g = new Array(),
      n = 3,
      k1 = k - 1,
      km = (1 << k) - 1;
    g[1] = z.convert(this);
    if (k > 1) {
      var g2 = nbi();
      z.sqrTo(g[1], g2);
      while (n <= km) {
        g[n] = nbi();
        z.mulTo(g2, g[n - 2], g[n]);
        n += 2;
      }
    }
    var j = e.t - 1,
      w,
      is1 = true,
      r2 = nbi(),
      t;
    i = nbits(e[j]) - 1;
    while (j >= 0) {
      if (i >= k1) w = (e[j] >> (i - k1)) & km;
      else {
        w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
        if (j > 0) w |= e[j - 1] >> (this.DB + i - k1);
      }
      n = k;
      while ((w & 1) == 0) {
        w >>= 1;
        --n;
      }
      if ((i -= n) < 0) {
        i += this.DB;
        --j;
      }
      if (is1) {
        g[w].copyTo(r);
        is1 = false;
      } else {
        while (n > 1) {
          z.sqrTo(r, r2);
          z.sqrTo(r2, r);
          n -= 2;
        }
        if (n > 0) z.sqrTo(r, r2);
        else {
          t = r;
          r = r2;
          r2 = t;
        }
        z.mulTo(r2, g[w], r);
      }
      while (j >= 0 && (e[j] & (1 << i)) == 0) {
        z.sqrTo(r, r2);
        t = r;
        r = r2;
        r2 = t;
        if (--i < 0) {
          i = this.DB - 1;
          --j;
        }
      }
    }
    return z.revert(r);
  }
  function bnGCD(a) {
    var x = this.s < 0 ? this.negate() : this.clone();
    var y = a.s < 0 ? a.negate() : a.clone();
    if (x.compareTo(y) < 0) {
      var t = x;
      x = y;
      y = t;
    }
    var i = x.getLowestSetBit(),
      g = y.getLowestSetBit();
    if (g < 0) return x;
    if (i < g) g = i;
    if (g > 0) {
      x.rShiftTo(g, x);
      y.rShiftTo(g, y);
    }
    while (x.signum() > 0) {
      if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
      if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
      if (x.compareTo(y) >= 0) {
        x.subTo(y, x);
        x.rShiftTo(1, x);
      } else {
        y.subTo(x, y);
        y.rShiftTo(1, y);
      }
    }
    if (g > 0) y.lShiftTo(g, y);
    return y;
  }
  function bnpModInt(n) {
    if (n <= 0) return 0;
    var d = this.DV % n,
      r = this.s < 0 ? n - 1 : 0;
    if (this.t > 0)
      if (d == 0) r = this[0] % n;
      else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
    return r;
  }
  function bnModInverse(m) {
    var ac = m.isEven();
    if ((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
    var u = m.clone(),
      v = this.clone();
    var a = nbv(1),
      b = nbv(0),
      c = nbv(0),
      d = nbv(1);
    while (u.signum() != 0) {
      while (u.isEven()) {
        u.rShiftTo(1, u);
        if (ac) {
          if (!a.isEven() || !b.isEven()) {
            a.addTo(this, a);
            b.subTo(m, b);
          }
          a.rShiftTo(1, a);
        } else if (!b.isEven()) b.subTo(m, b);
        b.rShiftTo(1, b);
      }
      while (v.isEven()) {
        v.rShiftTo(1, v);
        if (ac) {
          if (!c.isEven() || !d.isEven()) {
            c.addTo(this, c);
            d.subTo(m, d);
          }
          c.rShiftTo(1, c);
        } else if (!d.isEven()) d.subTo(m, d);
        d.rShiftTo(1, d);
      }
      if (u.compareTo(v) >= 0) {
        u.subTo(v, u);
        if (ac) a.subTo(c, a);
        b.subTo(d, b);
      } else {
        v.subTo(u, v);
        if (ac) c.subTo(a, c);
        d.subTo(b, d);
      }
    }
    if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
    if (d.compareTo(m) >= 0) return d.subtract(m);
    if (d.signum() < 0) d.addTo(m, d);
    else return d;
    if (d.signum() < 0) return d.add(m);
    else return d;
  }
  var lowprimes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
    613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
    709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
    821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
    919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
  ];
  var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
  function bnIsProbablePrime(t) {
    var i,
      x = this.abs();
    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
      for (i = 0; i < lowprimes.length; ++i)
        if (x[0] == lowprimes[i]) return true;
      return false;
    }
    if (x.isEven()) return false;
    i = 1;
    while (i < lowprimes.length) {
      var m = lowprimes[i],
        j = i + 1;
      while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
      m = x.modInt(m);
      while (i < j) if (m % lowprimes[i++] == 0) return false;
    }
    return x.millerRabin(t);
  }
  function bnpMillerRabin(t) {
    var n1 = this.subtract(BigInteger.ONE);
    var k = n1.getLowestSetBit();
    if (k <= 0) return false;
    var r = n1.shiftRight(k);
    t = (t + 1) >> 1;
    if (t > lowprimes.length) t = lowprimes.length;
    var a = nbi();
    for (var i = 0; i < t; ++i) {
      a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
      var y = a.modPow(r, this);
      if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
        var j = 1;
        while (j++ < k && y.compareTo(n1) != 0) {
          y = y.modPowInt(2, this);
          if (y.compareTo(BigInteger.ONE) == 0) return false;
        }
        if (y.compareTo(n1) != 0) return false;
      }
    }
    return true;
  }
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.fromNumber = bnpFromNumber;
  BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
  BigInteger.prototype.changeBit = bnpChangeBit;
  BigInteger.prototype.addTo = bnpAddTo;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
  BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
  BigInteger.prototype.modInt = bnpModInt;
  BigInteger.prototype.millerRabin = bnpMillerRabin;
  BigInteger.prototype.clone = bnClone;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.byteValue = bnByteValue;
  BigInteger.prototype.shortValue = bnShortValue;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.toByteArray = bnToByteArray;
  BigInteger.prototype.equals = bnEquals;
  BigInteger.prototype.min = bnMin;
  BigInteger.prototype.max = bnMax;
  BigInteger.prototype.and = bnAnd;
  BigInteger.prototype.or = bnOr;
  BigInteger.prototype.xor = bnXor;
  BigInteger.prototype.andNot = bnAndNot;
  BigInteger.prototype.not = bnNot;
  BigInteger.prototype.shiftLeft = bnShiftLeft;
  BigInteger.prototype.shiftRight = bnShiftRight;
  BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
  BigInteger.prototype.bitCount = bnBitCount;
  BigInteger.prototype.testBit = bnTestBit;
  BigInteger.prototype.setBit = bnSetBit;
  BigInteger.prototype.clearBit = bnClearBit;
  BigInteger.prototype.flipBit = bnFlipBit;
  BigInteger.prototype.add = bnAdd;
  BigInteger.prototype.subtract = bnSubtract;
  BigInteger.prototype.multiply = bnMultiply;
  BigInteger.prototype.divide = bnDivide;
  BigInteger.prototype.remainder = bnRemainder;
  BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
  BigInteger.prototype.modPow = bnModPow;
  BigInteger.prototype.modInverse = bnModInverse;
  BigInteger.prototype.pow = bnPow;
  BigInteger.prototype.gcd = bnGCD;
  BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
  BigInteger.prototype.square = bnSquare;
  function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = new Array();
  }
  function ARC4init(key) {
    var i, j, t;
    for (i = 0; i < 256; ++i) this.S[i] = i;
    j = 0;
    for (i = 0; i < 256; ++i) {
      j = (j + this.S[i] + key[i % key.length]) & 255;
      t = this.S[i];
      this.S[i] = this.S[j];
      this.S[j] = t;
    }
    this.i = 0;
    this.j = 0;
  }
  function ARC4next() {
    var t;
    this.i = (this.i + 1) & 255;
    this.j = (this.j + this.S[this.i]) & 255;
    t = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = t;
    return this.S[(t + this.S[this.i]) & 255];
  }
  Arcfour.prototype.init = ARC4init;
  Arcfour.prototype.next = ARC4next;
  function prng_newstate() {
    return new Arcfour();
  }
  var rng_psize = 256;
  var rng_state;
  var rng_pool;
  var rng_pptr;
  if (rng_pool == null) {
    rng_pool = new Array();
    rng_pptr = 0;
    var t;
    if (window.crypto && window.crypto.getRandomValues) {
      var z = new Uint32Array(256);
      window.crypto.getRandomValues(z);
      for (t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = z[t] & 255;
    }
    var onMouseMoveListener = function (ev) {
      this.count = this.count || 0;
      if (this.count >= 256 || rng_pptr >= rng_psize) {
        if (window.removeEventListener)
          window.removeEventListener("mousemove", onMouseMoveListener);
        else if (window.detachEvent)
          window.detachEvent("onmousemove", onMouseMoveListener);
        return;
      }
      this.count += 1;
      var mouseCoordinates = ev.x + ev.y;
      rng_pool[rng_pptr++] = mouseCoordinates & 255;
    };
    if (window.addEventListener)
      window.addEventListener("mousemove", onMouseMoveListener);
    else if (window.attachEvent)
      window.attachEvent("onmousemove", onMouseMoveListener);
  }
  function rng_get_byte() {
    if (rng_state == null) {
      rng_state = prng_newstate();
      while (rng_pptr < rng_psize) {
        var random = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = random & 255;
      }
      rng_state.init(rng_pool);
      for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
        rng_pool[rng_pptr] = 0;
      rng_pptr = 0;
    }
    return rng_state.next();
  }
  function rng_get_bytes(ba) {
    var i;
    for (i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
  }
  function SecureRandom() {}
  SecureRandom.prototype.nextBytes = rng_get_bytes;
  function parseBigInt(str, r) {
    return new BigInteger(str, r);
  }
  function linebrk(s, n) {
    var ret = "";
    var i = 0;
    while (i + n < s.length) {
      ret += s.substring(i, i + n) + "\n";
      i += n;
    }
    return ret + s.substring(i, s.length);
  }
  function byte2Hex(b) {
    if (b < 0x10) return "0" + b.toString(16);
    else return b.toString(16);
  }
  function pkcs1pad2(s, n) {
    if (n < s.length + 11) {
      console.error("Message too long for RSA");
      return null;
    }
    var ba = new Array();
    var i = s.length - 1;
    while (i >= 0 && n > 0) {
      var c = s.charCodeAt(i--);
      if (c < 128) {
        ba[--n] = c;
      } else if (c > 127 && c < 2048) {
        ba[--n] = (c & 63) | 128;
        ba[--n] = (c >> 6) | 192;
      } else {
        ba[--n] = (c & 63) | 128;
        ba[--n] = ((c >> 6) & 63) | 128;
        ba[--n] = (c >> 12) | 224;
      }
    }
    ba[--n] = 0;
    var rng = new SecureRandom();
    var x = new Array();
    while (n > 2) {
      x[0] = 0;
      while (x[0] == 0) rng.nextBytes(x);
      ba[--n] = x[0];
    }
    ba[--n] = 2;
    ba[--n] = 0;
    return new BigInteger(ba);
  }
  function RSAKey() {
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null;
  }
  function RSASetPublic(N, E) {
    if (N != null && E != null && N.length > 0 && E.length > 0) {
      this.n = parseBigInt(N, 16);
      this.e = parseInt(E, 16);
    } else console.error("Invalid RSA public key");
  }
  function RSADoPublic(x) {
    return x.modPowInt(this.e, this.n);
  }
  function RSAEncrypt(text) {
    var m = pkcs1pad2(text, (this.n.bitLength() + 7) >> 3);
    if (m == null) return null;
    var c = this.doPublic(m);
    if (c == null) return null;
    var h = c.toString(16);
    if ((h.length & 1) == 0) h = h;
    else h = "0" + h;
    return h;
  }
  RSAKey.prototype.doPublic = RSADoPublic;
  RSAKey.prototype.setPublic = RSASetPublic;
  RSAKey.prototype.encrypt = RSAEncrypt;
  function pkcs1unpad2(d, n) {
    var b = d.toByteArray();
    var i = 0;
    while (i < b.length && b[i] == 0) ++i;
    if (b.length - i != n - 1 || b[i] != 2) return null;
    ++i;
    while (b[i] != 0) if (++i >= b.length) return null;
    var ret = "";
    while (++i < b.length) {
      var c = b[i] & 255;
      if (c < 128) {
        ret += String.fromCharCode(c);
      } else if (c > 191 && c < 224) {
        ret += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63));
        ++i;
      } else {
        ret += String.fromCharCode(
          ((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63)
        );
        i += 2;
      }
    }
    return ret;
  }
  function RSASetPrivate(N, E, D) {
    if (N != null && E != null && N.length > 0 && E.length > 0) {
      this.n = parseBigInt(N, 16);
      this.e = parseInt(E, 16);
      this.d = parseBigInt(D, 16);
    } else console.error("Invalid RSA private key");
  }
  function RSASetPrivateEx(N, E, D, P, Q, DP, DQ, C) {
    if (N != null && E != null && N.length > 0 && E.length > 0) {
      this.n = parseBigInt(N, 16);
      this.e = parseInt(E, 16);
      this.d = parseBigInt(D, 16);
      this.p = parseBigInt(P, 16);
      this.q = parseBigInt(Q, 16);
      this.dmp1 = parseBigInt(DP, 16);
      this.dmq1 = parseBigInt(DQ, 16);
      this.coeff = parseBigInt(C, 16);
    } else console.error("Invalid RSA private key");
  }
  function RSAGenerate(B, E) {
    var rng = new SecureRandom();
    var qs = B >> 1;
    this.e = parseInt(E, 16);
    var ee = new BigInteger(E, 16);
    for (;;) {
      for (;;) {
        this.p = new BigInteger(B - qs, 1, rng);
        if (
          this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) ==
            0 &&
          this.p.isProbablePrime(10)
        )
          break;
      }
      for (;;) {
        this.q = new BigInteger(qs, 1, rng);
        if (
          this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) ==
            0 &&
          this.q.isProbablePrime(10)
        )
          break;
      }
      if (this.p.compareTo(this.q) <= 0) {
        var t = this.p;
        this.p = this.q;
        this.q = t;
      }
      var p1 = this.p.subtract(BigInteger.ONE);
      var q1 = this.q.subtract(BigInteger.ONE);
      var phi = p1.multiply(q1);
      if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
        this.n = this.p.multiply(this.q);
        this.d = ee.modInverse(phi);
        this.dmp1 = this.d.mod(p1);
        this.dmq1 = this.d.mod(q1);
        this.coeff = this.q.modInverse(this.p);
        break;
      }
    }
  }
  function RSADoPrivate(x) {
    if (this.p == null || this.q == null) return x.modPow(this.d, this.n);
    var xp = x.mod(this.p).modPow(this.dmp1, this.p);
    var xq = x.mod(this.q).modPow(this.dmq1, this.q);
    while (xp.compareTo(xq) < 0) xp = xp.add(this.p);
    return xp
      .subtract(xq)
      .multiply(this.coeff)
      .mod(this.p)
      .multiply(this.q)
      .add(xq);
  }
  function RSADecrypt(ctext) {
    var c = parseBigInt(ctext, 16);
    var m = this.doPrivate(c);
    if (m == null) return null;
    return pkcs1unpad2(m, (this.n.bitLength() + 7) >> 3);
  }
  RSAKey.prototype.doPrivate = RSADoPrivate;
  RSAKey.prototype.setPrivate = RSASetPrivate;
  RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
  RSAKey.prototype.generate = RSAGenerate;
  RSAKey.prototype.decrypt = RSADecrypt;
  (function () {
    var RSAGenerateAsync = function (B, E, callback) {
      var rng = new SecureRandom();
      var qs = B >> 1;
      this.e = parseInt(E, 16);
      var ee = new BigInteger(E, 16);
      var rsa = this;
      var loop1 = function () {
        var loop4 = function () {
          if (rsa.p.compareTo(rsa.q) <= 0) {
            var t = rsa.p;
            rsa.p = rsa.q;
            rsa.q = t;
          }
          var p1 = rsa.p.subtract(BigInteger.ONE);
          var q1 = rsa.q.subtract(BigInteger.ONE);
          var phi = p1.multiply(q1);
          if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
            rsa.n = rsa.p.multiply(rsa.q);
            rsa.d = ee.modInverse(phi);
            rsa.dmp1 = rsa.d.mod(p1);
            rsa.dmq1 = rsa.d.mod(q1);
            rsa.coeff = rsa.q.modInverse(rsa.p);
            setTimeout(function () {
              callback();
            }, 0);
          } else {
            setTimeout(loop1, 0);
          }
        };
        var loop3 = function () {
          rsa.q = nbi();
          rsa.q.fromNumberAsync(qs, 1, rng, function () {
            rsa.q.subtract(BigInteger.ONE).gcda(ee, function (r) {
              if (
                r.compareTo(BigInteger.ONE) == 0 &&
                rsa.q.isProbablePrime(10)
              ) {
                setTimeout(loop4, 0);
              } else {
                setTimeout(loop3, 0);
              }
            });
          });
        };
        var loop2 = function () {
          rsa.p = nbi();
          rsa.p.fromNumberAsync(B - qs, 1, rng, function () {
            rsa.p.subtract(BigInteger.ONE).gcda(ee, function (r) {
              if (
                r.compareTo(BigInteger.ONE) == 0 &&
                rsa.p.isProbablePrime(10)
              ) {
                setTimeout(loop3, 0);
              } else {
                setTimeout(loop2, 0);
              }
            });
          });
        };
        setTimeout(loop2, 0);
      };
      setTimeout(loop1, 0);
    };
    RSAKey.prototype.generateAsync = RSAGenerateAsync;
    var bnGCDAsync = function (a, callback) {
      var x = this.s < 0 ? this.negate() : this.clone();
      var y = a.s < 0 ? a.negate() : a.clone();
      if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t;
      }
      var i = x.getLowestSetBit(),
        g = y.getLowestSetBit();
      if (g < 0) {
        callback(x);
        return;
      }
      if (i < g) g = i;
      if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y);
      }
      var gcda1 = function () {
        if ((i = x.getLowestSetBit()) > 0) {
          x.rShiftTo(i, x);
        }
        if ((i = y.getLowestSetBit()) > 0) {
          y.rShiftTo(i, y);
        }
        if (x.compareTo(y) >= 0) {
          x.subTo(y, x);
          x.rShiftTo(1, x);
        } else {
          y.subTo(x, y);
          y.rShiftTo(1, y);
        }
        if (!(x.signum() > 0)) {
          if (g > 0) y.lShiftTo(g, y);
          setTimeout(function () {
            callback(y);
          }, 0);
        } else {
          setTimeout(gcda1, 0);
        }
      };
      setTimeout(gcda1, 10);
    };
    BigInteger.prototype.gcda = bnGCDAsync;
    var bnpFromNumberAsync = function (a, b, c, callback) {
      if ("number" == typeof b) {
        if (a < 2) {
          this.fromInt(1);
        } else {
          this.fromNumber(a, c);
          if (!this.testBit(a - 1)) {
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
          }
          if (this.isEven()) {
            this.dAddOffset(1, 0);
          }
          var bnp = this;
          var bnpfn1 = function () {
            bnp.dAddOffset(2, 0);
            if (bnp.bitLength() > a)
              bnp.subTo(BigInteger.ONE.shiftLeft(a - 1), bnp);
            if (bnp.isProbablePrime(b)) {
              setTimeout(function () {
                callback();
              }, 0);
            } else {
              setTimeout(bnpfn1, 0);
            }
          };
          setTimeout(bnpfn1, 0);
        }
      } else {
        var x = new Array(),
          t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);
        if (t > 0) x[0] &= (1 << t) - 1;
        else x[0] = 0;
        this.fromString(x, 256);
      }
    };
    BigInteger.prototype.fromNumberAsync = bnpFromNumberAsync;
  })();
  var b64map =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var b64pad = "=";
  function hex2b64(h) {
    var i;
    var c;
    var ret = "";
    for (i = 0; i + 3 <= h.length; i += 3) {
      c = parseInt(h.substring(i, i + 3), 16);
      ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }
    if (i + 1 == h.length) {
      c = parseInt(h.substring(i, i + 1), 16);
      ret += b64map.charAt(c << 2);
    } else if (i + 2 == h.length) {
      c = parseInt(h.substring(i, i + 2), 16);
      ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }
    while ((ret.length & 3) > 0) ret += b64pad;
    return ret;
  }
  function b64tohex(s) {
    var ret = "";
    var i;
    var k = 0;
    var slop;
    for (i = 0; i < s.length; ++i) {
      if (s.charAt(i) == b64pad) break;
      v = b64map.indexOf(s.charAt(i));
      if (v < 0) continue;
      if (k == 0) {
        ret += int2char(v >> 2);
        slop = v & 3;
        k = 1;
      } else if (k == 1) {
        ret += int2char((slop << 2) | (v >> 4));
        slop = v & 0xf;
        k = 2;
      } else if (k == 2) {
        ret += int2char(slop);
        ret += int2char(v >> 2);
        slop = v & 3;
        k = 3;
      } else {
        ret += int2char((slop << 2) | (v >> 4));
        ret += int2char(v & 0xf);
        k = 0;
      }
    }
    if (k == 1) ret += int2char(slop << 2);
    return ret;
  }
  function b64toBA(s) {
    var h = b64tohex(s);
    var i;
    var a = new Array();
    for (i = 0; 2 * i < h.length; ++i) {
      a[i] = parseInt(h.substring(2 * i, 2 * i + 2), 16);
    }
    return a;
  }
  var JSX = JSX || {};
  JSX.env = JSX.env || {};
  var L = JSX,
    OP = Object.prototype,
    FUNCTION_TOSTRING = "[object Function]",
    ADD = ["toString", "valueOf"];
  JSX.env.parseUA = function (agent) {
    var numberify = function (s) {
        var c = 0;
        return parseFloat(
          s.replace(/\./g, function () {
            return c++ == 1 ? "" : ".";
          })
        );
      },
      nav = navigator,
      o = {
        ie: 0,
        opera: 0,
        gecko: 0,
        webkit: 0,
        chrome: 0,
        mobile: null,
        air: 0,
        ipad: 0,
        iphone: 0,
        ipod: 0,
        ios: null,
        android: 0,
        webos: 0,
        caja: nav && nav.cajaVersion,
        secure: false,
        os: null,
      },
      ua = agent || (navigator && navigator.userAgent),
      loc = window && window.location,
      href = loc && loc.href,
      m;
    o.secure = href && href.toLowerCase().indexOf("https") === 0;
    if (ua) {
      if (/windows|win32/i.test(ua)) {
        o.os = "windows";
      } else if (/macintosh/i.test(ua)) {
        o.os = "macintosh";
      } else if (/rhino/i.test(ua)) {
        o.os = "rhino";
      }
      if (/KHTML/.test(ua)) {
        o.webkit = 1;
      }
      m = ua.match(/AppleWebKit\/([^\s]*)/);
      if (m && m[1]) {
        o.webkit = numberify(m[1]);
        if (/ Mobile\//.test(ua)) {
          o.mobile = "Apple";
          m = ua.match(/OS ([^\s]*)/);
          if (m && m[1]) {
            m = numberify(m[1].replace("_", "."));
          }
          o.ios = m;
          o.ipad = o.ipod = o.iphone = 0;
          m = ua.match(/iPad|iPod|iPhone/);
          if (m && m[0]) {
            o[m[0].toLowerCase()] = o.ios;
          }
        } else {
          m = ua.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);
          if (m) {
            o.mobile = m[0];
          }
          if (/webOS/.test(ua)) {
            o.mobile = "WebOS";
            m = ua.match(/webOS\/([^\s]*);/);
            if (m && m[1]) {
              o.webos = numberify(m[1]);
            }
          }
          if (/ Android/.test(ua)) {
            o.mobile = "Android";
            m = ua.match(/Android ([^\s]*);/);
            if (m && m[1]) {
              o.android = numberify(m[1]);
            }
          }
        }
        m = ua.match(/Chrome\/([^\s]*)/);
        if (m && m[1]) {
          o.chrome = numberify(m[1]);
        } else {
          m = ua.match(/AdobeAIR\/([^\s]*)/);
          if (m) {
            o.air = m[0];
          }
        }
      }
      if (!o.webkit) {
        m = ua.match(/Opera[\s\/]([^\s]*)/);
        if (m && m[1]) {
          o.opera = numberify(m[1]);
          m = ua.match(/Version\/([^\s]*)/);
          if (m && m[1]) {
            o.opera = numberify(m[1]);
          }
          m = ua.match(/Opera Mini[^;]*/);
          if (m) {
            o.mobile = m[0];
          }
        } else {
          m = ua.match(/MSIE\s([^;]*)/);
          if (m && m[1]) {
            o.ie = numberify(m[1]);
          } else {
            m = ua.match(/Gecko\/([^\s]*)/);
            if (m) {
              o.gecko = 1;
              m = ua.match(/rv:([^\s\)]*)/);
              if (m && m[1]) {
                o.gecko = numberify(m[1]);
              }
            }
          }
        }
      }
    }
    return o;
  };
  JSX.env.ua = JSX.env.parseUA();
  JSX.isFunction = function (o) {
    return (
      typeof o === "function" || OP.toString.apply(o) === FUNCTION_TOSTRING
    );
  };
  JSX._IEEnumFix = JSX.env.ua.ie
    ? function (r, s) {
        var i, fname, f;
        for (i = 0; i < ADD.length; i = i + 1) {
          fname = ADD[i];
          f = s[fname];
          if (L.isFunction(f) && f != OP[fname]) {
            r[fname] = f;
          }
        }
      }
    : function () {};
  JSX.extend = function (subc, superc, overrides) {
    if (!superc || !subc) {
      throw new Error(
        "extend failed, please check that all dependencies are included."
      );
    }
    var F = function () {},
      i;
    F.prototype = superc.prototype;
    subc.prototype = new F();
    subc.prototype.constructor = subc;
    subc.superclass = superc.prototype;
    if (superc.prototype.constructor == OP.constructor) {
      superc.prototype.constructor = superc;
    }
    if (overrides) {
      for (i in overrides) {
        if (L.hasOwnProperty(overrides, i)) {
          subc.prototype[i] = overrides[i];
        }
      }
      L._IEEnumFix(subc.prototype, overrides);
    }
  };
  if (typeof KJUR == "undefined" || !KJUR) KJUR = {};
  if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) KJUR.asn1 = {};
  KJUR.asn1.ASN1Util = new (function () {
    this.integerToByteHex = function (i) {
      var h = i.toString(16);
      if (h.length % 2 == 1) h = "0" + h;
      return h;
    };
    this.bigIntToMinTwosComplementsHex = function (bigIntegerValue) {
      var h = bigIntegerValue.toString(16);
      if (h.substr(0, 1) != "-") {
        if (h.length % 2 == 1) {
          h = "0" + h;
        } else {
          if (!h.match(/^[0-7]/)) {
            h = "00" + h;
          }
        }
      } else {
        var hPos = h.substr(1);
        var xorLen = hPos.length;
        if (xorLen % 2 == 1) {
          xorLen += 1;
        } else {
          if (!h.match(/^[0-7]/)) {
            xorLen += 2;
          }
        }
        var hMask = "";
        for (var i = 0; i < xorLen; i++) {
          hMask += "f";
        }
        var biMask = new BigInteger(hMask, 16);
        var biNeg = biMask.xor(bigIntegerValue).add(BigInteger.ONE);
        h = biNeg.toString(16).replace(/^-/, "");
      }
      return h;
    };
    this.getPEMStringFromHex = function (dataHex, pemHeader) {
      var dataWA = CryptoJS.enc.Hex.parse(dataHex);
      var dataB64 = CryptoJS.enc.Base64.stringify(dataWA);
      var pemBody = dataB64.replace(/(.{64})/g, "$1\r\n");
      pemBody = pemBody.replace(/\r\n$/, "");
      return (
        "-----BEGIN " +
        pemHeader +
        "-----\r\n" +
        pemBody +
        "\r\n-----END " +
        pemHeader +
        "-----\r\n"
      );
    };
  })();
  KJUR.asn1.ASN1Object = function () {
    var isModified = true;
    var hTLV = null;
    var hT = "00";
    var hL = "00";
    var hV = "";
    this.getLengthHexFromValue = function () {
      if (typeof this.hV == "undefined" || this.hV == null) {
        throw "this.hV is null or undefined.";
      }
      if (this.hV.length % 2 == 1) {
        throw "value hex must be even length: n=" + hV.length + ",v=" + this.hV;
      }
      var n = this.hV.length / 2;
      var hN = n.toString(16);
      if (hN.length % 2 == 1) {
        hN = "0" + hN;
      }
      if (n < 128) {
        return hN;
      } else {
        var hNlen = hN.length / 2;
        if (hNlen > 15) {
          throw (
            "ASN.1 length too long to represent by 8x: n = " + n.toString(16)
          );
        }
        var head = 128 + hNlen;
        return head.toString(16) + hN;
      }
    };
    this.getEncodedHex = function () {
      if (this.hTLV == null || this.isModified) {
        this.hV = this.getFreshValueHex();
        this.hL = this.getLengthHexFromValue();
        this.hTLV = this.hT + this.hL + this.hV;
        this.isModified = false;
      }
      return this.hTLV;
    };
    this.getValueHex = function () {
      this.getEncodedHex();
      return this.hV;
    };
    this.getFreshValueHex = function () {
      return "";
    };
  };
  KJUR.asn1.DERAbstractString = function (params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    var s = null;
    var hV = null;
    this.getString = function () {
      return this.s;
    };
    this.setString = function (newS) {
      this.hTLV = null;
      this.isModified = true;
      this.s = newS;
      this.hV = stohex(this.s);
    };
    this.setStringHex = function (newHexString) {
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = newHexString;
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
    if (typeof params != "undefined") {
      if (typeof params["str"] != "undefined") {
        this.setString(params["str"]);
      } else if (typeof params["hex"] != "undefined") {
        this.setStringHex(params["hex"]);
      }
    }
  };
  JSX.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
  KJUR.asn1.DERAbstractTime = function (params) {
    KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
    var s = null;
    var date = null;
    this.localDateToUTC = function (d) {
      utc = d.getTime() + d.getTimezoneOffset() * 60000;
      var utcDate = new Date(utc);
      return utcDate;
    };
    this.formatDate = function (dateObject, type) {
      var pad = this.zeroPadding;
      var d = this.localDateToUTC(dateObject);
      var year = String(d.getFullYear());
      if (type == "utc") year = year.substr(2, 2);
      var month = pad(String(d.getMonth() + 1), 2);
      var day = pad(String(d.getDate()), 2);
      var hour = pad(String(d.getHours()), 2);
      var min = pad(String(d.getMinutes()), 2);
      var sec = pad(String(d.getSeconds()), 2);
      return year + month + day + hour + min + sec + "Z";
    };
    this.zeroPadding = function (s, len) {
      if (s.length >= len) return s;
      return new Array(len - s.length + 1).join("0") + s;
    };
    this.getString = function () {
      return this.s;
    };
    this.setString = function (newS) {
      this.hTLV = null;
      this.isModified = true;
      this.s = newS;
      this.hV = stohex(this.s);
    };
    this.setByDateValue = function (year, month, day, hour, min, sec) {
      var dateObject = new Date(
        Date.UTC(year, month - 1, day, hour, min, sec, 0)
      );
      this.setByDate(dateObject);
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
  };
  JSX.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
  KJUR.asn1.DERAbstractStructured = function (params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    var asn1Array = null;
    this.setByASN1ObjectArray = function (asn1ObjectArray) {
      this.hTLV = null;
      this.isModified = true;
      this.asn1Array = asn1ObjectArray;
    };
    this.appendASN1Object = function (asn1Object) {
      this.hTLV = null;
      this.isModified = true;
      this.asn1Array.push(asn1Object);
    };
    this.asn1Array = new Array();
    if (typeof params != "undefined") {
      if (typeof params["array"] != "undefined") {
        this.asn1Array = params["array"];
      }
    }
  };
  JSX.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);
  KJUR.asn1.DERBoolean = function () {
    KJUR.asn1.DERBoolean.superclass.constructor.call(this);
    this.hT = "01";
    this.hTLV = "0101ff";
  };
  JSX.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);
  KJUR.asn1.DERInteger = function (params) {
    KJUR.asn1.DERInteger.superclass.constructor.call(this);
    this.hT = "02";
    this.setByBigInteger = function (bigIntegerValue) {
      this.hTLV = null;
      this.isModified = true;
      this.hV =
        KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
    };
    this.setByInteger = function (intValue) {
      var bi = new BigInteger(String(intValue), 10);
      this.setByBigInteger(bi);
    };
    this.setValueHex = function (newHexString) {
      this.hV = newHexString;
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
    if (typeof params != "undefined") {
      if (typeof params["bigint"] != "undefined") {
        this.setByBigInteger(params["bigint"]);
      } else if (typeof params["int"] != "undefined") {
        this.setByInteger(params["int"]);
      } else if (typeof params["hex"] != "undefined") {
        this.setValueHex(params["hex"]);
      }
    }
  };
  JSX.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);
  KJUR.asn1.DERBitString = function (params) {
    KJUR.asn1.DERBitString.superclass.constructor.call(this);
    this.hT = "03";
    this.setHexValueIncludingUnusedBits = function (
      newHexStringIncludingUnusedBits
    ) {
      this.hTLV = null;
      this.isModified = true;
      this.hV = newHexStringIncludingUnusedBits;
    };
    this.setUnusedBitsAndHexValue = function (unusedBits, hValue) {
      if (unusedBits < 0 || 7 < unusedBits) {
        throw "unused bits shall be from 0 to 7: u = " + unusedBits;
      }
      var hUnusedBits = "0" + unusedBits;
      this.hTLV = null;
      this.isModified = true;
      this.hV = hUnusedBits + hValue;
    };
    this.setByBinaryString = function (binaryString) {
      binaryString = binaryString.replace(/0+$/, "");
      var unusedBits = 8 - (binaryString.length % 8);
      if (unusedBits == 8) unusedBits = 0;
      for (var i = 0; i <= unusedBits; i++) {
        binaryString += "0";
      }
      var h = "";
      for (var i = 0; i < binaryString.length - 1; i += 8) {
        var b = binaryString.substr(i, 8);
        var x = parseInt(b, 2).toString(16);
        if (x.length == 1) x = "0" + x;
        h += x;
      }
      this.hTLV = null;
      this.isModified = true;
      this.hV = "0" + unusedBits + h;
    };
    this.setByBooleanArray = function (booleanArray) {
      var s = "";
      for (var i = 0; i < booleanArray.length; i++) {
        if (booleanArray[i] == true) {
          s += "1";
        } else {
          s += "0";
        }
      }
      this.setByBinaryString(s);
    };
    this.newFalseArray = function (nLength) {
      var a = new Array(nLength);
      for (var i = 0; i < nLength; i++) {
        a[i] = false;
      }
      return a;
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
    if (typeof params != "undefined") {
      if (typeof params["hex"] != "undefined") {
        this.setHexValueIncludingUnusedBits(params["hex"]);
      } else if (typeof params["bin"] != "undefined") {
        this.setByBinaryString(params["bin"]);
      } else if (typeof params["array"] != "undefined") {
        this.setByBooleanArray(params["array"]);
      }
    }
  };
  JSX.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);
  KJUR.asn1.DEROctetString = function (params) {
    KJUR.asn1.DEROctetString.superclass.constructor.call(this, params);
    this.hT = "04";
  };
  JSX.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);
  KJUR.asn1.DERNull = function () {
    KJUR.asn1.DERNull.superclass.constructor.call(this);
    this.hT = "05";
    this.hTLV = "0500";
  };
  JSX.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);
  KJUR.asn1.DERObjectIdentifier = function (params) {
    var itox = function (i) {
      var h = i.toString(16);
      if (h.length == 1) h = "0" + h;
      return h;
    };
    var roidtox = function (roid) {
      var h = "";
      var bi = new BigInteger(roid, 10);
      var b = bi.toString(2);
      var padLen = 7 - (b.length % 7);
      if (padLen == 7) padLen = 0;
      var bPad = "";
      for (var i = 0; i < padLen; i++) bPad += "0";
      b = bPad + b;
      for (var i = 0; i < b.length - 1; i += 7) {
        var b8 = b.substr(i, 7);
        if (i != b.length - 7) b8 = "1" + b8;
        h += itox(parseInt(b8, 2));
      }
      return h;
    };
    KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
    this.hT = "06";
    this.setValueHex = function (newHexString) {
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = newHexString;
    };
    this.setValueOidString = function (oidString) {
      if (!oidString.match(/^[0-9.]+$/)) {
        throw "malformed oid string: " + oidString;
      }
      var h = "";
      var a = oidString.split(".");
      var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
      h += itox(i0);
      a.splice(0, 2);
      for (var i = 0; i < a.length; i++) {
        h += roidtox(a[i]);
      }
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = h;
    };
    this.setValueName = function (oidName) {
      if (typeof KJUR.asn1.x509.OID.name2oidList[oidName] != "undefined") {
        var oid = KJUR.asn1.x509.OID.name2oidList[oidName];
        this.setValueOidString(oid);
      } else {
        throw "DERObjectIdentifier oidName undefined: " + oidName;
      }
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
    if (typeof params != "undefined") {
      if (typeof params["oid"] != "undefined") {
        this.setValueOidString(params["oid"]);
      } else if (typeof params["hex"] != "undefined") {
        this.setValueHex(params["hex"]);
      } else if (typeof params["name"] != "undefined") {
        this.setValueName(params["name"]);
      }
    }
  };
  JSX.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);
  KJUR.asn1.DERUTF8String = function (params) {
    KJUR.asn1.DERUTF8String.superclass.constructor.call(this, params);
    this.hT = "0c";
  };
  JSX.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);
  KJUR.asn1.DERNumericString = function (params) {
    KJUR.asn1.DERNumericString.superclass.constructor.call(this, params);
    this.hT = "12";
  };
  JSX.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);
  KJUR.asn1.DERPrintableString = function (params) {
    KJUR.asn1.DERPrintableString.superclass.constructor.call(this, params);
    this.hT = "13";
  };
  JSX.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);
  KJUR.asn1.DERTeletexString = function (params) {
    KJUR.asn1.DERTeletexString.superclass.constructor.call(this, params);
    this.hT = "14";
  };
  JSX.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);
  KJUR.asn1.DERIA5String = function (params) {
    KJUR.asn1.DERIA5String.superclass.constructor.call(this, params);
    this.hT = "16";
  };
  JSX.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);
  KJUR.asn1.DERUTCTime = function (params) {
    KJUR.asn1.DERUTCTime.superclass.constructor.call(this, params);
    this.hT = "17";
    this.setByDate = function (dateObject) {
      this.hTLV = null;
      this.isModified = true;
      this.date = dateObject;
      this.s = this.formatDate(this.date, "utc");
      this.hV = stohex(this.s);
    };
    if (typeof params != "undefined") {
      if (typeof params["str"] != "undefined") {
        this.setString(params["str"]);
      } else if (typeof params["hex"] != "undefined") {
        this.setStringHex(params["hex"]);
      } else if (typeof params["date"] != "undefined") {
        this.setByDate(params["date"]);
      }
    }
  };
  JSX.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);
  KJUR.asn1.DERGeneralizedTime = function (params) {
    KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, params);
    this.hT = "18";
    this.setByDate = function (dateObject) {
      this.hTLV = null;
      this.isModified = true;
      this.date = dateObject;
      this.s = this.formatDate(this.date, "gen");
      this.hV = stohex(this.s);
    };
    if (typeof params != "undefined") {
      if (typeof params["str"] != "undefined") {
        this.setString(params["str"]);
      } else if (typeof params["hex"] != "undefined") {
        this.setStringHex(params["hex"]);
      } else if (typeof params["date"] != "undefined") {
        this.setByDate(params["date"]);
      }
    }
  };
  JSX.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);
  KJUR.asn1.DERSequence = function (params) {
    KJUR.asn1.DERSequence.superclass.constructor.call(this, params);
    this.hT = "30";
    this.getFreshValueHex = function () {
      var h = "";
      for (var i = 0; i < this.asn1Array.length; i++) {
        var asn1Obj = this.asn1Array[i];
        h += asn1Obj.getEncodedHex();
      }
      this.hV = h;
      return this.hV;
    };
  };
  JSX.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);
  KJUR.asn1.DERSet = function (params) {
    KJUR.asn1.DERSet.superclass.constructor.call(this, params);
    this.hT = "31";
    this.getFreshValueHex = function () {
      var a = new Array();
      for (var i = 0; i < this.asn1Array.length; i++) {
        var asn1Obj = this.asn1Array[i];
        a.push(asn1Obj.getEncodedHex());
      }
      a.sort();
      this.hV = a.join("");
      return this.hV;
    };
  };
  JSX.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);
  KJUR.asn1.DERTaggedObject = function (params) {
    KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
    this.hT = "a0";
    this.hV = "";
    this.isExplicit = true;
    this.asn1Object = null;
    this.setASN1Object = function (isExplicitFlag, tagNoHex, asn1Object) {
      this.hT = tagNoHex;
      this.isExplicit = isExplicitFlag;
      this.asn1Object = asn1Object;
      if (this.isExplicit) {
        this.hV = this.asn1Object.getEncodedHex();
        this.hTLV = null;
        this.isModified = true;
      } else {
        this.hV = null;
        this.hTLV = asn1Object.getEncodedHex();
        this.hTLV = this.hTLV.replace(/^../, tagNoHex);
        this.isModified = false;
      }
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
    if (typeof params != "undefined") {
      if (typeof params["tag"] != "undefined") {
        this.hT = params["tag"];
      }
      if (typeof params["explicit"] != "undefined") {
        this.isExplicit = params["explicit"];
      }
      if (typeof params["obj"] != "undefined") {
        this.asn1Object = params["obj"];
        this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);
      }
    }
  };
  JSX.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
  (function (undefined) {
    "use strict";
    var Hex = {},
      decoder;
    Hex.decode = function (a) {
      var i;
      if (decoder === undefined) {
        var hex = "0123456789ABCDEF",
          ignore = " \f\n\r\t\u00A0\u2028\u2029";
        decoder = [];
        for (i = 0; i < 16; ++i) decoder[hex.charAt(i)] = i;
        hex = hex.toLowerCase();
        for (i = 10; i < 16; ++i) decoder[hex.charAt(i)] = i;
        for (i = 0; i < ignore.length; ++i) decoder[ignore.charAt(i)] = -1;
      }
      var out = [],
        bits = 0,
        char_count = 0;
      for (i = 0; i < a.length; ++i) {
        var c = a.charAt(i);
        if (c == "=") break;
        c = decoder[c];
        if (c == -1) continue;
        if (c === undefined) throw "Illegal character at offset " + i;
        bits |= c;
        if (++char_count >= 2) {
          out[out.length] = bits;
          bits = 0;
          char_count = 0;
        } else {
          bits <<= 4;
        }
      }
      if (char_count) throw "Hex encoding incomplete: 4 bits missing";
      return out;
    };
    window.Hex = Hex;
  })();
  (function (undefined) {
    "use strict";
    var Base64 = {},
      decoder;
    Base64.decode = function (a) {
      var i;
      if (decoder === undefined) {
        var b64 =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          ignore = "= \f\n\r\t\u00A0\u2028\u2029";
        decoder = [];
        for (i = 0; i < 64; ++i) decoder[b64.charAt(i)] = i;
        for (i = 0; i < ignore.length; ++i) decoder[ignore.charAt(i)] = -1;
      }
      var out = [];
      var bits = 0,
        char_count = 0;
      for (i = 0; i < a.length; ++i) {
        var c = a.charAt(i);
        if (c == "=") break;
        c = decoder[c];
        if (c == -1) continue;
        if (c === undefined) throw "Illegal character at offset " + i;
        bits |= c;
        if (++char_count >= 4) {
          out[out.length] = bits >> 16;
          out[out.length] = (bits >> 8) & 0xff;
          out[out.length] = bits & 0xff;
          bits = 0;
          char_count = 0;
        } else {
          bits <<= 6;
        }
      }
      switch (char_count) {
        case 1:
          throw "Base64 encoding incomplete: at least 2 bits missing";
        case 2:
          out[out.length] = bits >> 10;
          break;
        case 3:
          out[out.length] = bits >> 16;
          out[out.length] = (bits >> 8) & 0xff;
          break;
      }
      return out;
    };
    Base64.re =
      /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;
    Base64.unarmor = function (a) {
      var m = Base64.re.exec(a);
      if (m) {
        if (m[1]) a = m[1];
        else if (m[2]) a = m[2];
        else throw "RegExp out of sync";
      }
      return Base64.decode(a);
    };
    window.Base64 = Base64;
  })();
  (function (undefined) {
    "use strict";
    var hardLimit = 100,
      ellipsis = "\u2026",
      DOM = {
        tag: function (tagName, className) {
          var t = document.createElement(tagName);
          t.className = className;
          return t;
        },
        text: function (str) {
          return document.createTextNode(str);
        },
      };
    function Stream(enc, pos) {
      if (enc instanceof Stream) {
        this.enc = enc.enc;
        this.pos = enc.pos;
      } else {
        this.enc = enc;
        this.pos = pos;
      }
    }
    Stream.prototype.get = function (pos) {
      if (pos === undefined) pos = this.pos++;
      if (pos >= this.enc.length)
        throw (
          "Requesting byte offset " +
          pos +
          " on a stream of length " +
          this.enc.length
        );
      return this.enc[pos];
    };
    Stream.prototype.hexDigits = "0123456789ABCDEF";
    Stream.prototype.hexByte = function (b) {
      return (
        this.hexDigits.charAt((b >> 4) & 0xf) + this.hexDigits.charAt(b & 0xf)
      );
    };
    Stream.prototype.hexDump = function (start, end, raw) {
      var s = "";
      for (var i = start; i < end; ++i) {
        s += this.hexByte(this.get(i));
        if (raw !== true)
          switch (i & 0xf) {
            case 0x7:
              s += "  ";
              break;
            case 0xf:
              s += "\n";
              break;
            default:
              s += " ";
          }
      }
      return s;
    };
    Stream.prototype.parseStringISO = function (start, end) {
      var s = "";
      for (var i = start; i < end; ++i) s += String.fromCharCode(this.get(i));
      return s;
    };
    Stream.prototype.parseStringUTF = function (start, end) {
      var s = "";
      for (var i = start; i < end; ) {
        var c = this.get(i++);
        if (c < 128) s += String.fromCharCode(c);
        else if (c > 191 && c < 224)
          s += String.fromCharCode(((c & 0x1f) << 6) | (this.get(i++) & 0x3f));
        else
          s += String.fromCharCode(
            ((c & 0x0f) << 12) |
              ((this.get(i++) & 0x3f) << 6) |
              (this.get(i++) & 0x3f)
          );
      }
      return s;
    };
    Stream.prototype.parseStringBMP = function (start, end) {
      var str = "";
      for (var i = start; i < end; i += 2) {
        var high_byte = this.get(i);
        var low_byte = this.get(i + 1);
        str += String.fromCharCode((high_byte << 8) + low_byte);
      }
      return str;
    };
    Stream.prototype.reTime =
      /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
    Stream.prototype.parseTime = function (start, end) {
      var s = this.parseStringISO(start, end),
        m = this.reTime.exec(s);
      if (!m) return "Unrecognized time: " + s;
      s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];
      if (m[5]) {
        s += ":" + m[5];
        if (m[6]) {
          s += ":" + m[6];
          if (m[7]) s += "." + m[7];
        }
      }
      if (m[8]) {
        s += " UTC";
        if (m[8] != "Z") {
          s += m[8];
          if (m[9]) s += ":" + m[9];
        }
      }
      return s;
    };
    Stream.prototype.parseInteger = function (start, end) {
      var len = end - start;
      if (len > 4) {
        len <<= 3;
        var s = this.get(start);
        if (s === 0) len -= 8;
        else
          while (s < 128) {
            s <<= 1;
            --len;
          }
        return "(" + len + " bit)";
      }
      var n = 0;
      for (var i = start; i < end; ++i) n = (n << 8) | this.get(i);
      return n;
    };
    Stream.prototype.parseBitString = function (start, end) {
      var unusedBit = this.get(start),
        lenBit = ((end - start - 1) << 3) - unusedBit,
        s = "(" + lenBit + " bit)";
      if (lenBit <= 20) {
        var skip = unusedBit;
        s += " ";
        for (var i = end - 1; i > start; --i) {
          var b = this.get(i);
          for (var j = skip; j < 8; ++j) s += (b >> j) & 1 ? "1" : "0";
          skip = 0;
        }
      }
      return s;
    };
    Stream.prototype.parseOctetString = function (start, end) {
      var len = end - start,
        s = "(" + len + " byte) ";
      if (len > hardLimit) end = start + hardLimit;
      for (var i = start; i < end; ++i) s += this.hexByte(this.get(i));
      if (len > hardLimit) s += ellipsis;
      return s;
    };
    Stream.prototype.parseOID = function (start, end) {
      var s = "",
        n = 0,
        bits = 0;
      for (var i = start; i < end; ++i) {
        var v = this.get(i);
        n = (n << 7) | (v & 0x7f);
        bits += 7;
        if (!(v & 0x80)) {
          if (s === "") {
            var m = n < 80 ? (n < 40 ? 0 : 1) : 2;
            s = m + "." + (n - m * 40);
          } else s += "." + (bits >= 31 ? "bigint" : n);
          n = bits = 0;
        }
      }
      return s;
    };
    function ASN1(stream, header, length, tag, sub) {
      this.stream = stream;
      this.header = header;
      this.length = length;
      this.tag = tag;
      this.sub = sub;
    }
    ASN1.prototype.typeName = function () {
      if (this.tag === undefined) return "unknown";
      var tagClass = this.tag >> 6,
        tagConstructed = (this.tag >> 5) & 1,
        tagNumber = this.tag & 0x1f;
      switch (tagClass) {
        case 0:
          switch (tagNumber) {
            case 0x00:
              return "EOC";
            case 0x01:
              return "BOOLEAN";
            case 0x02:
              return "INTEGER";
            case 0x03:
              return "BIT_STRING";
            case 0x04:
              return "OCTET_STRING";
            case 0x05:
              return "NULL";
            case 0x06:
              return "OBJECT_IDENTIFIER";
            case 0x07:
              return "ObjectDescriptor";
            case 0x08:
              return "EXTERNAL";
            case 0x09:
              return "REAL";
            case 0x0a:
              return "ENUMERATED";
            case 0x0b:
              return "EMBEDDED_PDV";
            case 0x0c:
              return "UTF8String";
            case 0x10:
              return "SEQUENCE";
            case 0x11:
              return "SET";
            case 0x12:
              return "NumericString";
            case 0x13:
              return "PrintableString";
            case 0x14:
              return "TeletexString";
            case 0x15:
              return "VideotexString";
            case 0x16:
              return "IA5String";
            case 0x17:
              return "UTCTime";
            case 0x18:
              return "GeneralizedTime";
            case 0x19:
              return "GraphicString";
            case 0x1a:
              return "VisibleString";
            case 0x1b:
              return "GeneralString";
            case 0x1c:
              return "UniversalString";
            case 0x1e:
              return "BMPString";
            default:
              return "Universal_" + tagNumber.toString(16);
          }
        case 1:
          return "Application_" + tagNumber.toString(16);
        case 2:
          return "[" + tagNumber + "]";
        case 3:
          return "Private_" + tagNumber.toString(16);
      }
    };
    ASN1.prototype.reSeemsASCII = /^[ -~]+$/;
    ASN1.prototype.content = function () {
      if (this.tag === undefined) return null;
      var tagClass = this.tag >> 6,
        tagNumber = this.tag & 0x1f,
        content = this.posContent(),
        len = Math.abs(this.length);
      if (tagClass !== 0) {
        if (this.sub !== null) return "(" + this.sub.length + " elem)";
        var s = this.stream.parseStringISO(
          content,
          content + Math.min(len, hardLimit)
        );
        if (this.reSeemsASCII.test(s))
          return (
            s.substring(0, 2 * hardLimit) +
            (s.length > 2 * hardLimit ? ellipsis : "")
          );
        else return this.stream.parseOctetString(content, content + len);
      }
      switch (tagNumber) {
        case 0x01:
          return this.stream.get(content) === 0 ? "false" : "true";
        case 0x02:
          return this.stream.parseInteger(content, content + len);
        case 0x03:
          return this.sub
            ? "(" + this.sub.length + " elem)"
            : this.stream.parseBitString(content, content + len);
        case 0x04:
          return this.sub
            ? "(" + this.sub.length + " elem)"
            : this.stream.parseOctetString(content, content + len);
        case 0x06:
          return this.stream.parseOID(content, content + len);
        case 0x10:
        case 0x11:
          return "(" + this.sub.length + " elem)";
        case 0x0c:
          return this.stream.parseStringUTF(content, content + len);
        case 0x12:
        case 0x13:
        case 0x14:
        case 0x15:
        case 0x16:
        case 0x1a:
          return this.stream.parseStringISO(content, content + len);
        case 0x1e:
          return this.stream.parseStringBMP(content, content + len);
        case 0x17:
        case 0x18:
          return this.stream.parseTime(content, content + len);
      }
      return null;
    };
    ASN1.prototype.toString = function () {
      return (
        this.typeName() +
        "@" +
        this.stream.pos +
        "[header:" +
        this.header +
        ",length:" +
        this.length +
        ",sub:" +
        (this.sub === null ? "null" : this.sub.length) +
        "]"
      );
    };
    ASN1.prototype.print = function (indent) {
      if (indent === undefined) indent = "";
      document.writeln(indent + this);
      if (this.sub !== null) {
        indent += "  ";
        for (var i = 0, max = this.sub.length; i < max; ++i)
          this.sub[i].print(indent);
      }
    };
    ASN1.prototype.toPrettyString = function (indent) {
      if (indent === undefined) indent = "";
      var s = indent + this.typeName() + " @" + this.stream.pos;
      if (this.length >= 0) s += "+";
      s += this.length;
      if (this.tag & 0x20) s += " (constructed)";
      else if ((this.tag == 0x03 || this.tag == 0x04) && this.sub !== null)
        s += " (encapsulates)";
      s += "\n";
      if (this.sub !== null) {
        indent += "  ";
        for (var i = 0, max = this.sub.length; i < max; ++i)
          s += this.sub[i].toPrettyString(indent);
      }
      return s;
    };
    ASN1.prototype.toDOM = function () {
      var node = DOM.tag("div", "node");
      node.asn1 = this;
      var head = DOM.tag("div", "head");
      var s = this.typeName().replace(/_/g, " ");
      head.innerHTML = s;
      var content = this.content();
      if (content !== null) {
        content = String(content).replace(/</g, "&lt;");
        var preview = DOM.tag("span", "preview");
        preview.appendChild(DOM.text(content));
        head.appendChild(preview);
      }
      node.appendChild(head);
      this.node = node;
      this.head = head;
      var value = DOM.tag("div", "value");
      s = "Offset: " + this.stream.pos + "<br/>";
      s += "Length: " + this.header + "+";
      if (this.length >= 0) s += this.length;
      else s += -this.length + " (undefined)";
      if (this.tag & 0x20) s += "<br/>(constructed)";
      else if ((this.tag == 0x03 || this.tag == 0x04) && this.sub !== null)
        s += "<br/>(encapsulates)";
      if (content !== null) {
        s += "<br/>Value:<br/><b>" + content + "</b>";
        if (typeof oids === "object" && this.tag == 0x06) {
          var oid = oids[content];
          if (oid) {
            if (oid.d) s += "<br/>" + oid.d;
            if (oid.c) s += "<br/>" + oid.c;
            if (oid.w) s += "<br/>(warning!)";
          }
        }
      }
      value.innerHTML = s;
      node.appendChild(value);
      var sub = DOM.tag("div", "sub");
      if (this.sub !== null) {
        for (var i = 0, max = this.sub.length; i < max; ++i)
          sub.appendChild(this.sub[i].toDOM());
      }
      node.appendChild(sub);
      head.onclick = function () {
        node.className =
          node.className == "node collapsed" ? "node" : "node collapsed";
      };
      return node;
    };
    ASN1.prototype.posStart = function () {
      return this.stream.pos;
    };
    ASN1.prototype.posContent = function () {
      return this.stream.pos + this.header;
    };
    ASN1.prototype.posEnd = function () {
      return this.stream.pos + this.header + Math.abs(this.length);
    };
    ASN1.prototype.fakeHover = function (current) {
      this.node.className += " hover";
      if (current) this.head.className += " hover";
    };
    ASN1.prototype.fakeOut = function (current) {
      var re = / ?hover/;
      this.node.className = this.node.className.replace(re, "");
      if (current) this.head.className = this.head.className.replace(re, "");
    };
    ASN1.prototype.toHexDOM_sub = function (
      node,
      className,
      stream,
      start,
      end
    ) {
      if (start >= end) return;
      var sub = DOM.tag("span", className);
      sub.appendChild(DOM.text(stream.hexDump(start, end)));
      node.appendChild(sub);
    };
    ASN1.prototype.toHexDOM = function (root) {
      var node = DOM.tag("span", "hex");
      if (root === undefined) root = node;
      this.head.hexNode = node;
      this.head.onmouseover = function () {
        this.hexNode.className = "hexCurrent";
      };
      this.head.onmouseout = function () {
        this.hexNode.className = "hex";
      };
      node.asn1 = this;
      node.onmouseover = function () {
        var current = !root.selected;
        if (current) {
          root.selected = this.asn1;
          this.className = "hexCurrent";
        }
        this.asn1.fakeHover(current);
      };
      node.onmouseout = function () {
        var current = root.selected == this.asn1;
        this.asn1.fakeOut(current);
        if (current) {
          root.selected = null;
          this.className = "hex";
        }
      };
      this.toHexDOM_sub(
        node,
        "tag",
        this.stream,
        this.posStart(),
        this.posStart() + 1
      );
      this.toHexDOM_sub(
        node,
        this.length >= 0 ? "dlen" : "ulen",
        this.stream,
        this.posStart() + 1,
        this.posContent()
      );
      if (this.sub === null)
        node.appendChild(
          DOM.text(this.stream.hexDump(this.posContent(), this.posEnd()))
        );
      else if (this.sub.length > 0) {
        var first = this.sub[0];
        var last = this.sub[this.sub.length - 1];
        this.toHexDOM_sub(
          node,
          "intro",
          this.stream,
          this.posContent(),
          first.posStart()
        );
        for (var i = 0, max = this.sub.length; i < max; ++i)
          node.appendChild(this.sub[i].toHexDOM(root));
        this.toHexDOM_sub(
          node,
          "outro",
          this.stream,
          last.posEnd(),
          this.posEnd()
        );
      }
      return node;
    };
    ASN1.prototype.toHexString = function (root) {
      return this.stream.hexDump(this.posStart(), this.posEnd(), true);
    };
    ASN1.decodeLength = function (stream) {
      var buf = stream.get(),
        len = buf & 0x7f;
      if (len == buf) return len;
      if (len > 3)
        throw (
          "Length over 24 bits not supported at position " + (stream.pos - 1)
        );
      if (len === 0) return -1;
      buf = 0;
      for (var i = 0; i < len; ++i) buf = (buf << 8) | stream.get();
      return buf;
    };
    ASN1.hasContent = function (tag, len, stream) {
      if (tag & 0x20) return true;
      if (tag < 0x03 || tag > 0x04) return false;
      var p = new Stream(stream);
      if (tag == 0x03) p.get();
      var subTag = p.get();
      if ((subTag >> 6) & 0x01) return false;
      try {
        var subLength = ASN1.decodeLength(p);
        return p.pos - stream.pos + subLength == len;
      } catch (exception) {
        return false;
      }
    };
    ASN1.decode = function (stream) {
      if (!(stream instanceof Stream)) stream = new Stream(stream, 0);
      var streamStart = new Stream(stream),
        tag = stream.get(),
        len = ASN1.decodeLength(stream),
        header = stream.pos - streamStart.pos,
        sub = null;
      if (ASN1.hasContent(tag, len, stream)) {
        var start = stream.pos;
        if (tag == 0x03) stream.get();
        sub = [];
        if (len >= 0) {
          var end = start + len;
          while (stream.pos < end) sub[sub.length] = ASN1.decode(stream);
          if (stream.pos != end)
            throw (
              "Content size is not correct for container starting at offset " +
              start
            );
        } else {
          try {
            for (;;) {
              var s = ASN1.decode(stream);
              if (s.tag === 0) break;
              sub[sub.length] = s;
            }
            len = start - stream.pos;
          } catch (e) {
            throw "Exception while decoding undefined length content: " + e;
          }
        }
      } else stream.pos += len;
      return new ASN1(streamStart, header, len, tag, sub);
    };
    ASN1.test = function () {
      var test = [
        { value: [0x27], expected: 0x27 },
        { value: [0x81, 0xc9], expected: 0xc9 },
        { value: [0x83, 0xfe, 0xdc, 0xba], expected: 0xfedcba },
      ];
      for (var i = 0, max = test.length; i < max; ++i) {
        var pos = 0,
          stream = new Stream(test[i].value, 0),
          res = ASN1.decodeLength(stream);
        if (res != test[i].expected)
          document.write(
            "In test[" +
              i +
              "] expected " +
              test[i].expected +
              " got " +
              res +
              "\n"
          );
      }
    };
    window.ASN1 = ASN1;
  })();
  ASN1.prototype.getHexStringValue = function () {
    var hexString = this.toHexString();
    var offset = this.header * 2;
    var length = this.length * 2;
    return hexString.substr(offset, length);
  };
  RSAKey.prototype.parseKey = function (pem) {
    try {
      var modulus = 0;
      var public_exponent = 0;
      var reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
      var der = reHex.test(pem) ? Hex.decode(pem) : Base64.unarmor(pem);
      var asn1 = ASN1.decode(der);
      if (asn1.sub.length === 3) {
        asn1 = asn1.sub[2].sub[0];
      }
      if (asn1.sub.length === 9) {
        modulus = asn1.sub[1].getHexStringValue();
        this.n = parseBigInt(modulus, 16);
        public_exponent = asn1.sub[2].getHexStringValue();
        this.e = parseInt(public_exponent, 16);
        var private_exponent = asn1.sub[3].getHexStringValue();
        this.d = parseBigInt(private_exponent, 16);
        var prime1 = asn1.sub[4].getHexStringValue();
        this.p = parseBigInt(prime1, 16);
        var prime2 = asn1.sub[5].getHexStringValue();
        this.q = parseBigInt(prime2, 16);
        var exponent1 = asn1.sub[6].getHexStringValue();
        this.dmp1 = parseBigInt(exponent1, 16);
        var exponent2 = asn1.sub[7].getHexStringValue();
        this.dmq1 = parseBigInt(exponent2, 16);
        var coefficient = asn1.sub[8].getHexStringValue();
        this.coeff = parseBigInt(coefficient, 16);
      } else if (asn1.sub.length === 2) {
        var start = (asn1.header + asn1.sub[0].header) * 2;
        var length = asn1.sub[0].length * 2;
        modulus = pem.substr(start, length);
        this.n = parseBigInt(modulus, 16);
        start = length + start + asn1.sub[1].header * 2;
        length = asn1.sub[1].length * 2;
        public_exponent = pem.substr(start, length);
        this.e = parseInt(public_exponent, 16);
      } else {
        return false;
      }
      return true;
    } catch (ex) {
      return false;
    }
  };
  RSAKey.prototype.getPrivateBaseKey = function () {
    var options = {
      array: [
        new KJUR.asn1.DERInteger({ int: 0 }),
        new KJUR.asn1.DERInteger({ bigint: this.n }),
        new KJUR.asn1.DERInteger({ int: this.e }),
        new KJUR.asn1.DERInteger({ bigint: this.d }),
        new KJUR.asn1.DERInteger({ bigint: this.p }),
        new KJUR.asn1.DERInteger({ bigint: this.q }),
        new KJUR.asn1.DERInteger({ bigint: this.dmp1 }),
        new KJUR.asn1.DERInteger({ bigint: this.dmq1 }),
        new KJUR.asn1.DERInteger({ bigint: this.coeff }),
      ],
    };
    var seq = new KJUR.asn1.DERSequence(options);
    return seq.getEncodedHex();
  };
  RSAKey.prototype.getPrivateBaseKeyB64 = function () {
    return hex2b64(this.getPrivateBaseKey());
  };
  RSAKey.prototype.getPublicBaseKey = function () {
    var options = {
      array: [
        new KJUR.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }),
        new KJUR.asn1.DERNull(),
      ],
    };
    var first_sequence = new KJUR.asn1.DERSequence(options);
    options = {
      array: [
        new KJUR.asn1.DERInteger({ bigint: this.n }),
        new KJUR.asn1.DERInteger({ int: this.e }),
      ],
    };
    var second_sequence = new KJUR.asn1.DERSequence(options);
    options = { hex: "00" + second_sequence.getEncodedHex() };
    var bit_string = new KJUR.asn1.DERBitString(options);
    options = { array: [first_sequence, bit_string] };
    var seq = new KJUR.asn1.DERSequence(options);
    return seq.getEncodedHex();
  };
  RSAKey.prototype.getPublicBaseKeyB64 = function () {
    return hex2b64(this.getPublicBaseKey());
  };
  RSAKey.prototype.wordwrap = function (str, width) {
    width = width || 64;
    if (!str) {
      return str;
    }
    var regex = "(.{1," + width + "})( +|$\n?)|(.{1," + width + "})";
    return str.match(RegExp(regex, "g")).join("\n");
  };
  RSAKey.prototype.getPrivateKey = function () {
    var key = "-----BEGIN RSA PRIVATE KEY-----\n";
    key += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n";
    key += "-----END RSA PRIVATE KEY-----";
    return key;
  };
  RSAKey.prototype.getPublicKey = function () {
    var key = "-----BEGIN PUBLIC KEY-----\n";
    key += this.wordwrap(this.getPublicBaseKeyB64()) + "\n";
    key += "-----END PUBLIC KEY-----";
    return key;
  };
  RSAKey.prototype.hasPublicKeyProperty = function (obj) {
    obj = obj || {};
    return obj.hasOwnProperty("n") && obj.hasOwnProperty("e");
  };
  RSAKey.prototype.hasPrivateKeyProperty = function (obj) {
    obj = obj || {};
    return (
      obj.hasOwnProperty("n") &&
      obj.hasOwnProperty("e") &&
      obj.hasOwnProperty("d") &&
      obj.hasOwnProperty("p") &&
      obj.hasOwnProperty("q") &&
      obj.hasOwnProperty("dmp1") &&
      obj.hasOwnProperty("dmq1") &&
      obj.hasOwnProperty("coeff")
    );
  };
  RSAKey.prototype.parsePropertiesFrom = function (obj) {
    this.n = obj.n;
    this.e = obj.e;
    if (obj.hasOwnProperty("d")) {
      this.d = obj.d;
      this.p = obj.p;
      this.q = obj.q;
      this.dmp1 = obj.dmp1;
      this.dmq1 = obj.dmq1;
      this.coeff = obj.coeff;
    }
  };
  var JSEncryptRSAKey = function (key) {
    RSAKey.call(this);
    if (key) {
      if (typeof key === "string") {
        this.parseKey(key);
      } else if (
        this.hasPrivateKeyProperty(key) ||
        this.hasPublicKeyProperty(key)
      ) {
        this.parsePropertiesFrom(key);
      }
    }
  };
  JSEncryptRSAKey.prototype = new RSAKey();
  JSEncryptRSAKey.prototype.constructor = JSEncryptRSAKey;
  var JSEncrypt = function (options) {
    options = options || {};
    this.default_key_size = parseInt(options.default_key_size) || 1024;
    this.default_public_exponent = options.default_public_exponent || "010001";
    this.log = options.log || false;
    this.key = null;
  };
  JSEncrypt.prototype.setKey = function (key) {
    if (this.log && this.key) {
      console.warn("A key was already set, overriding existing.");
    }
    this.key = new JSEncryptRSAKey(key);
  };
  JSEncrypt.prototype.setPrivateKey = function (privkey) {
    this.setKey(privkey);
  };
  JSEncrypt.prototype.setPublicKey = function (pubkey) {
    this.setKey(pubkey);
  };
  JSEncrypt.prototype.decrypt = function (string) {
    try {
      return this.getKey().decrypt(b64tohex(string));
    } catch (ex) {
      return false;
    }
  };
  JSEncrypt.prototype.encrypt = function (string) {
    try {
      return this.getKey().encrypt(string);
    } catch (ex) {
      return false;
    }
  };
  JSEncrypt.prototype.getKey = function (cb) {
    if (!this.key) {
      this.key = new JSEncryptRSAKey();
      if (cb && {}.toString.call(cb) === "[object Function]") {
        this.key.generateAsync(
          this.default_key_size,
          this.default_public_exponent,
          cb
        );
        return;
      }
      this.key.generate(this.default_key_size, this.default_public_exponent);
    }
    return this.key;
  };
  JSEncrypt.prototype.getPrivateKey = function () {
    return this.getKey().getPrivateKey();
  };
  JSEncrypt.prototype.getPrivateKeyB64 = function () {
    return this.getKey().getPrivateBaseKeyB64();
  };
  JSEncrypt.prototype.getPublicKey = function () {
    return this.getKey().getPublicKey();
  };
  JSEncrypt.prototype.getPublicKeyB64 = function () {
    return this.getKey().getPublicBaseKeyB64();
  };
  exports.JSEncrypt = JSEncrypt;
})(JSEncryptExports);
var JSEncrypt = JSEncryptExports.JSEncrypt;
var dbits;
var canary = 0xdeadbeefcafe;
var j_lm = (canary & 0xffffff) == 0xefcafe;
function BigInteger(a, b, c) {
  if (a != null)
    if ("number" == typeof a) this.fromNumber(a, b, c);
    else if (b == null && "string" != typeof a) this.fromString(a, 256);
    else this.fromString(a, b);
}
function nbi() {
  return new BigInteger(null);
}
function am1(i, x, w, j, c, n) {
  while (--n >= 0) {
    var v = x * this[i++] + w[j] + c;
    c = Math.floor(v / 0x4000000);
    w[j++] = v & 0x3ffffff;
  }
  return c;
}
function am2(i, x, w, j, c, n) {
  var xl = x & 0x7fff,
    xh = x >> 15;
  while (--n >= 0) {
    var l = this[i] & 0x7fff;
    var h = this[i++] >> 15;
    var m = xh * l + h * xl;
    l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
    c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
    w[j++] = l & 0x3fffffff;
  }
  return c;
}
function am3(i, x, w, j, c, n) {
  var xl = x & 0x3fff,
    xh = x >> 14;
  while (--n >= 0) {
    var l = this[i] & 0x3fff;
    var h = this[i++] >> 14;
    var m = xh * l + h * xl;
    l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
    c = (l >> 28) + (m >> 14) + xh * h;
    w[j++] = l & 0xfffffff;
  }
  return c;
}
if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
  BigInteger.prototype.am = am2;
  dbits = 30;
} else if (j_lm && navigator.appName != "Netscape") {
  BigInteger.prototype.am = am1;
  dbits = 26;
} else {
  BigInteger.prototype.am = am3;
  dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
function int2char(n) {
  return BI_RM.charAt(n);
}
function intAt(s, i) {
  var c = BI_RC[s.charCodeAt(i)];
  return c == null ? -1 : c;
}
function bnpCopyTo(r) {
  for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
  r.t = this.t;
  r.s = this.s;
}
function bnpFromInt(x) {
  this.t = 1;
  this.s = x < 0 ? -1 : 0;
  if (x > 0) this[0] = x;
  else if (x < -1) this[0] = x + this.DV;
  else this.t = 0;
}
function nbv(i) {
  var r = nbi();
  r.fromInt(i);
  return r;
}
function bnpFromString(s, b) {
  var k;
  if (b == 16) k = 4;
  else if (b == 8) k = 3;
  else if (b == 256) k = 8;
  else if (b == 2) k = 1;
  else if (b == 32) k = 5;
  else if (b == 4) k = 2;
  else {
    this.fromRadix(s, b);
    return;
  }
  this.t = 0;
  this.s = 0;
  var i = s.length,
    mi = false,
    sh = 0;
  while (--i >= 0) {
    var x = k == 8 ? s[i] & 0xff : intAt(s, i);
    if (x < 0) {
      if (s.charAt(i) == "-") mi = true;
      continue;
    }
    mi = false;
    if (sh == 0) this[this.t++] = x;
    else if (sh + k > this.DB) {
      this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
      this[this.t++] = x >> (this.DB - sh);
    } else this[this.t - 1] |= x << sh;
    sh += k;
    if (sh >= this.DB) sh -= this.DB;
  }
  if (k == 8 && (s[0] & 0x80) != 0) {
    this.s = -1;
    if (sh > 0) this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
  }
  this.clamp();
  if (mi) BigInteger.ZERO.subTo(this, this);
}
function bnpClamp() {
  var c = this.s & this.DM;
  while (this.t > 0 && this[this.t - 1] == c) --this.t;
}
function bnToString(b) {
  if (this.s < 0) return "-" + this.negate().toString(b);
  var k;
  if (b == 16) k = 4;
  else if (b == 8) k = 3;
  else if (b == 2) k = 1;
  else if (b == 32) k = 5;
  else if (b == 4) k = 2;
  else return this.toRadix(b);
  var km = (1 << k) - 1,
    d,
    m = false,
    r = "",
    i = this.t;
  var p = this.DB - ((i * this.DB) % k);
  if (i-- > 0) {
    if (p < this.DB && (d = this[i] >> p) > 0) {
      m = true;
      r = int2char(d);
    }
    while (i >= 0) {
      if (p < k) {
        d = (this[i] & ((1 << p) - 1)) << (k - p);
        d |= this[--i] >> (p += this.DB - k);
      } else {
        d = (this[i] >> (p -= k)) & km;
        if (p <= 0) {
          p += this.DB;
          --i;
        }
      }
      if (d > 0) m = true;
      if (m) r += int2char(d);
    }
  }
  return m ? r : "0";
}
function bnNegate() {
  var r = nbi();
  BigInteger.ZERO.subTo(this, r);
  return r;
}
function bnAbs() {
  return this.s < 0 ? this.negate() : this;
}
function bnCompareTo(a) {
  var r = this.s - a.s;
  if (r != 0) return r;
  var i = this.t;
  r = i - a.t;
  if (r != 0) return this.s < 0 ? -r : r;
  while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
  return 0;
}
function nbits(x) {
  var r = 1,
    t;
  if ((t = x >>> 16) != 0) {
    x = t;
    r += 16;
  }
  if ((t = x >> 8) != 0) {
    x = t;
    r += 8;
  }
  if ((t = x >> 4) != 0) {
    x = t;
    r += 4;
  }
  if ((t = x >> 2) != 0) {
    x = t;
    r += 2;
  }
  if ((t = x >> 1) != 0) {
    x = t;
    r += 1;
  }
  return r;
}
function bnBitLength() {
  if (this.t <= 0) return 0;
  return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
}
function bnpDLShiftTo(n, r) {
  var i;
  for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
  for (i = n - 1; i >= 0; --i) r[i] = 0;
  r.t = this.t + n;
  r.s = this.s;
}
function bnpDRShiftTo(n, r) {
  for (var i = n; i < this.t; ++i) r[i - n] = this[i];
  r.t = Math.max(this.t - n, 0);
  r.s = this.s;
}
function bnpLShiftTo(n, r) {
  var bs = n % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << cbs) - 1;
  var ds = Math.floor(n / this.DB),
    c = (this.s << bs) & this.DM,
    i;
  for (i = this.t - 1; i >= 0; --i) {
    r[i + ds + 1] = (this[i] >> cbs) | c;
    c = (this[i] & bm) << bs;
  }
  for (i = ds - 1; i >= 0; --i) r[i] = 0;
  r[ds] = c;
  r.t = this.t + ds + 1;
  r.s = this.s;
  r.clamp();
}
function bnpRShiftTo(n, r) {
  r.s = this.s;
  var ds = Math.floor(n / this.DB);
  if (ds >= this.t) {
    r.t = 0;
    return;
  }
  var bs = n % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << bs) - 1;
  r[0] = this[ds] >> bs;
  for (var i = ds + 1; i < this.t; ++i) {
    r[i - ds - 1] |= (this[i] & bm) << cbs;
    r[i - ds] = this[i] >> bs;
  }
  if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
  r.t = this.t - ds;
  r.clamp();
}
function bnpSubTo(a, r) {
  var i = 0,
    c = 0,
    m = Math.min(a.t, this.t);
  while (i < m) {
    c += this[i] - a[i];
    r[i++] = c & this.DM;
    c >>= this.DB;
  }
  if (a.t < this.t) {
    c -= a.s;
    while (i < this.t) {
      c += this[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += this.s;
  } else {
    c += this.s;
    while (i < a.t) {
      c -= a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c -= a.s;
  }
  r.s = c < 0 ? -1 : 0;
  if (c < -1) r[i++] = this.DV + c;
  else if (c > 0) r[i++] = c;
  r.t = i;
  r.clamp();
}
function bnpMultiplyTo(a, r) {
  var x = this.abs(),
    y = a.abs();
  var i = x.t;
  r.t = i + y.t;
  while (--i >= 0) r[i] = 0;
  for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
  r.s = 0;
  r.clamp();
  if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
}
function bnpSquareTo(r) {
  var x = this.abs();
  var i = (r.t = 2 * x.t);
  while (--i >= 0) r[i] = 0;
  for (i = 0; i < x.t - 1; ++i) {
    var c = x.am(i, x[i], r, 2 * i, 0, 1);
    if (
      (r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >=
      x.DV
    ) {
      r[i + x.t] -= x.DV;
      r[i + x.t + 1] = 1;
    }
  }
  if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
  r.s = 0;
  r.clamp();
}
function bnpDivRemTo(m, q, r) {
  var pm = m.abs();
  if (pm.t <= 0) return;
  var pt = this.abs();
  if (pt.t < pm.t) {
    if (q != null) q.fromInt(0);
    if (r != null) this.copyTo(r);
    return;
  }
  if (r == null) r = nbi();
  var y = nbi(),
    ts = this.s,
    ms = m.s;
  var nsh = this.DB - nbits(pm[pm.t - 1]);
  if (nsh > 0) {
    pm.lShiftTo(nsh, y);
    pt.lShiftTo(nsh, r);
  } else {
    pm.copyTo(y);
    pt.copyTo(r);
  }
  var ys = y.t;
  var y0 = y[ys - 1];
  if (y0 == 0) return;
  var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
  var d1 = this.FV / yt,
    d2 = (1 << this.F1) / yt,
    e = 1 << this.F2;
  var i = r.t,
    j = i - ys,
    t = q == null ? nbi() : q;
  y.dlShiftTo(j, t);
  if (r.compareTo(t) >= 0) {
    r[r.t++] = 1;
    r.subTo(t, r);
  }
  BigInteger.ONE.dlShiftTo(ys, t);
  t.subTo(y, y);
  while (y.t < ys) y[y.t++] = 0;
  while (--j >= 0) {
    var qd =
      r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
    if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
      y.dlShiftTo(j, t);
      r.subTo(t, r);
      while (r[i] < --qd) r.subTo(t, r);
    }
  }
  if (q != null) {
    r.drShiftTo(ys, q);
    if (ts != ms) BigInteger.ZERO.subTo(q, q);
  }
  r.t = ys;
  r.clamp();
  if (nsh > 0) r.rShiftTo(nsh, r);
  if (ts < 0) BigInteger.ZERO.subTo(r, r);
}
function bnMod(a) {
  var r = nbi();
  this.abs().divRemTo(a, null, r);
  if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
  return r;
}
function Classic(m) {
  this.m = m;
}
function cConvert(x) {
  if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
  else return x;
}
function cRevert(x) {
  return x;
}
function cReduce(x) {
  x.divRemTo(this.m, null, x);
}
function cMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}
function cSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
function bnpInvDigit() {
  if (this.t < 1) return 0;
  var x = this[0];
  if ((x & 1) == 0) return 0;
  var y = x & 3;
  y = (y * (2 - (x & 0xf) * y)) & 0xf;
  y = (y * (2 - (x & 0xff) * y)) & 0xff;
  y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff;
  y = (y * (2 - ((x * y) % this.DV))) % this.DV;
  return y > 0 ? this.DV - y : -y;
}
function Montgomery(m) {
  this.m = m;
  this.mp = m.invDigit();
  this.mpl = this.mp & 0x7fff;
  this.mph = this.mp >> 15;
  this.um = (1 << (m.DB - 15)) - 1;
  this.mt2 = 2 * m.t;
}
function montConvert(x) {
  var r = nbi();
  x.abs().dlShiftTo(this.m.t, r);
  r.divRemTo(this.m, null, r);
  if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
  return r;
}
function montRevert(x) {
  var r = nbi();
  x.copyTo(r);
  this.reduce(r);
  return r;
}
function montReduce(x) {
  while (x.t <= this.mt2) x[x.t++] = 0;
  for (var i = 0; i < this.m.t; ++i) {
    var j = x[i] & 0x7fff;
    var u0 =
      (j * this.mpl +
        (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) &
      x.DM;
    j = i + this.m.t;
    x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
    while (x[j] >= x.DV) {
      x[j] -= x.DV;
      x[++j]++;
    }
  }
  x.clamp();
  x.drShiftTo(this.m.t, x);
  if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}
function montSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
}
function montMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnpIsEven() {
  return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}
function bnpExp(e, z) {
  if (e > 0xffffffff || e < 1) return BigInteger.ONE;
  var r = nbi(),
    r2 = nbi(),
    g = z.convert(this),
    i = nbits(e) - 1;
  g.copyTo(r);
  while (--i >= 0) {
    z.sqrTo(r, r2);
    if ((e & (1 << i)) > 0) z.mulTo(r2, g, r);
    else {
      var t = r;
      r = r2;
      r2 = t;
    }
  }
  return z.revert(r);
}
function bnModPowInt(e, m) {
  var z;
  if (e < 256 || m.isEven()) z = new Classic(m);
  else z = new Montgomery(m);
  return this.exp(e, z);
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
function bnClone() {
  var r = nbi();
  this.copyTo(r);
  return r;
}
function bnIntValue() {
  if (this.s < 0) {
    if (this.t == 1) return this[0] - this.DV;
    else if (this.t == 0) return -1;
  } else if (this.t == 1) return this[0];
  else if (this.t == 0) return 0;
  return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
}
function bnByteValue() {
  return this.t == 0 ? this.s : (this[0] << 24) >> 24;
}
function bnShortValue() {
  return this.t == 0 ? this.s : (this[0] << 16) >> 16;
}
function bnpChunkSize(r) {
  return Math.floor((Math.LN2 * this.DB) / Math.log(r));
}
function bnSigNum() {
  if (this.s < 0) return -1;
  else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
  else return 1;
}
function bnpToRadix(b) {
  if (b == null) b = 10;
  if (this.signum() == 0 || b < 2 || b > 36) return "0";
  var cs = this.chunkSize(b);
  var a = Math.pow(b, cs);
  var d = nbv(a),
    y = nbi(),
    z = nbi(),
    r = "";
  this.divRemTo(d, y, z);
  while (y.signum() > 0) {
    r = (a + z.intValue()).toString(b).substr(1) + r;
    y.divRemTo(d, y, z);
  }
  return z.intValue().toString(b) + r;
}
function bnpFromRadix(s, b) {
  this.fromInt(0);
  if (b == null) b = 10;
  var cs = this.chunkSize(b);
  var d = Math.pow(b, cs),
    mi = false,
    j = 0,
    w = 0;
  for (var i = 0; i < s.length; ++i) {
    var x = intAt(s, i);
    if (x < 0) {
      if (s.charAt(i) == "-" && this.signum() == 0) mi = true;
      continue;
    }
    w = b * w + x;
    if (++j >= cs) {
      this.dMultiply(d);
      this.dAddOffset(w, 0);
      j = 0;
      w = 0;
    }
  }
  if (j > 0) {
    this.dMultiply(Math.pow(b, j));
    this.dAddOffset(w, 0);
  }
  if (mi) BigInteger.ZERO.subTo(this, this);
}
function bnpFromNumber(a, b, c) {
  if ("number" == typeof b) {
    if (a < 2) this.fromInt(1);
    else {
      this.fromNumber(a, c);
      if (!this.testBit(a - 1))
        this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
      if (this.isEven()) this.dAddOffset(1, 0);
      while (!this.isProbablePrime(b)) {
        this.dAddOffset(2, 0);
        if (this.bitLength() > a)
          this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
      }
    }
  } else {
    var x = new Array(),
      t = a & 7;
    x.length = (a >> 3) + 1;
    b.nextBytes(x);
    if (t > 0) x[0] &= (1 << t) - 1;
    else x[0] = 0;
    this.fromString(x, 256);
  }
}
function bnToByteArray() {
  var i = this.t,
    r = new Array();
  r[0] = this.s;
  var p = this.DB - ((i * this.DB) % 8),
    d,
    k = 0;
  if (i-- > 0) {
    if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
      r[k++] = d | (this.s << (this.DB - p));
    while (i >= 0) {
      if (p < 8) {
        d = (this[i] & ((1 << p) - 1)) << (8 - p);
        d |= this[--i] >> (p += this.DB - 8);
      } else {
        d = (this[i] >> (p -= 8)) & 0xff;
        if (p <= 0) {
          p += this.DB;
          --i;
        }
      }
      if ((d & 0x80) != 0) d |= -256;
      if (k == 0 && (this.s & 0x80) != (d & 0x80)) ++k;
      if (k > 0 || d != this.s) r[k++] = d;
    }
  }
  return r;
}
function bnEquals(a) {
  return this.compareTo(a) == 0;
}
function bnMin(a) {
  return this.compareTo(a) < 0 ? this : a;
}
function bnMax(a) {
  return this.compareTo(a) > 0 ? this : a;
}
function bnpBitwiseTo(a, op, r) {
  var i,
    f,
    m = Math.min(a.t, this.t);
  for (i = 0; i < m; ++i) r[i] = op(this[i], a[i]);
  if (a.t < this.t) {
    f = a.s & this.DM;
    for (i = m; i < this.t; ++i) r[i] = op(this[i], f);
    r.t = this.t;
  } else {
    f = this.s & this.DM;
    for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
    r.t = a.t;
  }
  r.s = op(this.s, a.s);
  r.clamp();
}
function op_and(x, y) {
  return x & y;
}
function bnAnd(a) {
  var r = nbi();
  this.bitwiseTo(a, op_and, r);
  return r;
}
function op_or(x, y) {
  return x | y;
}
function bnOr(a) {
  var r = nbi();
  this.bitwiseTo(a, op_or, r);
  return r;
}
function op_xor(x, y) {
  return x ^ y;
}
function bnXor(a) {
  var r = nbi();
  this.bitwiseTo(a, op_xor, r);
  return r;
}
function op_andnot(x, y) {
  return x & ~y;
}
function bnAndNot(a) {
  var r = nbi();
  this.bitwiseTo(a, op_andnot, r);
  return r;
}
function bnNot() {
  var r = nbi();
  for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
  r.t = this.t;
  r.s = ~this.s;
  return r;
}
function bnShiftLeft(n) {
  var r = nbi();
  if (n < 0) this.rShiftTo(-n, r);
  else this.lShiftTo(n, r);
  return r;
}
function bnShiftRight(n) {
  var r = nbi();
  if (n < 0) this.lShiftTo(-n, r);
  else this.rShiftTo(n, r);
  return r;
}
function lbit(x) {
  if (x == 0) return -1;
  var r = 0;
  if ((x & 0xffff) == 0) {
    x >>= 16;
    r += 16;
  }
  if ((x & 0xff) == 0) {
    x >>= 8;
    r += 8;
  }
  if ((x & 0xf) == 0) {
    x >>= 4;
    r += 4;
  }
  if ((x & 3) == 0) {
    x >>= 2;
    r += 2;
  }
  if ((x & 1) == 0) ++r;
  return r;
}
function bnGetLowestSetBit() {
  for (var i = 0; i < this.t; ++i)
    if (this[i] != 0) return i * this.DB + lbit(this[i]);
  if (this.s < 0) return this.t * this.DB;
  return -1;
}
function cbit(x) {
  var r = 0;
  while (x != 0) {
    x &= x - 1;
    ++r;
  }
  return r;
}
function bnBitCount() {
  var r = 0,
    x = this.s & this.DM;
  for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
  return r;
}
function bnTestBit(n) {
  var j = Math.floor(n / this.DB);
  if (j >= this.t) return this.s != 0;
  return (this[j] & (1 << n % this.DB)) != 0;
}
function bnpChangeBit(n, op) {
  var r = BigInteger.ONE.shiftLeft(n);
  this.bitwiseTo(r, op, r);
  return r;
}
function bnSetBit(n) {
  return this.changeBit(n, op_or);
}
function bnClearBit(n) {
  return this.changeBit(n, op_andnot);
}
function bnFlipBit(n) {
  return this.changeBit(n, op_xor);
}
function bnpAddTo(a, r) {
  var i = 0,
    c = 0,
    m = Math.min(a.t, this.t);
  while (i < m) {
    c += this[i] + a[i];
    r[i++] = c & this.DM;
    c >>= this.DB;
  }
  if (a.t < this.t) {
    c += a.s;
    while (i < this.t) {
      c += this[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += this.s;
  } else {
    c += this.s;
    while (i < a.t) {
      c += a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    c += a.s;
  }
  r.s = c < 0 ? -1 : 0;
  if (c > 0) r[i++] = c;
  else if (c < -1) r[i++] = this.DV + c;
  r.t = i;
  r.clamp();
}
function bnAdd(a) {
  var r = nbi();
  this.addTo(a, r);
  return r;
}
function bnSubtract(a) {
  var r = nbi();
  this.subTo(a, r);
  return r;
}
function bnMultiply(a) {
  var r = nbi();
  this.multiplyTo(a, r);
  return r;
}
function bnSquare() {
  var r = nbi();
  this.squareTo(r);
  return r;
}
function bnDivide(a) {
  var r = nbi();
  this.divRemTo(a, r, null);
  return r;
}
function bnRemainder(a) {
  var r = nbi();
  this.divRemTo(a, null, r);
  return r;
}
function bnDivideAndRemainder(a) {
  var q = nbi(),
    r = nbi();
  this.divRemTo(a, q, r);
  return new Array(q, r);
}
function bnpDMultiply(n) {
  this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
  ++this.t;
  this.clamp();
}
function bnpDAddOffset(n, w) {
  if (n == 0) return;
  while (this.t <= w) this[this.t++] = 0;
  this[w] += n;
  while (this[w] >= this.DV) {
    this[w] -= this.DV;
    if (++w >= this.t) this[this.t++] = 0;
    ++this[w];
  }
}
function NullExp() {}
function nNop(x) {
  return x;
}
function nMulTo(x, y, r) {
  x.multiplyTo(y, r);
}
function nSqrTo(x, r) {
  x.squareTo(r);
}
NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;
function bnPow(e) {
  return this.exp(e, new NullExp());
}
function bnpMultiplyLowerTo(a, n, r) {
  var i = Math.min(this.t + a.t, n);
  r.s = 0;
  r.t = i;
  while (i > 0) r[--i] = 0;
  var j;
  for (j = r.t - this.t; i < j; ++i)
    r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
  for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
  r.clamp();
}
function bnpMultiplyUpperTo(a, n, r) {
  --n;
  var i = (r.t = this.t + a.t - n);
  r.s = 0;
  while (--i >= 0) r[i] = 0;
  for (i = Math.max(n - this.t, 0); i < a.t; ++i)
    r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
  r.clamp();
  r.drShiftTo(1, r);
}
function Barrett(m) {
  this.r2 = nbi();
  this.q3 = nbi();
  BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
  this.mu = this.r2.divide(m);
  this.m = m;
}
function barrettConvert(x) {
  if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
  else if (x.compareTo(this.m) < 0) return x;
  else {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
}
function barrettRevert(x) {
  return x;
}
function barrettReduce(x) {
  x.drShiftTo(this.m.t - 1, this.r2);
  if (x.t > this.m.t + 1) {
    x.t = this.m.t + 1;
    x.clamp();
  }
  this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
  this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
  while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
  x.subTo(this.r2, x);
  while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}
function barrettSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
}
function barrettMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}
Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;
function bnModPow(e, m) {
  var i = e.bitLength(),
    k,
    r = nbv(1),
    z;
  if (i <= 0) return r;
  else if (i < 18) k = 1;
  else if (i < 48) k = 3;
  else if (i < 144) k = 4;
  else if (i < 768) k = 5;
  else k = 6;
  if (i < 8) z = new Classic(m);
  else if (m.isEven()) z = new Barrett(m);
  else z = new Montgomery(m);
  var g = new Array(),
    n = 3,
    k1 = k - 1,
    km = (1 << k) - 1;
  g[1] = z.convert(this);
  if (k > 1) {
    var g2 = nbi();
    z.sqrTo(g[1], g2);
    while (n <= km) {
      g[n] = nbi();
      z.mulTo(g2, g[n - 2], g[n]);
      n += 2;
    }
  }
  var j = e.t - 1,
    w,
    is1 = true,
    r2 = nbi(),
    t;
  i = nbits(e[j]) - 1;
  while (j >= 0) {
    if (i >= k1) w = (e[j] >> (i - k1)) & km;
    else {
      w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
      if (j > 0) w |= e[j - 1] >> (this.DB + i - k1);
    }
    n = k;
    while ((w & 1) == 0) {
      w >>= 1;
      --n;
    }
    if ((i -= n) < 0) {
      i += this.DB;
      --j;
    }
    if (is1) {
      g[w].copyTo(r);
      is1 = false;
    } else {
      while (n > 1) {
        z.sqrTo(r, r2);
        z.sqrTo(r2, r);
        n -= 2;
      }
      if (n > 0) z.sqrTo(r, r2);
      else {
        t = r;
        r = r2;
        r2 = t;
      }
      z.mulTo(r2, g[w], r);
    }
    while (j >= 0 && (e[j] & (1 << i)) == 0) {
      z.sqrTo(r, r2);
      t = r;
      r = r2;
      r2 = t;
      if (--i < 0) {
        i = this.DB - 1;
        --j;
      }
    }
  }
  return z.revert(r);
}
function bnGCD(a) {
  var x = this.s < 0 ? this.negate() : this.clone();
  var y = a.s < 0 ? a.negate() : a.clone();
  if (x.compareTo(y) < 0) {
    var t = x;
    x = y;
    y = t;
  }
  var i = x.getLowestSetBit(),
    g = y.getLowestSetBit();
  if (g < 0) return x;
  if (i < g) g = i;
  if (g > 0) {
    x.rShiftTo(g, x);
    y.rShiftTo(g, y);
  }
  while (x.signum() > 0) {
    if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
    if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
    if (x.compareTo(y) >= 0) {
      x.subTo(y, x);
      x.rShiftTo(1, x);
    } else {
      y.subTo(x, y);
      y.rShiftTo(1, y);
    }
  }
  if (g > 0) y.lShiftTo(g, y);
  return y;
}
function bnpModInt(n) {
  if (n <= 0) return 0;
  var d = this.DV % n,
    r = this.s < 0 ? n - 1 : 0;
  if (this.t > 0)
    if (d == 0) r = this[0] % n;
    else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
  return r;
}
function bnModInverse(m) {
  var ac = m.isEven();
  if ((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
  var u = m.clone(),
    v = this.clone();
  var a = nbv(1),
    b = nbv(0),
    c = nbv(0),
    d = nbv(1);
  while (u.signum() != 0) {
    while (u.isEven()) {
      u.rShiftTo(1, u);
      if (ac) {
        if (!a.isEven() || !b.isEven()) {
          a.addTo(this, a);
          b.subTo(m, b);
        }
        a.rShiftTo(1, a);
      } else if (!b.isEven()) b.subTo(m, b);
      b.rShiftTo(1, b);
    }
    while (v.isEven()) {
      v.rShiftTo(1, v);
      if (ac) {
        if (!c.isEven() || !d.isEven()) {
          c.addTo(this, c);
          d.subTo(m, d);
        }
        c.rShiftTo(1, c);
      } else if (!d.isEven()) d.subTo(m, d);
      d.rShiftTo(1, d);
    }
    if (u.compareTo(v) >= 0) {
      u.subTo(v, u);
      if (ac) a.subTo(c, a);
      b.subTo(d, b);
    } else {
      v.subTo(u, v);
      if (ac) c.subTo(a, c);
      d.subTo(b, d);
    }
  }
  if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
  if (d.compareTo(m) >= 0) return d.subtract(m);
  if (d.signum() < 0) d.addTo(m, d);
  else return d;
  if (d.signum() < 0) return d.add(m);
  else return d;
}
var lowprimes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
  331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
  421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
  509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
  613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
  709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
  821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
  919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
function bnIsProbablePrime(t) {
  var i,
    x = this.abs();
  if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
    for (i = 0; i < lowprimes.length; ++i)
      if (x[0] == lowprimes[i]) return true;
    return false;
  }
  if (x.isEven()) return false;
  i = 1;
  while (i < lowprimes.length) {
    var m = lowprimes[i],
      j = i + 1;
    while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
    m = x.modInt(m);
    while (i < j) if (m % lowprimes[i++] == 0) return false;
  }
  return x.millerRabin(t);
}
function bnpMillerRabin(t) {
  var n1 = this.subtract(BigInteger.ONE);
  var k = n1.getLowestSetBit();
  if (k <= 0) return false;
  var r = n1.shiftRight(k);
  t = (t + 1) >> 1;
  if (t > lowprimes.length) t = lowprimes.length;
  var a = nbi();
  for (var i = 0; i < t; ++i) {
    a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
    var y = a.modPow(r, this);
    if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
      var j = 1;
      while (j++ < k && y.compareTo(n1) != 0) {
        y = y.modPowInt(2, this);
        if (y.compareTo(BigInteger.ONE) == 0) return false;
      }
      if (y.compareTo(n1) != 0) return false;
    }
  }
  return true;
}
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
BigInteger.prototype.square = bnSquare;
function parseBigInt(str, r) {
  return new BigInteger(str, r);
}
function linebrk(s, n) {
  var ret = "";
  var i = 0;
  while (i + n < s.length) {
    ret += s.substring(i, i + n) + "\n";
    i += n;
  }
  return ret + s.substring(i, s.length);
}
function byte2Hex(b) {
  if (b < 0x10) return "0" + b.toString(16);
  else return b.toString(16);
}
function pkcs1pad2(s, n) {
  if (n < s.length + 11) {
    alert("Message too long for RSA");
    return null;
  }
  var ba = new Array();
  var i = s.length - 1;
  while (i >= 0 && n > 0) {
    var c = s.charCodeAt(i--);
    if (c < 128) {
      ba[--n] = c;
    } else if (c > 127 && c < 2048) {
      ba[--n] = (c & 63) | 128;
      ba[--n] = (c >> 6) | 192;
    } else {
      ba[--n] = (c & 63) | 128;
      ba[--n] = ((c >> 6) & 63) | 128;
      ba[--n] = (c >> 12) | 224;
    }
  }
  ba[--n] = 0;
  var rng = new SecureRandom();
  var x = new Array();
  while (n > 2) {
    x[0] = 0;
    while (x[0] == 0) rng.nextBytes(x);
    ba[--n] = x[0];
  }
  ba[--n] = 2;
  ba[--n] = 0;
  return new BigInteger(ba);
}
function oaep_mgf1_arr(seed, len, hash) {
  var mask = "",
    i = 0;
  while (mask.length < len) {
    mask += hash(
      String.fromCharCode.apply(
        String,
        seed.concat([
          (i & 0xff000000) >> 24,
          (i & 0x00ff0000) >> 16,
          (i & 0x0000ff00) >> 8,
          i & 0x000000ff,
        ])
      )
    );
    i += 1;
  }
  return mask;
}
function oaep_pad(s, n, hash, hashLen) {
  var MD = KJUR.crypto.MessageDigest;
  var Util = KJUR.crypto.Util;
  var algName = null;
  if (!hash) hash = "sha1";
  if (typeof hash === "string") {
    algName = MD.getCanonicalAlgName(hash);
    hashLen = MD.getHashLength(algName);
    hash = function (s) {
      return hextorstr(Util.hashString(s, algName));
    };
  }
  if (s.length + 2 * hashLen + 2 > n) {
    throw "Message too long for RSA";
  }
  var PS = "",
    i;
  for (i = 0; i < n - s.length - 2 * hashLen - 2; i += 1) {
    PS += "\x00";
  }
  var DB = hash("") + PS + "\x01" + s;
  var seed = new Array(hashLen);
  new SecureRandom().nextBytes(seed);
  var dbMask = oaep_mgf1_arr(seed, DB.length, hash);
  var maskedDB = [];
  for (i = 0; i < DB.length; i += 1) {
    maskedDB[i] = DB.charCodeAt(i) ^ dbMask.charCodeAt(i);
  }
  var seedMask = oaep_mgf1_arr(maskedDB, seed.length, hash);
  var maskedSeed = [0];
  for (i = 0; i < seed.length; i += 1) {
    maskedSeed[i + 1] = seed[i] ^ seedMask.charCodeAt(i);
  }
  return new BigInteger(maskedSeed.concat(maskedDB));
}
function RSAKey() {
  this.n = null;
  this.e = 0;
  this.d = null;
  this.p = null;
  this.q = null;
  this.dmp1 = null;
  this.dmq1 = null;
  this.coeff = null;
}
function RSASetPublic(N, E) {
  this.isPublic = true;
  if (typeof N !== "string") {
    this.n = N;
    this.e = E;
  } else if (N != null && E != null && N.length > 0 && E.length > 0) {
    this.n = parseBigInt(N, 16);
    this.e = parseInt(E, 16);
  } else alert("Invalid RSA public key");
}
function RSADoPublic(x) {
  return x.modPowInt(this.e, this.n);
}
function RSAEncrypt(text) {
  var m = pkcs1pad2(text, (this.n.bitLength() + 7) >> 3);
  if (m == null) return null;
  var c = this.doPublic(m);
  if (c == null) return null;
  var h = c.toString(16);
  if ((h.length & 1) == 0) return h;
  else return "0" + h;
}
function RSAEncryptOAEP(text, hash, hashLen) {
  var m = oaep_pad(text, (this.n.bitLength() + 7) >> 3, hash, hashLen);
  if (m == null) return null;
  var c = this.doPublic(m);
  if (c == null) return null;
  var h = c.toString(16);
  if ((h.length & 1) == 0) return h;
  else return "0" + h;
}
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
RSAKey.prototype.encryptOAEP = RSAEncryptOAEP;
RSAKey.prototype.type = "RSA";
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";
function hex2b64(h) {
  var i;
  var c;
  var ret = "";
  for (i = 0; i + 3 <= h.length; i += 3) {
    c = parseInt(h.substring(i, i + 3), 16);
    ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
  }
  if (i + 1 == h.length) {
    c = parseInt(h.substring(i, i + 1), 16);
    ret += b64map.charAt(c << 2);
  } else if (i + 2 == h.length) {
    c = parseInt(h.substring(i, i + 2), 16);
    ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
  }
  if (b64pad) while ((ret.length & 3) > 0) ret += b64pad;
  return ret;
}
function b64tohex(s) {
  var ret = "";
  var i;
  var k = 0;
  var slop;
  var v;
  for (i = 0; i < s.length; ++i) {
    if (s.charAt(i) == b64pad) break;
    v = b64map.indexOf(s.charAt(i));
    if (v < 0) continue;
    if (k == 0) {
      ret += int2char(v >> 2);
      slop = v & 3;
      k = 1;
    } else if (k == 1) {
      ret += int2char((slop << 2) | (v >> 4));
      slop = v & 0xf;
      k = 2;
    } else if (k == 2) {
      ret += int2char(slop);
      ret += int2char(v >> 2);
      slop = v & 3;
      k = 3;
    } else {
      ret += int2char((slop << 2) | (v >> 4));
      ret += int2char(v & 0xf);
      k = 0;
    }
  }
  if (k == 1) ret += int2char(slop << 2);
  return ret;
}
function b64toBA(s) {
  var h = b64tohex(s);
  var i;
  var a = new Array();
  for (i = 0; 2 * i < h.length; ++i) {
    a[i] = parseInt(h.substring(2 * i, 2 * i + 2), 16);
  }
  return a;
}
function encodeArr(arr) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    var tmp = arr[i].toString(16);
    if (tmp.length == 1) {
      tmp = "0" + tmp;
    }
    str += tmp;
  }
  return str.toUpperCase();
}
function _string2Bin2(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    var x = str.charCodeAt(i);
    result.push(x);
  }
  return result;
}
function Base642() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.decode = function (input, te) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    if (te) {
      output = [];
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output.push(chr1);
        if (enc3 != 64) {
          output.push(chr2);
        }
        if (enc4 != 64) {
          output.push(chr3);
        }
      }
      return output;
    } else {
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
    }
    return encodeArr(_string2Bin2(output));
  };
}
var CryptoJS =
  CryptoJS ||
  (function (Math, undefined) {
    var create =
      Object.create ||
      (function () {
        function F() {}
        return function (obj) {
          var subtype;
          F.prototype = obj;
          subtype = new F();
          F.prototype = null;
          return subtype;
        };
      })();
    var C = {};
    var C_lib = (C.lib = {});
    var Base = (C_lib.Base = (function () {
      return {
        extend: function (overrides) {
          var subtype = create(this);
          if (overrides) {
            subtype.mixIn(overrides);
          }
          if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
            subtype.init = function () {
              subtype.$super.init.apply(this, arguments);
            };
          }
          subtype.init.prototype = subtype;
          subtype.$super = this;
          return subtype;
        },
        create: function () {
          var instance = this.extend();
          instance.init.apply(instance, arguments);
          return instance;
        },
        init: function () {},
        mixIn: function (properties) {
          for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
              this[propertyName] = properties[propertyName];
            }
          }
          if (properties.hasOwnProperty("toString")) {
            this.toString = properties.toString;
          }
        },
        clone: function () {
          return this.init.prototype.extend(this);
        },
      };
    })());
    var WordArray = (C_lib.WordArray = Base.extend({
      init: function (words, sigBytes) {
        words = this.words = words || [];
        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 4;
        }
      },
      toString: function (encoder) {
        return (encoder || Hex).stringify(this);
      },
      concat: function (wordArray) {
        var thisWords = this.words;
        var thatWords = wordArray.words;
        var thisSigBytes = this.sigBytes;
        var thatSigBytes = wordArray.sigBytes;
        this.clamp();
        if (thisSigBytes % 4) {
          for (var i = 0; i < thatSigBytes; i++) {
            var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            thisWords[(thisSigBytes + i) >>> 2] |=
              thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
          }
        } else {
          for (var i = 0; i < thatSigBytes; i += 4) {
            thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
          }
        }
        this.sigBytes += thatSigBytes;
        return this;
      },
      clamp: function () {
        var words = this.words;
        var sigBytes = this.sigBytes;
        words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
        words.length = Math.ceil(sigBytes / 4);
      },
      clone: function () {
        var clone = Base.clone.call(this);
        clone.words = this.words.slice(0);
        return clone;
      },
      random: function (nBytes) {
        var words = [];
        var r = function (m_w) {
          var m_w = m_w;
          var m_z = 0x3ade68b1;
          var mask = 0xffffffff;
          return function () {
            m_z = (0x9069 * (m_z & 0xffff) + (m_z >> 0x10)) & mask;
            m_w = (0x4650 * (m_w & 0xffff) + (m_w >> 0x10)) & mask;
            var result = ((m_z << 0x10) + m_w) & mask;
            result /= 0x100000000;
            result += 0.5;
            return result * (Math.random() > 0.5 ? 1 : -1);
          };
        };
        for (var i = 0, rcache; i < nBytes; i += 4) {
          var _r = r((rcache || Math.random()) * 0x100000000);
          rcache = _r() * 0x3ade67b7;
          words.push((_r() * 0x100000000) | 0);
        }
        return new WordArray.init(words, nBytes);
      },
    }));
    var C_enc = (C.enc = {});
    var Hex = (C_enc.Hex = {
      stringify: function (wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var hexChars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
          hexChars.push((bite >>> 4).toString(16));
          hexChars.push((bite & 0x0f).toString(16));
        }
        return hexChars.join("");
      },
      parse: function (hexStr) {
        var hexStrLength = hexStr.length;
        var words = [];
        for (var i = 0; i < hexStrLength; i += 2) {
          words[i >>> 3] |=
            parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
        }
        return new WordArray.init(words, hexStrLength / 2);
      },
    });
    var Latin1 = (C_enc.Latin1 = {
      stringify: function (wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var latin1Chars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
          latin1Chars.push(String.fromCharCode(bite));
        }
        return latin1Chars.join("");
      },
      parse: function (latin1Str) {
        var latin1StrLength = latin1Str.length;
        var words = [];
        for (var i = 0; i < latin1StrLength; i++) {
          words[i >>> 2] |=
            (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
        }
        return new WordArray.init(words, latin1StrLength);
      },
    });
    var Utf8 = (C_enc.Utf8 = {
      stringify: function (wordArray) {
        try {
          return decodeURIComponent(escape(Latin1.stringify(wordArray)));
        } catch (e) {
          throw new Error("Malformed UTF-8 data");
        }
      },
      parse: function (utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
      },
    });
    var BufferedBlockAlgorithm = (C_lib.BufferedBlockAlgorithm = Base.extend({
      reset: function () {
        this._data = new WordArray.init();
        this._nDataBytes = 0;
      },
      _append: function (data) {
        if (typeof data == "string") {
          data = Utf8.parse(data);
        }
        this._data.concat(data);
        this._nDataBytes += data.sigBytes;
      },
      _process: function (doFlush) {
        var data = this._data;
        var dataWords = data.words;
        var dataSigBytes = data.sigBytes;
        var blockSize = this.blockSize;
        var blockSizeBytes = blockSize * 4;
        var nBlocksReady = dataSigBytes / blockSizeBytes;
        if (doFlush) {
          nBlocksReady = Math.ceil(nBlocksReady);
        } else {
          nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        }
        var nWordsReady = nBlocksReady * blockSize;
        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
        if (nWordsReady) {
          for (var offset = 0; offset < nWordsReady; offset += blockSize) {
            this._doProcessBlock(dataWords, offset);
          }
          var processedWords = dataWords.splice(0, nWordsReady);
          data.sigBytes -= nBytesReady;
        }
        return new WordArray.init(processedWords, nBytesReady);
      },
      clone: function () {
        var clone = Base.clone.call(this);
        clone._data = this._data.clone();
        return clone;
      },
      _minBufferSize: 0,
    }));
    var Hasher = (C_lib.Hasher = BufferedBlockAlgorithm.extend({
      cfg: Base.extend(),
      init: function (cfg) {
        this.cfg = this.cfg.extend(cfg);
        this.reset();
      },
      reset: function () {
        BufferedBlockAlgorithm.reset.call(this);
        this._doReset();
      },
      update: function (messageUpdate) {
        this._append(messageUpdate);
        this._process();
        return this;
      },
      finalize: function (messageUpdate) {
        if (messageUpdate) {
          this._append(messageUpdate);
        }
        var hash = this._doFinalize();
        return hash;
      },
      blockSize: 512 / 32,
      _createHelper: function (hasher) {
        return function (message, cfg) {
          return new hasher.init(cfg).finalize(message);
        };
      },
      _createHmacHelper: function (hasher) {
        return function (message, key) {
          return new C_algo.HMAC.init(hasher, key).finalize(message);
        };
      },
    }));
    var C_algo = (C.algo = {});
    return C;
  })(Math);
(function () {
  var C = CryptoJS;
  var C_lib = C.lib;
  var WordArray = C_lib.WordArray;
  var Hasher = C_lib.Hasher;
  var C_algo = C.algo;
  var W = [];
  var SHA1 = (C_algo.SHA1 = Hasher.extend({
    _doReset: function () {
      this._hash = new WordArray.init([
        0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
      ]);
    },
    _doProcessBlock: function (M, offset) {
      var H = this._hash.words;
      var a = H[0];
      var b = H[1];
      var c = H[2];
      var d = H[3];
      var e = H[4];
      for (var i = 0; i < 80; i++) {
        if (i < 16) {
          W[i] = M[offset + i] | 0;
        } else {
          var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
          W[i] = (n << 1) | (n >>> 31);
        }
        var t = ((a << 5) | (a >>> 27)) + e + W[i];
        if (i < 20) {
          t += ((b & c) | (~b & d)) + 0x5a827999;
        } else if (i < 40) {
          t += (b ^ c ^ d) + 0x6ed9eba1;
        } else if (i < 60) {
          t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
        } else {
          t += (b ^ c ^ d) - 0x359d3e2a;
        }
        e = d;
        d = c;
        c = (b << 30) | (b >>> 2);
        b = a;
        a = t;
      }
      H[0] = (H[0] + a) | 0;
      H[1] = (H[1] + b) | 0;
      H[2] = (H[2] + c) | 0;
      H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0;
    },
    _doFinalize: function () {
      var data = this._data;
      var dataWords = data.words;
      var nBitsTotal = this._nDataBytes * 8;
      var nBitsLeft = data.sigBytes * 8;
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(
        nBitsTotal / 0x100000000
      );
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
      data.sigBytes = dataWords.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var clone = Hasher.clone.call(this);
      clone._hash = this._hash.clone();
      return clone;
    },
  }));
  C.SHA1 = Hasher._createHelper(SHA1);
  C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
})();
function Arcfour() {
  this.i = 0;
  this.j = 0;
  this.S = new Array();
}
function ARC4init(key) {
  var i, j, t;
  for (i = 0; i < 256; ++i) this.S[i] = i;
  j = 0;
  for (i = 0; i < 256; ++i) {
    j = (j + this.S[i] + key[i % key.length]) & 255;
    t = this.S[i];
    this.S[i] = this.S[j];
    this.S[j] = t;
  }
  this.i = 0;
  this.j = 0;
}
function ARC4next() {
  var t;
  this.i = (this.i + 1) & 255;
  this.j = (this.j + this.S[this.i]) & 255;
  t = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = t;
  return this.S[(t + this.S[this.i]) & 255];
}
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
function prng_newstate() {
  return new Arcfour();
}
var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
function rng_seed_int(x) {
  rng_pool[rng_pptr++] ^= x & 255;
  rng_pool[rng_pptr++] ^= (x >> 8) & 255;
  rng_pool[rng_pptr++] ^= (x >> 16) & 255;
  rng_pool[rng_pptr++] ^= (x >> 24) & 255;
  if (rng_pptr >= rng_psize) rng_pptr -= rng_psize;
}
function rng_seed_time() {
  rng_seed_int(new Date().getTime());
}
if (rng_pool == null) {
  rng_pool = new Array();
  rng_pptr = 0;
  var t;
  if (
    navigator.appName == "Netscape" &&
    navigator.appVersion < "5" &&
    window.crypto
  ) {
    var z = window.crypto.random(32);
    for (t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
  }
  while (rng_pptr < rng_psize) {
    t = Math.floor(65536 * Math.random());
    rng_pool[rng_pptr++] = t >>> 8;
    rng_pool[rng_pptr++] = t & 255;
  }
  rng_pptr = 0;
  rng_seed_time();
}
function rng_get_byte() {
  if (rng_state == null) {
    rng_seed_time();
    rng_state = prng_newstate();
    rng_state.init(rng_pool);
    for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
      rng_pool[rng_pptr] = 0;
    rng_pptr = 0;
  }
  return rng_state.next();
}
function rng_get_bytes(ba) {
  var i;
  for (i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
}
function SecureRandom() {}
SecureRandom.prototype.nextBytes = rng_get_bytes;
var _RE_HEXDECONLY = new RegExp("");
_RE_HEXDECONLY.compile("[^0-9a-f]", "gi");
function _rsasign_getHexPaddedDigestInfoForString(s, keySize, hashAlg) {
  var hashFunc = function (s) {
    return KJUR.crypto.Util.hashString(s, hashAlg);
  };
  var sHashHex = hashFunc(s);
  return KJUR.crypto.Util.getPaddedDigestInfoHex(sHashHex, hashAlg, keySize);
}
function _zeroPaddingOfSignature(hex, bitLength) {
  var s = "";
  var nZero = bitLength / 4 - hex.length;
  for (var i = 0; i < nZero; i++) {
    s = s + "0";
  }
  return s + hex;
}
function _rsasign_signString(s, hashAlg) {
  var hashFunc = function (s) {
    return KJUR.crypto.Util.hashString(s, hashAlg);
  };
  var sHashHex = hashFunc(s);
  return this.signWithMessageHash(sHashHex, hashAlg);
}
function _rsasign_signWithMessageHash(sHashHex, hashAlg) {
  var hPM = KJUR.crypto.Util.getPaddedDigestInfoHex(
    sHashHex,
    hashAlg,
    this.n.bitLength()
  );
  var biPaddedMessage = parseBigInt(hPM, 16);
  var biSign = this.doPrivate(biPaddedMessage);
  var hexSign = biSign.toString(16);
  return _zeroPaddingOfSignature(hexSign, this.n.bitLength());
}
function _rsasign_signStringWithSHA1(s) {
  return _rsasign_signString.call(this, s, "sha1");
}
function _rsasign_signStringWithSHA256(s) {
  return _rsasign_signString.call(this, s, "sha256");
}
function pss_mgf1_str(seed, len, hash) {
  var mask = "",
    i = 0;
  while (mask.length < len) {
    mask += hextorstr(
      hash(
        rstrtohex(
          seed +
            String.fromCharCode.apply(String, [
              (i & 0xff000000) >> 24,
              (i & 0x00ff0000) >> 16,
              (i & 0x0000ff00) >> 8,
              i & 0x000000ff,
            ])
        )
      )
    );
    i += 1;
  }
  return mask;
}
function _rsasign_signStringPSS(s, hashAlg, sLen) {
  var hashFunc = function (sHex) {
    return KJUR.crypto.Util.hashHex(sHex, hashAlg);
  };
  var hHash = hashFunc(rstrtohex(s));
  if (sLen === undefined) sLen = -1;
  return this.signWithMessageHashPSS(hHash, hashAlg, sLen);
}
function _rsasign_signWithMessageHashPSS(hHash, hashAlg, sLen) {
  var mHash = hextorstr(hHash);
  var hLen = mHash.length;
  var emBits = this.n.bitLength() - 1;
  var emLen = Math.ceil(emBits / 8);
  var i;
  var hashFunc = function (sHex) {
    return KJUR.crypto.Util.hashHex(sHex, hashAlg);
  };
  if (sLen === -1 || sLen === undefined) {
    sLen = hLen;
  } else if (sLen === -2) {
    sLen = emLen - hLen - 2;
  } else if (sLen < -2) {
    throw "invalid salt length";
  }
  if (emLen < hLen + sLen + 2) {
    throw "data too long";
  }
  var salt = "";
  if (sLen > 0) {
    salt = new Array(sLen);
    new SecureRandom().nextBytes(salt);
    salt = String.fromCharCode.apply(String, salt);
  }
  var H = hextorstr(
    hashFunc(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00" + mHash + salt))
  );
  var PS = [];
  for (i = 0; i < emLen - sLen - hLen - 2; i += 1) {
    PS[i] = 0x00;
  }
  var DB = String.fromCharCode.apply(String, PS) + "\x01" + salt;
  var dbMask = pss_mgf1_str(H, DB.length, hashFunc);
  var maskedDB = [];
  for (i = 0; i < DB.length; i += 1) {
    maskedDB[i] = DB.charCodeAt(i) ^ dbMask.charCodeAt(i);
  }
  var mask = (0xff00 >> (8 * emLen - emBits)) & 0xff;
  maskedDB[0] &= ~mask;
  for (i = 0; i < hLen; i++) {
    maskedDB.push(H.charCodeAt(i));
  }
  maskedDB.push(0xbc);
  return _zeroPaddingOfSignature(
    this.doPrivate(new BigInteger(maskedDB)).toString(16),
    this.n.bitLength()
  );
}
function _rsasign_getDecryptSignatureBI(biSig, hN, hE) {
  var rsa = new RSAKey();
  rsa.setPublic(hN, hE);
  var biDecryptedSig = rsa.doPublic(biSig);
  return biDecryptedSig;
}
function _rsasign_getHexDigestInfoFromSig(biSig, hN, hE) {
  var biDecryptedSig = _rsasign_getDecryptSignatureBI(biSig, hN, hE);
  var hDigestInfo = biDecryptedSig.toString(16).replace(/^1f+00/, "");
  return hDigestInfo;
}
function _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo) {
  for (var algName in KJUR.crypto.Util.DIGESTINFOHEAD) {
    var head = KJUR.crypto.Util.DIGESTINFOHEAD[algName];
    var len = head.length;
    if (hDigestInfo.substring(0, len) == head) {
      var a = [algName, hDigestInfo.substring(len)];
      return a;
    }
  }
  return [];
}
function _rsasign_verifySignatureWithArgs(sMsg, biSig, hN, hE) {
  var hDigestInfo = _rsasign_getHexDigestInfoFromSig(biSig, hN, hE);
  var digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo);
  if (digestInfoAry.length == 0) return false;
  var algName = digestInfoAry[0];
  var diHashValue = digestInfoAry[1];
  var ff = function (s) {
    return KJUR.crypto.Util.hashString(s, algName);
  };
  var msgHashValue = ff(sMsg);
  return diHashValue == msgHashValue;
}
function _rsasign_verifyHexSignatureForMessage(hSig, sMsg) {
  var biSig = parseBigInt(hSig, 16);
  var result = _rsasign_verifySignatureWithArgs(
    sMsg,
    biSig,
    this.n.toString(16),
    this.e.toString(16)
  );
  return result;
}
function _rsasign_verifyString(sMsg, hSig) {
  hSig = hSig.replace(_RE_HEXDECONLY, "");
  hSig = hSig.replace(/[ \n]+/g, "");
  var biSig = parseBigInt(hSig, 16);
  if (biSig.bitLength() > this.n.bitLength()) return 0;
  var biDecryptedSig = this.doPublic(biSig);
  var hDigestInfo = biDecryptedSig.toString(16).replace(/^1f+00/, "");
  var digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo);
  if (digestInfoAry.length == 0) return false;
  var algName = digestInfoAry[0];
  var diHashValue = digestInfoAry[1];
  var ff = function (s) {
    return KJUR.crypto.Util.hashString(s, algName);
  };
  var msgHashValue = ff(sMsg);
  return diHashValue == msgHashValue;
}
function _rsasign_verifyWithMessageHash(sHashHex, hSig) {
  hSig = hSig.replace(_RE_HEXDECONLY, "");
  hSig = hSig.replace(/[ \n]+/g, "");
  var biSig = parseBigInt(hSig, 16);
  if (biSig.bitLength() > this.n.bitLength()) return 0;
  var biDecryptedSig = this.doPublic(biSig);
  var hDigestInfo = biDecryptedSig.toString(16).replace(/^1f+00/, "");
  var digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo);
  if (digestInfoAry.length == 0) return false;
  var algName = digestInfoAry[0];
  var diHashValue = digestInfoAry[1];
  return diHashValue == sHashHex;
}
function _rsasign_verifyStringPSS(sMsg, hSig, hashAlg, sLen) {
  var hashFunc = function (sHex) {
    return KJUR.crypto.Util.hashHex(sHex, hashAlg);
  };
  var hHash = hashFunc(rstrtohex(sMsg));
  if (sLen === undefined) sLen = -1;
  return this.verifyWithMessageHashPSS(hHash, hSig, hashAlg, sLen);
}
function _rsasign_verifyWithMessageHashPSS(hHash, hSig, hashAlg, sLen) {
  var biSig = new BigInteger(hSig, 16);
  if (biSig.bitLength() > this.n.bitLength()) {
    return false;
  }
  var hashFunc = function (sHex) {
    return KJUR.crypto.Util.hashHex(sHex, hashAlg);
  };
  var mHash = hextorstr(hHash);
  var hLen = mHash.length;
  var emBits = this.n.bitLength() - 1;
  var emLen = Math.ceil(emBits / 8);
  var i;
  if (sLen === -1 || sLen === undefined) {
    sLen = hLen;
  } else if (sLen === -2) {
    sLen = emLen - hLen - 2;
  } else if (sLen < -2) {
    throw "invalid salt length";
  }
  if (emLen < hLen + sLen + 2) {
    throw "data too long";
  }
  var em = this.doPublic(biSig).toByteArray();
  for (i = 0; i < em.length; i += 1) {
    em[i] &= 0xff;
  }
  while (em.length < emLen) {
    em.unshift(0);
  }
  if (em[emLen - 1] !== 0xbc) {
    throw "encoded message does not end in 0xbc";
  }
  em = String.fromCharCode.apply(String, em);
  var maskedDB = em.substr(0, emLen - hLen - 1);
  var H = em.substr(maskedDB.length, hLen);
  var mask = (0xff00 >> (8 * emLen - emBits)) & 0xff;
  if ((maskedDB.charCodeAt(0) & mask) !== 0) {
    throw "bits beyond keysize not zero";
  }
  var dbMask = pss_mgf1_str(H, maskedDB.length, hashFunc);
  var DB = [];
  for (i = 0; i < maskedDB.length; i += 1) {
    DB[i] = maskedDB.charCodeAt(i) ^ dbMask.charCodeAt(i);
  }
  DB[0] &= ~mask;
  var checkLen = emLen - hLen - sLen - 2;
  for (i = 0; i < checkLen; i += 1) {
    if (DB[i] !== 0x00) {
      throw "leftmost octets not zero";
    }
  }
  if (DB[checkLen] !== 0x01) {
    throw "0x01 marker not found";
  }
  return (
    H ===
    hextorstr(
      hashFunc(
        rstrtohex(
          "\x00\x00\x00\x00\x00\x00\x00\x00" +
            mHash +
            String.fromCharCode.apply(String, DB.slice(-sLen))
        )
      )
    )
  );
}
RSAKey.prototype.signWithMessageHash = _rsasign_signWithMessageHash;
RSAKey.prototype.signString = _rsasign_signString;
RSAKey.prototype.signStringWithSHA1 = _rsasign_signStringWithSHA1;
RSAKey.prototype.signStringWithSHA256 = _rsasign_signStringWithSHA256;
RSAKey.prototype.sign = _rsasign_signString;
RSAKey.prototype.signWithSHA1 = _rsasign_signStringWithSHA1;
RSAKey.prototype.signWithSHA256 = _rsasign_signStringWithSHA256;
RSAKey.prototype.signWithMessageHashPSS = _rsasign_signWithMessageHashPSS;
RSAKey.prototype.signStringPSS = _rsasign_signStringPSS;
RSAKey.prototype.signPSS = _rsasign_signStringPSS;
RSAKey.SALT_LEN_HLEN = -1;
RSAKey.SALT_LEN_MAX = -2;
RSAKey.prototype.verifyWithMessageHash = _rsasign_verifyWithMessageHash;
RSAKey.prototype.verifyString = _rsasign_verifyString;
RSAKey.prototype.verifyHexSignatureForMessage =
  _rsasign_verifyHexSignatureForMessage;
RSAKey.prototype.verify = _rsasign_verifyString;
RSAKey.prototype.verifyHexSignatureForByteArrayMessage =
  _rsasign_verifyHexSignatureForMessage;
RSAKey.prototype.verifyWithMessageHashPSS = _rsasign_verifyWithMessageHashPSS;
RSAKey.prototype.verifyStringPSS = _rsasign_verifyStringPSS;
RSAKey.prototype.verifyPSS = _rsasign_verifyStringPSS;
RSAKey.SALT_LEN_RECOVER = -2;
var ASN1HEX = new (function () {})();
ASN1HEX.getByteLengthOfL_AtObj = function (s, pos) {
  if (s.substring(pos + 2, pos + 3) != "8") return 1;
  var i = parseInt(s.substring(pos + 3, pos + 4));
  if (i == 0) return -1;
  if (0 < i && i < 10) return i + 1;
  return -2;
};
ASN1HEX.getHexOfL_AtObj = function (s, pos) {
  var len = ASN1HEX.getByteLengthOfL_AtObj(s, pos);
  if (len < 1) return "";
  return s.substring(pos + 2, pos + 2 + len * 2);
};
ASN1HEX.getIntOfL_AtObj = function (s, pos) {
  var hLength = ASN1HEX.getHexOfL_AtObj(s, pos);
  if (hLength == "") return -1;
  var bi;
  if (parseInt(hLength.substring(0, 1)) < 8) {
    bi = new BigInteger(hLength, 16);
  } else {
    bi = new BigInteger(hLength.substring(2), 16);
  }
  return bi.intValue();
};
ASN1HEX.getStartPosOfV_AtObj = function (s, pos) {
  var l_len = ASN1HEX.getByteLengthOfL_AtObj(s, pos);
  if (l_len < 0) return l_len;
  return pos + (l_len + 1) * 2;
};
ASN1HEX.getHexOfV_AtObj = function (s, pos) {
  var pos1 = ASN1HEX.getStartPosOfV_AtObj(s, pos);
  var len = ASN1HEX.getIntOfL_AtObj(s, pos);
  return s.substring(pos1, pos1 + len * 2);
};
ASN1HEX.getHexOfTLV_AtObj = function (s, pos) {
  var hT = s.substr(pos, 2);
  var hL = ASN1HEX.getHexOfL_AtObj(s, pos);
  var hV = ASN1HEX.getHexOfV_AtObj(s, pos);
  return hT + hL + hV;
};
ASN1HEX.getPosOfNextSibling_AtObj = function (s, pos) {
  var pos1 = ASN1HEX.getStartPosOfV_AtObj(s, pos);
  var len = ASN1HEX.getIntOfL_AtObj(s, pos);
  return pos1 + len * 2;
};
ASN1HEX.getPosArrayOfChildren_AtObj = function (h, pos) {
  var a = new Array();
  var p0 = ASN1HEX.getStartPosOfV_AtObj(h, pos);
  if (h.substr(pos, 2) == "03") {
    a.push(p0 + 2);
  } else {
    a.push(p0);
  }
  var len = ASN1HEX.getIntOfL_AtObj(h, pos);
  var p = p0;
  var k = 0;
  while (1) {
    var pNext = ASN1HEX.getPosOfNextSibling_AtObj(h, p);
    if (pNext == null || pNext - p0 >= len * 2) break;
    if (k >= 200) break;
    a.push(pNext);
    p = pNext;
    k++;
  }
  return a;
};
ASN1HEX.getNthChildIndex_AtObj = function (h, idx, nth) {
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, idx);
  return a[nth];
};
ASN1HEX.getDecendantIndexByNthList = function (h, currentIndex, nthList) {
  if (nthList.length == 0) {
    return currentIndex;
  }
  var firstNth = nthList.shift();
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, currentIndex);
  return ASN1HEX.getDecendantIndexByNthList(h, a[firstNth], nthList);
};
ASN1HEX.getDecendantHexTLVByNthList = function (h, currentIndex, nthList) {
  var idx = ASN1HEX.getDecendantIndexByNthList(h, currentIndex, nthList);
  return ASN1HEX.getHexOfTLV_AtObj(h, idx);
};
ASN1HEX.getDecendantHexVByNthList = function (h, currentIndex, nthList) {
  var idx = ASN1HEX.getDecendantIndexByNthList(h, currentIndex, nthList);
  return ASN1HEX.getHexOfV_AtObj(h, idx);
};
ASN1HEX.getVbyList = function (h, currentIndex, nthList, checkingTag) {
  var idx = ASN1HEX.getDecendantIndexByNthList(h, currentIndex, nthList);
  if (idx === undefined) {
    throw "can't find nthList object";
  }
  if (checkingTag !== undefined) {
    if (h.substr(idx, 2) != checkingTag) {
      throw (
        "checking tag doesn't match: " + h.substr(idx, 2) + "!=" + checkingTag
      );
    }
  }
  return ASN1HEX.getHexOfV_AtObj(h, idx);
};
ASN1HEX.hextooidstr = function (hex) {
  var zeroPadding = function (s, len) {
    if (s.length >= len) return s;
    return new Array(len - s.length + 1).join("0") + s;
  };
  var a = [];
  var hex0 = hex.substr(0, 2);
  var i0 = parseInt(hex0, 16);
  a[0] = new String(Math.floor(i0 / 40));
  a[1] = new String(i0 % 40);
  var hex1 = hex.substr(2);
  var b = [];
  for (var i = 0; i < hex1.length / 2; i++) {
    b.push(parseInt(hex1.substr(i * 2, 2), 16));
  }
  var c = [];
  var cbin = "";
  for (var i = 0; i < b.length; i++) {
    if (b[i] & 0x80) {
      cbin = cbin + zeroPadding((b[i] & 0x7f).toString(2), 7);
    } else {
      cbin = cbin + zeroPadding((b[i] & 0x7f).toString(2), 7);
      c.push(new String(parseInt(cbin, 2)));
      cbin = "";
    }
  }
  var s = a.join(".");
  if (c.length > 0) s = s + "." + c.join(".");
  return s;
};
ASN1HEX.dump = function (hexOrObj, flags, idx, indent) {
  var hex = hexOrObj;
  if (hexOrObj instanceof KJUR.asn1.ASN1Object) hex = hexOrObj.getEncodedHex();
  var _skipLongHex = function (hex, limitNumOctet) {
    if (hex.length <= limitNumOctet * 2) {
      return hex;
    } else {
      var s =
        hex.substr(0, limitNumOctet) +
        "..(total " +
        hex.length / 2 +
        "bytes).." +
        hex.substr(hex.length - limitNumOctet, limitNumOctet);
      return s;
    }
  };
  if (flags === undefined) flags = { ommit_long_octet: 32 };
  if (idx === undefined) idx = 0;
  if (indent === undefined) indent = "";
  var skipLongHex = flags.ommit_long_octet;
  if (hex.substr(idx, 2) == "01") {
    var v = ASN1HEX.getHexOfV_AtObj(hex, idx);
    if (v == "00") {
      return indent + "BOOLEAN FALSE\n";
    } else {
      return indent + "BOOLEAN TRUE\n";
    }
  }
  if (hex.substr(idx, 2) == "02") {
    var v = ASN1HEX.getHexOfV_AtObj(hex, idx);
    return indent + "INTEGER " + _skipLongHex(v, skipLongHex) + "\n";
  }
  if (hex.substr(idx, 2) == "03") {
    var v = ASN1HEX.getHexOfV_AtObj(hex, idx);
    return indent + "BITSTRING " + _skipLongHex(v, skipLongHex) + "\n";
  }
  if (hex.substr(idx, 2) == "04") {
    var v = ASN1HEX.getHexOfV_AtObj(hex, idx);
    if (ASN1HEX.isASN1HEX(v)) {
      var s = indent + "OCTETSTRING, encapsulates\n";
      s = s + ASN1HEX.dump(v, flags, 0, indent + "  ");
      return s;
    } else {
      return indent + "OCTETSTRING " + _skipLongHex(v, skipLongHex) + "\n";
    }
  }
  if (hex.substr(idx, 2) == "05") {
    return indent + "NULL\n";
  }
  if (hex.substr(idx, 2) == "06") {
    var hV = ASN1HEX.getHexOfV_AtObj(hex, idx);
    var oidDot = KJUR.asn1.ASN1Util.oidHexToInt(hV);
    var oidName = KJUR.asn1.x509.OID.oid2name(oidDot);
    var oidSpc = oidDot.replace(/\./g, " ");
    if (oidName != "") {
      return indent + "ObjectIdentifier " + oidName + " (" + oidSpc + ")\n";
    } else {
      return indent + "ObjectIdentifier (" + oidSpc + ")\n";
    }
  }
  if (hex.substr(idx, 2) == "0c") {
    return (
      indent +
      "UTF8String '" +
      hextoutf8(ASN1HEX.getHexOfV_AtObj(hex, idx)) +
      "'\n"
    );
  }
  if (hex.substr(idx, 2) == "13") {
    return (
      indent +
      "PrintableString '" +
      hextoutf8(ASN1HEX.getHexOfV_AtObj(hex, idx)) +
      "'\n"
    );
  }
  if (hex.substr(idx, 2) == "14") {
    return (
      indent +
      "TeletexString '" +
      hextoutf8(ASN1HEX.getHexOfV_AtObj(hex, idx)) +
      "'\n"
    );
  }
  if (hex.substr(idx, 2) == "16") {
    return (
      indent +
      "IA5String '" +
      hextoutf8(ASN1HEX.getHexOfV_AtObj(hex, idx)) +
      "'\n"
    );
  }
  if (hex.substr(idx, 2) == "17") {
    return (
      indent + "UTCTime " + hextoutf8(ASN1HEX.getHexOfV_AtObj(hex, idx)) + "\n"
    );
  }
  if (hex.substr(idx, 2) == "18") {
    return (
      indent +
      "GeneralizedTime " +
      hextoutf8(ASN1HEX.getHexOfV_AtObj(hex, idx)) +
      "\n"
    );
  }
  if (hex.substr(idx, 2) == "30") {
    if (hex.substr(idx, 4) == "3000") {
      return indent + "SEQUENCE {}\n";
    }
    var s = indent + "SEQUENCE\n";
    var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(hex, idx);
    var flagsTemp = flags;
    if (
      (aIdx.length == 2 || aIdx.length == 3) &&
      hex.substr(aIdx[0], 2) == "06" &&
      hex.substr(aIdx[aIdx.length - 1], 2) == "04"
    ) {
      var oidHex = ASN1HEX.getHexOfV_AtObj(hex, aIdx[0]);
      var oidDot = KJUR.asn1.ASN1Util.oidHexToInt(oidHex);
      var oidName = KJUR.asn1.x509.OID.oid2name(oidDot);
      var flagsClone = JSON.parse(JSON.stringify(flags));
      flagsClone.x509ExtName = oidName;
      flagsTemp = flagsClone;
    }
    for (var i = 0; i < aIdx.length; i++) {
      s = s + ASN1HEX.dump(hex, flagsTemp, aIdx[i], indent + "  ");
    }
    return s;
  }
  if (hex.substr(idx, 2) == "31") {
    var s = indent + "SET\n";
    var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(hex, idx);
    for (var i = 0; i < aIdx.length; i++) {
      s = s + ASN1HEX.dump(hex, flags, aIdx[i], indent + "  ");
    }
    return s;
  }
  var tag = parseInt(hex.substr(idx, 2), 16);
  if ((tag & 128) != 0) {
    var tagNumber = tag & 31;
    if ((tag & 32) != 0) {
      var s = indent + "[" + tagNumber + "]\n";
      var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(hex, idx);
      for (var i = 0; i < aIdx.length; i++) {
        s = s + ASN1HEX.dump(hex, flags, aIdx[i], indent + "  ");
      }
      return s;
    } else {
      var v = ASN1HEX.getHexOfV_AtObj(hex, idx);
      if (v.substr(0, 8) == "68747470") {
        v = hextoutf8(v);
      }
      if (flags.x509ExtName === "subjectAltName" && tagNumber == 2) {
        v = hextoutf8(v);
      }
      var s = indent + "[" + tagNumber + "] " + v + "\n";
      return s;
    }
  }
  return (
    indent +
    "UNKNOWN(" +
    hex.substr(idx, 2) +
    ") " +
    ASN1HEX.getHexOfV_AtObj(hex, idx) +
    "\n"
  );
};
ASN1HEX.isASN1HEX = function (hex) {
  if (hex.length % 2 == 1) return false;
  var intL = ASN1HEX.getIntOfL_AtObj(hex, 0);
  var tV = hex.substr(0, 2);
  var lV = ASN1HEX.getHexOfL_AtObj(hex, 0);
  var hVLength = hex.length - tV.length - lV.length;
  if (hVLength == intL * 2) return true;
  return false;
};
function X509() {
  this.subjectPublicKeyRSA = null;
  this.subjectPublicKeyRSA_hN = null;
  this.subjectPublicKeyRSA_hE = null;
  this.hex = null;
  this.getSerialNumberHex = function () {
    return ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [0, 1]);
  };
  this.getSignatureAlgorithmField = function () {
    var sigAlgOidHex = ASN1HEX.getDecendantHexVByNthList(
      this.hex,
      0,
      [0, 2, 0]
    );
    var sigAlgOidInt = KJUR.asn1.ASN1Util.oidHexToInt(sigAlgOidHex);
    var sigAlgName = KJUR.asn1.x509.OID.oid2name(sigAlgOidInt);
    return sigAlgName;
  };
  this.getIssuerHex = function () {
    return ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [0, 3]);
  };
  this.getIssuerString = function () {
    return X509.hex2dn(
      ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [0, 3])
    );
  };
  this.getSubjectHex = function () {
    return ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [0, 5]);
  };
  this.getSubjectString = function () {
    return X509.hex2dn(
      ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [0, 5])
    );
  };
  this.getNotBefore = function () {
    var s = ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [0, 4, 0]);
    s = s.replace(/(..)/g, "%$1");
    s = decodeURIComponent(s);
    return s;
  };
  this.getNotAfter = function () {
    var s = ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [0, 4, 1]);
    s = s.replace(/(..)/g, "%$1");
    s = decodeURIComponent(s);
    return s;
  };
  this.readCertPEM = function (sCertPEM) {
    var hCert = X509.pemToHex(sCertPEM);
    var a = X509.getPublicKeyHexArrayFromCertHex(hCert);
    var rsa = new RSAKey();
    rsa.setPublic(a[0], a[1]);
    this.subjectPublicKeyRSA = rsa;
    this.subjectPublicKeyRSA_hN = a[0];
    this.subjectPublicKeyRSA_hE = a[1];
    this.hex = hCert;
  };
  this.readCertPEMWithoutRSAInit = function (sCertPEM) {
    var hCert = X509.pemToHex(sCertPEM);
    var a = X509.getPublicKeyHexArrayFromCertHex(hCert);
    if (typeof this.subjectPublicKeyRSA.setPublic === "function") {
      this.subjectPublicKeyRSA.setPublic(a[0], a[1]);
    }
    this.subjectPublicKeyRSA_hN = a[0];
    this.subjectPublicKeyRSA_hE = a[1];
    this.hex = hCert;
  };
  this.getInfo = function () {
    var s = "Basic Fields\n";
    s += "  serial number: " + this.getSerialNumberHex() + "\n";
    s += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n";
    s += "  issuer: " + this.getIssuerString() + "\n";
    s += "  notBefore: " + this.getNotBefore() + "\n";
    s += "  notAfter: " + this.getNotAfter() + "\n";
    s += "  subject: " + this.getSubjectString() + "\n";
    s += "  subject public key info: \n";
    var pSPKI = X509.getSubjectPublicKeyInfoPosFromCertHex(this.hex);
    var hSPKI = ASN1HEX.getHexOfTLV_AtObj(this.hex, pSPKI);
    var keyObj = KEYUTIL.getKey(hSPKI, null, "pkcs8pub");
    if (keyObj instanceof RSAKey) {
      s += "    key algorithm: RSA\n";
      s += "    n=" + keyObj.n.toString(16).substr(0, 16) + "...\n";
      s += "    e=" + keyObj.e.toString(16) + "\n";
    }
    s += "X509v3 Extensions:\n";
    var aExt = X509.getV3ExtInfoListOfCertHex(this.hex);
    for (var i = 0; i < aExt.length; i++) {
      var info = aExt[i];
      var extName = KJUR.asn1.x509.OID.oid2name(info["oid"]);
      if (extName === "") extName = info["oid"];
      var critical = "";
      if (info["critical"] === true) critical = "CRITICAL";
      s += "  " + extName + " " + critical + ":\n";
      if (extName === "basicConstraints") {
        var bc = X509.getExtBasicConstraints(this.hex);
        if (bc.cA === undefined) {
          s += "    {}\n";
        } else {
          s += "    cA=true";
          if (bc.pathLen !== undefined) s += ", pathLen=" + bc.pathLen;
          s += "\n";
        }
      } else if (extName === "keyUsage") {
        s += "    " + X509.getExtKeyUsageString(this.hex) + "\n";
      } else if (extName === "subjectKeyIdentifier") {
        s += "    " + X509.getExtSubjectKeyIdentifier(this.hex) + "\n";
      } else if (extName === "authorityKeyIdentifier") {
        var akid = X509.getExtAuthorityKeyIdentifier(this.hex);
        if (akid.kid !== undefined) s += "    kid=" + akid.kid + "\n";
      } else if (extName === "extKeyUsage") {
        var eku = X509.getExtExtKeyUsageName(this.hex);
        s += "    " + eku.join(", ") + "\n";
      } else if (extName === "subjectAltName") {
        var san = X509.getExtSubjectAltName(this.hex);
        s += "    " + san.join(", ") + "\n";
      } else if (extName === "cRLDistributionPoints") {
        var cdp = X509.getExtCRLDistributionPointsURI(this.hex);
        s += "    " + cdp + "\n";
      } else if (extName === "authorityInfoAccess") {
        var aia = X509.getExtAIAInfo(this.hex);
        if (aia.ocsp !== undefined)
          s += "    ocsp: " + aia.ocsp.join(",") + "\n";
        if (aia.caissuer !== undefined)
          s += "    caissuer: " + aia.caissuer.join(",") + "\n";
      }
    }
    s +=
      "signature algorithm: " + X509.getSignatureAlgorithmName(this.hex) + "\n";
    s +=
      "signature: " +
      X509.getSignatureValueHex(this.hex).substr(0, 16) +
      "...\n";
    return s;
  };
}
X509.pemToBase64 = function (sCertPEM) {
  var s = sCertPEM;
  s = s.replace("-----BEGIN CERTIFICATE-----", "");
  s = s.replace("-----END CERTIFICATE-----", "");
  s = s.replace(/[ \n]+/g, "");
  return s;
};
X509.pemToHex = function (sCertPEM) {
  var b64Cert = X509.pemToBase64(sCertPEM);
  var hCert = b64tohex(b64Cert);
  return hCert;
};
X509.getSubjectPublicKeyPosFromCertHex = function (hCert) {
  var pInfo = X509.getSubjectPublicKeyInfoPosFromCertHex(hCert);
  if (pInfo == -1) return -1;
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pInfo);
  if (a.length != 2) return -1;
  var pBitString = a[1];
  if (hCert.substring(pBitString, pBitString + 2) != "03") return -1;
  var pBitStringV = ASN1HEX.getStartPosOfV_AtObj(hCert, pBitString);
  if (hCert.substring(pBitStringV, pBitStringV + 2) != "00") return -1;
  return pBitStringV + 2;
};
X509.getSubjectPublicKeyInfoPosFromCertHex = function (hCert) {
  var pTbsCert = ASN1HEX.getStartPosOfV_AtObj(hCert, 0);
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pTbsCert);
  if (a.length < 1) return -1;
  if (hCert.substring(a[0], a[0] + 10) == "a003020102") {
    if (a.length < 6) return -1;
    return a[6];
  } else {
    if (a.length < 5) return -1;
    return a[5];
  }
};
X509.getPublicKeyHexArrayFromCertHex = function (hCert) {
  var p = X509.getSubjectPublicKeyPosFromCertHex(hCert);
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, p);
  if (a.length != 2) return [];
  var hN = ASN1HEX.getHexOfV_AtObj(hCert, a[0]);
  var hE = ASN1HEX.getHexOfV_AtObj(hCert, a[1]);
  if (hN != null && hE != null) {
    return [hN, hE];
  } else {
    return [];
  }
};
X509.getHexTbsCertificateFromCert = function (hCert) {
  var pTbsCert = ASN1HEX.getStartPosOfV_AtObj(hCert, 0);
  return pTbsCert;
};
X509.getPublicKeyHexArrayFromCertPEM = function (sCertPEM) {
  var hCert = X509.pemToHex(sCertPEM);
  var a = X509.getPublicKeyHexArrayFromCertHex(hCert);
  return a;
};
X509.hex2dn = function (hex, idx) {
  if (idx === undefined) idx = 0;
  if (hex.substr(idx, 2) !== "30") throw "malformed DN";
  var a = new Array();
  var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(hex, idx);
  for (var i = 0; i < aIdx.length; i++) {
    a.push(X509.hex2rdn(hex, aIdx[i]));
  }
  a = a.map(function (s) {
    return s.replace("/", "\\/");
  });
  return "/" + a.join("/");
};
X509.hex2rdn = function (hex, idx) {
  if (idx === undefined) idx = 0;
  if (hex.substr(idx, 2) !== "31") throw "malformed RDN";
  var a = new Array();
  var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(hex, idx);
  for (var i = 0; i < aIdx.length; i++) {
    a.push(X509.hex2attrTypeValue(hex, aIdx[i]));
  }
  a = a.map(function (s) {
    return s.replace("+", "\\+");
  });
  return a.join("+");
};
X509.hex2attrTypeValue = function (hex, idx) {
  if (idx === undefined) idx = 0;
  if (hex.substr(idx, 2) !== "30") throw "malformed attribute type and value";
  var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(hex, idx);
  if (aIdx.length !== 2 || hex.substr(aIdx[0], 2) !== "06")
    "malformed attribute type and value";
  var oidHex = ASN1HEX.getHexOfV_AtObj(hex, aIdx[0]);
  var oidInt = KJUR.asn1.ASN1Util.oidHexToInt(oidHex);
  var atype = KJUR.asn1.x509.OID.oid2atype(oidInt);
  var hV = ASN1HEX.getHexOfV_AtObj(hex, aIdx[1]);
  var rawV = hextorstr(hV);
  return atype + "=" + rawV;
};
X509.getPublicKeyFromCertPEM = function (sCertPEM) {
  var info = X509.getPublicKeyInfoPropOfCertPEM(sCertPEM);
  if (info.algoid == "2a864886f70d010101") {
    var aRSA = KEYUTIL.parsePublicRawRSAKeyHex(info.keyhex);
    var key = new RSAKey();
    key.setPublic(aRSA.n, aRSA.e);
    return key;
  } else if (info.algoid == "2a8648ce3d0201") {
    var curveName = KJUR.crypto.OID.oidhex2name[info.algparam];
    var key = new KJUR.crypto.ECDSA({ curve: curveName, info: info.keyhex });
    key.setPublicKeyHex(info.keyhex);
    return key;
  } else if (info.algoid == "2a8648ce380401") {
    var p = ASN1HEX.getVbyList(info.algparam, 0, [0], "02");
    var q = ASN1HEX.getVbyList(info.algparam, 0, [1], "02");
    var g = ASN1HEX.getVbyList(info.algparam, 0, [2], "02");
    var y = ASN1HEX.getHexOfV_AtObj(info.keyhex, 0);
    y = y.substr(2);
    var key = new KJUR.crypto.DSA();
    key.setPublic(
      new BigInteger(p, 16),
      new BigInteger(q, 16),
      new BigInteger(g, 16),
      new BigInteger(y, 16)
    );
    return key;
  } else {
    throw "unsupported key";
  }
};
X509.getPublicKeyInfoPropOfCertPEM = function (sCertPEM) {
  var result = {};
  result.algparam = null;
  var hCert = X509.pemToHex(sCertPEM);
  var a1 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, 0);
  if (a1.length != 3) throw "malformed X.509 certificate PEM (code:001)";
  if (hCert.substr(a1[0], 2) != "30")
    throw "malformed X.509 certificate PEM (code:002)";
  var a2 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a1[0]);
  var idx_spi = 6;
  if (hCert.substr(a2[0], 2) !== "a0") idx_spi = 5;
  if (a2.length < idx_spi + 1)
    throw "malformed X.509 certificate PEM (code:003)";
  var a3 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a2[idx_spi]);
  if (a3.length != 2) throw "malformed X.509 certificate PEM (code:004)";
  var a4 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a3[0]);
  if (a4.length != 2) throw "malformed X.509 certificate PEM (code:005)";
  result.algoid = ASN1HEX.getHexOfV_AtObj(hCert, a4[0]);
  if (hCert.substr(a4[1], 2) == "06") {
    result.algparam = ASN1HEX.getHexOfV_AtObj(hCert, a4[1]);
  } else if (hCert.substr(a4[1], 2) == "30") {
    result.algparam = ASN1HEX.getHexOfTLV_AtObj(hCert, a4[1]);
  }
  if (hCert.substr(a3[1], 2) != "03")
    throw "malformed X.509 certificate PEM (code:006)";
  var unusedBitAndKeyHex = ASN1HEX.getHexOfV_AtObj(hCert, a3[1]);
  result.keyhex = unusedBitAndKeyHex.substr(2);
  return result;
};
X509.getPublicKeyInfoPosOfCertHEX = function (hCert) {
  var a1 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, 0);
  if (a1.length != 3) throw "malformed X.509 certificate PEM (code:001)";
  if (hCert.substr(a1[0], 2) != "30")
    throw "malformed X.509 certificate PEM (code:002)";
  var a2 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a1[0]);
  if (a2.length < 7) throw "malformed X.509 certificate PEM (code:003)";
  return a2[6];
};
X509.getV3ExtInfoListOfCertHex = function (hCert) {
  var a1 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, 0);
  if (a1.length != 3) throw "malformed X.509 certificate PEM (code:001)";
  if (hCert.substr(a1[0], 2) != "30")
    throw "malformed X.509 certificate PEM (code:002)";
  var a2 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a1[0]);
  if (a2.length < 8) throw "malformed X.509 certificate PEM (code:003)";
  if (hCert.substr(a2[7], 2) != "a3")
    throw "malformed X.509 certificate PEM (code:004)";
  var a3 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a2[7]);
  if (a3.length != 1) throw "malformed X.509 certificate PEM (code:005)";
  if (hCert.substr(a3[0], 2) != "30")
    throw "malformed X.509 certificate PEM (code:006)";
  var a4 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a3[0]);
  var numExt = a4.length;
  var aInfo = new Array(numExt);
  for (var i = 0; i < numExt; i++) {
    aInfo[i] = X509.getV3ExtItemInfo_AtObj(hCert, a4[i]);
  }
  return aInfo;
};
X509.getV3ExtItemInfo_AtObj = function (hCert, pos) {
  var info = {};
  info.posTLV = pos;
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pos);
  if (a.length != 2 && a.length != 3) throw "malformed X.509v3 Ext (code:001)";
  if (hCert.substr(a[0], 2) != "06") throw "malformed X.509v3 Ext (code:002)";
  var valueHex = ASN1HEX.getHexOfV_AtObj(hCert, a[0]);
  info.oid = ASN1HEX.hextooidstr(valueHex);
  info.critical = false;
  if (a.length == 3) info.critical = true;
  var posExtV = a[a.length - 1];
  if (hCert.substr(posExtV, 2) != "04")
    throw "malformed X.509v3 Ext (code:003)";
  info.posV = ASN1HEX.getStartPosOfV_AtObj(hCert, posExtV);
  return info;
};
X509.getHexOfTLV_V3ExtValue = function (hCert, oidOrName) {
  var pos = X509.getPosOfTLV_V3ExtValue(hCert, oidOrName);
  if (pos == -1) return null;
  return ASN1HEX.getHexOfTLV_AtObj(hCert, pos);
};
X509.getHexOfV_V3ExtValue = function (hCert, oidOrName) {
  var pos = X509.getPosOfTLV_V3ExtValue(hCert, oidOrName);
  if (pos == -1) return null;
  return ASN1HEX.getHexOfV_AtObj(hCert, pos);
};
X509.getPosOfTLV_V3ExtValue = function (hCert, oidOrName) {
  var oid = oidOrName;
  if (!oidOrName.match(/^[0-9.]+$/))
    oid = KJUR.asn1.x509.OID.name2oid(oidOrName);
  if (oid == "") return -1;
  var infoList = X509.getV3ExtInfoListOfCertHex(hCert);
  for (var i = 0; i < infoList.length; i++) {
    var info = infoList[i];
    if (info.oid == oid) return info.posV;
  }
  return -1;
};
X509.getExtBasicConstraints = function (hCert) {
  var hBC = X509.getHexOfV_V3ExtValue(hCert, "basicConstraints");
  if (hBC === null) return null;
  if (hBC === "") return {};
  if (hBC === "0101ff") return { cA: true };
  if (hBC.substr(0, 8) === "0101ff02") {
    var pathLexHex = ASN1HEX.getHexOfV_AtObj(hBC, 6);
    var pathLen = parseInt(pathLexHex, 16);
    return { cA: true, pathLen: pathLen };
  }
  throw "unknown error";
};
X509.KEYUSAGE_NAME = [
  "digitalSignature",
  "nonRepudiation",
  "keyEncipherment",
  "dataEncipherment",
  "keyAgreement",
  "keyCertSign",
  "cRLSign",
  "encipherOnly",
  "decipherOnly",
];
X509.getExtKeyUsageBin = function (hCert) {
  var hKeyUsage = X509.getHexOfV_V3ExtValue(hCert, "keyUsage");
  if (hKeyUsage == "") return "";
  if (hKeyUsage.length % 2 != 0 || hKeyUsage.length <= 2)
    throw "malformed key usage value";
  var unusedBits = parseInt(hKeyUsage.substr(0, 2));
  var bKeyUsage = parseInt(hKeyUsage.substr(2), 16).toString(2);
  return bKeyUsage.substr(0, bKeyUsage.length - unusedBits);
};
X509.getExtKeyUsageString = function (hCert) {
  var bKeyUsage = X509.getExtKeyUsageBin(hCert);
  var a = new Array();
  for (var i = 0; i < bKeyUsage.length; i++) {
    if (bKeyUsage.substr(i, 1) == "1") a.push(X509.KEYUSAGE_NAME[i]);
  }
  return a.join(",");
};
X509.getExtSubjectKeyIdentifier = function (hCert) {
  var hSKID = X509.getHexOfV_V3ExtValue(hCert, "subjectKeyIdentifier");
  return hSKID;
};
X509.getExtAuthorityKeyIdentifier = function (hCert) {
  var result = {};
  var hAKID = X509.getHexOfTLV_V3ExtValue(hCert, "authorityKeyIdentifier");
  if (hAKID === null) return null;
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(hAKID, 0);
  for (var i = 0; i < a.length; i++) {
    if (hAKID.substr(a[i], 2) === "80")
      result.kid = ASN1HEX.getHexOfV_AtObj(hAKID, a[i]);
  }
  return result;
};
X509.getExtExtKeyUsageName = function (hCert) {
  var result = new Array();
  var h = X509.getHexOfTLV_V3ExtValue(hCert, "extKeyUsage");
  if (h === null) return null;
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, 0);
  for (var i = 0; i < a.length; i++) {
    var hex = ASN1HEX.getHexOfV_AtObj(h, a[i]);
    var oid = KJUR.asn1.ASN1Util.oidHexToInt(hex);
    var name = KJUR.asn1.x509.OID.oid2name(oid);
    result.push(name);
  }
  return result;
};
X509.getExtSubjectAltName = function (hCert) {
  var result = new Array();
  var h = X509.getHexOfTLV_V3ExtValue(hCert, "subjectAltName");
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, 0);
  for (var i = 0; i < a.length; i++) {
    if (h.substr(a[i], 2) === "82") {
      var fqdn = hextoutf8(ASN1HEX.getHexOfV_AtObj(h, a[i]));
      result.push(fqdn);
    }
  }
  return result;
};
X509.getExtCRLDistributionPointsURI = function (hCert) {
  var result = new Array();
  var h = X509.getHexOfTLV_V3ExtValue(hCert, "cRLDistributionPoints");
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, 0);
  for (var i = 0; i < a.length; i++) {
    var hDP = ASN1HEX.getHexOfTLV_AtObj(h, a[i]);
    var a1 = ASN1HEX.getPosArrayOfChildren_AtObj(hDP, 0);
    for (var j = 0; j < a1.length; j++) {
      if (hDP.substr(a1[j], 2) === "a0") {
        var hDPN = ASN1HEX.getHexOfV_AtObj(hDP, a1[j]);
        if (hDPN.substr(0, 2) === "a0") {
          var hFullName = ASN1HEX.getHexOfV_AtObj(hDPN, 0);
          if (hFullName.substr(0, 2) === "86") {
            var hURI = ASN1HEX.getHexOfV_AtObj(hFullName, 0);
            var uri = hextoutf8(hURI);
            result.push(uri);
          }
        }
      }
    }
  }
  return result;
};
X509.getExtAIAInfo = function (hCert) {
  var result = {};
  result.ocsp = [];
  result.caissuer = [];
  var pos1 = X509.getPosOfTLV_V3ExtValue(hCert, "authorityInfoAccess");
  if (pos1 == -1) return null;
  if (hCert.substr(pos1, 2) != "30") throw "malformed AIA Extn Value";
  var posAccDescList = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pos1);
  for (var i = 0; i < posAccDescList.length; i++) {
    var p = posAccDescList[i];
    var posAccDescChild = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, p);
    if (posAccDescChild.length != 2)
      throw "malformed AccessDescription of AIA Extn";
    var pOID = posAccDescChild[0];
    var pName = posAccDescChild[1];
    if (ASN1HEX.getHexOfV_AtObj(hCert, pOID) == "2b06010505073001") {
      if (hCert.substr(pName, 2) == "86") {
        result.ocsp.push(hextoutf8(ASN1HEX.getHexOfV_AtObj(hCert, pName)));
      }
    }
    if (ASN1HEX.getHexOfV_AtObj(hCert, pOID) == "2b06010505073002") {
      if (hCert.substr(pName, 2) == "86") {
        result.caissuer.push(hextoutf8(ASN1HEX.getHexOfV_AtObj(hCert, pName)));
      }
    }
  }
  return result;
};
X509.getSignatureAlgorithmName = function (hCert) {
  var sigAlgOidHex = ASN1HEX.getDecendantHexVByNthList(hCert, 0, [1, 0]);
  var sigAlgOidInt = KJUR.asn1.ASN1Util.oidHexToInt(sigAlgOidHex);
  var sigAlgName = KJUR.asn1.x509.OID.oid2name(sigAlgOidInt);
  return sigAlgName;
};
X509.getSignatureValueHex = function (hCert) {
  var h = ASN1HEX.getDecendantHexVByNthList(hCert, 0, [2]);
  if (h.substr(0, 2) !== "00") throw "can't get signature value";
  return h.substr(2);
};
X509.getSerialNumberHex = function (hCert) {
  return ASN1HEX.getDecendantHexVByNthList(hCert, 0, [0, 1]);
};
if (typeof KJUR == "undefined" || !KJUR) KJUR = {};
if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) KJUR.crypto = {};
KJUR.crypto.Util = new (function () {
  this.DIGESTINFOHEAD = {
    sha1: "3021300906052b0e03021a05000414",
    sha224: "302d300d06096086480165030402040500041c",
    sha256: "3031300d060960864801650304020105000420",
    sha384: "3041300d060960864801650304020205000430",
    sha512: "3051300d060960864801650304020305000440",
    md2: "3020300c06082a864886f70d020205000410",
    md5: "3020300c06082a864886f70d020505000410",
    ripemd160: "3021300906052b2403020105000414",
  };
  this.DEFAULTPROVIDER = {
    md5: "cryptojs",
    sha1: "cryptojs",
    sha224: "cryptojs",
    sha256: "cryptojs",
    sha384: "cryptojs",
    sha512: "cryptojs",
    ripemd160: "cryptojs",
    hmacmd5: "cryptojs",
    hmacsha1: "cryptojs",
    hmacsha224: "cryptojs",
    hmacsha256: "cryptojs",
    hmacsha384: "cryptojs",
    hmacsha512: "cryptojs",
    hmacripemd160: "cryptojs",
    MD5withRSA: "cryptojs/jsrsa",
    SHA1withRSA: "cryptojs/jsrsa",
    SHA224withRSA: "cryptojs/jsrsa",
    SHA256withRSA: "cryptojs/jsrsa",
    SHA384withRSA: "cryptojs/jsrsa",
    SHA512withRSA: "cryptojs/jsrsa",
    RIPEMD160withRSA: "cryptojs/jsrsa",
    MD5withECDSA: "cryptojs/jsrsa",
    SHA1withECDSA: "cryptojs/jsrsa",
    SHA224withECDSA: "cryptojs/jsrsa",
    SHA256withECDSA: "cryptojs/jsrsa",
    SHA384withECDSA: "cryptojs/jsrsa",
    SHA512withECDSA: "cryptojs/jsrsa",
    RIPEMD160withECDSA: "cryptojs/jsrsa",
    SHA1withDSA: "cryptojs/jsrsa",
    SHA224withDSA: "cryptojs/jsrsa",
    SHA256withDSA: "cryptojs/jsrsa",
    MD5withRSAandMGF1: "cryptojs/jsrsa",
    SHA1withRSAandMGF1: "cryptojs/jsrsa",
    SHA224withRSAandMGF1: "cryptojs/jsrsa",
    SHA256withRSAandMGF1: "cryptojs/jsrsa",
    SHA384withRSAandMGF1: "cryptojs/jsrsa",
    SHA512withRSAandMGF1: "cryptojs/jsrsa",
    RIPEMD160withRSAandMGF1: "cryptojs/jsrsa",
  };
  this.CRYPTOJSMESSAGEDIGESTNAME = {
    md5: CryptoJS.algo.MD5,
    sha1: CryptoJS.algo.SHA1,
    sha224: CryptoJS.algo.SHA224,
    sha256: CryptoJS.algo.SHA256,
    sha384: CryptoJS.algo.SHA384,
    sha512: CryptoJS.algo.SHA512,
    ripemd160: CryptoJS.algo.RIPEMD160,
  };
  this.getDigestInfoHex = function (hHash, alg) {
    if (typeof this.DIGESTINFOHEAD[alg] == "undefined")
      throw "alg not supported in Util.DIGESTINFOHEAD: " + alg;
    return this.DIGESTINFOHEAD[alg] + hHash;
  };
  this.getPaddedDigestInfoHex = function (hHash, alg, keySize) {
    var hDigestInfo = this.getDigestInfoHex(hHash, alg);
    var pmStrLen = keySize / 4;
    if (hDigestInfo.length + 22 > pmStrLen)
      throw "key is too short for SigAlg: keylen=" + keySize + "," + alg;
    var hHead = "0001";
    var hTail = "00" + hDigestInfo;
    var hMid = "";
    var fLen = pmStrLen - hHead.length - hTail.length;
    for (var i = 0; i < fLen; i += 2) {
      hMid += "ff";
    }
    var hPaddedMessage = hHead + hMid + hTail;
    return hPaddedMessage;
  };
  this.hashString = function (s, alg) {
    var md = new KJUR.crypto.MessageDigest({ alg: alg });
    return md.digestString(s);
  };
  this.hashHex = function (sHex, alg) {
    var md = new KJUR.crypto.MessageDigest({ alg: alg });
    return md.digestHex(sHex);
  };
  this.sha1 = function (s) {
    var md = new KJUR.crypto.MessageDigest({ alg: "sha1", prov: "cryptojs" });
    return md.digestString(s);
  };
  this.sha256 = function (s) {
    var md = new KJUR.crypto.MessageDigest({ alg: "sha256", prov: "cryptojs" });
    return md.digestString(s);
  };
  this.sha256Hex = function (s) {
    var md = new KJUR.crypto.MessageDigest({ alg: "sha256", prov: "cryptojs" });
    return md.digestHex(s);
  };
  this.sha512 = function (s) {
    var md = new KJUR.crypto.MessageDigest({ alg: "sha512", prov: "cryptojs" });
    return md.digestString(s);
  };
  this.sha512Hex = function (s) {
    var md = new KJUR.crypto.MessageDigest({ alg: "sha512", prov: "cryptojs" });
    return md.digestHex(s);
  };
})();
KJUR.crypto.Util.md5 = function (s) {
  var md = new KJUR.crypto.MessageDigest({ alg: "md5", prov: "cryptojs" });
  return md.digestString(s);
};
KJUR.crypto.Util.ripemd160 = function (s) {
  var md = new KJUR.crypto.MessageDigest({
    alg: "ripemd160",
    prov: "cryptojs",
  });
  return md.digestString(s);
};
KJUR.crypto.Util.SECURERANDOMGEN = new SecureRandom();
KJUR.crypto.Util.getRandomHexOfNbytes = function (n) {
  var ba = new Array(n);
  KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(ba);
  return BAtohex(ba);
};
KJUR.crypto.Util.getRandomBigIntegerOfNbytes = function (n) {
  return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbytes(n), 16);
};
KJUR.crypto.Util.getRandomHexOfNbits = function (n) {
  var n_remainder = n % 8;
  var n_quotient = (n - n_remainder) / 8;
  var ba = new Array(n_quotient + 1);
  KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(ba);
  ba[0] = (((255 << n_remainder) & 255) ^ 255) & ba[0];
  return BAtohex(ba);
};
KJUR.crypto.Util.getRandomBigIntegerOfNbits = function (n) {
  return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbits(n), 16);
};
KJUR.crypto.Util.getRandomBigIntegerZeroToMax = function (biMax) {
  var bitLenMax = biMax.bitLength();
  while (1) {
    var biRand = KJUR.crypto.Util.getRandomBigIntegerOfNbits(bitLenMax);
    if (biMax.compareTo(biRand) != -1) return biRand;
  }
};
KJUR.crypto.Util.getRandomBigIntegerMinToMax = function (biMin, biMax) {
  var flagCompare = biMin.compareTo(biMax);
  if (flagCompare == 1) throw "biMin is greater than biMax";
  if (flagCompare == 0) return biMin;
  var biDiff = biMax.subtract(biMin);
  var biRand = KJUR.crypto.Util.getRandomBigIntegerZeroToMax(biDiff);
  return biRand.add(biMin);
};
KJUR.crypto.MessageDigest = function (params) {
  var md = null;
  var algName = null;
  var provName = null;
  this.setAlgAndProvider = function (alg, prov) {
    alg = KJUR.crypto.MessageDigest.getCanonicalAlgName(alg);
    if (alg !== null && prov === undefined)
      prov = KJUR.crypto.Util.DEFAULTPROVIDER[alg];
    if (
      ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(alg) != -1 &&
      prov == "cryptojs"
    ) {
      try {
        this.md = KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[alg].create();
      } catch (ex) {
        throw "setAlgAndProvider hash alg set fail alg=" + alg + "/" + ex;
      }
      this.updateString = function (str) {
        this.md.update(str);
      };
      this.updateHex = function (hex) {
        var wHex = CryptoJS.enc.Hex.parse(hex);
        this.md.update(wHex);
      };
      this.digest = function () {
        var hash = this.md.finalize();
        return hash.toString(CryptoJS.enc.Hex);
      };
      this.digestString = function (str) {
        this.updateString(str);
        return this.digest();
      };
      this.digestHex = function (hex) {
        this.updateHex(hex);
        return this.digest();
      };
    }
    if (":sha256:".indexOf(alg) != -1 && prov == "sjcl") {
      try {
        this.md = new sjcl.hash.sha256();
      } catch (ex) {
        throw "setAlgAndProvider hash alg set fail alg=" + alg + "/" + ex;
      }
      this.updateString = function (str) {
        this.md.update(str);
      };
      this.updateHex = function (hex) {
        var baHex = sjcl.codec.hex.toBits(hex);
        this.md.update(baHex);
      };
      this.digest = function () {
        var hash = this.md.finalize();
        return sjcl.codec.hex.fromBits(hash);
      };
      this.digestString = function (str) {
        this.updateString(str);
        return this.digest();
      };
      this.digestHex = function (hex) {
        this.updateHex(hex);
        return this.digest();
      };
    }
  };
  this.updateString = function (str) {
    throw (
      "updateString(str) not supported for this alg/prov: " +
      this.algName +
      "/" +
      this.provName
    );
  };
  this.updateHex = function (hex) {
    throw (
      "updateHex(hex) not supported for this alg/prov: " +
      this.algName +
      "/" +
      this.provName
    );
  };
  this.digest = function () {
    throw (
      "digest() not supported for this alg/prov: " +
      this.algName +
      "/" +
      this.provName
    );
  };
  this.digestString = function (str) {
    throw (
      "digestString(str) not supported for this alg/prov: " +
      this.algName +
      "/" +
      this.provName
    );
  };
  this.digestHex = function (hex) {
    throw (
      "digestHex(hex) not supported for this alg/prov: " +
      this.algName +
      "/" +
      this.provName
    );
  };
  if (params !== undefined) {
    if (params["alg"] !== undefined) {
      this.algName = params["alg"];
      if (params["prov"] === undefined)
        this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName];
      this.setAlgAndProvider(this.algName, this.provName);
    }
  }
};
KJUR.crypto.MessageDigest.getCanonicalAlgName = function (alg) {
  if (typeof alg === "string") {
    alg = alg.toLowerCase();
    alg = alg.replace(/-/, "");
  }
  return alg;
};
KJUR.crypto.MessageDigest.getHashLength = function (alg) {
  var MD = KJUR.crypto.MessageDigest;
  var alg2 = MD.getCanonicalAlgName(alg);
  if (MD.HASHLENGTH[alg2] === undefined)
    throw "not supported algorithm: " + alg;
  return MD.HASHLENGTH[alg2];
};
KJUR.crypto.MessageDigest.HASHLENGTH = {
  md5: 16,
  sha1: 20,
  sha224: 28,
  sha256: 32,
  sha384: 48,
  sha512: 64,
  ripemd160: 20,
};
KJUR.crypto.Mac = function (params) {
  var mac = null;
  var pass = null;
  var algName = null;
  var provName = null;
  var algProv = null;
  this.setAlgAndProvider = function (alg, prov) {
    alg = alg.toLowerCase();
    if (alg == null) alg = "hmacsha1";
    alg = alg.toLowerCase();
    if (alg.substr(0, 4) != "hmac") {
      throw "setAlgAndProvider unsupported HMAC alg: " + alg;
    }
    if (prov === undefined) prov = KJUR.crypto.Util.DEFAULTPROVIDER[alg];
    this.algProv = alg + "/" + prov;
    var hashAlg = alg.substr(4);
    if (
      ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(hashAlg) !=
        -1 &&
      prov == "cryptojs"
    ) {
      try {
        var mdObj = KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[hashAlg];
        this.mac = CryptoJS.algo.HMAC.create(mdObj, this.pass);
      } catch (ex) {
        throw (
          "setAlgAndProvider hash alg set fail hashAlg=" + hashAlg + "/" + ex
        );
      }
      this.updateString = function (str) {
        this.mac.update(str);
      };
      this.updateHex = function (hex) {
        var wHex = CryptoJS.enc.Hex.parse(hex);
        this.mac.update(wHex);
      };
      this.doFinal = function () {
        var hash = this.mac.finalize();
        return hash.toString(CryptoJS.enc.Hex);
      };
      this.doFinalString = function (str) {
        this.updateString(str);
        return this.doFinal();
      };
      this.doFinalHex = function (hex) {
        this.updateHex(hex);
        return this.doFinal();
      };
    }
  };
  this.updateString = function (str) {
    throw "updateString(str) not supported for this alg/prov: " + this.algProv;
  };
  this.updateHex = function (hex) {
    throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
  };
  this.doFinal = function () {
    throw "digest() not supported for this alg/prov: " + this.algProv;
  };
  this.doFinalString = function (str) {
    throw "digestString(str) not supported for this alg/prov: " + this.algProv;
  };
  this.doFinalHex = function (hex) {
    throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
  };
  this.setPassword = function (pass) {
    if (typeof pass == "string") {
      var hPass = pass;
      if (pass.length % 2 == 1 || !pass.match(/^[0-9A-Fa-f]+$/)) {
        hPass = rstrtohex(pass);
      }
      this.pass = CryptoJS.enc.Hex.parse(hPass);
      return;
    }
    if (typeof pass != "object")
      throw "KJUR.crypto.Mac unsupported password type: " + pass;
    var hPass = null;
    if (pass.hex !== undefined) {
      if (pass.hex.length % 2 != 0 || !pass.hex.match(/^[0-9A-Fa-f]+$/))
        throw "Mac: wrong hex password: " + pass.hex;
      hPass = pass.hex;
    }
    if (pass.utf8 !== undefined) hPass = utf8tohex(pass.utf8);
    if (pass.rstr !== undefined) hPass = rstrtohex(pass.rstr);
    if (pass.b64 !== undefined) hPass = b64tohex(pass.b64);
    if (pass.b64u !== undefined) hPass = b64utohex(pass.b64u);
    if (hPass == null)
      throw "KJUR.crypto.Mac unsupported password type: " + pass;
    this.pass = CryptoJS.enc.Hex.parse(hPass);
  };
  if (params !== undefined) {
    if (params.pass !== undefined) {
      this.setPassword(params.pass);
    }
    if (params.alg !== undefined) {
      this.algName = params.alg;
      if (params["prov"] === undefined)
        this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName];
      this.setAlgAndProvider(this.algName, this.provName);
    }
  }
};
KJUR.crypto.Signature = function (params) {
  var prvKey = null;
  var pubKey = null;
  var md = null;
  var sig = null;
  var algName = null;
  var provName = null;
  var algProvName = null;
  var mdAlgName = null;
  var pubkeyAlgName = null;
  var state = null;
  var pssSaltLen = -1;
  var initParams = null;
  var sHashHex = null;
  var hDigestInfo = null;
  var hPaddedDigestInfo = null;
  var hSign = null;
  this._setAlgNames = function () {
    var matchResult = this.algName.match(/^(.+)with(.+)$/);
    if (matchResult) {
      this.mdAlgName = matchResult[1].toLowerCase();
      this.pubkeyAlgName = matchResult[2].toLowerCase();
    }
  };
  this._zeroPaddingOfSignature = function (hex, bitLength) {
    var s = "";
    var nZero = bitLength / 4 - hex.length;
    for (var i = 0; i < nZero; i++) {
      s = s + "0";
    }
    return s + hex;
  };
  this.setAlgAndProvider = function (alg, prov) {
    this._setAlgNames();
    if (prov != "cryptojs/jsrsa") throw "provider not supported: " + prov;
    if (
      ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(
        this.mdAlgName
      ) != -1
    ) {
      try {
        this.md = new KJUR.crypto.MessageDigest({ alg: this.mdAlgName });
      } catch (ex) {
        throw (
          "setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + ex
        );
      }
      this.init = function (keyparam, pass) {
        var keyObj = null;
        try {
          if (pass === undefined) {
            keyObj = KEYUTIL.getKey(keyparam);
          } else {
            keyObj = KEYUTIL.getKey(keyparam, pass);
          }
        } catch (ex) {
          throw "init failed:" + ex;
        }
        if (keyObj.isPrivate === true) {
          this.prvKey = keyObj;
          this.state = "SIGN";
        } else if (keyObj.isPublic === true) {
          this.pubKey = keyObj;
          this.state = "VERIFY";
        } else {
          throw "init failed.:" + keyObj;
        }
      };
      this.initSign = function (params) {
        if (
          typeof params["ecprvhex"] == "string" &&
          typeof params["eccurvename"] == "string"
        ) {
          this.ecprvhex = params["ecprvhex"];
          this.eccurvename = params["eccurvename"];
        } else {
          this.prvKey = params;
        }
        this.state = "SIGN";
      };
      this.initVerifyByPublicKey = function (params) {
        if (
          typeof params["ecpubhex"] == "string" &&
          typeof params["eccurvename"] == "string"
        ) {
          this.ecpubhex = params["ecpubhex"];
          this.eccurvename = params["eccurvename"];
        } else if (params instanceof KJUR.crypto.ECDSA) {
          this.pubKey = params;
        } else if (params instanceof RSAKey) {
          this.pubKey = params;
        }
        this.state = "VERIFY";
      };
      this.initVerifyByCertificatePEM = function (certPEM) {
        var x509 = new X509();
        x509.readCertPEM(certPEM);
        this.pubKey = x509.subjectPublicKeyRSA;
        this.state = "VERIFY";
      };
      this.updateString = function (str) {
        this.md.updateString(str);
      };
      this.updateHex = function (hex) {
        this.md.updateHex(hex);
      };
      this.sign = function () {
        this.sHashHex = this.md.digest();
        if (
          typeof this.ecprvhex != "undefined" &&
          typeof this.eccurvename != "undefined"
        ) {
          var ec = new KJUR.crypto.ECDSA({ curve: this.eccurvename });
          this.hSign = ec.signHex(this.sHashHex, this.ecprvhex);
        } else if (
          this.prvKey instanceof RSAKey &&
          this.pubkeyAlgName == "rsaandmgf1"
        ) {
          this.hSign = this.prvKey.signWithMessageHashPSS(
            this.sHashHex,
            this.mdAlgName,
            this.pssSaltLen
          );
        } else if (
          this.prvKey instanceof RSAKey &&
          this.pubkeyAlgName == "rsa"
        ) {
          this.hSign = this.prvKey.signWithMessageHash(
            this.sHashHex,
            this.mdAlgName
          );
        } else if (this.prvKey instanceof KJUR.crypto.ECDSA) {
          this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
        } else if (this.prvKey instanceof KJUR.crypto.DSA) {
          this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
        } else {
          throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
        }
        return this.hSign;
      };
      this.signString = function (str) {
        this.updateString(str);
        return this.sign();
      };
      this.signHex = function (hex) {
        this.updateHex(hex);
        return this.sign();
      };
      this.verify = function (hSigVal) {
        this.sHashHex = this.md.digest();
        if (
          typeof this.ecpubhex != "undefined" &&
          typeof this.eccurvename != "undefined"
        ) {
          var ec = new KJUR.crypto.ECDSA({ curve: this.eccurvename });
          return ec.verifyHex(this.sHashHex, hSigVal, this.ecpubhex);
        } else if (
          this.pubKey instanceof RSAKey &&
          this.pubkeyAlgName == "rsaandmgf1"
        ) {
          return this.pubKey.verifyWithMessageHashPSS(
            this.sHashHex,
            hSigVal,
            this.mdAlgName,
            this.pssSaltLen
          );
        } else if (
          this.pubKey instanceof RSAKey &&
          this.pubkeyAlgName == "rsa"
        ) {
          return this.pubKey.verifyWithMessageHash(this.sHashHex, hSigVal);
        } else if (this.pubKey instanceof KJUR.crypto.ECDSA) {
          return this.pubKey.verifyWithMessageHash(this.sHashHex, hSigVal);
        } else if (this.pubKey instanceof KJUR.crypto.DSA) {
          return this.pubKey.verifyWithMessageHash(this.sHashHex, hSigVal);
        } else {
          throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
        }
      };
    }
  };
  this.init = function (key, pass) {
    throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
  };
  this.initVerifyByPublicKey = function (rsaPubKey) {
    throw (
      "initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov=" +
      this.algProvName
    );
  };
  this.initVerifyByCertificatePEM = function (certPEM) {
    throw (
      "initVerifyByCertificatePEM(certPEM) not supported for this alg:prov=" +
      this.algProvName
    );
  };
  this.initSign = function (prvKey) {
    throw (
      "initSign(prvKey) not supported for this alg:prov=" + this.algProvName
    );
  };
  this.updateString = function (str) {
    throw (
      "updateString(str) not supported for this alg:prov=" + this.algProvName
    );
  };
  this.updateHex = function (hex) {
    throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
  };
  this.sign = function () {
    throw "sign() not supported for this alg:prov=" + this.algProvName;
  };
  this.signString = function (str) {
    throw (
      "digestString(str) not supported for this alg:prov=" + this.algProvName
    );
  };
  this.signHex = function (hex) {
    throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
  };
  this.verify = function (hSigVal) {
    throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
  };
  this.initParams = params;
  if (params !== undefined) {
    if (params["alg"] !== undefined) {
      this.algName = params["alg"];
      if (params["prov"] === undefined) {
        this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName];
      } else {
        this.provName = params["prov"];
      }
      this.algProvName = this.algName + ":" + this.provName;
      this.setAlgAndProvider(this.algName, this.provName);
      this._setAlgNames();
    }
    if (params["psssaltlen"] !== undefined)
      this.pssSaltLen = params["psssaltlen"];
    if (params["prvkeypem"] !== undefined) {
      if (params["prvkeypas"] !== undefined) {
        throw "both prvkeypem and prvkeypas parameters not supported";
      } else {
        try {
          var prvKey = new RSAKey();
          prvKey.readPrivateKeyFromPEMString(params["prvkeypem"]);
          this.initSign(prvKey);
        } catch (ex) {
          throw "fatal error to load pem private key: " + ex;
        }
      }
    }
  }
};
KJUR.crypto.Cipher = function (params) {};
KJUR.crypto.Cipher.encrypt = function (s, keyObj, algName) {
  if (keyObj instanceof RSAKey && keyObj.isPublic) {
    var algName2 = KJUR.crypto.Cipher.getAlgByKeyAndName(keyObj, algName);
    if (algName2 === "RSA") return keyObj.encrypt(s);
    if (algName2 === "RSAOAEP") return keyObj.encryptOAEP(s, "sha1");
    var a = algName2.match(/^RSAOAEP(\d+)$/);
    if (a !== null) return keyObj.encryptOAEP(s, "sha" + a[1]);
    throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + algName;
  } else {
    throw "Cipher.encrypt: unsupported key or algorithm";
  }
};
KJUR.crypto.Cipher.decrypt = function (hex, keyObj, algName) {
  if (keyObj instanceof RSAKey && keyObj.isPrivate) {
    var algName2 = KJUR.crypto.Cipher.getAlgByKeyAndName(keyObj, algName);
    if (algName2 === "RSA") return keyObj.decrypt(hex);
    if (algName2 === "RSAOAEP") return keyObj.decryptOAEP(hex, "sha1");
    var a = algName2.match(/^RSAOAEP(\d+)$/);
    if (a !== null) return keyObj.decryptOAEP(hex, "sha" + a[1]);
    throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + algName;
  } else {
    throw "Cipher.decrypt: unsupported key or algorithm";
  }
};
KJUR.crypto.Cipher.getAlgByKeyAndName = function (keyObj, algName) {
  if (keyObj instanceof RSAKey) {
    if (
      ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(
        algName
      ) != -1
    )
      return algName;
    if (algName === null || algName === undefined) return "RSA";
    throw (
      "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + algName
    );
  }
  throw "getAlgByKeyAndName: not supported algorithm name: " + algName;
};
KJUR.crypto.OID = new (function () {
  this.oidhex2name = {
    "2a864886f70d010101": "rsaEncryption",
    "2a8648ce3d0201": "ecPublicKey",
    "2a8648ce380401": "dsa",
    "2a8648ce3d030107": "secp256r1",
    "2b8104001f": "secp192k1",
    "2b81040021": "secp224r1",
    "2b8104000a": "secp256k1",
    "2b81040023": "secp521r1",
    "2b81040022": "secp384r1",
    "2a8648ce380403": "SHA1withDSA",
    "608648016503040301": "SHA224withDSA",
    "608648016503040302": "SHA256withDSA",
  };
})();
k034 =
  "/5A4whLq4LAn1keYpbucVRjzrm6dKFnk4AXu3hnGxm2xOlWtIWgvIXOqM1qEMmBus1glRlB+JuP2nhddoC/RfC90TSk1rpE8KA++eL9ISokpqRcDKU5QXdQBKmPghSQo7r6LmVKUGPMurLuTuYPCGQ4AI1exN2knap/21C/cpgi0EHntHLU6Nz8+Aa2q3DBy2bRvD9XjJUhF2djuzx0ukz2O8yg=";
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
k035 =
  "Vemg4yz9dnyKHteU+a3epFsjXvrL6yFPxG7ibIFMRW5YZG5mO527lLq3CH2L7cb8Zj7PPwVpVc4YcflSXcuK36TkiQwUNJ8CmxprAIGWKjyX/OgilsPczG0U3RzuP4D7l0J8R1CWSgzFl4B7VJW40mYdnFlgIQrYy60xzPbVK2Q=";
var rng_psize = 256;
var sm4 = function () {
  var block = 16;
  var sbox = [
    214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43,
    103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66,
    80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179,
    28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7,
    167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107,
    129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36,
    14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87,
    159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210,
    64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164,
    155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46,
    130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222,
    253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187,
    221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205,
    123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150,
    119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220,
    77, 32, 121, 238, 95, 62, 215, 203, 57, 72,
  ];
  var fk = [2746333894, 1453994832, 1736282519, 2993693404];
  var ck = [
    462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617,
    2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825,
    1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337,
    4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545,
    2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753,
    1213159005, 1684763257,
  ];
  var base64EncodeChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var base64DecodeChars = new Array(
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    62,
    -1,
    -1,
    -1,
    63,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    -1,
    -1,
    -1,
    -1,
    -1
  );
  return {
    rk: {},
    key: {},
    init: function (a) {
      this.key = a;
      this.caculate_round_key(a);
    },
    char2code: function (a) {
      for (var b = new Array(a.length), c = 0; c < a.length; c++)
        b[c] = a.charAt(c).charCodeAt();
      return b;
    },
    h2n_word: function (a, b) {
      return (
        ((a[b] << 24) & 4278190080) |
        ((a[b + 1] << 16) & 16711680) |
        ((a[b + 2] << 8) & 65280) |
        (255 & a[b + 3] & 4294967295)
      );
    },
    n2h_word: function (a, b) {
      return (
        ((a[b + 3] << 24) & 4278190080) |
        ((a[b + 2] << 16) & 16711680) |
        ((a[b + 1] << 8) & 65280) |
        (255 & a[b] & 4294967295)
      );
    },
    changeendianword: function (a) {
      var t0 = ((a & 4278190080) >>> 24) & 4294967295;
      var t1 = ((a & 16711680) >>> 8) & 4294967295;
      var t2 = (((a & 65280) << 8) & 4294967295) >>> 0;
      var t3 = (((a & 255) << 24) & 4294967295) >>> 0;
      return t0 + t1 + t2 + t3;
    },
    word2array: function (a) {
      var array = new Array(4);
      array[0] = (a & 4278190080) >>> 24;
      array[1] = (a & 16711680) >>> 16;
      array[2] = (a & 65280) >>> 8;
      array[3] = (a & 255) >>> 0;
      return array;
    },
    getsboxvalue: function (a) {
      return sbox[a];
    },
    F_transfer: function (a, i) {
      var tc = a[0];
      var u1 = (a[1] ^ a[2] ^ a[3] ^ this.rk[i]) >>> 0;
      var u2 = this.T_transfer(u1) >>> 0;
      var u3 = tc ^ (u2 >>> 0);
      return u3;
    },
    F_transfer: function (a, i, falsss) {
      var tc = a[0];
      if (falsss) alert(tc);
      var u1 = (a[1] ^ a[2] ^ a[3] ^ this.rk[i]) >>> 0;
      if (falsss) alert(u1);
      var u2 = this.T_transfer(u1, falsss) >>> 0;
      if (falsss) alert(u2);
      var u3 = tc ^ (u2 >>> 0);
      if (falsss) alert(u3);
      return u3;
    },
    T_transfer: function (a, falsss) {
      var b = 0,
        c = 0,
        d = new Array(4);
      var e = this.word2array(a);
      if (falsss) alert(e);
      d[0] = this.getsboxvalue(e[0]);
      if (falsss) alert(d[0]);
      d[1] = this.getsboxvalue(e[1]);
      if (falsss) alert(d[1]);
      d[2] = this.getsboxvalue(e[2]);
      if (falsss) alert(d[2]);
      d[3] = this.getsboxvalue(e[3]);
      if (falsss) alert(d[3]);
      var t = this.makeword(d, 0);
      if (falsss) alert(t);
      c =
        t ^
        this.shift_transfer(t, 2) ^
        this.shift_transfer(t, 10) ^
        this.shift_transfer(t, 18) ^
        (this.shift_transfer(t, 24) >>> 0);
      if (falsss) alert(this.shift_transfer(t, 2));
      if (falsss) alert(this.shift_transfer(t, 10));
      if (falsss) alert(this.shift_transfer(t, 18));
      if (falsss) alert(this.shift_transfer(t, 24));
      if (falsss) alert(c);
      return c;
    },
    T_apostrophe_transfer: function (a) {
      var b = 0,
        c = 0,
        d = new Array(4);
      var o = this.word2array(a);
      d[0] = this.getsboxvalue(o[0]);
      d[1] = this.getsboxvalue(o[1]);
      d[2] = this.getsboxvalue(o[2]);
      d[3] = this.getsboxvalue(o[3]);
      var t = this.makeword(d, 0);
      c = (t ^ this.shift_transfer(t, 13) ^ this.shift_transfer(t, 23)) >>> 0;
      return c;
    },
    leftbitmove: function (a, b) {
      var c = (4294967295 & a) << b;
      return c;
    },
    shift_transfer: function (a, b) {
      return this.leftbitmove(a, b) | (a >>> (32 - b));
    },
    caculate_round_key: function (a) {
      for (var j = 0; j < 32; j++) this.rk[j] = 0;
      if (Array.isArray(a)) {
        var mk = new Array(4);
        for (var i = 0; i < 4; i++) mk[i] = this.h2n_word(a, i * 4) >>> 0;
        var K = new Array(40);
        for (var c = 0; c < 4; c++) {
          var tmp = fk[c];
          K[c] = (mk[c] ^ tmp) >>> 0;
        }
        for (var n = 0; n < 32; n++) {
          var u0 =
            this.T_apostrophe_transfer(
              K[n + 1] ^ K[n + 2] ^ K[n + 3] ^ ck[n]
            ) >>> 0;
          var u1 = K[n];
          this.rk[n] = (u0 ^ u1) >>> 0;
          K[n + 4] = this.rk[n];
        }
      }
      return this.rk;
    },
    highbyte2lowbyte: function (a) {
      var b = new Array(4);
      return (
        (b[0] = (a >>> 24) & 255),
        (b[1] = (a >>> 16) & 255),
        (b[2] = (a >>> 8) & 255),
        (b[3] = 255 & a),
        b
      );
    },
    makeword: function (a, b) {
      return (
        ((a[b] << 24) & 4278190080) |
        ((a[b + 1] << 16) & 16711680) |
        ((a[b + 2] << 8) & 65280) |
        (255 & a[b + 3] & 4294967295)
      );
    },
    pkcs5padding: function (a, c) {
      if (c == 0) c = 16;
      for (var d = 0; c > d; d++) a.push(c);
    },
    encryptstring: function (s, flag) {
      if (null == s || 0 == s.length) return null;
      var res = new Array();
      var array = new Array();
      var i;
      for (i = 0; i < s.length; i++) {
        array.push(s.charAt(i).charCodeAt());
      }
      var r = this.cipher(array, flag);
      for (i = 0; i < r.length; i++) {
        res.push(r[i]);
      }
      return res;
    },
    decryptstring: function (a, flag) {
      if (null == a || 0 == a.length) return null;
      var res = "";
      var i;
      var r = this.cipher(a, flag);
      for (i = 0; i < r.length; i++) {
        res += String.fromCharCode(r[i]);
      }
      return res;
    },
    cipher: function (p, flag) {
      if (null == p || 0 == p.length) return null;
      if (true == flag) {
        var l = block - (p.length % block);
        this.pkcs5padding(p, l);
      }
      var result = new Array();
      for (var r = Math.floor(p.length / block), n = 0; n < r; n++) {
        var i = new Array(4);
        var x = new Array(36);
        var o = new Array(4);
        for (var m = 0; m < 4; m++) {
          i[m] = this.makeword(p, n * 16 + m * 4) >>> 0;
          x[m] = i[m];
        }
        for (var round = 0; round < 32; round++) {
          var tv = new Array(
            x[round],
            x[round + 1],
            x[round + 2],
            x[round + 3]
          );
          var tt = this.F_transfer(tv, flag ? round : 31 - round) >>> 0;
          x[round + 4] = tt;
        }
        o[0] = x[35];
        o[1] = x[34];
        o[2] = x[33];
        o[3] = x[32];
        for (var j = 0; j < o.length; j++) {
          var ta = this.word2array(o[j]);
          result.push(ta[0]);
          result.push(ta[1]);
          result.push(ta[2]);
          result.push(ta[3]);
        }
      }
      return result;
    },
    base64encode: function (a) {
      var out, i, len;
      var c1, c2, c3;
      len = a.length;
      i = 0;
      out = "";
      while (i < len) {
        c1 = a[i++] & 0xff;
        if (i == len) {
          out += base64EncodeChars.charAt(c1 >> 2);
          out += base64EncodeChars.charAt((c1 & 0x3) << 4);
          out += "==";
          break;
        }
        c2 = a[i++];
        if (i == len) {
          out += base64EncodeChars.charAt(c1 >> 2);
          out += base64EncodeChars.charAt(
            ((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)
          );
          out += base64EncodeChars.charAt((c2 & 0xf) << 2);
          out += "=";
          break;
        }
        c3 = a[i++];
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3f);
      }
      return out;
    },
    base64decode: function (str) {
      var c1, c2, c3, c4;
      var i, len, out;
      len = str.length;
      i = 0;
      out = new Array();
      while (i < len) {
        do {
          c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1) break;
        do {
          c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1) break;
        out.push((c1 << 2) | ((c2 & 0x30) >> 4));
        do {
          c3 = str.charCodeAt(i++) & 0xff;
          if (c3 == 61) return out;
          c3 = base64DecodeChars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1) break;
        out.push(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));
        do {
          c4 = str.charCodeAt(i++) & 0xff;
          if (c4 == 61) return out;
          c4 = base64DecodeChars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1) break;
        out.push(((c3 & 0x03) << 6) | c4);
      }
      return out;
    },
    version: function () {
      return "1.0";
    },
  };
};
k036 =
  "646B2fDa26Rns0q19N0EjadNPqkEVswoxW4xBp1RuX2t5IZXSFrAFOPw5J9gmyt3EelPi68v+LiZdrrkd7ADyJeavhz5UG2YwABkuB04lZ7J/nHDyLuTqCGGHEh5c/sTcT0rfY51gXCma+ikZl5JCnZ3w9ekLTxc8MXCuvEYkPY=";
k087 =
  "60TNAMNb/cvf84EDv/w4JTtEKwBdQ/xHMEGtshedJLuon5EYP8mSub9ZD9Enm4Ts6F7FFVqJuN6SdnwE8BPFwg4ZXGRh6NhqDurk5GNvpQYvr6sU//3RRMsE6VYjbhHSkp0udZiL5R2hGGlrmL8GePr4pGokSELpaJ8GGHlbU0o=";
var rng_state;
var rng_pool;
var rng_pptr;
k088 =
  "2ZcvOqSsuPm2ZwJ8hznn1E5Qy/nSc424N7+5i96Rdo9sxoMsedx6BWOkVKgtCd4xQdagYzrT2XZRad65IAeeJCg0PT+eqkN+0XfeylHPWkq/4NF7shtbwUs/W8BiL8SxzcWI2LhdNgOF4tK4Uf+4DzcMZybKizDKF/QsJ1KBK2g=";
k037 =
  "UsnXGGM/QKgCzAl/JbuiFTRYxGY3l1y9cmtOC6AJqNYiO/n5cU7OC+pyU4K0gbjG/H/6+bJazfwD0VulQ3AcQ1W3EyrcBYP90gn5+6/4DMEJqG8gPD/KHvtsC800crU5UE1jGHg2AzZsK4BYStllhZfZD0zeHo0CyNVR7eF1mYo=";
if (rng_pool == null) {
  rng_pool = new Array();
  rng_pptr = 0;
  var t;
  if (
    navigator.appName == "Netscape" &&
    navigator.appVersion < "5" &&
    window.crypto
  ) {
    var z = window.crypto.random(32);
    for (t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
  }
  while (rng_pptr < rng_psize) {
    t = Math.floor(65536 * Math.random());
    rng_pool[rng_pptr++] = t >>> 8;
    rng_pool[rng_pptr++] = t & 255;
  }
  rng_pptr = 0;
  rng_seed_time();
}
k089 =
  "ruJVIvd7BkyCZqMCmgUblcZy+vf3AwGIYKVbKA7gfG71dO4h4qTq6Px0ulc+VlNbbjNzxcKvcbvlZFjv7Swmo/nm0Cct5dK3UP4NgA0yYS8hHTNH4oeV4Po/dzkGAsSjigSEYC4L6kU+Vok1smrO950+9RIYdDMeFZeMP6voaK4=";
k090 =
  "RcpHhDi8PzyW3m79zk8i6kAm3zrbLFXfq7Mhw7zDXZxMIlW4WZI3tvM903rg1oCp0HUfJq0MlJH66X2Yzt3l0/2OJwWMCPa7uc2V9MBwea6zG53G83HD7XLPcbF0Ywsvxsx5ZMub4F6khW7QEt7PS24em2lQmRCsPgyJeEt4kFM=";
k038 =
  "11wp6MJSM5coUzpV6Xa/74pbe0/zoslYZIEtrGofctPQWQdOC61XsxxbK7mPhJwTzf1L9B1GVQNM4HjwCb1OHJ0Lk9yTbeeBDJB2TfRq5Ic9XXGcvh/nssz7bpYHONe3GwEMY0FcXT0D1FXRXWZOYgCEZWMyEmwcE/O2+fGhZcY=";
SecureRandom.prototype.nextBytes = rng_get_bytes;
var dbits;
k091 =
  "cfBQhSfosyoy/SBkwcCdS4CoeUz7l6bGw6zq5XtEW5FxGkGuEv3+/S2ex47IIFhnW3x8+wp9knRDxmng8TgpA0V7GLsPslrvqDZzlRhCjqr+dREWSLmhduZJyWba7zkL0sYZeiyKvr+dAfBjShrJK+0lNsRi9Z9H";
var canary = 0xdeadbeefcafe;
var j_lm = (canary & 0xffffff) == 0xefcafe;
k039 =
  "tcwkUEywJ6dcPDeYkPKJudus3kwg+/K8Slq12iKF2fmNkCZc2IWQpxhzHraSM6DCX2tWR3Noom8m2xxoKBSqj9xVYhTxltzsdghaOgNHCba9WWDtPyIJg/mYuocaZUPq8waKf1OWW+z1xK1E6t1FkFZ/GrDbUD4aYSwGAlW9k7s=";
k092 =
  "8t3CXnxdCd2R/103WDhxDJMKMOgoqsRcbHWfxCC/xWXF+ahRaWBWxjrvygBEbBNIaaD15slPiPhNFZpg0KRyxbeZXlObTNPLX3RpGCwSqXN2nAuQzzwtcDKGGx92BP1e7kELVVNPmXb0+pctM22cFLxb1hwiFVhsPxvgfUu+/8wq+Q8BsK4t/9WtS/gQIx2grxBSOPSUYUie543t8uD20w==";
k093 =
  "GUKTGWuHr/lCVyWo4e47PIGVC7Fki49DCwwzBB34lf2aYXMGysQBr8LNjAQeKchg3YCayCPy7Kp4aG48Jb7DnwH1KDbvcEnzIuAEYIhO9OYe8ovZ0AFm9KsMhr0MGUqjjio70xpP7zDZ7L8cJTrmdhbA+pAoauw+LuLC8/Zckn6AmqxW";
k040 =
  "jACzF/4G7c0f2uAEJbFZTvD1/z/Mg4P3vHeONkF1IgLdNMYb65FR8soG/0MqDAEant9Gv2UPnSZO7cLpp6eIhjgDn79n/curjc0WHhcxVO5/sqm+we7ffiyWy4Xzx+cDz2P8ZAVsZzm97k0WpTc1y/21525DtlXvWccHpVBOEqU=";
k094 =
  "t3vR+Z+Wnk1jQSCUOFKu47HDIZKyzuzGnnywJ0xJHgswQDN4ysLKejl58mQM7sAwi7KMwGHhN2rhs7V+wMbaXUD6VZhRgxMOHRGw2vaMINg0girI8L3gr7j/vvEYqsf0mgemP/cQ2xo64KaUIcoAXfqzRb9r+wRynH5ZhdZdLcE=";
k095 =
  "t7lC/4VuAs9IG5A5wsO4eRE2I1zHaJ0mT/XbyoUNhdQT1oeBe96SKM+jzIENybymW5+r5g2uhdRNxxo4UhsWD4c28S/SLRNQ90j8dqxA74ckhPfbeF9Z0ZzPXyyrigQq8+lg/OCQIqYam5COt/CNvbbKUUb4xNfq";
if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
  BigInteger.prototype.am = am2;
  dbits = 30;
} else if (j_lm && navigator.appName != "Netscape") {
  BigInteger.prototype.am = am1;
  dbits = 26;
} else {
  BigInteger.prototype.am = am3;
  dbits = 28;
}
k096 =
  "r0o+nyf66D3k+FJNSfjBDQE/FPulZxXUxkWMbSnoc0Om+lHkne7CrmTkF67ZocceQbWSRvzeKo1WeD8+LOmbd55S/OHMJ3UrR+rEMaNlOqFbCdAlNTTnSp7etR1dKrwyj3kC5B+P7CXwJ4TfwIdblFScOn8VjSq4";
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
k041 =
  "VISMRN49lfqKA0bw7Z17hVmZS2Rwym5UGDmRH+AXlNs9jPUzflV/YNAow3mc2l0bNqCCfCor4oabr9OG10b1MVAcM96YovyLR8uH4muv6poCTCoubiDCSyvXy7wklGFVwQgiZsQF7zdCEa9Dptdm4uh4A3VxsHESu1Jr0P0l6AI=";
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
k097 =
  "WxnyvGdjkEbFzXxVOgsdppoMNuPb6RLdxWX7+6VNzeuO0pJdP3a9K9mSpKtOdN9RwPyxAY+78N6nQrpfObChZmbSlcURm6ZDMH1BtS3p6GWoi/egolOqhp+zeu3veEs2ochQPkN51+L6jH6KwLWTpNMTSPD+fNFH";
k098 =
  "FNOIysQcK9oqoycWy4D6aBc7xLCEZVNxjs0ciXRWiGRKVYZg3cdJWNl489vjoCQbyZnp0L76HDQcCqv0sUZL1RMe5ACSsaO4Zd4wASEyi+YyK6947QWJp0pZG1Cj0ZzRe1yYlZEXRWxqncHMSHe4cWhz/Dfck6tk";
k099 =
  "/nct5gCjA1DDGpLQwKevO0VUnT02x89BJ4JCR9nLxN9j2q8Ge73EcCKlPuR8Hehgngdd5Vt7LJhUTM12wuKJypVBlW237/wJxCfF7E6pJC/iI2HkUFTDDwry77oAZJM+wDMAhhnvS/mAR2mYhG+0b739wgVXCRQ3I78fVayPWFoztAnsZO6DN/MpfZ9YKQgnz2PLskH83Wgms+GM";
k042 =
  "F6nBdkdST0iVKLX0f6t0eYemKfV5UWbWRQ3gAYnNXk6FLnbmZfZlsHJys+oASgY1vTU8epvM92F+ssMm960ab6heTvud0qrgXRTu4RdPwzHWu18CWb5BHuUrq5m3R7+iDOQKLpiGBcFwENEfmLLo3ZzAaSmJLGp3TyRbDlwJYsw=";
k100 =
  "/OjyO0i3E+Uu7nSpH6+5EzpWhNiC7dkiDg59MV/p953WneexNkHiw2w/BsdTD6fE9Ipe55OBC2uum11xqCtznG9+rrBOwcONoBXW0CRZTUaL14KJzvg6qWlXL4Fd6BnEHAlDRHt/XA9gqNGW4eOXWqqVuJsdH2Qu";
k101 =
  "hwOftFLMwzqSeaDXK9VJsHrk4fXQDRAv8MQs6tB+GBBUlYaHiOymvGBRJ7WwQeNrczNLp+OFeu3tQoQu8a9gbAD/ANxBELxkBo7BUssf11vnYcHp9EfqqsxidqM60/Y4LdqfQgspgB0365LM0xS6NEy8yx8D/wXo";
k043 =
  "nmCE8A44b/7rBXaPC4rbVIzHFDGluKjfG3BtVhyl2aDMnoGpnjcg4A0e1Of60N87uPZO/gX0H8qdre/++I6x0rytnFK1269UqWJz6MEduFyJ/JhggUIAWMLQpHwLW10ZTgyui+tn6Km62P8aXPHoAGt8inBn8IqLgrJbi+5Ryh9OhKq3JCQUhxK/DmofK8ZFuZF3Z3KL8HlPE5Hl8K3bDzZXgo2BcxQVhkH7TQ==";
k102 =
  "yzokCIHB8IewIjKANhyO6F4La54RJIxsDb7wRNbIyCjuqUYD9+Fcl2fQoi98IIkQU4/n2+CuxGY2DJlGxSOmfG8xNQTdAnpsDrrZN4S3qH85lrtbNXFv5LxwJG7xgDWIy0KSoLa6Y6vQ9qwqpgTEG4dxsTSbDaErn9q7NMEJOMy17xuj7Aa0YZvJrxRBEAy2AxRGvHFQyAG92ubp";
k103 =
  "cvXRAHoB1zssNI4SZIiWzqyL/j3wH1pJeFmV+1hhJdAqMyBmq+WVrravzrvKjVuYu3ZmRt854KGNFvqy5svJomTAOJVlXYuR7tJeiFAid4vgM3w6oe22yCaRjw48zZHsjf2T8rIGZX32Y58N1Z6wNK6HJVEDLMU6";
k044 =
  "WgBEqyIYtBzV99POEmrOMO61b1Osh8cXRbw07DJfVa/I1SfpH+Lrx2pHODJeCq1ZY4rzKHb3mJKvrgqxQ6eJSs3BJ3oty/ZE19t2oRk+d1wo4c/g7kR/jmv4noGH74DCobdGO6YRfuTt72FunsGDA4uk+fSfyIJL75lsDkfqQSxxRj7v";
k104 =
  "kDmc3kinzrZNR5Q2QNaIYQSjx+Y5Xb/bL0/XCh6STdsXjzOzUARfl06PshaYunZ126eEaJSrAY2r4hEjQhFuJ7wlI3/vgbl10UDgq16dLNCruIx7qZB7OjVXNftqnFAC5BEpCsKaFMalcuvKUNNAunqepYyRdoP4";
k105 =
  "SrRGMBdpw7400aTP2qGYb4967/6x8QBGQKMF8OEuqHJ1BYfICAnnfG/FkWdxBrNtuWMM9EHogZU4T3eUtAY+mQbKSkiPEcrNn3jgsLguxmpPiwV4xB7wPQM2rnf9TAnookCP/1CZ/7faQ9w8TdbUVXITpYDte+BmbHV2v30hXBeAHdKhWtMg7Smpikbeep1Q24Qn6WuBPjb2wbcn+B3EfHtsw8E=";
k106 =
  "TykugSsiaZHt6gTB30whKFFTKL1K84T7NYYjg8oJTXrudstgpDnIHFI3JEeF1fY3+bLovKj5VboVi2awY8JinsRwyDqGJ9f03hd5y7gDg79wHDn2enRMrm5n3wIpR887qGeS50OM7sk3ffuqDHybXpVw215Ac7GB";
k107 =
  "7NfK0ggSswdNiz3GthjqIqSpEZqPB3v53Pwo+pRBK+YKarswn/HKKaesiF31c1LvXS7J3PgEh5TZixGC8HYn2hNr331yIhEfinwpN9d7mEnHcvOFol75TPCpSuVRbxF5SKStRXpdypSyBIBosscJMOcbt6DgzFgLYJTbrWP3PRE=";
k108 =
  "vM21D3zoHWYx7mfXPAot4pK0w/8iycjTBUyQQoyDomcu5/0tvmC/U9s5kt3sSVME/siUlnCK35+jD+6nXhqtmSkYJa42Ps7PR9jLnfiEBdQoXyIpqaKQYpVTN8XB5HPEpOfeDN1KTYkIBiqOLlvaPVO23mM=";
k109 = "";
k110 = "";
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
BigInteger.prototype.square = bnSquare;
function ECFieldElementFp(q, x) {
  this.x = x;
  this.q = q;
}
function feFpEquals(other) {
  if (other == this) return true;
  return this.q.equals(other.q) && this.x.equals(other.x);
}
function feFpToBigInteger() {
  return this.x;
}
function feFpNegate() {
  return new ECFieldElementFp(this.q, this.x.negate().mod(this.q));
}
function feFpAdd(b) {
  return new ECFieldElementFp(this.q, this.x.add(b.toBigInteger()).mod(this.q));
}
function feFpSubtract(b) {
  return new ECFieldElementFp(
    this.q,
    this.x.subtract(b.toBigInteger()).mod(this.q)
  );
}
function feFpMultiply(b) {
  return new ECFieldElementFp(
    this.q,
    this.x.multiply(b.toBigInteger()).mod(this.q)
  );
}
function feFpSquare() {
  return new ECFieldElementFp(this.q, this.x.square().mod(this.q));
}
function feFpDivide(b) {
  return new ECFieldElementFp(
    this.q,
    this.x.multiply(b.toBigInteger().modInverse(this.q)).mod(this.q)
  );
}
ECFieldElementFp.prototype.equals = feFpEquals;
ECFieldElementFp.prototype.toBigInteger = feFpToBigInteger;
ECFieldElementFp.prototype.negate = feFpNegate;
ECFieldElementFp.prototype.add = feFpAdd;
ECFieldElementFp.prototype.subtract = feFpSubtract;
ECFieldElementFp.prototype.multiply = feFpMultiply;
ECFieldElementFp.prototype.square = feFpSquare;
ECFieldElementFp.prototype.divide = feFpDivide;
function ECPointFp(curve, x, y, z) {
  this.curve = curve;
  this.x = x;
  this.y = y;
  if (z == null) {
    this.z = BigInteger.ONE;
  } else {
    this.z = z;
  }
  this.zinv = null;
}
function pointFpGetX() {
  if (this.zinv == null) {
    this.zinv = this.z.modInverse(this.curve.q);
  }
  return this.curve.fromBigInteger(
    this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q)
  );
}
function pointFpGetY() {
  if (this.zinv == null) {
    this.zinv = this.z.modInverse(this.curve.q);
  }
  return this.curve.fromBigInteger(
    this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q)
  );
}
function pointFpEquals(other) {
  if (other == this) return true;
  if (this.isInfinity()) return other.isInfinity();
  if (other.isInfinity()) return this.isInfinity();
  var u, v;
  u = other.y
    .toBigInteger()
    .multiply(this.z)
    .subtract(this.y.toBigInteger().multiply(other.z))
    .mod(this.curve.q);
  if (!u.equals(BigInteger.ZERO)) return false;
  v = other.x
    .toBigInteger()
    .multiply(this.z)
    .subtract(this.x.toBigInteger().multiply(other.z))
    .mod(this.curve.q);
  return v.equals(BigInteger.ZERO);
}
function pointFpIsInfinity() {
  if (this.x == null && this.y == null) return true;
  return (
    this.z.equals(BigInteger.ZERO) &&
    !this.y.toBigInteger().equals(BigInteger.ZERO)
  );
}
function pointFpNegate() {
  return new ECPointFp(this.curve, this.x, this.y.negate(), this.z);
}
function pointFpAdd(b) {
  if (this.isInfinity()) return b;
  if (b.isInfinity()) return this;
  var u = b.y
    .toBigInteger()
    .multiply(this.z)
    .subtract(this.y.toBigInteger().multiply(b.z))
    .mod(this.curve.q);
  var v = b.x
    .toBigInteger()
    .multiply(this.z)
    .subtract(this.x.toBigInteger().multiply(b.z))
    .mod(this.curve.q);
  if (BigInteger.ZERO.equals(v)) {
    if (BigInteger.ZERO.equals(u)) {
      return this.twice();
    }
    return this.curve.getInfinity();
  }
  var THREE = new BigInteger("3");
  var x1 = this.x.toBigInteger();
  var y1 = this.y.toBigInteger();
  var x2 = b.x.toBigInteger();
  var y2 = b.y.toBigInteger();
  var v2 = v.square();
  var v3 = v2.multiply(v);
  var x1v2 = x1.multiply(v2);
  var zu2 = u.square().multiply(this.z);
  var x3 = zu2
    .subtract(x1v2.shiftLeft(1))
    .multiply(b.z)
    .subtract(v3)
    .multiply(v)
    .mod(this.curve.q);
  var y3 = x1v2
    .multiply(THREE)
    .multiply(u)
    .subtract(y1.multiply(v3))
    .subtract(zu2.multiply(u))
    .multiply(b.z)
    .add(u.multiply(v3))
    .mod(this.curve.q);
  var z3 = v3.multiply(this.z).multiply(b.z).mod(this.curve.q);
  return new ECPointFp(
    this.curve,
    this.curve.fromBigInteger(x3),
    this.curve.fromBigInteger(y3),
    z3
  );
}
function pointFpTwice() {
  if (this.isInfinity()) return this;
  if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();
  var THREE = new BigInteger("3");
  var x1 = this.x.toBigInteger();
  var y1 = this.y.toBigInteger();
  var y1z1 = y1.multiply(this.z);
  var y1sqz1 = y1z1.multiply(y1).mod(this.curve.q);
  var a = this.curve.a.toBigInteger();
  var w = x1.square().multiply(THREE);
  if (!BigInteger.ZERO.equals(a)) {
    w = w.add(this.z.square().multiply(a));
  }
  w = w.mod(this.curve.q);
  var x3 = w
    .square()
    .subtract(x1.shiftLeft(3).multiply(y1sqz1))
    .shiftLeft(1)
    .multiply(y1z1)
    .mod(this.curve.q);
  var y3 = w
    .multiply(THREE)
    .multiply(x1)
    .subtract(y1sqz1.shiftLeft(1))
    .shiftLeft(2)
    .multiply(y1sqz1)
    .subtract(w.square().multiply(w))
    .mod(this.curve.q);
  var z3 = y1z1.square().multiply(y1z1).shiftLeft(3).mod(this.curve.q);
  return new ECPointFp(
    this.curve,
    this.curve.fromBigInteger(x3),
    this.curve.fromBigInteger(y3),
    z3
  );
}
function pointFpMultiply(k) {
  if (this.isInfinity()) return this;
  if (k.signum() == 0) return this.curve.getInfinity();
  var e = k;
  var h = e.multiply(new BigInteger("3"));
  var neg = this.negate();
  var R = this;
  var i;
  for (i = h.bitLength() - 2; i > 0; --i) {
    R = R.twice();
    var hBit = h.testBit(i);
    var eBit = e.testBit(i);
    if (hBit != eBit) {
      R = R.add(hBit ? this : neg);
    }
  }
  return R;
}
function pointFpMultiplyTwo(j, x, k) {
  var i;
  if (j.bitLength() > k.bitLength()) i = j.bitLength() - 1;
  else i = k.bitLength() - 1;
  var R = this.curve.getInfinity();
  var both = this.add(x);
  while (i >= 0) {
    R = R.twice();
    if (j.testBit(i)) {
      if (k.testBit(i)) {
        R = R.add(both);
      } else {
        R = R.add(this);
      }
    } else {
      if (k.testBit(i)) {
        R = R.add(x);
      }
    }
    --i;
  }
  return R;
}
ECPointFp.prototype.getX = pointFpGetX;
ECPointFp.prototype.getY = pointFpGetY;
ECPointFp.prototype.equals = pointFpEquals;
ECPointFp.prototype.isInfinity = pointFpIsInfinity;
ECPointFp.prototype.negate = pointFpNegate;
ECPointFp.prototype.add = pointFpAdd;
ECPointFp.prototype.twice = pointFpTwice;
ECPointFp.prototype.multiply = pointFpMultiply;
ECPointFp.prototype.multiplyTwo = pointFpMultiplyTwo;
function ECCurveFp(q, a, b) {
  this.q = q;
  this.a = this.fromBigInteger(a);
  this.b = this.fromBigInteger(b);
  this.infinity = new ECPointFp(this, null, null);
}
function curveFpGetQ() {
  return this.q;
}
function curveFpGetA() {
  return this.a;
}
function curveFpGetB() {
  return this.b;
}
function curveFpEquals(other) {
  if (other == this) return true;
  return (
    this.q.equals(other.q) && this.a.equals(other.a) && this.b.equals(other.b)
  );
}
function curveFpGetInfinity() {
  return this.infinity;
}
function curveFpFromBigInteger(x) {
  return new ECFieldElementFp(this.q, x);
}
function curveFpDecodePointHex(s) {
  switch (parseInt(s.substr(0, 2), 16)) {
    case 0:
      return this.infinity;
    case 2:
    case 3:
      return null;
    case 4:
    case 6:
    case 7:
      var len = (s.length - 2) / 2;
      var xHex = s.substr(2, len);
      var yHex = s.substr(len + 2, len);
      return new ECPointFp(
        this,
        this.fromBigInteger(new BigInteger(xHex, 16)),
        this.fromBigInteger(new BigInteger(yHex, 16))
      );
    default:
      return null;
  }
}
ECCurveFp.prototype.getQ = curveFpGetQ;
ECCurveFp.prototype.getA = curveFpGetA;
ECCurveFp.prototype.getB = curveFpGetB;
ECCurveFp.prototype.equals = curveFpEquals;
ECCurveFp.prototype.getInfinity = curveFpGetInfinity;
ECCurveFp.prototype.fromBigInteger = curveFpFromBigInteger;
ECCurveFp.prototype.decodePointHex = curveFpDecodePointHex;
if (typeof KJUR == "undefined" || !KJUR) KJUR = {};
if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) KJUR.crypto = {};
KJUR.crypto.ECParameterDB = new (function () {
  var db = {};
  var aliasDB = {};
  function hex2bi(hex) {
    return new BigInteger(hex, 16);
  }
  this.getByName = function (nameOrAlias) {
    var name = nameOrAlias;
    if (typeof aliasDB[name] != "undefined") {
      name = aliasDB[nameOrAlias];
    }
    if (typeof db[name] != "undefined") {
      return db[name];
    }
    throw "unregistered EC curve name: " + name;
  };
  this.regist = function (
    name,
    keylen,
    pHex,
    aHex,
    bHex,
    nHex,
    hHex,
    gxHex,
    gyHex,
    aliasList,
    oid,
    info
  ) {
    db[name] = {};
    var p = hex2bi(pHex);
    var a = hex2bi(aHex);
    var b = hex2bi(bHex);
    var n = hex2bi(nHex);
    var h = hex2bi(hHex);
    var curve = new ECCurveFp(p, a, b);
    var G = curve.decodePointHex("04" + gxHex + gyHex);
    db[name]["name"] = name;
    db[name]["keylen"] = keylen;
    db[name]["curve"] = curve;
    db[name]["G"] = G;
    db[name]["n"] = n;
    db[name]["h"] = h;
    db[name]["oid"] = oid;
    db[name]["info"] = info;
    for (var i = 0; i < aliasList.length; i++) {
      aliasDB[aliasList[i]] = name;
    }
  };
})();
KJUR.crypto.ECParameterDB.regist(
  "secp128r1",
  128,
  "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF",
  "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC",
  "E87579C11079F43DD824993C2CEE5ED3",
  "FFFFFFFE0000000075A30D1B9038A115",
  "1",
  "161FF7528B899B2D0C28607CA52C5B86",
  "CF5AC8395BAFEB13C02DA292DDED7A83",
  [],
  "",
  "secp128r1 : SECG curve over a 128 bit prime field"
);
KJUR.crypto.ECParameterDB.regist(
  "secp160k1",
  160,
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73",
  "0",
  "7",
  "0100000000000000000001B8FA16DFAB9ACA16B6B3",
  "1",
  "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB",
  "938CF935318FDCED6BC28286531733C3F03C4FEE",
  [],
  "",
  "secp160k1 : SECG curve over a 160 bit prime field"
);
KJUR.crypto.ECParameterDB.regist(
  "secp160r1",
  160,
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF",
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC",
  "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45",
  "0100000000000000000001F4C8F927AED3CA752257",
  "1",
  "4A96B5688EF573284664698968C38BB913CBFC82",
  "23A628553168947D59DCC912042351377AC5FB32",
  [],
  "",
  "secp160r1 : SECG curve over a 160 bit prime field"
);
KJUR.crypto.ECParameterDB.regist(
  "secp192k1",
  192,
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37",
  "0",
  "3",
  "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D",
  "1",
  "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D",
  "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D",
  []
);
KJUR.crypto.ECParameterDB.regist(
  "secp192r1",
  192,
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF",
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC",
  "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1",
  "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831",
  "1",
  "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012",
  "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811",
  []
);
KJUR.crypto.ECParameterDB.regist(
  "secp224r1",
  224,
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001",
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE",
  "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4",
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D",
  "1",
  "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21",
  "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34",
  []
);
KJUR.crypto.ECParameterDB.regist(
  "secp256k1",
  256,
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F",
  "0",
  "7",
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141",
  "1",
  "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798",
  "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",
  []
);
KJUR.crypto.ECParameterDB.regist(
  "secp256r1",
  256,
  "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF",
  "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC",
  "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B",
  "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551",
  "1",
  "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296",
  "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5",
  ["NIST P-256", "P-256", "prime256v1"]
);
KJUR.crypto.ECParameterDB.regist(
  "secp384r1",
  384,
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF",
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC",
  "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF",
  "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973",
  "1",
  "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7",
  "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f",
  ["NIST P-384", "P-384"]
);
KJUR.crypto.ECParameterDB.regist(
  "secp521r1",
  521,
  "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
  "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC",
  "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00",
  "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409",
  "1",
  "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66",
  "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650",
  ["NIST P-521", "P-521"]
);
KJUR.crypto.ECParameterDB.regist(
  "sm2",
  256,
  "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",
  "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",
  "28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",
  "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123",
  "1",
  "32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7",
  "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0",
  ["sm2", "SM2"]
);
if (typeof KJUR == "undefined" || !KJUR) KJUR = {};
if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) KJUR.crypto = {};
KJUR.crypto.ECDSA = function (params) {
  var curveName = "secp256r1";
  var ecparams = null;
  var prvKeyHex = null;
  var pubKeyHex = null;
  var rng = new SecureRandom();
  var P_OVER_FOUR = null;
  this.type = "EC";
  function implShamirsTrick(P, k, Q, l) {
    var m = Math.max(k.bitLength(), l.bitLength());
    var Z = P.add2D(Q);
    var R = P.curve.getInfinity();
    for (var i = m - 1; i >= 0; --i) {
      R = R.twice2D();
      R.z = BigInteger.ONE;
      if (k.testBit(i)) {
        if (l.testBit(i)) {
          R = R.add2D(Z);
        } else {
          R = R.add2D(P);
        }
      } else {
        if (l.testBit(i)) {
          R = R.add2D(Q);
        }
      }
    }
    return R;
  }
  this.getBigRandom = function (limit) {
    return new BigInteger(limit.bitLength(), rng)
      .mod(limit.subtract(BigInteger.ONE))
      .add(BigInteger.ONE);
  };
  this.setNamedCurve = function (curveName) {
    this.ecparams = KJUR.crypto.ECParameterDB.getByName(curveName);
    this.prvKeyHex = null;
    this.pubKeyHex = null;
    this.curveName = curveName;
  };
  this.setPrivateKeyHex = function (prvKeyHex) {
    this.isPrivate = true;
    this.prvKeyHex = prvKeyHex;
  };
  this.setPublicKeyHex = function (pubKeyHex) {
    this.isPublic = true;
    this.pubKeyHex = pubKeyHex;
  };
  this.generateKeyPairHex = function () {
    var biN = this.ecparams["n"];
    var biPrv = this.getBigRandom(biN);
    var epPub = this.ecparams["G"].multiply(biPrv);
    var biX = epPub.getX().toBigInteger();
    var biY = epPub.getY().toBigInteger();
    var charlen = this.ecparams["keylen"] / 4;
    var hPrv = ("0000000000" + biPrv.toString(16)).slice(-charlen);
    var hX = ("0000000000" + biX.toString(16)).slice(-charlen);
    var hY = ("0000000000" + biY.toString(16)).slice(-charlen);
    var hPub = "04" + hX + hY;
    this.setPrivateKeyHex(hPrv);
    this.setPublicKeyHex(hPub);
    return { ecprvhex: hPrv, ecpubhex: hPub };
  };
  this.signWithMessageHash = function (hashHex) {
    return this.signHex(hashHex, this.prvKeyHex);
  };
  this.signHex = function (hashHex, privHex) {
    var d = new BigInteger(privHex, 16);
    var n = this.ecparams["n"];
    var e = new BigInteger(hashHex, 16);
    do {
      var k = this.getBigRandom(n);
      var G = this.ecparams["G"];
      var Q = G.multiply(k);
      var r = Q.getX().toBigInteger().mod(n);
    } while (r.compareTo(BigInteger.ZERO) <= 0);
    var s = k
      .modInverse(n)
      .multiply(e.add(d.multiply(r)))
      .mod(n);
    return KJUR.crypto.ECDSA.biRSSigToASN1Sig(r, s);
  };
  this.sign = function (hash, priv) {
    var d = priv;
    var n = this.ecparams["n"];
    var e = BigInteger.fromByteArrayUnsigned(hash);
    do {
      var k = this.getBigRandom(n);
      var G = this.ecparams["G"];
      var Q = G.multiply(k);
      var r = Q.getX().toBigInteger().mod(n);
    } while (r.compareTo(BigInteger.ZERO) <= 0);
    var s = k
      .modInverse(n)
      .multiply(e.add(d.multiply(r)))
      .mod(n);
    return this.serializeSig(r, s);
  };
  this.verifyWithMessageHash = function (hashHex, sigHex) {
    return this.verifyHex(hashHex, sigHex, this.pubKeyHex);
  };
  this.verifyHex = function (hashHex, sigHex, pubkeyHex) {
    var r, s;
    var obj = KJUR.crypto.ECDSA.parseSigHex(sigHex);
    r = obj.r;
    s = obj.s;
    var Q;
    Q = ECPointFp.decodeFromHex(this.ecparams["curve"], pubkeyHex);
    var e = new BigInteger(hashHex, 16);
    return this.verifyRaw(e, r, s, Q);
  };
  this.verify = function (hash, sig, pubkey) {
    var r, s;
    if (Bitcoin.Util.isArray(sig)) {
      var obj = this.parseSig(sig);
      r = obj.r;
      s = obj.s;
    } else if ("object" === typeof sig && sig.r && sig.s) {
      r = sig.r;
      s = sig.s;
    } else {
      throw "Invalid value for signature";
    }
    var Q;
    if (pubkey instanceof ECPointFp) {
      Q = pubkey;
    } else if (Bitcoin.Util.isArray(pubkey)) {
      Q = ECPointFp.decodeFrom(this.ecparams["curve"], pubkey);
    } else {
      throw "Invalid format for pubkey value, must be byte array or ECPointFp";
    }
    var e = BigInteger.fromByteArrayUnsigned(hash);
    return this.verifyRaw(e, r, s, Q);
  };
  this.verifyRaw = function (e, r, s, Q) {
    var n = this.ecparams["n"];
    var G = this.ecparams["G"];
    if (r.compareTo(BigInteger.ONE) < 0 || r.compareTo(n) >= 0) return false;
    if (s.compareTo(BigInteger.ONE) < 0 || s.compareTo(n) >= 0) return false;
    var c = s.modInverse(n);
    var u1 = e.multiply(c).mod(n);
    var u2 = r.multiply(c).mod(n);
    var point = G.multiply(u1).add(Q.multiply(u2));
    var v = point.getX().toBigInteger().mod(n);
    return v.equals(r);
  };
  this.serializeSig = function (r, s) {
    var rBa = r.toByteArraySigned();
    var sBa = s.toByteArraySigned();
    var sequence = [];
    sequence.push(0x02);
    sequence.push(rBa.length);
    sequence = sequence.concat(rBa);
    sequence.push(0x02);
    sequence.push(sBa.length);
    sequence = sequence.concat(sBa);
    sequence.unshift(sequence.length);
    sequence.unshift(0x30);
    return sequence;
  };
  this.parseSig = function (sig) {
    var cursor;
    if (sig[0] != 0x30) throw new Error("Signature not a valid DERSequence");
    cursor = 2;
    if (sig[cursor] != 0x02)
      throw new Error("First element in signature must be a DERInteger");
    var rBa = sig.slice(cursor + 2, cursor + 2 + sig[cursor + 1]);
    cursor += 2 + sig[cursor + 1];
    if (sig[cursor] != 0x02)
      throw new Error("Second element in signature must be a DERInteger");
    var sBa = sig.slice(cursor + 2, cursor + 2 + sig[cursor + 1]);
    cursor += 2 + sig[cursor + 1];
    var r = BigInteger.fromByteArrayUnsigned(rBa);
    var s = BigInteger.fromByteArrayUnsigned(sBa);
    return { r: r, s: s };
  };
  this.parseSigCompact = function (sig) {
    if (sig.length !== 65) {
      throw "Signature has the wrong length";
    }
    var i = sig[0] - 27;
    if (i < 0 || i > 7) {
      throw "Invalid signature type";
    }
    var n = this.ecparams["n"];
    var r = BigInteger.fromByteArrayUnsigned(sig.slice(1, 33)).mod(n);
    var s = BigInteger.fromByteArrayUnsigned(sig.slice(33, 65)).mod(n);
    return { r: r, s: s, i: i };
  };
  if (params !== undefined) {
    if (params["curve"] !== undefined) {
      this.curveName = params["curve"];
    }
  }
  if (this.curveName === undefined) this.curveName = curveName;
  this.setNamedCurve(this.curveName);
  if (params !== undefined) {
    if (params["prv"] !== undefined) this.setPrivateKeyHex(params["prv"]);
    if (params["pub"] !== undefined) this.setPublicKeyHex(params["pub"]);
  }
};
KJUR.crypto.ECDSA.parseSigHex = function (sigHex) {
  var p = KJUR.crypto.ECDSA.parseSigHexInHexRS(sigHex);
  var biR = new BigInteger(p.r, 16);
  var biS = new BigInteger(p.s, 16);
  return { r: biR, s: biS };
};
KJUR.crypto.ECDSA.parseSigHexInHexRS = function (sigHex) {
  if (sigHex.substr(0, 2) != "30") throw "signature is not a ASN.1 sequence";
  var a = ASN1HEX.getPosArrayOfChildren_AtObj(sigHex, 0);
  if (a.length != 2)
    throw "number of signature ASN.1 sequence elements seem wrong";
  var iTLV1 = a[0];
  var iTLV2 = a[1];
  if (sigHex.substr(iTLV1, 2) != "02")
    throw "1st item of sequene of signature is not ASN.1 integer";
  if (sigHex.substr(iTLV2, 2) != "02")
    throw "2nd item of sequene of signature is not ASN.1 integer";
  var hR = ASN1HEX.getHexOfV_AtObj(sigHex, iTLV1);
  var hS = ASN1HEX.getHexOfV_AtObj(sigHex, iTLV2);
  return { r: hR, s: hS };
};
KJUR.crypto.ECDSA.asn1SigToConcatSig = function (asn1Sig) {
  var pSig = KJUR.crypto.ECDSA.parseSigHexInHexRS(asn1Sig);
  var hR = pSig.r;
  var hS = pSig.s;
  if (hR.substr(0, 2) == "00" && ((hR.length / 2) * 8) % (16 * 8) == 8)
    hR = hR.substr(2);
  if (hS.substr(0, 2) == "00" && ((hS.length / 2) * 8) % (16 * 8) == 8)
    hS = hS.substr(2);
  if (((hR.length / 2) * 8) % (16 * 8) != 0)
    throw "unknown ECDSA sig r length error";
  if (((hS.length / 2) * 8) % (16 * 8) != 0)
    throw "unknown ECDSA sig s length error";
  return hR + hS;
};
KJUR.crypto.ECDSA.concatSigToASN1Sig = function (concatSig) {
  if (((concatSig.length / 2) * 8) % (16 * 8) != 0)
    throw "unknown ECDSA concatinated r-s sig  length error";
  var hR = concatSig.substr(0, concatSig.length / 2);
  var hS = concatSig.substr(concatSig.length / 2);
  return KJUR.crypto.ECDSA.hexRSSigToASN1Sig(hR, hS);
};
KJUR.crypto.ECDSA.hexRSSigToASN1Sig = function (hR, hS) {
  var biR = new BigInteger(hR, 16);
  var biS = new BigInteger(hS, 16);
  return KJUR.crypto.ECDSA.biRSSigToASN1Sig(biR, biS);
};
KJUR.crypto.ECDSA.biRSSigToASN1Sig = function (biR, biS) {
  var derR = new KJUR.asn1.DERInteger({ bigint: biR });
  var derS = new KJUR.asn1.DERInteger({ bigint: biS });
  var derSeq = new KJUR.asn1.DERSequence({ array: [derR, derS] });
  return derSeq.getEncodedHex();
};
ECFieldElementFp.prototype.getByteLength = function () {
  return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
};
ECPointFp.prototype.getEncoded = function (compressed) {
  var integerToBytes = function (i, len) {
    var bytes = i.toByteArrayUnsigned();
    if (len < bytes.length) {
      bytes = bytes.slice(bytes.length - len);
    } else
      while (len > bytes.length) {
        bytes.unshift(0);
      }
    return bytes;
  };
  var x = this.getX().toBigInteger();
  var y = this.getY().toBigInteger();
  var enc = integerToBytes(x, 32);
  if (compressed) {
    if (y.isEven()) {
      enc.unshift(0x02);
    } else {
      enc.unshift(0x03);
    }
  } else {
    enc.unshift(0x04);
    enc = enc.concat(integerToBytes(y, 32));
  }
  return enc;
};
ECPointFp.decodeFrom = function (curve, enc) {
  var type = enc[0];
  var dataLen = enc.length - 1;
  var xBa = enc.slice(1, 1 + dataLen / 2);
  var yBa = enc.slice(1 + dataLen / 2, 1 + dataLen);
  xBa.unshift(0);
  yBa.unshift(0);
  var x = new BigInteger(xBa);
  var y = new BigInteger(yBa);
  return new ECPointFp(curve, curve.fromBigInteger(x), curve.fromBigInteger(y));
};
ECPointFp.decodeFromHex = function (curve, encHex) {
  var type = encHex.substr(0, 2);
  var dataLen = encHex.length - 2;
  var xHex = encHex.substr(2, dataLen / 2);
  var yHex = encHex.substr(2 + dataLen / 2, dataLen / 2);
  var x = new BigInteger(xHex, 16);
  var y = new BigInteger(yHex, 16);
  return new ECPointFp(curve, curve.fromBigInteger(x), curve.fromBigInteger(y));
};
ECPointFp.prototype.add2D = function (b) {
  if (this.isInfinity()) return b;
  if (b.isInfinity()) return this;
  if (this.x.equals(b.x)) {
    if (this.y.equals(b.y)) {
      return this.twice();
    }
    return this.curve.getInfinity();
  }
  var x_x = b.x.subtract(this.x);
  var y_y = b.y.subtract(this.y);
  var gamma = y_y.divide(x_x);
  var x3 = gamma.square().subtract(this.x).subtract(b.x);
  var y3 = gamma.multiply(this.x.subtract(x3)).subtract(this.y);
  return new ECPointFp(this.curve, x3, y3);
};
ECPointFp.prototype.twice2D = function () {
  if (this.isInfinity()) return this;
  if (this.y.toBigInteger().signum() == 0) {
    return this.curve.getInfinity();
  }
  var TWO = this.curve.fromBigInteger(BigInteger.valueOf(2));
  var THREE = this.curve.fromBigInteger(BigInteger.valueOf(3));
  var gamma = this.x
    .square()
    .multiply(THREE)
    .add(this.curve.a)
    .divide(this.y.multiply(TWO));
  var x3 = gamma.square().subtract(this.x.multiply(TWO));
  var y3 = gamma.multiply(this.x.subtract(x3)).subtract(this.y);
  return new ECPointFp(this.curve, x3, y3);
};
ECPointFp.prototype.multiply2D = function (k) {
  if (this.isInfinity()) return this;
  if (k.signum() == 0) return this.curve.getInfinity();
  var e = k;
  var h = e.multiply(new BigInteger("3"));
  var neg = this.negate();
  var R = this;
  var i;
  for (i = h.bitLength() - 2; i > 0; --i) {
    R = R.twice();
    var hBit = h.testBit(i);
    var eBit = e.testBit(i);
    if (hBit != eBit) {
      R = R.add2D(hBit ? this : neg);
    }
  }
  return R;
};
ECPointFp.prototype.isOnCurve = function () {
  var x = this.getX().toBigInteger();
  var y = this.getY().toBigInteger();
  var a = this.curve.getA().toBigInteger();
  var b = this.curve.getB().toBigInteger();
  var n = this.curve.getQ();
  var lhs = y.multiply(y).mod(n);
  var rhs = x.multiply(x).multiply(x).add(a.multiply(x)).add(b).mod(n);
  return lhs.equals(rhs);
};
ECPointFp.prototype.toString = function () {
  return (
    "(" +
    this.getX().toBigInteger().toString() +
    "," +
    this.getY().toBigInteger().toString() +
    ")"
  );
};
ECPointFp.prototype.validate = function () {
  var n = this.curve.getQ();
  if (this.isInfinity()) {
    throw new Error("Point is at infinity.");
  }
  var x = this.getX().toBigInteger();
  var y = this.getY().toBigInteger();
  if (
    x.compareTo(BigInteger.ONE) < 0 ||
    x.compareTo(n.subtract(BigInteger.ONE)) > 0
  ) {
    throw new Error("x coordinate out of bounds");
  }
  if (
    y.compareTo(BigInteger.ONE) < 0 ||
    y.compareTo(n.subtract(BigInteger.ONE)) > 0
  ) {
    throw new Error("y coordinate out of bounds");
  }
  if (!this.isOnCurve()) {
    throw new Error("Point is not on the curve.");
  }
  if (this.multiply(n).isInfinity()) {
    throw new Error("Point is not a scalar multiple of G.");
  }
  return true;
};
(function () {
  var C = CryptoJS;
  var C_lib = C.lib;
  var WordArray = C_lib.WordArray;
  var Hasher = C_lib.Hasher;
  var C_algo = C.algo;
  var W = [];
  var INER_SM3 = (C_algo.INER_SM3 = Hasher.extend({
    _doReset: function () {
      this._hash = new WordArray.init([
        0x7380166f, 0x4914b2b9, 0x172442d7, 0xda8a0600, 0xa96f30bc, 0x163138aa,
        0xe38dee4d, 0xb0fb0e4e,
      ]);
    },
    _doProcessBlock: function (M, offset) {
      var H = this._hash.words;
      var a = H[0];
      var b = H[1];
      var c = H[2];
      var d = H[3];
      var e = H[4];
      for (var i = 0; i < 80; i++) {
        if (i < 16) {
          W[i] = M[offset + i] | 0;
        } else {
          var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
          W[i] = (n << 1) | (n >>> 31);
        }
        var t = ((a << 5) | (a >>> 27)) + e + W[i];
        if (i < 20) {
          t += ((b & c) | (~b & d)) + 0x5a827999;
        } else if (i < 40) {
          t += (b ^ c ^ d) + 0x6ed9eba1;
        } else if (i < 60) {
          t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
        } else {
          t += (b ^ c ^ d) - 0x359d3e2a;
        }
        e = d;
        d = c;
        c = (b << 30) | (b >>> 2);
        b = a;
        a = t;
      }
      H[0] = (H[0] + a) | 0;
      H[1] = (H[1] + b) | 0;
      H[2] = (H[2] + c) | 0;
      H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0;
    },
    _doFinalize: function () {
      var data = this._data;
      var dataWords = data.words;
      var nBitsTotal = this._nDataBytes * 8;
      var nBitsLeft = data.sigBytes * 8;
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(
        nBitsTotal / 0x100000000
      );
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
      data.sigBytes = dataWords.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var clone = Hasher.clone.call(this);
      clone._hash = this._hash.clone();
      return clone;
    },
  }));
  C.INER_SM3 = Hasher._createHelper(INER_SM3);
  C.HmacINER_SM3 = Hasher._createHmacHelper(INER_SM3);
})();
function INER_SM3Digest() {
  this.BYTE_LENGTH = 64;
  this.xBuf = new Array();
  this.xBufOff = 0;
  this.byteCount = 0;
  this.DIGEST_LENGTH = 32;
  this.v0 = [
    0x7380166f, 0x4914b2b9, 0x172442d7, 0xda8a0600, 0xa96f30bc, 0x163138aa,
    0xe38dee4d, 0xb0fb0e4e,
  ];
  this.v0 = [
    0x7380166f, 0x4914b2b9, 0x172442d7, -628488704, -1452330820, 0x163138aa,
    -477237683, -1325724082,
  ];
  this.v = new Array(8);
  this.v_ = new Array(8);
  this.X0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.X = new Array(68);
  this.xOff = 0;
  this.T_00_15 = 0x79cc4519;
  this.T_16_63 = 0x7a879d8a;
  if (arguments.length > 0) {
    this.InitDigest(arguments[0]);
  } else {
    this.Init();
  }
}
INER_SM3Digest.prototype = {
  Init: function () {
    this.xBuf = new Array(4);
    this.Reset();
  },
  InitDigest: function (t) {
    this.xBuf = new Array(t.xBuf.length);
    Array.Copy(t.xBuf, 0, this.xBuf, 0, t.xBuf.length);
    this.xBufOff = t.xBufOff;
    this.byteCount = t.byteCount;
    Array.Copy(t.X, 0, this.X, 0, t.X.length);
    this.xOff = t.xOff;
    Array.Copy(t.v, 0, this.v, 0, t.v.length);
  },
  GetDigestSize: function () {
    return this.DIGEST_LENGTH;
  },
  Reset: function () {
    this.byteCount = 0;
    this.xBufOff = 0;
    Array.Clear(this.xBuf, 0, this.xBuf.length);
    Array.Copy(this.v0, 0, this.v, 0, this.v0.length);
    this.xOff = 0;
    Array.Copy(this.X0, 0, this.X, 0, this.X0.length);
  },
  GetByteLength: function () {
    return this.BYTE_LENGTH;
  },
  ProcessBlock: function (flasss) {
    var i;
    var ww = this.X;
    var ww_ = new Array(64);
    for (i = 16; i < 68; i++) {
      ww[i] =
        this.P1(ww[i - 16] ^ ww[i - 9] ^ this.ROTATE(ww[i - 3], 15)) ^
        this.ROTATE(ww[i - 13], 7) ^
        ww[i - 6];
    }
    for (i = 0; i < 64; i++) {
      ww_[i] = ww[i] ^ ww[i + 4];
    }
    var vv = this.v;
    var vv_ = this.v_;
    Array.Copy(vv, 0, vv_, 0, this.v0.length);
    var SS1, SS2, TT1, TT2, aaa;
    for (i = 0; i < 16; i++) {
      var ffxxx = false;
      if (flasss && i == 0) {
        ffxxx = false;
        alert(1);
      }
      aaa = this.ROTATE(vv_[0], 12, ffxxx);
      if (flasss && i == 0) {
        alert(aaa);
      }
      if (flasss) ttshow += "\naaa:" + aaa;
      SS1 = Int32.parse(
        Int32.parse(aaa + vv_[4]) + this.ROTATE(this.T_00_15, i)
      );
      if (flasss) ttshow += "\nSS1:" + SS1;
      SS1 = this.ROTATE(SS1, 7);
      if (flasss) ttshow += "\nSS1:" + SS1;
      SS2 = SS1 ^ aaa;
      if (flasss) ttshow += "\nSS2:" + SS2;
      TT1 =
        Int32.parse(
          Int32.parse(this.FF_00_15(vv_[0], vv_[1], vv_[2]) + vv_[3]) + SS2
        ) + ww_[i];
      if (flasss) ttshow += "\nTT1:" + TT1;
      TT2 =
        Int32.parse(
          Int32.parse(this.GG_00_15(vv_[4], vv_[5], vv_[6]) + vv_[7]) + SS1
        ) + ww[i];
      if (flasss) ttshow += "\nTT2:" + TT2;
      vv_[3] = vv_[2];
      if (flasss) ttshow += "\nvv_[3]:" + vv_[3];
      vv_[2] = this.ROTATE(vv_[1], 9);
      if (flasss) ttshow += "\nvv_[2]:" + vv_[2];
      vv_[1] = vv_[0];
      if (flasss) ttshow += "\nvv_[1]:" + vv_[1];
      vv_[0] = TT1;
      if (flasss) ttshow += "\nvv_[0]:" + vv_[0];
      vv_[7] = vv_[6];
      if (flasss) ttshow += "\nvv_[7]:" + vv_[7];
      vv_[6] = this.ROTATE(vv_[5], 19);
      if (flasss) ttshow += "\nvv_[6]:" + vv_[6];
      vv_[5] = vv_[4];
      if (flasss) ttshow += "\nvv_[5]:" + vv_[5];
      var xxx = false;
      vv_[4] = this.P0(TT2, xxx);
      if (flasss) ttshow += "\nvv_[4]:" + vv_[4];
      if (flasss) $("#test111").html($("#test111").html() + ttshow);
    }
    for (i = 16; i < 64; i++) {
      aaa = this.ROTATE(vv_[0], 12);
      SS1 = Int32.parse(
        Int32.parse(aaa + vv_[4]) + this.ROTATE(this.T_16_63, i)
      );
      SS1 = this.ROTATE(SS1, 7);
      SS2 = SS1 ^ aaa;
      TT1 =
        Int32.parse(
          Int32.parse(this.FF_16_63(vv_[0], vv_[1], vv_[2]) + vv_[3]) + SS2
        ) + ww_[i];
      TT2 =
        Int32.parse(
          Int32.parse(this.GG_16_63(vv_[4], vv_[5], vv_[6]) + vv_[7]) + SS1
        ) + ww[i];
      vv_[3] = vv_[2];
      vv_[2] = this.ROTATE(vv_[1], 9);
      vv_[1] = vv_[0];
      vv_[0] = TT1;
      vv_[7] = vv_[6];
      vv_[6] = this.ROTATE(vv_[5], 19);
      vv_[5] = vv_[4];
      vv_[4] = this.P0(TT2);
    }
    for (i = 0; i < 8; i++) {
      vv[i] ^= Int32.parse(vv_[i]);
    }
    this.xOff = 0;
    Array.Copy(this.X0, 0, this.X, 0, this.X0.length);
  },
  ProcessWord: function (in_Renamed, inOff) {
    var n = in_Renamed[inOff] << 24;
    n |= (in_Renamed[++inOff] & 0xff) << 16;
    n |= (in_Renamed[++inOff] & 0xff) << 8;
    n |= in_Renamed[++inOff] & 0xff;
    this.X[this.xOff] = n;
    if (++this.xOff == 16) {
      this.ProcessBlock();
    }
  },
  ProcessLength: function (bitLength) {
    if (this.xOff > 14) {
      this.ProcessBlock();
    }
    this.X[14] = this.URShiftLong(bitLength, 32);
    this.X[15] = bitLength & 0xffffffff;
  },
  IntToBigEndian: function (n, bs, off) {
    bs[off] = Int32.parseByte(this.URShift(n, 24));
    bs[++off] = Int32.parseByte(this.URShift(n, 16));
    bs[++off] = Int32.parseByte(this.URShift(n, 8));
    bs[++off] = Int32.parseByte(n);
  },
  DoFinal: function (out_Renamed, outOff) {
    this.Finish();
    for (var i = 0; i < 8; i++) {
      this.IntToBigEndian(this.v[i], out_Renamed, outOff + i * 4);
    }
    this.Reset();
    return this.DIGEST_LENGTH;
  },
  Update: function (input) {
    this.xBuf[this.xBufOff++] = input;
    if (this.xBufOff == this.xBuf.length) {
      this.ProcessWord(this.xBuf, 0);
      this.xBufOff = 0;
    }
    this.byteCount++;
  },
  BlockUpdate: function (input, inOff, length) {
    while (this.xBufOff != 0 && length > 0) {
      this.Update(input[inOff]);
      inOff++;
      length--;
    }
    while (length > this.xBuf.length) {
      this.ProcessWord(input, inOff);
      inOff += this.xBuf.length;
      length -= this.xBuf.length;
      this.byteCount += this.xBuf.length;
    }
    while (length > 0) {
      this.Update(input[inOff]);
      inOff++;
      length--;
    }
  },
  Finish: function () {
    var bitLength = this.byteCount << 3;
    this.Update(128);
    while (this.xBufOff != 0) this.Update(0);
    this.ProcessLength(bitLength);
    this.ProcessBlock();
  },
  ROTATE: function (x, n, ffxxx) {
    var a = this.URShift(x, 32 - n);
    if (ffxxx) alert(a);
    var b = x << n;
    if (ffxxx) alert(b);
    if (ffxxx) alert(a | b);
    return a | b;
  },
  P0: function (X, xxx) {
    var a = this.ROTATE(X, 9);
    var b = this.ROTATE(X, 17);
    var c = X ^ a ^ b;
    if (xxx) alert("a" + a + "b" + b + "c" + c);
    return c;
  },
  P1: function (X) {
    return X ^ this.ROTATE(X, 15) ^ this.ROTATE(X, 23);
  },
  FF_00_15: function (X, Y, Z) {
    return X ^ Y ^ Z;
  },
  FF_16_63: function (X, Y, Z) {
    return (X & Y) | (X & Z) | (Y & Z);
  },
  GG_00_15: function (X, Y, Z) {
    return X ^ Y ^ Z;
  },
  GG_16_63: function (X, Y, Z) {
    return (X & Y) | (~X & Z);
  },
  URShift: function (number, bits) {
    if (number > Int32.maxValue || number < Int32.minValue) {
      number = Int32.parse(number);
    }
    if (number >= 0) {
      return number >> bits;
    } else {
      return (number >> bits) + (2 << ~bits);
    }
  },
  URShiftLong: function (number, bits) {
    var returnV;
    var big = new BigInteger();
    big.fromInt(number);
    if (big.signum() >= 0) {
      returnV = big.shiftRight(bits).intValue();
    } else {
      var bigAdd = new BigInteger();
      bigAdd.fromInt(2);
      var shiftLeftBits = ~bits;
      var shiftLeftNumber = "";
      if (shiftLeftBits < 0) {
        var shiftRightBits = 64 + shiftLeftBits;
        for (var i = 0; i < shiftRightBits; i++) {
          shiftLeftNumber += "0";
        }
        var shiftLeftNumberBigAdd = new BigInteger();
        shiftLeftNumberBigAdd.fromInt(number >> bits);
        var shiftLeftNumberBig = new BigInteger("10" + shiftLeftNumber, 2);
        shiftLeftNumber = shiftLeftNumberBig.toRadix(10);
        var r = shiftLeftNumberBig.add(shiftLeftNumberBigAdd);
        returnV = r.toRadix(10);
      } else {
        shiftLeftNumber = bigAdd.shiftLeft(~bits).intValue();
        returnV = (number >> bits) + shiftLeftNumber;
      }
    }
    return returnV;
  },
  GetZ: function (g, pubKeyHex) {
    var userId = CryptoJS.enc.Utf8.parse("1234567812345678");
    var len = userId.words.length * 4 * 8;
    this.Update((len >> 8) & 0x00ff);
    this.Update(len & 0x00ff);
    var userIdWords = this.GetWords(userId.toString());
    this.BlockUpdate(userIdWords, 0, userIdWords.length);
    var aWords = this.GetWords(g.curve.a.toBigInteger().toRadix(16));
    var bWords = this.GetWords(g.curve.b.toBigInteger().toRadix(16));
    var gxWords = this.GetWords(g.getX().toBigInteger().toRadix(16));
    var gyWords = this.GetWords(g.getY().toBigInteger().toRadix(16));
    var pxWords = this.GetWords(pubKeyHex.substr(0, 64));
    var pyWords = this.GetWords(pubKeyHex.substr(64, 64));
    this.BlockUpdate(aWords, 0, aWords.length);
    this.BlockUpdate(bWords, 0, bWords.length);
    this.BlockUpdate(gxWords, 0, gxWords.length);
    this.BlockUpdate(gyWords, 0, gyWords.length);
    this.BlockUpdate(pxWords, 0, pxWords.length);
    this.BlockUpdate(pyWords, 0, pyWords.length);
    var md = new Array(this.GetDigestSize());
    this.DoFinal(md, 0);
    return md;
  },
  GetWords: function (hexStr) {
    var words = [];
    var hexStrLength = hexStr.length;
    for (var i = 0; i < hexStrLength; i += 2) {
      words[words.length] = parseInt(hexStr.substr(i, 2), 16);
    }
    return words;
  },
  GetHex: function (arr) {
    var words = [];
    var j = 0;
    for (var i = 0; i < arr.length * 2; i += 2) {
      words[i >>> 3] |= parseInt(arr[j]) << (24 - (i % 8) * 4);
      j++;
    }
    var wordArray = new CryptoJS.lib.WordArray.init(words, arr.length);
    return wordArray;
  },
};
Array.Clear = function (destinationArray, destinationIndex, length) {
  for (elm in destinationArray) {
    destinationArray[elm] = null;
  }
};
Array.Copy = function (
  sourceArray,
  sourceIndex,
  destinationArray,
  destinationIndex,
  length
) {
  var cloneArray = sourceArray.slice(sourceIndex, sourceIndex + length);
  for (var i = 0; i < cloneArray.length; i++) {
    destinationArray[destinationIndex] = cloneArray[i];
    destinationIndex++;
  }
};
window.Int32 = {
  minValue: -parseInt("10000000000000000000000000000000", 2),
  maxValue: parseInt("1111111111111111111111111111111", 2),
  parse: function (n) {
    if (n < this.minValue) {
      var bigInteger = new Number(-n);
      var bigIntegerRadix = bigInteger.toString(2);
      var subBigIntegerRadix = bigIntegerRadix.substr(
        bigIntegerRadix.length - 31,
        31
      );
      var reBigIntegerRadix = "";
      for (var i = 0; i < subBigIntegerRadix.length; i++) {
        var subBigIntegerRadixItem = subBigIntegerRadix.substr(i, 1);
        reBigIntegerRadix += subBigIntegerRadixItem == "0" ? "1" : "0";
      }
      var result = parseInt(reBigIntegerRadix, 2);
      return result + 1;
    } else if (n > this.maxValue) {
      var bigInteger = Number(n);
      var bigIntegerRadix = bigInteger.toString(2);
      var subBigIntegerRadix = bigIntegerRadix.substr(
        bigIntegerRadix.length - 31,
        31
      );
      var reBigIntegerRadix = "";
      for (var i = 0; i < subBigIntegerRadix.length; i++) {
        var subBigIntegerRadixItem = subBigIntegerRadix.substr(i, 1);
        reBigIntegerRadix += subBigIntegerRadixItem == "0" ? "1" : "0";
      }
      var result = parseInt(reBigIntegerRadix, 2);
      return -(result + 1);
    } else {
      return n;
    }
  },
  parseByte: function (n) {
    if (n < 0) {
      var bigInteger = new Number(-n);
      var bigIntegerRadix = bigInteger.toString(2);
      var subBigIntegerRadix = bigIntegerRadix.substr(
        bigIntegerRadix.length - 8,
        8
      );
      var reBigIntegerRadix = "";
      for (var i = 0; i < subBigIntegerRadix.length; i++) {
        var subBigIntegerRadixItem = subBigIntegerRadix.substr(i, 1);
        reBigIntegerRadix += subBigIntegerRadixItem == "0" ? "1" : "0";
      }
      var result = parseInt(reBigIntegerRadix, 2);
      return result + 1;
    } else if (n > 255) {
      var bigInteger = Number(n);
      var bigIntegerRadix = bigInteger.toString(2);
      return parseInt(bigIntegerRadix.substr(bigIntegerRadix.length - 8, 8), 2);
    } else {
      return n;
    }
  },
};
function J(cipherMode) {
  this.ct = 1;
  this.p2 = null;
  this.sm3keybase = null;
  this.sm3c3 = null;
  this.key = new Array(32);
  this.keyOff = 0;
  if (typeof cipherMode != "undefined") {
    this.cipherMode = cipherMode;
  } else {
    this.cipherMode = SM2CipherMode.C1C3C2;
  }
}
J.prototype = {
  Reset: function () {
    this.sm3keybase = new INER_SM3Digest();
    this.sm3c3 = new INER_SM3Digest();
    var xhex = ("0000000000" + this.p2.getX().toBigInteger().toRadix(16)).slice(
      -64
    );
    var yhex = ("0000000000" + this.p2.getY().toBigInteger().toRadix(16)).slice(
      -64
    );
    var xWords = this.GetWords(xhex);
    var yWords = this.GetWords(yhex);
    this.sm3keybase.BlockUpdate(xWords, 0, xWords.length);
    this.sm3c3.BlockUpdate(xWords, 0, xWords.length);
    this.sm3keybase.BlockUpdate(yWords, 0, yWords.length);
    this.ct = 1;
    this.NextKey();
  },
  NextKey: function () {
    var sm3keycur = new INER_SM3Digest(this.sm3keybase);
    sm3keycur.Update((this.ct >> 24) & 0x00ff);
    sm3keycur.Update((this.ct >> 16) & 0x00ff);
    sm3keycur.Update((this.ct >> 8) & 0x00ff);
    sm3keycur.Update(this.ct & 0x00ff);
    sm3keycur.DoFinal(this.key, 0);
    this.keyOff = 0;
    this.ct++;
  },
  InitEncipher: function (userKey) {
    var k = null;
    var c1 = null;
    var ec = new KJUR.crypto.ECDSA({ curve: "sm2" });
    var keypair = ec.generateKeyPairHex();
    k = new BigInteger(keypair.ecprvhex, 16);
    var pubkeyHex = keypair.ecpubhex;
    c1 = ECPointFp.decodeFromHex(ec.ecparams["curve"], pubkeyHex);
    this.p2 = userKey.multiply(k);
    this.Reset();
    return c1;
  },
  EncryptBlock: function (data, falsss) {
    this.sm3c3.BlockUpdate(data, 0, data.length);
    if (falsss) alert(1);
    for (var i = 0; i < data.length; i++) {
      if (this.keyOff == this.key.length) {
        this.NextKey();
      }
      data[i] ^= this.key[this.keyOff++];
    }
  },
  InitDecipher: function (userD, c1) {
    this.p2 = c1.multiply(userD);
    this.Reset();
  },
  DecryptBlock: function (data) {
    for (var i = 0; i < data.length; i++) {
      if (this.keyOff == this.key.length) {
        this.NextKey();
      }
      data[i] ^= this.key[this.keyOff++];
    }
    this.sm3c3.BlockUpdate(data, 0, data.length);
  },
  Dofinal: function (c3) {
    var yhex = ("0000000000" + this.p2.getY().toBigInteger().toRadix(16)).slice(
      -64
    );
    var yWords = this.GetWords(yhex);
    this.sm3c3.BlockUpdate(yWords, 0, yWords.length);
    this.sm3c3.DoFinal(c3, 0);
    this.Reset();
  },
  Encrypt: function (pubKey, plaintext) {
    var data = new Array(plaintext.length);
    Array.Copy(plaintext, 0, data, 0, plaintext.length);
    var c1 = this.InitEncipher(pubKey);
    this.EncryptBlock(data);
    var c3 = new Array(32);
    this.Dofinal(c3);
    var xhex = ("0000000000" + c1.getX().toBigInteger().toRadix(16)).slice(-64);
    var yhex = ("0000000000" + c1.getY().toBigInteger().toRadix(16)).slice(-64);
    var hexString =
      xhex + yhex + this.GetHex(data).toString() + this.GetHex(c3).toString();
    if (this.cipherMode == SM2CipherMode.C1C3C2) {
      hexString =
        xhex + yhex + this.GetHex(c3).toString() + this.GetHex(data).toString();
    }
    return hexString;
  },
  GetWords: function (hexStr) {
    var words = [];
    var hexStrLength = hexStr.length;
    for (var i = 0; i < hexStrLength; i += 2) {
      words[words.length] = parseInt(hexStr.substr(i, 2), 16);
    }
    return words;
  },
  GetHex: function (arr) {
    for (var n = 0; n < arr.length; n++) {
      arr[n] &= 0x000000ff;
    }
    var words = [];
    var j = 0;
    for (var i = 0; i < arr.length * 2; i += 2) {
      words[i >>> 3] |= parseInt(arr[j]) << (24 - (i % 8) * 4);
      j++;
    }
    var wordArray = new CryptoJS.lib.WordArray.init(words, arr.length);
    return wordArray;
  },
  Decrypt: function (privateKey, ciphertext) {
    var hexString = ciphertext;
    var c1X = hexString.substr(0, 64);
    var c1Y = hexString.substr(0 + c1X.length, 64);
    var encrypData = hexString.substr(
      c1X.length + c1Y.length,
      hexString.length - c1X.length - c1Y.length - 64
    );
    var c3 = hexString.substr(hexString.length - 64);
    if (this.cipherMode == SM2CipherMode.C1C3C2) {
      c3 = hexString.substr(c1X.length + c1Y.length, 64);
      encrypData = hexString.substr(c1X.length + c1Y.length + 64);
    }
    var data = this.GetWords(encrypData);
    var c1 = this.CreatePoint(c1X, c1Y);
    this.InitDecipher(privateKey, c1);
    this.DecryptBlock(data);
    var c3_ = new Array(32);
    this.Dofinal(c3_);
    var isDecrypt = this.GetHex(c3_).toString() == c3;
    if (isDecrypt) {
      var wordArray = this.GetHex(data);
      var decryptData = CryptoJS.enc.Utf8.stringify(wordArray);
      return decryptData;
    } else {
      return "";
    }
  },
  CreatePoint: function (x, y) {
    var ec = new KJUR.crypto.ECDSA({ curve: "sm2" });
    var ecc_curve = ec.ecparams["curve"];
    var pubkeyHex = "04" + x + y;
    var point = ECPointFp.decodeFromHex(ecc_curve, pubkeyHex);
    return point;
  },
};
window.SM2CipherMode = { C1C2C3: "0", C1C3C2: "1" };
function bK() {
  var r = {};
  var curve = "sm2";
  var ec = new KJUR.crypto.ECDSA({ curve: curve });
  var keypair = ec.generateKeyPairHex();
  r.privatekey = keypair.ecprvhex;
  r.publickey = keypair.ecpubhex;
  return r;
}
function O(msg, pubkeyHex, cipherMode, rflage) {
  var r = "";
  var curve = "SM2";
  var msgData = CryptoJS.enc.Utf8.parse(msg);
  var puh = pubkeyHex.length;
  if (puh > 64 * 2) {
    pubkeyHex = pubkeyHex.substr(pubkeyHex.length - 64 * 2);
  }
  var xHex = pubkeyHex.substr(0, 64);
  var yHex = pubkeyHex.substr(64);
  var cipher = new J(cipherMode);
  var userKey = cipher.CreatePoint(xHex, yHex);
  msgData = cipher.GetWords(msgData.toString());
  var encryptData = cipher.Encrypt(userKey, msgData);
  return "04" + encryptData;
}
function V(data, prvkey, cipherMode, rflage) {
  var r = "";
  var privateKey = new BigInteger(prvkey, 16);
  var cipher = new J(cipherMode);
  if (rflage) data = data.slice(2, data.length);
  r = cipher.Decrypt(privateKey, data);
  return r;
}
function des(key, message, encrypt, mode, iv, padding) {
  if (encrypt == 1) {
    for (var i = 0; i < 8; i++) {
      message += " ";
    }
  }
  var spfunction1 = new Array(
    0x1010400,
    0,
    0x10000,
    0x1010404,
    0x1010004,
    0x10404,
    0x4,
    0x10000,
    0x400,
    0x1010400,
    0x1010404,
    0x400,
    0x1000404,
    0x1010004,
    0x1000000,
    0x4,
    0x404,
    0x1000400,
    0x1000400,
    0x10400,
    0x10400,
    0x1010000,
    0x1010000,
    0x1000404,
    0x10004,
    0x1000004,
    0x1000004,
    0x10004,
    0,
    0x404,
    0x10404,
    0x1000000,
    0x10000,
    0x1010404,
    0x4,
    0x1010000,
    0x1010400,
    0x1000000,
    0x1000000,
    0x400,
    0x1010004,
    0x10000,
    0x10400,
    0x1000004,
    0x400,
    0x4,
    0x1000404,
    0x10404,
    0x1010404,
    0x10004,
    0x1010000,
    0x1000404,
    0x1000004,
    0x404,
    0x10404,
    0x1010400,
    0x404,
    0x1000400,
    0x1000400,
    0,
    0x10004,
    0x10400,
    0,
    0x1010004
  );
  var spfunction2 = new Array(
    -0x7fef7fe0,
    -0x7fff8000,
    0x8000,
    0x108020,
    0x100000,
    0x20,
    -0x7fefffe0,
    -0x7fff7fe0,
    -0x7fffffe0,
    -0x7fef7fe0,
    -0x7fef8000,
    -0x80000000,
    -0x7fff8000,
    0x100000,
    0x20,
    -0x7fefffe0,
    0x108000,
    0x100020,
    -0x7fff7fe0,
    0,
    -0x80000000,
    0x8000,
    0x108020,
    -0x7ff00000,
    0x100020,
    -0x7fffffe0,
    0,
    0x108000,
    0x8020,
    -0x7fef8000,
    -0x7ff00000,
    0x8020,
    0,
    0x108020,
    -0x7fefffe0,
    0x100000,
    -0x7fff7fe0,
    -0x7ff00000,
    -0x7fef8000,
    0x8000,
    -0x7ff00000,
    -0x7fff8000,
    0x20,
    -0x7fef7fe0,
    0x108020,
    0x20,
    0x8000,
    -0x80000000,
    0x8020,
    -0x7fef8000,
    0x100000,
    -0x7fffffe0,
    0x100020,
    -0x7fff7fe0,
    -0x7fffffe0,
    0x100020,
    0x108000,
    0,
    -0x7fff8000,
    0x8020,
    -0x80000000,
    -0x7fefffe0,
    -0x7fef7fe0,
    0x108000
  );
  var spfunction3 = new Array(
    0x208,
    0x8020200,
    0,
    0x8020008,
    0x8000200,
    0,
    0x20208,
    0x8000200,
    0x20008,
    0x8000008,
    0x8000008,
    0x20000,
    0x8020208,
    0x20008,
    0x8020000,
    0x208,
    0x8000000,
    0x8,
    0x8020200,
    0x200,
    0x20200,
    0x8020000,
    0x8020008,
    0x20208,
    0x8000208,
    0x20200,
    0x20000,
    0x8000208,
    0x8,
    0x8020208,
    0x200,
    0x8000000,
    0x8020200,
    0x8000000,
    0x20008,
    0x208,
    0x20000,
    0x8020200,
    0x8000200,
    0,
    0x200,
    0x20008,
    0x8020208,
    0x8000200,
    0x8000008,
    0x200,
    0,
    0x8020008,
    0x8000208,
    0x20000,
    0x8000000,
    0x8020208,
    0x8,
    0x20208,
    0x20200,
    0x8000008,
    0x8020000,
    0x8000208,
    0x208,
    0x8020000,
    0x20208,
    0x8,
    0x8020008,
    0x20200
  );
  var spfunction4 = new Array(
    0x802001,
    0x2081,
    0x2081,
    0x80,
    0x802080,
    0x800081,
    0x800001,
    0x2001,
    0,
    0x802000,
    0x802000,
    0x802081,
    0x81,
    0,
    0x800080,
    0x800001,
    0x1,
    0x2000,
    0x800000,
    0x802001,
    0x80,
    0x800000,
    0x2001,
    0x2080,
    0x800081,
    0x1,
    0x2080,
    0x800080,
    0x2000,
    0x802080,
    0x802081,
    0x81,
    0x800080,
    0x800001,
    0x802000,
    0x802081,
    0x81,
    0,
    0,
    0x802000,
    0x2080,
    0x800080,
    0x800081,
    0x1,
    0x802001,
    0x2081,
    0x2081,
    0x80,
    0x802081,
    0x81,
    0x1,
    0x2000,
    0x800001,
    0x2001,
    0x802080,
    0x800081,
    0x2001,
    0x2080,
    0x800000,
    0x802001,
    0x80,
    0x800000,
    0x2000,
    0x802080
  );
  var spfunction5 = new Array(
    0x100,
    0x2080100,
    0x2080000,
    0x42000100,
    0x80000,
    0x100,
    0x40000000,
    0x2080000,
    0x40080100,
    0x80000,
    0x2000100,
    0x40080100,
    0x42000100,
    0x42080000,
    0x80100,
    0x40000000,
    0x2000000,
    0x40080000,
    0x40080000,
    0,
    0x40000100,
    0x42080100,
    0x42080100,
    0x2000100,
    0x42080000,
    0x40000100,
    0,
    0x42000000,
    0x2080100,
    0x2000000,
    0x42000000,
    0x80100,
    0x80000,
    0x42000100,
    0x100,
    0x2000000,
    0x40000000,
    0x2080000,
    0x42000100,
    0x40080100,
    0x2000100,
    0x40000000,
    0x42080000,
    0x2080100,
    0x40080100,
    0x100,
    0x2000000,
    0x42080000,
    0x42080100,
    0x80100,
    0x42000000,
    0x42080100,
    0x2080000,
    0,
    0x40080000,
    0x42000000,
    0x80100,
    0x2000100,
    0x40000100,
    0x80000,
    0,
    0x40080000,
    0x2080100,
    0x40000100
  );
  var spfunction6 = new Array(
    0x20000010,
    0x20400000,
    0x4000,
    0x20404010,
    0x20400000,
    0x10,
    0x20404010,
    0x400000,
    0x20004000,
    0x404010,
    0x400000,
    0x20000010,
    0x400010,
    0x20004000,
    0x20000000,
    0x4010,
    0,
    0x400010,
    0x20004010,
    0x4000,
    0x404000,
    0x20004010,
    0x10,
    0x20400010,
    0x20400010,
    0,
    0x404010,
    0x20404000,
    0x4010,
    0x404000,
    0x20404000,
    0x20000000,
    0x20004000,
    0x10,
    0x20400010,
    0x404000,
    0x20404010,
    0x400000,
    0x4010,
    0x20000010,
    0x400000,
    0x20004000,
    0x20000000,
    0x4010,
    0x20000010,
    0x20404010,
    0x404000,
    0x20400000,
    0x404010,
    0x20404000,
    0,
    0x20400010,
    0x10,
    0x4000,
    0x20400000,
    0x404010,
    0x4000,
    0x400010,
    0x20004010,
    0,
    0x20404000,
    0x20000000,
    0x400010,
    0x20004010
  );
  var spfunction7 = new Array(
    0x200000,
    0x4200002,
    0x4000802,
    0,
    0x800,
    0x4000802,
    0x200802,
    0x4200800,
    0x4200802,
    0x200000,
    0,
    0x4000002,
    0x2,
    0x4000000,
    0x4200002,
    0x802,
    0x4000800,
    0x200802,
    0x200002,
    0x4000800,
    0x4000002,
    0x4200000,
    0x4200800,
    0x200002,
    0x4200000,
    0x800,
    0x802,
    0x4200802,
    0x200800,
    0x2,
    0x4000000,
    0x200800,
    0x4000000,
    0x200800,
    0x200000,
    0x4000802,
    0x4000802,
    0x4200002,
    0x4200002,
    0x2,
    0x200002,
    0x4000000,
    0x4000800,
    0x200000,
    0x4200800,
    0x802,
    0x200802,
    0x4200800,
    0x802,
    0x4000002,
    0x4200802,
    0x4200000,
    0x200800,
    0,
    0x2,
    0x4200802,
    0,
    0x200802,
    0x4200000,
    0x800,
    0x4000002,
    0x4000800,
    0x800,
    0x200002
  );
  var spfunction8 = new Array(
    0x10001040,
    0x1000,
    0x40000,
    0x10041040,
    0x10000000,
    0x10001040,
    0x40,
    0x10000000,
    0x40040,
    0x10040000,
    0x10041040,
    0x41000,
    0x10041000,
    0x41040,
    0x1000,
    0x40,
    0x10040000,
    0x10000040,
    0x10001000,
    0x1040,
    0x41000,
    0x40040,
    0x10040040,
    0x10041000,
    0x1040,
    0,
    0,
    0x10040040,
    0x10000040,
    0x10001000,
    0x41040,
    0x40000,
    0x41040,
    0x40000,
    0x10041000,
    0x1000,
    0x40,
    0x10040040,
    0x1000,
    0x41040,
    0x10001000,
    0x40,
    0x10000040,
    0x10040000,
    0x10040040,
    0x10000000,
    0x40000,
    0x10001040,
    0,
    0x10041040,
    0x40040,
    0x10000040,
    0x10040000,
    0x10001000,
    0x10001040,
    0,
    0x10041040,
    0x41000,
    0x41000,
    0x1040,
    0x1040,
    0x40040,
    0x10000000,
    0x10041000
  );
  var keys = des_createKeys(key);
  var m = 0,
    i,
    j,
    temp,
    temp2,
    right1,
    right2,
    left,
    right,
    looping;
  var cbcleft, cbcleft2, cbcright, cbcright2;
  var endloop, loopinc;
  var len = message.length;
  var chunk = 0;
  var iterations = keys.length == 32 ? 3 : 9;
  if (iterations == 3) {
    looping = encrypt ? new Array(0, 32, 2) : new Array(30, -2, -2);
  } else {
    looping = encrypt
      ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2)
      : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2);
  }
  if (padding == 2) message += "        ";
  else if (padding == 1) {
    temp = 8 - (len % 8);
    message += String.fromCharCode(
      temp,
      temp,
      temp,
      temp,
      temp,
      temp,
      temp,
      temp
    );
    if (temp == 8) len += 8;
  } else if (!padding) message += "\0\0\0\0\0\0\0\0";
  result = "";
  tempresult = "";
  if (mode == 1) {
    cbcleft =
      (iv.charCodeAt(m++) << 24) |
      (iv.charCodeAt(m++) << 16) |
      (iv.charCodeAt(m++) << 8) |
      iv.charCodeAt(m++);
    cbcright =
      (iv.charCodeAt(m++) << 24) |
      (iv.charCodeAt(m++) << 16) |
      (iv.charCodeAt(m++) << 8) |
      iv.charCodeAt(m++);
    m = 0;
  }
  while (m < len) {
    left =
      (message.charCodeAt(m++) << 24) |
      (message.charCodeAt(m++) << 16) |
      (message.charCodeAt(m++) << 8) |
      message.charCodeAt(m++);
    right =
      (message.charCodeAt(m++) << 24) |
      (message.charCodeAt(m++) << 16) |
      (message.charCodeAt(m++) << 8) |
      message.charCodeAt(m++);
    if (mode == 1) {
      if (encrypt) {
        left ^= cbcleft;
        right ^= cbcright;
      } else {
        cbcleft2 = cbcleft;
        cbcright2 = cbcright;
        cbcleft = left;
        cbcright = right;
      }
    }
    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
    right ^= temp;
    left ^= temp << 4;
    temp = ((left >>> 16) ^ right) & 0x0000ffff;
    right ^= temp;
    left ^= temp << 16;
    temp = ((right >>> 2) ^ left) & 0x33333333;
    left ^= temp;
    right ^= temp << 2;
    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
    left ^= temp;
    right ^= temp << 8;
    temp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= temp;
    left ^= temp << 1;
    left = (left << 1) | (left >>> 31);
    right = (right << 1) | (right >>> 31);
    for (j = 0; j < iterations; j += 3) {
      endloop = looping[j + 1];
      loopinc = looping[j + 2];
      for (i = looping[j]; i != endloop; i += loopinc) {
        right1 = right ^ keys[i];
        right2 = ((right >>> 4) | (right << 28)) ^ keys[i + 1];
        temp = left;
        left = right;
        right =
          temp ^
          (spfunction2[(right1 >>> 24) & 0x3f] |
            spfunction4[(right1 >>> 16) & 0x3f] |
            spfunction6[(right1 >>> 8) & 0x3f] |
            spfunction8[right1 & 0x3f] |
            spfunction1[(right2 >>> 24) & 0x3f] |
            spfunction3[(right2 >>> 16) & 0x3f] |
            spfunction5[(right2 >>> 8) & 0x3f] |
            spfunction7[right2 & 0x3f]);
      }
      temp = left;
      left = right;
      right = temp;
    }
    left = (left >>> 1) | (left << 31);
    right = (right >>> 1) | (right << 31);
    temp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= temp;
    left ^= temp << 1;
    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
    left ^= temp;
    right ^= temp << 8;
    temp = ((right >>> 2) ^ left) & 0x33333333;
    left ^= temp;
    right ^= temp << 2;
    temp = ((left >>> 16) ^ right) & 0x0000ffff;
    right ^= temp;
    left ^= temp << 16;
    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
    right ^= temp;
    left ^= temp << 4;
    if (mode == 1) {
      if (encrypt) {
        cbcleft = left;
        cbcright = right;
      } else {
        left ^= cbcleft2;
        right ^= cbcright2;
      }
    }
    tempresult += String.fromCharCode(
      left >>> 24,
      (left >>> 16) & 0xff,
      (left >>> 8) & 0xff,
      left & 0xff,
      right >>> 24,
      (right >>> 16) & 0xff,
      (right >>> 8) & 0xff,
      right & 0xff
    );
    chunk += 8;
    if (chunk == 512) {
      result += tempresult;
      tempresult = "";
      chunk = 0;
    }
  }
  return result + tempresult;
}
function des_createKeys(key) {
  pc2bytes0 = new Array(
    0,
    0x4,
    0x20000000,
    0x20000004,
    0x10000,
    0x10004,
    0x20010000,
    0x20010004,
    0x200,
    0x204,
    0x20000200,
    0x20000204,
    0x10200,
    0x10204,
    0x20010200,
    0x20010204
  );
  pc2bytes1 = new Array(
    0,
    0x1,
    0x100000,
    0x100001,
    0x4000000,
    0x4000001,
    0x4100000,
    0x4100001,
    0x100,
    0x101,
    0x100100,
    0x100101,
    0x4000100,
    0x4000101,
    0x4100100,
    0x4100101
  );
  pc2bytes2 = new Array(
    0,
    0x8,
    0x800,
    0x808,
    0x1000000,
    0x1000008,
    0x1000800,
    0x1000808,
    0,
    0x8,
    0x800,
    0x808,
    0x1000000,
    0x1000008,
    0x1000800,
    0x1000808
  );
  pc2bytes3 = new Array(
    0,
    0x200000,
    0x8000000,
    0x8200000,
    0x2000,
    0x202000,
    0x8002000,
    0x8202000,
    0x20000,
    0x220000,
    0x8020000,
    0x8220000,
    0x22000,
    0x222000,
    0x8022000,
    0x8222000
  );
  pc2bytes4 = new Array(
    0,
    0x40000,
    0x10,
    0x40010,
    0,
    0x40000,
    0x10,
    0x40010,
    0x1000,
    0x41000,
    0x1010,
    0x41010,
    0x1000,
    0x41000,
    0x1010,
    0x41010
  );
  pc2bytes5 = new Array(
    0,
    0x400,
    0x20,
    0x420,
    0,
    0x400,
    0x20,
    0x420,
    0x2000000,
    0x2000400,
    0x2000020,
    0x2000420,
    0x2000000,
    0x2000400,
    0x2000020,
    0x2000420
  );
  pc2bytes6 = new Array(
    0,
    0x10000000,
    0x80000,
    0x10080000,
    0x2,
    0x10000002,
    0x80002,
    0x10080002,
    0,
    0x10000000,
    0x80000,
    0x10080000,
    0x2,
    0x10000002,
    0x80002,
    0x10080002
  );
  pc2bytes7 = new Array(
    0,
    0x10000,
    0x800,
    0x10800,
    0x20000000,
    0x20010000,
    0x20000800,
    0x20010800,
    0x20000,
    0x30000,
    0x20800,
    0x30800,
    0x20020000,
    0x20030000,
    0x20020800,
    0x20030800
  );
  pc2bytes8 = new Array(
    0,
    0x40000,
    0,
    0x40000,
    0x2,
    0x40002,
    0x2,
    0x40002,
    0x2000000,
    0x2040000,
    0x2000000,
    0x2040000,
    0x2000002,
    0x2040002,
    0x2000002,
    0x2040002
  );
  pc2bytes9 = new Array(
    0,
    0x10000000,
    0x8,
    0x10000008,
    0,
    0x10000000,
    0x8,
    0x10000008,
    0x400,
    0x10000400,
    0x408,
    0x10000408,
    0x400,
    0x10000400,
    0x408,
    0x10000408
  );
  pc2bytes10 = new Array(
    0,
    0x20,
    0,
    0x20,
    0x100000,
    0x100020,
    0x100000,
    0x100020,
    0x2000,
    0x2020,
    0x2000,
    0x2020,
    0x102000,
    0x102020,
    0x102000,
    0x102020
  );
  pc2bytes11 = new Array(
    0,
    0x1000000,
    0x200,
    0x1000200,
    0x200000,
    0x1200000,
    0x200200,
    0x1200200,
    0x4000000,
    0x5000000,
    0x4000200,
    0x5000200,
    0x4200000,
    0x5200000,
    0x4200200,
    0x5200200
  );
  pc2bytes12 = new Array(
    0,
    0x1000,
    0x8000000,
    0x8001000,
    0x80000,
    0x81000,
    0x8080000,
    0x8081000,
    0x10,
    0x1010,
    0x8000010,
    0x8001010,
    0x80010,
    0x81010,
    0x8080010,
    0x8081010
  );
  pc2bytes13 = new Array(
    0,
    0x4,
    0x100,
    0x104,
    0,
    0x4,
    0x100,
    0x104,
    0x1,
    0x5,
    0x101,
    0x105,
    0x1,
    0x5,
    0x101,
    0x105
  );
  var iterations = key.length > 8 ? 3 : 1;
  var keys = new Array(32 * iterations);
  var shifts = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
  var lefttemp,
    righttemp,
    m = 0,
    n = 0,
    temp;
  for (var j = 0; j < iterations; j++) {
    left =
      (key.charCodeAt(m++) << 24) |
      (key.charCodeAt(m++) << 16) |
      (key.charCodeAt(m++) << 8) |
      key.charCodeAt(m++);
    right =
      (key.charCodeAt(m++) << 24) |
      (key.charCodeAt(m++) << 16) |
      (key.charCodeAt(m++) << 8) |
      key.charCodeAt(m++);
    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
    right ^= temp;
    left ^= temp << 4;
    temp = ((right >>> -16) ^ left) & 0x0000ffff;
    left ^= temp;
    right ^= temp << -16;
    temp = ((left >>> 2) ^ right) & 0x33333333;
    right ^= temp;
    left ^= temp << 2;
    temp = ((right >>> -16) ^ left) & 0x0000ffff;
    left ^= temp;
    right ^= temp << -16;
    temp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= temp;
    left ^= temp << 1;
    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
    left ^= temp;
    right ^= temp << 8;
    temp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= temp;
    left ^= temp << 1;
    temp = (left << 8) | ((right >>> 20) & 0x000000f0);
    left =
      (right << 24) |
      ((right << 8) & 0xff0000) |
      ((right >>> 8) & 0xff00) |
      ((right >>> 24) & 0xf0);
    right = temp;
    for (var i = 0; i < shifts.length; i++) {
      if (shifts[i]) {
        left = (left << 2) | (left >>> 26);
        right = (right << 2) | (right >>> 26);
      } else {
        left = (left << 1) | (left >>> 27);
        right = (right << 1) | (right >>> 27);
      }
      left &= -0xf;
      right &= -0xf;
      lefttemp =
        pc2bytes0[left >>> 28] |
        pc2bytes1[(left >>> 24) & 0xf] |
        pc2bytes2[(left >>> 20) & 0xf] |
        pc2bytes3[(left >>> 16) & 0xf] |
        pc2bytes4[(left >>> 12) & 0xf] |
        pc2bytes5[(left >>> 8) & 0xf] |
        pc2bytes6[(left >>> 4) & 0xf];
      righttemp =
        pc2bytes7[right >>> 28] |
        pc2bytes8[(right >>> 24) & 0xf] |
        pc2bytes9[(right >>> 20) & 0xf] |
        pc2bytes10[(right >>> 16) & 0xf] |
        pc2bytes11[(right >>> 12) & 0xf] |
        pc2bytes12[(right >>> 8) & 0xf] |
        pc2bytes13[(right >>> 4) & 0xf];
      temp = ((righttemp >>> 16) ^ lefttemp) & 0x0000ffff;
      keys[n++] = lefttemp ^ temp;
      keys[n++] = righttemp ^ (temp << 16);
    }
  }
  return keys;
}
function stringToHex(s) {
  var r = "0x";
  var hexes = new Array(
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  );
  for (var i = 0; i < s.length; i++) {
    r += hexes[s.charCodeAt(i) >> 4] + hexes[s.charCodeAt(i) & 0xf];
  }
  return r;
}
function hexToString(h) {
  var r = "";
  for (var i = h.substr(0, 2) == "0x" ? 2 : 0; i < h.length; i += 2) {
    r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
  }
  return r;
}
function fix_des_result(strResult) {
  var i;
  for (i = strResult.length - 1; i >= 0; i--) {
    if (strResult.charCodeAt(i) > 16 && strResult.charCodeAt(i) != 32) {
      break;
    }
  }
  return strResult.substring(0, i + 1);
}
function Hex2() {
  this.encode = function (arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
      var tmp = arr[i].toString(16);
      if (tmp.length == 1) {
        tmp = "0" + tmp;
      }
      str += tmp;
    }
    return str.toUpperCase();
  };
  this.encodeArr = function (arr) {
    var str = [];
    for (var i = 0; i < arr.length; i++) {
      var tmp = arr[i].toString(16);
      str[i] = parseInt(tmp);
    }
    return str;
  };
  function _charToByte(c) {
    if (c == "A") {
      return 10;
    } else if (c == "B") {
      return 11;
    } else if (c == "C") {
      return 12;
    } else if (c == "D") {
      return 13;
    } else if (c == "E") {
      return 14;
    } else if (c == "F") {
      return 15;
    } else {
      return c;
    }
  }
  this.decode = function (src) {
    src = src.toUpperCase();
    var length = src.length / 2;
    var d = [];
    for (var i = 0; i < length; i++) {
      var pos = i * 2;
      d[i] =
        (_charToByte(src.charAt(pos)) << 4) | _charToByte(src.charAt(pos + 1));
      if (d[i] > 127) {
        d[i] = -(256 - d[i]);
      }
    }
    return d;
  };
  this._string2Bin = function (str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      result.push(str.charCodeAt(i));
    }
    return result;
  };
  this._string2Bin2 = function (str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      var x = str.charCodeAt(i);
      if (x > 127) {
        x = -(256 - x);
      }
      result.push(x);
    }
    return result;
  };
  this._bin2String = function (array) {
    return String.fromCharCode.apply(String, array);
  };
}
function Base6422() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function convert(input) {
    var input2 = [];
    for (var int = 0; int < input.length; int++) {
      if (input[int] < 0) {
        input2[int] = 256 + input[int];
      } else {
        input2[int] = input[int];
      }
    }
    return input2;
  }
  this.encode64 = function (input) {
    input = convert(input);
    var output = "";
    var chr1,
      chr2,
      chr3 = "";
    var enc1,
      enc2,
      enc3,
      enc4 = "";
    var i = 0;
    do {
      chr1 = input[i++];
      chr2 = input[i++];
      chr3 = input[i++];
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output =
        output +
        keyStr.charAt(enc1) +
        keyStr.charAt(enc2) +
        keyStr.charAt(enc3) +
        keyStr.charAt(enc4);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);
    return output;
  };
  this.encode = function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    if (typeof input == "string") {
      input = _utf8_encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++) || input[i++];
        chr2 = input.charCodeAt(i++) || input[i++];
        chr3 = input.charCodeAt(i++) || input[i++];
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output =
          output +
          _keyStr.charAt(enc1) +
          _keyStr.charAt(enc2) +
          _keyStr.charAt(enc3) +
          _keyStr.charAt(enc4);
      }
      return output;
    } else {
      while (i < input.length) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output =
          output +
          _keyStr.charAt(enc1) +
          _keyStr.charAt(enc2) +
          _keyStr.charAt(enc3) +
          _keyStr.charAt(enc4);
      }
      return output;
    }
  };
  this.decode = function (input, te) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    if (te) {
      output = [];
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output.push(chr1);
        if (enc3 != 64) {
          output.push(chr2);
        }
        if (enc4 != 64) {
          output.push(chr3);
        }
      }
      return output;
    } else {
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
    }
    return output;
  };
  _utf8_encode = function (string) {
    if (typeof string == "string") {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
    } else {
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string[n];
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
    }
    return utftext;
  };
  _utf8_decode = function (utftext) {
    var string = "";
    var i = 0;
    var c = (c1 = c2 = 0);
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(
          ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        i += 3;
      }
    }
    return string;
  };
}
var code =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function binToBase64(bitString) {
  var result = "";
  var tail = bitString.length % 6;
  var bitStringTemp1 = bitString.substr(0, bitString.length - tail);
  var bitStringTemp2 = bitString.substr(bitString.length - tail, tail);
  for (var i = 0; i < bitStringTemp1.length; i += 6) {
    var index = parseInt(bitStringTemp1.substr(i, 6), 2);
    result += code[index];
  }
  bitStringTemp2 += new Array(7 - tail).join("0");
  if (tail) {
    result += code[parseInt(bitStringTemp2, 2)];
    result += new Array((6 - tail) / 2 + 1).join("=");
  }
  return result;
}
function base64ToBin(str) {
  var bitString = "";
  var tail = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] != "=") {
      var decode = code.indexOf(str[i]).toString(2);
      bitString += new Array(7 - decode.length).join("0") + decode;
    } else {
      tail++;
    }
  }
  return bitString.substr(0, bitString.length - tail * 2);
}
function stringToBin(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i).toString(2);
    result += new Array(9 - charCode.length).join("0") + charCode;
  }
  return result;
}
function BinToStr(Bin) {
  var result = "";
  for (var i = 0; i < Bin.length; i += 8) {
    result += String.fromCharCode(parseInt(Bin.substr(i, 8), 2));
  }
  return result;
}
