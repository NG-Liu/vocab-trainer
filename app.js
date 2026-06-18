const STARTER_WORDS = [
  ["bankrupt", "破产的；使破产", "The company went bankrupt after years of losses."],
  ["auctioneer", "拍卖师", "The auctioneer opened the bidding at a low price."],
  ["greed", "贪婪", "Greed can cloud good judgment."],
  ["guarantee", "保证；担保", "The receipt is your guarantee."],
  ["client", "客户；委托人", "The lawyer met a new client."],
  ["sector", "行业；部门；区域", "The technology sector grew quickly."],
  ["slump", "暴跌；衰退；萎靡", "Sales went into a slump."],
  ["momentum", "势头；动力", "The campaign gained momentum."],
  ["barrel", "桶；一桶的量", "Oil rose to 90 dollars a barrel."],
  ["inflation", "通货膨胀", "Inflation pushed prices higher."],
  ["retail price", "零售价", "The retail price is printed on the box."],
  ["emerging economy", "新兴经济体", "India is a major emerging economy."],
  ["shareholder", "股东", "Shareholders voted on the merger."],
  ["deputy", "副手；代理人；副职的", "The deputy mayor gave the speech."],
  ["turnover", "营业额；人员流动率", "Staff turnover is high this year."],
  ["alliance", "联盟；同盟", "The two firms formed an alliance."],
  ["index", "指数；索引", "The stock index fell sharply."],
  ["ownership", "所有权", "Ownership of the land is disputed."],
  ["recession", "经济衰退", "The country entered a recession."],
  ["ballot", "选票；投票", "Voters cast their ballots."],
  ["fetch", "取来；卖得", "The painting fetched a high price."],
  ["quadruple", "变为四倍；四倍的", "Profits quadrupled in five years."],
  ["suspend", "暂停；悬挂；停职", "The service was suspended."],
  ["excess", "过量；多余的", "Excess sugar is unhealthy."],
  ["depart", "离开；出发", "The train departs at noon."],
  ["unconventional", "非传统的", "She chose an unconventional method."],
  ["propose", "提议；求婚", "They proposed a new plan."],
  ["poisonous", "有毒的；恶毒的", "Some mushrooms are poisonous."],
  ["unprecedented", "史无前例的", "The storm caused unprecedented damage."],
  ["resistant", "抵抗的；有抵抗力的", "The material is resistant to heat."],
  ["divisive", "造成分裂的", "The issue became highly divisive."],
  ["call out bid", "喊价；叫价", "Buyers began to call out bids."],
  ["got the nod", "获得认可；被选中", "She got the nod for the role."],
  ["take hold", "扎根；开始起作用", "The reform slowly took hold."],
  ["set off sth", "引发；启动；衬托", "The news set off a debate."],
  ["conservation", "保护；保存", "Conservation protects natural habitats."],
  ["scrutiny", "仔细审查", "The deal came under scrutiny."],
  ["proclamation", "公告；宣言", "The president issued a proclamation."],
  ["succession", "继任；连续", "The law governs royal succession."],
  ["successor", "继任者；后续事物", "A successor has not been chosen."],
  ["aspiration", "抱负；渴望", "Her aspiration is to become a judge."],
  ["commitment", "承诺；投入", "The project requires commitment."],
  ["constitutionality", "合宪性", "The court considered its constitutionality."],
  ["reactor", "反应堆；反应器", "The reactor was shut down."],
  ["permission", "许可；允许", "You need permission to enter."],
  ["legislature", "立法机关", "The legislature passed the bill."],
  ["leakage", "泄漏；渗漏", "Leakage from the pipe was detected."],
  ["institution", "机构；制度", "The bank is a major institution."],
  ["constitution", "宪法；章程；体质", "The constitution protects basic rights."],
  ["evidence", "证据", "There is strong evidence for the claim."],
  ["assembly", "议会；集会；装配", "The assembly met on Monday."],
  ["counterpart", "对应的人或物", "She met her French counterpart."],
  ["qualification", "资格；资历；限定条件", "The job requires a teaching qualification."],
  ["attendee", "出席者", "Every attendee received a badge."],
  ["recipient", "接受者；获奖者", "The recipient thanked the committee."],
  ["initiative", "倡议；主动性", "The city launched a recycling initiative."],
  ["constrain", "限制；约束", "Budget cuts constrain our options."],
  ["condemn", "谴责；判刑", "Leaders condemned the attack."],
  ["insidious", "潜伏的；阴险的", "The disease is insidious at first."],
  ["substantially", "大幅地；实质上", "Costs were substantially reduced."],
  ["radically", "根本地；激进地", "The design changed radically."],
  ["ironically", "讽刺地；具有讽刺意味地", "Ironically, the shortcut took longer."],
  ["deride", "嘲笑；讥讽", "Critics derided the proposal."],
  ["illiterate", "文盲的；不识字的人", "Many adults were still illiterate."],
  ["suspect", "怀疑；嫌疑人；可疑的", "Police suspect foul play."],
  ["precisely", "精确地；正是", "That is precisely the problem."],
  ["abide by", "遵守", "Everyone must abide by the rules."],
  ["live by", "遵循某种原则生活", "She lives by a strict code."],
  ["object to", "反对", "They objected to the decision."],
  ["press on", "继续推进", "Despite setbacks, they pressed on."],
  ["comply with", "遵守；服从", "Companies must comply with the law."],
  ["arrogant", "傲慢的", "His arrogant tone angered the team."],
  ["impulsive", "冲动的", "An impulsive decision can be costly."],
  ["justified", "有正当理由的", "Their concerns are justified."],
  ["stunning", "惊人的；极美的", "The view was stunning."],
  ["obsessed", "痴迷的", "He is obsessed with chess."],
  ["casual", "随意的；非正式的", "The office has a casual dress code."],
  ["perceptive", "有洞察力的", "Her comments were perceptive."],
  ["flawed", "有缺陷的", "The argument is flawed."],
  ["persuasive", "有说服力的", "The speech was persuasive."],
  ["glaring", "明显的；刺眼的", "There was a glaring error."],
  ["subtle", "微妙的；不易察觉的", "The difference is subtle."],
  ["virtuous", "品德高尚的；良性的", "They created a virtuous cycle."],
  ["reckon", "认为；估计", "I reckon we can finish today."],
  ["provoke", "激起；挑衅", "The remark provoked anger."],
  ["outrage", "愤怒；激怒", "The ruling caused public outrage."],
  ["instruct", "指示；教授", "The manual instructs users carefully."],
  ["horrify", "使震惊；使恐惧", "The images horrified viewers."],
  ["oblige", "迫使；帮忙", "The law obliges firms to report data."],
  ["contend", "声称；竞争；争辩", "Researchers contend that the trend is real."],
  ["plead", "恳求；申辩", "He pleaded for more time."],
  ["steer", "驾驶；引导", "She steered the discussion back."],
  ["tactic", "策略；手段", "It was a clever tactic."],
  ["seething", "怒火中烧的；翻腾的", "He was seething with anger."],
  ["contemporary", "当代的；同时代的", "The museum shows contemporary art."],
  ["hemisphere", "半球", "Australia is in the southern hemisphere."],
  ["the injured party", "受害方；受伤一方", "The injured party sought compensation."],
  ["gender-neutral", "性别中立的", "The form uses gender-neutral language."],
  ["nursery", "托儿所；苗圃", "Their child attends a nursery."],
  ["femininity", "女性气质", "The essay discusses femininity."],
  ["toddler", "学步儿童", "The toddler learned new words."],
  ["consumerism", "消费主义", "Consumerism shapes modern culture."],
  ["fraction", "小部分；分数", "Only a fraction of users replied."],
  ["discourse", "话语；论述", "Public discourse changed over time."],
  ["casualness", "随意；漫不经心", "The casualness of the reply surprised me."],
  ["deference", "尊重；顺从", "He showed deference to tradition."],
  ["uniformity", "一致性；统一性", "Uniformity can reduce creativity."],
  ["intermarriage", "通婚", "Intermarriage connected the communities."],
  ["graveyard", "墓地", "The old graveyard is near the church."],
  ["pocket", "口袋；小区域；把...收入囊中", "He put the note in his pocket."],
  ["alphabet", "字母表", "Children learn the alphabet early."],
  ["directory", "名录；目录", "Search the directory for her number."],
  ["coincidence", "巧合", "It was a strange coincidence."],
  ["billboard", "广告牌", "The billboard stood by the road."],
  ["perception", "感知；看法", "Public perception matters."],
  ["assimilation", "同化；吸收", "Assimilation can be gradual."],
  ["predecessor", "前任；前身", "The new model is faster than its predecessor."],
  ["vague", "模糊的", "The instructions were vague."],
  ["turbulent", "动荡的；湍急的", "The country entered a turbulent period."],
  ["singular", "非凡的；单数的", "She has a singular talent."],
  ["masculine", "男性的；阳性的", "The word has a masculine form."],
  ["pastel", "淡色的；彩色粉笔", "The room was painted in pastel colors."],
  ["pervasive", "普遍存在的；弥漫的", "Advertising is pervasive online."],
  ["intrinsically", "本质上", "The work is intrinsically valuable."],
  ["inherently", "固有地；本质上", "The process is inherently risky."],
  ["critical", "关键的；批判的；危急的", "Timing is critical."],
  ["explicit", "明确的；直白的", "The rules are explicit."],
  ["intimate", "亲密的；私人的", "They had an intimate conversation."],
  ["elegant", "优雅的；精妙的", "The solution is elegant."],
  ["bilingual", "双语的", "The school offers bilingual education."],
  ["proficient", "熟练的", "She is proficient in English."],
  ["suspiciously", "可疑地", "He acted suspiciously."],
  ["respectively", "分别地", "They finished first and second, respectively."],
  ["invert", "倒置；反转", "Invert the image colors."],
  ["fuse", "融合；保险丝", "The two ideas fuse into one."],
  ["amplify", "放大；增强", "The microphone amplified her voice."],
  ["dictate", "决定；口述；命令", "Demand will dictate the price."],
  ["segment", "部分；划分", "We focused on one market segment."],
  ["magnify", "放大；夸大", "The lens magnifies small details."],
  ["homogenize", "使同质化", "Mass media can homogenize culture."],
  ["cater to", "迎合；满足需要", "The service caters to young families."],
  ["democratize", "使民主化；使大众化", "Technology can democratize education."],
  ["exert enormous influence on", "对...施加巨大影响", "Media can exert enormous influence on politics."],
  ["recruiter", "招聘人员", "The recruiter called after the interview."],
  ["bureaucrat", "官僚；官员", "A senior bureaucrat approved the request."],
  ["spot-on", "完全准确的", "Your analysis was spot-on."],
  ["constancy", "持久不变；忠贞", "Constancy is rare in fashion."],
  ["intimation", "暗示；提示", "There was no intimation of trouble."],
  ["oversee", "v. 监督；监管", "The manager oversees the daily operations."],
  ["intuitively", "adv. 凭直觉；直觉上", "She intuitively knew something was wrong."],
  ["deliberation", "n. 认真考虑；审议", "After long deliberation, they chose the safer plan."],
  ["flattering", "adj. 奉承的；讨好的", "He made a flattering remark about her work."],
  ["genuinely", "adv. 真诚地；确实地", "He was genuinely happy to help."],
  ["self-esteem", "n. 自尊心", "Children need support to build self-esteem."],
  ["delusion", "n. 错觉；妄想", "He was living under a delusion."],
  ["depressed", "adj. 沮丧的；消沉的", "She felt depressed after the interview."],
  ["make sense", "有道理；讲得通", "The explanation finally made sense."],
  ["viscerally", "adv. 由内而外地；强烈地", "The scene hit him viscerally."],
  ["paradise", "n. 天堂；乐土", "The island felt like paradise."],
  ["wit", "n. 机智；才智", "Her wit kept the conversation lively."],
  ["portray", "v. 描绘；表现；饰演", "The film portrays life in the city."],
  ["idealise", "v. 理想化；使完美化", "People often idealise the past."],
  ["profile", "n. 侧面像；简介", "Her profile appears in the magazine."],
  ["perceive", "v. 察觉；感知；认为", "We perceive the world differently."],
  ["dilute", "v. 稀释；削弱", "Add water to dilute the juice."],
  ["inefficient", "adj. 效率低的；无效的", "The old system is inefficient."],
  ["hypotheses", "n. 假设；假说", "The team tested several hypotheses."],
  ["infections", "n. 感染；传染", "The hospital treated several infections."],
  ["disproportionately", "adv. 不成比例地；过度地", "Low-income families were disproportionately affected."],
  ["nasty", "adj. 讨厌的；恶劣的", "The weather turned nasty at noon."],
  ["intimately", "adv. 亲密地；密切地", "The two issues are intimately connected."],
  ["subject sb to", "使某人遭受；使某人服从", "The policy subjects workers to strict checks."],
  ["paradoxical", "adj. 矛盾的；似非而是的", "It is paradoxical but true."],
  ["limb", "n. 肢；肢体", "The injury affected his left limb."],
  ["alteration", "n. 改变；修改", "The plan needs a small alteration."],
  ["fairly", "adv. 相当；公正地", "The result is fairly clear."],
  ["empirical", "adj. 经验的；实证的", "The claim needs empirical evidence."],
  ["amass", "v. 积累；聚集", "They amassed a large fortune."],
  ["illusory", "adj. 虚幻的；错觉的", "The sense of safety was illusory."],
  ["tint", "n. 淡色；色调；v. 给...着色", "The glass had a green tint."],
  ["stereotype", "n. 刻板印象；v. 对...形成刻板印象", "The article challenges a common stereotype."],
  ["esteem", "n. 尊重；自尊；v. 尊敬", "She is held in high esteem."],
  ["stalk", "v. 偷偷跟踪；n. 茎；梗", "He began to stalk his prey."],
  ["receptors", "n. 受体；感受器", "The receptors respond to light."],
  ["obscure", "v. 掩盖；使模糊；adj. 费解的；不起眼的", "Clouds obscure the moon."],
  ["anthropologist", "n. 人类学家", "An anthropologist studied the tribe."],
  ["recruit", "v. 招募；吸收；n. 新成员", "The company plans to recruit more staff."],
  ["prevention", "n. 预防；防止", "Prevention is better than cure."],
  ["secular", "adj. 世俗的；非宗教的", "The school is secular."],
  ["substantial", "adj. 大量的；重大的；坚固的", "The proposal brought substantial benefits."],
  ["upright", "adj. 直立的；正直的", "Keep the bottle upright."],
  ["bipedal", "adj. 两足的；双足行走的", "Humans are bipedal animals."],
  ["withstand", "v. 承受；抵抗", "The bridge can withstand strong winds."],
  ["impose", "v. 强加；施加；征收", "The government imposed new rules."]
].map(([term, meaning, example]) => ({ id: makeId(term), term, meaning, example }));

const STORAGE_KEY = "wordTrainer.v1";
const APP_VERSION = "23";
const DEFAULT_BOOK_ID = "default";
const DEFAULT_BOOK_NAME = "默认单词本";
const INTEGRAL_BOOK_ID = "integrals";
const INTEGRAL_BOOK_NAME = "高数积分公式";
const INTEGRAL_BOOK_WORDS = [
  { id: "power-rule", term: "\\int x^k\\,dx", meaning: "= \\frac{x^{k+1}}{k+1}+C", example: "k \\neq -1；特例：k=-1 时，\\int \\frac{1}{x}\\,dx=\\ln|x|+C" },
  { id: "reciprocal", term: "\\int \\frac{1}{x}\\,dx", meaning: "= \\ln|x|+C", example: "对数型基本公式" },
  { id: "exp-e", term: "\\int e^x\\,dx", meaning: "= e^x+C", example: "底数为 e 的指数函数" },
  { id: "exp-a", term: "\\int a^x\\,dx", meaning: "= \\frac{a^x}{\\ln a}+C", example: "a>0,\\ a\\neq1" },
  { id: "sin", term: "\\int \\sin x\\,dx", meaning: "= -\\cos x+C", example: "正弦原函数是负余弦" },
  { id: "cos", term: "\\int \\cos x\\,dx", meaning: "= \\sin x+C", example: "余弦原函数是正弦" },
  { id: "tan", term: "\\int \\tan x\\,dx", meaning: "= -\\ln|\\cos x|+C", example: "也可记成 \\ln|\\sec x|+C" },
  { id: "cot", term: "\\int \\cot x\\,dx", meaning: "= \\ln|\\sin x|+C", example: "和 tan 一起记" },
  { id: "sec", term: "\\int \\sec x\\,dx", meaning: "= \\ln|\\sec x+\\tan x|+C", example: "和 \\sec^2x、\\sec x\\tan x 关联记忆" },
  { id: "csc", term: "\\int \\csc x\\,dx", meaning: "= \\ln|\\csc x-\\cot x|+C", example: "和 \\csc^2x、\\csc x\\cot x 关联记忆" },
  { id: "sec2", term: "\\int \\sec^2x\\,dx", meaning: "= \\tan x+C", example: "(\\tan x)'=\\sec^2x" },
  { id: "csc2", term: "\\int \\csc^2x\\,dx", meaning: "= -\\cot x+C", example: "(\\cot x)'=-\\csc^2x" },
  { id: "sec-tan", term: "\\int \\sec x\\tan x\\,dx", meaning: "= \\sec x+C", example: "(\\sec x)'=\\sec x\\tan x" },
  { id: "csc-cot", term: "\\int \\csc x\\cot x\\,dx", meaning: "= -\\csc x+C", example: "(\\csc x)'=-\\csc x\\cot x" },
  { id: "arctan", term: "\\int \\frac{1}{1+x^2}\\,dx", meaning: "= \\arctan x+C", example: "反正切模板" },
  { id: "arctan-a", term: "\\int \\frac{1}{a^2+x^2}\\,dx", meaning: "= \\frac{1}{a}\\arctan\\frac{x}{a}+C", example: "a>0" },
  { id: "arcsin", term: "\\int \\frac{1}{\\sqrt{1-x^2}}\\,dx", meaning: "= \\arcsin x+C", example: "反正弦模板" },
  { id: "arcsin-a", term: "\\int \\frac{1}{\\sqrt{a^2-x^2}}\\,dx", meaning: "= \\arcsin\\frac{x}{a}+C", example: "a>0" },
  { id: "sqrt-plus", term: "\\int \\frac{1}{\\sqrt{x^2+a^2}}\\,dx", meaning: "= \\ln\\left(x+\\sqrt{x^2+a^2}\\right)+C", example: "常见 a=1" },
  { id: "sqrt-minus", term: "\\int \\frac{1}{\\sqrt{x^2-a^2}}\\,dx", meaning: "= \\ln\\left|x+\\sqrt{x^2-a^2}\\right|+C", example: "|x|>|a|" },
  { id: "diff-square", term: "\\int \\frac{1}{x^2-a^2}\\,dx", meaning: "= \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right|+C", example: "也可写成 \\frac{1}{2a}\\ln\\left|\\frac{x+a}{x-a}\\right|+C" },
  { id: "sqrt-quad", term: "\\int \\sqrt{a^2-x^2}\\,dx", meaning: "= \\frac{a^2}{2}\\arcsin\\frac{x}{a}+\\frac{x}{2}\\sqrt{a^2-x^2}+C", example: "a>|x|\\ge0" },
  { id: "sin2", term: "\\int \\sin^2x\\,dx", meaning: "= \\frac{x}{2}-\\frac{\\sin 2x}{4}+C", example: "\\sin^2x=\\frac{1-\\cos 2x}{2}" },
  { id: "cos2", term: "\\int \\cos^2x\\,dx", meaning: "= \\frac{x}{2}+\\frac{\\sin 2x}{4}+C", example: "\\cos^2x=\\frac{1+\\cos 2x}{2}" },
  { id: "tan2", term: "\\int \\tan^2x\\,dx", meaning: "= \\tan x-x+C", example: "\\tan^2x=\\sec^2x-1" },
  { id: "cot2", term: "\\int \\cot^2x\\,dx", meaning: "= -\\cot x-x+C", example: "\\cot^2x=\\csc^2x-1" },
  { id: "exp-sin", term: "\\int e^{ax}\\sin bx\\,dx", meaning: "= \\frac{ae^{ax}\\sin bx-be^{ax}\\cos bx}{a^2+b^2}+C", example: "指数乘三角通用公式；适合直接套用" },
  { id: "exp-cos", term: "\\int e^{ax}\\cos bx\\,dx", meaning: "= \\frac{ae^{ax}\\cos bx+be^{ax}\\sin bx}{a^2+b^2}+C", example: "指数乘三角通用公式；和 \\int e^{ax}\\sin bx\\,dx 成对记忆" },
  { id: "interval-recur", term: "\\int_a^b f(x)\\,dx", meaning: "= \\int_a^b f(a+b-x)\\,dx", example: "区间再现公式；f(x) 在 [a,b] 上连续" },
  { id: "wallis-half", term: "\\int_0^{\\pi/2}\\sin^n x\\,dx=\\int_0^{\\pi/2}\\cos^n x\\,dx", meaning: "= \\begin{cases}\\frac{n-1}{n}\\cdot\\frac{n-3}{n-2}\\cdots\\frac{2}{3}\\cdot1, & n>1\\text{ 且 }n\\text{ 为奇数}\\\\[4pt]\\frac{n-1}{n}\\cdot\\frac{n-3}{n-2}\\cdots\\frac{1}{2}\\cdot\\frac{\\pi}{2}, & n\\text{ 为正偶数}\\end{cases}", example: "Wallis 公式 1；\\left[0,\\frac{\\pi}{2}\\right] 上 sin^n 与 cos^n 完全相同" },
  { id: "wallis-pi-sin", term: "\\int_0^{\\pi}\\sin^n x\\,dx", meaning: "= \\begin{cases}2\\cdot\\frac{n-1}{n}\\cdot\\frac{n-3}{n-2}\\cdots\\frac{2}{3}\\cdot1, & n>1\\text{ 且 }n\\text{ 为奇数}\\\\[4pt]2\\cdot\\frac{n-1}{n}\\cdot\\frac{n-3}{n-2}\\cdots\\frac{1}{2}\\cdot\\frac{\\pi}{2}, & n\\text{ 为正偶数}\\end{cases}", example: "Wallis 公式 2；也就是前一个公式再乘 2" },
  { id: "wallis-2pi", term: "\\int_0^{2\\pi}\\sin^n x\\,dx=\\int_0^{2\\pi}\\cos^n x\\,dx", meaning: "= \\begin{cases}0, & n\\text{ 为正奇数}\\\\[4pt]4\\cdot\\frac{n-1}{n}\\cdot\\frac{n-3}{n-2}\\cdots\\frac{1}{2}\\cdot\\frac{\\pi}{2}, & n\\text{ 为正偶数}\\end{cases}", example: "Wallis 公式 3；整周期上奇次幂为 0，偶次幂用偶数公式" }
];
const THEOREM_BOOK_ID = "mean-value-theorems";
const THEOREM_BOOK_NAME = "高数中值定理";
const THEOREM_BOOK_WORDS = [
  {
    id: "rolle",
    term: "\\text{罗尔定理}",
    meaning: "\\text{若 }f(x)\\text{ 在 }[a,b]\\text{ 上连续，在 }(a,b)\\text{ 内可导，且 }f(a)=f(b),\\\\[4pt]\\text{则存在 }\\xi\\in(a,b),\\text{ 使 }f'(\\xi)=0.",
    example: "条件：连续；可导；两端点函数值相等"
  },
  {
    id: "rolle-generalized",
    term: "\\text{推广的罗尔定理}",
    meaning: "\\text{若 }f(x)\\text{ 在 }(a,b)\\text{ 内可导，且 }\\lim_{x\\to a^+}f(x)=\\lim_{x\\to b^-}f(x)=A,\\\\[4pt]\\text{则在 }(a,b)\\text{ 内至少存在一点 }\\xi,\\text{ 使 }f'(\\xi)=0.",
    example: "其中区间(a,b)可以是有限区间也可以是无穷区间；A 可以是有限数也可以是无穷大"
  },
  {
    id: "lagrange",
    term: "\\text{拉格朗日中值定理}",
    meaning: "\\text{若 }f(x)\\text{ 在 }[a,b]\\text{ 上连续，在 }(a,b)\\text{ 内可导，}\\\\[4pt]\\text{则存在 }\\xi\\in(a,b),\\text{ 使 }f'(\\xi)=\\frac{f(b)-f(a)}{b-a}.",
    example: "也可写成 f(b)-f(a)=f'(\\xi)(b-a)；常用导函数值控制函数值的变化"
  },
  {
    id: "cauchy",
    term: "\\text{柯西中值定理}",
    meaning: "\\text{若 }f(x),g(x)\\text{ 在 }[a,b]\\text{ 上连续，在 }(a,b)\\text{ 内可导，且 }g'(x)\\neq0,\\\\[4pt]\\text{则存在 }\\xi\\in(a,b),\\text{ 使 }\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)}.",
    example: "参数方程表达；左右两边对应同一个 \\xi"
  }
];
const TAYLOR_BOOK_ID = "taylor";
const TAYLOR_BOOK_NAME = "高数泰勒展开";
const TAYLOR_BOOK_WORDS = [
  {
    id: "taylor-general",
    term: "\\text{泰勒公式}",
    meaning: "\\text{若 }f(x)\\text{ 在 }x_0\\text{ 的某邻域内有 }n+1\\text{ 阶导数，则 }\\\\[4pt]f(x)=f(x_0)+f'(x_0)(x-x_0)+\\cdots+\\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}.",
    example: "\\xi 在 x 与 x_0 之间；余项是拉格朗日型"
  },
  {
    id: "taylor-peano",
    term: "\\text{泰勒公式的佩亚诺余项}",
    meaning: "\\text{若 }f(x)\\text{ 在 }x_0\\text{ 处 }n\\text{ 阶可导，则 }\\\\[4pt]f(x)=f(x_0)+f'(x_0)(x-x_0)+\\cdots+\\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+o\\big((x-x_0)^n\\big).",
    example: "只要求 x_0 处 n 阶可导；余项写成 o((x-x_0)^n)"
  },
  {
    id: "maclaurin",
    term: "\\text{麦克劳林公式}",
    meaning: "\\text{当 }x_0=0\\text{ 时的泰勒公式。}",
    example: "常用于展开基本函数"
  },
  {
    id: "exp-series",
    term: "e^x",
    meaning: "= 1+x+\\frac{x^2}{2!}+\\cdots+\\frac{x^n}{n!}+o(x^n)",
    example: "记前面每一项都除以阶乘"
  },
  {
    id: "sin-series",
    term: "\\sin x",
    meaning: "= x-\\frac{x^3}{3!}+\\cdots+(-1)^n\\frac{x^{2n+1}}{(2n+1)!}+o(x^{2n+1})",
    example: "只出现奇次幂"
  },
  {
    id: "cos-series",
    term: "\\cos x",
    meaning: "= 1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots+(-1)^n\\frac{x^{2n}}{(2n)!}+o(x^{2n})",
    example: "只出现偶次幂"
  },
  {
    id: "geom-series",
    term: "\\frac{1}{1-x}",
    meaning: "= 1+x+x^2+\\cdots+x^n+o(x^n)",
    example: "几何级数展开，要求 |x|<1 时最常用"
  },
  {
    id: "geom-minus",
    term: "\\frac{1}{1+x}",
    meaning: "= 1-x+x^2-\\cdots+(-1)^nx^n+o(x^n)",
    example: "把 x 换成 -x"
  },
  {
    id: "ln-series",
    term: "\\ln(1+x)",
    meaning: "= x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots+(-1)^{n-1}\\frac{x^n}{n}+o(x^n)",
    example: "常和 \\frac{1}{1+x} 对着记"
  },
  {
    id: "binomial-series",
    term: "\\text{广义二项式}",
    meaning: "= (1+x)^\\alpha=1+\\alpha x+\\frac{\\alpha(\\alpha-1)}{2!}x^2+\\cdots+\\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}x^n+o(x^n)",
    example: "记住前 3 项最常用"
  }
];
const TEST_BOOK_ID = "test";
const TEST_BOOK_NAME = "测试单词本";
const TEST_BOOK_WORDS = [
  ["apple", "苹果", "She ate an apple."],
  ["borrow", "借用；借入", "Can I borrow your pen?"],
  ["careful", "小心的；仔细的", "Be careful on the stairs."],
  ["develop", "发展；开发", "They plan to develop a new app."],
  ["effort", "努力；尝试", "Her effort paid off."],
  ["frequent", "频繁的", "Frequent updates are needed."],
  ["gather", "收集；聚集", "We gathered the data."],
  ["honest", "诚实的", "He gave an honest answer."],
  ["improve", "改善；提高", "Practice helps improve speed."],
  ["journey", "旅程；历程", "The journey took two hours."]
].map(([term, meaning, example]) => ({ id: makeId(term), term, meaning, example }));
const BOOK_DEFINITIONS = [
  { id: DEFAULT_BOOK_ID, name: DEFAULT_BOOK_NAME, words: STARTER_WORDS },
  { id: INTEGRAL_BOOK_ID, name: INTEGRAL_BOOK_NAME, words: INTEGRAL_BOOK_WORDS },
  { id: THEOREM_BOOK_ID, name: THEOREM_BOOK_NAME, words: THEOREM_BOOK_WORDS },
  { id: TAYLOR_BOOK_ID, name: TAYLOR_BOOK_NAME, words: TAYLOR_BOOK_WORDS },
  { id: TEST_BOOK_ID, name: TEST_BOOK_NAME, words: TEST_BOOK_WORDS }
];
const MATH_BOOK_IDS = new Set([INTEGRAL_BOOK_ID, THEOREM_BOOK_ID, TAYLOR_BOOK_ID]);
const DAY = 24 * 60 * 60 * 1000;
const TODAY_REVIEW_LIMIT = 50;
const SUBMISSION_MAX_FILE_SIZE = 1024 * 1024;
const KATEX_CSS_URL = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css";
const KATEX_JS_URL = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js";
let deferredInstallPrompt = null;
let isReloadingForUpdate = false;

const state = loadState();
Object.defineProperties(state, {
  words: {
    get() {
      return ensureCurrentBook().words;
    },
    set(value) {
      ensureCurrentBook().words = value;
    }
  },
  progress: {
    get() {
      return ensureCurrentBook().progress;
    },
    set(value) {
      ensureCurrentBook().progress = value;
    }
  },
  history: {
    get() {
      return ensureCurrentBook().history;
    },
    set(value) {
      ensureCurrentBook().history = value;
    }
  },
  todaySession: {
    get() {
      return ensureCurrentBook().todaySession;
    },
    set(value) {
      ensureCurrentBook().todaySession = value;
    }
  }
});
let currentQueue = [];
let currentIndex = -1;
let currentQueueType = "due";
let awaitingHardAdvance = false;

const els = {
  dueCount: document.querySelector("#dueCount"),
  totalCount: document.querySelector("#totalCount"),
  masteredCount: document.querySelector("#masteredCount"),
  accuracyToday: document.querySelector("#accuracyToday"),
  bookSelect: document.querySelector("#bookSelect"),
  installButton: document.querySelector("#installButton"),
  installSheet: document.querySelector("#installSheet"),
  installMessage: document.querySelector("#installMessage"),
  closeInstallSheet: document.querySelector("#closeInstallSheet"),
  resetTodayButton: document.querySelector("#resetTodayButton"),
  exportButton: document.querySelector("#exportButton"),
  tabs: document.querySelectorAll(".tab"),
  queueType: document.querySelector("#queueType"),
  startButton: document.querySelector("#startButton"),
  queueLabel: document.querySelector("#queueLabel"),
  promptText: document.querySelector("#promptText"),
  promptHint: document.querySelector("#promptHint"),
  answerBox: document.querySelector("#answerBox"),
  answerText: document.querySelector("#answerText"),
  feedbackText: document.querySelector("#feedbackText"),
  showAnswerButton: document.querySelector("#showAnswerButton"),
  rateButtons: document.querySelectorAll(".rate-button"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  wordList: document.querySelector("#wordList"),
  addWordForm: document.querySelector("#addWordForm"),
  newTerm: document.querySelector("#newTerm"),
  newMeaning: document.querySelector("#newMeaning"),
  newExample: document.querySelector("#newExample"),
  bulkImport: document.querySelector("#bulkImport"),
  importButton: document.querySelector("#importButton"),
  submitForm: document.querySelector("#submitForm"),
  submitBookName: document.querySelector("#submitBookName"),
  submitEmail: document.querySelector("#submitEmail"),
  submitFile: document.querySelector("#submitFile"),
  submitButton: document.querySelector("#submitButton"),
  submitStatus: document.querySelector("#submitStatus"),
  levelBars: document.querySelector("#levelBars"),
  historyList: document.querySelector("#historyList")
};

init();

function init() {
  ensureBooks();
  syncBookSelect();
  bindEvents();
  ensureKatex();
  registerServiceWorker();
  renderAll();
}

function bindEvents() {
  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });

  if (els.bookSelect) {
    els.bookSelect.addEventListener("change", () => switchBook(els.bookSelect.value));
  }
  els.startButton.addEventListener("click", startSession);
  els.showAnswerButton.addEventListener("click", () => revealAnswer());
  els.rateButtons.forEach((button) => {
    button.addEventListener("click", () => rateCurrent(button.dataset.rating));
  });

  els.searchInput.addEventListener("input", renderWordList);
  els.statusFilter.addEventListener("change", renderWordList);

  els.addWordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addWord(els.newTerm.value, els.newMeaning.value, els.newExample.value);
    els.addWordForm.reset();
  });

  els.importButton.addEventListener("click", importBulkWords);
  els.exportButton.addEventListener("click", exportData);
  els.submitForm.addEventListener("submit", submitVocabularyFile);
  els.installButton.addEventListener("click", installApp);
  els.closeInstallSheet.addEventListener("click", closeInstallSheet);
  els.resetTodayButton.addEventListener("click", () => {
    els.queueType.value = "due";
    startSession();
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    showInstallSheet("已添加到桌面。");
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (isReloadingForUpdate) return;
    isReloadingForUpdate = true;
    window.location.reload();
  });
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(`./sw.js?v=${APP_VERSION}`)
      .then((registration) => registration.update())
      .catch(() => {
        // The app still works without offline caching.
      });
  });
}

async function installApp() {
  if (!deferredInstallPrompt) {
    showInstallSheet(getManualInstallMessage());
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
}

function showInstallSheet(message) {
  els.installMessage.textContent = message;
  els.installSheet.classList.remove("is-hidden");
}

function closeInstallSheet() {
  els.installSheet.classList.add("is-hidden");
}

function getManualInstallMessage() {
  const ua = navigator.userAgent || "";
  const isApple = /iPhone|iPad|iPod/i.test(ua);
  if (isApple) return "在 Safari 打开本页，点击分享按钮，然后选择“添加到主屏幕”。";
  return "请打开浏览器菜单，选择“安装应用”或“添加到主屏幕”。";
}

function loadState() {
  const fallback = {
    books: {
      [DEFAULT_BOOK_ID]: getDefaultBook()
    },
    currentBookId: DEFAULT_BOOK_ID
  };
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return normalizeState(parsed, fallback);
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeState(parsed, fallback) {
  const value = parsed && typeof parsed === "object" ? parsed : {};
  if (value.books && typeof value.books === "object") {
    if (!value.books[DEFAULT_BOOK_ID]) value.books[DEFAULT_BOOK_ID] = getDefaultBook();
    return {
      books: value.books,
      currentBookId: isBuiltInBookId(value.currentBookId) && value.books[value.currentBookId] ? value.currentBookId : DEFAULT_BOOK_ID
    };
  }
  if (Array.isArray(value.words)) {
    return {
      books: {
        [DEFAULT_BOOK_ID]: {
          ...getDefaultBook(),
          words: value.words,
          progress: value.progress || {},
          history: value.history || [],
          todaySession: value.todaySession || null
        }
      },
      currentBookId: DEFAULT_BOOK_ID
    };
  }
  return fallback;
}

function getDefaultBook() {
  return {
    id: DEFAULT_BOOK_ID,
    name: DEFAULT_BOOK_NAME,
    words: [],
    progress: {},
    history: [],
    todaySession: null
  };
}

function createBook(id, name) {
  return {
    id,
    name,
    words: [],
    progress: {},
    history: [],
    todaySession: null
  };
}

function seedBookWords(book, words) {
  const existing = new Set(book.words.map((word) => word.id));
  let changed = false;
  words.forEach((word) => {
    if (!existing.has(word.id)) {
      book.words.push({ ...word });
      book.progress[word.id] = createProgress();
      changed = true;
    }
  });
  if (changed) {
    book.words.sort((a, b) => a.term.localeCompare(b.term));
  }
  return changed;
}

function ensureBooks() {
  if (!state.books) state.books = {};
  let changed = false;
  Object.keys(state.books).forEach((bookId) => {
    if (!isBuiltInBookId(bookId)) {
      delete state.books[bookId];
      changed = true;
    }
  });
  BOOK_DEFINITIONS.forEach((definition) => {
    if (!state.books[definition.id]) {
      state.books[definition.id] = createBook(definition.id, definition.name);
      changed = true;
    }
    const book = state.books[definition.id];
    if (book.id !== definition.id) {
      book.id = definition.id;
      changed = true;
    }
    if (book.name !== definition.name) {
      book.name = definition.name;
      changed = true;
    }
    if (seedBookWords(book, definition.words)) changed = true;
  });
  if (!state.currentBookId || !state.books[state.currentBookId]) {
    state.currentBookId = DEFAULT_BOOK_ID;
    changed = true;
  }
  if (changed) saveState();
}

function isBuiltInBookId(bookId) {
  return BOOK_DEFINITIONS.some((definition) => definition.id === bookId);
}

function ensureCurrentBook() {
  ensureBooks();
  return state.books[state.currentBookId];
}

function getSelectableBooks() {
  return BOOK_DEFINITIONS.map((definition) => state.books[definition.id]).filter(Boolean);
}

function syncBookSelect() {
  if (!els.bookSelect) return;
  const books = getSelectableBooks();
  els.bookSelect.innerHTML = books
    .map((book) => `<option value="${escapeHtml(book.id)}">${escapeHtml(book.name)}</option>`)
    .join("");
  els.bookSelect.value = state.currentBookId;
}

function switchBook(bookId) {
  if (!state.books[bookId]) return;
  state.currentBookId = bookId;
  currentQueue = [];
  currentIndex = -1;
  currentQueueType = "due";
  awaitingHardAdvance = false;
  saveState();
  syncBookSelect();
  renderAll();
}

function mergeStarterWords() {
  const book = ensureCurrentBook();
  const existing = new Set(book.words.map((word) => word.id));
  let changed = false;
  STARTER_WORDS.forEach((word) => {
    if (!existing.has(word.id)) {
      book.words.push(word);
      book.progress[word.id] = createProgress();
      changed = true;
    }
  });
  book.words.sort((a, b) => a.term.localeCompare(b.term));
  if (changed) saveState();
}

function createProgress() {
  return {
    level: 0,
    interval: 0,
    dueAt: startOfToday(),
    seen: 0,
    correct: 0,
    wrong: 0,
    lastReviewed: null
  };
}

function makeId(term) {
  return term.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function startOfToday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}

function todayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function switchView(viewId) {
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === viewId));
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-active", view.id === viewId));
  renderAll();
}

function startSession() {
  currentQueueType = els.queueType.value;
  currentQueue = buildQueue(currentQueueType);
  currentIndex = currentQueueType === "due" ? getTodaySession().index : 0;
  renderCurrentCard();
}

function buildQueue(type) {
  const book = ensureCurrentBook();
  const words = book.words;
  const progress = book.progress;
  if (type === "due") return buildTodayQueue();

  const today = Date.now();
  const byNeed = (a, b) => {
    const pa = progress[a.id] || createProgress();
    const pb = progress[b.id] || createProgress();
    return pa.dueAt - pb.dueAt || pb.wrong - pa.wrong || a.term.localeCompare(b.term);
  };

  const filtered = words.filter((word) => {
    const item = progress[word.id] || createProgress();
    if (type === "unmastered") return item.level < 4;
    if (type === "new") return item.seen === 0;
    if (type === "wrong") return item.wrong > 0;
    if (type === "all") return true;
    return item.dueAt <= today;
  });

  const sorted = filtered.sort(byNeed);
  return type === "unmastered" ? sorted : sorted.slice(0, 40);
}

function buildTodayQueue() {
  const session = getTodaySession();
  const words = ensureCurrentBook().words;
  return session.queueIds.map((id) => words.find((word) => word.id === id)).filter(Boolean);
}

function getTodaySession() {
  const book = ensureCurrentBook();
  const date = todayKey();
  if (!book.todaySession || book.todaySession.date !== date) {
    book.todaySession = createTodaySession(date, book);
    saveState();
    return book.todaySession;
  }

  const validIds = book.todaySession.queueIds.filter((id) => book.words.some((word) => word.id === id));
  const maxIndex = validIds.length;
  const index = Math.min(Math.max(book.todaySession.index || 0, 0), maxIndex);
  const pendingHardId = validIds[index] === book.todaySession.pendingHardId ? book.todaySession.pendingHardId : null;

  if (validIds.length !== book.todaySession.queueIds.length || index !== book.todaySession.index || pendingHardId !== book.todaySession.pendingHardId) {
    book.todaySession = { ...book.todaySession, queueIds: validIds, index, pendingHardId };
    saveState();
  }

  return book.todaySession;
}

function createTodaySession(date, book = ensureCurrentBook()) {
  const today = Date.now();
  const queueIds = book.words
    .filter((word) => (book.progress[word.id] || createProgress()).dueAt <= today)
    .sort((a, b) => {
      const pa = book.progress[a.id] || createProgress();
      const pb = book.progress[b.id] || createProgress();
      return pa.dueAt - pb.dueAt || pb.wrong - pa.wrong || a.term.localeCompare(b.term);
    })
    .slice(0, TODAY_REVIEW_LIMIT)
    .map((word) => word.id);

  return { date, queueIds, index: 0, pendingHardId: null };
}

function renderCurrentCard() {
  const word = currentQueue[currentIndex];
  const hasWord = Boolean(word);
  const mathBook = isMathBook();
  awaitingHardAdvance = isPendingHard(word);
  toggleReviewControls(hasWord);
  flashReviewCard();

  if (!hasWord) {
    if (currentQueueType === "due") {
      els.queueLabel.textContent = "今日复习已完成";
      els.promptText.textContent = "今天的 50 个已经背完";
      els.promptHint.textContent = "可以切换到未掌握单词或未学单词继续背。";
    } else {
      els.queueLabel.textContent = "没有待复习单词";
      els.promptText.textContent = "当前队列清空了";
      els.promptHint.textContent = "可以切换到其他队列继续练。";
    }
    els.answerBox.classList.add("is-hidden");
    els.feedbackText.textContent = "";
    return;
  }

  els.queueLabel.textContent = getCurrentQueueLabel();
  els.feedbackText.textContent = "";
  renderCardFace(els.promptText, word.term, mathBook, "display");
  renderCardFace(els.promptHint, word.example || "根据英文回忆中文释义。", mathBook, "text");
  renderCardFace(els.answerText, word.meaning, mathBook, "display");
  els.answerBox.classList.toggle("is-hidden", !awaitingHardAdvance);
  if (awaitingHardAdvance) {
    els.feedbackText.textContent = "已加入重点复习，先看一下释义。";
  }
  els.showAnswerButton.classList.remove("is-hidden");
}

function flashReviewCard() {
  const card = document.querySelector("#reviewCard");
  if (!card) return;
  card.classList.remove("is-advancing");
  window.requestAnimationFrame(() => card.classList.add("is-advancing"));
}

function isPendingHard(word) {
  if (!word || currentQueueType !== "due") return false;
  return getTodaySession().pendingHardId === word.id;
}

function normalizeText(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function toggleReviewControls(enabled) {
  els.showAnswerButton.disabled = !enabled || awaitingHardAdvance;
  els.rateButtons.forEach((button) => {
    const isHardButton = button.dataset.rating === "hard";
    button.disabled = !enabled || (awaitingHardAdvance && !isHardButton);
    if (isHardButton) {
      button.textContent = awaitingHardAdvance ? "下一个" : "忘了";
      button.classList.toggle("next", awaitingHardAdvance);
    }
  });
}

function getCurrentQueueLabel() {
  const position = currentIndex + 1;
  if (currentQueueType === "due") return `${position} / ${currentQueue.length}`;
  if (currentQueueType === "unmastered") return `未掌握单词：第 ${position} 个`;
  if (currentQueueType === "new") return `未学单词：第 ${position} 个`;
  if (currentQueueType === "wrong") return `错词优先：第 ${position} 个`;
  return `第 ${position} 个`;
}

function revealAnswer() {
  const word = currentQueue[currentIndex];
  if (!word) return;
  els.answerBox.classList.remove("is-hidden");
  els.feedbackText.textContent = "";
}

function rateCurrent(rating) {
  const word = currentQueue[currentIndex];
  if (!word) return;

  if (rating === "hard" && awaitingHardAdvance) {
    advanceToNext();
    return;
  }

  recordRating(word, rating);

  if (rating === "hard") {
    markTodaySessionPendingHard(word.id);
    revealAnswer();
    awaitingHardAdvance = true;
    els.feedbackText.textContent = "已加入重点复习，先看一下释义。";
    toggleReviewControls(true);
    return;
  }

  advanceToNext();
}

function recordRating(word, rating) {
  const progress = getProgress(word.id);
  const correct = rating !== "hard";
  const next = scheduleNext(progress, rating);
  Object.assign(progress, next, {
    seen: progress.seen + 1,
    correct: progress.correct + (correct ? 1 : 0),
    wrong: progress.wrong + (correct ? 0 : 1),
    lastReviewed: Date.now()
  });

  const book = ensureCurrentBook();
  book.history.unshift({
    id: word.id,
    term: word.term,
    rating,
    correct,
    at: Date.now()
  });
  book.history = book.history.slice(0, 80);
  saveState();
  renderAll();
}

function advanceToNext() {
  currentIndex += 1;
  saveTodaySessionPosition();
  renderAll();
  renderCurrentCard();
}

function saveTodaySessionPosition() {
  if (currentQueueType !== "due") return;
  const session = getTodaySession();
  session.index = Math.min(currentIndex, session.queueIds.length);
  session.pendingHardId = null;
  saveState();
}

function markTodaySessionPendingHard(wordId) {
  if (currentQueueType !== "due") return;
  const session = getTodaySession();
  session.index = Math.min(currentIndex, session.queueIds.length);
  session.pendingHardId = wordId;
  saveState();
}

function scheduleNext(progress, rating) {
  const currentLevel = progress.level || 0;
  const intervalMap = {
    hard: 0,
    medium: Math.max(1, Math.round((progress.interval || 1) * 1.8)),
    easy: currentLevel === 0 ? 1 : Math.max(2, Math.round((progress.interval || 1) * 2.6)),
    mastered: Math.max(30, Math.round((progress.interval || 1) * 4))
  };
  const level =
    rating === "hard"
      ? Math.max(0, currentLevel - 1)
      : rating === "mastered"
        ? 5
        : Math.min(5, currentLevel + (rating === "easy" ? 1 : 0.5));
  const interval = intervalMap[rating];
  const dueAt = startOfToday() + interval * DAY;
  return { level, interval, dueAt };
}

function getProgress(id) {
  const book = ensureCurrentBook();
  if (!book.progress[id]) book.progress[id] = createProgress();
  return book.progress[id];
}

function renderAll() {
  renderStats();
  renderWordList();
  renderProgress();
}

function renderStats() {
  const today = Date.now();
  const book = ensureCurrentBook();
  const allDue = book.words.filter((word) => (book.progress[word.id] || createProgress()).dueAt <= today).length;
  const session = book.todaySession && book.todaySession.date === todayKey() ? book.todaySession : null;
  const due = session ? Math.max(0, session.queueIds.length - (session.index || 0)) : Math.min(TODAY_REVIEW_LIMIT, allDue);
  const mastered = book.words.filter((word) => (book.progress[word.id] || createProgress()).level >= 4).length;
  const todayHistory = book.history.filter((item) => item.at >= startOfToday());
  const accuracy = todayHistory.length
    ? Math.round((todayHistory.filter((item) => item.correct).length / todayHistory.length) * 100)
    : 0;

  els.dueCount.textContent = due;
  els.totalCount.textContent = book.words.length;
  els.masteredCount.textContent = mastered;
  els.accuracyToday.textContent = `${accuracy}%`;
}

function renderWordList() {
  const query = normalizeText(els.searchInput.value);
  const filter = els.statusFilter.value;
  const book = ensureCurrentBook();
  const words = book.words.filter((word) => {
    const progress = getProgress(word.id);
    const text = `${word.term} ${word.meaning}`.toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesFilter =
      filter === "all" ||
      (filter === "new" && progress.seen === 0) ||
      (filter === "learning" && progress.seen > 0 && progress.level < 4) ||
      (filter === "mastered" && progress.level >= 4) ||
      (filter === "wrong" && progress.wrong > 0);
    return matchesQuery && matchesFilter;
  });

  els.wordList.innerHTML = words
    .map((word) => {
      const progress = getProgress(word.id);
      const status = getStatus(progress);
      return `
        <article class="word-row">
          <div class="word-term">${formatInlineContent(word.term, isMathBook())}</div>
          <div class="word-meaning">${formatInlineContent(word.meaning, isMathBook())}</div>
          <span class="status-pill ${status.className}">${status.label}</span>
        </article>
      `;
    })
    .join("");
}

function getStatus(progress) {
  if (progress.level >= 5) return { label: "完全掌握", className: "mastered" };
  if (progress.wrong > 0 && progress.level < 4) return { label: "错词", className: "wrong" };
  if (progress.level >= 4) return { label: "已掌握", className: "mastered" };
  if (progress.seen > 0) return { label: "学习中", className: "" };
  return { label: "未学", className: "" };
}

function renderProgress() {
  const book = ensureCurrentBook();
  const buckets = [
    ["未学", (p) => p.seen === 0],
    ["初识", (p) => p.seen > 0 && p.level < 2],
    ["熟悉", (p) => p.level >= 2 && p.level < 4],
    ["掌握", (p) => p.level >= 4],
    ["完全掌握", (p) => p.level >= 5]
  ].map(([label, test]) => {
    const count = book.words.filter((word) => test(getProgress(word.id))).length;
    return { label, count };
  });
  const total = Math.max(1, book.words.length);

  els.levelBars.innerHTML = buckets
    .map(
      (bucket) => `
        <div class="bar-row">
          <span>${bucket.label}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${(bucket.count / total) * 100}%"></div></div>
          <strong>${bucket.count}</strong>
        </div>
      `
    )
    .join("");

  els.historyList.innerHTML = book.history.length
    ? book.history
        .slice(0, 12)
        .map((item) => {
          const time = new Date(item.at).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
          const label = item.rating === "mastered" ? "完全掌握" : item.rating === "easy" ? "记住" : item.rating === "medium" ? "模糊" : "忘了";
          return `<div class="history-item"><span>${escapeHtml(item.term)}</span><strong>${label}</strong><span>${time}</span></div>`;
        })
        .join("")
    : `<p class="subtle-text">还没有复习记录。</p>`;
}

function addWord(term, meaning, example = "") {
  const cleanTerm = term.trim();
  const cleanMeaning = meaning.trim();
  if (!cleanTerm || !cleanMeaning) return;

  const book = ensureCurrentBook();
  const id = makeId(cleanTerm);
  const existing = book.words.find((word) => word.id === id);
  if (existing) {
    existing.meaning = cleanMeaning;
    existing.example = example.trim();
  } else {
    book.words.push({ id, term: cleanTerm, meaning: cleanMeaning, example: example.trim() });
    book.progress[id] = createProgress();
  }
  book.words.sort((a, b) => a.term.localeCompare(b.term));
  saveState();
  renderAll();
}

function importBulkWords() {
  const lines = els.bulkImport.value.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  lines.forEach((line) => {
    const [term, ...rest] = line.split(/[,，\t]/);
    addWord(term, rest.join(" ").trim() || "待补充释义");
  });
  els.bulkImport.value = "";
}

async function submitVocabularyFile(event) {
  event.preventDefault();
  const endpoint = getSubmissionEndpoint();
  const bookName = els.submitBookName.value.trim();
  const email = els.submitEmail.value.trim();
  const file = els.submitFile.files[0];

  if (!endpoint) {
    setSubmissionStatus("提交后端还没有配置，先部署后端并填写 submission-config.js。", "error");
    return;
  }
  if (!bookName || !email || !file) {
    setSubmissionStatus("请填写词本名称、邮箱并选择 txt 文件。", "error");
    return;
  }
  if (!isTxtFile(file)) {
    setSubmissionStatus("这里只接收 .txt 文件。", "error");
    return;
  }
  if (file.size > SUBMISSION_MAX_FILE_SIZE) {
    setSubmissionStatus("文件不能超过 1 MB。", "error");
    return;
  }

  const formData = new FormData();
  formData.append("bookName", bookName);
  formData.append("email", email);
  formData.append("file", file, file.name);

  els.submitButton.disabled = true;
  setSubmissionStatus("正在提交到待审核目录...", "");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData
    });
    const result = await readJsonResponse(response);
    if (!response.ok) {
      throw new Error(result.message || "提交失败，请稍后再试。");
    }
    els.submitForm.reset();
    setSubmissionStatus(`提交成功，编号：${result.id || "pending"}`, "success");
  } catch (error) {
    setSubmissionStatus(error.message || "提交失败，请稍后再试。", "error");
  } finally {
    els.submitButton.disabled = false;
  }
}

function getSubmissionEndpoint() {
  return String(window.VOCAB_SUBMISSION_ENDPOINT || "").trim();
}

function isTxtFile(file) {
  return Boolean(file && /\.txt$/i.test(file.name));
}

function setSubmissionStatus(message, type) {
  els.submitStatus.textContent = message;
  els.submitStatus.className = `submit-status${type ? ` is-${type}` : ""}`;
}

async function readJsonResponse(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `vocab-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function ensureKatex() {
  if (document.querySelector(`link[data-katex="true"]`)) return;
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = KATEX_CSS_URL;
  style.dataset.katex = "true";
  document.head.appendChild(style);

  if (window.katex || document.querySelector(`script[data-katex="true"]`)) return;
  const script = document.createElement("script");
  script.src = KATEX_JS_URL;
  script.defer = true;
  script.dataset.katex = "true";
  script.addEventListener("load", () => renderAll());
  document.head.appendChild(script);
}

function isMathBook(book = ensureCurrentBook()) {
  return MATH_BOOK_IDS.has(book.id);
}

function renderCardFace(element, value, mathBook, mode) {
  if (!mathBook) {
    element.textContent = value;
    return;
  }
  if (mode === "text") {
    element.innerHTML = renderMathTextBlock(value);
    return;
  }
  element.innerHTML = renderMathBlock(value);
}

function formatInlineContent(value, mathBook) {
  if (!mathBook) return escapeHtml(value);
  return renderMathBlock(value, true);
}

function renderMathBlock(value, inline = false) {
  const text = String(value || "").trim();
  if (!text) return "";
  if (!window.katex) return `<span class="math-fallback">${escapeHtml(text)}</span>`;
  try {
    return window.katex.renderToString(text, {
      throwOnError: false,
      displayMode: !inline
    });
  } catch {
    return `<span class="math-fallback">${escapeHtml(text)}</span>`;
  }
}

function renderMathTextBlock(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const parts = text.split("；").map((part) => part.trim()).filter(Boolean);
  return parts
    .map((part) => {
      if (part.includes("=") || part.includes("\\int") || part.includes("\\ln") || part.includes("\\sin") || part.includes("\\cos") || part.includes("\\tan") || part.includes("\\cot") || part.includes("\\sec") || part.includes("\\csc") || part.includes("\\sqrt") || part.includes("\\frac") || part.includes("\\arctan") || part.includes("\\arcsin") || part.includes("\\pi") || part.includes("\\begin{cases}") || part.includes("\\cdot")) {
        return renderMathBlock(part, true);
      }
      return `<span>${escapeHtml(part)}</span>`;
    })
    .join("<br>");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
