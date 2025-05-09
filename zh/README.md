# Obsidian 速查表

### 目录

- [Obsidian 速查表](#obsidian-速查表) 
  - [基础操作](#基础操作)
  - [格式设置](#格式设置)
  - [列表与任务](#列表与任务)
  - [链接与引用](#链接与引用)
  - [插件推荐](#插件推荐)
  - [主题设置](#主题设置)

---

### 基础操作

| 功能              | 快捷键/语法            | 说明                         |
| ----------------- | ---------------------- | ---------------------------- |
| 创建新笔记        | `Ctrl/Cmd + N`         | 按下快捷键，输入笔记名称     |
| 打开笔记          | `Ctrl/Cmd + O`         | 快速切换器，输入笔记名称     |
| 保存笔记          | `Ctrl/Cmd + S`         | 手动保存当前笔记             |
| 切换编辑/预览     | `Ctrl/Cmd + E`         | 在编辑与预览模式间切换       |
| 搜索当前笔记      | `Ctrl/Cmd + F`         | 在当前笔记中查找内容         |
| 全局搜索          | `Ctrl/Cmd + Shift + F` | 搜索整个仓库的内容           |
| 打开命令面板      | `Ctrl/Cmd + P`         | 快速执行命令                 |
| 返回上一页        | `Ctrl/Cmd + Alt + ←`   | 返回到上一个浏览位置         |
| 折叠/展开当前标题 | `Ctrl/Cmd + 点击标题`  | 快速折叠或展开当前标题下内容 |
| 新建标签页        | `Ctrl/Cmd + T`         | 在新标签页中打开             |
| 关闭当前标签页    | `Ctrl/Cmd + W`         | 关闭当前打开的标签页         |

### 格式设置

| 格式        | 语法                      | 例子                                             |
| ----------- | ------------------------- | ------------------------------------------------ |
| 标题 1-6 级 | `# 文本` 到 `###### 文本` | `# 一级标题`，`## 二级标题`，`### 三级标题` ...  |
| 粗体        | `**文本**`                | **文本**                                         |
| 斜体        | `*文本*`                  | _文本_                                           |
| 删除线      | `~~文本~~`                | ~~文本~~                                         |
| 高亮        | `==文本==`                | ==文本==                                         |
| 代码        | `` `代码` ``              | `` `print("Hello")` `` 显示为 `print("Hello")`   |
| 代码块      | ` ```代码``` `            | ` ```print("Hello")``` ` 显示为 `print("Hello")` |
| 分割线      | `---` 或 `***`            | 水平分割线                                       |
| 引用        | `> 引用文本`              | `> 这是一个引用` 显示为引用块。                  |
| 表格        | `\| 表头1 \| 表头2 \|`    | 创建表头                                         |
|             | `\|---\|---\|`            | 表头分隔符(至少需要 3 个-)                       |
|             | `\| 内容1 \| 内容2 \|`    | 表格内容                                         |

表格对齐方式：

- 左对齐：`:---`
- 右对齐：`---:`
- 居中：`:---:`

示例：

```markdown
| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 内容   |   内容   |   内容 |
```

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 内容   |   内容   |   内容 |

**标题例子**

> # 一级标题
>
> ## 二级标题
>
> ### 三级标题

### 列表与任务

| 类型       | 语法                 | 示例       |
| ---------- | -------------------- | ---------- |
| 无序列表   | `- 项目` 或 `* 项目` | • 项目     |
| 有序列表   | `1. 项目`            | 1. 项目    |
| 任务列表   | `- [ ] 任务`         | ☐ 任务     |
| 已完成任务 | `- [x] 任务`         | ☑ 任务     |
| 嵌套列表   | 缩进 2 空格          | 创建子列表 |

### 链接与引用

| 类型         | 语法                     | 说明                                                                       |
| ------------ | ------------------------ | -------------------------------------------------------------------------- |
| 内部链接     | `[[笔记名称]]`           | `[[日记-2025]]` 会链接到名为 `日记-2025` 的笔记                            |
| 带别名链接   | `[[笔记名称\|显示文本]]` | `[[日记-2025\|我的日记]]` 显示为 [[日记-2025\|我的日记]]                   |
| 外部链接     | `[显示文本](URL)`        | `[Google](https://www.google.com)` 显示为 [Google](https://www.google.com) |
| 嵌入笔记     | `![[笔记名称]]`          | `![[日记-2025]]` 会在当前笔记中嵌入 `日记-2025` 的内容                     |
| 标签         | `#标签`                  | `#todo` 会创建一个标签，点击标签可以搜索所有带 `#todo` 的笔记              |
| 块引用       | `![[笔记名称^块ID]]`     | 在段落后添加 `^block-id`，然后通过 `[[笔记名称^block-id]]` 引用            |
| 页内标题链接 | `[[笔记名称#标题]]`      | `[[日记-2025#标题]]` 会链接到 `日记-2025` 笔记中的 `## 标题` 部分          |

### 插件推荐

| 插件名称    | 类型     | 主要功能       |
| ----------- | -------- | -------------- |
| Dataview    | 社区插件 | 数据查询与统计 |
| Calendar    | 社区插件 | 日历视图管理   |
| Kanban      | 社区插件 | 看板任务管理   |
| Mind Map    | 社区插件 | 思维导图显示   |
| Templates   | 核心插件 | 模板功能       |
| Daily notes | 核心插件 | 日记功能       |
| Graph view  | 核心插件 | 关系图谱       |

### 主题设置

1. 打开设置: `Ctrl/Cmd + ,`
2. 选择左侧菜单 `外观`
3. 在主题部分点击 `管理`
4. 在市场中搜索喜欢的主题
5. 点击 `安装` 并 `使用`

**常用主题推荐**

| 主题名称   | 特点     | 适用场景 |
| ---------- | -------- | -------- |
| Minimal    | 简洁清爽 | 日常笔记 |
| Blue Topaz | 功能丰富 | 知识管理 |
| Primary    | 现代设计 | 写作创作 |
| Things     | 优雅简约 | 学术研究 |
