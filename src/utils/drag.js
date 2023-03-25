function touchstartHandle(refName, e) {
  // 开始拖动，结束移动效果
  const dragDiv = this.$refs[refName];
  dragDiv.style.transition = "unset";
  // console.log(e);
  // 触摸开始
  const touchTarget = e.targetTouches[0];
  // 记录触摸点的坐标（初始位置）
  this.touch.initialPosition = {
    x: touchTarget.clientX,
    y: touchTarget.clientY,
  };
  // 记录需要移动的元素坐标（初始位置）
  this.element.initialPosition = {
    x: dragDiv.offsetLeft,
    y: dragDiv.offsetTop,
  };
}
function touchmoveHandle(refName, e) {
  e.preventDefault();
  const touchTarget = e.targetTouches[0];
  // console.log(touchTarget);
  // 根据初始touch位置计算移动距离:元素移动位置=元素初始位置+(光标移动后的位置-光标点击时的初始位置)
  let X =
    this.element.initialPosition.x +
    (touchTarget.clientX - this.touch.initialPosition.x);
  let Y =
    this.element.initialPosition.y +
    (touchTarget.clientY - this.touch.initialPosition.y);
  // 限制可移动距离，不超出可视区域
  const maxWidth = innerWidth - this.$refs[refName].offsetWidth;
  const maxHeight = innerHeight - this.$refs[refName].offsetHeight;

  X = X <= 0 ? 0 : X >= maxWidth ? maxWidth : X;
  Y = Y <= 0 ? 0 : Y >= maxHeight ? maxHeight : Y;
  //   console.log(X, Y);
  //   if(Y<35){ // 不超出头部导航栏
  //       Y=35
  //   }
  this.nowLeft = X;
  // 移动元素
  this.$refs[refName].style.left = `${X}px`;
  this.$refs[refName].style.top = `${Y}px`;
}
function end(refName) {
  //位置移动结束，添加吸边效果,移到右侧不生硬
  const dragDiv = this.$refs[refName];
  dragDiv.style.transition = "all .4s ease-in-out";
  // 吸边处理
  // const halfMaxWidth = (innerWidth - this.$refs[refName].offsetWidth) / 2;
  //   if (this.nowLeft > halfMaxWidth) {
  //   右吸边
  dragDiv.style.left = `${
    document.documentElement.clientWidth - parseInt(dragDiv.clientWidth) - 5
  }px`;
  //   } else {
  //     // 左吸边
  //     dragDiv.style.left = '0px';
  //   }
  dragDiv.style.top = `${dragDiv.offsetTop}px`;
}
export default {
  touchstartHandle,
  touchmoveHandle,
  end,
};
