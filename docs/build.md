# 打包注意

## bug

bug:

```bug
from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
```

[参考](https://blog.csdn.net/qq_37193972/article/details/122535933)

## 用file打开的包

npm run build 后，手工处理 index.html,去掉无用js,参考build/index-参考.html

## Chrome本地跨域origin-null-is-not-allowed问题分析与解决方案

https://wdd.js.org/posts/2018/origin-null-is-not-allowed/