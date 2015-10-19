/* Front-end hackers, welcome to join us jobs@yunshipei.com. Copyright(c) AllMobilize/YunShiPei 3.111 (2015/6/29 11:06:54) #pro# */
!function(t, e) {
    t._amVersion = {
        preview: 0,
        debug: 0,
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
        keepz: 0,
        splitmode: 0,
        autodestroy: 1,
        suspend: 0,
        noConvert: 0,
        version: 1443323214636,
        devices: {
            phone: 1
        },
        modules: {
            mobilizer: 1,
            preprocess: 1,
            imageresize: 1,
            analytics: 1,
            errorlog: 1
        },
        files: {
            engine: "allmobilize.min.js",
            page: "page.min.js",
            style: "style.min.css",
            script: "script.min.js",
            targetOrigin:"http://114.112.69.156:19295/cloudadapter"
    		//targetOrigin:"http://127.0.0.1:8080/think"
    		//targetOrigin:"http://192.168.43.198:8080/think"
        }
    };
    var enableLog=true;
    var n = t.AMPlatform = t.AMPlatform || {
        id: "allmobilize",
        attr: "data-entry",
        page: "data-page",
        entry: 0,
        state: 0,
        m: [],
        p: {
            data: {},
            md: {},
            tpl: {}
        },
        __timing: [[ + new Date, "allmobilize"]]
    },
    logs=function(msg){
    	if(enableLog){
    		try{
				window.console = window.console || {}; 
				console.log || (console.log = opera.postError);
				console.log(msg);
    		}catch(e){}
		}
    };
    logs("--------------------AMPlatform-----------------------------------");
    if (function(t, e) {
        function r(e) {
            var n = e.match(/ip(hone|od|ad)/i),
            r = (e.match(/android (\d)/i) || {})[1],
            i = {
                width: t.outerWidth,
                height: t.outerHeight
            };
            if (!n) {
                if (r > 3) return i;
                var o = t.devicePixelRatio || 1;
                return i.width = Math.round(i.width / o),
                i.height = Math.round(i.height / o),
                i
            }
            var a = t.orientation % 180;
            return a ? (i.height = t.screen.width, i.width = t.screen.height) : (i.width = t.screen.width, i.height = t.screen.height),
            i
        }
        function i(e) {
        	logs("i:"+t.devicePixelRatio);
            var n = t.devicePixelRatio || 1;
            return {
                width: Math.round(e.width * n),
                height: Math.round(e.height * n)
            }
        }
        var o = function() {
            var n = !1,
            r = function(r) {
                var i = function() {
                	var re=n ? void 0 : (n = !0, r());
                	logs("re:"+re);
                    return re
                },
                o = function() {
                    if (!n) {
                        try {
                            e.documentElement.doScroll("left")
                        } catch(t) {
                            return void setTimeout(o, 1)
                        }
                        return i()
                    }
                };
                if ("complete" === e.readyState) return i();
                if (e.addEventListener) e.addEventListener("DOMContentLoaded", i, !1),
                t.addEventListener("load", i, !1);
                else if (e.attachEvent) {
                    e.attachEvent("onreadystatechange", i),
                    t.attachEvent("onload", i);
                    var a = !1;
                    try {
                        a = null == t.frameElement
                    } catch(s) {}
                    if (e.documentElement.doScroll && a) return o()
                }
            };
            return r
        } (),
        a = function(e) {
            var n = t.onload;
            logs("a:"+n);
            t.onload = "function" != typeof t.onload ? e: function() {
                n && n(),
                e()
            }
        },
        s = function(t, e) {
            if (n.config.options.autodestroy || e) {
                var r = n.util;
                try {
                    delete t.AMPlatform
                } catch(i) {
                    t.AMPlatform = void 0
                }
                t.AMPlatform = {
                    util: r
                }
            }
        },
        c = n.config = n.config || {},
        l = c.options = t._amVersion || {};
        l.modules = c.options.modules || {},
        l.modules.capture = 1,
        c.debug = l.debug;
        logs("n.id:"+n.id);
        var u = n.srcElement = e.getElementById(n.id);
        logs("n.entry:"+n.entry);
        logs("n.runOnce:"+n.runOnce);
        logs("n.getAttribute:"+u.getAttribute(n.attr));
        logs("n.config:"+n.config);
        logs("n.keepz:"+l.keepz);
        logs("n.attr:"+n.attr);
        if (n.runOnce = ++n.entry > 1 || u.getAttribute(n.attr), !(n.runOnce && (n.config && (l.keepz && n.$ && (t.Zepto = t.$ = n.$, delete n.$), o(function() {
        	logs("-------------------------run-------------Once::::"+1e3+"----------------------------------------");
            n.state = 1e3,
            n.event.fire(n.event.onMobilizedDocReady, {
                doc: e
            })
        }), a(function() {
        	logs("onMobilizedWinLoad::::");
            n.state = 1001,
            n.event.fire(n.event.onMobilizedWinLoad, {
                win: t
            }),
            s(t)
        })), n.state > 0))) {
            var p = c.ua = (t.navigator.userAgent || t.navigator.vendor || t.opera || "").toLowerCase();
            c.isOldBrowsers = p.match(/msie [678]\./),
            c.weixin = p.match(/micromessenger/),
            c.lang = (t.navigator.userLanguage || t.navigator.language || "en-US").split("-")[0],
            c.lang = "en" === c.lang || "zh" === c.lang ? c.lang: "en",
            c.screen = r(p),
            c.physicalSize = i(c.screen),
            c.srcUrl = u ? u.src: "";
            var d = c.srcUrl.lastIndexOf("/"),
            h = c.srcRoot = -1 !== d ? c.srcUrl.substring(0, d + 1) : "";
            logs("srcRoot:"+h);
            if (c.srcRoot) try {
                c.siteId = h.substring(h.lastIndexOf("/", h.length - 2) + 1, h.length - 1)
            } catch(f) {
                c.siteId = ""
            }
            c.pageId = u ? u.getAttribute(n.page) : "";
            var m = t.onerror;
            t.onerror = function(t, e, n) {
                return c.isOldBrowsers ? !0 : m ? m(t, e, n) : !1
            },
            o(function() {
                var r = n.event;
                console.log(r);
                r.fire(r.onOriginalDocReady, {
                    doc: e
                }),
                c.render || (n.state = 10, a(function() {
                    n.state = 11,
                    r.fire(r.onOriginalWinLoad, {
                        win: t
                    }),
                    s(t, !0)
                }))
            })
        }
    } (t, e),
    function(t, Spinner) {
        "object" == typeof exports ? module.exports = Spinner() : "function" == typeof define && define.amd ? define(Spinner) : t.Spinner = Spinner()
    } (this,
    function() {
        "use strict";
        function t(t, n) {
            var r, i = e.createElement(t || "div");
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
            return n(e.getElementsByTagName("head")[0], r),
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
                logs("stoptime:"+this.el);
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
    function(t, e) {
    	logs("allmobilize_loader页面加载中");
        if (!t.runOnce && !e.isOldBrowsers) {
            var n = {
                en: "Loading",
                zh: "页面加载中"
            },
            r = n[e.lang] || n.en;
            t.loader = {
                selector: ".allmobilize_loader",
                html: '<div class="allmobilize_loader" style="position:fixed;top:50%;left:50%;width:120px;height:120px;margin-top:-60px;margin-left:-60px;text-align:center;"><div id="allmobilize_spinner" style="position: relative; height: 50px;"></div><p style="margin:10px 0;color:#666;font-size:1em;font-family:\'Microsoft YaHei\',\'微软雅黑\',Helvetica,Arial,sans-serif">' + r + ' ...</p></div><script class="allmobilize_loader">var spinner = new Spinner({length:8,color: "#666"}).spin(document.getElementById("allmobilize_spinner")); </script>'
            }
        }
    } (n, n.config),
    function(t, e, n, r, i) {
    	logs("viewport");
        if (!n.runOnce && !r.isOldBrowsers) {
            var o = '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" class="allmobilize_loader" />' + i.html + '<plaintext style="display:none">',
            a = "allmobilize",
            s = "_" + a,
            c = "_allmobads=1",
            l = "phone",
            u = "tablet",
            p = "desktop",
            d = "http://s.yunshipei.com/at/m.min.js",
            h = function(e) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var n = "[\\?&]" + e + "=([^&#]*)",
                r = new RegExp(n),
                i = r.exec(t.location.href);
                return null == i ? "": decodeURIComponent(i[1].replace(/\+/g, " "))
            },
            f = function(t) {
                var e = t.lastIndexOf(s);
                return - 1 != e ? t.substr(0, e - 1) : t
            },
            m = function(n) {
                n && (e.cookie = n),
                t.location = f(t.location.href)
            },
            g = h(s + "dev");
            if (g) return g != p && g != u && g != l && (g = l),
            void m(a + "=" + g + "; path=/;");
            var v = r.weixin = r.weixin || h("sukey"),
            y = h(s + "ads"); 
            if (y) return void m(c + "; path=/;");
            r.showAds = y = y || r.options.ads || -1 != e.cookie.indexOf(c);
            var b = function(t) {
                return /(yunshipei|allmobilize)\.(com|net)/.test(t) || /114\.112\.69\.156/.test(t)|| /192\.168/.test(t)|| /127\.0/.test(t) || /localhost/.test(t) || /ysp\.www\.gov\.cn/.test(t)
            },
            w = function(e) {
                if (e) {
                    var n = t.location.hostname,
                    r = new RegExp(e, "i");
                    return r.test(n) || b(n)
                }
                return ! 0
            },
            x = function(t) {
                return b(t)
            },
            E = function(t) {
                var e = (new Date).getTime();
                //return ! t || parseInt(t) >= e
                return true
            },
            _ = n.ls = !r.options.suspend && w(r.options.domains) && E(r.options.version) && x(r.srcRoot),
            C = {
                tablet: function(t) {
                    return /ipad|GT-P7500/i.test(t) || /tablet/.test(t) && r.screen.width <= 1024 ? !0 : !1
                },
                phone: function(t) {
                    return t ? /(bb\d+|meego).+mobile|ucweb|ucbrowser|mqqbrowser|360browser|micromessenger|avantgo|bada\/|blackberry|android|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/.test(t.substr(0, 4)) ? !0 : !1 : r.screen.width <= 720
                },
                desktop: function() {
                    return ! 0
                }
            },
            M = function(t) {
                for (k in C) if (C.hasOwnProperty(k) && C[k](t)) return k;
                return ""
            },
            S = function(t) {
                return - 1 != e.cookie.indexOf(a + "=" + t)
            },
            T = function() {
                return /(proxy|qing)\.(yunshipei|allmobilize|ysp)\.(com|net)/.test(t.location.hostname)
            },
            k = r.realDevice = M(r.ua);
            k = v && k == p ? l: k,
            "discuzdefault" === r.siteId && k === u && (k = l),
            k = t.name == s ? l: k,
            k = t.name == s + u ? u: k,
            k = t.name == s + p ? p: k,
            (r.debug || r.options.preview) && (k = S(l) ? l: S(u) ? u: p, T() && k === p && (k = l)),
            k = S(p) ? p: k,
            r.device = k;
            logs("r.device.suspend:"+!r.options.suspend);
            logs("r.domains:"+w(r.options.domains));
            logs("r.version:"+E(r.options.version));
            logs("r.srcRoot:"+x(r.srcRoot));
            
            
            logs("r.device:"+r.device);
            logs("r.device:"+r.options.devices[k]);
            var O = r.render = r.options.devices[k] && _ && !r.isOldBrowsers;
            logs("r.render:"+r.render);
            logs("_______:"+_);
            logs("O:"+O);
            if (O) e.write(o),
            n.state = 1;
            else if (r.realDevice != p) {
            	logs(" else write");
                var A = e.createElement("script");
                A.setAttribute("type", "text/javascript"),
                A.setAttribute("defer", ""),
                A.setAttribute("src", d);
                var j = e.getElementsByTagName("head"),
                P = j ? j[0] : null;
                P && P.appendChild(A)
            }
            n.__timing.push([ + new Date, "router"])
        }
    } (t, e, n, n.config, n.loader), n.config && !n.config.isOldBrowsers) {
        var r = function() {
            function e(t) {
                return null == t ? String(t) : W[G.call(t)] || "object"
            }
            function n(t) {
                return "function" == e(t)
            }
            function r(t) {
                return null != t && t == t.window
            }
            function i(t) {
                return null != t && t.nodeType == t.DOCUMENT_NODE
            }
            function o(t) {
                return "object" == e(t)
            }
            function a(t) {
                return o(t) && !r(t) && Object.getPrototypeOf(t) == Object.prototype
            }
            function s(t) {
                return "number" == typeof t.length
            }
            function c(t) {
                return A.call(t,
                function(t) {
                    return null != t
                })
            }
            function l(t) {
                return t.length > 0 ? C.fn.concat.apply([], t) : t
            }
            function u(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }
            function p(t) {
                return t in N ? N[t] : N[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
            }
            function d(t, e) {
                return "number" != typeof e || z[u(t)] ? e: e + "px"
            }
            function h(t) {
                var e, n;
                return P[t] || (e = j.createElement(t), j.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), P[t] = n),
                P[t]
            }
            function f(t) {
                return "children" in t ? O.call(t.children) : C.map(t.childNodes,
                function(t) {
                    return 1 == t.nodeType ? t: void 0
                })
            }
            function m(t, e, n) {
                for (_ in e) n && (a(e[_]) || K(e[_])) ? (a(e[_]) && !a(t[_]) && (t[_] = {}), K(e[_]) && !K(t[_]) && (t[_] = []), m(t[_], e[_], n)) : e[_] !== E && (t[_] = e[_])
            }
            function g(t, e) {
                return null == e ? C(t) : C(t).filter(e)
            }
            function v(t, e, r, i) {
                return n(e) ? e.call(t, r, i) : e
            }
            function y(t, e, n) {
                null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
            }
            function b(t, e) {
                var n = t.className,
                r = n && n.baseVal !== E;
                return e === E ? r ? n.baseVal: n: void(r ? n.baseVal = e: t.className = e)
            }
            function w(t) {
                var e;
                try {
                    return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null: /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? C.parseJSON(t) : t: e) : t
                } catch(n) {
                    return t
                }
            }
            function x(t, e) {
                e(t);
                for (var n = 0,
                r = t.childNodes.length; r > n; n++) x(t.childNodes[n], e)
            }
            var E, _, C, M, S, T, k = [],
            O = k.slice,
            A = k.filter,
            j = t.document,
            P = {},
            N = {},
            z = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            },
            D = /^\s*<(\w+|!)[^>]*>/,
            R = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            $ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            I = /^(?:body|html)$/i,
            L = /([A-Z])/g,
            B = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            H = ["after", "prepend", "before", "append"],
            q = j.createElement("table"),
            F = j.createElement("tr"),
            U = {
                tr: j.createElement("tbody"),
                tbody: q,
                thead: q,
                tfoot: q,
                td: F,
                th: F,
                "*": j.createElement("div")
            },
            V = /complete|loaded|interactive/,
            Z = /^[\w-]*$/,
            W = {},
            G = W.toString,
            Y = {},
            J = j.createElement("div"),
            X = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            K = Array.isArray ||
            function(t) {
                return t instanceof Array
            };
            return Y.matches = function(t, e) {
                if (!e || !t || 1 !== t.nodeType) return ! 1;
                var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                if (n) return n.call(t, e);
                var r, i = t.parentNode,
                o = !i;
                return o && (i = J).appendChild(t),
                r = ~Y.qsa(i, e).indexOf(t),
                o && J.removeChild(t),
                r
            },
            S = function(t) {
                return t.replace(/-+(.)?/g,
                function(t, e) {
                    return e ? e.toUpperCase() : ""
                })
            },
            T = function(t) {
                return A.call(t,
                function(e, n) {
                    return t.indexOf(e) == n
                })
            },
            Y.fragment = function(t, e, n) {
                var r, i, o;
                return R.test(t) && (r = C(j.createElement(RegExp.$1))),
                r || (t.replace && (t = t.replace($, "<$1></$2>")), e === E && (e = D.test(t) && RegExp.$1), e in U || (e = "*"), o = U[e], o.innerHTML = "" + t, r = C.each(O.call(o.childNodes),
                function() {
                    o.removeChild(this)
                })),
                a(n) && (i = C(r), C.each(n,
                function(t, e) {
                    B.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
                })),
                r
            },
            Y.Z = function(t, e) {
                return t = t || [],
                t.__proto__ = C.fn,
                t.selector = e || "",
                t
            },
            Y.isZ = function(t) {
                return t instanceof Y.Z
            },
            Y.init = function(t, e) {
                var r;
                if (!t) return Y.Z();
                if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && D.test(t)) r = Y.fragment(t, RegExp.$1, e),
                t = null;
                else {
                    if (e !== E) return C(e).find(t);
                    r = Y.qsa(j, t)
                } else {
                    if (n(t)) return C(j).ready(t);
                    if (Y.isZ(t)) return t;
                    if (K(t)) r = c(t);
                    else if (o(t)) r = [t],
                    t = null;
                    else if (D.test(t)) r = Y.fragment(t.trim(), RegExp.$1, e),
                    t = null;
                    else {
                        if (e !== E) return C(e).find(t);
                        r = Y.qsa(j, t)
                    }
                }
                return Y.Z(r, t)
            },
            C = function(t, e) {
                return Y.init(t, e)
            },
            C.extend = function(t) {
                var e, n = O.call(arguments, 1);
                return "boolean" == typeof t && (e = t, t = n.shift()),
                n.forEach(function(n) {
                    m(t, n, e)
                }),
                t
            },
            Y.qsa = function(t, e) {
                var n, r = "#" == e[0],
                o = !r && "." == e[0],
                a = r || o ? e.slice(1) : e,
                s = Z.test(a);
                return i(t) && s && r ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : O.call(s && !r ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
            },
            C.contains = j.documentElement.contains ?
            function(t, e) {
                return t !== e && t.contains(e)
            }: function(t, e) {
                for (; e && (e = e.parentNode);) if (e === t) return ! 0;
                return ! 1
            },
            C.type = e,
            C.isFunction = n,
            C.isWindow = r,
            C.isArray = K,
            C.isPlainObject = a,
            C.isEmptyObject = function(t) {
                var e;
                for (e in t) return ! 1;
                return ! 0
            },
            C.inArray = function(t, e, n) {
                return k.indexOf.call(e, t, n)
            },
            C.camelCase = S,
            C.trim = function(t) {
                return null == t ? "": String.prototype.trim.call(t)
            },
            C.uuid = 0,
            C.support = {},
            C.expr = {},
            C.map = function(t, e) {
                var n, r, i, o = [];
                if (s(t)) for (r = 0; r < t.length; r++) n = e(t[r], r),
                null != n && o.push(n);
                else for (i in t) n = e(t[i], i),
                null != n && o.push(n);
                return l(o)
            },
            C.each = function(t, e) {
                var n, r;
                if (s(t)) {
                    for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
                } else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t;
                return t
            },
            C.grep = function(t, e) {
                return A.call(t, e)
            },
            t.JSON && (C.parseJSON = JSON.parse),
            C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
            function(t, e) {
                W["[object " + e + "]"] = e.toLowerCase()
            }),
            C.fn = {
                forEach: k.forEach,
                reduce: k.reduce,
                push: k.push,
                sort: k.sort,
                indexOf: k.indexOf,
                concat: k.concat,
                map: function(t) {
                    return C(C.map(this,
                    function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function() {
                    return C(O.apply(this, arguments))
                },
                ready: function(t) {
                    return V.test(j.readyState) && j.body ? t(C) : j.addEventListener("DOMContentLoaded",
                    function() {
                        t(C)
                    },
                    !1),
                    this
                },
                get: function(t) {
                    return t === E ? O.call(this) : this[t >= 0 ? t: t + this.length]
                },
                toArray: function() {
                    return this.get()
                },
                size: function() {
                    return this.length
                },
                remove: function() {
                    return this.each(function() {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function(t) {
                    return k.every.call(this,
                    function(e, n) {
                        return t.call(e, n, e) !== !1
                    }),
                    this
                },
                filter: function(t) {
                    return n(t) ? this.not(this.not(t)) : C(A.call(this,
                    function(e) {
                        return Y.matches(e, t)
                    }))
                },
                add: function(t, e) {
                    return C(T(this.concat(C(t, e))))
                },
                is: function(t) {
                    return this.length > 0 && Y.matches(this[0], t)
                },
                not: function(t) {
                    var e = [];
                    if (n(t) && t.call !== E) this.each(function(n) {
                        t.call(this, n) || e.push(this)
                    });
                    else {
                        var r = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? O.call(t) : C(t);
                        this.forEach(function(t) {
                            r.indexOf(t) < 0 && e.push(t)
                        })
                    }
                    return C(e)
                },
                has: function(t) {
                    return this.filter(function() {
                        return o(t) ? C.contains(this, t) : C(this).find(t).size()
                    })
                },
                eq: function(t) {
                    return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
                },
                first: function() {
                    var t = this[0];
                    return t && !o(t) ? t: C(t)
                },
                last: function() {
                    var t = this[this.length - 1];
                    return t && !o(t) ? t: C(t)
                },
                find: function(t) {
                    var e, n = this;
                    return e = t ? "object" == typeof t ? C(t).filter(function() {
                        var t = this;
                        return k.some.call(n,
                        function(e) {
                            return C.contains(e, t)
                        })
                    }) : 1 == this.length ? C(Y.qsa(this[0], t)) : this.map(function() {
                        return Y.qsa(this, t)
                    }) : []
                },
                closest: function(t, e) {
                    var n = this[0],
                    r = !1;
                    for ("object" == typeof t && (r = C(t)); n && !(r ? r.indexOf(n) >= 0 : Y.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
                    return C(n)
                },
                parents: function(t) {
                    for (var e = [], n = this; n.length > 0;) n = C.map(n,
                    function(t) {
                        return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                    });
                    return g(e, t)
                },
                parent: function(t) {
                    return g(T(this.pluck("parentNode")), t)
                },
                children: function(t) {
                    return g(this.map(function() {
                        return f(this)
                    }), t)
                },
                contents: function() {
                    return this.map(function() {
                        return O.call(this.childNodes)
                    })
                },
                siblings: function(t) {
                    return g(this.map(function(t, e) {
                        return A.call(f(e.parentNode),
                        function(t) {
                            return t !== e
                        })
                    }), t)
                },
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = ""
                    })
                },
                pluck: function(t) {
                    return C.map(this,
                    function(e) {
                        return e[t]
                    })
                },
                show: function() {
                    return this.each(function() {
                        "none" == this.style.display && (this.style.display = ""),
                        "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                    })
                },
                replaceWith: function(t) {
                    return this.before(t).remove()
                },
                wrap: function(t) {
                    var e = n(t);
                    if (this[0] && !e) var r = C(t).get(0),
                    i = r.parentNode || this.length > 1;
                    return this.each(function(n) {
                        C(this).wrapAll(e ? t.call(this, n) : i ? r.cloneNode(!0) : r)
                    })
                },
                wrapAll: function(t) {
                    if (this[0]) {
                        C(this[0]).before(t = C(t));
                        for (var e; (e = t.children()).length;) t = e.first();
                        C(t).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    var e = n(t);
                    return this.each(function(n) {
                        var r = C(this),
                        i = r.contents(),
                        o = e ? t.call(this, n) : t;
                        i.length ? i.wrapAll(o) : r.append(o)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        C(this).replaceWith(C(this).children())
                    }),
                    this
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(!0)
                    })
                },
                hide: function() {
                    return this.css("display", "none")
                },
                toggle: function(t) {
                    return this.each(function() {
                        var e = C(this); (t === E ? "none" == e.css("display") : t) ? e.show() : e.hide()
                    })
                },
                prev: function(t) {
                    return C(this.pluck("previousElementSibling")).filter(t || "*")
                },
                next: function(t) {
                    return C(this.pluck("nextElementSibling")).filter(t || "*")
                },
                html: function(t) {
                    return 0 in arguments ? this.each(function(e) {
                        var n = this.innerHTML;
                        C(this).empty().append(v(this, t, e, n))
                    }) : 0 in this ? this[0].innerHTML: null
                },
                text: function(t) {
                    return 0 in arguments ? this.each(function(e) {
                        var n = v(this, t, e, this.textContent);
                        this.textContent = null == n ? "": "" + n
                    }) : 0 in this ? this[0].textContent: null
                },
                attr: function(t, e) {
                    var n;
                    return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                        if (1 === this.nodeType) if (o(t)) for (_ in t) y(this, _, t[_]);
                        else y(this, t, v(this, e, n, this.getAttribute(t)))
                    }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n: E
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        1 === this.nodeType && y(this, t)
                    })
                },
                prop: function(t, e) {
                    return t = X[t] || t,
                    1 in arguments ? this.each(function(n) {
                        this[t] = v(this, e, n, this[t])
                    }) : this[0] && this[0][t]
                },
                data: function(t, e) {
                    var n = "data-" + t.replace(L, "-$1").toLowerCase(),
                    r = 1 in arguments ? this.attr(n, e) : this.attr(n);
                    return null !== r ? w(r) : E
                },
                val: function(t) {
                    return 0 in arguments ? this.each(function(e) {
                        this.value = v(this, t, e, this.value)
                    }) : this[0] && (this[0].multiple ? C(this[0]).find("option").filter(function() {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function(e) {
                    if (e) return this.each(function(t) {
                        var n = C(this),
                        r = v(this, e, t, n.offset()),
                        i = n.offsetParent().offset(),
                        o = {
                            top: r.top - i.top,
                            left: r.left - i.left
                        };
                        "static" == n.css("position") && (o.position = "relative"),
                        n.css(o)
                    });
                    if (!this.length) return null;
                    var n = this[0].getBoundingClientRect();
                    return {
                        left: n.left + t.pageXOffset,
                        top: n.top + t.pageYOffset,
                        width: Math.round(n.width),
                        height: Math.round(n.height)
                    }
                },
                css: function(t, n) {
                    if (arguments.length < 2) {
                        var r = this[0],
                        i = getComputedStyle(r, "");
                        if (!r) return;
                        if ("string" == typeof t) return r.style[S(t)] || i.getPropertyValue(t);
                        if (K(t)) {
                            var o = {};
                            return C.each(K(t) ? t: [t],
                            function(t, e) {
                                o[e] = r.style[S(e)] || i.getPropertyValue(e)
                            }),
                            o
                        }
                    }
                    var a = "";
                    if ("string" == e(t)) n || 0 === n ? a = u(t) + ":" + d(t, n) : this.each(function() {
                        this.style.removeProperty(u(t))
                    });
                    else for (_ in t) t[_] || 0 === t[_] ? a += u(_) + ":" + d(_, t[_]) + ";": this.each(function() {
                        this.style.removeProperty(u(_))
                    });
                    return this.each(function() {
                        this.style.cssText += ";" + a
                    })
                },
                index: function(t) {
                    return t ? this.indexOf(C(t)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function(t) {
                    return t ? k.some.call(this,
                    function(t) {
                        return this.test(b(t))
                    },
                    p(t)) : !1
                },
                addClass: function(t) {
                    return t ? this.each(function(e) {
                        M = [];
                        var n = b(this),
                        r = v(this, t, e, n);
                        r.split(/\s+/g).forEach(function(t) {
                            C(this).hasClass(t) || M.push(t)
                        },
                        this),
                        M.length && b(this, n + (n ? " ": "") + M.join(" "))
                    }) : this
                },
                removeClass: function(t) {
                    return this.each(function(e) {
                        return t === E ? b(this, "") : (M = b(this), v(this, t, e, M).split(/\s+/g).forEach(function(t) {
                            M = M.replace(p(t), " ")
                        }), void b(this, M.trim()))
                    })
                },
                toggleClass: function(t, e) {
                    return t ? this.each(function(n) {
                        var r = C(this),
                        i = v(this, t, n, b(this));
                        i.split(/\s+/g).forEach(function(t) { (e === E ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
                        })
                    }) : this
                },
                scrollTop: function(t) {
                    if (this.length) {
                        var e = "scrollTop" in this[0];
                        return t === E ? e ? this[0].scrollTop: this[0].pageYOffset: this.each(e ?
                        function() {
                            this.scrollTop = t
                        }: function() {
                            this.scrollTo(this.scrollX, t)
                        })
                    }
                },
                scrollLeft: function(t) {
                    if (this.length) {
                        var e = "scrollLeft" in this[0];
                        return t === E ? e ? this[0].scrollLeft: this[0].pageXOffset: this.each(e ?
                        function() {
                            this.scrollLeft = t
                        }: function() {
                            this.scrollTo(t, this.scrollY)
                        })
                    }
                },
                position: function() {
                    if (this.length) {
                        var t = this[0],
                        e = this.offsetParent(),
                        n = this.offset(),
                        r = I.test(e[0].nodeName) ? {
                            top: 0,
                            left: 0
                        }: e.offset();
                        return n.top -= parseFloat(C(t).css("margin-top")) || 0,
                        n.left -= parseFloat(C(t).css("margin-left")) || 0,
                        r.top += parseFloat(C(e[0]).css("border-top-width")) || 0,
                        r.left += parseFloat(C(e[0]).css("border-left-width")) || 0,
                        {
                            top: n.top - r.top,
                            left: n.left - r.left
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent || j.body; t && !I.test(t.nodeName) && "static" == C(t).css("position");) t = t.offsetParent;
                        return t
                    })
                }
            },
            C.fn.detach = C.fn.remove,
            ["width", "height"].forEach(function(t) {
                var e = t.replace(/./,
                function(t) {
                    return t[0].toUpperCase()
                });
                C.fn[t] = function(n) {
                    var o, a = this[0];
                    return n === E ? r(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                        a = C(this),
                        a.css(t, v(this, n, e, a[t]()))
                    })
                }
            }),
            H.forEach(function(n, r) {
                var i = r % 2;
                C.fn[n] = function() {
                    var n, o, a = C.map(arguments,
                    function(t) {
                        return n = e(t),
                        "object" == n || "array" == n || null == t ? t: Y.fragment(t)
                    }),
                    s = this.length > 1;
                    return a.length < 1 ? this: this.each(function(e, n) {
                        o = i ? n: n.parentNode,
                        n = 0 == r ? n.nextSibling: 1 == r ? n.firstChild: 2 == r ? n: null;
                        var c = C.contains(j.documentElement, o);
                        a.forEach(function(e) {
                            if (s) e = e.cloneNode(!0);
                            else if (!o) return C(e).remove();
                            o.insertBefore(e, n),
                            c && x(e,
                            function(e) {
                                null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || t.eval.call(t, e.innerHTML)
                            })
                        })
                    })
                },
                C.fn[i ? n + "To": "insert" + (r ? "Before": "After")] = function(t) {
                    return C(t)[n](this),
                    this
                }
            }),
            Y.Z.prototype = C.fn,
            Y.uniq = T,
            Y.deserializeValue = w,
            C.zepto = Y,
            C
        } ();
        t.Zepto = r,
        void 0 === t.$ && (t.$ = r),
        function(n) {
            function r(t) {
                return t._zid || (t._zid = f++)
            }
            function i(t, e, n, i) {
                if (e = o(e), e.ns) var s = a(e.ns);
                return (y[r(t)] || []).filter(function(t) {
                    return ! (!t || e.e && t.e != e.e || e.ns && !s.test(t.ns) || n && r(t.fn) !== r(n) || i && t.sel != i)
                })
            }
            function o(t) {
                var e = ("" + t).split(".");
                return {
                    e: e[0],
                    ns: e.slice(1).sort().join(" ")
                }
            }
            function a(t) {
                return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
            }
            function s(t, e) {
                return t.del && !w && t.e in x || !!e
            }
            function c(t) {
                return E[t] || w && x[t] || t
            }
            function l(t, i, a, l, u, d, f) {
                var m = r(t),
                g = y[m] || (y[m] = []);
                i.split(/\s/).forEach(function(r) {
                    if ("ready" == r) return n(e).ready(a);
                    var i = o(r);
                    i.fn = a,
                    i.sel = u,
                    i.e in E && (a = function(t) {
                        var e = t.relatedTarget;
                        return ! e || e !== this && !n.contains(this, e) ? i.fn.apply(this, arguments) : void 0
                    }),
                    i.del = d;
                    var m = d || a;
                    i.proxy = function(e) {
                        if (e = p(e), !e.isImmediatePropagationStopped()) {
                            e.data = l;
                            var n = m.apply(t, e._args == h ? [e] : [e].concat(e._args));
                            return n === !1 && (e.preventDefault(), e.stopPropagation()),
                            n
                        }
                    },
                    i.i = g.length,
                    g.push(i),
                    "addEventListener" in t && t.addEventListener(c(i.e), i.proxy, s(i, f))
                })
            }
            function u(t, e, n, o, a) {
                var l = r(t); (e || "").split(/\s/).forEach(function(e) {
                    i(t, e, n, o).forEach(function(e) {
                        delete y[l][e.i],
                        "removeEventListener" in t && t.removeEventListener(c(e.e), e.proxy, s(e, a))
                    })
                })
            }
            function p(t, e) {
                return (e || !t.isDefaultPrevented) && (e || (e = t), n.each(S,
                function(n, r) {
                    var i = e[n];
                    t[n] = function() {
                        return this[r] = _,
                        i && i.apply(e, arguments)
                    },
                    t[r] = C
                }), (e.defaultPrevented !== h ? e.defaultPrevented: "returnValue" in e ? e.returnValue === !1 : e.getPreventDefault && e.getPreventDefault()) && (t.isDefaultPrevented = _)),
                t
            }
            function d(t) {
                var e, n = {
                    originalEvent: t
                };
                for (e in t) M.test(e) || t[e] === h || (n[e] = t[e]);
                return p(n, t)
            }
            var h, f = 1,
            m = Array.prototype.slice,
            g = n.isFunction,
            v = function(t) {
                return "string" == typeof t
            },
            y = {},
            b = {},
            w = "onfocusin" in t,
            x = {
                focus: "focusin",
                blur: "focusout"
            },
            E = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
            b.click = b.mousedown = b.mouseup = b.mousemove = "MouseEvents",
            n.event = {
                add: l,
                remove: u
            },
            n.proxy = function(t, e) {
                var i = 2 in arguments && m.call(arguments, 2);
                if (g(t)) {
                    var o = function() {
                        return t.apply(e, i ? i.concat(m.call(arguments)) : arguments)
                    };
                    return o._zid = r(t),
                    o
                }
                if (v(e)) return i ? (i.unshift(t[e], t), n.proxy.apply(null, i)) : n.proxy(t[e], t);
                throw new TypeError("expected function")
            },
            n.fn.bind = function(t, e, n) {
                return this.on(t, e, n)
            },
            n.fn.unbind = function(t, e) {
                return this.off(t, e)
            },
            n.fn.one = function(t, e, n, r) {
                return this.on(t, e, n, r, 1)
            };
            var _ = function() {
                return ! 0
            },
            C = function() {
                return ! 1
            },
            M = /^([A-Z]|returnValue$|layer[XY]$)/,
            S = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
            n.fn.delegate = function(t, e, n) {
                return this.on(e, t, n)
            },
            n.fn.undelegate = function(t, e, n) {
                return this.off(e, t, n)
            },
            n.fn.live = function(t, r) {
                return n(e.body).delegate(this.selector, t, r),
                this
            },
            n.fn.die = function(t, r) {
                return n(e.body).undelegate(this.selector, t, r),
                this
            },
            n.fn.on = function(t, e, r, i, o) {
                var a, s, c = this;
                return t && !v(t) ? (n.each(t,
                function(t, n) {
                    c.on(t, e, r, n, o)
                }), c) : (v(e) || g(i) || i === !1 || (i = r, r = e, e = h), (g(r) || r === !1) && (i = r, r = h), i === !1 && (i = C), c.each(function(c, p) {
                    o && (a = function(t) {
                        return u(p, t.type, i),
                        i.apply(this, arguments)
                    }),
                    e && (s = function(t) {
                        var r, o = n(t.target).closest(e, p).get(0);
                        return o && o !== p ? (r = n.extend(d(t), {
                            currentTarget: o,
                            liveFired: p
                        }), (a || i).apply(o, [r].concat(m.call(arguments, 1)))) : void 0
                    }),
                    l(p, t, i, r, e, s || a)
                }))
            },
            n.fn.off = function(t, e, r) {
                var i = this;
                return t && !v(t) ? (n.each(t,
                function(t, n) {
                    i.off(t, e, n)
                }), i) : (v(e) || g(r) || r === !1 || (r = e, e = h), r === !1 && (r = C), i.each(function() {
                    u(this, t, r, e)
                }))
            },
            n.fn.trigger = function(t, e) {
                return t = v(t) || n.isPlainObject(t) ? n.Event(t) : p(t),
                t._args = e,
                this.each(function() {
                    "dispatchEvent" in this ? this.dispatchEvent(t) : n(this).triggerHandler(t, e)
                })
            },
            n.fn.triggerHandler = function(t, e) {
                var r, o;
                return this.each(function(a, s) {
                    r = d(v(t) ? n.Event(t) : t),
                    r._args = e,
                    r.target = s,
                    n.each(i(s, t.type || t),
                    function(t, e) {
                        return o = e.proxy(r),
                        r.isImmediatePropagationStopped() ? !1 : void 0
                    })
                }),
                o
            },
            "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                n.fn[t] = function(e) {
                    return e ? this.bind(t, e) : this.trigger(t)
                }
            }),
            ["focus", "blur"].forEach(function(t) {
                n.fn[t] = function(e) {
                    return e ? this.bind(t, e) : this.each(function() {
                        try {
                            this[t]()
                        } catch(e) {}
                    }),
                    this
                }
            }),
            n.Event = function(t, n) {
                v(t) || (n = t, t = n.type);
                var r = e.createEvent(b[t] || "Events"),
                i = !0;
                if (n) for (var o in n)"bubbles" == o ? i = !!n[o] : r[o] = n[o];
                return r.initEvent(t, i, !0),
                p(r)
            }
        } (r),
        function(e) {
        	logs("-----------------eeeeeee:"+e);
            function n(t, n, r) {
                var i = e.Event(n);
                logs("isDefaultPrevented:------"+i);
                return e(t).trigger(i, r),
                !i.isDefaultPrevented()
            }
            function r(t, e, r, i) {
                return t.global ? n(e || b, r, i) : void 0
            }
            function i(t) {
                t.global && 0 === e.active++&&r(t, null, "ajaxStart")
            }
            function o(t) {
                t.global && !--e.active && r(t, null, "ajaxStop")
            }
            function a(t, e) {
                var n = e.context;
                return e.beforeSend.call(n, t, e) === !1 || r(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void r(e, n, "ajaxSend", [t, e])
            }
            function s(t, e, n, i) {
                var o = n.context,
                a = "success";
                n.success.call(o, t, a, e),
                i && i.resolveWith(o, [t, a, e]),
                r(n, o, "ajaxSuccess", [e, n, t]),
                l(a, e, n)
            }
            function c(t, e, n, i, o) {
                var a = i.context;
                i.error.call(a, n, e, t),
                o && o.rejectWith(a, [n, e, t]),
                r(i, a, "ajaxError", [n, i, t || e]),
                l(e, n, i)
            }
            function l(t, e, n) {
                var i = n.context;
                n.complete.call(i, e, t),
                r(n, i, "ajaxComplete", [e, n]),
                o(n)
            }
            function u() {}
            function p(t) {
                return t && (t = t.split(";", 2)[0]),
                t && (t == C ? "html": t == _ ? "json": x.test(t) ? "script": E.test(t) && "xml") || "text"
            }
            function d(t, e) {
                return "" == e ? t: (t + "&" + e).replace(/[&?]{1,2}/, "?")
            }
            function h(t) {
                t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)),
                !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = d(t.url, t.data), t.data = void 0)
            }
            function f(t, n, r, i) {
                return e.isFunction(n) && (i = r, r = n, n = void 0),
                e.isFunction(r) || (i = r, r = void 0),
                {
                    url: t,
                    data: n,
                    success: r,
                    dataType: i
                }
            }
            function m(t, n, r, i) {
                var o, a = e.isArray(n),
                s = e.isPlainObject(n);
                e.each(n,
                function(n, c) {
                    o = e.type(c),
                    i && (n = r ? i: i + "[" + (s || "object" == o || "array" == o ? n: "") + "]"),
                    !i && a ? t.add(c.name, c.value) : "array" == o || !r && "object" == o ? m(t, c, r, n) : t.add(n, c)
                })
            }
            var g, v, y = 0,
            b = t.document,
            w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            x = /^(?:text|application)\/javascript/i,
            E = /^(?:text|application)\/xml/i,
            _ = "application/json",
            C = "text/html",
            M = /^\s*$/;
            e.active = 0,
            e.ajaxJSONP = function(n, r) {
                if (! ("type" in n)) return e.ajax(n);
                var i, o, l = n.jsonpCallback,
                u = (e.isFunction(l) ? l() : l) || "jsonp" + ++y,
                p = b.createElement("script"),
                d = t[u],
                h = function(t) {
                    e(p).triggerHandler("error", t || "abort")
                },
                f = {
                    abort: h
                };
                return r && r.promise(f),
                e(p).on("load error",
                function(a, l) {
                    clearTimeout(o),
                    e(p).off().remove(),
                    "error" != a.type && i ? s(i[0], f, n, r) : c(null, l || "error", f, n, r),
                    t[u] = d,
                    i && e.isFunction(d) && d(i[0]),
                    d = i = void 0
                }),
                a(f, n) === !1 ? (h("abort"), f) : (t[u] = function() {
                    i = arguments
                },
                p.src = n.url.replace(/\?(.+)=\?/, "?$1=" + u), b.head.appendChild(p), n.timeout > 0 && (o = setTimeout(function() {
                    h("timeout")
                },
                n.timeout)), f)
            },
            e.ajaxSettings = {
                type: "GET",
                beforeSend: u,
                success: u,
                error: u,
                complete: u,
                context: null,
                global: !0,
                xhr: function() {
                    return new t.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: _,
                    xml: "application/xml, text/xml",
                    html: C,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0
            },
            e.ajax = function(n) {
                var r = e.extend({},
                n || {}),
                o = e.Deferred && e.Deferred();
                for (g in e.ajaxSettings) void 0 === r[g] && (r[g] = e.ajaxSettings[g]);
                i(r),
                r.crossDomain || (r.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(r.url) && RegExp.$2 != t.location.host),
                r.url || (r.url = t.location.toString()),
                h(r);
                var l = r.dataType,
                f = /\?.+=\?/.test(r.url);
                if (f && (l = "jsonp"), r.cache !== !1 && (n && n.cache === !0 || "script" != l && "jsonp" != l) || (r.url = d(r.url, "_=" + Date.now())), "jsonp" == l) return f || (r.url = d(r.url, r.jsonp ? r.jsonp + "=?": r.jsonp === !1 ? "": "callback=?")),
                e.ajaxJSONP(r, o);
                var m, y = r.accepts[l],
                b = {},
                w = function(t, e) {
                    b[t.toLowerCase()] = [t, e]
                },
                x = /^([\w-]+:)\/\//.test(r.url) ? RegExp.$1: t.location.protocol,
                E = r.xhr(),
                _ = E.setRequestHeader;
                if (o && o.promise(E), r.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", y || "*/*"), (y = r.mimeType || y) && (y.indexOf(",") > -1 && (y = y.split(",", 2)[0]), E.overrideMimeType && E.overrideMimeType(y)), (r.contentType || r.contentType !== !1 && r.data && "GET" != r.type.toUpperCase()) && w("Content-Type", r.contentType || "application/x-www-form-urlencoded"), r.headers) for (v in r.headers) w(v, r.headers[v]);
                if (E.setRequestHeader = w, E.onreadystatechange = function() {
                    if (4 == E.readyState) {
                        E.onreadystatechange = u,
                        clearTimeout(m);
                        var t, n = !1;
                        if (E.status >= 200 && E.status < 300 || 304 == E.status || 0 == E.status && "file:" == x) {
                            l = l || p(r.mimeType || E.getResponseHeader("content-type")),
                            t = E.responseText;
                            try {
                                "script" == l ? (1, eval)(t) : "xml" == l ? t = E.responseXML: "json" == l && (t = M.test(t) ? null: e.parseJSON(t))
                            } catch(i) {
                                n = i
                            }
                            n ? c(n, "parsererror", E, r, o) : s(t, E, r, o)
                        } else c(E.statusText || null, E.status ? "error": "abort", E, r, o)
                    }
                },
                a(E, r) === !1) return E.abort(),
                c(null, "abort", E, r, o),
                E;
                if (r.xhrFields) for (v in r.xhrFields) E[v] = r.xhrFields[v];
                var C = "async" in r ? r.async: !0;
                E.open(r.type, r.url, C, r.username, r.password);
                for (v in b) _.apply(E, b[v]);
                return r.timeout > 0 && (m = setTimeout(function() {
                    E.onreadystatechange = u,
                    E.abort(),
                    c(null, "timeout", E, r, o)
                },
                r.timeout)),
                E.send(r.data ? r.data: null),
                E
            },
            e.get = function() {
                return e.ajax(f.apply(null, arguments))
            },
            e.post = function() {
                var t = f.apply(null, arguments);
                return t.type = "POST",
                e.ajax(t)
            },
            e.getJSON = function() {
                var t = f.apply(null, arguments);
                return t.dataType = "json",
                e.ajax(t)
            },
            e.fn.load = function(t, n, r) {
                if (!this.length) return this;
                var i, o = this,
                a = t.split(/\s/),
                s = f(t, n, r),
                c = s.success;
                return a.length > 1 && (s.url = a[0], i = a[1]),
                s.success = function(t) {
                    o.html(i ? e("<div>").html(t.replace(w, "")).find(i) : t),
                    c && c.apply(o, arguments)
                },
                e.ajax(s),
                this
            };
            var S = encodeURIComponent;
            e.param = function(t, e) {
                var n = [];
                return n.add = function(t, e) {
                    this.push(S(t) + "=" + S(e))
                },
                m(n, t, e),
                n.join("&").replace(/%20/g, "+")
            }
        } (r),
        function(t) {
            t.fn.serializeArray = function() {
                var e, n = [];
                return t([].slice.call(this.get(0).elements)).each(function() {
                    e = t(this);
                    var r = e.attr("type");
                    "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != r && "reset" != r && "button" != r && ("radio" != r && "checkbox" != r || this.checked) && n.push({
                        name: e.attr("name"),
                        value: e.val()
                    })
                }),
                n
            },
            t.fn.serialize = function() {
                var t = [];
                return this.serializeArray().forEach(function(e) {
                    t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                }),
                t.join("&")
            },
            t.fn.submit = function(e) {
                if (e) this.bind("submit", e);
                else if (this.length) {
                    var n = t.Event("submit");
                    this.eq(0).trigger(n),
                    n.isDefaultPrevented() || this.get(0).submit()
                }
                return this
            }
        } (r),
        function(e) {
            "__proto__" in {} || e.extend(e.zepto, {
                Z: function(t, n) {
                    return t = t || [],
                    e.extend(t, e.fn),
                    t.selector = n || "",
                    t.__Z = !0,
                    t
                },
                isZ: function(t) {
                    return "array" === e.type(t) && "__Z" in t
                }
            });
            try {
                getComputedStyle(void 0)
            } catch(n) {
                var r = getComputedStyle;
                t.getComputedStyle = function(t) {
                    try {
                        return r(t)
                    } catch(e) {
                        return null
                    }
                }
            }
        } (r),
        function(t) {
            function e(t) {
                var e = this.os = {},
                n = this.browser = {},
                r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                i = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                o = !!t.match(/\(Macintosh\; Intel /),
                a = t.match(/(iPad).*OS\s([\d_]+)/),
                s = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !a && t.match(/(iPhone\sOS)\s([\d_]+)/),
                l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                u = t.match(/Windows Phone ([\d.]+)/),
                p = l && t.match(/TouchPad/),
                d = t.match(/Kindle\/([\d.]+)/),
                h = t.match(/Silk\/([\d._]+)/),
                f = t.match(/(BlackBerry).*Version\/([\d.]+)/),
                m = t.match(/(BB10).*Version\/([\d.]+)/),
                g = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                v = t.match(/PlayBook/),
                y = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
                b = t.match(/Firefox\/([\d.]+)/),
                w = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                x = !y && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                E = x || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/); (n.webkit = !!r) && (n.version = r[1]),
                i && (e.android = !0, e.version = i[2]),
                c && !s && (e.ios = e.iphone = !0, e.version = c[2].replace(/_/g, ".")),
                a && (e.ios = e.ipad = !0, e.version = a[2].replace(/_/g, ".")),
                s && (e.ios = e.ipod = !0, e.version = s[3] ? s[3].replace(/_/g, ".") : null),
                u && (e.wp = !0, e.version = u[1]),
                l && (e.webos = !0, e.version = l[2]),
                p && (e.touchpad = !0),
                f && (e.blackberry = !0, e.version = f[2]),
                m && (e.bb10 = !0, e.version = m[2]),
                g && (e.rimtabletos = !0, e.version = g[2]),
                v && (n.playbook = !0),
                d && (e.kindle = !0, e.version = d[1]),
                h && (n.silk = !0, n.version = h[1]),
                !h && e.android && t.match(/Kindle Fire/) && (n.silk = !0),
                y && (n.chrome = !0, n.version = y[1]),
                b && (n.firefox = !0, n.version = b[1]),
                w && (n.ie = !0, n.version = w[1]),
                E && (o || e.ios) && (n.safari = !0, o && (n.version = E[1])),
                x && (n.webview = !0),
                e.tablet = !!(a || v || i && !t.match(/Mobile/) || b && t.match(/Tablet/) || w && !t.match(/Phone/) && t.match(/Touch/)),
                e.phone = !(e.tablet || e.ipod || !(i || c || l || f || m || y && t.match(/Android/) || y && t.match(/CriOS\/([\d.]+)/) || b && t.match(/Mobile/) || w && t.match(/Touch/)))
            }
            e.call(t, navigator.userAgent),
            t.__detect = e
        } (r),
        function() {
            var n = [],
            r = t.Zepto;
            if (r && !n.__proto__) {
                var i = function(t) {
                    return n.push.apply(this, t),
                    this
                };
                r.zepto.Z = function(t, e) {
                    t = t || [];
                    var n = new i(t);
                    return n.selector = e || "",
                    n
                },
                r.zepto.Z.prototype = i.prototype = r.fn,
                r.fn.concat = function() {
                    var t = [];
                    return t.push.apply(t, this),
                    r.each(arguments,
                    function(e, n) {
                        "object" == typeof n && "number" == typeof n.length ? t.push.apply(t, n) : t.push(n)
                    }),
                    t
                },
                r.fn.empty = function() {
                    return this.each(function(t, e) {
                        for (; e.firstChild;) e.removeChild(e.firstChild)
                    })
                };
                var o = /^\s*<(\w+)[^>]*>/,
                a = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                s = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    area: [1, "<map>", "</map>"],
                    "*": [0, "", ""]
                };
                s.optgroup = s.option,
                s.tbody = s.tfoot = s.colgroup = s.caption = s.thead,
                s.th = s.td,
                r.zepto.fragment = function(t, r) {
                    void 0 === r && (r = o.test(t) && RegExp.$1),
                    t = t.toString().replace(a, "<$1></$2>");
                    var i = s[r] || s["*"],
                    c = i[0],
                    l = e.createElement("div");
                    for (l.innerHTML = i[1] + t + i[2]; c--;) l = l.lastChild;
                    return n.slice.call(l.childNodes)
                }
            }
        } (),
        function(t, e, n) {
            e.runOnce || n.isOldBrowsers || (t.$ && t.$.noConflict ? e.$ = t.$.noConflict(!0) : (e.$ = t.Zepto, e.$.support = e.$.support || {},
            t.$ && t.Zepto === t.$ && delete t.$, t.Zepto && delete t.Zepto))
        } (t, n, n.config);
        var i = function() {
            var t = function() {
                "use strict";
                function t(t) {
                    this.string = t
                }
                var e;
                return t.prototype.toString = function() {
                    return "" + this.string
                },
                e = t
            } (),
            e = function(t) {
                "use strict";
                function e(t) {
                    return s[t] || "&amp;"
                }
                function n(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }
                function r(t) {
                    return t instanceof a ? t.toString() : t || 0 === t ? (t = "" + t, l.test(t) ? t.replace(c, e) : t) : ""
                }
                function i(t) {
                    return t || 0 === t ? d(t) && 0 === t.length ? !0 : !1 : !0
                }
                var o = {},
                a = t,
                s = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                c = /[&<>"'`]/g,
                l = /[&<>"'`]/;
                o.extend = n;
                var u = Object.prototype.toString;
                o.toString = u;
                var p = function(t) {
                    return "function" == typeof t
                };
                p(/x/) && (p = function(t) {
                    return "function" == typeof t && "[object Function]" === u.call(t)
                });
                var p;
                o.isFunction = p;
                var d = Array.isArray ||
                function(t) {
                    return t && "object" == typeof t ? "[object Array]" === u.call(t) : !1
                };
                return o.isArray = d,
                o.escapeExpression = r,
                o.isEmpty = i,
                o
            } (t),
            n = function() {
                "use strict";
                function t() {
                    for (var t = Error.prototype.constructor.apply(this, arguments), e = 0; e < n.length; e++) this[n[e]] = t[n[e]]
                }
                var e, n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                return t.prototype = new Error,
                e = t
            } (),
            r = function(t, e) {
                "use strict";
                function n(t, e) {
                    this.helpers = t || {},
                    this.partials = e || {},
                    r(this)
                }
                function r(t) {
                    t.registerHelper("helperMissing",
                    function(t) {
                        if (2 === arguments.length) return void 0;
                        throw new Error("Missing helper: '" + t + "'")
                    }),
                    t.registerHelper("blockHelperMissing",
                    function(e, n) {
                        var r = n.inverse ||
                        function() {},
                        i = n.fn;
                        return d(e) && (e = e.call(this)),
                        e === !0 ? i(this) : e === !1 || null == e ? r(this) : p(e) ? e.length > 0 ? t.helpers.each(e, n) : r(this) : i(e)
                    }),
                    t.registerHelper("each",
                    function(t, e) {
                        var n, r = e.fn,
                        i = e.inverse,
                        o = 0,
                        a = "";
                        if (d(t) && (t = t.call(this)), e.data && (n = g(e.data)), t && "object" == typeof t) if (p(t)) for (var s = t.length; s > o; o++) n && (n.index = o, n.first = 0 === o, n.last = o === t.length - 1),
                        a += r(t[o], {
                            data: n
                        });
                        else for (var c in t) t.hasOwnProperty(c) && (n && (n.key = c, n.index = o, n.first = 0 === o), a += r(t[c], {
                            data: n
                        }), o++);
                        return 0 === o && (a = i(this)),
                        a
                    }),
                    t.registerHelper("if",
                    function(t, e) {
                        return d(t) && (t = t.call(this)),
                        !e.hash.includeZero && !t || a.isEmpty(t) ? e.inverse(this) : e.fn(this)
                    }),
                    t.registerHelper("unless",
                    function(e, n) {
                        return t.helpers["if"].call(this, e, {
                            fn: n.inverse,
                            inverse: n.fn,
                            hash: n.hash
                        })
                    }),
                    t.registerHelper("with",
                    function(t, e) {
                        return d(t) && (t = t.call(this)),
                        a.isEmpty(t) ? void 0 : e.fn(t)
                    }),
                    t.registerHelper("log",
                    function(e, n) {
                        var r = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
                        t.log(r, e)
                    })
                }
                function i(t, e) {
                    m.log(t, e)
                }
                var o = {},
                a = t,
                s = e,
                c = "1.2.1";
                o.VERSION = c;
                var l = 4;
                o.COMPILER_REVISION = l;
                var u = {
                    1 : "<= 1.0.rc.2",
                    2 : "== 1.0.0-rc.3",
                    3 : "== 1.0.0-rc.4",
                    4 : ">= 1.0.0"
                };
                o.REVISION_CHANGES = u;
                var p = a.isArray,
                d = a.isFunction,
                h = a.toString,
                f = "[object Object]";
                o.HandlebarsEnvironment = n,
                n.prototype = {
                    constructor: n,
                    logger: m,
                    log: i,
                    registerHelper: function(t, e, n) {
                        if (h.call(t) === f) {
                            if (n || e) throw new s("Arg not supported with multiple helpers");
                            a.extend(this.helpers, t)
                        } else n && (e.not = n),
                        this.helpers[t] = e
                    },
                    registerPartial: function(t, e) {
                        h.call(t) === f ? a.extend(this.partials, t) : this.partials[t] = e
                    }
                };
                var m = {
                    methodMap: {
                        0 : "debug",
                        1 : "info",
                        2 : "warn",
                        3 : "error"
                    },
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3,
                    level: 3,
                    log: function(t, e) {
                        if (m.level <= t) {
                            var n = m.methodMap[t];
                            "undefined" != typeof console && console[n] && console[n].call(console, e)
                        }
                    }
                };
                o.logger = m,
                o.log = i;
                var g = function(t) {
                    var e = {};
                    return a.extend(e, t),
                    e
                };
                return o.createFrame = g,
                o
            } (e, n),
            i = function(t, e, n) {
                "use strict";
                function r(t) {
                    var e = t && t[0] || 1,
                    n = d;
                    if (e !== n) {
                        if (n > e) {
                            var r = h[n],
                            i = h[e];
                            throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                        }
                        throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
                    }
                }
                function i(t, e) {
                    if (!e) throw new Error("No environment passed to template");
                    var n = function(t, n, r, i, o, a) {
                        var s = e.VM.invokePartial.apply(this, arguments);
                        if (null != s) return s;
                        if (e.compile) {
                            var c = {
                                helpers: i,
                                partials: o,
                                data: a
                            };
                            return o[n] = e.compile(t, {
                                data: void 0 !== a
                            },
                            e),
                            o[n](r, c)
                        }
                        throw new p("The partial " + n + " could not be compiled when running in runtime-only mode")
                    },
                    r = {
                        escapeExpression: u.escapeExpression,
                        invokePartial: n,
                        programs: [],
                        program: function(t, e, n) {
                            var r = this.programs[t];
                            return n ? r = a(t, e, n) : r || (r = this.programs[t] = a(t, e)),
                            r
                        },
                        merge: function(t, e) {
                            var n = t || e;
                            return t && e && t !== e && (n = {},
                            u.extend(n, e), u.extend(n, t)),
                            n
                        },
                        programWithDepth: e.VM.programWithDepth,
                        noop: e.VM.noop,
                        compilerInfo: null
                    };
                    return function(n, i) {
                        i = i || {};
                        var o, a, s = i.partial ? i: e;
                        i.partial || (o = i.helpers, a = i.partials);
                        var c = t.call(r, s, n, o, a, i.data);
                        return i.partial || e.VM.checkRevision(r.compilerInfo),
                        c
                    }
                }
                function o(t, e, n) {
                    var r = Array.prototype.slice.call(arguments, 3),
                    i = function(t, i) {
                        return i = i || {},
                        e.apply(this, [t, i.data || n].concat(r))
                    };
                    return i.program = t,
                    i.depth = r.length,
                    i
                }
                function a(t, e, n) {
                    var r = function(t, r) {
                        return r = r || {},
                        e(t, r.data || n)
                    };
                    return r.program = t,
                    r.depth = 0,
                    r
                }
                function s(t, e, n, r, i, o) {
                    var a = {
                        partial: !0,
                        helpers: r,
                        partials: i,
                        data: o
                    };
                    if (void 0 === t) throw new p("The partial " + e + " could not be found");
                    return t instanceof Function ? t(n, a) : void 0
                }
                function c() {
                    return ""
                }
                var l = {},
                u = t,
                p = e,
                d = n.COMPILER_REVISION,
                h = n.REVISION_CHANGES;
                return l.checkRevision = r,
                l.template = i,
                l.programWithDepth = o,
                l.program = a,
                l.invokePartial = s,
                l.noop = c,
                l
            } (e, n, r),
            o = function(t, e, n, r, i) {
                "use strict";
                var o, a = t,
                s = e,
                c = n,
                l = r,
                u = i,
                p = function() {
                    var t = new a.HandlebarsEnvironment;
                    return l.extend(t, a),
                    t.SafeString = s,
                    t.Exception = c,
                    t.Utils = l,
                    t.VM = u,
                    t.template = function(e) {
                        return u.template(e, t)
                    },
                    t
                },
                d = p();
                return d.create = p,
                o = d
            } (r, t, n, e, i);
            return o
        } ()
    } !
    function(t, e) {
        if (!t.runOnce && !e.isOldBrowsers) {
            var n = t.logger = t.logger || {
                times: [].concat(t.__timing),
                images: [],
                errors: []
            };
            delete t.__timing,
            n.time = function(t, e) {
                var n = e || +new Date;
                return this.times.push([n, t]),
                n
            },
            n.error = function(t, e, n) {
                var r = n || +new Date;
                this.errors.push([r, t, e])
            },
            n.imagesize = function(t, e, n) {
                this.images.push([t, e, n])
            },
            n.print = function(t, e, n) {
                console && console.log(n ? t + "		" + e: t + "		" + e)
            },
            n.getErrors = function() {
                return this.errors
            },
            n.getImageSizes = function() {
                return this.images
            },
            n.dump = function(t) {
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
                        this.print(a[0] + "x" + a[1] + "|" + e.screen.width, a[2])
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
    } (n, n.config),
    function(t, e, n, r) {
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
        if (!n.runOnce && !r.isOldBrowsers) {
            var o = n.util = n.util || {};
            o.extend = function(t) {
                return Array.prototype.forEach && [].slice.call(arguments, 1).forEach(function(e) {
                    for (var n in e) {
                    	void 0 !== e[n] && (t[n] = e[n])
                    }
                }),
                t
            },
            o.keys = function(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push(n);
                return e
            },
            o.values = function(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push(t[n]);
                return e
            },
            o.clone = function(t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            };
            var a = e.createElement("a");
            o.absolutify = function(t) {
                return a.href = t,
                a.href
            };
            var s = /^https?/;
            o.httpUrl = function(t) {
                return s.test(t)
            };
            var c, l = ["sukey", "from", "isappinstalled"];
            o.getDocUrlPath = function() {
                return c ? c: (c = t.location.pathname + (t.location.search ? t.location.search: ""), r.weixin && (c = i(c, l)), c)
            },
            o.gotoUrl = function(e) {
                t.location.href = e
            },
            o.outerHTML = function(t) {
                if (t.outerHTML) return t.outerHTML;
                var n = e.createElement("div");
                n.appendChild(t.cloneNode(!0));
                var r = n.innerHTML;
                return n = null,
                r
            },
            o.getDoctype = function(t) {
                t = t || e;
                var n = t.doctype || [].filter.call(t.childNodes,
                function(t) {
                    return t.nodeType == Node.DOCUMENT_TYPE_NODE
                })[0];
                return n ? "<!DOCTYPE HTML" + (n.publicId ? ' PUBLIC "' + n.publicId + '"': "") + (n.systemId ? ' "' + n.systemId + '"': "") + ">": ""
            },
            o.getDocProtocol = function(t) {
                return "https:" == t.location.protocol ? "https": "http"
            },
            o.removeBySelector = function(t, n) {
                n = n || e;
                var r = n.querySelectorAll(t);
                return o.removeElements(r, n)
            },
            o.removeElements = function(t, n) {
                n = n || e;
                for (var r = 0,
                i = t.length; i > r; r++) {
                    var o = t[r];
                    o.parentNode.removeChild(o)
                }
                return t
            },
            o.createElement = function(t, n, r) {
                r = r || e;
                var i = r.createElement(t);
                for (var o in n) n.hasOwnProperty(o) && i.setAttribute(o, n[o]);
                return i
            },
            o.insertAfter = function(t, e) {
                t.parentNode.insertBefore(e, t.nextSibling)
            },
            o.imgUrl = function(t) {
                return t
            },
            o.domIsReady = function(t) {
            	logs("-----domIsReady");
                var t = t || e;
                return t.attachEvent ? "complete" === t.readyState: "loading" !== t.readyState
            },
            o.waitForReady = function(t, e) {
            	logs("waitForReady:"+e);
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
            o.isIEBrowser = function() {
                return "Microsoft Internet Explorer" == t.navigator.appName
            },
            o.isMobileDevice = function() {
                return "phone" == r.realDevice
            },
            o.switchView = function(n) {
                if (e.cookie = "allmobilize=" + n + "; path=/;", this.isIEBrowser()) {
                    var r = "javascript:window.location='" + t.location.href + "'";
                    t.location.href = r
                } else t.location.reload()
            },
            o.goDesktop = function() {
                this.switchView("desktop")
            },
            o.injectJSCode = function(t, e, r, i) {
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
                var a = t.getElementById(n.id);
                if (a) this.insertAfter(a, o);
                else if (t.body) t.body.appendChild(o);
                else {
                    var s = t.getElementsByTagName("head")[0];
                    s && s.appendChild(o)
                }
            },
            o.base64Encode = function(t) {
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
            o.compressAndEncode = function(t) {
                return u.compressToBase64(t)
            }
        }
    } (t, e, n, n.config),
    function(t, e, n) {
        var r = t.event = t.event || {};
        r.onPlatformReady = "onPlatformReady",
        r.onOriginalDocReady = "onOriginalDocReady",
        r.onOriginalWinLoad = "onOriginalWinLoad",
        r.onBeforeMobilize = "onBeforeMobilize",
        r.onPageTmplLoad = "onPageTmplLoad",
        r.onPreprocessDoc = "onPreprocessDoc",
        r.onBeforeRender = "onBeforeRender",
        r.onMobilizedDocReady = "onMobilizedDocReady",
        r.onMobilizedWinLoad = "onMobilizedWinLoad",
        r.fire = function(r, i) {
        	logs("events.fire:"+r);
            n.time(r);
            for (var o = {cancel: false,lastModule: ""},a = 0, s = t.m.length; s > a && !o.cancel; a++) {
                var c = t.m[a];
               logs("module:"+c.name);
                if (c[r] && e.options.modules[c.name]) {
                    {
                    	logs("module 执行:"+c.name);
                        c[r](o, i)
                    }
                    o.lastModule = c.name,
                    e.debug && n.time(r + " done @ " + c.name)
                }
            }
            return o
        },
        r.registerModule = function(r) {
            for (var i = 0,o = t.m.length; o > i; i++) 
            	if (t.m[i].name == r.name) return;
            t.m.push(r),
            e.debug && n.time("Load module: " + r.name);
            logs("registerModule:::"+r.name);
        }
    } (n, n.config, n.logger),
    function(t, e, n, r, i, o) {
        if (!n.runOnce && !r.isOldBrowsers) {
            var a = {
                name: "capture"
            };
            i.registerModule(a);
            var s, c, l = function(t, e) {
            	logs("s, c, l:");
                var r = i.fire(t, e);
                return r.cancel || (n.state = 150, e.renderCapturedDoc()),r
            },
            u = function() {
                return r.srcRoot + r.device + "." + r.options.files.page
            },
            p = function(t, r) {
            	logs("r:"+r);
                var i = e.createElement("script");
                i.type = "text/javascript",
                r && (i.readyState ? i.onreadystatechange = function() { ("loaded" == i.readyState || "complete" == i.readyState) && (i.onreadystatechange = null, r())
                }: i.onload = function() {
                    r()
                }),
                i.src = t,
                n.srcElement.parentNode.insertBefore(i, n.srcElement)
            },
            d = function() {
            	logs("stop:");
                s || (void 0 !== t.stop ? t.stop() : void 0 !== e.execCommand && e.execCommand("Stop", !1), s = !0)
            };
            a.onOriginalDocReady = function(t) {
            	logs("onOriginalDocReady");
                r.render && (n.p.loading || r.weixin || d(), n.state = Math.max(n.state, 101), t.cancel = !0)
            },
            a.onPlatformReady = function(t) {
            	logs("onPlatformReady:"+r.render);
                if (r.render) {
                	logs("r.options.splitmode:"+r.options.splitmode);
                    if (r.options.splitmode) {
                        n.p.loading = !0;
                        logs("loading:"+n.p.loading);
                        var e = u();
                        p(e,
                        function() {
                            n.p.loading = !1,
                            d(),
                            110 === n.state && l(i.onPageTmplLoad, c)
                        })
                    }
                    n.doc.init(function(t) {
                    	logs("doc.init:");
                        n.state = 102,
                        c = t;
                        //以下功能会生成新界面
                        var e = l(i.onBeforeMobilize, t);
                        //logs("e.redirect:"+e.redirect);
                        //e.redirect && (d(), o.gotoUrl(e.redirect))
                    }),t = !0//加载中
                }
            }
        }
    } (t, e, n, n.config, n.event, n.util, n.logger),
    function(t, e, n, r, i, o, a) {
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
                return "#comment" == e ? "<!--" + t.textContent + "-->": "plaintext" == e ? t.textContent: "script" == e && (/allmobilize|yunshipei/.test(t.src) || /allmobilize|yunshipei/i.test(t.textContent)) ? "": t.outerHTML || t.nodeValue || i.outerHTML(t)
            }).join("") : ""
        }
        if (!n.runOnce && !r.isOldBrowsers) {
            var u = /(<script[\s\S]*?>)/gi,
            p = {
                style: ' media="x-media"',
                script: ' type="text/x-script"'
            },
            d = new RegExp(i.values(p).join("|"), "g"),
            h = {
                img: ["src"],
                source: ["src"],
                iframe: ["src"],
                script: ["src", "type"],
                link: ["href"],
                style: ["media"]
            },
            f = new RegExp("<(" + i.keys(h).join("|") + ")([\\s\\S]*?)>", "gi"),
            m = {},
            g = {};
            for (var v in h) if (h.hasOwnProperty(v)) {
                var y = h[v];
                y.forEach(function(t) {
                    g[t] = !0
                }),
                m[v] = new RegExp("\\s+((?:" + y.join("|") + ")\\s*=\\s*(?:('|\")[\\s\\S]+?\\2))", "gi")
            }
            var b = e.createElement("div"),
            w = function(t, e) {
                this.sourceDoc = t,
                this.prefix = e || "x-"
            };
            w.init = function(t, n, r) {
            	console.log(r+":::init:::");
                var n = n || e,
                o = function(t, e, n) {
                    var r = new w(e, n),
                    o = r.createDocumentFragmentsStrings(r.sourceDoc);
                    i.extend(r, o);
                    logs("sourceDoc:::");
                    var a = r.createDocumentFragments();
                    i.extend(r, a),t(r)
                };
                i.domIsReady(n) ? o(t, n, r) : i.waitForReady(n,
                function() {
                    o(t, n, r)
                })
            },
            w.removeClosingTagsAtEndOfString = function(t) {
                var e = t.match(/((<\/[^>]+>)+)$/);
                return e ? t.substring(0, t.length - e[0].length) : t
            },
            w.removeTargetSelf = function(t) {
                return t.replace(/target=("_self"|\'_self\')/gi, "")
            },
            w.cloneAttributes = function(t, e) {
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
            w.disable = function(t, e) {
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
            w.enable = function(t, e) {
                var n = new RegExp("\\s" + e + "(" + i.keys(g).join("|") + ")", "gi");
                return t.replace(n, " $1").replace(d, "")
            },
            w.openTag = function(t) {
                if (!t) return "";
                t.length && (t = t[0]);
                var e = [];
                return [].forEach.call(t.attributes,
                function(t) {
                    e.push(" ", t.name, '="', c(t.value), '"')
                }),
                "<" + s(t) + e.join("") + ">"
            },
            w.prototype.createDocumentFragmentsStrings = function(t) {
                var e = t.getElementsByTagName("head")[0] || t.createElement("head"),
                n = t.getElementsByTagName("body")[0] || t.createElement("body"),
                r = t.getElementsByTagName("html")[0];
                i.removeBySelector(a.selector, t);
                var o = {
                    doctype: i.getDoctype(t),
                    htmlOpenTag: w.openTag(r),
                    headOpenTag: w.openTag(e),
                    bodyOpenTag: w.openTag(n),
                    headContent: l(e),
                    bodyContent: l(n)
                };
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
            w.prototype.restoreOriginalDoc = function() {
            	logs("restoreOriginalDoc");
                var t = this;
                i.waitForReady(e,
                function() {
                    t.render(t.all())
                })
            },
            w.prototype.setElementContentFromString = function(t, e) {
                for (b.innerHTML = e; b.firstChild; t.appendChild(b.firstChild));
            },
            w.prototype.createDocumentFragments = function() {
                var t = {},
                n = t.capturedDoc = e.implementation.createHTMLDocument(""),
                r = t.htmlEl = n.documentElement,
                i = t.headEl = r.firstChild,
                o = t.bodyEl = r.lastChild;
                w.cloneAttributes(this.htmlOpenTag, r),
                w.cloneAttributes(this.headOpenTag, i),
                w.cloneAttributes(this.bodyOpenTag, o),
                o.innerHTML = w.disable(this.bodyContent, this.prefix);
                var a = w.disable(this.headContent, this.prefix);
                try {
                    i.innerHTML = a
                } catch(s) {
                    var c = i.getElementsByTagName("title")[0];
                    c && i.removeChild(c),
                    this.setElementContentFromString(i, a)
                }
                logs("RRR:::"+r);
                return r.appendChild(i),
                r.appendChild(o),
                t
            },
            w.prototype.escapedHTMLString = function() {
                var t = this.capturedDoc,
                e = w.enable(i.outerHTML(t.documentElement), this.prefix),
                n = this.doctype + e;
                return n
            },
            w.prototype.render = function(t) {
            	logs("===render:"+this.prefix);
                var e;
                e = t ? w.enable(t, this.prefix) : this.escapedHTMLString();
                var doc = this.sourceDoc;
                console.log(n.attr+"this.sourceDoc:"+doc);
                htmls='<!doctype html><html><head></head><iframe id="widget" src='+r.options.files["targetOrigin"]+'/html.jsp?url='+window.location.href+' style="display:none;"></iframe></html>';
                messageHandler=function (e) {
                	logs("--------------------e.data");
                	if(e&&e.data){
                		var data=e.data;
                		var reg ="/id=\""+n.id+"\"/i";
                		data=data.replace(eval(reg), 'id ="'+n.id+'" '+n.attr+'="1" ');
                		if(data==1){
                			return;
                		}
	                	logs("--------------------e.data:"+data);
	    				try{
	    					setTimeout(function() {
	    						doc.open("text/html", "replace"),
	    						doc.write(data);
	    						doc.close();
	                        })
	    				}catch(e){}
                	}
    			},
    			$w_init=function(){
    				logs("--------------------htmls:"+htmls);
    				setTimeout(function() {
    					doc.open("text/html", "replace"),
    					doc.write(htmls);
    					doc.close();
                        window.addEventListener("message", messageHandler, true);
                    })
    			}
    			$w_init();
            },
            w.prototype.getCapturedDoc = function() {
                return this.capturedDoc
            },
            w.prototype.insertPlatformScripts = function(t) {
            	logs("-------------insertPlatformScripts-----------------");
                var e = {
                    charset: "utf-8",
                    id: n.id,
                    src: r.srcUrl
                };
                e[n.attr] = 1,
                r.pageId && (e[n.page] = r.pageId);
                var o = i.createElement("script", e);
                if ("object" == typeof t) {
                    var a = t.head || t.getElementsByTagName("head")[0];
                    a.insertBefore(o, a.firstChild)
                } else if ("string" == typeof t) {
                    var s = i.outerHTML(o);
                    t = t.replace(/<\s*head[^>]*>/im, "$&" + s)
                }
                return t
            },
            w.prototype.renderCapturedDoc = function() {
            	logs("renderCapturedDoc");
                this.insertPlatformScripts(this.getCapturedDoc()),
                this.render()
            },
            n.doc = n.doc || w
        }
    } (t, e, n, n.config, n.util, n.logger, n.loader),
    function(t, e, n, r, i, o, a, s, c) {
    	logs("s.sub:::::::::::::"+s.sub);
        if (!n.runOnce && !i.isOldBrowsers) {
            var l = {
                name: "mobilizer"
            };
            r.registerModule(l);
            var u = function(t) {
                var e = "";
                if (t.length) {
                    var n = t.length ? t[0] : t;
                    e = n.outerHTML ? n.outerHTML: s("<div>").append(s(n).clone()).html(),
                    "string" == typeof e && (e = s.trim(e))
                }
                return e
            },
            p = function(t) {
                var e = function(t, e, r) {
                    return (s.fn.init || s.zepto.init).call(this, t, e || n.context(), r)
                },
                n = s.sub(e);
                return n.context = function() {
                    return t || "<div>"
                },
                n.zepto || (n.fn.init = e, n.fn.init.prototype = s.fn),
                n
            };
            s.sub = s.sub ||
            function(t) {
                return s.extend(t, s),
                t.zepto = s.extend({},
                s.zepto),
                t
            },
            s.fn.anchor = function() {
                return p(this)
            },
            s.fn.src = function() {
                return s(this).attr("x-src") || s(this).attr("src")
            },
            s.fn.href = function() {
                var t = s(this).attr("href");
                if (i.options.domains) {
                    var e = new RegExp(i.options.domains),
                    n = e.exec(t);
                    if (n && n.length > 0) {
                        var r = n[0],
                        o = t.indexOf(r);
                        o >= 0 && 8 >= o && (t = t.substring(t.indexOf("/", o + 1)))
                    }
                }
                return t
            },
            s.fn.outerHTML = function() {
                return u(s(this))
            };
            var d, h, f = function() {
                var t = n.p.md;
                for (var e in t) t.hasOwnProperty(e) && c.registerPartial(e, c.template(t[e]));
                c.registerHelper("ifCond",
                function(t, e, n, r) {
                    switch (e) {
                    case "==":
                        return t == n ? r.fn(this) : r.inverse(this);
                    case "===":
                        return t === n ? r.fn(this) : r.inverse(this);
                    case "<":
                        return n > t ? r.fn(this) : r.inverse(this);
                    case "<=":
                        return n >= t ? r.fn(this) : r.inverse(this);
                    case ">":
                        return t > n ? r.fn(this) : r.inverse(this);
                    case ">=":
                        return t >= n ? r.fn(this) : r.inverse(this);
                    default:
                        return r.inverse(this)
                    }
                    return r.inverse(this)
                }),
                c.registerHelper("parseLayout",
                function(t) {
                    var e = this.content.___AM_PRIVATE_CHILDREN[t],
                    n = [];
                    return s.each(e,
                    function(t, e) {
                        var r = "blank" === e.__type ? e.id: e.__type,
                        i = c.partials[r];
                        i ? n.push(i(e)) : a.error("module_missing", r)
                    }),
                    n.join("\n")
                })
            },
            m = function(t, e) {
                var r = t.content && t.content.template; ! r && t.content && t.content._templates && (r = t.content._templates[e]);
                var i = n.p.tpl[r];
                return i ? (i = c.template(i))(t) : ""
            },
            g = function(t, e) {
                return f(),
                m(t, e)
            },
            v = function(t, e) {
                return e && (e.jquery || t.zepto && t.zepto.isZ && t.zepto.isZ(e) || e.selector && e.length || e.innerHTML) ? u(e) : "object" == typeof e ? e: e && e.toString() || ""
            },
            y = function(t, e, n) {
                if ("function" == typeof t) {
                    var r = extractor(e, n);
                    return v(e, r)
                }
                var i = {};
                return s.each(t,
                function(t, r) {
                    if ("_" != t[0]) {
                        var o;
                        "function" == typeof r ? (o = r(e, n), o = v(e, o)) : o = "object" == typeof r ? y(r, e, n) : r,
                        i[t] = o
                    } else i[t] = r
                }),
                i
            },
            b = {
                select: function(t) {
                    var e = this,
                    n = {};
                    return s.each(t,
                    function(t, c) {
                        a.time("Pattern: " + t);
                        var l = !1;
                        if ("$" == t[0] && "$" == t[1] && e._patterns) {
                            var u = e._patterns[t.substring(2)];
                            l = u(e.$)
                        }
                        return l || i.pageId && c.template === i.pageId || new RegExp(t, "i").test(o.getDocUrlPath()) ? (c._options && s.extend(e._options, c._options), r.fire(r.onPreprocessDoc, {
                            options: e._options,
                            $: e.$
                        }), n = y(c, e.$, e), !1) : void 0
                    }),
                    n
                },
                _helpers: {},
                __clone: function() {
                    var t = ["select", "__clone", "_helpers", "_options"],
                    e = s.extend({},
                    this);
                    return s.each(t,
                    function(t, n) {
                        delete e[n]
                    }),
                    e
                }
            },
            w = function(t, e) {
                var n = s.extend(!0, {},
                e, b);
                return n.$ = p(t.documentElement),
                n.Handlebars = c,
                n.__root = i.srcRoot,
                n.__lang = i.lang,
                n.__ads = i.showAds,
                y(e, n.$, n)
            },
            x = {
                en: "<h2>Failed to mobilize</h2>",
                zh: "<h2>适配失败</h2>"
            },
            E = {
                en: "Error in JavaScript code",
                zh: "脚本执行错误"
            },
            _ = {
                en: "No template matched",
                zh: "没有找到匹配的网页模板"
            },
            obj2str=function (o){ 
            	var r = []; 
            	if(typeof o =="string") return "\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\""; 
            	if(typeof o == "object"){ 
            	if(!o.sort){ 
            	for(var i in o) 
            	r.push(i+":"+obj2str(o[i])); 
            	if(!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){ 
            	r.push("toString:"+o.toString.toString()); 
            	} 
            	r="{"+r.join()+"}" 
            	}else{ 
            	for(var i =0;i<o.length;i++) 
            	r.push(obj2str(o[i])) 
            	r="["+r.join()+"]" 
            	} 
            	return r; 
            	} 
            	return o.toString(); 
            	} 
            C = function(t, e, s, c) {
            	logs(" C = function(t, e, s, c):");
            	logs("TTT:::"+t);
            	logs("EEE:::"+e);
            	logs("SSS:::"+s);
            	logs("CCC:::"+c);
                var l = s ? g(s, c) : "";
                if (l) {
                	logs("LLL:::"+obj2str(t));
                    l = e.insertPlatformScripts(l);
                    //logs("LLL:::"+l);
                    var u = {docHtml: l};
                    n.state = 200,
                    r.fire(r.onBeforeRender, u),
                    e.render(u.docHtml),
                    t.cancel = !0,
                    a.time("mobilization succeeded")
                } else h ? (i.debug && (l = x[i.lang] + "<hr /><h3>" + E[i.lang] + "</h3><pre>" + h + "</pre>"), a.error("extraction_err", h)) : (i.debug && (l = x[i.lang] + "<hr /><h3>" + _[i.lang] + "</h3><p>" + o.getDocUrlPath() + "</p>"), a.error("template_missing", o.getDocUrlPath())),
                a.time("mobilization failed")
            };
            l.onBeforeMobilize = function(t, e) {
            	logs("onBeforeMobilize:");
                a.time("mobilizing");
                var r = i.device,
                o = e.getCapturedDoc();
                try {
                    d = w(o, n.p.data[r])
                } catch(s) {
                    d = null,
                    h = s.stack
                }
                if (d) {
                    if (d.content && d.content.redirect) return t.redirect = d.content.redirect,
                    void(t.cancel = !0);
                    d.__device = r,
                    d.__root = i.srcRoot,
                    d.__lang = i.lang,
                    d.__stylePath = d.__root + i.options.files.style,
                    d.__jsPath = d.__root + i.options.files.script
                }
                i.options.splitmode && n.p.loading ? (n.state = 110, t.cancel = !0) : C(t, e, d, r)
            },
            l.onPageTmplLoad = function(t, e) {
            	logs("onPageTmplLoad:");
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
    } (t, e, n, n.event, n.config, n.util, n.logger, n.$, i),
    function(t, e, n, r, i) {
        if (!n.runOnce && !i.isOldBrowsers) {
            var o = {
                name: "preprocess"
            };
            r.registerModule(o);
            var a = {
                openLinkInSameWindow: !1,
                removeStyle: !0,
                cleanImg: !1,
                cleanTable: !1,
                cleanFrame: !1,
                cleanEmbed: !1
            },
            s = "style",
            c = "width",
            l = "height",
            u = function(t, e) {
                t.openLinkInSameWindow && e("a").removeAttr("target"),
                t.removeStyle && (e("*").removeAttr(s), e(s).remove()),
                e.cleanImg && e('img, input[type="image"]').removeAttr(l).removeAttr(c).removeAttr("align"),
                t.cleanTable && (e("table").removeAttr(l).removeAttr(c), e("tr, th, td").removeAttr(l).removeAttr(c).removeAttr("bgcolor")),
                t.cleanFrame && e("iframe").removeAttr(c),
                t.cleanEmbed && e("embed").removeAttr(c)
            };
            o.onPreprocessDoc = function(t, e) {
                var n = e.$.extend(a, e.options);
                u(n, e.$)
            }
        }
    } (t, e, n, n.event, n.config),
    function(e, n, r, i, o, a, s) {
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
                    if ("IMG" === a.nodeName && !a.hasAttribute("STORAGE_ATTR")) for (var s = 0,
                    c = v.length; c > s; s++) {
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
            	logs("onMobilizedDocReady");
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
    } (t, e, n, n.event, n.config, n.util, n.logger),
    function(t, e, n, r, i, o) {
        var a = {
            name: "analytics"
        };
        r.registerModule(a);
        var s = "http://",
        c = s + "n.yunshipei.com/z/",
        l = s + "n.yunshipei.com/g/",
        u = s + "s.yunshipei.com/javascript/sm.min.js",
        p = function(t, e) {
            e && "&" != e.charAt(e.length - 1) && (e += "&"),
            e += "_t=" + (new Date).getTime();
            var n = new Image(1, 1);
            n.src = t + o.compressAndEncode(e)
        },
        d = function() {
            t.navigator.geolocation && !this.trackGeo && (this.trackGeo = 1, t.navigator.geolocation.getCurrentPosition(function(t) {
                var e = "lat=" + encodeURIComponent(t.coords.latitude) + "&long=" + encodeURIComponent(t.coords.longitude) + "&acc=" + encodeURIComponent(t.coords.accuracy);
                p(l, e),
                i.geoLoc = t
            },
            function(t) {
                var e = "err=" + encodeURIComponent(t.code) + "&msg=" + encodeURIComponent(t.message);
                p(l, e)
            },
            {
                enableHighAccuracy: !1,
                timeout: 1e4,
                maximumAge: 0
            }))
        },
        h = function(e) {
            if (!i.debug && i.options.vas.analytics && i.options.vas.analytics.status >= 20) {
                for (var n = [["aaId", i.options.vas.analytics.aaID], ["YSPId", i.siteId], ["mobilize", i.realDevice !== i.device ? "-": i.render], ["ua", i.ua], ["screen", i.screen.width + "x" + i.screen.height], ["dpr", t.devicePixelRatio || 1], ["device", i.realDevice]], r = "", a = 0, s = n.length; s > a; a++) r += n[a][0] + "=" + encodeURIComponent(n[a][1]) + "&";
                p(c, r),
                o.isMobileDevice() && i.options.vas.analytics.geo && d(),
                i.options.vas.analytics.sm && o.injectJSCode(e, u)
            }
            return 1
        };
        a.onOriginalDocReady = function(t, e) {
            this.entry || (this.entry = h(e.doc))
        },
        a.onMobilizedDocReady = function(t, e) {
        	logs("a.onMobilizedDocReady");
            this.entry || (this.entry = h(e.doc))
        }
    } (t, e, n, n.event, n.config, n.util),
    function(t, e, n, r, i, o, a) {
        var s = {
            name: "errorlog"
        };
        r.registerModule(s);
        var c = "http://",
        l = c + "n.yunshipei.com/err/",
        u = function(t, e) {
            var n = t + o.compressAndEncode(e),
            r = new Image(1, 1);
            r.src = n
        },
        p = function() {
            var e = a.getErrors();
            if (e && e.length && !i.debug) {
                for (var n = '{"errors":[',
                r = 0,
                o = e.length; o > r; r++) {
                    var s = e[r];
                    n += "[" + s[0] + ',"' + s[1] + '","' + s[2] + '"]',
                    r !== o - 1 && (n += ",")
                }
                n += '], "siteid":"' + i.siteId + '","host":"' + t.location.host + '"}',
                u(l, n)
            }
            return 1
        };
        s.onOriginalDocReady = function() {
            this.entry || (this.entry = p())
        },
        s.onMobilizedDocReady = function() {
            this.entry || (this.entry = p()),
            this.dump || (this.dump = a.dump())
        }
    } (t, e, n, n.event, n.config, n.util, n.logger),
    n.p.md.powered_by = function(t, e, n, r, i) {
        function o(t, e) {
            var r, i, o, c = "";
            return c += '\n  <div class="md-am-bar">\n    ',
            o = {
                hash: {},
                inverse: u.program(4, s, e),
                fn: u.program(2, a, e),
                data: e
            },
            r = n.ifCond || t && t.ifCond,
            i = r ? r.call(t, (r = t && t.powerBy, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o) : p.call(t, "ifCond", (r = t && t.powerBy, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o),
            (i || 0 === i) && (c += i),
            c += "\n  </div>\n"
        }
        function a() {
            return '\n      <div class="yunshipei-bar">\n        <a href="http://www.yunshipei.com" data-role="none" data-rel="external">Powered By <strong>AllMobilize</strong></a>\n      </div>\n    '
        }
        function s() {
            return '\n      <div class="yunshipei-bar">\n        <a href="http://www.yunshipei.com" data-role="none" data-rel="external">本手机网页使用<strong>云适配</strong>创建</a>\n      </div>\n    '
        }
        this.compilerInfo = [4, ">= 1.0.0"],
        n = this.merge(n, t.helpers),
        i = i || {};
        var c, l, u = this,
        p = n.helperMissing,
        d = "function",
        h = n.blockHelperMissing;
        return c = typeof e === d ? e.apply(e) : e,
        l = h.call(e, c, {
            hash: {},
            inverse: u.noop,
            fn: u.program(1, o, i),
            data: i
        }),
        l || 0 === l ? l: ""
    },
    n.p.md.switch_mode = function(t, e, n, r, i) {
        function o(t, e) {
            var r, i, o, u = "";
            return u += '\n  <div class="ysp-switcher md-switch',
            i = n["if"].call(t, (r = t && t.switchMode, null == r || r === !1 ? r: r.theme), {
                hash: {},
                inverse: O.noop,
                fn: O.program(2, a, e),
                data: e
            }),
            (i || 0 === i) && (u += i),
            u += '">\n    <span class="current md-sm-ysp"\n          data-target="#md-switch-modal',
            i = n["if"].call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.id), {
                hash: {},
                inverse: O.noop,
                fn: O.program(4, s, e),
                data: e
            }),
            (i || 0 === i) && (u += i),
            u += '"',
            i = n["if"].call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.modal), {
                hash: {},
                inverse: O.noop,
                fn: O.program(6, c, e),
                data: e
            }),
            (i || 0 === i) && (u += i),
            u += ">\n      ",
            i = n.unless.call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.switchName), {
                hash: {},
                inverse: O.program(13, d, e),
                fn: O.program(8, l, e),
                data: e
            }),
            (i || 0 === i) && (u += i),
            u += '\n    </span>\n    <span class="divider"> | </span>\n    <a id="godesktop" class="md-sm-desktop" href="#" data-role="none" onclick="AMPlatform.util.goDesktop();">\n      ',
            o = {
                hash: {},
                inverse: O.program(17, f, e),
                fn: O.program(15, h, e),
                data: e
            },
            r = n.ifCond || t && t.ifCond,
            i = r ? r.call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o) : A.call(t, "ifCond", (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o),
            (i || 0 === i) && (u += i),
            u += '\n    </a>\n  </div>\n  <div id="md-switch-modal',
            i = n["if"].call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.id), {
                hash: {},
                inverse: O.noop,
                fn: O.program(4, s, e),
                data: e
            }),
            (i || 0 === i) && (u += i),
            u += '"\n       class="modal md-switch-modal',
            i = n["if"].call(t, (r = t && t.switchMode, null == r || r === !1 ? r: r.theme), {
                hash: {},
                inverse: O.noop,
                fn: O.program(19, m, e),
                data: e
            }),
            (i || 0 === i) && (u += i),
            u += '">\n    <div class="md-sm-m-wrap">\n      <div class="md-sm-m-hd">\n        <a href="javascript:void(0)" data-dismiss="modal" class="md-sm-m-close">Close</a>\n      </div>\n      <div class="md-sm-m-bd">\n        ',
            o = {
                hash: {},
                inverse: O.program(34, _, e),
                fn: O.program(21, g, e),
                data: e
            },
            r = n.ifCond || t && t.ifCond,
            i = r ? r.call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.siteType), "==", "ec", o) : A.call(t, "ifCond", (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.siteType), "==", "ec", o),
            (i || 0 === i) && (u += i),
            u += "\n      </div>\n    </div>\n  </div>\n"
        }
        function a(t) {
            var e, n = "";
            return n += " md-sm-t-" + k((e = t && t.switchMode, e = null == e || e === !1 ? e: e.theme, typeof e === T ? e.apply(t) : e))
        }
        function s(t) {
            var e, n = "";
            return n += "-" + k((e = t && t.switchMode, e = null == e || e === !1 ? e: e.options, e = null == e || e === !1 ? e: e.id, typeof e === T ? e.apply(t) : e))
        }
        function c() {
            return '\n          data-toggle="modal"'
        }
        function l(t, e) {
            var r, i, o, a = "";
            return a += "\n        ",
            o = {
                hash: {},
                inverse: O.program(11, p, e),
                fn: O.program(9, u, e),
                data: e
            },
            r = n.ifCond || t && t.ifCond,
            i = r ? r.call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o) : A.call(t, "ifCond", (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o),
            (i || 0 === i) && (a += i),
            a += "\n        "
        }
        function u() {
            return "\n          Mobilized\n        "
        }
        function p() {
            return "\n          云适配版\n        "
        }
        function d(t) {
            var e, n = "";
            return n += "\n          " + k((e = t && t.switchMode, e = null == e || e === !1 ? e: e.content, e = null == e || e === !1 ? e: e.switchName, typeof e === T ? e.apply(t) : e)) + "\n      "
        }
        function h() {
            return "\n        Desktop\n      "
        }
        function f() {
            return "\n        电脑版\n      "
        }
        function m(t) {
            var e, n = "";
            return n += " md-sm-mt-" + k((e = t && t.switchMode, e = null == e || e === !1 ? e: e.theme, typeof e === T ? e.apply(t) : e))
        }
        function g(t, e) {
            var r, i, o, a = "";
            return a += "\n          ",
            o = {
                hash: {},
                inverse: O.program(24, y, e),
                fn: O.program(22, v, e),
                data: e
            },
            r = n.ifCond || t && t.ifCond,
            i = r ? r.call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o) : A.call(t, "ifCond", (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o),
            (i || 0 === i) && (a += i),
            i = n["if"].call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.owner), {
                hash: {},
                inverse: O.noop,
                fn: O.program(26, b, e),
                data: e
            }),
            (i || 0 === i) && (a += i),
            i = n["if"].call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.org), {
                hash: {},
                inverse: O.noop,
                fn: O.program(28, w, e),
                data: e
            }),
            (i || 0 === i) && (a += i),
            a += '<span\n            class="md-sm-slogan">',
            i = n["if"].call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.slogan), {
                hash: {},
                inverse: O.program(32, E, e),
                fn: O.program(30, x, e),
                data: e
            }),
            (i || 0 === i) && (a += i),
            a += "</span>\n        "
        }
        function v() {
            return "You are visiting "
        }
        function y() {
            return "\n            您正在浏览的是"
        }
        function b(t) {
            var e, n = "";
            return n += '<span\n            class="md-sm-owner">' + k((e = t && t.switchMode, e = null == e || e === !1 ? e: e.content, e = null == e || e === !1 ? e: e.owner, typeof e === T ? e.apply(t) : e)) + "</span>"
        }
        function w(t) {
            var e, n = "";
            return n += '<span\n            class="md-sm-org">' + k((e = t && t.switchMode, e = null == e || e === !1 ? e: e.content, e = null == e || e === !1 ? e: e.org, typeof e === T ? e.apply(t) : e)) + "</span>"
        }
        function x(t) {
            var e, n;
            return e = t && t.switchMode,
            e = null == e || e === !1 ? e: e.content,
            e = null == e || e === !1 ? e: e.slogan,
            n = typeof e === T ? e.apply(t) : e,
            n || 0 === n ? n: ""
        }
        function E() {
            return "为您当前手机定做的移动网站。轻动手指尖，移动随心购！"
        }
        function _(t, e) {
            var r, i, o, a = "";
            return a += "\n          ",
            o = {
                hash: {},
                inverse: O.program(24, y, e),
                fn: O.program(22, v, e),
                data: e
            },
            r = n.ifCond || t && t.ifCond,
            i = r ? r.call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o) : A.call(t, "ifCond", (r = t && t.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", o),
            (i || 0 === i) && (a += i),
            i = n["if"].call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.owner), {
                hash: {},
                inverse: O.noop,
                fn: O.program(26, b, e),
                data: e
            }),
            (i || 0 === i) && (a += i),
            i = n["if"].call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.org), {
                hash: {},
                inverse: O.noop,
                fn: O.program(28, w, e),
                data: e
            }),
            (i || 0 === i) && (a += i),
            a += '<span\n            class="md-sm-slogan">',
            i = n["if"].call(t, (r = t && t.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.slogan), {
                hash: {},
                inverse: O.program(35, C, e),
                fn: O.program(30, x, e),
                data: e
            }),
            (i || 0 === i) && (a += i),
            a += "</span>\n        "
        }
        function C() {
            return "为您当前手机定做的移动网站。"
        }
        this.compilerInfo = [4, ">= 1.0.0"],
        n = this.merge(n, t.helpers),
        i = i || {};
        var M, S, T = "function",
        k = this.escapeExpression,
        O = this,
        A = n.helperMissing,
        j = n.blockHelperMissing;
        return M = typeof e === T ? e.apply(e) : e,
        S = j.call(e, M, {
            hash: {},
            inverse: O.noop,
            fn: O.program(1, o, i),
            data: i
        }),
        S || 0 === S ? S: ""
    },
    n.p.tpl.index = function(t, e, n, r, i) {},
    n.p.tpl.general = function(t, e, n, r, i) {
        this.compilerInfo = [4, ">= 1.0.0"],
        n = this.merge(n, t.helpers),
        r = this.merge(r, t.partials),
        i = i || {};
        var o, a, s = "",
        c = "function",
        l = this.escapeExpression,
        u = this;
        return s += '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1">\n  <title>',
        (o = n.title) ? o = o.call(e, {
            hash: {},
            data: i
        }) : (o = e && e.title, o = typeof o === c ? o.call(e, {
            hash: {},
            data: i
        }) : o),
        s += l(o) + '</title>\n  <meta name="format-detection" content="telephone=no">\n  <link rel="stylesheet" href="',
        (o = n.__stylePath) ? o = o.call(e, {
            hash: {},
            data: i
        }) : (o = e && e.__stylePath, o = typeof o === c ? o.call(e, {
            hash: {},
            data: i
        }) : o),
        s += l(o) + '" />\n</head>\n<body class="cn">\n	<div data-role="page" class="page">\n        <div class="hd i-hd">\n            <h1><a href="http://www.csdn.net/">CSDN.NET</a></h1>\n            <a href="#nav" class="nav-link"><em></em><span>Menu</span></a>\n        </div>\n        <nav id="nav">\n            <ul>\n                <li><a href="http://m.csdn.net" target="_blank">资讯</a></li>\n                <li><a href="http://geek.csdn.net/" target="_blank">极客头条</a></li>\n                <li><a href="http://m.blog.csdn.net" target="_blank">博客</a></li>\n            </ul>\n        </nav>\n		<div data-role="content" data-theme="c" class="content">\n			',
        o = e && e.content,
        o = null == o || o === !1 ? o: o.html,
        a = typeof o === c ? o.apply(e) : o,
        (a || 0 === a) && (s += a),
        s += '\n		</div>\n        <div class="syp-bar ft">\n            ',
        a = u.invokePartial(r.switch_mode, "switch_mode", e, n, r, i),
        (a || 0 === a) && (s += a),
        s += '\n            <p class="ft-cr">&copy; 1999-2012, CSDN.NET, All Rights Reserved.</p>\n        </div>\n        ',
        a = u.invokePartial(r.powered_by, "powered_by", e, n, r, i),
        (a || 0 === a) && (s += a),
        s += '\n    </div>\n    <script src="http://s.yunshipei.com/javascript/jquery-1.9.1.min.js"></script>\n    <script src="http://counter.csdn.net/a/js/AreaCounter.js" type="text/javascript"></script>\n   <script type="text/javascript">$(document).ready(function() {logs("---------------ready1111111------------------");}); </script> \n <script type="text/javascript">\n    (function($) {\n        $(function () {\n            $(".nav-link").click(function () {\n                $("#nav").slideToggle();\n                return false;\n            });\n\n            var $nl = $(".news_list");\n\n            $nl.find("dt").each(function () {\n                var $t = $(this);\n                $t.append("<span class=\'arrow\'></span>");\n                $t.click(function () {\n                    $t.next("dd").slideToggle("fast");\n                    $t.find(".arrow").toggleClass("expanded");\n                });\n            });\n            $nl.find("dt").eq(0).next("dd").slideDown().\n                    end().find(".arrow").addClass("expanded");\n\n        });\n    })(jQuery);\n\n    //google计数器\n    var _gaq = _gaq || [];\n    _gaq.push([\'_setAccount\', \'UA-535605-6\']);\n    _gaq.push([\'_setDomainName\', \'csdn.net\']);\n    _gaq.push([\'_trackPageview\']);\n    (function() {\n        var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n        ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n        var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n    })();\n</script>\n</body>\n</html>\n'
    },
    n.p.data.phone = {
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
        mdData: function() {
            var t = {};
            return t.slidenav = [{
                link: "http://m.csdn.net",
                title: "资讯"
            },
            {
                link: "http://m.blog.csdn.net",
                title: "Blog"
            },
            {
                link: "http://geek.csdn.net/",
                title: "Geek头条"
            }],
            t
        },
        content: function(t, e) {
        	logs(":::content:::");
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
    !function(t, e, n) {
    	logs("e.runOnce:------"+e.runOnce);
        if (!e.runOnce && !n.isOldBrowsers) {
            e.state = 100;
            var r = e.event;
            r && r.fire(r.onPlatformReady)
        }
    } (t, n, n.config)
} (window, document);
