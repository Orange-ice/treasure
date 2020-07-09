### 安装

在 Hugo releases 页面下载对应安装包  ---- Windows-64bit.zip

### 快速搭建

- 进入 Huge 官网  点击 Quick Start
- `hugo new site quickstart`
- `git init`
- `git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke`

- `echo 'theme = "ananke"' >> config.toml`

- `hugo new posts/my-first-post.md`              `.md`  前可更改名字

- 打开打开新创建的文件

  ```md
  ---
  title: "My First Post"
  date: 2019-03-26T08:47:11+01:00
  draft: true          
  ---
  
  在这里可以开始写博客了
  ```

  draft  表示是否为草稿的意思

- `hugo server -D`       然后就可以在  `http://localhost:1313/`  预览了~

- 在`config.toml`这个文件 可以修改 language 和 title 
- Build static pages:      `hugo`          Output:   `./public/`

