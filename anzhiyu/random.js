var posts=["2025/06/17/hello-world/","2025/06/18/翰鸽植保无人机/","2025/06/18/翰鸽航空/","2025/06/20/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };