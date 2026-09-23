# Korey — AI Product Portfolio

**作品入口：** [四页产品案例集 PDF](https://korey2028-prog.github.io/portfolio/assets/product-casebook-wang-tianru.pdf) · [完整案例网页](https://korey2028-prog.github.io/portfolio/) · [Fitness OS 交互样板](https://korey2028-prog.github.io/portfolio/demo/fitness-os.html) · [专四备考交互样板](https://korey2028-prog.github.io/portfolio/demo/tem4-loop.html)

> 面向产品经理岗位：先看四页 PDF，再按兴趣打开案例网页和交互样板。

[在线作品集](https://korey2028-prog.github.io/portfolio/) · [GitHub Profile](https://github.com/korey2028-prog)

这里放了三个我实际做过的项目。每个案例都有界面或可查看的材料；完整工作台与公开样板的范围不同，详情写在对应页面。

- **专四备考工作台**：把练习、提交后反馈和错题复习放到同一条使用路径里。公开样板可体验两道脱敏题。
- **Fitness OS**：用 SwiftUI、HealthKit 和本地 JSON 记录训练、饮食与状态；保存前核对，之后按日期回看。
- **DM 排练与角色手册**：132 页手册供备场，34 页朗读本供上场查阅。另有使用合成剧本的控制台演示。

## Public boundary

本仓库只保存公开展示页与脱敏界面素材，不包含：

- TEM-4 真题、付费资料、音频、答案、作文或个人成绩；
- Apple Health、训练、饮食、设备、签名或个人健康数据；
- 商业剧本原文、角色真相、OCR、线索、音视频或完整演员手册；
- API Key、登录凭据、私有知识库或本地备份。

原始项目目前保持本地／私有。案例页会如实区分本地实现、测试通过、真机运行、公开发布与真实用户验证。

## Structure

```text
index.html               求职作品集首页
dark.html                深色 Liquid Glass 个人介绍页与交付能力索引
resume.html              面向招聘者的 AI 产品简历速读页
demo/tem4-loop.html      专四反馈闭环脱敏交互样板
demo/fitness-os.html     Fitness OS 合成数据决策交互样板
work/tem4.html           专四备考工作台案例
work/fitness-os.html     Fitness OS 案例
work/dm-rehearsal.html   DM 排练系统案例
assets/                  脱敏后的公开界面素材与精选预览图
```

投递时可优先发送 [AI 产品简历版](https://korey2028-prog.github.io/portfolio/resume.html)，并让招聘者亲手体验 [专四反馈闭环交互样板](https://korey2028-prog.github.io/portfolio/demo/tem4-loop.html)。需要详细了解时再进入 3 个完整案例页。DM 手册公开页展示交付结构与验收证据，不公开商业剧本和完整手册。

深色个人页补充了问题重构、Agent 工作流、证据验收和当前个人主页／活动页验证方向；“公开验证阶段”不代表已有付费客户或已验证获客渠道。

网站使用原生 HTML、CSS 与 JavaScript 构建，由 GitHub Pages 托管。
