# SKY官网GEO改版说明

更新时间：2026-07-23

## 本次改版目标

把 `sky-aitec.com` 从海外英文展示站，调整为面向国内搜索引擎和大模型识别的中文公司主锚点站。

核心目标是让搜索引擎和大模型更稳定地理解：

- 公司主体：香港天空文化科技有限公司
- 英文主体：SKY CULTURE TECHNOLOGY LIMITED
- 常用别名：香港天空科技、天空文化科技、上海SKY、SKY AITEC
- 创始人：刘琦
- 创立时间：2025年
- 三大业务方向：人工智能+教育、人工智能+文娱、人工智能+政企降本增效
- 核心能力：SkyVido平台、AIGC教育智能体、AI文娱工业化创作、AI Agent、RAG知识库、数据治理、大模型私有化部署、AI长效陪跑培训

## 已修改文件

- `index.html`：改为中文主首页，加入公司定位、解决方案、业务能力、区域布局、创始人、FAQ和联系信息。
- `index-cn.html`：改为兼容入口，自动跳转至首页。
- `style.css`：重写为更适合企业信源站的视觉风格。
- `sitemap.xml`：更新站点地图和日期。
- `robots.txt`：保留全站允许抓取，并指向 sitemap。
- `aigc-education.html`：新增AI垂直产教融合详情页。
- `ai-content.html`：新增AI文娱工业化创作详情页。
- `enterprise-ai.html`：新增AI赋能政企降本增效详情页。
- `skyvido.html`：新增SkyVido平台详情页。

## SEO/GEO增强点

- 首页标题直接包含“香港天空文化科技有限公司”。
- meta description 明确包含 AIGC教育、AI文娱、政企AI降本增效。
- 页面正文多处自然出现公司名和核心业务词。
- 加入 Organization 结构化数据。
- 加入 FAQPage 结构化数据。
- 首页源码中包含 FAQ 问答，方便搜索引擎和大模型抽取。
- 根据新版PPT补充 SkyVido 平台、AI垂直产教融合、六大创作学习板块和面向华南及东盟区域协同数字内容服务体系。
- 视觉主色调调整为SKY蓝色系；首页弱化创始人个人介绍，仅保留公司创始人事实用于实体识别。
- 首页邮箱统一为 `bonnie@sky-aitec.com`。
- sitemap 指向 `https://www.sky-aitec.com/sitemap.xml`。

## 发布方式

如果 Vercel 已绑定 GitHub 仓库，执行：

```powershell
git add index.html index-cn.html style.css sitemap.xml robots.txt GEO_UPDATE_NOTES.md
git commit -m "Rebuild Chinese GEO homepage for SKY"
git push
```

Vercel 通常会在 push 后自动部署。

## 上线后要做

1. 打开 `https://www.sky-aitec.com/` 检查页面是否正常。
2. 打开 `https://www.sky-aitec.com/sitemap.xml` 检查 sitemap 是否能访问。
3. 在百度搜索资源平台提交首页和 sitemap。
4. 在 Bing Webmaster Tools 提交首页和 sitemap。
5. 如果已开通 Google Search Console，也提交 sitemap。
6. 公众号二维码确认后，把二维码图片放入 `images/`，再替换联系区文案。

## 后续建议新增页面

第一阶段先上线首页。第二阶段建议新增独立页面：

- `/aigc-education.html`
- `/ai-content.html`
- `/enterprise-ai.html`
- `/articles/company-introduction.html`
- `/articles/liuqicloud-founder.html`

这些页面会进一步增强“需求型问题”下的模型识别概率。
