function copyText1() {
    var textToCopy = "0x41aa7464c53b0b5a526e2d08aed874244b974be6"; // 替换为要复制的具体内容
  
    var dummyTextarea = document.createElement("textarea");
    dummyTextarea.value = textToCopy;
    document.body.appendChild(dummyTextarea);
    dummyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(dummyTextarea);
  
    var tooltip = document.getElementById("tooltip");
    tooltip.style.opacity = 1;
  
    setTimeout(function() {
      tooltip.style.opacity = 0;
    }, 2000); // 2秒后隐藏提示框
  }

function copyText2() {
    var textToCopy = "0x41aa7464c53b0b5a526e2d08aed874244b974be6"; // 替换为要复制的具体内容
  
    var dummyTextarea = document.createElement("textarea");
    dummyTextarea.value = textToCopy;
    document.body.appendChild(dummyTextarea);
    dummyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(dummyTextarea);
  
    var tooltip = document.getElementById("tooltip");
    tooltip.style.opacity = 1;
  
    setTimeout(function() {
      tooltip.style.opacity = 0;
    }, 2000); // 2秒后隐藏提示框
  }