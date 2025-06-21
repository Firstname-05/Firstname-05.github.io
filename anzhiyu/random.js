var posts=["2025/06/17/hello-world/","2025/06/20/翰鸽航空 (Hange Aviation)介绍/","2025/06/18/翰鸽植保无人机/","2025/06/20/翰鸽航空 (Hange Aviation)无人机救援编队演练/","2025/06/18/翰鸽航空/","2025/06/20/载重无人机/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };