/**
 * Add listener for theme mode toggle
 */

// 이 파일의 내용은 mode-toggle.html로 옮겨졌습니다.

/**
const $toggleElem = $('.mode-toggle');

export function modeWatcher() {
  if ($toggleElem.length === 0) {
    return;
  }

  $toggleElem.off().on('click', (e) => {
    const $target = $(e.target);
    let $btn =
      $target.prop('tagName') === 'button'.toUpperCase()
        ? $target
        : $target.parent();

    modeToggle.flipMode(); // modeToggle: `_includes/mode-toggle.html`
    $btn.trigger('blur'); // remove the clicking outline
  });
}

*/
