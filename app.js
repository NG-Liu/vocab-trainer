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
  ["impose", "v. 强加；施加；征收", "The government imposed new rules."],
  ["pin down", "v. 确定；限制", "We need to pin down the exact date."],
  ["template", "n. 模板；样板", "Use this template to save time."],
  ["plug into", "v. 接通；接入；利用", "Plug the charger into the socket."],
  ["backbone", "n. 脊梁；骨干", "The volunteers are the backbone of the team."],
  ["narrative", "n. 叙述；故事", "The novel has a powerful narrative."],
  ["confusing", "adj. 令人困惑的", "The instructions are confusing."],
  ["alien", "adj. 陌生的；n. 外星人", "The new system felt alien to us."],
  ["metropolitan", "adj. 大都市的", "She works in a metropolitan area."],
  ["symposium", "n. 研讨会；专题讨论会", "Experts met at a symposium on education."],
  ["class", "n. 班级；课；阶级", "Our class starts at eight."],
  ["reluctant", "adj. 不情愿的；勉强的", "He was reluctant to speak in public."],
  ["toss the coin", "v. 抛硬币决定", "They tossed the coin to decide."],
  ["resentment", "n. 怨恨；愤懑", "He felt resentment toward the decision."],
  ["righteous", "adj. 正直的；正义的", "She had a righteous anger about the abuse."],
  ["indignation", "n. 愤慨；义愤", "Her voice was full of indignation."],
  ["council", "n. 委员会；议会", "The council approved the plan."],
  ["supervise", "v. 监督；指导", "A teacher must supervise the lab work."],
  ["perplex", "v. 使困惑", "The result perplexed the researchers."],
  ["on the contrary", "adv. 相反", "I thought he would refuse. On the contrary, he agreed."],
  ["interpretation", "n. 解释；阐释", "Their interpretation of the evidence differed."],
  ["daily", "adj./adv. 每日的；每天", "She does daily exercises."],
  ["diligent", "adj. 勤奋的；用功的", "He is a diligent student."],
  ["plateau", "n. 高原；平稳期", "The project hit a plateau."],
  ["slack", "adj. 松弛的；懈怠的；n. 懈怠；v. 放松", "Sales were slack in winter."],
  ["allege", "v. 断言；指称", "Witnesses allege that he lied."],
  ["diversity", "n. 多样性", "The city values cultural diversity."],
  ["get round to doing sth", "v. 终于抽出时间做某事", "I finally got round to cleaning my desk."],
  ["paralysis", "n. 瘫痪；无力", "Fear led to paralysis."],
  ["colleague", "n. 同事", "I asked a colleague for help."],
  ["varnish", "n. 清漆；v. 上清漆；粉饰", "The table needs a coat of varnish."],
  ["underlie", "v. 是...的基础；位于...之下", "Trust underlies every strong team."],
  ["assume", "v. 假定；认为；承担", "We assume the train is on time."],
  ["grievance", "n. 委屈；不满；申诉", "The workers filed a grievance."],
  ["adjoining", "adj. 相邻的；毗连的", "We stayed in an adjoining room."],
  ["chamber", "n. 房间；议院", "The council met in the main chamber."],
  ["inconclusive", "adj. 无定论的；不确定的", "The test results were inconclusive."],
  ["lobby", "v. 游说；n. 大厅", "Several groups lobbied for stricter safety rules."],
  ["grave", "n. 坟墓；adj. 严重的", "The doctor said his condition was grave."],
  ["upsetting", "adj. 令人难过的；令人不安的", "It was an upsetting experience for the whole family."],
  ["enlist", "v. 征募；争取...支持", "The campaign enlisted the support of local volunteers."],
  ["fumes", "n. 烟雾；废气", "The workers wore masks to avoid breathing the fumes."],
  ["prudent", "adj. 谨慎的；审慎的", "It would be prudent to save some money for emergencies."],
  ["paralysis by analysis", "分析过度导致的行动瘫痪", "Too many meetings created paralysis by analysis."],
  ["steward", "n. 管家；乘务员", "The steward checked the passenger list twice."],
  ["adequate", "adj. 足够的；合适的", "The room provides adequate storage space."],
  ["legislative", "adj. 立法的", "The bill faces strong legislative opposition."],
  ["congress", "n. 国会；代表大会", "Congress is expected to vote next week."],
  ["incentive", "n. 激励；刺激", "The tax break gave companies an incentive to invest."],
  ["senator", "n. 参议员", "The senator spoke in favor of the bill."],
  ["susceptible", "adj. 易受影响的；易患...的", "Young children are more susceptible to infection."],
  ["hormone", "n. 激素；荷尔蒙", "Stress can affect hormone levels."],
  ["trigger", "v. 引发；触发；n. 扳机", "The announcement triggered a wave of complaints."],
  ["reproductive", "adj. 生殖的；繁殖的", "Doctors are studying reproductive health in rural areas."],
  ["chronic", "adj. 长期的；慢性的", "He receives treatment for chronic back pain."],
  ["combat", "v. 与...斗争；n. 战斗", "The medicine helps combat infection."],
  ["domestic", "adj. 国内的；家庭的", "Domestic demand remained strong last quarter."],
  ["one-shot deal", "一次性交易；一锤子买卖", "The company treated the order as a one-shot deal."],
  ["devastating", "adj. 毁灭性的；极令人震惊的", "The earthquake had a devastating effect on the town."],
  ["be obliged to do sth", "不得不做某事；有义务做某事", "We are obliged to follow the court's decision."],
  ["diffuse", "v. 扩散；散布；缓解", "The government tried to diffuse the tension."],
  ["gloom", "n. 阴暗；忧郁；沮丧", "A sense of gloom hung over the office after the announcement."],
  ["endure", "v. 忍受；忍耐；持续", "She endured years of hardship without complaint."],
  ["distributed", "adj. 分布式的；分散的", "The company runs a distributed network across several cities."],
  ["dazzling", "adj. 耀眼的；令人赞叹的", "She gave a dazzling performance on opening night."],
  ["envisage", "v. 设想；展望", "Few people envisaged how quickly the town would change."],
  ["descendant", "n. 后代；子孙", "He is a direct descendant of the village founder."],
  ["passing fad", "一时的风尚；短暂流行", "The editor dismissed the craze as a passing fad."],
  ["prospect", "n. 前景；可能性", "The prospect of working abroad excited her."],
  ["merge", "v. 合并；融合", "The two firms agreed to merge by the end of the year."],
  ["hyperactive", "adj. 过度活跃的；极度亢奋的", "The child became hyperactive after too much sugar."],
  ["hyper", "adj. 过度兴奋的；过于紧张的", "He gets hyper before every important match."],
  ["might", "n. 力量；威力", "The empire used its military might to expand its borders."],
  ["surpass", "v. 超过；胜过", "Her latest novel surpasses her earlier work in depth."],
  ["concentrate", "v. 集中注意力；专注于", "Please concentrate on the question in front of you."],
  ["account for", "占；解释；导致", "Online orders now account for half of our sales."],
  ["on account of", "因为；由于", "The flight was delayed on account of bad weather."],
  ["affiliate", "n. 附属机构；联属机构", "The university opened a new affiliate in Shenzhen."],
  ["detrimental", "adj. 有害的；不利的", "Lack of sleep can be detrimental to your health."],
  ["scanty", "adj. 不足的；很少的", "The report was based on scanty evidence."],
  ["telecom", "n. 电信；电信行业", "The telecom sector is investing heavily in rural coverage."],
  ["last resort", "最后手段；无奈之举", "We will go to court only as a last resort."],
  ["infringement", "n. 侵犯；侵害；违背", "The company denied any infringement of the patent."],
  ["assist", "v. 帮助；协助", "A nurse assisted the doctor during the operation."],
  ["dismiss", "v. 解雇；驳回；不予理会", "The judge dismissed the case for lack of evidence."],
  ["sustain", "v. 维持；支撑；遭受", "The company must sustain growth without cutting quality."],
  ["reform", "n./v. 改革；改良", "The government introduced reforms to improve education."],
  ["conversely", "adv. 相反地", "High demand can raise prices; conversely, weak demand can lower them."],
  ["converse", "v. 交谈；adj. 相反的", "The two managers conversed privately after the meeting."],
  ["appoint", "v. 任命；委派", "The board appointed her chief executive."],
  ["designate", "v. 指定；命名", "The area was designated as a national park."],
  ["extract", "v. 提取；取出", "Scientists extracted DNA from the sample."],
  ["aggravate", "v. 使恶化；加重", "Lack of sleep can aggravate the condition."],
  ["moderate", "adj. 适度的；温和的；v. 缓和", "Exercise can moderate the effects of stress."],
  ["negotiation", "n. 协商；谈判", "After weeks of negotiation, both sides reached an agreement."],
  ["recite", "v. 背诵；朗诵", "Each student had to recite a short poem."],
  ["ritual", "n. 仪式；惯例", "Drinking tea became part of her morning ritual."],
  ["thread", "n. 线；线索；脉络", "A loose thread hung from his sleeve."],
  ["inspect", "v. 检查；视察", "Engineers inspected the bridge for structural damage."],
  ["come down with", "患上；染上（疾病）", "She came down with the flu before the exam."],
  ["serve up", "v. 端上；提供", "The restaurant serves up fresh seafood every evening."],
  ["territory", "n. 领土；领域；地盘", "The river marks the edge of their territory."],
  ["convention", "n. 惯例；大会；公约", "By convention, guests wait for the host to begin."],
  ["aerobic", "adj. 有氧的；需氧的", "Swimming is an excellent aerobic exercise."],
  ["fiber", "n. 纤维；纤维质", "Whole grains are a good source of dietary fiber."],
  ["eliminate", "v. 消除；淘汰", "The new filter eliminates harmful chemicals from the water."],
  ["severe", "adj. 严重的；严厉的", "The storm caused severe damage along the coast."],
  ["symptoms", "n. 症状（复数）", "Her symptoms improved after a few days of rest."],
  ["maintenance", "n. 维护；保养；维持", "Regular maintenance keeps the machine running safely."],
  ["complementary", "adj. 互补的；补充的", "The two approaches are complementary rather than competing."],
  ["compensating", "v. 补偿；弥补（compensate 的现在分词）", "The company is compensating residents for the damage."],
  ["mean value", "n. 平均值", "The mean value of the measurements was 18.4."],
  ["hostile", "adj. 敌对的；不友善的", "The proposal received a hostile response from local residents."],
  ["binding", "adj. 有约束力的；有法律效力的", "The court's decision is legally binding."],
  ["tricky", "adj. 棘手的；难处理的", "Finding the source of the leak was tricky."],
  ["tedious", "adj. 单调乏味的；冗长的", "Entering the data by hand was slow and tedious."],
  ["instructive", "adj. 有教育意义的；有启发性的", "The experiment was both simple and instructive."],
  ["scarce", "adj. 稀缺的；不足的", "Clean water becomes scarce during the dry season."],
  ["literally", "adv. 按字面地；确实地", "The word literally means 'without light'."],
  ["intentionally", "adv. 故意地；有意地", "He intentionally left the question unanswered."],
  ["eventually", "adv. 最终；终于", "After several attempts, she eventually passed the exam."],
  ["occasionally", "adv. 偶尔；有时", "We occasionally meet for coffee after work."],
  ["solely", "adv. 仅仅；完全", "The decision was based solely on cost."],
  ["initially", "adv. 最初；起初", "Initially, the plan seemed too expensive."],
  ["as long as", "只要；和...一样长", "You can borrow the car as long as you drive carefully."],
  ["indeed", "adv. 的确；实际上", "The results were indeed better than expected."],
  ["nevertheless", "adv. 然而；尽管如此", "The journey was difficult; nevertheless, they continued."],
  ["disgusting", "adj. 令人恶心的；令人厌恶的", "The kitchen was filled with a disgusting smell."],
  ["subsequent", "adj. 随后的；后来的", "Subsequent tests confirmed the original result."],
  ["reproduce", "v. 再现；复制；繁殖", "Other researchers failed to reproduce the result."],
  ["speculate", "v. 推测；猜测；投机", "It is too early to speculate about the cause."],
  ["speculate on", "v. 推测；猜测", "The report does not speculate on the cause of the accident."],
  ["lavish", "adj. 奢华的；过分慷慨的；v. 大量给予", "They held a lavish dinner for their guests."],
  ["shabbily", "adv. 衣着破旧地；寒酸地；不公正地", "He was shabbily dressed but spoke with confidence."],
  ["emigration", "n. 移居国外；移民出境", "Economic hardship led to widespread emigration from the region."],
  ["wilderness", "n. 荒野；荒地", "The hikers spent three days in the wilderness."],
  ["destiny", "n. 命运；天命", "She believed that meeting him was part of her destiny."],
  ["mural", "n. 壁画；墙画", "Artists painted a mural on the school wall."],
  ["celebrity", "n. 名人；名流", "The actor became a national celebrity."],
  ["suicide", "n. 自杀；自杀者", "The campaign offers support to people affected by suicide."],
  ["deprive", "v. 剥夺；使丧失", "Long working hours deprived him of sleep."],
  ["autobiography", "n. 自传", "She wrote an autobiography about her early life."],
  ["modesty", "n. 谦虚；谦逊；朴素", "Despite her success, she spoke with modesty."],
  ["detect", "v. 发现；察觉；侦测", "The device can detect small changes in temperature."],
  ["concisely", "adv. 简洁地；简明地", "Please state your main point concisely."],
  ["activate", "v. 启动；激活", "Press this button to activate the device."],
  ["implement", "v. 实施；执行", "The school will implement the new policy next term."],
  ["anticipate", "v. 预期；预料；期待", "We anticipate a rise in demand this winter."],
  ["stale", "adj. 不新鲜的；陈旧的；乏味的", "The bread had gone stale by morning."],
  ["incur", "v. 招致；遭受（费用、债务、损失等）", "The delay may incur extra costs."],
  ["curb", "v. 抑制；控制；n. 路缘石", "The city introduced measures to curb pollution."],
  ["harness", "v. 利用（能量、资源）；控制；n. 马具；安全带", "The project aims to harness solar energy."],
  ["predominant", "adj. 占主导地位的；显著的", "Blue is the predominant color in the painting."],
  ["border", "n. 边界；边境；v. 与...接壤", "The river forms the border between the two countries."],
  ["enterprise", "n. 企业；事业；进取心", "She started her own enterprise after college."],
  ["compliment", "n./v. 赞美；称赞；恭维", "He complimented her on the clear presentation."],
  ["dismay", "n. 沮丧；惊愕；v. 使沮丧", "To our dismay, the event was cancelled."],
  ["recreation", "n. 娱乐；消遣", "Reading is her favorite form of recreation."],
  ["retain", "v. 保留；保持；留住", "The company hopes to retain its best employees."],
  ["pertain", "v. 与...有关；附属", "These rules pertain to all new students."],
  ["detain", "v. 拘留；扣押；耽搁", "The police detained the suspect for questioning."],
  ["weary", "adj. 疲倦的；厌倦的；v. 使疲倦", "After the long trip, everyone felt weary."],
  ["mere", "adj. 仅仅的；只不过的", "It was a mere coincidence."],
  ["pension", "n. 养老金；退休金", "She receives a pension after retiring."],
  ["benevolent", "adj. 仁慈的；乐善好施的", "The benevolent donor funded the library."],
  ["avenue", "n. 大街；途径；方法", "This program offers an avenue for young artists."],
  ["prolong", "v. 延长；拖延", "The heavy rain prolonged the match."],
  ["loom", "v. 隐约出现；逼近；n. 织布机", "Dark clouds loomed over the city."],
  ["boast", "v. 自夸；以...为傲；n. 自夸的话", "The museum boasts a large collection of modern art."],
  ["blush", "v./n. 脸红；红晕", "She blushed when everyone praised her."],
  ["dense", "adj. 稠密的；浓密的；密集的", "The forest was so dense that little sunlight reached the ground."],
  ["compact", "adj. 紧凑的；小巧的；v. 压紧", "The compact camera fits easily in a small bag."],
  ["fluctuate", "v. 波动；起伏", "Prices fluctuate with demand."],
  ["exert", "v. 运用；施加", "The group exerts considerable influence on policy."],
  ["snatch", "v. 抢夺；迅速抓取；n. 抢夺", "He snatched the note from the table."],
  ["bold", "adj. 大胆的；醒目的；粗体的", "It was a bold decision to launch the project so early."],
  ["bald", "adj. 秃头的；光秃的；直截了当的", "He is bald but still looks very young."],
  ["bleak", "adj. 阴冷的；荒凉的；没有希望的", "The outlook seemed bleak after the loss."],
  ["swallow", "v. 吞下；忍受；n. 燕子", "He swallowed the medicine with water."],
  ["scatter", "v. 撒；散开；驱散", "The wind scattered the leaves across the road."],
  ["petition", "n. 请愿书；v. 请愿；请求", "Residents signed a petition to protect the park."],
  ["impetus", "n. 推动力；促进因素", "The new funding gave the project fresh impetus."],
  ["drastic", "adj. 激烈的；严厉的；极端的", "The company took drastic measures to cut costs."],
  ["tragedy", "n. 悲剧；惨剧", "The accident was a tragedy for the whole community."],
  ["render", "v. 给予；提供；作出；使成为", "The court rendered its decision on Friday."],
  ["damp", "adj. 潮湿的；n. 潮气", "The towels were still damp after the rain."],
  ["dump", "v. 倾倒；丢弃；n. 垃圾场", "Do not dump waste into the river."],
  ["humid", "adj. 潮湿闷热的", "It is hot and humid today."],
  ["humiliate", "v. 使蒙羞；羞辱", "The comment humiliated him in front of others."],
  ["humble", "adj. 谦逊的；卑微的；v. 使谦卑", "Despite her success, she remained humble."],
  ["chunk", "n. 大块；厚块", "She cut the cheese into chunks."],
  ["compatible", "adj. 兼容的；可共存的", "This charger is compatible with the new phone."],
  ["consent", "n./v. 同意；准许", "The patient gave written consent to the treatment."],
  ["summit", "n. 山顶；最高点；峰会", "The leaders met at a summit to discuss climate change."],
  ["missionary", "n. 传教士；adj. 传教的", "The missionary worked in several remote communities."],
  ["intermittent", "adj. 间歇的；断断续续的", "Intermittent rain continued throughout the afternoon."],
  ["commit", "v. 承诺；投入；犯（错误或罪行）", "The company committed itself to reducing waste."],
  ["committee", "n. 委员会", "The committee will review the proposal next week."],
  ["commission", "n. 委员会；佣金；委托；v. 委任", "The government appointed a commission to investigate the accident."],
  ["transmit", "v. 传输；传播；传染", "The device transmits data through a wireless connection."],
  ["transaction", "n. 交易；业务", "The bank records every transaction automatically."],
  ["transit", "n. 运输；通行；中转", "The goods were damaged in transit."],
  ["transient", "adj. 短暂的；暂时的", "The sudden improvement proved to be transient."],
  ["transparent", "adj. 透明的；清楚易懂的；公开的", "The organization must be transparent about its spending."],
  ["opaque", "adj. 不透明的；晦涩难懂的", "The instructions were too opaque for most readers."],
  ["striking", "adj. 显著的；引人注目的", "There is a striking similarity between the two designs."],
  ["strike", "v. 打击；突然想到；罢工；n. 罢工；袭击", "The workers voted to go on strike."],
  ["blunt", "adj. 钝的；直率的；v. 使变钝", "This knife is too blunt to cut the bread."],
  ["blunder", "n./v. 愚蠢的错误；犯大错", "The manager blundered by ignoring the warning."],
  ["vertical", "adj. 垂直的；竖直的", "Draw a vertical line through the center."],
  ["cliff", "n. 悬崖；峭壁", "They stood at the edge of the cliff."],
  ["stiff", "adj. 僵硬的；不灵活的；艰难的", "I woke up with a stiff neck."],
  ["steep", "adj. 陡峭的；急剧的；昂贵的", "The path is too steep for young children."],
  ["formidable", "adj. 强大的；难以对付的；令人敬畏的", "She is a formidable opponent in debate."],
  ["theorize", "v. 提出理论；从理论上说明", "Scientists theorize that the lake was formed by a glacier."],
  ["end up doing sth", "最终做某事；到头来做某事", "We missed the last bus and ended up walking home."],
  ["carve", "v. 雕刻；切（熟肉）", "She carved the child's name into the wooden box."],
  ["abdominal", "adj. 腹部的", "The patient complained of severe abdominal pain."],
  ["regime", "n. 政权；政体；制度", "The military regime banned independent newspapers."],
  ["colonialism", "n. 殖民主义", "The museum examines the lasting effects of colonialism."],
  ["punctuality", "n. 准时；守时", "Punctuality is especially important in job interviews."],
  ["hospitality", "n. 好客；殷勤款待", "We were touched by the warmth of their hospitality."],
  ["revenue", "n. 收入；收益；财政收入", "Advertising provides most of the website's revenue."],
  ["criterion", "n. 标准；准则", "Cost should not be the only criterion when choosing a school."],
  ["roundabouts", "n. 环形交叉路口；环岛", "There are several roundabouts on the road into town."],
  ["controversial", "adj. 有争议的；引发争论的", "The council approved the controversial housing project."],
  ["pick up the pace", "加快速度；加快节奏", "We need to pick up the pace if we want to finish before dark."],
  ["assess", "评估；评定；估算", "The committee will assess the risks before approving the plan."],
  ["interpret", "解释；理解；口译", "People may interpret the same event in different ways."],
  ["resume", "继续；重新开始；恢复", "The meeting will resume after a short break."],
  ["with regard to", "关于；就……而言", "With regard to your request, we will reply by Friday."],
  ["stand up for", "支持；维护；捍卫", "She always stands up for her friends when they are treated unfairly."],
  ["go in for", "喜欢；参加；选择", "He does not usually go in for competitive sports."],
  ["stock up for", "为……储备；囤积", "We stocked up for the winter before the roads were closed."],
  ["implied", "暗示的；含蓄的", "Her silence implied that she disagreed with the decision."],
  ["penalized", "受处罚的；被罚的", "The team was penalized for breaking the rules."],
  ["affair", "事情；事务；风流韵事", "The whole affair was handled with great care."],
  ["ethnic", "种族的；民族的", "The city is home to many different ethnic communities."],
  ["inquiry", "询问；调查；查询", "We sent an inquiry about the delivery date."],
  ["sibling", "兄弟；姐妹；兄弟姐妹", "She is the youngest of three siblings."],
  ["naive", "天真的；幼稚的；缺乏经验的", "It was naive to believe that the problem would disappear by itself."],
  ["confront", "面对；对抗；使面对", "We must confront the problem before it becomes worse."],
  ["emerge from", "从……中出现；摆脱", "The company emerged from the crisis stronger than before."],
  ["spoiled", "被宠坏的；腐败的；变质的", "The spoiled food had to be thrown away."],
  ["revise", "修订；修改；复习", "I need to revise my essay before submitting it."],
  ["fatigue", "疲劳；疲乏", "Long hours of work can lead to mental fatigue."],
  ["wipe off", "擦掉；抹去；清除", "He wiped the mud off his shoes before entering."],
  ["intently", "adv. 专心地；专注地", "The students listened intently as the scientist explained the experiment."],
  ["in effect", "实际上；事实上；生效", "The new rule is, in effect, a ban on private cars in the city center."],
  ["discernible", "adj. 可辨认的；可察觉的", "There was no discernible change in the patient's condition."],
  ["intensive", "adj. 密集的；强化的", "The patient spent two weeks in intensive care after the accident."],
  ["intensity", "n. 强度；强烈程度", "The intensity of the storm surprised even experienced sailors."],
  ["contented", "adj. 满足的；满意的", "After a quiet dinner with her family, she felt peaceful and contented."],
  ["dietary", "adj. 饮食的；膳食的", "The doctor recommended several dietary changes to lower his blood pressure."],
  ["endeavor", "v. 努力；尽力；n. 努力；尝试", "The researchers endeavor to develop a safer and cheaper treatment."],
  ["native", "adj. 本土的；当地的；n. 本地人", "The guide introduced us to several native plants found only on the island."],
  ["eclipsed", "v. 使相形见绌；遮住（eclipse 的过去式或过去分词）", "Her latest achievement eclipsed everything she had done before."],
  ["suppress", "v. 抑制；压制；镇压", "The government tried to suppress the report, but journalists published it anyway."],
  ["distinct", "adj. 清晰的；明显不同的", "The two theories are distinct, although they address the same problem."],
  ["shaky", "adj. 摇晃的；不稳固的；不可靠的", "The witness gave a shaky account of what had happened."],
  ["religious", "adj. 宗教的；虔诚的", "The city is home to people from many different religious traditions."],
  ["predominance", "n. 优势；主导地位", "The predominance of cars has transformed the design of modern cities."],
  ["disposition", "n. 性情；性格；倾向", "Her cheerful disposition made it easy for new colleagues to approach her."],
  ["temptation", "n. 诱惑；诱惑物", "He resisted the temptation to check his phone during the meeting."],
  ["imprison", "v. 监禁；关押", "The regime imprisoned many critics without a fair trial."],
  ["ecological", "adj. 生态的；生态学的", "The project aims to reduce the ecological damage caused by construction."],
  ["surplus", "n. 过剩；剩余；adj. 过剩的", "The country has a surplus of wheat after a particularly good harvest."],
  ["eloquent", "adj. 雄辩的；有说服力的；传神的", "She gave an eloquent defense of the proposed reforms."],
  ["deploy", "v. 部署；调动；有效利用", "The army was ordered to deploy additional units along the border."],
  ["feeble", "adj. 虚弱的；微弱的；无力的", "His voice was feeble after the illness."],
  ["supplement", "n. 补充物；增刊；v. 补充", "The appendix supplements the main report with detailed statistics."],
  ["plausible", "adj. 貌似合理的；可信的", "Her explanation was plausible, but the investigators still wanted proof."],
  ["flock", "n. 一群；大量人群；v. 聚集", "A flock of birds rose from the marsh at dawn."],
  ["tender", "adj. 温柔的；嫩的；n. 投标；v. 提出；投标", "The leaves were too tender to withstand the cold wind."],
  ["redundant", "adj. 多余的；被裁员的", "The report contains several redundant sections that should be removed."],
  ["immense", "adj. 巨大的；广大的", "The museum houses an immense collection of maps."],
  ["amiable", "adj. 和蔼可亲的；友好的", "Despite the tense meeting, he remained amiable and patient."],
  ["employment", "n. 就业；雇用", "The factory provides employment for hundreds of local residents."],
  ["absurd", "adj. 荒谬的；不合理的", "It would be absurd to blame the weather for a missed deadline."],
  ["numerical", "adj. 数字的；数值的", "The software can perform numerical calculations with high precision."],
  ["vulnerable", "adj. 脆弱的；易受伤害的", "Young seedlings are particularly vulnerable to sudden changes in temperature."],
  ["plot", "n. 情节；阴谋；小块土地；v. 密谋；绘制", "The novel's plot turns on a secret kept for thirty years."],
  ["extravagant", "adj. 奢侈的；过度的；挥霍的", "They spent an extravagant amount on decorations for a one-day event."],
  ["evident", "adj. 明显的；显然的", "The cause of the failure was evident from the first inspection."],
  ["tremble", "v. 颤抖；发抖；n. 颤抖", "Her hands began to tremble as she opened the letter."],
  ["abundant", "adj. 丰富的；充足的", "The region has abundant sunshine and fertile soil."],
  ["ridiculous", "adj. 荒谬的；可笑的", "The idea of finishing the bridge in one day sounds ridiculous."],
  ["superfluous", "adj. 多余的；过剩的", "The extra paragraph was superfluous and added nothing to the argument."],
  ["enormous", "adj. 巨大的；庞大的", "An enormous crowd gathered outside the stadium."],
  ["fraud", "n. 欺诈；骗局；骗子", "The company was accused of fraud after it falsified its accounts."],
  ["vigorous", "adj. 充满活力的；强有力的", "The debate prompted a vigorous exchange of views."],
  ["complement", "n. 补充物；补足语；v. 补充；与……相配", "The wine was chosen to complement the meal."],
  ["hasty", "adj. 匆忙的；草率的", "A hasty decision could create more problems later."],
  ["landlord", "n. 房东；地主", "The landlord agreed to repair the broken heating system."],
  ["flare", "v. 突然加剧；闪耀；n. 闪光；信号弹", "Tensions flared after the announcement was made."],
  ["compassion", "n. 同情；怜悯", "The nurse treated every patient with compassion."],
  ["retreat", "v. 撤退；退却；n. 撤退；静修处", "The army was forced to retreat when supplies ran short."],
  ["multiply", "v. 乘；成倍增加；繁殖", "The bacteria multiply rapidly in warm water."],
  ["ignorant", "adj. 无知的；不了解的", "He was ignorant of the risks involved."],
  ["sheer", "adj. 陡峭的；纯粹的；完全的", "The climbers faced a sheer wall of rock."],
  ["frame", "n. 框架；画框；v. 给……装框；构成", "The report provides a useful frame for understanding the debate."],
  ["haste", "n. 匆忙；急躁", "In his haste to leave, he forgot the keys on the table."],
  ["pessimistic", "adj. 悲观的", "Analysts are pessimistic about the company's short-term prospects."],
  ["flee", "v. 逃离；逃跑", "Thousands of families were forced to flee the flooded region."],
  ["agency", "n. 机构；代理处；作用", "The travel agency arranged every detail of our trip."],
  ["thrill", "n. 激动；兴奋；v. 使兴奋", "The final goal sent a thrill through the crowd."],
  ["negative", "adj. 否定的；负面的；n. 负数；底片", "The test result was negative, so no further treatment was needed."],
  ["conceive", "v. 构想；设想；怀孕", "It is difficult to conceive of a city without public transport."],
  ["rough", "adj. 粗糙的；艰难的；大致的", "The first few months in the new job were rough."],
  ["neglect", "v. 忽视；疏忽；n. 忽视；疏忽", "The building fell into disrepair because its owners neglected it."],
  ["multitude", "n. 大量；众多；群众", "A multitude of factors influenced the final decision."],
  ["deceive", "v. 欺骗；蒙骗", "The advertisement was designed to deceive consumers about the product's quality."],
  ["flame", "n. 火焰；激情；v. 燃烧", "A single flame flickered in the dark."],
  ["treaty", "n. 条约；协定", "The two countries signed a treaty to protect the river."],
  ["bore", "v. 使厌烦；n. 令人厌烦的人；孔", "The long lecture began to bore even the most patient students."],
  ["prevalent", "adj. 普遍的；流行的", "The belief was once prevalent, but it has now been widely questioned."],
  ["glow", "v. 发光；容光焕发；n. 光辉", "The windows began to glow as the sun set behind the hills."],
  ["defer", "v. 推迟；听从；遵从", "The committee decided to defer the vote until more evidence was available."],
  ["carpenter", "n. 木匠；木工", "The carpenter built a sturdy table from locally sourced wood."],
  ["implicit", "adj. 含蓄的；不言明的；内含的", "There was an implicit agreement that neither side would discuss the matter publicly."],
  ["stride", "n. 大步；步幅；v. 大步走", "She strode across the platform to accept the award."],
  ["refer", "v. 提及；参考；涉及", "The report refers to several studies published in the past decade."],
  ["scarcity", "n. 缺乏；稀缺", "Water scarcity has become a serious problem in the region."],
  ["embody", "v. 体现；包含；具体表现", "The building embodies the architect's belief in simplicity."],
  ["idle", "adj. 闲置的；懒散的；v. 闲置；空转", "Several machines stood idle while the factory was being repaired."],
  ["symphony", "n. 交响乐；和谐的组合", "The orchestra performed Beethoven's Ninth Symphony to a full house."],
  ["flatter", "v. 奉承；使感到荣幸", "She knew he was trying to flatter her, but the compliment still made her smile."],
  ["negotiate", "v. 谈判；协商；洽谈", "The two sides met to negotiate a new labor contract."],
  ["radiate", "v. 辐射；散发；传播", "Warmth radiated from the fireplace throughout the room."],
  ["genre", "n. 类型；体裁", "The novel combines elements of the mystery and historical fiction genres."],
  ["faint", "adj. 微弱的；昏厥的；v. 晕倒", "A faint smell of smoke lingered in the hallway."],
  ["incorporate", "v. 包含；合并；融入", "The new design incorporates several features suggested by users."],
  ["prevail", "v. 盛行；占优势；获胜", "Common sense eventually prevailed over political pressure."],
  ["considerate", "adj. 体贴的；考虑周到的", "It was considerate of him to call before coming over."],
  ["glitter", "v. 闪耀；闪烁；n. 闪光", "Tiny lights glittered on the surface of the lake."],
  ["modify", "v. 修改；调整", "The engineer modified the design to make it safer."],
  ["verbal", "adj. 言语的；口头的", "The agreement was verbal, so neither party had a written record."],
  ["adolescent", "n. 青少年；adj. 青春期的", "The program helps adolescents cope with the pressures of school life."],
  ["polish", "v. 擦亮；润色；n. 光泽；上光剂", "She spent the evening polishing the introduction to her speech."],
  ["confer", "v. 授予；协商；商议", "The university will confer an honorary degree on the scientist."],
  ["scar", "n. 伤疤；创伤；v. 给……留下疤痕", "The accident left a small scar above his eyebrow."],
  ["manifest", "adj. 明显的；显然的；v. 表明；显现", "Her anxiety was manifest in the way she kept checking the door."],
  ["swarm", "n. 一大群；蜂群；v. 蜂拥而至", "Fans began to swarm around the singer outside the theater."],
  ["indicate", "v. 表明；暗示；指出", "The findings indicate that the policy needs to be revised."],
  ["earnest", "adj. 认真的；诚挚的；n. 认真；真挚", "He made an earnest promise to support the project."],
  ["crawl", "v. 爬行；缓慢行进；n. 爬行", "Traffic crawled along the highway after the accident."],
  ["considerable", "adj. 相当大的；重要的", "The renovation required a considerable amount of time and money."],
  ["indication", "n. 迹象；指示；表明", "There is no indication that the storm will weaken tonight."],
  ["grace", "n. 优雅；恩典；宽限期；v. 使增色", "She accepted the criticism with remarkable grace."],
  ["illustrate", "v. 说明；阐明；给……加插图", "The example illustrates why small errors can have serious consequences."],
  ["lag", "v. 落后；滞后；n. 延迟", "The local economy continues to lag behind the rest of the country."],
  ["imply", "v. 暗示；意味着", "His silence seemed to imply that he disagreed."],
  ["reference", "n. 参考；提及；推荐信；v. 查阅", "The article makes frequent reference to recent climate data."],
  ["exemplify", "v. 例证；是……的典型", "Her career exemplifies the opportunities created by lifelong learning."],
  ["disgrace", "n. 耻辱；丢脸；v. 使蒙羞", "The corruption scandal brought disgrace on the entire organization."],
  ["simultaneous", "adj. 同时发生的；同时的", "The translation was broadcast simultaneously in three languages."],
  ["prior", "adj. 先前的；优先的", "Applicants with prior experience will be considered first."],
  ["assimilate", "v. 吸收；同化；理解", "It took her several weeks to assimilate the new information."],
  ["hint", "n. 暗示；提示；v. 暗示", "He dropped a hint that he might leave the company soon."],
  ["stroll", "n. 散步；漫步；v. 散步", "We took a leisurely stroll along the river after dinner."],
  ["exaggerate", "v. 夸大；夸张", "The article exaggerates the risks without presenting reliable evidence."],
  ["linger", "v. 逗留；徘徊；持续存在", "The smell of rain lingered in the air long after the storm had passed."],
  ["carpet", "n. 地毯；v. 给……铺地毯", "A thick carpet covered the floor of the old library."],
  ["imitate", "v. 模仿；仿效", "Children often imitate the gestures and expressions of adults."],
  ["avail", "v. 有用；帮助；n. 效用", "These warnings will be of little avail unless people take them seriously."],
  ["enrol", "v. 登记；注册；入学", "She decided to enrol in an evening course in economics."],
  ["demonstrate", "v. 证明；展示；示范", "The experiment demonstrates how quickly the material responds to heat."],
  ["scandal", "n. 丑闻；丑事", "The scandal forced the minister to resign."],
  ["elapse", "v. （时间）流逝；过去", "Several months elapsed before the project received funding."],
  ["crew", "n. 全体工作人员；船员；机组人员；v. 为……配备人员", "The flight crew asked passengers to remain seated."],
  ["applicable", "adj. 适用的；适当的", "The discount is applicable only to full-time students."],
  ["glare", "v. 怒视；发出刺眼的光；n. 怒视；刺眼的光", "The glare from the headlights made it difficult to see."],
  ["timber", "n. 木材；木料", "The old bridge was built from local timber."],
  ["diminish", "v. 减弱；减少；降低", "The pain began to diminish after a few hours."],
  ["plight", "n. 困境；苦境", "The report drew attention to the plight of displaced families."],
  ["screw", "n. 螺丝；螺钉；v. 拧紧；旋紧", "Tighten the screw before you replace the cover."],
  ["dawn", "n. 黎明；破晓；v. 开始明白", "It dawned on me that I had left my passport at home."],
  ["fulfil", "v. 履行；实现；满足", "She worked hard to fulfil her promise to the community."],
  ["probe", "n. 探针；调查；v. 探查；调查", "The committee was set up to probe the cause of the accident."],
  ["stare", "v. 盯着看；凝视；n. 盯视", "It is rude to stare at people on public transport."],
  ["famine", "n. 饥荒；严重缺粮", "The drought led to famine in several parts of the country."],
  ["mute", "adj. 沉默的；哑的；v. 使静音", "Please mute your microphone when you are not speaking."],
  ["agenda", "n. 议程；待办事项", "The first item on the agenda is the annual budget."],
  ["alight", "v. 下车；落下；adj. 燃烧着的", "She alighted from the train at the next station."],
  ["conquer", "v. 征服；战胜；克服", "He finally conquered his fear of public speaking."],
  ["stuff", "n. 东西；材料；v. 塞满；填塞", "Please put your stuff in the locker before the class begins."],
  ["slight", "adj. 轻微的；略微的；v. 轻视；冷落", "There has been a slight improvement in air quality."],
  ["stem", "n. 茎；词干；v. 阻止；遏制；起源于", "The new measures may help stem the spread of the disease."],
  ["investigate", "v. 调查；研究", "The police are investigating the cause of the fire."],
  ["blight", "n. 枯萎病；祸害；v. 破坏；损害", "Poor drainage continues to blight farms in the valley."],
  ["gaze", "v. 凝视；注视；n. 凝视", "She gazed out of the window as the train crossed the bridge."],
  ["strip", "v. 剥去；脱掉；n. 条；带", "Workers stripped the old paint from the doors."],
  ["ignite", "v. 点燃；引发", "A single spark can ignite the dry grass."],
  ["advent", "n. 到来；出现", "The advent of digital photography changed the industry."],
  ["cradle", "n. 摇篮；发源地；v. 轻轻抱住", "The region is regarded as the cradle of the ancient civilization."],
  ["defeat", "v. 击败；战胜；n. 失败；挫败", "The team suffered a narrow defeat in the final."],
  ["lump", "n. 肿块；块；v. 把……归在一起", "He discovered a small lump on his neck."],
  ["scheme", "n. 计划；方案；阴谋；v. 密谋", "The government introduced a scheme to support small businesses."],
  ["plunge", "v. 猛跌；骤降；投入；n. 骤降", "The announcement caused the company's shares to plunge."],
  ["offend", "v. 冒犯；使不适；违反", "I did not mean to offend anyone with my remark."],
  ["dusk", "n. 黄昏；暮色", "We reached the village at dusk."],
  ["acquaintance", "n. 熟人；相识；了解", "He is an old acquaintance from my university days."],
  ["sharpness", "n. 锋利；敏锐；清晰", "The knife lost its sharpness after years of use."],
  ["uneven", "adj. 不平坦的；不均匀的；不均衡的", "The path was rough and uneven, making the climb more difficult."],
  ["circumstance", "n. 情况；环境；条件", "Owing to unforeseen circumstances, the event has been postponed."],
  ["regardless of", "不管；不顾；无论", "He continued working regardless of the noise around him."],
  ["sit for", "参加（考试）；出席（会议）；代表", "She will sit for the entrance examination in June."],
  ["stern", "adj. 严厉的；严峻的；n. 船尾", "The teacher gave a stern warning about plagiarism."],
  ["hindrance", "n. 阻碍；障碍；妨碍", "Poor transport is a serious hindrance to economic development."],
  ["rigid", "adj. 僵硬的；死板的；严格的", "The school has rigid rules about dress and attendance."],
  ["ethically", "adv. 伦理上；道德上；合乎道德地", "The company must act ethically in all its business dealings."],
  ["chancellor", "n. 大臣；总理；校长；大法官", "The German chancellor opened the summit."],
  ["eligible", "adj. 有资格的；符合条件的", "Only full-time students are eligible for the grant."],
  ["exchequer", "n. 财政部；国库", "The new spending program will put extra pressure on the national exchequer."],
  ["upfront", "adj. 直率的；坦率的；预付的", "The manager was upfront about all potential costs."],
  ["indulgent", "adj. 纵容的；放纵的；迁就的", "He was indulgent with his grandchildren."],
  ["subsidise", "v. 资助；补贴；给予补助", "The city subsidises public transport for students."],
  ["claimant", "n. 索赔人；申请人", "Each claimant must provide evidence of loss."],
  ["exclude...from...", "把……排除在……之外", "The contract excludes part-time workers from the pension scheme."],
  ["dependency", "n. 依赖；依靠；附属地", "The region's heavy dependency on imports makes it vulnerable."],
  ["falsehood", "n. 谎言；虚假；不实", "The newspaper published a falsehood about the minister."],
  ["as though/as if", "好像；仿佛；如同", "She spoke as though she had known him, as if they were old friends."],
  ["administration", "n. 管理；行政；政府", "The university administration announced a new timetable."],
  ["redefine", "v. 重新定义；重新界定", "The discovery may redefine our understanding of the disease."],
  ["entitlement", "n. 权利；资格；应得的权益", "The pension system grants every worker an entitlement."],
  ["nuisance", "n. 麻烦事；令人讨厌的人或事物", "The noisy construction site has become a constant nuisance."],
  ["tort", "n. 侵权；侵权行为", "The lawyer specializes in tort law."],
  ["excessive", "adj. 过度的；过多的；过分的", "Excessive use of antibiotics can cause serious health problems."],
  ["undergraduate", "n. 本科生；adj. 本科的", "She is an undergraduate studying economics."],
  ["fearsomely", "adv. 可怕地；令人生畏地", "The storm became fearsomely powerful."],
  ["tuition fees", "n. 学费", "Many students take out loans to pay their tuition fees."],
  ["bachelor's degree", "n. 学士学位", "She earned a bachelor's degree in engineering."],
  ["conservative", "adj. 保守的；n. 保守派；保守党人", "Older employees were more conservative about adopting the new system."],
  ["legitimate", "adj. 合法的；正当的；合理的", "The court recognized the tenant's legitimate claim to compensation."],
  ["row", "n. 一排；一行；争吵；v. 划船；争吵", "A row of old houses faces the village green."],
  ["collaborative", "adj. 合作的；协作的", "The project succeeded because of a collaborative effort between teachers and engineers."],
  ["legitimacy", "n. 合法性；正当性", "The election results strengthened the new government's legitimacy."],
  ["dispute", "n./v. 争论；争端；对……提出异议", "The two sides settled the boundary dispute before it reached the courts."],
  ["lucrative", "adj. 赚钱的；获利丰厚的", "She left a lucrative job to start a small publishing company."],
  ["entrepreneur", "n. 企业家；创业者", "The young entrepreneur built a successful business from a simple idea."],
  ["quote", "n./v. 引用；引述；报价", "The article quotes a scientist who has studied the disease for decades."],
  ["upstart", "n./adj. 暴发户；自以为是的新手；新贵的", "The upstart company soon became a serious rival to established brands."],
  ["prestige", "n. 威望；声望", "The university has earned international prestige for its medical research."],
  ["cement", "n. 水泥；v. 巩固；加强", "The shared experience cemented the friendship between the two families."],
  ["perpetuate", "v. 使持续；使长存；使永久存在", "Good education should challenge stereotypes rather than perpetuate them."],
  ["scattered", "adj. 分散的；零散的", "Scattered clouds cleared by noon, revealing the mountains beyond the valley."],
  ["a handful of", "少数几个；一把；少量的", "Only a handful of residents attended the meeting, but their comments changed the proposal."],
  ["liberal", "adj. 开明的；自由的；宽松的", "The committee adopted a liberal policy on working from home."],
  ["archaeological", "adj. 考古的；考古学的", "The excavation uncovered archaeological evidence of an ancient settlement."],
  ["contemptuous", "adj. 鄙视的；轻蔑的", "He gave a contemptuous laugh when asked to apologize."],
  ["prominent", "adj. 著名的；突出的；显眼的", "A prominent scientist has urged the government to act quickly."],
  ["diplomacy", "n. 外交；外交手腕", "Quiet diplomacy helped the two countries avoid a public confrontation."],
  ["journalism", "n. 新闻业；新闻报道", "Good journalism checks facts before publishing a story."],
  ["presuppose", "v. 预先假定；以……为前提", "The argument presupposes that every voter has access to reliable information."],
  ["full literacy", "充分读写能力；完全识字", "The program aims to achieve full literacy among adults in the region."],
  ["crafting", "n./v. 精心制作；精心制定", "Crafting a clear research question is the first step in a successful study."],
  ["coherent", "adj. 连贯的；有条理的", "She gave a coherent explanation of what had happened."],
  ["curricula", "n. 课程；课程体系（curriculum 的复数）", "Many schools are revising their curricula to include digital skills."],
  ["bear on", "v. 对……有影响；与……有关", "The new evidence may bear on the question of whether the policy worked."],
  ["exclusive", "adj. 独有的；排他的；专属的", "The resort has an exclusive beach reserved for its guests."],
  ["propaganda", "n. 宣传；宣传材料（通常带有偏向性）", "The government used propaganda to portray the failed campaign as a victory."],
  ["progressive", "adj. 进步的；革新的；逐步的", "The city introduced progressive policies to make public transport more accessible."],
  ["illuminate", "v. 照亮；阐明", "The report helps illuminate the reasons behind the decline in public trust."],
  ["set back", "v. 使受挫；使延迟", "A serious knee injury set back her training by several months."],
  ["cousin", "n. 表亲；堂亲；同类事物", "My cousin lives in a small village outside Dublin."],
  ["defendant", "n. 被告", "The defendant denied taking part in the robbery."],
  ["genome-wide", "adj. 全基因组的", "A genome-wide study has identified several genes linked to sleep patterns."],
  ["resemble", "v. 像；与……相似", "The finished building closely resembles the architect's original model."],
  ["there is more to it", "事情不止如此；背后还有隐情", "There is more to it than a simple staffing problem; the budget has also been cut."],
  ["outgrown", "v. 长得太大而不再适合；发展超越（outgrow 的过去分词）", "The children have outgrown their old clothes and need larger sizes."],
  ["orient", "v. 使适应；确定方向；使面向", "The course is oriented toward students who have little research experience."],
  ["intention", "n. 意图；打算", "Her intention was to finish the proposal before the meeting."],
  ["do justice to", "公正对待；充分展现；恰当处理", "The photograph does not do justice to the cathedral's enormous stained-glass windows."],
  ["excellence", "n. 优秀；卓越", "The school has a long tradition of excellence in music and drama."],
  ["dubious", "adj. 怀疑的；可疑的；不可靠的", "She was dubious about the promise of instant results."],
  ["heir", "n. 继承人", "The eldest son became heir to the family estate."],
  ["quarrel", "n./v. 争吵；吵架", "Their quarrel began over a trivial misunderstanding."],
  ["ambiguous", "adj. 模棱两可的；含糊不清的", "The minister gave an ambiguous answer that satisfied neither side."],
  ["elevate", "v. 提升；举起；使升高", "The program aims to elevate the status of technical education."],
  ["tame", "adj. 驯服的；沉闷的；v. 驯化；制服", "The tame rabbit sat calmly while the children fed it."],
  ["spouse", "n. 配偶", "Employees may include their spouse in the health insurance plan."],
  ["uphold", "v. 维护；支持；维持原判", "The appeals court upheld the lower court's decision."],
  ["appliance", "n. （家用）电器；器具", "Modern kitchens are filled with time-saving appliances."],
  ["dilemma", "n. 困境；进退两难", "She faced the dilemma of accepting the promotion or staying near her family."],
  ["accuse", "v. 指责；控告", "The report accuses the agency of ignoring early warnings."],
  ["marital", "adj. 婚姻的", "The counselor helped them work through several marital difficulties."],
  ["apparatus", "n. 设备；仪器；机构", "The technician sterilized each piece of apparatus before the experiment."],
  ["legacy", "n. 遗产；遗留影响", "The Olympics left the city with improved transport and a lasting sporting legacy."],
  ["dim", "adj. 昏暗的；模糊的；v. 使变暗；使减弱", "The only light came from a dim lamp above the desk."],
  ["ally", "n. 盟友；支持者；v. 结盟", "Spain became a valuable ally during the negotiations."],
  ["pregnant", "adj. 怀孕的；充满的", "She was six months pregnant when they moved to the new house."],
  ["curse", "n. 诅咒；祸根；v. 诅咒", "Locals described the drought as a curse on the valley."],
  ["engage", "v. 吸引；使参与；雇用；订婚", "The teacher used puzzles to engage the students in mathematics."],
  ["liable", "adj. 有法律责任的；易于……的", "Drivers who ignore the warning may be liable for the resulting damage."],
  ["remark", "n./v. 评论；谈论；注意到", "Her opening remark put everyone at ease."],
  ["exceptional", "adj. 杰出的；异常的", "The young violinist showed exceptional talent at her first public concert."],
  ["lease", "n. 租约；v. 出租；租用", "The company signed a ten-year lease for its new office."],
  ["fierce", "adj. 凶猛的；激烈的；狂热的", "The team faces fierce competition for a place in the final."],
  ["coward", "n. 胆小鬼；懦夫", "He called himself a coward for not telling her the truth."],
  ["marvellous", "adj. 极好的；了不起的（美式常拼作 marvelous）", "The children told marvellous stories about their journey through the forest."],
  ["timid", "adj. 胆怯的；羞怯的", "The timid child hid behind his mother when the guests arrived."],
  ["rebel", "n. 反叛者；v. 反抗；叛逆", "The students rebelled against the sudden change in examination rules."],
  ["brilliant", "adj. 聪颖的；极好的；明亮的", "She produced a brilliant plan that saved both time and money."],
  ["tenant", "n. 租户；房客", "The landlord agreed to repair the roof after the tenant reported the leak."],
  ["panic", "n./v. 恐慌；惊慌", "Don't panic; the fire alarm was only a test."],
  ["eminent", "adj. 杰出的；著名的", "An eminent historian delivered this year's opening lecture."],
  ["marvel", "n. 奇迹；令人惊叹的事物；v. 感到惊叹", "The bridge was regarded as a marvel of nineteenth-century engineering."],
  ["frighten", "v. 使惊吓；吓唬", "Loud thunder frightened the horse during the night."],
  ["publicity", "n. 公众关注；宣传", "The charity gained wide publicity after the television documentary."],
  ["intimidate", "v. 恐吓；威胁", "The accused tried to intimidate the witness before the trial."],
  ["fabricate", "v. 编造；捏造；制造", "The reporter was dismissed for fabricating quotations."],
  ["prone", "adj. 易于……的；俯卧的", "Tired drivers are prone to misjudge distances and speeds."],
  ["sanction", "n./v. 批准；制裁", "The council imposed economic sanctions on the regime after the election."],
  ["holy", "adj. 神圣的；圣洁的", "Pilgrims visited the holy city during the annual festival."],
  ["bond", "n. 纽带；债券；v. 建立联系", "Regular team meals helped strengthen the bond between new colleagues."],
  ["misery", "n. 痛苦；悲惨；不幸", "The flood left thousands of families in misery."],
  ["compulsory", "adj. 强制的；义务的", "Safety training is compulsory for every new employee."],
  ["torment", "n./v. 折磨；痛苦", "He could not escape the torment of unanswered questions."],
  ["console", "v. 安慰；慰问", "Friends tried to console her after the funeral."],
  ["delicate", "adj. 精美的；脆弱的；微妙的", "The surgeon handled the delicate tissue with great care."],
  ["satire", "n. 讽刺；讽刺作品", "The play uses satire to expose political hypocrisy."],
  ["strive", "v. 努力；力争", "The school strives to give every student individual attention."],
  ["agitate", "v. 激怒；鼓动；搅动", "Campaigners agitated for safer working conditions in the mines."],
  ["advisable", "adj. 明智的；可取的", "It is advisable to book tickets early during the holiday season."],
  ["erode", "v. 侵蚀；削弱", "Years of inflation eroded the value of people's savings."],
  ["noble", "adj. 高尚的；贵族的", "She showed noble courage by speaking out against injustice."],
  ["torture", "n./v. 拷打；折磨", "Human rights groups condemned the use of torture during interrogation."],
  ["stir", "v. 搅动；激起；n. 轰动", "The documentary stirred public anger over the polluted river."],
  ["sacred", "adj. 神圣的；不可侵犯的", "The river is sacred to the people who live along its banks."],
  ["distress", "n./v. 痛苦；贫困；使忧虑", "The news of the accident caused great distress to his family."],
  ["bend", "v. 弯曲；转折；n. 弯道", "Slow down before you reach the sharp bend in the mountain road."],
  ["retort", "n./v. 反驳；回嘴", "There was no need to shout, she retorted."],
  ["apt", "adj. 恰当的；易于……的；聪明的", "The phrase a fertile mind is an apt description of the professor."],
  ["blend", "v. 混合；融合；n. 混合物", "The architecture blends traditional wooden design with modern glass."],
  ["decay", "n./v. 腐烂；衰退", "The abandoned castle had begun to decay after centuries of neglect."],
  ["eradicate", "v. 根除；消灭", "Vaccination campaigns helped eradicate smallpox worldwide."],
  ["counsel", "n. 忠告；法律顾问；v. 建议", "The counselor helped the students choose courses that matched their goals."],
  ["protest", "n./v. 抗议；反对", "Thousands gathered to protest against the closure of the local hospital."],
  ["feast", "n. 盛宴；节日；v. 尽情享用", "The wedding feast lasted late into the night."],
  ["derive", "v. 得到；源于；派生", "The company derives most of its income from online subscriptions."],
  ["detest", "v. 憎恶；厌恶", "He detested having to repeat the same explanation several times."],
  ["incline", "n. 斜坡；v. 使倾向于", "The old path climbs a steep incline toward the monastery."],
  ["insult", "n./v. 侮辱；辱骂", "His cruel remark was intended as an insult rather than a joke."],
  ["agony", "n. 极度痛苦", "The injured athlete waited in agony for the doctor to arrive."],
  ["contrive", "v. 设法做到；策划；设计", "They contrived to finish the project despite losing two days to the storm."],
  ["principal", "n. 校长；本金；adj. 主要的", "The principal reason for the delay was the sudden shortage of materials."],
  ["ascertain", "v. 查明；弄清", "The police tried to ascertain exactly when the painting disappeared."],
  ["diplomat", "n. 外交官", "The senior diplomat helped negotiate the peace agreement."],
  ["permeate", "v. 渗透；弥漫", "The smell of fresh bread permeated the whole house."],
  ["diploma", "n. 文凭；毕业证书", "She earned a diploma in graphic design after two years of study."],
  ["conceal", "v. 隐藏；隐瞒", "He could not conceal his disappointment at the result."],
  ["penetrate", "v. 渗入；穿透；洞察", "The arrow penetrated deep into the wooden target."],
  ["extent", "n. 程度；范围；限度", "The report shows the full extent of the damage to the coral reef."],
  ["disclose", "v. 披露；透露", "The company refused to disclose the terms of the settlement."],
  ["pretend", "v. 假装；自称", "The children pretended to be explorers crossing a desert."],
  ["perpetual", "adj. 持续的；长久的；无休止的", "The machine room was filled with a perpetual low hum."],
  ["disguise", "n./v. 伪装；假扮；掩饰", "The detective entered the club in disguise."],
  ["furnish", "v. 布置家具；提供", "The apartment comes fully furnished with modern appliances."],
  ["enclose", "v. 围住；随信附上", "Please enclose a copy of your receipt with the application."],
  ["betray", "v. 背叛；泄露；暴露", "He would never betray a friend who trusted him."],
  ["veil", "n. 面纱；遮盖物；v. 遮掩", "The bride wore a veil of white silk."],
  ["eccentric", "adj. 古怪的；异乎寻常的", "The eccentric inventor filled his garden with mechanical birds."],
  ["exquisite", "adj. 精美的；精致的；剧烈的", "The museum displayed an exquisite jade carving from the Tang dynasty."],
  ["subordinate", "n. 下级；adj. 次要的；v. 使从属于", "She treats every subordinate with respect and gives clear feedback."],
  ["blur", "n. 模糊；模糊之物；v. 使模糊", "Tears blurred the words on the page."],
  ["exploit", "v. 利用；开发；剥削；n. 功绩", "The company was criticized for exploiting workers during the busy season."],
  ["odd", "adj. 奇怪的；单只的；奇数的", "It seemed odd that the shop was closed on a Saturday."],
  ["sensation", "n. 感觉；知觉；轰动", "The news of their victory caused a sensation across the country."],
  ["superstition", "n. 迷信", "The old superstition warned that breaking a mirror brings bad luck."],
  ["exotic", "adj. 异国的；奇异的", "The greenhouse is full of exotic plants from South America."],
  ["specific", "adj. 明确的；具体的；特定的", "The doctor asked for specific details about when the pain began."],
  ["exile", "n. 流放；流亡者；v. 放逐", "The writer spent twenty years in exile after criticizing the government."],
  ["impair", "v. 损害；削弱", "Loud music over many years can impair your hearing."],
  ["expedition", "n. 远征；探险；考察", "The expedition reached the base camp after nine days of climbing."],
  ["sensible", "adj. 明智的；合理的；可察觉的", "Bringing a map and extra water was a sensible decision."],
  ["weird", "adj. 怪异的；不可思议的", "A weird light appeared over the hills just before the storm."],
  ["superb", "adj. 极好的；华丽的", "The restaurant is known for its superb seafood and quiet atmosphere."],
  ["coordinate", "v. 协调；配合；n. 坐标", "The agencies coordinated their efforts to deliver aid after the flood."],
  ["queer", "adj. 奇怪的；同性恋的", "The novel describes the queer corners of the old harbor district."],
  ["ponderous", "adj. 沉重的；笨重的；冗长乏味的", "The professor's ponderous lecture made the afternoon seem endless."],
  ["vital", "adj. 至关重要的；生命的", "Clean water is vital to the survival of the whole community."],
  ["specimen", "n. 样本；标本；典型", "The nurse labeled each blood specimen before sending it to the laboratory."],
  ["decisive", "adj. 决定性的；果断的", "Her decisive response prevented the small fire from spreading."],
  ["exempt", "adj. 被免除的；v. 免除", "Charitable organizations are exempt from the new tax."],
  ["spontaneous", "adj. 自发的；自然的", "The crowd broke into spontaneous applause at the end of the speech."],
  ["elite", "n. 精英；adj. 精英的", "The academy trains an elite group of young athletes."],
  ["fatal", "adj. 致命的；灾难性的", "The driver made a fatal error on the wet mountain road."],
  ["clumsy", "adj. 笨拙的；不灵巧的", "The clumsy waiter knocked a glass off the table."],
  ["physician", "n. 医师；内科医生", "Consult your physician before starting any new exercise program."],
  ["imperative", "adj. 极重要的；必要的；n. 必要的事", "It is imperative that the report reach the minister before tomorrow's meeting."],
  ["germ", "n. 细菌；病菌；萌芽", "Washing your hands regularly helps stop the spread of germs."],
  ["resort", "n. 度假村；诉诸；v. 诉诸", "The coastal resort fills with tourists every summer."],
  ["ponder", "v. 思考；沉思", "She paused to ponder the meaning of his final remark."],
  ["phase", "n. 阶段；时期", "The building project has entered its final phase."],
  ["indispensable", "adj. 不可或缺的", "A good dictionary is indispensable for advanced language learners."]
].map(([term, meaning, example]) => ({ id: makeId(term), term, meaning, example }));

const STORAGE_KEY = "wordTrainer.v1";
const CLOUD_SYNC_STORAGE_KEY = "wordTrainer.cloudSync.v1";
const CLOUD_SYNC_SCHEMA_VERSION = 1;
const CLOUD_SYNC_DELAY = 1800;
const CLOUD_SYNC_POLL_INTERVAL = 60 * 1000;
const APP_VERSION = "82";
const DICTIONARY_SEARCH_URL = "https://dictionary.cambridge.org/search/english/direct/?q=";
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
const CORE_BOOK_ID = "kaoyan-core";
const CORE_BOOK_NAME = "考研英语核心词汇";
const CORE_BOOK_WORDS = (window.CORE_BOOK_ENTRIES || []).map(([term, meaning, example]) => ({ id: makeId(term), term, meaning, example }));
const CET4_BOOK_ID = "cet4";
const CET4_BOOK_NAME = "大学英语四级词汇";
const CET4_BOOK_WORDS = (window.CET4_BOOK_ENTRIES || []).map(([term, meaning, example]) => ({ id: makeId(term), term, meaning, example }));
const CET6_BOOK_ID = "cet6";
const CET6_BOOK_NAME = "大学英语六级词汇";
const CET6_BOOK_WORDS = (window.CET6_BOOK_ENTRIES || []).map(([term, meaning, example]) => ({ id: makeId(term), term, meaning, example }));
const BOOK_DEFINITIONS = [
  { id: DEFAULT_BOOK_ID, name: DEFAULT_BOOK_NAME, words: STARTER_WORDS },
  { id: CORE_BOOK_ID, name: CORE_BOOK_NAME, words: CORE_BOOK_WORDS, sortMode: "sequence" },
  { id: CET4_BOOK_ID, name: CET4_BOOK_NAME, words: CET4_BOOK_WORDS, sortMode: "sequence" },
  { id: CET6_BOOK_ID, name: CET6_BOOK_NAME, words: CET6_BOOK_WORDS, sortMode: "sequence" },
  { id: INTEGRAL_BOOK_ID, name: INTEGRAL_BOOK_NAME, words: INTEGRAL_BOOK_WORDS },
  { id: THEOREM_BOOK_ID, name: THEOREM_BOOK_NAME, words: THEOREM_BOOK_WORDS },
  { id: TAYLOR_BOOK_ID, name: TAYLOR_BOOK_NAME, words: TAYLOR_BOOK_WORDS },
  { id: TEST_BOOK_ID, name: TEST_BOOK_NAME, words: TEST_BOOK_WORDS }
];
const MATH_BOOK_IDS = new Set([INTEGRAL_BOOK_ID, THEOREM_BOOK_ID, TAYLOR_BOOK_ID]);
const DAY = 24 * 60 * 60 * 1000;
const REVIEW_LIMIT_OPTIONS = [50, 100, 150, 200];
const DEFAULT_REVIEW_LIMIT = 50;
const HARD_RETRY_GAPS = [4, 10];
const MAX_DAILY_HARD_REVIEWS = HARD_RETRY_GAPS.length + 1;
const LIBRARY_BATCH_SIZE = 120;
const SUBMISSION_MAX_FILE_SIZE = 1024 * 1024;
const KATEX_CSS_URL = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css";
const KATEX_JS_URL = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js";
let deferredInstallPrompt = null;
let isReloadingForUpdate = false;

const state = loadState();
let cloudSyncConnection = loadCloudSyncConnection();
let cloudSyncTimer = null;
let cloudSyncPollTimer = null;
let cloudSyncPromise = null;
let cloudSyncDirty = false;
let isApplyingCloudSync = false;
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
let reviewAnswerWordId = null;
const expandedLibraryMeaningIdsByBook = Object.create(null);
let inlineReviewWordId = null;
let inlineReviewAnswerVisible = false;
let inlineReviewPendingHard = false;
let libraryOrderFreeze = null;
let libraryVisibleLimit = LIBRARY_BATCH_SIZE;

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
  refreshButton: document.querySelector("#refreshButton"),
  dataButton: document.querySelector("#dataButton"),
  dataSheet: document.querySelector("#dataSheet"),
  closeDataSheet: document.querySelector("#closeDataSheet"),
  exportBackupButton: document.querySelector("#exportBackupButton"),
  importBackupButton: document.querySelector("#importBackupButton"),
  backupInput: document.querySelector("#backupInput"),
  dataStatus: document.querySelector("#dataStatus"),
  syncCodeInput: document.querySelector("#syncCodeInput"),
  createSyncCodeButton: document.querySelector("#createSyncCodeButton"),
  connectSyncButton: document.querySelector("#connectSyncButton"),
  copySyncCodeButton: document.querySelector("#copySyncCodeButton"),
  syncNowButton: document.querySelector("#syncNowButton"),
  disconnectSyncButton: document.querySelector("#disconnectSyncButton"),
  syncStatus: document.querySelector("#syncStatus"),
  tabs: document.querySelectorAll(".tab"),
  queueType: document.querySelector("#queueType"),
  reviewLimit: document.querySelector("#reviewLimit"),
  startButton: document.querySelector("#startButton"),
  queueLabel: document.querySelector("#queueLabel"),
  promptText: document.querySelector("#promptText"),
  promptHint: document.querySelector("#promptHint"),
  answerBox: document.querySelector("#answerBox"),
  answerText: document.querySelector("#answerText"),
  dictionaryLink: document.querySelector("#dictionaryLink"),
  feedbackText: document.querySelector("#feedbackText"),
  showAnswerButton: document.querySelector("#showAnswerButton"),
  rateButtons: document.querySelectorAll(".rate-button"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  wordList: document.querySelector("#wordList"),
  toggleAllMeaningsButton: document.querySelector("#toggleAllMeaningsButton"),
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
  renderCloudSyncControls();
  startCloudSyncPolling();
  if (cloudSyncConnection.code) scheduleCloudSync(0);
}

function bindEvents() {
  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });

  if (els.bookSelect) {
    els.bookSelect.addEventListener("change", () => switchBook(els.bookSelect.value));
  }
  if (els.reviewLimit) {
    els.reviewLimit.addEventListener("change", updateReviewLimit);
  }
  els.startButton.addEventListener("click", startSession);
  els.showAnswerButton.addEventListener("click", () => revealAnswer());
  els.rateButtons.forEach((button) => {
    button.addEventListener("click", () => rateCurrent(button.dataset.rating));
  });

  els.searchInput.addEventListener("input", () => {
    clearInlineReview();
    clearLibraryOrderFreeze();
    resetLibraryVisibleLimit();
    renderWordList();
  });
  els.statusFilter.addEventListener("change", () => {
    clearInlineReview();
    clearLibraryOrderFreeze();
    resetLibraryVisibleLimit();
    renderWordList();
  });
  els.wordList.addEventListener("click", handleWordListClick);
  if (els.toggleAllMeaningsButton) {
    els.toggleAllMeaningsButton.addEventListener("click", toggleAllVisibleLibraryMeanings);
  }

  els.addWordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addWord(els.newTerm.value, els.newMeaning.value, els.newExample.value);
    els.addWordForm.reset();
  });

  els.importButton.addEventListener("click", importBulkWords);
  els.submitForm.addEventListener("submit", submitVocabularyFile);
  els.installButton.addEventListener("click", installApp);
  els.closeInstallSheet.addEventListener("click", closeInstallSheet);
  els.dataButton.addEventListener("click", openDataSheet);
  els.closeDataSheet.addEventListener("click", closeDataSheet);
  els.exportBackupButton.addEventListener("click", downloadBackup);
  els.importBackupButton.addEventListener("click", () => els.backupInput.click());
  els.backupInput.addEventListener("change", handleBackupImport);
  els.refreshButton.addEventListener("click", forceRefreshApp);
  if (els.createSyncCodeButton) els.createSyncCodeButton.addEventListener("click", createCloudSyncConnection);
  if (els.connectSyncButton) els.connectSyncButton.addEventListener("click", connectCloudSync);
  if (els.copySyncCodeButton) els.copySyncCodeButton.addEventListener("click", copyCloudSyncCode);
  if (els.syncNowButton) els.syncNowButton.addEventListener("click", () => syncCloudProgress({ silent: false }));
  if (els.disconnectSyncButton) els.disconnectSyncButton.addEventListener("click", disconnectCloudSync);

  window.addEventListener("online", () => {
    if (cloudSyncConnection.code) scheduleCloudSync(0);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && cloudSyncConnection.code) scheduleCloudSync(250);
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

async function forceRefreshApp() {
  if (!els.refreshButton || els.refreshButton.disabled) return;
  els.refreshButton.disabled = true;

  try {
    const currentUrl = new URL(window.location.href);
    const scopePath = currentUrl.pathname.replace(/[^/]*$/, "");

    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      const matchingRegistrations = registrations.filter((registration) => {
        try {
          return new URL(registration.scope).pathname === scopePath;
        } catch {
          return false;
        }
      });

      await Promise.all(
        matchingRegistrations.map(async (registration) => {
          try {
            await registration.update();
          } catch {
            // Keep going even if update fails.
          }
          try {
            await registration.unregister();
          } catch {
            // Keep going even if unregister fails.
          }
        })
      );
    }

    if ("caches" in window) {
      const cacheKeys = await caches.keys();
      const appCacheKeys = cacheKeys.filter((key) => key.startsWith("word-trainer-v"));
      await Promise.all(appCacheKeys.map((key) => caches.delete(key)));
    }

    currentUrl.searchParams.set("refresh", Date.now().toString());
    window.location.replace(currentUrl.toString());
  } catch {
    window.location.reload();
  }
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

function openDataSheet() {
  setDataStatus("");
  renderCloudSyncControls();
  els.dataSheet.classList.remove("is-hidden");
}

function closeDataSheet() {
  els.dataSheet.classList.add("is-hidden");
  if (els.backupInput) els.backupInput.value = "";
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
    currentBookId: DEFAULT_BOOK_ID,
    reviewLimit: DEFAULT_REVIEW_LIMIT
  };
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return normalizeState(parsed, fallback);
  } catch {
    return fallback;
  }
}

function saveState(options = {}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (!options.skipCloudSync && !isApplyingCloudSync) scheduleCloudSync();
}

function normalizeState(parsed, fallback) {
  const value = parsed && typeof parsed === "object" ? parsed : {};
  if (value.books && typeof value.books === "object") {
    if (!value.books[DEFAULT_BOOK_ID]) value.books[DEFAULT_BOOK_ID] = getDefaultBook();
    return {
      books: value.books,
      currentBookId: isBuiltInBookId(value.currentBookId) && value.books[value.currentBookId] ? value.currentBookId : DEFAULT_BOOK_ID,
      reviewLimit: normalizeReviewLimit(value.reviewLimit)
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
      currentBookId: DEFAULT_BOOK_ID,
      reviewLimit: normalizeReviewLimit(value.reviewLimit)
    };
  }
  return fallback;
}

function normalizeReviewLimit(value) {
  const limit = Number(value);
  return REVIEW_LIMIT_OPTIONS.includes(limit) ? limit : DEFAULT_REVIEW_LIMIT;
}

function getReviewLimit() {
  state.reviewLimit = normalizeReviewLimit(state.reviewLimit);
  return state.reviewLimit;
}

function syncReviewLimitSelect() {
  if (!els.reviewLimit) return;
  els.reviewLimit.value = String(getReviewLimit());
}

function updateReviewLimit() {
  const nextLimit = normalizeReviewLimit(els.reviewLimit.value);
  if (state.reviewLimit === nextLimit) return;

  state.reviewLimit = nextLimit;
  const book = ensureCurrentBook();
  if (book.todaySession && book.todaySession.date === todayKey()) {
    book.todaySession = reconcileTodaySession(book.todaySession, book, nextLimit);
  }

  saveState();
  renderAll();

  if (currentQueueType === "due" && currentIndex >= 0) {
    currentQueue = buildTodayQueue();
    currentIndex = getTodaySession().index;
    renderCurrentCard();
  }
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

function createBook(id, name, sortMode = "alpha") {
  return {
    id,
    name,
    sortMode,
    words: [],
    progress: {},
    history: [],
    todaySession: null
  };
}

function getBookDefinition(bookId) {
  return BOOK_DEFINITIONS.find((definition) => definition.id === bookId);
}

function getBookSortMode(bookId) {
  return getBookDefinition(bookId)?.sortMode || "alpha";
}

function getBookWordPositions(book) {
  return new Map(book.words.map((word, index) => [word.id, index]));
}

function compareWordsForBook(a, b, book, positions = getBookWordPositions(book)) {
  if (getBookSortMode(book.id) !== "sequence") return a.term.localeCompare(b.term);
  return (positions.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (positions.get(b.id) ?? Number.MAX_SAFE_INTEGER) || a.term.localeCompare(b.term);
}

function orderBookWords(book, definition = getBookDefinition(book.id)) {
  const before = book.words.map((word) => word.id).join("|");
  if ((definition?.sortMode || "alpha") === "sequence") {
    const preferredOrder = new Map((definition.words || []).map((word, index) => [word.id, index]));
    const currentOrder = getBookWordPositions(book);
    book.words.sort((a, b) => {
      const aOrder = preferredOrder.has(a.id) ? preferredOrder.get(a.id) : Number.MAX_SAFE_INTEGER;
      const bOrder = preferredOrder.has(b.id) ? preferredOrder.get(b.id) : Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder || (currentOrder.get(a.id) ?? 0) - (currentOrder.get(b.id) ?? 0) || a.term.localeCompare(b.term);
    });
  } else {
    book.words.sort((a, b) => a.term.localeCompare(b.term));
  }
  const after = book.words.map((word) => word.id).join("|");
  return before !== after;
}

function seedBookWords(book, definition) {
  const words = definition.words;
  const sortMode = definition.sortMode || "alpha";
  const existingWords = new Map(book.words.map((word) => [word.id, word]));
  let changed = false;
  let needsOrdering = false;
  if (book.sortMode !== sortMode) {
    book.sortMode = sortMode;
    changed = true;
    needsOrdering = true;
  }
  words.forEach((word) => {
    const existingWord = existingWords.get(word.id);
    if (!existingWord) {
      book.words.push({ ...word });
      book.progress[word.id] = createProgress();
      changed = true;
      needsOrdering = true;
      return;
    }

    if (
      existingWord.term !== word.term ||
      existingWord.meaning !== word.meaning ||
      existingWord.example !== word.example
    ) {
      existingWord.term = word.term;
      existingWord.meaning = word.meaning;
      existingWord.example = word.example;
      changed = true;
    }

    if (!book.progress[word.id]) {
      book.progress[word.id] = createProgress();
      changed = true;
    }
  });
  if (needsOrdering && orderBookWords(book, definition)) changed = true;
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
      state.books[definition.id] = createBook(definition.id, definition.name, definition.sortMode || "alpha");
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
    if (seedBookWords(book, definition)) changed = true;
  });
  if (!state.currentBookId || !state.books[state.currentBookId]) {
    state.currentBookId = DEFAULT_BOOK_ID;
    changed = true;
  }
  if (changed) saveState();
}

function isBuiltInBookId(bookId) {
  return Boolean(getBookDefinition(bookId));
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
  clearInlineReview();
  clearLibraryOrderFreeze();
  resetLibraryVisibleLimit();
  state.currentBookId = bookId;
  currentQueue = [];
  currentIndex = -1;
  currentQueueType = "due";
  awaitingHardAdvance = false;
  reviewAnswerWordId = null;
  els.queueType.value = "due";
  saveState();
  syncBookSelect();
  startSession();
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
  if (orderBookWords(book, getBookDefinition(book.id))) changed = true;
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
  clearInlineReview();
  clearLibraryOrderFreeze();
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === viewId));
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-active", view.id === viewId));
  renderAll();
}

function startSession() {
  currentQueueType = els.queueType.value;
  currentQueue = buildQueue(currentQueueType);
  currentIndex = currentQueueType === "due" ? getTodaySession().index : 0;
  reviewAnswerWordId = null;
  renderCurrentCard();
}

function buildQueue(type) {
  const book = ensureCurrentBook();
  const words = book.words;
  const progress = book.progress;
  if (type === "due") return buildTodayQueue();

  const today = Date.now();
  const positions = getBookWordPositions(book);
  const byNeed = (a, b) => {
    const pa = progress[a.id] || createProgress();
    const pb = progress[b.id] || createProgress();
    return pa.dueAt - pb.dueAt || pb.wrong - pa.wrong || compareWordsForBook(a, b, book, positions);
  };

  const filtered = words.filter((word) => {
    const item = progress[word.id] || createProgress();
    if (type === "unmastered") return item.level < 4;
    if (type === "mastered") return item.level >= 4;
    if (type === "new") return item.seen === 0;
    if (type === "wrong") return item.wrong > 0;
    if (type === "all") return true;
    return item.dueAt <= today;
  });

  const sorted = filtered.sort(byNeed);
  return type === "unmastered" || type === "mastered" ? sorted : sorted.slice(0, 40);
}

function buildTodayQueue() {
  const session = getTodaySession();
  const words = ensureCurrentBook().words;
  return session.queueIds.map((id) => words.find((word) => word.id === id)).filter(Boolean);
}

function getTodaySession() {
  const book = ensureCurrentBook();
  const date = todayKey();
  const reviewLimit = getReviewLimit();
  if (!book.todaySession || book.todaySession.date !== date) {
    book.todaySession = createTodaySession(date, book, reviewLimit);
    saveState();
    return book.todaySession;
  }

  const nextSession = reconcileTodaySession(book.todaySession, book, reviewLimit);

  if (
    nextSession.limit !== book.todaySession.limit ||
    nextSession.index !== book.todaySession.index ||
    nextSession.pendingHardId !== book.todaySession.pendingHardId ||
    !sameTodayHardReviewCounts(nextSession.hardReviewCounts, book.todaySession.hardReviewCounts) ||
    nextSession.queueIds.join("|") !== (book.todaySession.queueIds || []).join("|")
  ) {
    book.todaySession = nextSession;
    saveState();
  }

  return book.todaySession;
}

function createTodaySession(date, book = ensureCurrentBook(), limit = getReviewLimit()) {
  const queueIds = getDueWordsForToday(book)
    .slice(0, limit)
    .map((word) => word.id);

  return { date, limit, queueIds, index: 0, pendingHardId: null, hardReviewCounts: {}, updatedAt: Date.now() };
}

function reconcileTodaySession(session, book, limit = getReviewLimit()) {
  const validWordIds = new Set(book.words.map((word) => word.id));
  const previousQueueIds = Array.isArray(session.queueIds)
    ? session.queueIds.filter((id) => validWordIds.has(id))
    : [];
  const previousIndex = Math.min(Math.max(session.index || 0, 0), previousQueueIds.length);
  const baseQueueIds = getUniqueWordIds(previousQueueIds).slice(0, limit);

  if (baseQueueIds.length < limit) {
    const queued = new Set(baseQueueIds);
    const extraIds = getDueWordsForToday(book)
      .filter((word) => !queued.has(word.id))
      .slice(0, limit - baseQueueIds.length)
      .map((word) => word.id);
    baseQueueIds.push(...extraIds);
  }

  const allowedWordIds = new Set(baseQueueIds);
  const maxQueueLength = limit * MAX_DAILY_HARD_REVIEWS;
  const queueIds = previousQueueIds.filter((id) => allowedWordIds.has(id)).slice(0, maxQueueLength);
  baseQueueIds.forEach((id) => {
    if (!queueIds.includes(id)) queueIds.push(id);
  });

  const index = Math.min(
    previousQueueIds.slice(0, previousIndex).filter((id) => allowedWordIds.has(id)).length,
    queueIds.length
  );
  const pendingHardId = queueIds[index] === session.pendingHardId ? session.pendingHardId : null;
  const hardReviewCounts = normalizeTodayHardReviewCounts(session.hardReviewCounts, allowedWordIds);
  const changed =
    limit !== session.limit ||
    index !== session.index ||
    pendingHardId !== session.pendingHardId ||
    !sameTodayHardReviewCounts(hardReviewCounts, session.hardReviewCounts) ||
    queueIds.join("|") !== (session.queueIds || []).join("|");
  return {
    ...session,
    limit,
    queueIds,
    index,
    pendingHardId,
    hardReviewCounts,
    updatedAt: changed ? Date.now() : Number(session.updatedAt) || 0
  };
}

function getUniqueWordIds(ids) {
  const seen = new Set();
  const uniqueIds = [];
  ids.forEach((id) => {
    if (seen.has(id)) return;
    seen.add(id);
    uniqueIds.push(id);
  });
  return uniqueIds;
}

function normalizeTodayHardReviewCounts(value, validWordIds) {
  const source = value && typeof value === "object" ? value : {};
  const counts = {};
  Object.entries(source).forEach(([wordId, count]) => {
    if (!validWordIds.has(wordId)) return;
    const normalized = Math.min(MAX_DAILY_HARD_REVIEWS, Math.max(0, Math.round(Number(count) || 0)));
    if (normalized > 0) counts[wordId] = normalized;
  });
  return counts;
}

function sameTodayHardReviewCounts(left, right) {
  return JSON.stringify(left || {}) === JSON.stringify(right || {});
}

function getDueWordsForToday(book) {
  const today = Date.now();
  const positions = getBookWordPositions(book);
  return book.words
    .filter((word) => (book.progress[word.id] || createProgress()).dueAt <= today)
    .sort((a, b) => {
      const pa = book.progress[a.id] || createProgress();
      const pb = book.progress[b.id] || createProgress();
      return pa.dueAt - pb.dueAt || pb.wrong - pa.wrong || compareWordsForBook(a, b, book, positions);
    });
}

function renderCurrentCard() {
  const word = currentQueue[currentIndex];
  const hasWord = Boolean(word);
  const mathBook = isMathBook();
  const dictionaryAllowed = shouldShowDictionaryLink();
  awaitingHardAdvance = isPendingHard(word);
  const answerVisible = Boolean(word && (reviewAnswerWordId === word.id || awaitingHardAdvance));
  toggleReviewControls(hasWord);
  flashReviewCard();

  if (!hasWord) {
    reviewAnswerWordId = null;
    hideDictionaryLink();
    if (currentQueueType === "due") {
      const total = getUniqueWordIds(getTodaySession().queueIds).length;
      els.queueLabel.textContent = `今日复习已完成 · ${total} / ${total}`;
      els.promptText.textContent = `今天的 ${total} 个已经背完`;
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
  if (els.dictionaryLink && dictionaryAllowed) {
    els.dictionaryLink.href = buildDictionaryUrl(word.term);
  }
  els.answerBox.classList.toggle("is-hidden", !answerVisible);
  hideDictionaryLink();
  if (answerVisible && dictionaryAllowed) {
    showDictionaryLink();
  }
  if (answerVisible && awaitingHardAdvance) els.feedbackText.textContent = `${getHardReviewFeedback(word.id)}，先看一下释义。`;
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

function getHardReviewFeedback(wordId) {
  if (currentQueueType !== "due") return "已加入重点复习";
  const session = getTodaySession();
  const hardReviewCount = Math.min(
    MAX_DAILY_HARD_REVIEWS,
    Math.max(0, Math.round(Number(session.hardReviewCounts?.[wordId]) || 0))
  );
  const retryGap = HARD_RETRY_GAPS[hardReviewCount - 1];
  if (retryGap !== undefined) return `已加入第 ${hardReviewCount + 1} 次复习，约 ${retryGap} 张后再出现`;
  if (hardReviewCount >= MAX_DAILY_HARD_REVIEWS) return `当天已复习 ${hardReviewCount} 次，明天继续优先复习`;
  return "已加入重点复习";
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
  if (currentQueueType === "due") {
    const word = currentQueue[currentIndex];
    const session = getTodaySession();
    const total = getUniqueWordIds(session.queueIds).length;
    const completed = getUniqueWordIds(session.queueIds.slice(0, currentIndex)).length;
    const reviewNumber = word
      ? session.queueIds.slice(0, currentIndex + 1).filter((id) => id === word.id).length
      : 0;
    const retryLabel = reviewNumber > 1 ? ` · 第 ${reviewNumber} 次复习` : "";
    return `${completed} / ${total}${retryLabel}`;
  }
  if (currentQueueType === "unmastered") return `未掌握单词：第 ${position} 个`;
  if (currentQueueType === "mastered") return `已掌握单词：第 ${position} 个`;
  if (currentQueueType === "new") return `未学单词：第 ${position} 个`;
  if (currentQueueType === "wrong") return `错词优先：第 ${position} 个`;
  return `第 ${position} 个`;
}

function revealAnswer() {
  const word = currentQueue[currentIndex];
  if (!word) return;
  reviewAnswerWordId = word.id;
  els.answerBox.classList.remove("is-hidden");
  if (shouldShowDictionaryLink()) showDictionaryLink();
  els.feedbackText.textContent = "";
}

function showDictionaryLink() {
  if (!els.dictionaryLink || !shouldShowDictionaryLink()) return;
  els.dictionaryLink.classList.remove("is-hidden");
}

function hideDictionaryLink() {
  if (!els.dictionaryLink) return;
  els.dictionaryLink.classList.add("is-hidden");
}

function shouldShowDictionaryLink(book = ensureCurrentBook()) {
  return !isMathBook(book);
}

function buildDictionaryUrl(term) {
  return `${DICTIONARY_SEARCH_URL}${encodeURIComponent(term.trim())}`;
}

function rateCurrent(rating) {
  const word = currentQueue[currentIndex];
  if (!word) return;

  if (rating === "hard" && awaitingHardAdvance) {
    advanceToNext();
    return;
  }

  const demoteToUnmastered = rating === "hard" && currentQueueType === "mastered";
  recordRating(word, rating, { demoteToUnmastered, render: rating !== "hard" });

  if (rating === "hard") {
    const retryMessage = markTodaySessionPendingHard(word.id);
    revealAnswer();
    awaitingHardAdvance = true;
    renderAll();
    if (currentQueueType === "due") renderCurrentCard();
    els.feedbackText.textContent = `${demoteToUnmastered ? "已降为未掌握，" : ""}${retryMessage}，先看一下释义。`;
    toggleReviewControls(true);
    return;
  }

  advanceToNext();
}

function recordRating(word, rating, options = {}) {
  const progress = getProgress(word.id);
  const correct = rating !== "hard";
  const next = scheduleNext(progress, rating, {
    demoteToUnmastered: options.demoteToUnmastered === true
  });
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
  if (options.render !== false) renderAll();
}

function advanceToNext() {
  reviewAnswerWordId = null;
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
  session.updatedAt = Date.now();
  saveState();
}

function markTodaySessionPendingHard(wordId) {
  if (currentQueueType !== "due") return "已加入重点复习";
  const session = getTodaySession();
  const previousCount = Math.min(
    MAX_DAILY_HARD_REVIEWS,
    Math.max(0, Math.round(Number(session.hardReviewCounts?.[wordId]) || 0))
  );
  const hardReviewCount = Math.min(MAX_DAILY_HARD_REVIEWS, previousCount + 1);
  if (!session.hardReviewCounts || typeof session.hardReviewCounts !== "object") session.hardReviewCounts = {};
  session.hardReviewCounts[wordId] = hardReviewCount;
  session.index = Math.min(currentIndex, session.queueIds.length);
  session.pendingHardId = wordId;

  const retryGap = HARD_RETRY_GAPS[hardReviewCount - 1];
  let retryScheduled = false;
  if (retryGap !== undefined && session.queueIds.length < session.limit * MAX_DAILY_HARD_REVIEWS) {
    const retryIndex = Math.min(session.index + 1 + retryGap, session.queueIds.length);
    session.queueIds.splice(retryIndex, 0, wordId);
    retryScheduled = true;
  }
  session.updatedAt = Date.now();
  saveState();
  currentQueue = buildTodayQueue();

  if (retryScheduled) return `已加入第 ${hardReviewCount + 1} 次复习，约 ${retryGap} 张后再出现`;
  return `当天已复习 ${hardReviewCount} 次，明天继续优先复习`;
}

function scheduleNext(progress, rating, options = {}) {
  const currentLevel = progress.level || 0;
  const intervalMap = {
    hard: 0,
    medium: Math.max(1, Math.round((progress.interval || 1) * 1.8)),
    easy: currentLevel === 0 ? 1 : Math.max(2, Math.round((progress.interval || 1) * 2.6)),
    mastered: Math.max(30, Math.round((progress.interval || 1) * 4))
  };
  const level =
    rating === "hard"
      ? options.demoteToUnmastered
        ? 3
        : Math.max(0, currentLevel - 1)
      : rating === "mastered"
        ? 5
        : Math.min(5, currentLevel + (rating === "easy" ? 1 : 0.5));
  const interval = intervalMap[rating];
  const dueAt = startOfToday() + interval * DAY;
  return { level, interval, dueAt };
}

function getProgress(id, book = ensureCurrentBook()) {
  if (!book.progress[id]) book.progress[id] = createProgress();
  return book.progress[id];
}

function renderAll() {
  syncReviewLimitSelect();
  renderStats();
  renderWordList();
  renderProgress();
}

function renderStats() {
  const today = Date.now();
  const book = ensureCurrentBook();
  const reviewLimit = getReviewLimit();
  const allDue = book.words.filter((word) => (book.progress[word.id] || createProgress()).dueAt <= today).length;
  const session = book.todaySession && book.todaySession.date === todayKey() ? getTodaySession() : null;
  const due = session ? Math.max(0, session.queueIds.length - (session.index || 0)) : Math.min(reviewLimit, allDue);
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
  const book = ensureCurrentBook();
  const libraryActive = document.querySelector("#libraryView")?.classList.contains("is-active");
  if (!libraryActive) {
    els.wordList.innerHTML = "";
    updateMeaningBulkButton();
    return;
  }
  const expandedMeaningIds = getExpandedLibraryMeaningIds(book.id);
  const words = getVisibleLibraryWords(book);
  const visibleWords = words.slice(0, libraryVisibleLimit);

  els.wordList.innerHTML = visibleWords
    .map((word) => {
      const progress = getProgress(word.id, book);
      const status = getStatus(progress);
      const expanded = expandedMeaningIds.has(word.id);
      const inlineOpen = word.id === inlineReviewWordId;
      const meaningId = `meaning-${word.id}`;
      const row = `
        <article class="word-row${expanded ? " is-expanded" : ""}${inlineOpen ? " is-inline-open" : ""}" data-word-id="${escapeHtml(word.id)}">
          <div class="word-term">${formatInlineContent(word.term, isMathBook())}</div>
          <div class="word-meaning${expanded ? "" : " is-hidden"}" id="${escapeHtml(meaningId)}">${formatInlineContent(word.meaning, isMathBook())}</div>
          <span class="status-dot ${status.dotClass}" title="${escapeHtml(status.label)}" aria-label="${escapeHtml(status.label)}" role="img"></span>
          <button
            class="meaning-toggle-button"
            type="button"
            data-word-id="${escapeHtml(word.id)}"
            aria-controls="${escapeHtml(meaningId)}"
            aria-expanded="${expanded ? "true" : "false"}"
          >${expanded ? "隐藏" : "显示"}</button>
        </article>
      `;
      return inlineOpen ? row + renderInlineReviewCard(word) : row;
    })
    .join("") + renderLibraryFooter(words.length, visibleWords.length);
  updateMeaningBulkButton(book, visibleWords);
}

function renderLibraryFooter(totalCount, visibleCount) {
  if (totalCount <= visibleCount) return "";
  const remaining = totalCount - visibleCount;
  return `
    <div class="library-footer">
      <div class="library-footer-meta">已显示 ${visibleCount} / ${totalCount}</div>
      <button class="ghost-button library-load-more" type="button">显示更多 (${Math.min(LIBRARY_BATCH_SIZE, remaining)})</button>
    </div>
  `;
}

function renderInlineReviewCard(word) {
  const mathBook = isMathBook();
  const dictionaryAllowed = shouldShowDictionaryLink();
  const answerHiddenClass = inlineReviewAnswerVisible ? "" : " is-hidden";
  const linkHiddenClass = dictionaryAllowed && inlineReviewAnswerVisible ? "" : " is-hidden";
  const hardLabel = inlineReviewPendingHard ? "下一个" : "忘了";
  const hardClass = inlineReviewPendingHard ? " next" : "";
  return `
    <article class="inline-review-card" data-inline-word-id="${escapeHtml(word.id)}">
      <p class="queue-label">单词复习</p>
      <h3 class="inline-review-term">${formatInlineContent(word.term, mathBook)}</h3>
      <p class="subtle-text">${formatInlineContent(word.example || "根据英文回忆中文释义。", mathBook)}</p>
      <div class="answer-box inline-answer${answerHiddenClass}">
        <span>${formatInlineContent(word.meaning, mathBook)}</span>
      </div>
      ${dictionaryAllowed ? `<a class="dictionary-link inline-dictionary${linkHiddenClass}" href="${escapeHtml(buildDictionaryUrl(word.term))}" target="_blank" rel="noopener noreferrer">Cambridge 词典</a>` : ""}
      <p class="feedback">${inlineReviewPendingHard ? "已加入重点复习，先看一下释义。" : ""}</p>
      <div class="inline-review-actions">
        <button class="ghost-button inline-show-answer" type="button"${inlineReviewAnswerVisible || inlineReviewPendingHard ? " disabled" : ""}>显示答案</button>
        <button class="rate-button hard inline-rate-button${hardClass}" type="button" data-rating="hard">${hardLabel}</button>
        <button class="rate-button medium inline-rate-button" type="button" data-rating="medium"${inlineReviewPendingHard ? " disabled" : ""}>模糊</button>
        <button class="rate-button easy inline-rate-button" type="button" data-rating="easy"${inlineReviewPendingHard ? " disabled" : ""}>记住</button>
        <button class="rate-button mastered inline-rate-button" type="button" data-rating="mastered"${inlineReviewPendingHard ? " disabled" : ""}>完全掌握</button>
      </div>
    </article>
  `;
}

function getVisibleLibraryWords(book = ensureCurrentBook()) {
  const frozenWords = getFrozenLibraryWords(book);
  if (frozenWords) return frozenWords;
  const query = normalizeText(els.searchInput.value);
  const filter = els.statusFilter.value;
  const positions = getBookWordPositions(book);
  return book.words
    .filter((word) => {
      const progress = getProgress(word.id, book);
      const text = `${word.term} ${word.meaning}`.toLowerCase();
      const matchesQuery = !query || text.includes(query);
      const matchesFilter =
        filter === "all" ||
        (filter === "new" && progress.seen === 0) ||
        (filter === "learning" && progress.seen > 0 && progress.level < 4) ||
        (filter === "mastered" && progress.level >= 4) ||
        (filter === "wrong" && progress.wrong > 0);
      return matchesQuery && matchesFilter;
    })
    .sort((a, b) => compareLibraryWordsByUnfamiliarity(a, b, book, positions));
}

function getFrozenLibraryWords(book) {
  const query = normalizeText(els.searchInput.value);
  const filter = els.statusFilter.value;
  if (
    !libraryOrderFreeze ||
    libraryOrderFreeze.bookId !== book.id ||
    libraryOrderFreeze.query !== query ||
    libraryOrderFreeze.filter !== filter
  ) {
    return null;
  }
  const wordsById = new Map(book.words.map((word) => [word.id, word]));
  return libraryOrderFreeze.wordIds.map((id) => wordsById.get(id)).filter(Boolean);
}

function freezeLibraryOrder() {
  if (libraryOrderFreeze) return;
  const book = ensureCurrentBook();
  libraryOrderFreeze = {
    bookId: book.id,
    query: normalizeText(els.searchInput.value),
    filter: els.statusFilter.value,
    wordIds: getVisibleLibraryWords(book).map((word) => word.id)
  };
}

function clearLibraryOrderFreeze() {
  libraryOrderFreeze = null;
}

function resetLibraryVisibleLimit() {
  libraryVisibleLimit = LIBRARY_BATCH_SIZE;
}

function compareLibraryWordsByUnfamiliarity(a, b, book, positions = getBookWordPositions(book)) {
  const progress = book.progress;
  const pa = progress[a.id] || createProgress();
  const pb = progress[b.id] || createProgress();
  const aUnseen = pa.seen === 0;
  const bUnseen = pb.seen === 0;
  if (aUnseen !== bUnseen) return aUnseen ? 1 : -1;
  if (aUnseen && bUnseen) return compareWordsForBook(a, b, book, positions);

  return (
    pa.level - pb.level ||
    pb.wrong - pa.wrong ||
    pa.correct - pb.correct ||
    pa.seen - pb.seen ||
    pa.dueAt - pb.dueAt ||
    compareWordsForBook(a, b, book, positions)
  );
}

function handleWordListClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  const loadMoreButton = target ? target.closest(".library-load-more") : null;
  if (loadMoreButton && els.wordList.contains(loadMoreButton)) {
    libraryVisibleLimit += LIBRARY_BATCH_SIZE;
    renderWordList();
    return;
  }

  const inlineShowAnswerButton = target ? target.closest(".inline-show-answer") : null;
  if (inlineShowAnswerButton && els.wordList.contains(inlineShowAnswerButton)) {
    revealInlineAnswer();
    return;
  }

  const inlineRateButton = target ? target.closest(".inline-rate-button") : null;
  if (inlineRateButton && els.wordList.contains(inlineRateButton)) {
    rateInlineReview(inlineRateButton.dataset.rating);
    return;
  }

  const button = target ? target.closest(".meaning-toggle-button") : null;
  if (button && els.wordList.contains(button)) {
    const wordId = button.dataset.wordId;
    if (wordId) toggleLibraryMeaning(wordId);
    return;
  }
  const row = target ? target.closest(".word-row[data-word-id]") : null;
  if (!row || !els.wordList.contains(row)) return;
  openInlineReview(row.dataset.wordId);
}

function openInlineReview(wordId) {
  const book = ensureCurrentBook();
  const word = book.words.find((item) => item.id === wordId);
  if (!word) return;
  inlineReviewWordId = word.id;
  inlineReviewAnswerVisible = false;
  inlineReviewPendingHard = false;
  renderWordList();
}

function revealInlineAnswer() {
  if (!inlineReviewWordId) return;
  inlineReviewAnswerVisible = true;
  renderWordList();
}

function rateInlineReview(rating) {
  const book = ensureCurrentBook();
  const word = book.words.find((item) => item.id === inlineReviewWordId);
  if (!word || !rating) return;

  if (rating === "hard" && inlineReviewPendingHard) {
    closeInlineReview();
    return;
  }

  freezeLibraryOrder();
  recordRating(word, rating, { render: false });
  renderStats();
  renderProgress();

  if (rating === "hard") {
    inlineReviewAnswerVisible = true;
    inlineReviewPendingHard = true;
    renderWordList();
    return;
  }

  closeInlineReview();
}

function closeInlineReview() {
  clearInlineReview();
  renderWordList();
}

function clearInlineReview() {
  inlineReviewWordId = null;
  inlineReviewAnswerVisible = false;
  inlineReviewPendingHard = false;
}

function toggleLibraryMeaning(wordId) {
  const expandedMeaningIds = getExpandedLibraryMeaningIds();
  if (expandedMeaningIds.has(wordId)) {
    expandedMeaningIds.delete(wordId);
  } else {
    expandedMeaningIds.add(wordId);
  }
  renderWordList();
}

function toggleAllVisibleLibraryMeanings() {
  const book = ensureCurrentBook();
  const words = getVisibleLibraryWords(book).slice(0, libraryVisibleLimit);
  if (!words.length) return;

  const expandedMeaningIds = getExpandedLibraryMeaningIds(book.id);
  const shouldExpand = words.some((word) => !expandedMeaningIds.has(word.id));
  words.forEach((word) => {
    if (shouldExpand) {
      expandedMeaningIds.add(word.id);
    } else {
      expandedMeaningIds.delete(word.id);
    }
  });
  renderWordList();
}

function updateMeaningBulkButton(book = ensureCurrentBook(), words = null) {
  const button = els.toggleAllMeaningsButton;
  if (!button) return;
  const libraryActive = document.querySelector("#libraryView")?.classList.contains("is-active");
  if (!libraryActive) {
    button.classList.add("is-hidden");
    return;
  }
  const visibleWords = words || getVisibleLibraryWords(book).slice(0, libraryVisibleLimit);
  if (!visibleWords.length) {
    button.classList.add("is-hidden");
    return;
  }

  const expandedMeaningIds = getExpandedLibraryMeaningIds(book.id);
  const allExpanded = visibleWords.every((word) => expandedMeaningIds.has(word.id));
  const label = allExpanded ? "全部隐藏" : "全部显示";
  button.textContent = label;
  button.setAttribute("aria-label", label);
  button.classList.remove("is-hidden");
}

function getExpandedLibraryMeaningIds(bookId = state.currentBookId) {
  if (!expandedLibraryMeaningIdsByBook[bookId]) {
    expandedLibraryMeaningIdsByBook[bookId] = new Set();
  }
  return expandedLibraryMeaningIdsByBook[bookId];
}

function getStatus(progress) {
  if (progress.level >= 5) return { label: "完全掌握", dotClass: "mastered-strong" };
  if (progress.wrong > 0 && progress.level < 4) return { label: "错词", dotClass: "wrong" };
  if (progress.level >= 4) return { label: "已掌握", dotClass: "mastered" };
  if (progress.seen > 0) return { label: "学习中", dotClass: "learning" };
  return { label: "未学", dotClass: "new" };
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
    const count = book.words.filter((word) => test(getProgress(word.id, book))).length;
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
  orderBookWords(book, getBookDefinition(book.id));
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

function downloadBackup() {
  exportData();
  setDataStatus("备份已下载到设备。", "success");
}

async function handleBackupImport(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  try {
    if (!isJsonFile(file)) {
      throw new Error("请选择 .json 备份文件。");
    }
    if (file.size > 5 * 1024 * 1024) {
      throw new Error("备份文件过大，请换一个较小的文件。");
    }

    const text = await file.text();
    const parsed = JSON.parse(text);
    const importedState = normalizeState(parsed, {
      books: {
        [DEFAULT_BOOK_ID]: getDefaultBook()
      },
      currentBookId: DEFAULT_BOOK_ID
    });
    const summary = getBackupSummary(importedState);
    const confirmed = window.confirm(
      `将用备份覆盖当前设备数据。\n\n单词本：${summary.books}\n单词数：${summary.words}\n\n继续导入吗？`
    );
    if (!confirmed) return;

    replaceState(importedState);
    ensureBooks();
    currentQueue = [];
    currentIndex = -1;
    currentQueueType = "due";
    awaitingHardAdvance = false;
    reviewAnswerWordId = null;
    saveState();
    syncBookSelect();
    renderAll();
    closeDataSheet();
    setDataStatus("导入完成。", "success");
  } catch (error) {
    setDataStatus(error.message || "导入失败，请检查备份文件。", "error");
  } finally {
    event.target.value = "";
  }
}

function replaceState(nextState) {
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, nextState);
}

function getBackupSummary(backup) {
  const books = backup && backup.books && typeof backup.books === "object" ? Object.values(backup.books) : [];
  const words = books.reduce((sum, book) => sum + (Array.isArray(book.words) ? book.words.length : 0), 0);
  return { books: books.length, words };
}

function isJsonFile(file) {
  return Boolean(file && /\.json$/i.test(file.name));
}

function setDataStatus(message, type) {
  els.dataStatus.textContent = message;
  els.dataStatus.className = `submit-status${type ? ` is-${type}` : ""}`;
}

function loadCloudSyncConnection() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CLOUD_SYNC_STORAGE_KEY));
    const code = window.VocabCloudSync?.formatCode(parsed?.code || "");
    return {
      code,
      revision: normalizeCloudRevision(parsed?.revision),
      lastSyncedAt: Number(parsed?.lastSyncedAt) || null
    };
  } catch {
    return { code: "", revision: 0, lastSyncedAt: null };
  }
}

function saveCloudSyncConnection() {
  if (!cloudSyncConnection.code) {
    localStorage.removeItem(CLOUD_SYNC_STORAGE_KEY);
    return;
  }
  localStorage.setItem(CLOUD_SYNC_STORAGE_KEY, JSON.stringify(cloudSyncConnection));
}

function renderCloudSyncControls() {
  if (!els.syncCodeInput) return;
  const connected = Boolean(cloudSyncConnection.code);
  if (connected) els.syncCodeInput.value = cloudSyncConnection.code;
  els.copySyncCodeButton.disabled = !connected || Boolean(cloudSyncPromise);
  els.syncNowButton.disabled = !connected || Boolean(cloudSyncPromise);
  els.disconnectSyncButton.disabled = !connected || Boolean(cloudSyncPromise);
  els.createSyncCodeButton.disabled = Boolean(cloudSyncPromise);
  els.connectSyncButton.disabled = Boolean(cloudSyncPromise);

  if (!els.syncStatus.textContent || els.syncStatus.dataset.passive === "true") {
    const message = connected
      ? cloudSyncConnection.lastSyncedAt
        ? `已连接，上次同步：${formatCloudSyncTime(cloudSyncConnection.lastSyncedAt)}`
        : "已连接，等待首次同步。"
      : "未连接";
    setCloudSyncStatus(message, "", true);
  }
}

async function createCloudSyncConnection() {
  const api = window.VocabCloudSync;
  if (!api) {
    setCloudSyncStatus("同步组件加载失败，请刷新网页。", "error");
    return;
  }

  const code = api.generateCode();
  cloudSyncConnection = { code, revision: 0, lastSyncedAt: null };
  saveCloudSyncConnection();
  els.syncCodeInput.value = code;
  setCloudSyncStatus("正在创建云端进度...", "");
  renderCloudSyncControls();
  await syncCloudProgress({ silent: false, allowCreate: true });
}

async function connectCloudSync() {
  const api = window.VocabCloudSync;
  if (!api) {
    setCloudSyncStatus("同步组件加载失败，请刷新网页。", "error");
    return;
  }

  let code;
  try {
    code = api.formatCode(els.syncCodeInput.value);
  } catch (error) {
    setCloudSyncStatus(error.message || "同步码格式不正确。", "error");
    return;
  }

  const previousConnection = cloudSyncConnection;
  cloudSyncConnection = { code, revision: 0, lastSyncedAt: null };
  renderCloudSyncControls();
  try {
    await syncCloudProgress({ silent: false, allowCreate: false, throwOnError: true });
  } catch {
    cloudSyncConnection = previousConnection;
    renderCloudSyncControls();
  }
}

async function copyCloudSyncCode() {
  if (!cloudSyncConnection.code) return;
  try {
    await navigator.clipboard.writeText(cloudSyncConnection.code);
    setCloudSyncStatus("同步码已复制。", "success");
  } catch {
    els.syncCodeInput.focus();
    els.syncCodeInput.select();
    setCloudSyncStatus("请长按同步码复制。", "");
  }
}

function disconnectCloudSync() {
  if (cloudSyncTimer) window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = null;
  cloudSyncDirty = false;
  cloudSyncConnection = { code: "", revision: 0, lastSyncedAt: null };
  saveCloudSyncConnection();
  if (els.syncCodeInput) els.syncCodeInput.value = "";
  setCloudSyncStatus("已断开，本机学习数据仍保留。", "success");
  renderCloudSyncControls();
}

function scheduleCloudSync(delay = CLOUD_SYNC_DELAY) {
  if (!cloudSyncConnection.code || !window.VocabCloudSync || !navigator.onLine) return;
  cloudSyncDirty = true;
  if (cloudSyncPromise) return;
  if (cloudSyncTimer) window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = window.setTimeout(() => {
    cloudSyncTimer = null;
    syncCloudProgress({ silent: true });
  }, Math.max(0, delay));
}

function startCloudSyncPolling() {
  if (cloudSyncPollTimer) window.clearInterval(cloudSyncPollTimer);
  cloudSyncPollTimer = window.setInterval(() => {
    if (document.visibilityState !== "visible" || !navigator.onLine || !cloudSyncConnection.code) return;
    scheduleCloudSync(0);
  }, CLOUD_SYNC_POLL_INTERVAL);
}

async function syncCloudProgress({ silent = false, allowCreate = false, throwOnError = false } = {}) {
  if (!cloudSyncConnection.code) {
    if (!silent) setCloudSyncStatus("请先生成或输入同步码。", "error");
    return null;
  }
  if (cloudSyncPromise) {
    cloudSyncDirty = true;
    return cloudSyncPromise;
  }

  if (cloudSyncTimer) window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = null;
  cloudSyncDirty = false;
  if (!silent) setCloudSyncStatus("正在同步...", "");

  const code = cloudSyncConnection.code;
  cloudSyncPromise = performCloudSync(code, allowCreate);
  renderCloudSyncControls();
  try {
    const result = await cloudSyncPromise;
    if (cloudSyncConnection.code !== code) return result;
    cloudSyncConnection.revision = result.revision;
    cloudSyncConnection.lastSyncedAt = Date.now();
    saveCloudSyncConnection();
    setCloudSyncStatus(result.changed ? "同步完成，进度已更新。" : "进度已是最新。", "success", silent);
    return result;
  } catch (error) {
    const message = error?.code === "not_found" ? "没有找到这个同步码，请核对后重试。" : error.message || "同步失败，请稍后再试。";
    setCloudSyncStatus(message, "error");
    if (throwOnError) throw error;
    return null;
  } finally {
    cloudSyncPromise = null;
    renderCloudSyncControls();
    if (cloudSyncDirty && cloudSyncConnection.code === code) scheduleCloudSync();
  }
}

async function performCloudSync(code, allowCreate) {
  const api = window.VocabCloudSync;
  const endpoint = getSubmissionEndpoint();
  if (!api || !endpoint) throw new Error("同步后端尚未配置。");

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const remote = await api.pull(endpoint, code);
    if (!remote.exists && !allowCreate) {
      throw new api.CloudSyncError("没有找到这个同步码。", 404, "not_found");
    }

    const localSnapshot = createCloudSyncSnapshot();
    const mergedSnapshot = remote.exists
      ? mergeCloudSyncSnapshots(localSnapshot, remote.snapshot)
      : localSnapshot;
    const localChanged = stableSnapshotJson(localSnapshot) !== stableSnapshotJson(mergedSnapshot);
    const remoteChanged = !remote.exists || stableSnapshotJson(remote.snapshot) !== stableSnapshotJson(mergedSnapshot);

    if (localChanged) applyCloudSyncSnapshot(mergedSnapshot);
    if (!remoteChanged) {
      return { revision: remote.revision, updatedAt: remote.updatedAt || Date.now(), changed: localChanged };
    }

    try {
      const pushed = await api.push(endpoint, code, remote.revision, mergedSnapshot);
      return { ...pushed, changed: true };
    } catch (error) {
      if (error?.code !== "revision_conflict" || attempt === 1) throw error;
    }
  }
  throw new Error("同步冲突，请重新同步。");
}

function createCloudSyncSnapshot() {
  ensureBooks();
  const books = {};
  BOOK_DEFINITIONS.forEach((definition) => {
    const book = state.books[definition.id];
    if (!book) return;
    const builtInWordIds = new Set(definition.words.map((word) => word.id));
    const validWordIds = new Set(book.words.map((word) => word.id));
    const progress = {};
    Object.entries(book.progress || {}).forEach(([wordId, value]) => {
      if (!validWordIds.has(wordId)) return;
      const normalized = normalizeCloudProgress(value);
      if (isMeaningfulCloudProgress(normalized) || !builtInWordIds.has(wordId)) progress[wordId] = normalized;
    });

    books[definition.id] = {
      extraWords: book.words.filter((word) => !builtInWordIds.has(word.id)).map(normalizeCloudWord).filter(Boolean),
      progress,
      history: normalizeCloudHistory(book.history),
      todaySession: normalizeCloudTodaySession(book.todaySession)
    };
  });
  return { schemaVersion: CLOUD_SYNC_SCHEMA_VERSION, books };
}

function mergeCloudSyncSnapshots(localSnapshot, remoteSnapshot) {
  const local = normalizeCloudSnapshot(localSnapshot);
  const remote = normalizeCloudSnapshot(remoteSnapshot);
  const books = {};
  BOOK_DEFINITIONS.forEach((definition) => {
    const localBook = local.books[definition.id] || getEmptyCloudBook();
    const remoteBook = remote.books[definition.id] || getEmptyCloudBook();
    books[definition.id] = mergeCloudBook(localBook, remoteBook);
  });
  return { schemaVersion: CLOUD_SYNC_SCHEMA_VERSION, books };
}

function normalizeCloudSnapshot(snapshot) {
  if (!snapshot || snapshot.schemaVersion !== CLOUD_SYNC_SCHEMA_VERSION || !snapshot.books || typeof snapshot.books !== "object") {
    throw new Error("云端进度版本不兼容。");
  }
  const books = {};
  BOOK_DEFINITIONS.forEach((definition) => {
    const source = snapshot.books[definition.id];
    if (!source || typeof source !== "object") {
      books[definition.id] = getEmptyCloudBook();
      return;
    }
    const extraWords = Array.isArray(source.extraWords)
      ? source.extraWords.slice(0, 2000).map(normalizeCloudWord).filter(Boolean)
      : [];
    const progress = {};
    Object.entries(source.progress && typeof source.progress === "object" ? source.progress : {})
      .slice(0, 20000)
      .forEach(([wordId, value]) => {
        if (typeof wordId === "string" && wordId.length <= 160) progress[wordId] = normalizeCloudProgress(value);
      });
    books[definition.id] = {
      extraWords,
      progress,
      history: normalizeCloudHistory(source.history),
      todaySession: normalizeCloudTodaySession(source.todaySession)
    };
  });
  return { schemaVersion: CLOUD_SYNC_SCHEMA_VERSION, books };
}

function mergeCloudBook(localBook, remoteBook) {
  const extraWords = new Map(remoteBook.extraWords.map((word) => [word.id, word]));
  localBook.extraWords.forEach((word) => extraWords.set(word.id, word));

  const progress = {};
  const wordIds = new Set([...Object.keys(remoteBook.progress), ...Object.keys(localBook.progress)]);
  wordIds.forEach((wordId) => {
    progress[wordId] = pickNewerCloudProgress(localBook.progress[wordId], remoteBook.progress[wordId]);
  });

  return {
    extraWords: Array.from(extraWords.values()),
    progress,
    history: mergeCloudHistory(localBook.history, remoteBook.history),
    todaySession: pickNewerCloudTodaySession(localBook.todaySession, remoteBook.todaySession)
  };
}

function pickNewerCloudProgress(local, remote) {
  if (!local) return remote;
  if (!remote) return local;
  const localReviewed = Number(local.lastReviewed) || 0;
  const remoteReviewed = Number(remote.lastReviewed) || 0;
  if (localReviewed !== remoteReviewed) return localReviewed > remoteReviewed ? local : remote;
  if (local.seen !== remote.seen) return local.seen > remote.seen ? local : remote;
  const localAnswers = local.correct + local.wrong;
  const remoteAnswers = remote.correct + remote.wrong;
  if (localAnswers !== remoteAnswers) return localAnswers > remoteAnswers ? local : remote;
  return local;
}

function mergeCloudHistory(localHistory, remoteHistory) {
  const history = new Map();
  [...remoteHistory, ...localHistory].forEach((item) => {
    history.set(`${item.id}|${item.rating}|${item.at}`, item);
  });
  return Array.from(history.values()).sort((a, b) => b.at - a.at).slice(0, 80);
}

function pickNewerCloudTodaySession(local, remote) {
  if (!local) return remote;
  if (!remote) return local;
  if (local.date !== remote.date) return local.date > remote.date ? local : remote;
  if (local.updatedAt !== remote.updatedAt) return local.updatedAt > remote.updatedAt ? local : remote;
  return local.index >= remote.index ? local : remote;
}

function applyCloudSyncSnapshot(snapshot) {
  const normalized = normalizeCloudSnapshot(snapshot);
  isApplyingCloudSync = true;
  try {
    BOOK_DEFINITIONS.forEach((definition) => {
      const book = state.books[definition.id];
      const cloudBook = normalized.books[definition.id];
      const builtInWordIds = new Set(definition.words.map((word) => word.id));
      const existingWordIds = new Set(book.words.map((word) => word.id));
      cloudBook.extraWords.forEach((word) => {
        if (builtInWordIds.has(word.id) || existingWordIds.has(word.id)) return;
        book.words.push({ ...word });
        existingWordIds.add(word.id);
      });
      Object.entries(cloudBook.progress).forEach(([wordId, progress]) => {
        if (existingWordIds.has(wordId)) book.progress[wordId] = { ...createProgress(), ...progress };
      });
      book.history = cloudBook.history.map((item) => ({ ...item }));
      book.todaySession = cloudBook.todaySession
        ? {
            ...cloudBook.todaySession,
            queueIds: [...cloudBook.todaySession.queueIds],
            hardReviewCounts: { ...cloudBook.todaySession.hardReviewCounts }
          }
        : null;
      orderBookWords(book, definition);
    });
    saveState({ skipCloudSync: true });
  } finally {
    isApplyingCloudSync = false;
  }

  renderAll();
  if (currentQueueType === "due" && currentIndex >= 0) {
    currentQueue = buildTodayQueue();
    currentIndex = getTodaySession().index;
    renderCurrentCard();
  }
}

function normalizeCloudWord(value) {
  if (!value || typeof value !== "object") return null;
  const term = String(value.term || "").trim().slice(0, 160);
  const meaning = String(value.meaning || "").trim().slice(0, 1000);
  if (!term || !meaning) return null;
  const id = makeId(term);
  if (!id) return null;
  return { id, term, meaning, example: String(value.example || "").trim().slice(0, 2000) };
}

function normalizeCloudProgress(value) {
  const progress = value && typeof value === "object" ? value : {};
  return {
    level: clampCloudNumber(progress.level, 0, 5),
    interval: clampCloudInteger(progress.interval, 0, 36500),
    dueAt: normalizeCloudTimestamp(progress.dueAt) || startOfToday(),
    seen: clampCloudInteger(progress.seen, 0, 1000000),
    correct: clampCloudInteger(progress.correct, 0, 1000000),
    wrong: clampCloudInteger(progress.wrong, 0, 1000000),
    lastReviewed: normalizeCloudTimestamp(progress.lastReviewed)
  };
}

function isMeaningfulCloudProgress(progress) {
  return progress.level > 0 || progress.interval > 0 || progress.seen > 0 || progress.correct > 0 || progress.wrong > 0 || progress.lastReviewed !== null;
}

function normalizeCloudHistory(value) {
  if (!Array.isArray(value)) return [];
  return value
    .slice(0, 160)
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const id = String(item.id || "").slice(0, 160);
      const term = String(item.term || "").slice(0, 160);
      const rating = ["hard", "medium", "easy", "mastered"].includes(item.rating) ? item.rating : "hard";
      const at = normalizeCloudTimestamp(item.at);
      if (!id || !term || !at) return null;
      return { id, term, rating, correct: rating !== "hard", at };
    })
    .filter(Boolean)
    .sort((a, b) => b.at - a.at)
    .slice(0, 80);
}

function normalizeCloudTodaySession(value) {
  if (!value || typeof value !== "object" || !/^\d{4}-\d{2}-\d{2}$/.test(value.date || "")) return null;
  const limit = normalizeReviewLimit(value.limit);
  const queueIds = Array.isArray(value.queueIds)
    ? value.queueIds.filter((id) => typeof id === "string" && id.length <= 160).slice(0, limit * MAX_DAILY_HARD_REVIEWS)
    : [];
  const index = Math.min(clampCloudInteger(value.index, 0, queueIds.length), queueIds.length);
  const pendingHardId = queueIds[index] === value.pendingHardId ? value.pendingHardId : null;
  const hardReviewCounts = normalizeTodayHardReviewCounts(value.hardReviewCounts, new Set(getUniqueWordIds(queueIds)));
  return {
    date: value.date,
    limit,
    queueIds,
    index,
    pendingHardId,
    hardReviewCounts,
    updatedAt: normalizeCloudTimestamp(value.updatedAt) || 0
  };
}

function getEmptyCloudBook() {
  return { extraWords: [], progress: {}, history: [], todaySession: null };
}

function stableSnapshotJson(snapshot) {
  return JSON.stringify(normalizeCloudSnapshot(snapshot));
}

function normalizeCloudTimestamp(value) {
  const timestamp = Number(value);
  return Number.isFinite(timestamp) && timestamp > 0 ? Math.round(timestamp) : null;
}

function normalizeCloudRevision(value) {
  const revision = Number(value);
  return Number.isSafeInteger(revision) && revision >= 0 ? revision : 0;
}

function clampCloudInteger(value, min, max) {
  return Math.round(clampCloudNumber(value, min, max));
}

function clampCloudNumber(value, min, max) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.min(max, Math.max(min, number)) : min;
}

function formatCloudSyncTime(value) {
  return new Date(value).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}

function setCloudSyncStatus(message, type, passive = false) {
  if (!els.syncStatus) return;
  els.syncStatus.textContent = message;
  els.syncStatus.dataset.passive = passive ? "true" : "false";
  els.syncStatus.className = `submit-status${type ? ` is-${type}` : ""}`;
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
