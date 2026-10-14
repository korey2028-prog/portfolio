# Korey Portfolio Handoff

## 2026-10-14：全量产品经理身份与内容数据发布

用户明确要求所有对外身份统一为 `KOREY WANG TIANRU / 产品经理`，不再使用“AI 产品实习”等称谓；内容部分只保留 `2.17K+` 粉丝、`31 万+` 单条最高播放、`4.1 万+` 单条最高点赞，不展示平台名、账号名或账号截图。

作品集提交 `04b5df90b58cd25be1300a75bc4f96a91a1397f7` 已推送到 `portfolio/main`；GitHub Profile 提交 `bbb7693231fe` 已推送到 `korey2028-prog/main`。GitHub 账户显示名、简介、主页链接和两个仓库描述已同步为产品经理定位。Profile 的项目入口统一指向 `https://korey2028.tech/`。

自定义域名仍由独立服务器 `/data/apps/portfolio` 承载，不会随 GitHub Pages 自动更新。本轮将 10 个展示文件原子发布，旧文件备份在 `/data/releases/portfolio-product-manager-20261014-v1/before/`；公开的 `assets/douyin-profile.jpg` 已移入该备份目录。未修改 `/data/apps/fitness-web`、服务配置或用户数据。

线上回读：GitHub Pages 构建成功；`korey2028.tech` 首页、简历、dark、三个案例、专四 Demo 和案例集 PDF 均返回 200，自媒体截图返回 404。简历在 1440 px 与 390 px 下无横向溢出、控制台 0 错误，公开 GitHub 主页显示新姓名与产品经理简介且不再出现“AI 产品实习”。

Updated: 2026-09-04

## Current Public Site

- Local source: `/Users/korey/portfolio`
- GitHub repository: `https://github.com/korey2028-prog/portfolio`
- GitHub Pages: `https://korey2028-prog.github.io/portfolio/`

## Positioning

The homepage is positioned as a user-first AI product portfolio. The main signal is: Korey starts from real user friction, turns it into product structure, and uses AI collaboration to ship verifiable systems.

## Public Case Studies

- `index.html`: portfolio homepage with the three selected works.
- `resume.html`: recruiter-first AI product resume view with the three products and DM handbook delivery evidence.
- `work/tem4.html`: TEM-4 preparation workbench.
- `work/fitness-os.html`: Fitness OS.
- `work/dm-rehearsal.html`: DM rehearsal system.

## This update

- Added a recruiter-first resume page so a hiring reader can understand the three products before opening the longer case studies.
- Added an explicit DM handbook section: 212 pages, 358 bookmarks, and 212/212 page rendering acceptance, with the local-only and awaiting-live-rehearsal boundary preserved.
- Re-encoded `assets/dm-os.png` as a real PNG and added `assets/tem4-workbench-preview.png` so GitHub Pages serves the assets correctly and the homepage uses a readable TEM-4 crop.
- Expanded `dark.html` with a Liquid Glass capability layer covering problem framing, reusable AI workflows, evidence boundaries, current service validation, and role fit; connected the homepage and resume navigation.
- Local HTTP smoke test passed for the homepage, resume page, all three case pages, and the two updated image assets.

The current working tree contains these edits locally. Push or merge remains a separate publication step.

## Privacy Boundary

Public pages should not include private health records, phone or WeChat contact details, paid exam material, exam source text, commercial script source text, OCR dumps, full actor handbooks, API keys, tokens, or private account screenshots.

## Next Update

When Korey provides the Douyin 1000-follower account homepage or tab, add it as distribution and audience proof. Prefer a privacy-safe public-facing screenshot or text summary, then connect it to the closing section and the user-first / content-product narrative.
