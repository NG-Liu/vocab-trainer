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
  ["intimation", "暗示；提示", "There was no intimation of trouble."]
].map(([term, meaning, example]) => ({ id: makeId(term), term, meaning, example }));

const STORAGE_KEY = "wordTrainer.v1";
const APP_VERSION = "16";
const DEFAULT_BOOK_ID = "default";
const DEFAULT_BOOK_NAME = "默认单词本";
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
  { id: TEST_BOOK_ID, name: TEST_BOOK_NAME, words: TEST_BOOK_WORDS }
];
const DAY = 24 * 60 * 60 * 1000;
const TODAY_REVIEW_LIMIT = 50;
const SUBMISSION_MAX_FILE_SIZE = 1024 * 1024;
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

  els.queueLabel.textContent = `${currentIndex + 1} / ${currentQueue.length}`;
  els.feedbackText.textContent = "";
  els.promptText.textContent = word.term;
  els.promptHint.textContent = word.example || "根据英文回忆中文释义。";
  els.answerText.textContent = word.meaning;
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
          <div class="word-term">${escapeHtml(word.term)}</div>
          <div class="word-meaning">${escapeHtml(word.meaning)}</div>
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
