# AniPix

AniPix 是一个基于 Next.js 的动画插画浏览站点，用于展示来自 Bilibili 图片源的动画、漫画与插画内容。项目支持图片瀑布式浏览、搜索筛选、随机发现、详情页查看与图片下载，并配置了静态导出，适合部署到 GitHub Pages。

## 在线访问

项目配置的主页地址：

```txt
https://bili-anipix.github.io/
```

## 功能特性

- 首页画廊：分页展示最新图片内容
- 图片详情：查看原图信息、发布时间、作者 UID、描述与相关推荐
- 搜索页面：按标题、描述、作者 UID 搜索图片
- 标签筛选：支持通过图片标签进行过滤
- 随机发现：随机生成一组图片，便于快速浏览
- 图片下载：详情页提供下载按钮
- 响应式布局：适配桌面端与移动端
- 静态部署：通过 `next export` 输出静态文件并部署到 GitHub Pages

## 技术栈

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [lucide-react](https://lucide.dev/) 图标
- shadcn/ui 风格组件
- GitHub Actions + GitHub Pages

## 快速开始

### 环境要求

- Node.js 20 或更高版本
- npm、pnpm 或其他兼容的包管理器

### 安装依赖

```bash
npm install
```

### 配置环境变量

项目使用公开环境变量控制 Bilibili 图片质量参数。新建或更新 `.env`：

```env
NEXT_PUBLIC_LIST_BILI_IMG_QUALITY="@480w_60q.webp"
NEXT_PUBLIC_DETAIL_BILI_IMG_QUALITY="@550w_80q.webp"
```

### 本地开发

```bash
npm run dev
```

启动后访问：

```txt
http://localhost:3000
```

### 构建项目

```bash
npm run build
```

项目已在 `next.config.mjs` 中启用：

```js
output: "export"
```

因此构建结果会输出到 `out/`，可直接作为静态站点部署。

## 常用命令

```bash
npm run dev      # 启动本地开发服务器
npm run build    # 构建静态站点
npm run start    # 启动 Next.js 生产服务
npm run lint     # 运行 ESLint
```

## 项目结构

```txt
app/
  page.tsx              # 首页画廊
  search/page.tsx       # 搜索与筛选页面
  random/page.tsx       # 随机发现页面
  image/[title]/page.tsx # 图片详情页
  privacy/page.tsx      # 隐私政策
  terms/page.tsx        # 使用条款

components/
  header.tsx            # 顶部导航
  footer.tsx            # 页脚
  image-card.tsx        # 图片卡片
  image.tsx             # 自定义图片组件
  download-button.tsx   # 下载按钮
  ui/                   # 通用 UI 组件

lib/
  anime-data.ts         # 图片数据读取、搜索和筛选工具
  utils.ts              # 通用工具函数

raw/
  datas.json            # 图片数据源

public/
  favicon.png           # 网站图标
  placeholder.svg       # 占位图

.github/workflows/
  nextjs.yml            # GitHub Pages 自动部署流程
```

## 数据说明

图片数据位于 `raw/datas.json`，在 `lib/anime-data.ts` 中被转换为统一的 `AnimeImage` 数据结构：

```ts
interface AnimeImage {
  id: string;
  category: string;
  title: string;
  src: string;
  tags: string[];
  height: number;
  width: number;
  size: number;
  description: string;
  date_time: number;
  author_id: string;
}
```

当前数据量约为 40,000 条。图片资源通过 `src` 字段指向 Bilibili CDN，并在列表页、详情页分别拼接不同的图片质量参数。

## 部署

项目已配置 GitHub Actions 工作流：`.github/workflows/nextjs.yml`。

当代码推送到 `main` 分支时，工作流会自动：

1. 安装依赖
2. 执行 `next build`
3. 上传 `out/` 静态产物
4. 部署到 GitHub Pages

如果需要手动部署，可以在 GitHub 仓库的 **Actions** 页面运行 `Deploy Next.js site to Pages` 工作流。

## 版权与声明

本项目仅用于图片浏览与展示。图片版权归原作者或对应平台所有。若有侵权或需要移除内容，请通过仓库 Issue 联系维护者。

