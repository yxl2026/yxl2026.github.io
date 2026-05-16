/* ============================
   金源宝创企业官网 - 交互脚本
   ============================ */

document.addEventListener('DOMContentLoaded', function () {

    // --- 导航栏滚动效果 ---
    var navbar = document.getElementById('navbar');
    var backToTop = document.getElementById('backToTop');

    function handleScroll() {
        var scrollY = window.scrollY || window.pageYOffset;

        // 导航栏背景
        if (scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 回到顶部按钮
        if (scrollY > 600) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // 高亮当前导航项
        updateActiveNav();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- 回到顶部 ---
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 移动端菜单切换 ---
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 点击导航链接后关闭菜单
    var navItems = navLinks.querySelectorAll('a');
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- 高亮当前导航项 ---
    function updateActiveNav() {
        var sections = document.querySelectorAll('section[id]');
        var scrollPos = window.scrollY + 120;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = navLinks.querySelector('a[href="#' + id + '"]');

            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }

    // --- 滚动渐入动画 ---
    function initFadeIn() {
        var elements = document.querySelectorAll(
            '.about-layout, .business-card, .product-card, .brand-card, ' +
            '.app-card, .contact-info, .cta-card, .feature-card, ' +
            '.solution-banner, .section-header'
        );

        elements.forEach(function (el) {
            el.classList.add('fade-in');
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach(function (el) {
            observer.observe(el);
        });
    }

    initFadeIn();

    // --- 平滑滚动（兼容处理）---
    var allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;

            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var offset = navbar.offsetHeight + 10;
                var targetPos = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 产品卡片交错动画 ---
    var productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function (card, index) {
        card.style.transitionDelay = (index * 0.08) + 's';
    });

    var businessCards = document.querySelectorAll('.business-card');
    businessCards.forEach(function (card, index) {
        card.style.transitionDelay = (index * 0.1) + 's';
    });

    var appCards = document.querySelectorAll('.app-card');
    appCards.forEach(function (card, index) {
        card.style.transitionDelay = (index * 0.08) + 's';
    });

    var brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(function (card, index) {
        card.style.transitionDelay = (index * 0.08) + 's';
    });

});
