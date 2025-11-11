// 山海经鱼类数据库 / Shan Hai Jing Fish Database

export interface Mountain {
  id: string;
  name: string;
  nameEn: string;
  waters: Water[];
}

export interface Water {
  id: string;
  name: string;
  nameEn: string;
  fish: string;
  fishId: string;
}

export const mountainsData: Mountain[] = [
  {
    id: "leyou",
    name: "乐游之山",
    nameEn: "Leyou Mountain",
    waters: [{ id: "leyou-other", name: "其它水域", nameEn: "Other Waters", fish: "䱻鱼", fishId: "liyu" }]
  },
  {
    id: "zitong",
    name: "子桐之山",
    nameEn: "Zitong Mountain",
    waters: [{ id: "zitong-other", name: "其它水域", nameEn: "Other Waters", fish: "䱻鱼", fishId: "liyu" }]
  },
  {
    id: "qiuru",
    name: "求如之山",
    nameEn: "Qiuru Mountain",
    waters: [{ id: "huashui", name: "滑水", nameEn: "Hua River", fish: "䱻鱼", fishId: "liyu" }]
  },
  {
    id: "zhuoguang",
    name: "涿光之山",
    nameEn: "Zhuoguang Mountain",
    waters: [{ id: "xiaoshui", name: "嚣水", nameEn: "Xiao River", fish: "鰼鰼鱼", fishId: "qiuqiuyu" }]
  },
  {
    id: "geshan",
    name: "葛山",
    nameEn: "Ge Mountain",
    waters: [{ id: "lishui", name: "澧水", nameEn: "Li River", fish: "珠鳖鱼", fishId: "zhubieyu" }]
  },
  {
    id: "maoshan",
    name: "旄山",
    nameEn: "Mao Mountain",
    waters: [{ id: "cangtishui", name: "苍体之水", nameEn: "Cangti River", fish: "鱃鱼", fishId: "jianyu" }]
  },
  {
    id: "banshi",
    name: "半石山",
    nameEn: "Banshi Mountain",
    waters: [{ id: "banshi-other", name: "其它水域", nameEn: "Other Waters", fish: "鱃鱼", fishId: "jianyu" }]
  },
  {
    id: "dushan",
    name: "独山",
    nameEn: "Du Mountain",
    waters: [{ id: "dushan-other", name: "其它水域", nameEn: "Other Waters", fish: "鱃鱼", fishId: "jianyu" }]
  },
  {
    id: "xunzhuang",
    name: "栒状之山",
    nameEn: "Xunzhuang Mountain",
    waters: [{ id: "lieshui", name: "𣲵水", nameEn: "Lie River", fish: "箴鱼", fishId: "zhenyu" }]
  },
  {
    id: "qiaoming",
    name: "谯明之山",
    nameEn: "Qiaoming Mountain",
    waters: [{ id: "qiaoshui", name: "谯水", nameEn: "Qiao River", fish: "何罗鱼", fishId: "heluo" }]
  },
  {
    id: "yufa",
    name: "狱法之山",
    nameEn: "Yufa Mountain",
    waters: [{ id: "huanzeshui", name: "瀤泽之水", nameEn: "Huanze River", fish: "䲃鱼", fishId: "tiayu" }]
  },
  {
    id: "yingti",
    name: "英鞮之山",
    nameEn: "Yingti Mountain",
    waters: [{ id: "wanshui", name: "涴水", nameEn: "Wan River", fish: "冉遗鱼", fishId: "ranyiyu" }]
  },
  {
    id: "niushou",
    name: "牛首之山",
    nameEn: "Niushou Mountain",
    waters: [{ id: "laoshui", name: "劳水", nameEn: "Lao River", fish: "飞鱼", fishId: "feiyu" }]
  },
  {
    id: "daoguo",
    name: "祷过之山",
    nameEn: "Daoguo Mountain",
    waters: [{ id: "yinshui", name: "泿水", nameEn: "Yin River", fish: "虎蛟", fishId: "hujiao" }]
  },
  {
    id: "nvzheng",
    name: "女烝之山",
    nameEn: "Nvzheng Mountain",
    waters: [{ id: "shigaoshui", name: "石膏水", nameEn: "Shigao River", fish: "薄鱼", fishId: "boyu" }]
  },
  {
    id: "dongshi",
    name: "东始之山",
    nameEn: "Dongshi Mountain",
    waters: [{ id: "cishui", name: "泚水", nameEn: "Ci River", fish: "茈鱼", fishId: "ciyu" }]
  },
  {
    id: "yangshan",
    name: "阳山",
    nameEn: "Yang Mountain",
    waters: [{ id: "liushui", name: "留水", nameEn: "Liu River", fish: "䱤父鱼", fishId: "jiangfuyu" }]
  },
  {
    id: "qingqiu",
    name: "青丘之山",
    nameEn: "Qingqiu Mountain",
    waters: [{ id: "qingqiu-other", name: "其它水域", nameEn: "Other Waters", fish: "赤鱬", fishId: "chiyu" }]
  },
  {
    id: "quzhu",
    name: "渠猪之山",
    nameEn: "Quzhu Mountain",
    waters: [{ id: "quzhushui", name: "渠猪之水", nameEn: "Quzhu River", fish: "豪鱼", fishId: "haoyu" }]
  },
  {
    id: "kunlun",
    name: "昆仑",
    nameEn: "Kunlun Mountain",
    waters: [{ id: "dunhongshui", name: "敦薨之水", nameEn: "Dunhong River", fish: "赤鲑", fishId: "chigui" }]
  },
  {
    id: "qishan",
    name: "邽山",
    nameEn: "Qi Mountain",
    waters: [{ id: "mengshui", name: "濛水", nameEn: "Meng River", fish: "蠃鱼", fishId: "luoyu" }]
  },
  {
    id: "jishan",
    name: "鸡山",
    nameEn: "Ji Mountain",
    waters: [{ id: "heishui", name: "黑水", nameEn: "Hei River", fish: "鱄鱼", fishId: "zhuanyu" }]
  },
  {
    id: "niaoshu",
    name: "鸟鼠同穴之山",
    nameEn: "Niaoshu Mountain",
    waters: [{ id: "lanshui", name: "滥水", nameEn: "Lan River", fish: "鰠鱼", fishId: "xiyu" }]
  },
  {
    id: "taiqi",
    name: "泰器之山",
    nameEn: "Taiqi Mountain",
    waters: [{ id: "guanshui", name: "观水", nameEn: "Guan River", fish: "文鳐鱼", fishId: "wenyao" }]
  },
  {
    id: "zhushan",
    name: "竹山",
    nameEn: "Zhu Mountain",
    waters: [{ id: "danshui", name: "丹水", nameEn: "Dan River", fish: "人鱼", fishId: "renyu" }]
  },
  {
    id: "daishan",
    name: "带山",
    nameEn: "Dai Mountain",
    waters: [{ id: "pengshui", name: "彭水", nameEn: "Peng River", fish: "儵鱼", fishId: "shuyu" }]
  },
  {
    id: "zhubi",
    name: "诸毗",
    nameEn: "Zhubi Mountain",
    waters: [{ id: "tiaoshui", name: "苕水", nameEn: "Tiao River", fish: "鮆鱼", fishId: "jiyu" }]
  },
  {
    id: "jingshan",
    name: "荆山",
    nameEn: "Jing Mountain",
    waters: [{ id: "zhangshui", name: "漳水", nameEn: "Zhang River", fish: "鮆鱼", fishId: "jiyu" }]
  },
  {
    id: "mengzi",
    name: "孟子之山",
    nameEn: "Mengzi Mountain",
    waters: [{ id: "biyang", name: "碧阳", nameEn: "Biyang River", fish: "鮪", fishId: "weiyu" }]
  },
  {
    id: "dishan",
    name: "柢山",
    nameEn: "Di Mountain",
    waters: [{ id: "dishan-other", name: "其它水域", nameEn: "Other Waters", fish: "鯥", fishId: "luoyu2" }]
  },
  {
    id: "qianwei",
    name: "乾昧",
    nameEn: "Qianwei Mountain",
    waters: [{ id: "shishui", name: "食水", nameEn: "Shi River", fish: "鱅鱅", fishId: "yongyong" }]
  },
  {
    id: "qizhong",
    name: "跂踵之山",
    nameEn: "Qizhong Mountain",
    waters: [{ id: "qizhong-other", name: "其它水域", nameEn: "Other Waters", fish: "鮯鮯鱼", fishId: "guguyu" }]
  },
  {
    id: "jingshan2",
    name: "景山",
    nameEn: "Jing Mountain",
    waters: [{ id: "suishui", name: "睢水", nameEn: "Sui River", fish: "文鱼", fishId: "wenyu" }]
  },
];

// 鱼类详细信息数据库
export interface FishDetail {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  source: string;
  sourceEn: string;
  description: string;
  descriptionEn: string;
  function: string;
  functionEn: string;
  timeline: {
    id: string;
    label: string;
    labelEn: string;
    imageUrl: string;
    styleAnalysis: string;
    styleAnalysisEn: string;
  }[];
  evolutionSummary: string;
  evolutionSummaryEn: string;
}

const defaultTimeline = [
  {
    id: "ancient",
    label: "古代",
    labelEn: "Ancient",
    imageUrl: "https://images.unsplash.com/photo-1736670649542-f411ac768701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNoaW5lc2UlMjBhcnR8ZW58MXx8fHwxNzYyODI5MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    styleAnalysis: "古代绘本采用白描手法，线条简练古朴，展现出宋元绘画的写意精神。墨色浓淡变化微妙，营造出水墨晕染的韵味。",
    styleAnalysisEn: "Ancient illustrations use line drawing with simple strokes, embodying the freehand spirit of Song-Yuan paintings."
  },
  {
    id: "modern-a",
    label: "现代 A",
    labelEn: "Modern A",
    imageUrl: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    styleAnalysis: "现代插画风格引入丰富色彩和细节刻画，融入当代审美的细腻情感表达，整体呈现出唯美的奇幻风格。",
    styleAnalysisEn: "Modern illustration introduces rich colors and detailed depictions, incorporating contemporary aesthetic sensibilities."
  },
  {
    id: "modern-b",
    label: "现代 B",
    labelEn: "Modern B",
    imageUrl: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    styleAnalysis: "采用扁平化设计语言，运用明快色块和几何形状重构形象，强调图形识别性和现代感。",
    styleAnalysisEn: "Uses flat design with bright color blocks, emphasizing graphic recognition and modernity."
  },
  {
    id: "modern-c",
    label: "现代 C",
    labelEn: "Modern C",
    imageUrl: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    styleAnalysis: "结合3D建模与数字绘画技术，呈现立体逼真质感，展现当代数字艺术的技术优势。",
    styleAnalysisEn: "Combines 3D modeling with digital painting, showcasing contemporary digital art techniques."
  }
];

export const fishDatabase: Record<string, FishDetail> = {
  chiyu: {
    id: "chiyu",
    name: "赤鱬",
    nameEn: "Chi Yu",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《南山经》",
    sourceEn: "Nanshan Classic",
    description: "其状如鱼而人面，其音如鸳鸯，食之不疥。",
    descriptionEn: "Fish-shaped with human face, sounds like mandarin ducks.",
    function: "食之不疥",
    functionEn: "Cures scabies",
    timeline: defaultTimeline,
    evolutionSummary: "从古至今，视觉呈现经历了从'写意抽象'到'写实具象'的演变，反映了艺术创作的发展历程。",
    evolutionSummaryEn: "Evolution from impressionistic to realistic representation."
  },
  heluo: {
    id: "heluo",
    name: "何罗鱼",
    nameEn: "He Luo Fish",
    image: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《南山经》",
    sourceEn: "Nanshan Classic",
    description: "一首而十身，其音如吠犬，食之已痈。",
    descriptionEn: "One head with ten bodies, sounds like barking dogs.",
    function: "食之已痈",
    functionEn: "Cures abscesses",
    timeline: defaultTimeline,
    evolutionSummary: "形象演变展现了从'符号化表达'到'具象化想象'的转变。",
    evolutionSummaryEn: "From symbolic expression to concrete imagination."
  },
  liyu: {
    id: "liyu",
    name: "䱻鱼",
    nameEn: "Li Fish",
    image: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "形如鲤而色斑斓，游于深渊之中。",
    descriptionEn: "Shaped like carp with colorful patterns.",
    function: "观之可悦",
    functionEn: "Brings joy",
    timeline: defaultTimeline,
    evolutionSummary: "色彩与形态的演变体现了审美观念的变迁。",
    evolutionSummaryEn: "Evolution reflects changing aesthetic concepts."
  },
  qiuqiuyu: {
    id: "qiuqiuyu",
    name: "鰼鰼鱼",
    nameEn: "Qiu Qiu Fish",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《西山经》",
    sourceEn: "Xishan Classic",
    description: "其状如牛，居于浊水，鸣如豚。",
    descriptionEn: "Shaped like ox, lives in murky waters.",
    function: "食之无痢",
    functionEn: "Prevents dysentery",
    timeline: defaultTimeline,
    evolutionSummary: "从神话符号到生物形态的视觉转化。",
    evolutionSummaryEn: "Visual transformation from myth to biological form."
  },
  zhubieyu: {
    id: "zhubieyu",
    name: "珠鳖鱼",
    nameEn: "Zhu Bie Fish",
    image: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "其状如鳖而珠光闪烁，甚为美丽。",
    descriptionEn: "Turtle-like with pearlescent glow.",
    function: "佩之辟邪",
    functionEn: "Wards off evil",
    timeline: defaultTimeline,
    evolutionSummary: "珍宝意象在不同时代的艺术表达。",
    evolutionSummaryEn: "Treasure imagery across different eras."
  },
  jianyu: {
    id: "jianyu",
    name: "鱃鱼",
    nameEn: "Jian Fish",
    image: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "形似剑，锋利如刃，游速极快。",
    descriptionEn: "Sword-shaped, sharp and swift.",
    function: "制兵可锐",
    functionEn: "Sharpens weapons",
    timeline: defaultTimeline,
    evolutionSummary: "武器化形象的文化隐喻演变。",
    evolutionSummaryEn: "Evolution of weaponized imagery."
  },
  zhenyu: {
    id: "zhenyu",
    name: "箴鱼",
    nameEn: "Zhen Fish",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "状如针，刺人则愈疾。",
    descriptionEn: "Needle-like, heals through acupuncture.",
    function: "刺人疗疾",
    functionEn: "Heals diseases",
    timeline: defaultTimeline,
    evolutionSummary: "医疗功能的视觉化表达。",
    evolutionSummaryEn: "Visual expression of healing properties."
  },
  tiayu: {
    id: "tiayu",
    name: "䲃鱼",
    nameEn: "Tiao Fish",
    image: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "形态飘逸，如丝带舞动于水中。",
    descriptionEn: "Graceful form like ribbons in water.",
    function: "观之怡情",
    functionEn: "Pleases the mind",
    timeline: defaultTimeline,
    evolutionSummary: "优雅形态的诗意表达。",
    evolutionSummaryEn: "Poetic expression of grace."
  },
  ranyiyu: {
    id: "ranyiyu",
    name: "冉遗鱼",
    nameEn: "Ran Yi Fish",
    image: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "鱼身蛇首，能行于陆，其音如婴儿啼。",
    descriptionEn: "Fish body with snake head, can walk on land.",
    function: "食之无疫",
    functionEn: "Prevents plague",
    timeline: defaultTimeline,
    evolutionSummary: "两栖特性的奇幻想象。",
    evolutionSummaryEn: "Fantastic imagination of amphibious nature."
  },
  feiyu: {
    id: "feiyu",
    name: "飞鱼",
    nameEn: "Flying Fish",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "有翼能飞，翱翔于天际与水面之间。",
    descriptionEn: "Winged fish that flies between sky and water.",
    function: "见之吉祥",
    functionEn: "Brings good fortune",
    timeline: defaultTimeline,
    evolutionSummary: "飞行意象的超越性表达。",
    evolutionSummaryEn: "Transcendent expression of flight."
  },
  hujiao: {
    id: "hujiao",
    name: "虎蛟",
    nameEn: "Tiger Dragon",
    image: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "蛟首虎纹，凶猛异常，号声如雷。",
    descriptionEn: "Dragon head with tiger stripes, fierce and powerful.",
    function: "辟水火",
    functionEn: "Controls water and fire",
    timeline: defaultTimeline,
    evolutionSummary: "威猛力量的图腾化演变。",
    evolutionSummaryEn: "Totemic evolution of fierce power."
  },
  boyu: {
    id: "boyu",
    name: "薄鱼",
    nameEn: "Bo Fish",
    image: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "形薄如纸，游于清流，身透如玉。",
    descriptionEn: "Thin as paper, transparent as jade.",
    function: "食之轻身",
    functionEn: "Lightens the body",
    timeline: defaultTimeline,
    evolutionSummary: "轻盈透明的美学追求。",
    evolutionSummaryEn: "Aesthetic pursuit of lightness."
  },
  ciyu: {
    id: "ciyu",
    name: "茈鱼",
    nameEn: "Ci Fish",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "色紫如茈草，身有异香。",
    descriptionEn: "Purple like zicao herb, fragrant body.",
    function: "佩之香身",
    functionEn: "Perfumes the body",
    timeline: defaultTimeline,
    evolutionSummary: "色彩与香气的通感表达。",
    evolutionSummaryEn: "Synesthetic expression of color and scent."
  },
  jiangfuyu: {
    id: "jiangfuyu",
    name: "䱤父鱼",
    nameEn: "Jiang Fu Fish",
    image: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "大如舟，载人渡水，性温驯。",
    descriptionEn: "Large as boat, carries people across water.",
    function: "可为舟",
    functionEn: "Serves as vessel",
    timeline: defaultTimeline,
    evolutionSummary: "实用功能的神话想象。",
    evolutionSummaryEn: "Mythic imagination of practical utility."
  },
  haoyu: {
    id: "haoyu",
    name: "豪鱼",
    nameEn: "Hao Fish",
    image: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "身披长毛如豪猪，刺有剧毒。",
    descriptionEn: "Covered in spines like porcupine.",
    function: "毒可制药",
    functionEn: "Venom for medicine",
    timeline: defaultTimeline,
    evolutionSummary: "危险与药用的双重性。",
    evolutionSummaryEn: "Duality of danger and healing."
  },
  chigui: {
    id: "chigui",
    name: "赤鲑",
    nameEn: "Red Salmon",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《西山经》",
    sourceEn: "Xishan Classic",
    description: "赤如火焰，游于昆仑之水，神圣不可侵。",
    descriptionEn: "Red as flames, sacred fish of Kunlun.",
    function: "食之长寿",
    functionEn: "Grants longevity",
    timeline: defaultTimeline,
    evolutionSummary: "圣洁与长生的文���象征。",
    evolutionSummaryEn: "Cultural symbol of sanctity and immortality."
  },
  luoyu: {
    id: "luoyu",
    name: "蠃鱼",
    nameEn: "Luo Fish",
    image: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "鱼身鸟翼，声如鸳鸯，见之天下安。",
    descriptionEn: "Fish body with bird wings, auspicious creature.",
    function: "见之太平",
    functionEn: "Brings peace",
    timeline: defaultTimeline,
    evolutionSummary: "和平意象的视觉演绎。",
    evolutionSummaryEn: "Visual interpretation of peace."
  },
  zhuanyu: {
    id: "zhuanyu",
    name: "鱄鱼",
    nameEn: "Zhuan Fish",
    image: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "身有文采，游于黑水，光芒如星。",
    descriptionEn: "Patterned body, shines like stars in dark waters.",
    function: "照夜明",
    functionEn: "Illuminates darkness",
    timeline: defaultTimeline,
    evolutionSummary: "光明意象的神话表达。",
    evolutionSummaryEn: "Mythic expression of illumination."
  },
  xiyu: {
    id: "xiyu",
    name: "鰠鱼",
    nameEn: "Xi Fish",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "形似鲟而巨大，力大无穷。",
    descriptionEn: "Sturgeon-like, enormous and powerful.",
    function: "力举千钧",
    functionEn: "Immense strength",
    timeline: defaultTimeline,
    evolutionSummary: "力量崇拜的形象化。",
    evolutionSummaryEn: "Visualization of strength worship."
  },
  wenyao: {
    id: "wenyao",
    name: "文鳐鱼",
    nameEn: "Wen Yao Fish",
    image: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "身有文章如锦绣，游姿优雅。",
    descriptionEn: "Body adorned with patterns like brocade.",
    function: "观之增智",
    functionEn: "Enhances wisdom",
    timeline: defaultTimeline,
    evolutionSummary: "文化与智慧的象征演变。",
    evolutionSummaryEn: "Evolution of cultural and wisdom symbolism."
  },
  renyu: {
    id: "renyu",
    name: "人鱼",
    nameEn: "Mermaid",
    image: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "上半人形，下半鱼尾，声音悲婉动人。",
    descriptionEn: "Upper body human, lower body fish tail.",
    function: "泪化珍珠",
    functionEn: "Tears become pearls",
    timeline: defaultTimeline,
    evolutionSummary: "人鱼形象的跨文化演变。",
    evolutionSummaryEn: "Cross-cultural evolution of mermaid imagery."
  },
  shuyu: {
    id: "shuyu",
    name: "儵鱼",
    nameEn: "Shu Fish",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "游速如电，倏忽而过，难以捕捉。",
    descriptionEn: "Swift as lightning, elusive and fast.",
    function: "速行千里",
    functionEn: "Incredible speed",
    timeline: defaultTimeline,
    evolutionSummary: "速度美学的视觉表达。",
    evolutionSummaryEn: "Visual expression of speed aesthetics."
  },
  jiyu: {
    id: "jiyu",
    name: "鮆鱼",
    nameEn: "Ji Fish",
    image: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "形小味美，成群游弋，银光闪烁。",
    descriptionEn: "Small and delicious, swims in schools.",
    function: "食之美味",
    functionEn: "Delicacy",
    timeline: defaultTimeline,
    evolutionSummary: "日常与神话的交融。",
    evolutionSummaryEn: "Integration of mundane and mythic."
  },
  weiyu: {
    id: "weiyu",
    name: "鮪",
    nameEn: "Wei Fish",
    image: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "大鱼也，游于碧水，肉质鲜美。",
    descriptionEn: "Large fish with delicious flesh.",
    function: "食之强身",
    functionEn: "Strengthens body",
    timeline: defaultTimeline,
    evolutionSummary: "食用价值的文化意义。",
    evolutionSummaryEn: "Cultural significance of culinary value."
  },
  luoyu2: {
    id: "luoyu2",
    name: "鯥",
    nameEn: "Luo Fish",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "鳞片金色，游于清溪，价值连城。",
    descriptionEn: "Golden scales, extremely valuable.",
    function: "鳞可为药",
    functionEn: "Scales used as medicine",
    timeline: defaultTimeline,
    evolutionSummary: "财富象征的艺术表现。",
    evolutionSummaryEn: "Artistic representation of wealth symbolism."
  },
  yongyong: {
    id: "yongyong",
    name: "鱅鱅",
    nameEn: "Yong Yong Fish",
    image: "https://images.unsplash.com/photo-1567800291759-3e3b92d8ba2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwYXJ0fGVufDF8fHx8MTc2MjgwMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "双身连体，游动如舞，形态奇特。",
    descriptionEn: "Twin-bodied, dances through water.",
    function: "见之和合",
    functionEn: "Brings harmony",
    timeline: defaultTimeline,
    evolutionSummary: "双生意象的哲学表达。",
    evolutionSummaryEn: "Philosophical expression of duality."
  },
  guguyu: {
    id: "guguyu",
    name: "鮯鮯鱼",
    nameEn: "Gu Gu Fish",
    image: "https://images.unsplash.com/photo-1696283109441-bb8d3acaf785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpc2glMjBwYWludGluZ3xlbnwxfHx8fDE3NjI4MzMzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "叫声如鼓，震慑四方，威猛异常。",
    descriptionEn: "Sounds like drums, intimidating presence.",
    function: "声可辟邪",
    functionEn: "Voice wards off evil",
    timeline: defaultTimeline,
    evolutionSummary: "声音图像的联觉表达。",
    evolutionSummaryEn: "Synesthetic expression of sound imagery."
  },
  wenyu: {
    id: "wenyu",
    name: "文鱼",
    nameEn: "Wen Fish",
    image: "https://images.unsplash.com/photo-1602226534254-cd13d1255761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbXl0aGljYWwlMjBmaXNofGVufDF8fHx8MTc2MjgzMzMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    source: "《山海经》",
    sourceEn: "Shan Hai Jing",
    description: "身披文采，如书卷展开，智慧化身。",
    descriptionEn: "Adorned with patterns like scrolls, embodies wisdom.",
    function: "食之聪慧",
    functionEn: "Enhances intelligence",
    timeline: defaultTimeline,
    evolutionSummary: "文字与鱼形的隐喻融合。",
    evolutionSummaryEn: "Metaphoric fusion of text and fish form."
  }
};
