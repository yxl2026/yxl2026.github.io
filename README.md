# 金源宝创（深圳）科技有限公司 - 企业官网

专业级芯片销售商 · 方案商

## 网站结构

```
jinyuanbao-website/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式表
├── js/
│   └── main.js         # 交互脚本
├── images/             # 图片资源目录（预留）
├── .nojekyll           # GitHub Pages 必需
└── README.md           # 本文件
```

## GitHub Pages 部署步骤

### 方式一：使用 `<username>.github.io` 域名

1. **注册/登录 GitHub**
   - 访问 https://github.com 注册账号

2. **创建仓库**
   - 点击右上角 "+" → "New repository"
   - 仓库名必须为：`<你的用户名>.github.io`
   - 例如用户名是 `jybcszkj`，则仓库名为 `jybcszkj.github.io`
   - 选择 Public（公开）
   - 点击 "Create repository"

3. **上传网站文件**
   - 进入仓库页面，点击 "uploading an existing file"
   - 将本目录下所有文件拖入上传（包括 `.nojekyll`）
   - 点击 "Commit changes"

4. **启用 GitHub Pages**
   - 进入仓库 → Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 `main`，文件夹选 `/ (root)`
   - 点击 Save
   - 等待 1-3 分钟，网站即可访问

5. **访问网站**
   - 浏览器打开 `https://<你的用户名>.github.io`

### 方式二：使用自定义仓库名

1. 创建任意名称的仓库，如 `jinyuanbao-website`
2. 上传所有文件
3. Settings → Pages → Source 选 `main` 分支
4. 访问地址为 `https://<你的用户名>.github.io/jinyuanbao-website`

### 方式三：使用 Git 命令行（推荐开发者）

```bash
# 1. 初始化仓库
cd jinyuanbao-website
git init
git add .
git commit -m "初始化金源宝创企业官网"

# 2. 关联远程仓库
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git branch -M main
git push -u origin main

# 3. 在 GitHub 仓库 Settings → Pages 中启用
```

## 绑定自定义域名（可选）

如果需要绑定 `www.jybcszkj.cn` 等自定义域名：

1. **GitHub 设置**
   - 仓库 Settings → Pages → Custom domain → 输入域名
   - 勾选 "Enforce HTTPS"

2. **DNS 设置**（在域名服务商处）
   - 添加 CNAME 记录：`www` → `<你的用户名>.github.io`
   - 或添加 A 记录指向 GitHub Pages IP：
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **创建 CNAME 文件**
   - 在仓库根目录创建 `CNAME` 文件，内容为你的域名

## 修改内容

- **公司信息**：编辑 `index.html` 中对应文字
- **样式调整**：编辑 `css/style.css`
- **交互逻辑**：编辑 `js/main.js`
- **添加图片**：将图片放入 `images/` 目录，在 HTML 中引用

## 技术栈

- 纯静态 HTML + CSS + JavaScript
- 无需任何后端服务
- 响应式设计，适配手机/平板/桌面
- Google Fonts（Noto Sans SC）

## 浏览器兼容

- Chrome 80+
- Firefox 80+
- Safari 14+
- Edge 80+
- 移动端浏览器

---

© 2025-2026 金源宝创（深圳）科技有限公司
