/* Sphinx RTD Theme Navigation - leesbare versie */

require = function require(modules, cache, entry) {
    function localRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                var globalRequire = typeof require === "function" && require;
                if (!jumped && globalRequire) return globalRequire(name, true);
                if (previousRequire) return previousRequire(name, true);
                throw new Error("Cannot find module '" + name + "'");
            }
            var module = cache[name] = { exports: {} };
            modules[name][0].call(
                module.exports,
                function(x) { return localRequire(modules[name][1][x] || x); },
                module,
                module.exports,
                require,
                modules,
                cache,
                entry
            );
        }
        return cache[name].exports;
    }

    var previousRequire = typeof require === "function" && require;
    for (var i = 0; i < entry.length; i++) localRequire(entry[i]);
    return localRequire;
}({
    "sphinx-rtd-theme": [function(require, module, exports) {

        var jQuery = typeof window !== "undefined" ? window.jQuery : require("jquery");

        exports.ThemeNav = {
            navBar: null,
            win: null,
            winScroll: false,
            winResize: false,
            linkScroll: false,
            winPosition: 0,
            winHeight: null,
            docHeight: null,
            isRunning: false,

            enable: function(enableSticky) {
                var self = this;
                if (enableSticky === undefined) enableSticky = true;
                if (self.isRunning) return;
                self.isRunning = true;

                jQuery(function($) {
                    self.init($);
                    self.reset();
                    
                    self.win.on("hashchange", self.reset);

                    if (enableSticky) {
                        self.win.on("scroll", function() {
                            if (!self.linkScroll && !self.winScroll) {
                                self.winScroll = true;
                                requestAnimationFrame(function() { self.onScroll(); });
                            }
                        });

                        self.win.on("resize", function() {
                            if (!self.winResize) {
                                self.winResize = true;
                                requestAnimationFrame(function() { self.onResize(); });
                            }
                        });

                        self.onResize();
                    }
                });
            },

            enableSticky: function() {
                this.enable(true);
            },

            init: function($) {
                var self = this;

                self.navBar = $("div.wy-side-scroll:first");
                self.win = $(window);

                // Toggle sidebar shift
                $(document).on("click", "[data-toggle='wy-nav-top']", function() {
                    $("[data-toggle='wy-nav-shift']").toggleClass("shift");
                    $("[data-toggle='rst-versions']").toggleClass("shift");
                });

                // Click on current menu item
                $(document).on("click", ".wy-menu-vertical .current ul li a", function() {
                    var link = $(this);                    
                    $("[data-toggle='wy-nav-shift']").removeClass("shift");
                    $("[data-toggle='rst-versions']").toggleClass("shift");
                    self.toggleCurrent(link);
                    self.hashChange();
                });

                // Toggle versions dropdown
                $(document).on("click", "[data-toggle='rst-current-version']", function() {
                    $("[data-toggle='rst-versions']").toggleClass("shift-up");
                });

                // Wrap tables for responsive layout
                $("table.docutils:not(.field-list,.footnote,.citation)").wrap("<div class='wy-table-responsive'></div>");
                $("table.docutils.footnote").wrap("<div class='wy-table-responsive footnote'></div>");
                $("table.docutils.citation").wrap("<div class='wy-table-responsive citation'></div>");

                // Add expand toggle for all non-simple menu links
                $(".wy-menu-vertical ul").not(".simple").siblings("a").each(function() {

                    var link = $(this);                     
                    var expand = $('<span class="toctree-expand"></span>');
                    expand.on("click", function(event) {
                        self.toggleCurrent(link);
                        event.stopPropagation();
                        return false;
                    });
                    link.prepend(expand);
                });
            },

            reset: function() {
                var hash = encodeURI(window.location.hash) || "#";
                try {
                    var menu = $(".wy-menu-vertical");                    
                    var item = menu.find('[href="' + hash + '"]');                    
                    if (item.length === 0) {
                        // fallback: match section ID
                        var section = $('.document [id="' + hash.substring(1) + '"]').closest("div.section");
                        item = menu.find('[href="#' + section.attr("id") + '"]');
                        if (item.length === 0) item = menu.find('[href="#"]');
                    }

                    if (item.length > 0) {                        
                        $(".wy-menu-vertical .current").removeClass("current");
                        item.addClass("current");
                        item.closest("li.toctree-l1").addClass("current");
                        item.closest("li.toctree-l1").parent().addClass("current");
                        item.closest("li.toctree-l2").addClass("current");
                        item.closest("li.toctree-l3").addClass("current");
                        item.closest("li.toctree-l4").addClass("current");
                    }
                } catch (err) {
                    console.log("Error expanding nav for anchor", err);
                }
            },

            onScroll: function() {
                this.winScroll = false;
                var scrollTop = this.win.scrollTop();
                var scrollPos = scrollTop + this.winHeight;
                var navScroll = this.navBar.scrollTop() + (scrollTop - this.winPosition);
                if (scrollTop >= 0 && scrollPos <= this.docHeight) {
                    this.navBar.scrollTop(navScroll);
                    this.winPosition = scrollTop;
                }
            },

            onResize: function() {
                this.winResize = false;
                this.winHeight = this.win.height();
                this.docHeight = $(document).height();
            },

            hashChange: function() {
                this.linkScroll = true;
                this.win.one("hashchange", function() { this.linkScroll = false; });
            },

            toggleCurrent: function(link) {
                var li = link.closest("li");
                li.siblings("li.current").removeClass("current");
                li.siblings().find("li.current").removeClass("current");
                li.find("> ul li.current").removeClass("current");
                li.toggleClass("current");
            }
        };

        if (typeof window !== "undefined") {
            window.SphinxRtdTheme = {
                Navigation: exports.ThemeNav,
                StickyNav: exports.ThemeNav
            };
        }

        // requestAnimationFrame polyfill
        (function() {
            var lastTime = 0;
            var vendors = ["ms", "moz", "webkit", "o"];
            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
                window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] ||
                                              window[vendors[x] + "CancelRequestAnimationFrame"];
            }
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function(callback) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
            }
            if (!window.cancelAnimationFrame) {
                window.cancelAnimationFrame = function(id) { clearTimeout(id); };
            }
        })();

    }, { "jquery": "jquery" }]
}, {}, ["sphinx-rtd-theme"]);
