# sujuiScroll
jQuery单页滚动插件

## html代码
```html
<div class="home" data-page="index">index</div>
<div class="menu">
  <div class="nav">
    <ul>
      <li><a href="index.html" data-nav="index">主页</a></li>
      <li><a href="about.html" data-nav="about">关于</a></li>
      <li><a href="news.html" data-nav="news">新闻</a></li>
      <li><a href="contact.html" data-nav="contact">联系</a></li>
    </ul>
  </div>
</div>
<div class="about" data-page="about">about</div>
<div class="news" data-page="news">news</div>
<div class="contact" data-page="contact">contact</div>
```

## javascript代码
```javascript
$('.nav').sujuiScroll({
  navHeight:50,
  speed:1000
});
```
