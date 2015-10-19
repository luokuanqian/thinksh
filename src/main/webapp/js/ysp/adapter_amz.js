/* whaty adapter */
!function(w, d) {
	w._whVersion = {
		preview : 0,
		debug : 0,
		vas: {
            analytics: {
                status: 10,
                aaID: 1557
            },
            qing: {
                qingID: "3629691",
                status: 20
            },
            upyun: {
                status: 10,
                bucket_name: "ysp7f2466bd6abb4131"
            }
        },
		keepz : 0,
		splitmode : 0,
		autodestroy : 1,
		suspend : 0,
		version : 20150724001,
		devices : {
			phone : 1
		},
		modules: {
            mobilizer: 1,
            preprocess: 1,
            imageresize: 1,
            analytics: 1,
            errorlog: 1
        }
	};
	var wf = w.WHPlatform = w.WHPlatform || {
		id : "whaty",
		attr : "data-entry",
		m: [],
		p: {
            data: {},
            md: {},
            tpl: {}
        },
		page : "data-page",
		entry : 0,
		state : 0,
		__timing : [ [ +new Date, "whaty" ] ]
	};
	Whaty=function () {};
	Whaty.prototype.enableDebug =true;
	var $wp=new Whaty();
	var log=function (msg) {
		if($wp.enableDebug){
			w.console = w.console || {}; 
			console.log || (console.log = opera.postError);
			console.log(msg);
		}
	};
	console.log("--------------------AMPlatform-----------------------------------");
	//直接接一个判断式
    if(function(w, d) {
    	function getScreen(userAgent) {
            var ip = userAgent.match(/ip(hone|od|ad)/i),
            android = (userAgent.match(/android (\d)/i) || {})[1],
            i = {
                width: w.outerWidth,
                height: w.outerHeight
            };
            if (!ip) {
                if (android > 3) return i;
                var o = w.devicePixelRatio || 1;
                return i.width = Math.round(i.width / o),
                i.height = Math.round(i.height / o),i
            }
            var a = w.orientation % 180;
            return a ? (i.height = w.screen.width, i.width = w.screen.height) : (i.width = w.screen.width, i.height = w.screen.height),i
        }
    	var DOMload = function() {
            var n = !1,
            r = function(r) {
                var i = function() {
                	var re=n ? void 0 : (n = !0, r());
                	console.log("re:"+re);
                    return re
                },
                o = function() {
                    if (!n) {
                        try {
                            d.documentElement.doScroll("left")
                        } catch(t) {
                            return void setTimeout(o, 1)
                        }
                        return i()
                    }
                };
                if ("complete" === d.readyState) return i();
                if (d.addEventListener) d.addEventListener("DOMContentLoaded", i, !1),
                w.addEventListener("load", i, !1);
                else if (d.attachEvent) {
                    d.attachEvent("onreadystatechange", i),
                    t.attachEvent("onload", i);
                    var a = !1;
                    try {
                        a = null == w.frameElement
                    } catch(s) {}
                    if (d.documentElement.doScroll && a) return o()
                }
            };
            return r
        } (),
        onload_fun = function(e) {
            var n = w.onload;
            console.log("a:"+n);
            w.onload = "function" != typeof w.onload ? e: function() {
                n && n(),
                e()
            }
        },
    	wf_init = function(win, flag) {
            if (wf.config.options.autodestroy || flag) {
                var r = wf.util;
                try {
                    delete win.AMPlatform
                } catch(i) {
                    win.AMPlatform = void 0
                }
                win.AMPlatform = {
                    util: r
                }
            }
        },
    	cfg = wf.config = wf.config || {},
        l = cfg.options = w._whVersion || {};
    	l.modules = cfg.options.modules || {},
        l.modules.capture = 1;
        console.log("n.id:"+wf.id);
        var u = wf.srcElement = d.getElementById(wf.id);
        console.log("n.entry:"+wf.entry);
        console.log("wf.state:"+wf.state);
        if (wf.runOnce = ++wf.entry > 1 || u.getAttribute(wf.attr), !(wf.runOnce && (wf.config && (DOMload(function() {
        	console.log("-----------------------------------------wf.runOnce:"+wf.entry+"----------------");
        	wf.state = 1e3,
            wf.event.fire(wf.event.onMobilizedDocReady, {doc: d})
        }), onload_fun(function() {
        	console.log("onMobilizedWinLoad::::");
            wf.state = 1001,
            wf.event.fire(wf.event.onMobilizedWinLoad, {win: w}),
            wf_init(w)
        })), wf.state > 0))){
        	var userAgent = cfg.ua = (w.navigator.userAgent || w.navigator.vendor || w.opera || "").toLowerCase();
            cfg.isOldBrowsers = userAgent.match(/msie [678]\./),
            cfg.weixin = userAgent.match(/micromessenger/),
            cfg.lang = (w.navigator.userLanguage || w.navigator.language || "en-US").split("-")[0],
            cfg.lang = "en" === cfg.lang || "zh" === cfg.lang ? cfg.lang: "en",
            cfg.screen = getScreen(userAgent);
            DOMload(function() {
                var events = wf.event;
                console.log(events);
                events.fire(events.onOriginalDocReady, {
                    doc: d
                }),
                cfg.render || (wf.state = 10, a(function() {
                    wf.state = 11,
                    events.fire(r.onOriginalWinLoad, {
                        win: w
                    }),
                    wf_init(w, true)
                }))
            })
        }
    } (w, d),
    function(w, Spinner) {"object" == typeof exports ? module.exports = Spinner() : "function" == typeof define && define.amd ? define(Spinner) : w.Spinner = Spinner()
    } (this,function() {
        "use strict";
        function t(t, n) {
            var r, i = document.createElement(t || "div");
            for (r in n) i[r] = n[r];
            return i
        }
        function n(t) {
            for (var e = 1,
            n = arguments.length; n > e; e++) t.appendChild(arguments[e]);
            return t
        }
        function r(t, e, n, r) {
            var i = ["opacity", e, ~~ (100 * t), n, r].join("-"),
            o = .01 + n / r * 100,
            a = Math.max(1 - (1 - t) / e * (100 - o), t),
            s = u.substring(0, u.indexOf("Animation")).toLowerCase(),
            c = s && "-" + s + "-" || "";
            return d[i] || (h.insertRule("@" + c + "keyframes " + i + "{0%{opacity:" + a + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + a + "}}", h.cssRules.length), d[i] = 1),
            i
        }
        function i(t, e) {
            var n, r, i = t.style;
            for (e = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < p.length; r++) if (n = p[r] + e, void 0 !== i[n]) return n;
            return void 0 !== i[e] ? e: void 0
        }
        function o(t, e) {
            for (var n in e) t.style[i(t, n) || n] = e[n];
            return t
        }
        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) void 0 === t[r] && (t[r] = n[r])
            }
            return t
        }
        function s(t, e) {
            return "string" == typeof t ? t: t[e % t.length]
        }
        function c(t) {
            this.opts = a(t || {},
            c.defaults, f)
        }
        function l() {
            function e(e, n) {
                return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
            }
            h.addRule(".spin-vml", "behavior:url(#default#VML)"),
            c.prototype.lines = function(t, r) {
                function i() {
                    return o(e("group", {
                        coordsize: u + " " + u,
                        coordorigin: -l + " " + -l
                    }), {
                        width: u,
                        height: u
                    })
                }
                function a(t, a, c) {
                    n(d, n(o(i(), {
                        rotation: 360 / r.lines * t + "deg",
                        left: ~~a
                    }), n(o(e("roundrect", {
                        arcsize: r.corners
                    }), {
                        width: l,
                        height: r.width,
                        left: r.radius,
                        top: -r.width >> 1,
                        filter: c
                    }), e("fill", {
                        color: s(r.color, t),
                        opacity: r.opacity
                    }), e("stroke", {
                        opacity: 0
                    }))))
                }
                var c, l = r.length + r.width,
                u = 2 * l,
                p = 2 * -(r.width + r.length) + "px",
                d = o(i(), {
                    position: "absolute",
                    top: p,
                    left: p
                });
                if (r.shadow) for (c = 1; c <= r.lines; c++) a(c, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (c = 1; c <= r.lines; c++) a(c);
                return n(t, d)
            },
            c.prototype.opacity = function(t, e, n, r) {
                var i = t.firstChild;
                r = r.shadow && r.lines || 0,
                i && e + r < i.childNodes.length && (i = i.childNodes[e + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
            }
        }
        var u, p = ["webkit", "Moz", "ms", "O"],
        d = {},
        h = function() {
            var r = t("style", {
                type: "text/css"
            });
            return n(document.getElementsByTagName("head")[0], r),
            r.sheet || r.styleSheet
        } (),
        f = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "50%",
            left: "50%",
            position: "absolute"
        };
        c.defaults = {},
        a(c.prototype, {
            spin: function(e) {
                this.stop(); {
                    var n = this,
                    r = n.opts,
                    i = n.el = o(t(0, {
                        className: r.className
                    }), {
                        position: r.position,
                        width: 0,
                        zIndex: r.zIndex
                    });
                    r.radius + r.length + r.width
                }
                if (o(i, {
                    left: r.left,
                    top: r.top
                }), e && e.insertBefore(i, e.firstChild || null), i.setAttribute("role", "progressbar"), n.lines(i, n.opts), !u) {
                    var a, s = 0,
                    c = (r.lines - 1) * (1 - r.direction) / 2,
                    l = r.fps,
                    p = l / r.speed,
                    d = (1 - r.opacity) / (p * r.trail / 100),
                    h = p / r.lines; !
                    function f() {
                        s++;
                        for (var t = 0; t < r.lines; t++) a = Math.max(1 - (s + (r.lines - t) * h) % p * d, r.opacity),
                        n.opacity(i, t * r.direction + c, a, r);
                        n.timeout = n.el && setTimeout(f, ~~ (1e3 / l))
                    } ()
                }
                return n
            },
            stop: function() {
                var t = this.el;
                console.log("stoptime:"+this.el);
                return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0),
                this
            },
            lines: function(e, i) {
                function a(e, n) {
                    return o(t(), {
                        position: "absolute",
                        width: i.length + i.width + "px",
                        height: i.width + "px",
                        background: e,
                        boxShadow: n,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~ (360 / i.lines * l + i.rotate) + "deg) translate(" + i.radius + "px,0)",
                        borderRadius: (i.corners * i.width >> 1) + "px"
                    })
                }
                for (var c, l = 0,
                p = (i.lines - 1) * (1 - i.direction) / 2; l < i.lines; l++) c = o(t(), {
                    position: "absolute",
                    top: 1 + ~ (i.width / 2) + "px",
                    transform: i.hwaccel ? "translate3d(0,0,0)": "",
                    opacity: i.opacity,
                    animation: u && r(i.opacity, i.trail, p + l * i.direction, i.lines) + " " + 1 / i.speed + "s linear infinite"
                }),
                i.shadow && n(c, o(a("#000", "0 0 4px #000"), {
                    top: "2px"
                })),
                n(e, n(c, a(s(i.color, l), "0 0 1px rgba(0,0,0,.1)")));
                return e
            },
            opacity: function(t, e, n) {
                e < t.childNodes.length && (t.childNodes[e].style.opacity = n)
            }
        });
        var m = o(t("group"), {
            behavior: "url(#default#VML)"
        });
        return ! i(m, "transform") && m.adj ? l() : u = i(m, "animation"),
        c
    }),
    function(wf, cfg) {
    	console.log("allwhaty_loader页面加载中");
        if (!wf.runOnce && !cfg.isOldBrowsers) {
            var lan = {
                en: "Loading",
                zh: "页面加载中"
            },
            r = lan[cfg.lang] || lan.en;
            wf.loader = {
                selector: ".allwhaty_loader",
                html: '<div class="allwhaty_loader" style="position:fixed;top:50%;left:50%;width:120px;height:120px;margin-top:-60px;margin-left:-60px;text-align:center;"><div id="allwhaty_spinner" style="position: relative; height: 50px;"></div><p style="margin:10px 0;color:#666;font-size:1em;font-family:\'Microsoft YaHei\',\'微软雅黑\',Helvetica,Arial,sans-serif">' + r + ' ...</p></div><script class="allwhaty_loader">var spinner = new Spinner({length:8,color: "#666"}).spin(document.getElementById("allwhaty_spinner")); </script>'
            }
        }
    } (wf, wf.config),
    function(w, d, wf, cfg, i) {
    	console.log("viewport");
        if (!wf.runOnce && !cfg.isOldBrowsers) {
            var init_content = '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" class="allwhaty_loader" />' + i.html + '<plaintext style="display:none">',
            allwhaty = "allwhaty",
            _allwhaty = "_" + allwhaty,
            c = "_allmobads=1",
            phone = "phone",
            tablet = "tablet",
            desktop = "desktop",
            js = "http://s.yunshipei.com/at/m.min.js";
            var b = function(t) {
                return /(whaty|webtrn)\.(com|cn)/.test(t) || /192\.168/.test(t)|| /127\.0/.test(t) || /localhost/.test(t) || /ysp\.www\.gov\.cn/.test(t)
            }
            //_ = n.ls = !r.options.suspend,
            DeviceRegs = {
                tablet: function(userAgent) {
                    return /ipad|GT-P7500/i.test(userAgent) || /tablet/.test(userAgent) && cfg.screen.width <= 1024 ? !0 : !1
                },
                phone: function(userAgent) {
                    return userAgent ? /(bb\d+|meego).+mobile|ucweb|ucbrowser|mqqbrowser|360browser|micromessenger|avantgo|bada\/|blackberry|android|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/.test(userAgent.substr(0, 4)) ? !0 : !1 : cfg.screen.width <= 720
                },
                desktop: function() {
                    return ! 0
                }
            },
            deviceReg = function(device) {
                for (reg in DeviceRegs) if (DeviceRegs.hasOwnProperty(reg) && DeviceRegs[reg](device)) return reg;
                return ""
            },
            getCookieByDevice = function(device) {
                return - 1 != d.cookie.indexOf(allwhaty + "=" + device)
            },
            isWhatySite = function() {
                return /(proxy|qing)\.(whaty|webtrn|allwhaty|ysp)\.(com|cn)/.test(w.location.hostname)
            },
            device = cfg.realDevice = deviceReg(cfg.ua);
            "discuzdefault" === cfg.siteId && device === tablet && (device = phone),
            device = w.name == _allwhaty ? phone: device,
            device = w.name == _allwhaty + tablet ? tablet: device,
            device = w.name == _allwhaty + desktop ? desktop: device,
            (cfg.debug || cfg.options.preview) && (device = getCookieByDevice(phone) ? phone: getCookieByDevice(tablet) ? tablet: desktop, isWhatySite() && device === desktop && (device = phone)),
            device = getCookieByDevice(desktop) ? desktop: device,
            cfg.device = device;
            //只有是移动设备并且是高版本浏览器
            var render_check = cfg.render = cfg.options.devices[device] && !cfg.isOldBrowsers;
            if (render_check) d.write(init_content),
            wf.state = 1;
            else if (cfg.realDevice != desktop) {
                var A = d.createElement("script");
                A.setAttribute("type", "text/javascript"),
                A.setAttribute("defer", ""),
                A.setAttribute("src", js);
                var j = d.getElementsByTagName("head"),
                P = j ? j[0] : null;
                P && P.appendChild(A)
            }
            wf.__timing.push([ + new Date, "router"])
        }
    } (w, d, wf, wf.config, wf.loader), wf.config && !wf.config.isOldBrowsers) {
    	
    }
    !function(wf, cfg) {
        if (!wf.runOnce && !cfg.isOldBrowsers) {
            var logger = wf.logger = wf.logger || {
                times: [].concat(wf.__timing),
                images: [],
                errors: []
            };
            delete wf.__timing,
            logger.time = function(t, e) {
                var n = e || +new Date;
                return this.times.push([n, t]),n
            },
            logger.error = function(t, e, n) {
                var r = n || +new Date;
                this.errors.push([r, t, e])
            },
            logger.imagesize = function(t, e, n) {
                this.images.push([t, e, n])
            },
            logger.print = function(t, e, n) {
                console && console.log(n ? t + "		" + e: t + "		" + e)
            },
            logger.getErrors = function() {
                return this.errors
            },
            logger.getImageSizes = function() {
                return this.images
            },
            logger.dump = function(t) {
                var n = 0,
                r = this.times.length ? this.times[0][0] : 0;
                if (t) {
                    this.print("--------- AM Timings (in milliseconds) ----------", "");
                    for (var i = 0,
                    o = this.times.length; o > i; i++) {
                        var a = this.times[i];
                        this.print(a[0] - r, a[1])
                    }
                    this.print("--------- AM Image Sizes ----------", "");
                    for (var i = 0,
                    o = this.images.length; o > i; i++) {
                        var a = this.images[i];
                        this.print(a[0] + "x" + a[1] + "|" + cfg.screen.width, a[2])
                    }
                    n = 1
                }
                if (this.errors.length) {
                    this.print("---------------- AM Errors ----------------------", "");
                    for (var i = 0,
                    o = this.errors.length; o > i; i++) {
                        var a = this.errors[i];
                        this.print(a[0] - r, a[1] + ": " + a[2], !0)
                    }
                    n = 1
                }
                return n && this.print("-------------------------------------------------", ""),
                1
            }
        }
    } (wf, wf.config),
    function(w, d, wf, cfg) {
    	//function(t, e, n, r) {
    	//w d wf config
        function i(t, e) {
            var n = t.split("?");
            if (n.length >= 2) {
                for (var r = n[1].split(/[&;]/g), i = r.length; i-->0;) for (var o = 0,
                a = e.length; a > o; o++) {
                    var s = encodeURIComponent(e[o]) + "=";
                    if (r[i] && -1 !== r[i].lastIndexOf(s, 0)) {
                        r.splice(i, 1);
                        break
                    }
                }
                return n[0] + (r.length ? "?" + r.join("&") : "")
            }
            return t
        }
        if (!wf.runOnce && !cfg.isOldBrowsers) {
            var util = wf.util = wf.util || {};
            util.extend = function(t) {
                return Array.prototype.forEach && [].slice.call(arguments, 1).forEach(function(e) {
                    for (var n in e) {
                    	void 0 !== e[n] && (t[n] = e[n])
                    }
                }),
                t
            },
            util.keys = function(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push(n);
                return e
            },
            util.values = function(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push(t[n]);
                return e
            },
            util.clone = function(t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            };
            var a = d.createElement("a");
            util.absolutify = function(t) {
                return a.href = t,
                a.href
            };
            var s = /^https?/;
            util.httpUrl = function(t) {
                return s.test(t)
            };
            var c, l = ["sukey", "from", "isappinstalled"];
            util.getDocUrlPath = function() {
                return c ? c: (c = w.location.pathname + (w.location.search ? w.location.search: ""), cfg.weixin && (c = i(c, l)), c)
            },
            util.gotoUrl = function(e) {
                w.location.href = e
            },
            util.outerHTML = function(t) {
                if (t.outerHTML) return t.outerHTML;
                var n = d.createElement("div");
                n.appendChild(t.cloneNode(!0));
                var r = n.innerHTML;
                return n = null,
                r
            },
            util.getDoctype = function(t) {
                t = t || e;
                var n = t.doctype || [].filter.call(t.childNodes,
                function(t) {
                    return t.nodeType == Node.DOCUMENT_TYPE_NODE
                })[0];
                return n ? "<!DOCTYPE HTML" + (n.publicId ? ' PUBLIC "' + n.publicId + '"': "") + (n.systemId ? ' "' + n.systemId + '"': "") + ">": ""
            },
            util.getDocProtocol = function(t) {
                return "https:" == t.location.protocol ? "https": "http"
            },
            util.removeBySelector = function(t, n) {
                n = n || e;
                var r = n.querySelectorAll(t);
                return util.removeElements(r, n)
            },
            util.removeElements = function(t, n) {
                n = n || e;
                for (var r = 0,
                i = t.length; i > r; r++) {
                    var o = t[r];
                    o.parentNode.removeChild(o)
                }
                return t
            },
            util.createElement = function(t, n, r) {
                r = r || d;
                var i = r.createElement(t);
                for (var o in n) n.hasOwnProperty(o) && i.setAttribute(o, n[o]);
                return i
            },
            util.insertAfter = function(t, e) {
                t.parentNode.insertBefore(e, t.nextSibling)
            },
            util.imgUrl = function(t) {
                return t
            },
            util.domIsReady = function(t) {
                var t = t || e;
                return t.attachEvent ? "complete" === t.readyState: "loading" !== t.readyState
            },
            util.waitForReady = function(t, e) {
            	console.log("waitForReady");
                var n = this,
                r = !1,
                i = function() {
                    r || (r = !0, o && clearInterval(o), e(t))
                },
                o = setInterval(function() {
                    n.domIsReady(t) && i()
                },
                100);
                t.addEventListener("readystatechange", i, !1)
            },
            util.isIEBrowser = function() {
                return "Microsoft Internet Explorer" == w.navigator.appName
            },
            util.isMobileDevice = function() {
                return "phone" == cfg.realDevice
            },
            util.switchView = function(n) {
                if (d.cookie = "allmobilize=" + n + "; path=/;", this.isIEBrowser()) {
                    var r = "javascript:window.location='" + w.location.href + "'";
                    w.location.href = r
                } else w.location.reload()
            },
            util.goDesktop = function() {
                this.switchView("desktop")
            },
            util.injectJSCode = function(t, e, r, i) {
                var o = this.createElement("script", {
                    charset: "utf-8",
                    defer: "",
                    async: "",
                    src: e,
                    id: r || ""
                },
                t);
                i && (o.readyState ? o.onreadystatechange = function() { ("loaded" == o.readyState || "complete" == o.readyState) && (o.onreadystatechange = null, i(o))
                }: o.onload = function() {
                    i(o)
                });
                var a = w.getElementById(wf.id);
                if (a) this.insertAfter(a, o);
                else if (w.body) w.body.appendChild(o);
                else {
                    var s = w.getElementsByTagName("head")[0];
                    s && s.appendChild(o)
                }
            },
            util.base64Encode = function(t) {
                var e, n, r, i, o, a, s, c, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                u = 0,
                p = 0,
                d = "",
                h = [];
                if (!t) return t;
                do e = t.charCodeAt(u++),
                n = t.charCodeAt(u++),
                r = t.charCodeAt(u++),
                c = e << 16 | n << 8 | r,
                i = c >> 18 & 63,
                o = c >> 12 & 63,
                a = c >> 6 & 63,
                s = 63 & c,
                h[p++] = l.charAt(i) + l.charAt(o) + l.charAt(a) + l.charAt(s);
                while (u < t.length);
                d = h.join("");
                var f = t.length % 3;
                return (f ? d.slice(0, f - 3) : d) + "===".slice(f || 3)
            };
            var u = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _f: String.fromCharCode,
                compressToBase64: function(t) {
                    if (null == t) return "";
                    var e, n, r, i, o, a, s, c = "",
                    l = 0;
                    for (t = u.compress(t); l < 2 * t.length;) l % 2 == 0 ? (e = t.charCodeAt(l / 2) >> 8, n = 255 & t.charCodeAt(l / 2), r = l / 2 + 1 < t.length ? t.charCodeAt(l / 2 + 1) >> 8 : 0 / 0) : (e = 255 & t.charCodeAt((l - 1) / 2), (l + 1) / 2 < t.length ? (n = t.charCodeAt((l + 1) / 2) >> 8, r = 255 & t.charCodeAt((l + 1) / 2)) : n = r = 0 / 0),
                    l += 3,
                    i = e >> 2,
                    o = (3 & e) << 4 | n >> 4,
                    a = (15 & n) << 2 | r >> 6,
                    s = 63 & r,
                    isNaN(n) ? a = s = 64 : isNaN(r) && (s = 64),
                    c = c + u._keyStr.charAt(i) + u._keyStr.charAt(o) + u._keyStr.charAt(a) + u._keyStr.charAt(s);
                    return c
                },
                compress: function(t) {
                    if (null == t) return "";
                    var e, n, r, i = {},
                    o = {},
                    a = "",
                    s = "",
                    c = "",
                    l = 2,
                    p = 3,
                    d = 2,
                    h = "",
                    f = 0,
                    m = 0,
                    g = u._f;
                    for (r = 0; r < t.length; r += 1) if (a = t.charAt(r), Object.prototype.hasOwnProperty.call(i, a) || (i[a] = p++, o[a] = !0), s = c + a, Object.prototype.hasOwnProperty.call(i, s)) c = s;
                    else {
                        if (Object.prototype.hasOwnProperty.call(o, c)) {
                            if (c.charCodeAt(0) < 256) {
                                for (e = 0; d > e; e++) f <<= 1,
                                15 == m ? (m = 0, h += g(f), f = 0) : m++;
                                for (n = c.charCodeAt(0), e = 0; 8 > e; e++) f = f << 1 | 1 & n,
                                15 == m ? (m = 0, h += g(f), f = 0) : m++,
                                n >>= 1
                            } else {
                                for (n = 1, e = 0; d > e; e++) f = f << 1 | n,
                                15 == m ? (m = 0, h += g(f), f = 0) : m++,
                                n = 0;
                                for (n = c.charCodeAt(0), e = 0; 16 > e; e++) f = f << 1 | 1 & n,
                                15 == m ? (m = 0, h += g(f), f = 0) : m++,
                                n >>= 1
                            }
                            l--,
                            0 == l && (l = Math.pow(2, d), d++),
                            delete o[c]
                        } else for (n = i[c], e = 0; d > e; e++) f = f << 1 | 1 & n,
                        15 == m ? (m = 0, h += g(f), f = 0) : m++,
                        n >>= 1;
                        l--,
                        0 == l && (l = Math.pow(2, d), d++),
                        i[s] = p++,
                        c = String(a)
                    }
                    if ("" !== c) {
                        if (Object.prototype.hasOwnProperty.call(o, c)) {
                            if (c.charCodeAt(0) < 256) {
                                for (e = 0; d > e; e++) f <<= 1,
                                15 == m ? (m = 0, h += g(f), f = 0) : m++;
                                for (n = c.charCodeAt(0), e = 0; 8 > e; e++) f = f << 1 | 1 & n,
                                15 == m ? (m = 0, h += g(f), f = 0) : m++,
                                n >>= 1
                            } else {
                                for (n = 1, e = 0; d > e; e++) f = f << 1 | n,
                                15 == m ? (m = 0, h += g(f), f = 0) : m++,
                                n = 0;
                                for (n = c.charCodeAt(0), e = 0; 16 > e; e++) f = f << 1 | 1 & n,
                                15 == m ? (m = 0, h += g(f), f = 0) : m++,
                                n >>= 1
                            }
                            l--,
                            0 == l && (l = Math.pow(2, d), d++),
                            delete o[c]
                        } else for (n = i[c], e = 0; d > e; e++) f = f << 1 | 1 & n,
                        15 == m ? (m = 0, h += g(f), f = 0) : m++,
                        n >>= 1;
                        l--,
                        0 == l && (l = Math.pow(2, d), d++)
                    }
                    for (n = 2, e = 0; d > e; e++) f = f << 1 | 1 & n,
                    15 == m ? (m = 0, h += g(f), f = 0) : m++,
                    n >>= 1;
                    for (;;) {
                        if (f <<= 1, 15 == m) {
                            h += g(f);
                            break
                        }
                        m++
                    }
                    return h
                }
            };
            util.compressAndEncode = function(t) {
                return u.compressToBase64(t)
            }
        }
    } (w, d, wf, wf.config),
    function(wf, cfg, log) {
        var events = wf.event = wf.event || {};
        events.onPlatformReady = "onPlatformReady",
        events.onOriginalDocReady = "onOriginalDocReady",
        events.onOriginalWinLoad = "onOriginalWinLoad",
        events.onBeforeMobilize = "onBeforeMobilize",
        events.onPageTmplLoad = "onPageTmplLoad",
        events.onPreprocessDoc = "onPreprocessDoc",
        events.onBeforeRender = "onBeforeRender",
        events.onMobilizedDocReady = "onMobilizedDocReady",
        events.onMobilizedWinLoad = "onMobilizedWinLoad",
        events.fire = function(func_name, i) {
        	console.log("events.fire:"+func_name);
        	log.time(func_name);
        	 console.log("ttt:::"+JSON.stringify(wf.m));
            for (var option = {cancel: false,lastModule: ""},a = 0, s = wf.m.length; s > a && !option.cancel; a++) {
                var module = wf.m[a];
                console.log("module:"+module.name);
                if (module[func_name] && cfg.options.modules[module.name]) {
                    {
                    	console.log("module 执行:"+module.name);
                    	module[func_name](option, i)
                    }
                    option.lastModule = module.name,
                    cfg.debug && log.time(func_name + " done @ " + module.name)
                }
            }
            return option
        },
        events.registerModule = function(r) {
            for (var i = 0,o = wf.m.length; o > i; i++) 
            	if (wf.m[i].name == events.name) return;
            wf.m.push(r),
            cfg.debug && log.time("Load module: " + events.name);
            console.log("registerModule:::"+events.name);
        }
    } (wf, wf.config, wf.logger),
    function(w, d, wf, cfg, events, util) {
        if (!wf.runOnce && !cfg.isOldBrowsers) {
            var module_capture = {
                name: "capture"
            };
            events.registerModule(module_capture);
            var s, c, fire = function(t, e) {
                var r = events.fire(t, e);
                console.log("s, c, l:");
                return r.cancel || (wf.state = 150, e.renderCapturedDoc()),r
            },
            u = function() {
                return cfg.srcRoot + cfg.device + "." + cfg.options.files.page
            },
            createScript = function(t, r) {
            	console.log("r:"+r);
                var script = e.createElement("script");
                script.type = "text/javascript",
                r && (script.readyState ? script.onreadystatechange = function() { ("loaded" == script.readyState || "complete" == script.readyState) && (script.onreadystatechange = null, r())
                }: script.onload = function() {
                    r()
                }),
                script.src = t,
                n.srcElement.parentNode.insertBefore(script, n.srcElement)
            },
            stop = function() {
            	console.log("stop:");
                s || (void 0 !== w.stop ? w.stop() : void 0 !== d.execCommand && d.execCommand("Stop", !1), s = !0)
            };
            module_capture.onOriginalDocReady = function(t) {
            	console.log("onOriginalDocReady");
                cfg.render && (wf.p.loading || cfg.weixin || stop(), wf.state = Math.max(wf.state, 101), t.cancel = !0)
            },
            module_capture.onPlatformReady = function(t) {
            	console.log("onPlatformReady:"+cfg.render);
                if (cfg.render) {
                	console.log("cfg.options.splitmode:"+cfg.options.splitmode);
                    if (cfg.options.splitmode) {
                        wf.p.loading = !0;
                        console.log("loading:"+wf.p.loading);
                        var e = u();
                        createScript(e,
                        function() {
                            wf.p.loading = !1,
                            d(),
                            110 === wf.state && l(events.onPageTmplLoad, c)
                        })
                    }
                    wf.doc.init(function(t) {
                    	console.log("doc.init:");
                        wf.state = 102,
                        c = t;
                        //以下功能会生成新界面
                        var e = fire(events.onBeforeMobilize, t);
                        //console.log("e.redirect:"+e.redirect);
                       // e.redirect && (d(), util.gotoUrl(e.redirect))
                    }),
                    t.cancel = !0//加载中
                }
            }
        }
    } (w, d, wf, wf.config, wf.event, wf.util, wf.logger),
    function(w, d, wf, cfg, util, logger, loader) {
    	//function(t, e, n, r, i, o, a) {
    	//(w, d, wf, wf.config, wf.util, wf.logger, wf.loader),
        function s(t) {
            return t.nodeName.toLowerCase()
        }
        function c(t) {
            return t.replace('"', "&quot;")
        }
        function l(t) {
            return t ? [].map.call(t.childNodes,
            function(t) {
                var e = s(t);
                return "#comment" == e ? "<!--" + t.textContent + "-->": "plaintext" == e ? t.textContent: "script" == e && (/allmobilize|yunshipei/.test(t.src) || /allmobilize|yunshipei/i.test(t.textContent)) ? "": t.outerHTML || t.nodeValue || util.outerHTML(t)
            }).join("") : ""
        }
        if (!wf.runOnce && !cfg.isOldBrowsers) {
            var u = /(<script[\s\S]*?>)/gi,
            p = {
                style: ' media="x-media"',
                script: ' type="text/x-script"'
            },
            reg = new RegExp(util.values(p).join("|"), "g"),
            h = {
                img: ["src"],
                source: ["src"],
                iframe: ["src"],
                script: ["src", "type"],
                link: ["href"],
                style: ["media"]
            },
            f = new RegExp("<(" + util.keys(h).join("|") + ")([\\s\\S]*?)>", "gi"),
            m = {},
            g = {};
            for (var v in h) if (h.hasOwnProperty(v)) {
                var y = h[v];
                y.forEach(function(t) {
                    g[t] = !0
                }),
                m[v] = new RegExp("\\s+((?:" + y.join("|") + ")\\s*=\\s*(?:('|\")[\\s\\S]+?\\2))", "gi")
            }
            var b = d.createElement("div"),
            srcDoc = function(t, e) {
                this.sourceDoc = t,
                this.prefix = e || "x-"
            };
            srcDoc.init = function(docInit, n, r) {
            	console.log(":::init:::");
                var n = n || d,
                o = function(docInit, e, n) {
                    var doc = new srcDoc(e, n),
                    //清理现有界面
                    o = doc.createDocumentFragmentsStrings(doc.sourceDoc);
//                    util.extend(doc, o);
//                    var a = doc.createDocumentFragments();
//                    util.extend(doc, a),
//                    docInit(doc)
                    setTimeout(function() {
                        d.open("text/html", "replace"),
                        d.write("<html><body>hello world</body></html>"),
                        d.close()
                    })
                };
                util.domIsReady(n) ? o(docInit, n, r) : util.waitForReady(n,
                function() {
                    o(docInit, n, r)
                })
            },
            srcDoc.removeClosingTagsAtEndOfString = function(t) {
                var e = t.match(/((<\/[^>]+>)+)$/);
                return e ? t.substring(0, t.length - e[0].length) : t
            },
            srcDoc.removeTargetSelf = function(t) {
                return t.replace(/target=("_self"|\'_self\')/gi, "")
            },
            srcDoc.cloneAttributes = function(t, e) {
                var n = t.match(/^<(\w+)([\s\S]*)$/i);
                return b.innerHTML = "<div" + n[2],
                [].forEach.call(b.firstChild.attributes,
                function(t) {
                    try {
                        e.setAttribute(t.nodeName, t.nodeValue)
                    } catch(n) {
                        console.error("Error copying attributes while capturing: ", n)
                    }
                }),
                e
            },
            srcDoc.disable = function(t, e) {
                var n = function() {
                    return function(t, n, r) {
                        return lowercaseTagName = n.toLowerCase(),
                        result = "<" + lowercaseTagName + (p[lowercaseTagName] || "") + r.replace(m[lowercaseTagName], " " + e + "$1") + ">"
                    }
                } (),
                r = /(<!--[\s\S]*?-->)|(?=<\/script)/i,
                i = t.split(r),
                o = i.map(function(t) {
                    var e;
                    return t ? /^<!--/.test(t) ? t: (e = t.split(u), e[0] = e[0].replace(f, n), e[1] && (e[1] = e[1].replace(f, n)), e) : ""
                });
                return [].concat.apply([], o).join("")
            },
            srcDoc.enable = function(t, e) {
                var n = new RegExp("\\s" + e + "(" + util.keys(g).join("|") + ")", "gi");
                return t.replace(n, " $1").replace(reg, "")
            },
            srcDoc.openTag = function(t) {
                if (!t) return "";
                t.length && (t = t[0]);
                var e = [];
                return [].forEach.call(t.attributes,
                function(t) {
                    e.push(" ", t.name, '="', c(t.value), '"')
                }),
                "<" + s(t) + e.join("") + ">"
            },
            srcDoc.prototype.createDocumentFragmentsStrings = function(sourceDoc) {
                var head = sourceDoc.getElementsByTagName("head")[0] || sourceDoc.createElement("head"),
                body = sourceDoc.getElementsByTagName("body")[0] || sourceDoc.createElement("body"),
                html = sourceDoc.getElementsByTagName("html")[0];
                util.removeBySelector(loader.selector, sourceDoc);
                console.log("util:::"+sourceDoc);
                var o = {
                    doctype: util.getDoctype(sourceDoc),
                    htmlOpenTag: srcDoc.openTag(html),
                    headOpenTag: srcDoc.openTag(head),
                    bodyOpenTag: srcDoc.openTag(body),
                    headContent: l(head),
                    bodyContent: l(body)
                };
                console.log("DOCTYPE:::"+o.doctype);
                o.all = function(t) {
                    return this.doctype + this.htmlOpenTag + this.headOpenTag + (t || "") + this.headContent + this.bodyOpenTag + this.bodyContent
                };
                var s = /<!--(?:[\s\S]*?)-->|(<\/head\s*>|<body[\s\S]*$)/gi,
                c = o.bodyContent = o.headContent + o.bodyContent;
                o.headContent = "";
                for (var u; u = s.exec(c); u) if (u[1]) {
                    o.headContent = c.slice(0, u.index);
                    var p = new RegExp("^[\\s\\S]*(<head(?:[^>'\"]*|'[^']*?'|\"[^\"]*?\")*>)([\\s\\S]*)$").exec(o.headContent);
                    if (p && (o.headOpenTag = p[1], o.headContent = p[2]), "/" != u[1][1]) {
                        o.bodyContent = u[0];
                        var d = /^((?:[^>'"]*|'[^']*?'|"[^"]*?")*>)([\s\S]*)$/.exec(o.bodyContent);
                        d && (o.bodyOpenTag = d[1], o.bodyContent = d[2]);
                        break
                    }
                    o.bodyContent = c.slice(u.index + u[1].length)
                }
                return o
            },
            srcDoc.prototype.restoreOriginalDoc = function() {
            	console.log("restoreOriginalDoc");
                var t = this;
                util.waitForReady(e,
                function() {
                    t.render(t.all())
                })
            },
            srcDoc.prototype.setElementContentFromString = function(t, e) {
                for (b.innerHTML = e; b.firstChild; t.appendChild(b.firstChild));
            },
            srcDoc.prototype.createDocumentFragments = function() {
                var t = {},
                n = t.capturedDoc = d.implementation.createHTMLDocument(""),
                r = t.htmlEl = n.documentElement,
                i = t.headEl = r.firstChild,
                o = t.bodyEl = r.lastChild;
                srcDoc.cloneAttributes(this.htmlOpenTag, r),
                srcDoc.cloneAttributes(this.headOpenTag, i),
                srcDoc.cloneAttributes(this.bodyOpenTag, o),
                o.innerHTML = srcDoc.disable(this.bodyContent, this.prefix);
                var a = srcDoc.disable(this.headContent, this.prefix);
                try {
                    i.innerHTML = a
                } catch(s) {
                    var c = i.getElementsByTagName("title")[0];
                    c && i.removeChild(c),
                    this.setElementContentFromString(i, a)
                }
                console.log("RRR:::"+r);
                return r.appendChild(i),
                r.appendChild(o),
                t
            },
            srcDoc.prototype.escapedHTMLString = function() {
                var t = this.capturedDoc,
                e = srcDoc.enable(util.outerHTML(t.documentElement), this.prefix),
                n = this.doctype + e;
                return n
            },
            srcDoc.prototype.render = function(t) {
            	console.log("render:"+this.prefix);
                var e;
                e = t ? srcDoc.enable(t, this.prefix) : this.escapedHTMLString();
                var n = this.sourceDoc;
                setTimeout(function() {
                    n.open("text/html", "replace"),
                    n.write(e),
                    n.close()
                })
            },
            srcDoc.prototype.getCapturedDoc = function() {
                return this.capturedDoc
            },
            srcDoc.prototype.insertPlatformScripts = function(t) {
                var e = {
                    charset: "utf-8",
                    id: wf.id,
                    src: cfg.srcUrl
                };
                e[wf.attr] = 1,
                cfg.pageId && (e[wf.page] = cfg.pageId);
                var o = util.createElement("script", e);
                if ("object" == typeof t) {
                    var a = t.head || t.getElementsByTagName("head")[0];
                    a.insertBefore(o, a.firstChild)
                } else if ("string" == typeof t) {
                    var s = util.outerHTML(o);
                    t = t.replace(/<\s*head[^>]*>/im, "$&" + s)
                }
                return t
            },
            srcDoc.prototype.renderCapturedDoc = function() {
            	console.log("renderCapturedDoc");
                this.insertPlatformScripts(this.getCapturedDoc()),
                this.render()
            },
            wf.doc = wf.doc || srcDoc
        }
    } (w, d, wf, wf.config, wf.util, wf.logger, wf.loader),
    function(t, e, n, r, i, o, a, s, c) {
    	//function(t, e, n, r, i, o, a, s, c) {
    	//function(w, d, wf, r, i, o, a, s, c) {
        if (!n.runOnce && !i.isOldBrowsers) {
            var l = {
                name: "mobilizer"
            };
            r.registerModule(l);
            var 
            C = function(t, e, s, c) {
                	//console.log("LLL:::"+l);
                   // l = e.insertPlatformScripts(l);
                   // console.log("LLL:::"+l);
                   // var u = {docHtml: l};
                    n.state = 200,
                    //r.fire(r.onBeforeRender, u),
                    //e.render(u.docHtml),
                    
                    setTimeout(function() {
                        d.open("text/html", "replace"),
                        d.write("<html><body>hello world</body></html>"),
                        d.close()
                    })
                    t.cancel = !0,
                    a.time("mobilization succeeded")
            };
            l.onBeforeMobilize = function(t, e) {
            	console.log("##########################onBeforeMobilize:");
                a.time("mobilizing");
                i.options.splitmode && n.p.loading ? (n.state = 110, t.cancel = !0) : C(t, e, d, r)
            },
            l.onPageTmplLoad = function(t, e) {
            	console.log("onPageTmplLoad:");
                C(t, e, d)
            };
            var M = {
                en: "View Mobile Site",
                zh: "回到云适配版"
            },
            S = function(n, r) {
                var i = M[r],
                o = e.createElement("div"),
                a = e.createElement("span"),
                s = e.createTextNode(i);
                o.appendChild(a),
                a.appendChild(s),
                o.id = "_allmobilizeGoMo",
                o.style.textAlign = "center",
                o.style.clear = "both",
                o.style.padding = 0,
                o.style.margin = "20px 0",
                o.style.zIndex = "99999",
                o.style.position = "relative",
                a.style.background = "#222",
                a.style.color = "#FFF",
                a.style.margin = 0,
                a.style.padding = "10px 20px",
                a.style.borderRadius = "5px",
                a.style.font = "14px 'Microsoft YaHei',SimSun,Arial,Sans-Serif",
                a.style.cursor = "pointer",
                a.onclick = function() {
                    e.cookie = "allmobilize=; path=/;",
                    t.location.reload()
                },e.body.appendChild(o)
            };
            l.onOriginalDocReady = function() { / allmobilize = desktop / .test(e.cookie) && S(s, i.lang, 1)
            }
        }
    } (w, d, wf, wf.event, wf.config, wf.util, wf.logger, wf.$),
    /*function(w, d, wf, r, i) {} (w, d, wf, wf.event, wf.config),*/
    function(e, wf, r, i, o, a, s) {
        if (!r.runOnce && !o.isOldBrowsers) {
            var c = {
                name: "imageresize"
            };
            i.registerModule(c);
            var l, u, p, d = [240, 320, 480, 540, 640, 720],
            h = d[d.length - 1],
            f = "data-am-src",
            m = "data-am-width",
            g = "data-am-height",
            v = ["x-src", "src"],
            y = ".yunshipei.cn/",
            b = "http://s.yunshipei.com/loader.gif",
            w = "data-src",
            x = "data-src-retina",
            E = function(t) {
                for (var e = 0,
                n = d.length; n > e; e++) if (d[e] >= t) return d[e];
                return t
            },
            _ = function(t) {
                if (void 0 === l && (l = !o.screen.width || !o.options.vas.upyun || !o.options.vas.upyun.bucket_name || !(o.options.vas.upyun.status >= 20) || o.screen.width > h), void 0 !== u || l || (u = "http://" + o.options.vas.upyun.bucket_name + y), l || (o.lazyLoading = p = o.options.vas.upyun.status >= 30), l || !u || 0 === t.indexOf(u)) return t;
                t = a.absolutify(t);
                var e = encodeURIComponent(t).replace(/[!'()]/g, escape).replace(/\*/g, "%2A"),
                n = E(o.screen.width),
                r = "type=fw&size=" + n + "&src=",
                i = a.base64Encode(r + a.base64Encode(e)),
                s = u + i;
                return s
            },
            C = function(e) {
                e.fn.unveil = function(n, r) {
                    function i() {
                        var t = u.filter(function() {
                            var t = e(this),
                            n = e.zepto ? "none" === t.css("display") : t.is(":hidden");
                            if (!n) {
                                var r = a.scrollTop(),
                                i = r + a.height(),
                                o = t.offset().top,
                                c = o + t.height();
                                return c >= r - s && i + s >= o
                            }
                        });
                        o = t.trigger("unveil"),
                        u = u.not(o)
                    }
                    var o, a = e(t),
                    s = n || 0,
                    c = t.devicePixelRatio > 1,
                    l = c ? x: w,
                    u = this;
                    return this.one("unveil",
                    function() {
                        var t = this.getAttribute(l);
                        t = t || this.getAttribute(w),
                        t && (this.setAttribute("src", t), "function" == typeof r && r.call(this))
                    }),
                    a.scroll(i),
                    a.resize(i),
                    i(),
                    this
                }
            };
            a.imgUrl = _,
            c.onPreprocessDoc = function(t, e) {
                var n = e.$;
                n("img").each(function(t, e) {
                    if (!n(e).attr(f)) for (var r = 0,
                    i = v.length; i > r; r++) {
                        var o = n(e).attr(v[r]);
                        if (o) {
                            var a = _(o);
                            a !== o && (p ? (n(e).attr(v[r], b), n(e).attr(w, a), n(e).attr(f, o)) : (n(e).attr(v[r], a), n(e).attr(f, o)));
                            break
                        }
                    }
                })
            }, 
            c.onBeforeMobilize = function(t, e) {
                for (var n = e.getCapturedDoc(), r = n.querySelectorAll("img"), i = 0, o = r.length; o > i; i++) {
                    var a = r[i];
                    if ("IMG" === a.nodeName && !a.hasAttribute("STORAGE_ATTR")) 
                    	for (var s = 0,c = v.length; c > s; s++) {
                        var l = a.getAttribute(v[s]);
                        if (l) {
                            var u = _(l);
                            u !== l && (p ? (a.setAttribute(v[s], b), a.setAttribute(w, u), a.setAttribute(f, l)) : (a.setAttribute(v[s], u), a.setAttribute(f, l)));
                            break
                        }
                    }
                }
            },
            c.onMobilizedDocReady = function() {
            	console.log("onMobilizedDocReady");
                if (!this.entryDocReady) {
                    this.entryDocReady = 1;
                    var t = e.$;
                    if (p) try {
                        t.fn.unveil || C(t),
                        t("img").unveil()
                    } catch(n) {
                        s.error("image_resize", n.stack)
                    }
                    l || t("img").on("error",
                    function() {
                        var e = t(this).attr(f),
                        n = t(this).attr(v[1]);
                        e && t(this).attr(v[1], e),
                        s.error("image_broken", a.absolutify(n))
                    }).on("load",
                    function() {
                        t(this).attr(m, t(this).width()),
                        t(this).attr(g, t(this).height()),
                        s.imagesize(t(this).width(), t(this).height(), a.absolutify(t(this).attr(f) || t(this).attr(v[1])))
                    })
                }
            }
        }
    } (w, d, wf, wf.event, wf.config, wf.util, wf.logger),
    /*function(w, d, wf, r, i, o) {} (w, d, wf, wf.event, wf.config, wf.util),
    function(w, d, wf, r, i, o, a) {} (w, d, wf, wf.event, wf.config, wf.util, wf.logger),
    wf.p.md.powered_by = function(w, d, wf, r, i) {},
    wf.p.md.switch_mode = function(w, d, wf, r, i) {},
    wf.p.tpl.index = function(w, d, wf, r, i) {},
    wf.p.tpl.general = function(w, d, wf, r, i) {},*/
    wf.p.data.phone = {
            _options: {
                openLinkInSameWindow: !1,
                removeStyle: !0,
                cleanImg: !1,
                cleanTable: !1,
                cleanFrame: !1,
                cleanEmbed: !1
            },
            _helpers: {
                getHost: function() {
                    return t.location.host
                }
            },
            title: function(t) {
                return t("title").html()
            },
            footer: function(t) {
                return t(".footer").html()
            },
            content: function(t, e) {
            	console.log(":::content:::");
                return e.select({
                    "^/($|\\?)": {
                        template: "index",
                        html: function(t) {
                            var e = {};
                            e.news = [];
                            var n = t(".news");
                            t(".news").find(".news_left ul").remove(),
                            n.find("dt a").eq(0).appendTo(n.find("dt")),
                            t(".news_list > a").text("更多 +"),
                            e.news.push({
                                name: "news",
                                content: n.html()
                            });
                            var r = t(".flow");
                            r.find("ul.develop").remove(),
                            r.find(".ad_flow_text").remove(),
                            r.find("ul li").slice(10).remove(),
                            r.find(".more").text("更多 +"),
                            e.news.push({
                                name: "flow",
                                content: r.html()
                            });
                            var i = t(".hot_blog").eq(0);
                            return i.find("h2 .more").text("更多 +").appendTo(i),
                            e.news.push({
                                name: "geek",
                                content: i.html()
                            }),
                            e.topics = ["开放平台", "HTML5", "开源", "移动开发", "iOS", "Android", "云计算", "大数据", "Hadoop", "OpenStack"],
                            e
                        }
                    },
                    "^/(.+)$": {
                        template: "general",
                        html: function(t) {
                            return t(".content .left").html()
                        }
                    }
                })
            }
    },
    !function(w, wf, cfg) {
    	console.log("e.runOnce:------"+wf.runOnce);
        if (!wf.runOnce && !cfg.isOldBrowsers) {
            wf.state = 100;
            var events = wf.event;
            events && events.fire(events.onPlatformReady)
        }
    } (w, wf, wf.config)
}(window, document);
