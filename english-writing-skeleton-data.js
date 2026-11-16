// 英语作文 · 背诵卡 —— 随手复习本（第 8 本，v164 新增）。
// 数据来源：Desktop/英语作文/知识库/08-背诵总表.md（终版，覆盖 2010–2026 英一 17 题）。
// 词条格式 [正面提示, 背面内容, 章名 · 说明]：
//   正面 = 句位编号 + 用途（如「① 图画首段开篇句」），背面 = 整句 + 用法要点。
//   第三个字段落 example 位：目录页按章分组，卡片提示行同时显示它。
// ⚠️ 章名不许含「·」（casualChapterOf 按第一个「·」切章）。
// ⚠️ 背面用 ** 标关键处，不要用反引号（不走 markdown 渲染，会照原样显示）。
// 维护方式：改句子只动本文件；改完记得 APP_VERSION / index.html / sw.js 三处升版。
window.ENGLISH_SKELETON_ENTRIES = [
  // ── 首段图画（6）
  [
    "① 图画首段开篇句",
    "What is depicted in this drawing is such a scene:\n\n用法：冒号后**直接接画面**，不加 that。整句只有**一个 is**；in this drawing 当整块看，不许拆成两截。",
    "首段图画 · 句位 ①"
  ],
  [
    "② 图画首段群像句",
    "**What is depicted in this drawing is such a scene:** [场景] is crowded with [主体], [非谓语], who [动作], while [另一群] [动作], [非谓语]; in the front, [人物] says, \"[原话]\".\n\n用法：画里**两人以上**用；分号后接对话。一个 while 撑起对比，别再加 and also。",
    "首段图画 · 句位 ②"
  ],
  [
    "②b 单中心（一张画一个人）",
    "On/In [地点] sits/stands/lies a [人物], [非谓语], who [动作].\n\n用法：**地点状语提前 + 全倒装**，sits / stands / lies 按画面选。用在 2016 2018 2019 2021 2022。",
    "首段图画 · 句位 ②b"
  ],
  [
    "②c 双图（左右两幅）",
    "in the left one, [主体1] [动作], saying \"[话1]\", while in the right one, [主体2] [动作], murmuring \"[话2]\".\n\n用法：接在 ① 之后。左先右后，**顺序不许反**。用在 2012 2014 2017 2020。",
    "首段图画 · 句位 ②c"
  ],
  [
    "②d 多物件（火锅类，没人没对话）",
    "The [容器] is filled with a variety of [上位词], ranging from [A] and [B] to [C] and [D].\n\n用法：**ranging from ... to ...** 枚举四个：先 and 再 to。2010 文化火锅专用；这类图没人，硬套 ② 会写僵。",
    "首段图画 · 句位 ②d"
  ],
  [
    "②e 多方向（岔路类）",
    "Facing [处境], [主体] head in different directions: some [动作1], others [动作2], and still others [动作3].\n\n用法：some / others / **and still others** 三档，第三档的 and 不能丢。2013 毕业岔路专用。",
    "首段图画 · 句位 ②e"
  ],

  // ── 首段图表（5）
  [
    "⑪ 图表首段开篇句",
    "Emerging from the chart above are these statistics:\n\n用法：**全倒装**，是 are these statistics，不是 is。四个词一个都不能换位，后面直接接数据。",
    "首段图表 · 句位 ⑪"
  ],
  [
    "⑫ 单年份·并列比较",
    "[A] ranks first, at approximately [百分比], whereas [B], [C] and [D] account for [数] respectively.\n\n用法：**ranks first + whereas**；respectively 放句末，与前文一一对应。单年份饼图 / 柱状图用。",
    "首段图表 · 句位 ⑫"
  ],
  [
    "⑬ 多年份·趋势变化",
    "From [起始年] to [结束年], the number of [主题词1] rose from about [值] to [值], while the figure for [主题词2] climbed from [值] to [值].\n\n用法：**the number of 谓语单数**；第二个对象换 the figure for，避免重复 number。2025 表格用。",
    "首段图表 · 句位 ⑬"
  ],
  [
    "⑭ 左画右图（混合型）",
    "Portrayed on the left drawing is such a scene: [图画描述]. Meanwhile, the chart on the right clearly illustrates [表头], which rose steadily from [值] to [值].\n\n用法：左画右图 = 描述图画句 + **Meanwhile** + 图表句；which 前**必须有逗号**。2024 用。",
    "首段图表 · 句位 ⑭"
  ],
  [
    "⑭′ 纯双图表（两图无画）",
    "Portrayed in the left chart is [a pie chart] on [表头]: [A] accounts for [%], roughly the same as [B] at [%], while only [%] [动词] it. Meanwhile, the bar chart on the right illustrates [表头]: [C] ranks first at [%], followed by [D] at [%] and [E] at [%].\n\n用法：左图用 **accounts for**，右图用 **ranks first + followed by**；roughly the same as 用来省一个从句。2026 用。",
    "首段图表 · 句位 ⑭′"
  ],

  // ── 二段（6）
  [
    "④ 二段点题（喻体句）",
    "Simple as the picture is, it embodies a truth: [X] is to [Y] what [喻体] is to [处境].\n\n用法：**Simple as 是倒装**，等于 Though the picture is simple；主谓跟**后一个**喻体（what roots are to a tree / what a compass is to a ship）。",
    "二段 · 句位 ④"
  ],
  [
    "④′ 二段点题（图表版）",
    "The fundamental factors contributing to this tendency can be explained as follows.\n\n用法：图表题用它**替掉 ④**，后面直接接 ⑤。tendency 只有一个 n，易错。",
    "二段 · 句位 ④′"
  ],
  [
    "⑤ 二段第一层理由",
    "Primarily, [X] will equip us with [宾语].\n\n用法：**equip sb. with sth.** 后只能填名词短语，从宾语 4 个里挑。负面题换 S3。",
    "二段 · 句位 ⑤"
  ],
  [
    "⑥ 二段递进（the more...）",
    "Furthermore, the more [谁][做什么], the more [具体结果].\n\n用法：**the more ... the more ...** 两边都是完整分句，主语不能省；结果要落地，别写 the better。",
    "二段 · 句位 ⑥"
  ],
  [
    "★ 二段例证（凑词数用）",
    "Take a [图里的人] on [场景]: [做了什么], and [结果].\n\n用法：**Take a ...** 冒号后给因果；只有够不着 180 词才写。想不出具体人时改反面假设：Conversely, had [人] [没做的事], [结果] would have been far worse.",
    "二段 · 句位 ★"
  ],
  [
    "⑦ 二段反面假设（收尾）",
    "If we ignored the importance of [X], we would never become a better version of ourselves.\n\n用法：**虚拟语气**，是 ignored 不是 ignore；后半句 would never。负面题换 S4。",
    "二段 · 句位 ⑦"
  ],

  // ── 三段（4）
  [
    "⑧ 三段总结（not only...but also）",
    "Altogether, [X] is deemed not only a catalyst for the success of [sth] but also a bedrock of social progress.\n\n用法：**is deemed** 后接 not only ... but also ...；两处名词都要带 of。",
    "三段 · 句位 ⑧"
  ],
  [
    "⑨ 三段建议",
    "[主体] should [动作], so that [结果].\n\n用法：主体要具体（学校 / 家长 / 平台），动作要具体（open a course / set a limit）。**不许写 We should pay attention to**。",
    "三段 · 句位 ⑨"
  ],
  [
    "⑩ 三段收尾（图画版）",
    "[短期] fades, but [长期] endures.\n\n用法：前后都是**抽象名词**（instant gratification : true worth）。**图表题不用这句**，数据没有短暂长久可言。",
    "三段 · 句位 ⑩"
  ],
  [
    "⑩′ 三段收尾（图表版）",
    "This trend, against the backdrop of [背景], will probably become dominant in the foreseeable future.\n\n用法：**against the backdrop of** 是插入语，两边逗号。图表题替掉 ⑩。",
    "三段 · 句位 ⑩′"
  ],

  // ── 切换句（4）
  [
    "S1 负面题·换④",
    "Simple as the picture is, it highlights a core problem in society: [现象].\n\n用法：**highlights a core problem**；冒号后写现象短语，不写整句。",
    "切换句 · S1"
  ],
  [
    "S2 中性题·换④",
    "Simple as the picture is, it reminds us that [X] plays a crucial role in [Y].\n\n用法：**想不出喻体时用它**；plays a crucial role in 后面接名词。",
    "切换句 · S2"
  ],
  [
    "S3 负面题·换⑤",
    "Primarily, [X] deprives us of [被夺走的东西].\n\n用法：**deprive sb. of sth.**，of 不能丢。",
    "切换句 · S3"
  ],
  [
    "S4 负面题·换⑦",
    "If everyone failed to [do sth.], our society would be confronted with an unpromising and fruitless future.\n\n用法：**be confronted with**；failed to 后接动词原形。",
    "切换句 · S4"
  ],

  // ── 填空库（6）
  [
    "喻体 7 组（④ 用）",
    "roots : a tree —— 文化、传统、亲情、习惯（2010 2014 2020 2023）\nsunlight : a plant —— 教育、关爱、阅读、成长（2016 2022）\ncompass : a ship —— 自信、理想、独立判断（2012 2013 2021）\nfuel : a fire —— 行动、坚持、努力（2017 2019）\nwater : a fish —— 健康、运动、生态（2024）\na crack : a dam —— 负面：小毛病、疏忽\na disease : a body —— 负面：严重问题、污染\n\n主谓跟后一个喻体：what roots **are** to a tree / what a compass **is** to a ship。只记三组就记 roots / fuel / a crack。",
    "填空库 · 喻体"
  ],
  [
    "宾语 4 个（⑤ 用）",
    "abundant knowledge and long-term vision —— 学习、文化、见识（2010 2018 2022）\na sense of belonging and purpose —— 社群、归属、亲情（2014 2023）\nemotional strength to face setbacks —— 心态、品质（2012 2017 2019 2024）\na clear direction in life —— 独立、选择、习惯（2013 2016 2020 2021）\n\n直接填，不造句；负面题 ⑤ 换 S3，不用选宾语。",
    "填空库 · 宾语"
  ],
  [
    "主题词 6 个主力（X）",
    "cultural heritage —— 文化传承（2010 2021 2023）\nperseverance —— 坚持（2019）\ngood habits —— 习惯（2020）\nmutual support —— 亲情互助（2014）\nenvironmental protection —— 社会责任（2011）\na healthy lifestyle —— 健康（2024）\n\n这 6 个盖 12 题；其余从 8 族里挑最靠的（品格心态 / 学习与教育 / 选择与价值 / 健康与科技）。**不新造词**。",
    "填空库 · 主题词"
  ],
  [
    "趋势动词三档",
    "大：soar / surge / plunge / plummet + dramatically / remarkably / sharply\n稳：rise / climb / fall / decline + steadily / gradually / continuously\n微：edge up / dip slightly + slightly / marginally\n平：remain stable / level off\n峰：peak at / hit a record high of",
    "填空库 · 趋势动词"
  ],
  [
    "数字与占比四式",
    "占比：X accounts for 20% of Y. / The proportion of X is 20%. / 20% of students are ...\n数量：the number of + 可数复数，谓语**单数**；the amount of + 不可数\na number of = many，谓语**复数**\n约数：approximately / roughly / about / just over / nearly",
    "填空库 · 数字"
  ],
  [
    "表头翻译三步",
    "① 断句：中文表头切成「中心词 + 定语」\n② 倒序译：先译中心词，再把定语挂到后面\n③ 补介词：of / by / in / for 逐个补上\n\n例：每百户耐用消费品拥有量 → the number of durable consumer goods owned by every 100 households",
    "填空库 · 表头三步"
  ],

  // ── 套用表（17）
  [
    "2010 文化火锅",
    "入口 **②d**：The hot pot is filled with a variety of cultural symbols, ranging from ... to ...\nX：cultural integration\n喻体：roots : a tree\n⑤：abundant knowledge and long-term vision\n三段：⑧ ⑨ ⑩",
    "套用表 · 2010"
  ],
  [
    "2011 游客乱扔垃圾",
    "入口 **②**（群像）\nX：environmental protection\n正面 / 负面：**负面**，走 S1 + S3 + ⑥ + S4\n三段：⑧ ⑨ ⑩",
    "套用表 · 2011"
  ],
  [
    "2012 半瓶水两种反应",
    "入口 **②c**（双图）：in the left one ... while in the right one ...\nX：optimism\n喻体：compass : a ship\n⑤：emotional strength to face setbacks\n三段：⑧ ⑨ ⑩",
    "套用表 · 2012"
  ],
  [
    "2013 毕业岔路四个方向",
    "入口 **②e**：Facing the crossroads of graduation, they head in different directions: some ... others ... and still others ...\nX：independent judgment\n喻体：compass : a ship\n⑤：a clear direction in life\n三段：⑧ ⑨ ⑩",
    "套用表 · 2013"
  ],
  [
    "2014 相携（母女两代）",
    "入口 **②c**（双图）：左幅三十年前母亲牵女儿，右幅如今女儿扶母亲\nX：mutual support\n喻体：roots : a tree\n⑤：a sense of belonging and purpose\n三段：⑧ ⑨ ⑩",
    "套用表 · 2014"
  ],
  [
    "2015 餐桌前的低头族",
    "入口 **②**（群像）\nX：smartphone addiction\n正面 / 负面：**负面**，走 S1 + S3 + ⑥ + S4\n三段：⑧ ⑨ ⑩",
    "套用表 · 2015"
  ],
  [
    "2016 父亲做榜样",
    "入口 **②b**（单中心）：On the sofa lies a father ... who orders his son to study\nX：family education\n喻体：sunlight : a plant\n⑤：a clear direction in life\n三段：⑧ ⑨ ⑩",
    "套用表 · 2016"
  ],
  [
    "2017 有书与读书",
    "入口 **②c**（双图）：左边满架书却不读，右边桌前认真读\nX：the habit of reading\n喻体：fuel : a fire\n⑤：emotional strength to face setbacks\n三段：⑧ ⑨ ⑩",
    "套用表 · 2017"
  ],
  [
    "2018 选课只看给分高",
    "入口 **②b**（单中心 + 气泡）\nX：utilitarianism\n正面 / 负面：**负面**，走 S1 + S3 + ⑥ + S4\n三段：⑧ ⑨ ⑩",
    "套用表 · 2018"
  ],
  [
    "2019 爬山途中说累",
    "入口 **②b**（单中心 + 对话）\nX：perseverance\n喻体：fuel : a fire\n⑤：emotional strength to face setbacks\n三段：⑧ ⑨ ⑩",
    "套用表 · 2019"
  ],
  [
    "2020 两种习惯（学习／刷手机）",
    "入口 **②c**（双图）：左幅伏案学习，右幅躺床刷手机\nX：good habits\n喻体：roots : a tree\n⑤：a clear direction in life\n三段：⑧ ⑨ ⑩",
    "套用表 · 2020"
  ],
  [
    "2021 男孩唱戏被嘲笑",
    "入口 **②b**（单中心 + 对话）\nX：one's own taste\n喻体：compass : a ship\n⑤：a clear direction in life\n三段：⑧ ⑨ ⑩",
    "套用表 · 2021"
  ],
  [
    "2022 海报前争论讲座有没有用",
    "入口 **②b**（单中心双人）\nX：comprehensive learning\n喻体：sunlight : a plant\n⑤：abundant knowledge and long-term vision\n三段：⑧ ⑨ ⑩",
    "套用表 · 2022"
  ],
  [
    "2023 龙舟竞渡",
    "入口 **②**（群像 + 对话）\nX：cultural heritage\n喻体：roots : a tree\n⑤：a sense of belonging and purpose\n三段：⑧ ⑨ ⑩",
    "套用表 · 2023"
  ],
  [
    "2024 健身 + 公园数量",
    "入口 **⑭**（左画右图）：Portrayed on the left drawing is ... Meanwhile, the chart on the right ...\nX：a healthy lifestyle\n喻体：water : a fish\n⑤：emotional strength to face setbacks\n三段：⑧ ⑨ **⑩′**",
    "套用表 · 2024"
  ],
  [
    "2025 耐用消费品拥有量表格",
    "入口 **⑬**（多年份）：From 2014 to 2023, the number of ... rose from ... to ..., while the figure for ... climbed from ... to ...\nX：durable consumer goods\n喻体：**走 ④′ + S2**（数据题不硬凑喻体）\n三段：⑧ ⑨ **⑩′**",
    "套用表 · 2025"
  ],
  [
    "2026 养老机器人（饼图 + 柱状图）",
    "入口 **⑭′**（纯双图表）：Portrayed in the left chart is a pie chart on ... Meanwhile, the bar chart on the right ...\nX：elderly-care technology\n喻体：**走 ④′ + S2**\n三段：⑧ ⑨ **⑩′**",
    "套用表 · 2026"
  ],

  // ── 考场（5）
  [
    "考场 32 分钟时间表",
    "0–3 审题：定入口（① / ②b / ②c / ②d / ②e / ⑬ / ⑭ / ⑭′）、定 X、定正负\n3–5 图面要素**逐条数列**（图里的字、数字、人数）\n5–13 一段（① + ② 系列）\n13–25 二段（④ 或 S1/S2 + ⑤/S3 + ⑥ + ★ + ⑦/S4）\n25–30 三段（⑧ ⑨ ⑩ 或 ⑩′）\n30–32 按检查 8 条自查",
    "考场 · 时间表"
  ],
  [
    "词数配方（目标 181–190）",
    "一段 55–65（① + ② 或 ⑪ + ⑫/⑬/⑭/⑭′）\n二段 85（④ ⑤ ⑥ ★ ⑦，图表用 ④′）\n三段 45（⑧ ⑨ ⑩，图表用 ⑩′）\n\n图表题无 ★ 时约 170 词：把 ⑬ 写厚（两个对象各给起止值）或补 ★。一段 71 词、二段 70 词那两次掉分，都是「句数对但每句太薄」。",
    "考场 · 词数"
  ],
  [
    "写完检查 8 条",
    "1 首句只有一个 is，in this drawing 是整块\n2 Emerging from ... 后面是 are these statistics，不是 is\n3 图里的字一条一条数，全在吗\n4 数量词跟图一致（several / crowds of，不是 a row of）\n5 -ed 修饰人、-ing 修饰事物（exciting，不是 excited）\n6 三段建议有具体主体和具体动作\n7 全文没跑出题目场景（选课题出现 workplace 就是跑题）\n8 词数 180–200，超了先砍 ⑥ 后半句\n\n四条硬伤必扫：主谓一致 / 时态 / 单复数 / which 前逗号",
    "考场 · 检查"
  ],
  [
    "默写 7 轮（按这个次序）",
    "1 ⑧ ⑨ ⑩ ⑩′（最短，先建立「能写完一篇」的感觉）\n2 ④ ④′ ⑤ ⑥ ★ ⑦\n3 ① ② ★（三张不同的图各填一次）\n4 ⑪ ⑫ ⑬ ⑭ ⑭′（2024 2025 2026 三张真题各填一次）\n5 S1–S4（用一道负面题写一遍二段）\n6 ②b ②c ②d ②e（四类图各写一句，不求默写）\n7 全部 15 行连起来，10 分钟内默完零提示",
    "考场 · 默写"
  ],
  [
    "四条不许",
    "1 **不许改句式**：骨架已过三次批改与 17 题验证，改一处要重验一遍\n2 **不许加新句子**：想加内容往 ★ 或 ⑨ 里加，不新增句位\n3 **不许背不考的东西**：材料作文（英一 17 年零次）、首段 9 选、18 句型、闪光词表，都是查的\n4 **不许两套说法**：05-最小背诵卡、05-写作流程已废止，以 08 背诵总表为准",
    "考场 · 红线"
  ]
];
