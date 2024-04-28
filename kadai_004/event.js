$(function () {
  $(window).on({
    // 読み込み
    'load': function () {
      console.log('loadイベントが発生しました');
    },
    // スクロール
    'scroll': function () {
      console.log('scrollイベントが発生しました');
    }
  })
});