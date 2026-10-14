# 图提取 · ImageGrab

一个基于 Chrome Manifest V3 的电商图片提取下载插件，支持在详情页扫描图片，在画廊页选择并批量下载。

## 项目结构

- `imagegrab-extension/`：Chrome 插件源码
- `docs/`：官方静态宣传网站，可用于 GitHub Pages
- `docs/downloads/imagegrab-extension.zip`：可下载的插件压缩包

## 本地安装插件

1. 打开 Chrome 的 `chrome://extensions/`。
2. 开启“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择 `imagegrab-extension/`。
5. 在支持的商品详情页点击右下角“获取图片”。

## 发布官网

在 GitHub 仓库 Settings → Pages 中选择 `main` 分支的 `/docs` 目录，即可发布静态官网。

## 说明

插件优先通过 canvas 转换 PNG；若图片服务器禁止跨域读取，会启动原图兜底下载并在页面提示。
