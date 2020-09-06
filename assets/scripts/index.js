
/* Credit to: https://codepen.io/shaikmaqsood/pen/XmydxJ */
function copyToClipboard(element) {
    
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    
    alert('Email address ' + '[ dllopis16@gmail.com ]' + ' has been copied to clipboard.');
    $temp.remove();
  }