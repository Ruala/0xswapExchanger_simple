$(()=>{
    //theme switcher
    (() => {
        const $btn = $('#theme-switcher');

        $btn.on('click', toggleTheme);

        function toggleTheme() {
            const $target = $(this);
            const $html = $('html');
            let theme = $target.attr('data-theme');

            switch (theme) {
                case 'day':
                    $html.addClass('uk-light uk-background-secondary');
                    $target.attr('data-theme', 'night');
                    break;
                case 'night':
                    $html.removeClass('uk-light uk-background-secondary');
                    $target.attr('data-theme', 'day');
                    break;
            }
        }
    })();

    //focus highlight
    (() => {
        const $parent = $('.exchange');

        $parent.on('focusin', setFocus);
        $parent.on('focusout', removeFocus);

        function setFocus(e) {
            const $item = $(e.target).closest('.exchange__item');

            if (!$item) return;

            $item.addClass('exchange__item_focused');
        }

        function removeFocus(e) {
            const $item = $(e.target).closest('.exchange__item');

            if (!$item) return;

            $item.removeClass('exchange__item_focused');
        }
    })();

    //loader
    (() => {
        const $containers = $('.icons-loader');
        const baseUrl = "images/loader/icon";
        const maxNum = 7;

        $containers.each(function() {
            const $container = $(this);
            const imageList = [];
            let current = 0;
            let next = 1;

            for (let i = 1; i <= maxNum; i++) {
                const $image = createImage(i);
                imageList.push($image);
                $container.append($image);
            }

            animateImages();

            function animateImages() {
                imageList[current].fadeOut(() => {
                    setTimeout(animateImages, 1000);
                });
                imageList[next].fadeIn();

                current = next;
                next++;

                if (next === maxNum) {
                    next = 0;
                }
            }

            function createImage(num) {
                return  $('<img src="' + baseUrl + num + '.svg"/>');
            }
        });
    })();

    //numberAnimate for test
    // (() => {
    //     const $target = $('.number-animate');
    //     $target.numberAnimate();
    //
    //     $('.exchange__input').keypress(function(e){
    //         e.preventDefault();
    //         $target.numberAnimate('set', $(this).val());
    //     });
    // })();
});
