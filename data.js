// 보유 게임 41종 및 4축 태깅 데이터 & 메타데이터
// 4축 범위: -2 ~ +2 (V: -2 ~ C: +2 / B: -2 ~ S: +2 / D: -2 ~ L: +2 / A: -2 ~ G: +2)
const GAMES_DATA = [
  // For Babies & Very Easy (Opening 후보군 중심)
  {
    id: 1,
    name: "서퍼사우르스 맥스",
    weight: 1.19,
    players: "3~6인 (최적 3인)",
    minP: 3, maxP: 6,
    time: "20분",
    timeMinutes: 20,
    tags: ["일상", "공룡", "포커족보"],
    rating: 7.0, hostRating: 7.0,
    axes: { vc: 0, bs: 1, dl: 2, ag: 0 },
    summary: "서핑하는 공룡들과 함께하는 가벼운 세미 협력 카드 게임"
  },
  {
    id: 2,
    name: "도블",
    weight: 1.04,
    players: "2~7인 (최적 4~5인)",
    minP: 2, maxP: 7,
    time: "10분",
    timeMinutes: 10,
    tags: ["일상", "순발력", "패턴"],
    rating: 6.5, hostRating: 4.0,
    axes: { vc: -1, bs: 2, dl: 2, ag: -1 },
    summary: "1초의 반응으로 승부가 갈리는 번개 같은 관찰력 배틀!"
  },
  {
    id: 3,
    name: "5초 준다",
    weight: 1.10,
    players: "3인 이상 (최적 4~6인)",
    minP: 3, maxP: 8,
    time: "20분",
    timeMinutes: 20,
    tags: ["일상", "순발력", "단어"],
    rating: 5.5, hostRating: 6.0,
    axes: { vc: -1, bs: 2, dl: 2, ag: 0 },
    summary: "문제를 듣고 5초 안에 3가지 정답을 외쳐야 하는 스피드 퀴즈!"
  },
  {
    id: 4,
    name: "바퀴벌레 포커",
    weight: 1.10,
    players: "2~6인 (최적 5인)",
    minP: 2, maxP: 6,
    time: "30분",
    timeMinutes: 30,
    tags: ["유머", "블러핑", "심리전"],
    rating: 6.6, hostRating: 4.5,
    axes: { vc: -2, bs: 1, dl: 1, ag: -2 },
    summary: "귀여운 해충 카드로 상대방을 속이고 약올리는 블러핑의 대명사"
  },
  {
    id: 5,
    name: "진라면 보드게임",
    weight: 1.18,
    players: "2~5인 (최적 4인)",
    minP: 2, maxP: 5,
    time: "20분",
    timeMinutes: 20,
    tags: ["음식", "라면", "셋컬렉션"],
    rating: 6.5, hostRating: 6.0,
    axes: { vc: -1, bs: 1, dl: 1, ag: 1 },
    summary: "재료를 모아 나만의 완벽한 한 그릇 라면을 끓이는 가벼운 게임"
  },
  {
    id: 6,
    name: "스트라이크",
    weight: 1.03,
    players: "2~5인 (최적 4~5인)",
    minP: 2, maxP: 5,
    time: "10분",
    timeMinutes: 10,
    tags: ["일상", "주사위", "피지컬"],
    rating: 7.0, hostRating: 6.5,
    axes: { vc: -1, bs: 2, dl: 2, ag: -1 },
    summary: "아레나에 주사위를 던져 같은 눈을 획득하는 손맛 넘치는 게임"
  },
  {
    id: 7,
    name: "다잉메시지",
    weight: 1.00,
    players: "2~6인",
    minP: 2, maxP: 6,
    time: "30분",
    timeMinutes: 30,
    tags: ["추리", "한글", "미스터리"],
    rating: 7.1, hostRating: 6.0,
    axes: { vc: -1, bs: 0, dl: 1, ag: 0 },
    summary: "희생자가 남긴 자음/모음 다잉메시지를 추리해 범인을 찾는 파티 추리 게임"
  },
  {
    id: 8,
    name: "루미큐브",
    weight: 1.72,
    players: "2~4인 (최적 4인)",
    minP: 2, maxP: 4,
    time: "30분",
    timeMinutes: 30,
    tags: ["추상", "숫자", "타일"],
    rating: 6.5, hostRating: 6.5,
    axes: { vc: -1, bs: -1, dl: 1, ag: 1 },
    summary: "숫자 타일을 조합하고 재배치하는 영원한 스테디셀러"
  },
  {
    id: 9,
    name: "캐슬 콤보",
    weight: 1.73,
    players: "2~5인 (최적 2인)",
    minP: 2, maxP: 5,
    time: "20분",
    timeMinutes: 20,
    tags: ["판타지", "카드", "콤보"],
    rating: 7.6, hostRating: 7.0,
    axes: { vc: -1, bs: -1, dl: 1, ag: 2 },
    summary: "3x3 격자에 카드를 배치하며 시너지를 터뜨리는 똑똑한 카드 게임"
  },
  {
    id: 10,
    name: "이개누구개",
    weight: 1.50,
    players: "2~6인",
    minP: 2, maxP: 6,
    time: "15분",
    timeMinutes: 15,
    tags: ["일상", "기억력", "강아지"],
    rating: 6.0, hostRating: 5.5,
    axes: { vc: -1, bs: 1, dl: 2, ag: 0 },
    summary: "귀여운 강아지들의 이름을 기억하고 외치는 유쾌한 순발력 기억 게임"
  },
  {
    id: 11,
    name: "타코캣치즈고트피자",
    weight: 1.04,
    players: "2~8인 (최적 4~6인)",
    minP: 2, maxP: 8,
    time: "15분",
    timeMinutes: 15,
    tags: ["일상", "순발력", "파티"],
    rating: 6.5, hostRating: 4.0,
    axes: { vc: -1, bs: 2, dl: 2, ag: -1 },
    summary: "단어를 외치며 카드가 일치할 때 번개처럼 손을 얹는 파티 게임"
  },
  {
    id: 12,
    name: "카르디아",
    weight: 1.73,
    players: "2인 or 4인",
    minP: 2, maxP: 4,
    time: "15분",
    timeMinutes: 15,
    tags: ["판타지", "카드", "심리전"],
    rating: 7.6, hostRating: 7.0,
    axes: { vc: -2, bs: 0, dl: 1, ag: -1 },
    summary: "이기면 반지, 지면 특수 능력! 5개의 반지를 먼저 모으는 듀얼 카드 게임"
  },
  {
    id: 13,
    name: "오딘",
    weight: 1.22,
    players: "2~6인",
    minP: 2, maxP: 6,
    time: "15분",
    timeMinutes: 15,
    tags: ["판타지", "클라이밍", "카드털기"],
    rating: 6.8, hostRating: 6.0,
    axes: { vc: -1, bs: 0, dl: 1, ag: -1 },
    summary: "손패를 가장 먼저 털어버려야 승리하는 바이킹 테마의 세련된 클라이밍 게임"
  },
  {
    id: 14,
    name: "잠만보 다이스게임",
    weight: 1.18,
    players: "2~10인",
    minP: 2, maxP: 10,
    time: "30분",
    timeMinutes: 30,
    tags: ["일상", "포켓몬", "주사위"],
    rating: 5.5, hostRating: 6.0,
    axes: { vc: -1, bs: 1, dl: 2, ag: 1 },
    summary: "귀여운 잠만보와 함께 즐기는 얏찌 스타일의 주사위 족보 완성 게임"
  },
  {
    id: 15,
    name: "헤일 하이드라!",
    weight: 1.89,
    players: "5~8인 (최적 6인)",
    minP: 5, maxP: 8,
    time: "60분",
    timeMinutes: 60,
    tags: ["히어로", "마블", "마피아"],
    rating: 6.4, hostRating: 7.0,
    axes: { vc: -1, bs: 0, dl: 0, ag: -2 },
    summary: "어벤져스 속에 숨은 하이드라 배신자를 색출하는 소셜 디덕션 (5인 이상 전용)",
    excludeFor4P: true
  },
  {
    id: 16,
    name: "라스베가스",
    weight: 1.17,
    players: "2~5인 (최적 4인)",
    minP: 2, maxP: 5,
    time: "30분",
    timeMinutes: 30,
    tags: ["경제", "카지노", "주사위"],
    rating: 7.2, hostRating: 6.5,
    axes: { vc: -2, bs: 1, dl: 1, ag: -1 },
    summary: "카지노마다 주사위를 걸고 치열한 눈치싸움 끝에 지폐를 털어가는 명작 파티 게임"
  },
  {
    id: 17,
    name: "핫스트릭",
    weight: 1.20,
    players: "2~9인",
    minP: 2, maxP: 9,
    time: "20분",
    timeMinutes: 20,
    tags: ["일상", "레이싱", "베팅"],
    rating: 7.5, hostRating: 7.0,
    axes: { vc: -1, bs: 1, dl: 2, ag: -1 },
    summary: "마스코트들의 요절복통 레이스에 베팅하고 환호하는 고텐션 파티 레이싱"
  },

  // Easy & Medium (Main 후보군 중심)
  {
    id: 18,
    name: "태그팀",
    weight: 2.00,
    players: "2인 전용",
    minP: 2, maxP: 2,
    time: "10분",
    timeMinutes: 10,
    tags: ["격투", "오토배틀", "덱빌딩"],
    rating: 7.9, hostRating: 8.0,
    axes: { vc: -2, bs: -1, dl: 1, ag: -2 },
    summary: "12명의 파이터 중 2명을 조합해 맞붙는 2인 전용 오토배틀 덱빌딩",
    excludeFor4P: true
  },
  {
    id: 19,
    name: "좋은 놈 나쁜 놈 염소",
    weight: 2.00,
    players: "2~5인",
    minP: 2, maxP: 5,
    time: "35분",
    timeMinutes: 35,
    tags: ["서부", "블러핑", "심리전"],
    rating: 7.0, hostRating: 7.5,
    axes: { vc: -2, bs: 0, dl: 1, ag: -2 },
    summary: "서부 시대를 배경으로 상대에게 꽝 카드를 넘기고 실속을 챙기는 블러핑 카드게임"
  },
  {
    id: 20,
    name: "멸종에서 살아남기",
    weight: 1.33,
    players: "2~10인",
    minP: 2, maxP: 10,
    time: "20분",
    timeMinutes: 20,
    tags: ["자연", "공룡", "생존"],
    rating: 6.1, hostRating: 7.0,
    axes: { vc: -1, bs: 1, dl: 2, ag: -1 },
    summary: "운석 충돌과 재앙 속에서 내 공룡을 단 1초라도 더 살아남게 만드는 서바이벌"
  },
  {
    id: 21,
    name: "스플렌더 마블",
    weight: 1.81,
    players: "2~4인 (최적 3인)",
    minP: 2, maxP: 4,
    time: "30분",
    timeMinutes: 30,
    tags: ["히어로", "마블", "엔진빌딩"],
    rating: 7.6, hostRating: 6.5,
    axes: { vc: -1, bs: -1, dl: 0, ag: 1 },
    summary: "인피니티 스톤을 모아 히어로들을 영입하고 인피니티 건틀렛을 완성하라!"
  },
  {
    id: 22,
    name: "딥 씨 크루",
    weight: 2.04,
    players: "3~5인 (최적 4인)",
    minP: 3, maxP: 5,
    time: "25분",
    timeMinutes: 25,
    tags: ["탐험", "협력", "트릭테이킹"],
    rating: 8.1, hostRating: 8.0,
    axes: { vc: 2, bs: -1, dl: 0, ag: 1 },
    summary: "말 없이 카드와 신호만으로 깊은 바닷속 미션을 함께 해결하는 최고의 협력 명작"
  },
  {
    id: 23,
    name: "쿠키런 킹덤 보드게임",
    weight: 2.00,
    players: "2~4인 (최적 3인)",
    minP: 2, maxP: 4,
    time: "45분",
    timeMinutes: 45,
    tags: ["음식", "판타지", "일꾼배치"],
    rating: 6.5, hostRating: 7.0,
    axes: { vc: -1, bs: 0, dl: 0, ag: 1 },
    summary: "친숙한 쿠키들과 함께 왕국을 꾸미고 몬스터를 물리치는 가벼운 전략 게임"
  },
  {
    id: 24,
    name: "상인들의 계곡",
    weight: 2.08,
    players: "2~4인 (최적 2~3인)",
    minP: 2, maxP: 4,
    time: "30분",
    timeMinutes: 30,
    tags: ["경제", "덱빌딩", "동물"],
    rating: 7.2, hostRating: 7.0,
    axes: { vc: -1, bs: -1, dl: 1, ag: 0 },
    summary: "귀여운 동물 상인들의 카드를 사 모아 가판대에 먼저 진열하는 스피디한 덱빌딩 레이스"
  },
  {
    id: 25,
    name: "플립타운",
    weight: 2.41,
    players: "1~4인",
    minP: 1, maxP: 4,
    time: "40분",
    timeMinutes: 40,
    tags: ["서부", "플립앤라이트", "포커"],
    rating: 7.8, hostRating: 7.5,
    axes: { vc: -1, bs: 0, dl: 0, ag: 2 },
    summary: "포커 카드를 뒤집어 서부 마을의 은행, 살롱, 황야를 개척하는 플립 앤 라이트"
  },
  {
    id: 26,
    name: "용스팬 (Wyrmspan)",
    weight: 2.80,
    players: "1~4인 (최적 3인)",
    minP: 1, maxP: 4,
    time: "90분",
    timeMinutes: 90,
    tags: ["판타지", "엔진빌딩", "용수집"],
    rating: 8.0, hostRating: 7.5,
    axes: { vc: -1, bs: -1, dl: -1, ag: 2 },
    summary: "세 개의 동굴을 개발하고 신비로운 용들을 안식처로 유치하는 콤보 엔진빌딩의 정수"
  },
  {
    id: 27,
    name: "백로성 (The White Castle)",
    weight: 3.05,
    players: "1~4인 (최적 3인)",
    minP: 1, maxP: 4,
    time: "80분",
    timeMinutes: 80,
    tags: ["아시아", "주사위배치", "전략"],
    rating: 8.0, hostRating: 9.0,
    axes: { vc: -1, bs: -2, dl: -1, ag: 1 },
    summary: "히메지 성에서 주사위를 굴려 가문의 정원사와 무사를 배치하는 알차고 담백한 유로 전략"
  },
  {
    id: 28,
    name: "지소기 (Jisogi: Anime Studio)",
    weight: 2.90,
    players: "1~4인",
    minP: 1, maxP: 4,
    time: "80분",
    timeMinutes: 80,
    tags: ["아시아", "일꾼배치", "경영"],
    rating: 7.5, hostRating: 7.5,
    axes: { vc: -1, bs: -1, dl: -1, ag: 1 },
    summary: "빚을 갚기 위해 멈추지 않고 히트 애니메이션을 제작하는 쫄깃한 스튜디오 경영"
  },

  // Hard & Insane (Next Step 후보군)
  {
    id: 29,
    name: "테라포밍 마스",
    weight: 3.27,
    players: "1~4인 (최적 3인)",
    minP: 1, maxP: 4,
    time: "100분",
    timeMinutes: 100,
    tags: ["SF", "화성개척", "자원관리"],
    rating: 8.3, hostRating: 8.5,
    axes: { vc: -1, bs: -2, dl: -2, ag: 1 },
    summary: "거대 기업을 이끌어 붉은 행성 화성을 녹색 행성으로 개척하는 전설의 엔진빌딩"
  },
  {
    id: 30,
    name: "마블 챔피언스 카드게임",
    weight: 2.95,
    players: "1~4인 (최적 2인)",
    minP: 1, maxP: 4,
    time: "60분",
    timeMinutes: 60,
    tags: ["히어로", "마블", "협력카드"],
    rating: 8.1, hostRating: 9.5,
    axes: { vc: 2, bs: -1, dl: -1, ag: 0 },
    summary: "나만의 덱을 짠 마블 히어로들이 힘을 합쳐 강력한 빌런의 음모를 저지하는 협력 LCG"
  },
  {
    id: 31,
    name: "오를로이 (Orloj)",
    weight: 3.55,
    players: "1~4인",
    minP: 1, maxP: 4,
    time: "90분",
    timeMinutes: 90,
    tags: ["역사", "일꾼배치", "론델"],
    rating: 7.8, hostRating: 7.8,
    axes: { vc: -1, bs: -2, dl: -1, ag: 1 },
    summary: "프라하의 명물 천문시계를 복원하고 사도들을 조각하는 지적인 정통 유로게임"
  },
  {
    id: 32,
    name: "듄 임페리움 : 봉기",
    weight: 3.50,
    players: "3~4인",
    minP: 3, maxP: 4,
    time: "90분",
    timeMinutes: 90,
    tags: ["SF", "덱빌딩", "일꾼배치", "전투"],
    rating: 8.7, hostRating: 9.1,
    axes: { vc: -2, bs: -2, dl: -2, ag: -1 },
    summary: "모래혹성 아라키스의 패권을 두고 벌어지는 치열한 덱빌딩과 전투, 권모술수"
  },
  {
    id: 33,
    name: "루티어 (Luthier)",
    weight: 3.84,
    players: "1~4인 (최적 3인)",
    minP: 1, maxP: 4,
    time: "120분",
    timeMinutes: 120,
    tags: ["예술", "음악", "경영"],
    rating: 8.3, hostRating: 9.2,
    axes: { vc: -1, bs: -2, dl: -2, ag: 1 },
    summary: "모차르트, 베토벤의 시대! 최고의 명품 악기를 제작하여 후원자들의 갈채를 받으세요"
  },
  {
    id: 34,
    name: "섀클턴 베이스",
    weight: 3.80,
    players: "1~4인 (최적 3인)",
    minP: 1, maxP: 4,
    time: "90분",
    timeMinutes: 90,
    tags: ["SF", "달개척", "일꾼배치"],
    rating: 8.0, hostRating: 8.5,
    axes: { vc: -1, bs: -2, dl: -2, ag: 0 },
    summary: "달의 남극 분화구에 과학자와 기지를 파견해 주도권을 잡는 심도 깊은 우주 전략"
  },
  {
    id: 35,
    name: "루트 (Root)",
    weight: 3.83,
    players: "1~6인 (최적 4인)",
    minP: 1, maxP: 6,
    time: "80분",
    timeMinutes: 80,
    tags: ["판타지", "비대칭전략", "전투"],
    rating: 8.1, hostRating: 9.6,
    axes: { vc: -2, bs: -1, dl: -1, ag: -2 },
    summary: "숲속 동물 세력들의 치열한 패권 다툼! 완전히 다른 규칙으로 맞붙는 비대칭 전략의 정점"
  },
  {
    id: 36,
    name: "아크노바 (Ark Nova)",
    weight: 3.78,
    players: "1~4인 (최적 2인)",
    minP: 1, maxP: 4,
    time: "120분",
    timeMinutes: 120,
    tags: ["자연", "동물원", "카드관리"],
    rating: 8.5, hostRating: 9.4,
    axes: { vc: -1, bs: -2, dl: -2, ag: 1 },
    summary: "현대적 동물원을 설계하고 생태 보존 프로젝트를 추진하는 전 세계 랭킹 최상위 명작"
  },
  {
    id: 37,
    name: "브라스: 버밍엄",
    weight: 3.90,
    players: "2~4인",
    minP: 2, maxP: 4,
    time: "100분",
    timeMinutes: 100,
    tags: ["경제", "산업혁명", "네트워크"],
    rating: 8.6, hostRating: 9.0,
    axes: { vc: -1, bs: -2, dl: -2, ag: 0 },
    summary: "산업혁명기 영국을 무대로 운하와 철도를 깔고 석탄, 맥주를 유통하는 보드게임 긱 종합 1위"
  },
  {
    id: 38,
    name: "정령섬 (Spirit Island)",
    weight: 4.06,
    players: "1~4인 (최적 2인)",
    minP: 1, maxP: 4,
    time: "100분",
    timeMinutes: 100,
    tags: ["판타지", "자연수호", "협력"],
    rating: 8.3, hostRating: 8.8,
    axes: { vc: 2, bs: -2, dl: -2, ag: -1 },
    summary: "섬을 침략해 오염시키는 개척자들을 신비한 정령이 되어 쓸어버리는 브레인버닝 협력 명작"
  },
  {
    id: 39,
    name: "비뉴스 (Vinhos Deluxe)",
    weight: 3.99,
    players: "1~4인 (최적 4인)",
    minP: 1, maxP: 4,
    time: "120분",
    timeMinutes: 120,
    tags: ["예술", "와인경영", "비딸라세르다"],
    rating: 8.1, hostRating: 8.8,
    axes: { vc: -1, bs: -2, dl: -2, ag: 1 },
    summary: "포르투갈의 최고 와인 양조자가 되어 포도원을 가꾸고 박람회에 출품하는 비딸 라세르다 입문작"
  },
  {
    id: 40,
    name: "칸반 EV (Kanban EV)",
    weight: 4.30,
    players: "1~4인 (최적 3인)",
    minP: 1, maxP: 4,
    time: "120분",
    timeMinutes: 120,
    tags: ["경제", "자동차공장", "비딸라세르다"],
    rating: 8.4, hostRating: 9.5,
    axes: { vc: -1, bs: -2, dl: -2, ag: 0 },
    summary: "깐깐한 공장장 산드라의 시선을 피해 전기차 조립 라인을 효율화하는 궁극의 유로 전략"
  },
  {
    id: 41,
    name: "온마스 (On Mars)",
    weight: 4.63,
    players: "1~4인 (최적 3인)",
    minP: 1, maxP: 4,
    time: "130분",
    timeMinutes: 130,
    tags: ["SF", "화성개척", "비딸라세르다"],
    rating: 8.2, hostRating: 9.2,
    axes: { vc: -1, bs: -2, dl: -2, ag: 1 },
    summary: "궤도 우주정거장과 화성 표면을 오가며 인류 정착지를 건설하는 가장 심오하고 지적인 우주 서사시"
  }
];

// 16가지 성향 유형 정의
const BOBTI_TYPES = {
  VBDA: { title: "전략 사령관", icon: "🗡️", desc: "깊은 수읽기로 판을 장악하고, 상대를 꺾을 때 가장 짜릿함을 느끼는 승부사 타입!" },
  VBDG: { title: "요새 건축가", icon: "🏰", desc: "치밀한 계획과 효율적인 빌드업으로 누구도 넘볼 수 없는 나만의 제국을 짓는 전략가!" },
  VBLA: { title: "번개 듀얼러", icon: "⚡", desc: "빠르고 날카로운 두뇌회전으로 허를 찌르며 경쾌하게 상대를 제압하는 스피드 전략가!" },
  VBLG: { title: "퍼즐 레이서", icon: "🧩", desc: "남을 방해하기보단 내 콤보와 퍼즐을 효율적으로 맞추며 가볍고 깔끔한 승리를 추구하는 타입!" },
  VSDA: { title: "승부사 도박사", icon: "🎰", desc: "직감과 배짱으로 위기를 돌파하며, 판돈을 키워 한 방에 역전하는 짜릿한 승부사!" },
  VSDG: { title: "마스터 컬렉터", icon: "🎨", desc: "직관적인 센스로 멋진 카드와 자원을 모으며, 내 페이스대로 알차게 모아가는 수집가!" },
  VSLA: { title: "파티 트롤러", icon: "🎪", desc: "유쾌한 장난과 블러핑으로 테이블을 들었다 놨다 하며 현장 분위기를 주도하는 장난꾸러기!" },
  VSLG: { title: "행운의 사냥꾼", icon: "🎯", desc: "주사위와 운에 몸을 맡기고, 부담 없이 깔끔하게 즐기는 긍정적인 행운아!" },
  CBDA: { title: "전술 지휘관", icon: "🛡️", desc: "모두를 위해 치밀한 전술을 짜고 보스의 약점을 공략하며 팀을 캐리하는 든든한 리더!" },
  CBDG: { title: "연구원 파트너", icon: "🔬", desc: "팀원들과 머리를 맞대고 최적의 수를 토론하며 어려운 난제를 함께 풀어나가는 학구파!" },
  CBLA: { title: "팀 파이터", icon: "🤝", desc: "복잡하지 않은 직관적인 작전으로 팀원과 쿵짝을 맞춰 위기를 격파하는 스피드 협력파!" },
  CBLG: { title: "평화의 동반자", icon: "📚", desc: "서로 얼굴 붉힐 일 없이 편안하게 룰을 즐기며 함께 목표를 완수하는 온화한 플레이어!" },
  CSDA: { title: "직감 모험가", icon: "🌊", desc: "이론보단 본능적인 감각과 촉으로 팀을 위기에서 구해내는 와일드한 모험가!" },
  CSDG: { title: "힐러 가디언", icon: "🌿", desc: "느긋하고 따뜻하게 팀원들을 돕고 서로 배려하며 힐링하는 테이블의 수호천사!" },
  CSLA: { title: "분위기 메이커", icon: "🎲", desc: "왁자지껄 떠들고 웃으며 다함께 즐거운 추억을 만드는 테이블의 활력소!" },
  CSLG: { title: "아늑한 친구", icon: "🧸", desc: "스트레스 없이 가볍게, 둘러앉아 따뜻한 차 한 잔 마시듯 편안함을 즐기는 타입!" }
};

// 8가지 시나리오 문항 (일상 생활 밀착형)
const SCENARIO_QUESTIONS = [
  // 축 1: V(경쟁) vs C(협력)
  {
    id: "q1",
    axis: "vc",
    situation: "🏢 워크숍 액티비티",
    question: "회사나 동호회 워크숍에서 단체 프로그램을 고른다면?",
    options: [
      { text: "상금 걸린 팀 대항전! 우리 팀이 1등해서 이겨야 제맛이지", score: -2 },
      { text: "다 같이 힘을 합쳐 하나의 미션을 탈출하는 방탈출이 좋아", score: 2 },
      { text: "적당히 점수 내기하되, 너무 살벌하지 않은 퀴즈 게임 정도?", score: -1 }
    ]
  },
  {
    id: "q2",
    axis: "vc",
    situation: "🎮 불리한 게임 상황",
    question: "게임에서 내가 밀리고 있는 상황! 당신의 마음가짐은?",
    options: [
      { text: "어떻게든 역전의 한 방을 노린다! 지는 건 용납 못 해", score: -2 },
      { text: "승패가 뭐가 중요해~ 다 같이 웃고 즐겼으면 충분하지", score: 2 },
      { text: "이왕이면 이기면 좋겠지만, 분위기 깨지 않는 선에서 최선 다하기", score: 1 }
    ]
  },
  // 축 2: B(두뇌/계획) vs S(감각/직감)
  {
    id: "q3",
    axis: "bs",
    situation: "✈️ 여행 일정 짜기",
    question: "휴가 여행 계획을 세울 때 당신의 평소 스타일은?",
    options: [
      { text: "동선, 맛집, 예비 일정까지 엑셀이나 지도 앱에 분단위로 정리", score: -2 },
      { text: "숙소와 항공권만 잡고, 현지 기분과 날씨에 따라 즉흥으로 결정!", score: 2 },
      { text: "하루 1~2개 랜드마크만 정해두고 나머지는 여유롭게 발길 닿는 대로", score: 1 }
    ]
  },
  {
    id: "q4",
    axis: "bs",
    situation: "🍽️ 처음 가는 식당 메뉴",
    question: "낯선 맛집에서 메뉴를 고를 때 당신의 결정 방식은?",
    options: [
      { text: "방문자 리뷰, 별점, 가성비, 추천 조합을 꼼꼼히 비교 분석 후 픽", score: -2 },
      { text: "메뉴판 사진 딱 보고 '어? 맛있겠다!' 3초 만에 직감 픽", score: 2 },
      { text: "사장님이나 서버분에게 가장 잘나가는 시그니처 물어보고 픽", score: 1 }
    ]
  },
  // 축 3: D(깊은 몰입) vs L(가벼운 호흡)
  {
    id: "q5",
    axis: "dl",
    situation: "📺 영상 콘텐츠 시청",
    question: "주말에 영상을 볼 때 더 선호하는 콘텐츠 호흡은?",
    options: [
      { text: "세계관 탄탄한 16부작 대작 시리즈나 장편 영화 한 편 진득하게 정주행", score: -2 },
      { text: "유튜브 쇼츠, 릴스, 10분짜리 예능 클립을 부담 없이 여러 개 넘겨보기", score: 2 },
      { text: "8~10부작 넷플릭스 미니시리즈가 호흡도 깔끔하고 딱 적당해", score: -1 }
    ]
  },
  {
    id: "q6",
    axis: "dl",
    situation: "☕ 주말 취미 시간",
    question: "온전히 자유로운 3시간이 주어졌다면?",
    options: [
      { text: "새로운 악기, 조립 키트, 두꺼운 소설 등 한 가지에 푹 빠져 시간 보내기", score: -2 },
      { text: "카페 가고, 산책하고, 쇼핑 구경하고 여러 가지를 가볍게 즐기기", score: 2 },
      { text: "가벼운 마음으로 시작했다가 재밌으면 자연스럽게 길게 이어가기", score: -1 }
    ]
  },
  // 축 4: A(공격/견제) vs G(수비/빌드업)
  {
    id: "q7",
    axis: "ag",
    situation: "🎯 친구들과의 내기",
    question: "벌칙이 걸린 미니게임을 할 때 당신의 은근한 플레이 성향은?",
    options: [
      { text: "남한테 벌칙 맥이는 짜릿함이 최고지! 적극적으로 견제한다", score: -2 },
      { text: "난 벌칙만 안 걸리면 돼! 눈에 띄지 않게 조용히 내 실속만 챙긴다", score: 2 },
      { text: "상대를 적당히 흔들면서도 너무 밉상으로 보이지 않게 조율한다", score: -1 }
    ]
  },
  {
    id: "q8",
    axis: "ag",
    situation: "💰 자산 운용 마인드",
    question: "게임을 할 때 자원이나 포인트를 모으는 당신의 성향은?",
    options: [
      { text: "하이 리스크 하이 리턴! 기회다 싶으면 공격적으로 올인 베팅", score: -2 },
      { text: "차곡차곡 저축해서 탄탄한 기반을 먼저 쌓는 안정형 플레이", score: 2 },
      { text: "기본 자산은 안전하게 지키면서 보너스 포인트만 조금 공격적으로", score: 1 }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { GAMES_DATA, BOBTI_TYPES, SCENARIO_QUESTIONS };
}
