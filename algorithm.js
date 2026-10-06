// BOBTI 성향 도출 & 게임 추천 알고리즘 로직
if (typeof require !== 'undefined') {
  const data = require('./data.js');
  GAMES_DATA = data.GAMES_DATA;
  BOBTI_TYPES = data.BOBTI_TYPES;
  SCENARIO_QUESTIONS = data.SCENARIO_QUESTIONS;
}

function calculateIndividualBOBTI(userData) {
  // userData: { answers: { q1: score, ... } } 또는 { q1: score, ... }
  const answers = userData.answers || userData;
  const axesScores = { vc: 0, bs: 0, dl: 0, ag: 0 };

  SCENARIO_QUESTIONS.forEach(q => {
    const val = answers[q.id];
    if (typeof val === 'number') {
      axesScores[q.axis] += val;
    }
  });

  // 축 코드 결정 (-4 ~ +4)
  // 음수면 V, B, D, A / 양수 또는 0이면 C, S, L, G
  const code = [
    axesScores.vc < 0 ? 'V' : 'C',
    axesScores.bs < 0 ? 'B' : 'S',
    axesScores.dl < 0 ? 'D' : 'L',
    axesScores.ag < 0 ? 'A' : 'G'
  ].join('');

  return {
    code,
    typeInfo: BOBTI_TYPES[code] || BOBTI_TYPES['CSLG'],
    scores: axesScores
  };
}

function calculateCoupleProfile(user1Result, user2Result) {
  const c1 = user1Result.scores;
  const c2 = user2Result.scores;

  const avgScores = {
    vc: (c1.vc + c2.vc) / 2,
    bs: (c1.bs + c2.bs) / 2,
    dl: (c1.dl + c2.dl) / 2,
    ag: (c1.ag + c2.ag) / 2
  };

  // 불일치 여부 확인 (두 사람의 성향이 정반대인지)
  const conflicts = [];
  if (Math.sign(c1.vc) !== Math.sign(c2.vc) && Math.abs(c1.vc - c2.vc) >= 3) {
    conflicts.push({ axis: 'vc', text: '경쟁 vs 협력 성향이 서로 달라 중립적/유쾌한 게임이 적합합니다.' });
  }
  if (Math.sign(c1.bs) !== Math.sign(c2.bs) && Math.abs(c1.bs - c2.bs) >= 3) {
    conflicts.push({ axis: 'bs', text: '전략파 vs 직감파가 만나 룰이 너무 복잡하지 않으면서도 수싸움이 있는 게임이 좋습니다.' });
  }
  if (Math.sign(c1.ag) !== Math.sign(c2.ag) && Math.abs(c1.ag - c2.ag) >= 3) {
    conflicts.push({ axis: 'ag', text: '공격적인 인터랙션에 대한 온도차가 있어 평화로운 빌드업 게임이 안전합니다.' });
  }

  const coupleCode = [
    avgScores.vc < 0 ? 'V' : 'C',
    avgScores.bs < 0 ? 'B' : 'S',
    avgScores.dl < 0 ? 'D' : 'L',
    avgScores.ag < 0 ? 'A' : 'G'
  ].join('');

  return {
    avgScores,
    coupleCode,
    typeInfo: BOBTI_TYPES[coupleCode] || BOBTI_TYPES['CSLG'],
    conflicts
  };
}

// 4인 플레이 및 성향 매칭 계산
function matchGamesForCouple(user1Data, user2Data) {
  const user1 = calculateIndividualBOBTI(user1Data);
  const user2 = calculateIndividualBOBTI(user2Data);
  const couple = calculateCoupleProfile(user1, user2);

  // 선호 테마 통합
  const combinedThemes = Array.from(new Set([...(user1Data.themes || []), ...(user2Data.themes || [])]));
  // 이미 해본 게임 통합
  const combinedPlayed = Array.from(new Set([...(user1Data.played || []), ...(user2Data.played || [])]));

  // 4축 가중치: VC(30%), BS(25%), DL(25%), AG(20%)
  const weights = { vc: 0.30, bs: 0.25, dl: 0.25, ag: 0.20 };

  const scoredGames = GAMES_DATA.filter(game => {
    // 4인 플레이 가능 여부 검사 (태그팀 2인 전용, 헤일하이드라 5인이상 제외)
    if (game.excludeFor4P) return false;
    if (game.minP > 4 || game.maxP < 4) return false;
    return true;
  }).map(game => {
    // 축 점수 정규화: 게임 축 점수(-2~+2)를 사용자 축 점수 스케일(-4~+4)과 비교
    // 게임 점수에 x2를 곱하여 -4 ~ +4 스케일로 환산
    const gVC = game.axes.vc * 2;
    const gBS = game.axes.bs * 2;
    const gDL = game.axes.dl * 2;
    const gAG = game.axes.ag * 2;

    const diffVC = Math.abs(couple.avgScores.vc - gVC);
    const diffBS = Math.abs(couple.avgScores.bs - gBS);
    const diffDL = Math.abs(couple.avgScores.dl - gDL);
    const diffAG = Math.abs(couple.avgScores.ag - gAG);

    // 거리 총합 (최대 약 8)
    const weightedDiff = (diffVC * weights.vc) + (diffBS * weights.bs) + (diffDL * weights.dl) + (diffAG * weights.ag);
    let matchScore = Math.max(0, 100 - (weightedDiff * 10));

    // 테마 일치 보너스 (+8점)
    const hasMatchingTheme = game.tags.some(t => combinedThemes.includes(t));
    if (hasMatchingTheme) {
      matchScore += 8;
    }

    // 이미 해본 게임이면 살짝 페널티 또는 새로운 경험 우선 (+0 or -5)
    if (combinedPlayed.some(p => game.name.includes(p) || p.includes(game.name))) {
      matchScore -= 5;
    }

    // 호스트 평점이 높을수록 가산점 (+3점 범위)
    if (game.hostRating) {
      matchScore += (game.hostRating - 7.0) * 2;
    }

    return {
      ...game,
      matchScore: Math.round(matchScore * 10) / 10
    };
  });

  // 1. Opening Game (워밍업): 웨이트 <= 1.5, 시간 <= 30분
  const openingCandidates = scoredGames
    .filter(g => g.weight <= 1.5 && g.timeMinutes <= 30)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4);

  // 2. Main Game (오늘 밤의 메인): 웨이트 1.5 ~ 2.6, 시간 20~60분
  const mainCandidates = scoredGames
    .filter(g => g.weight >= 1.5 && g.weight <= 2.6 && g.timeMinutes <= 60)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4);

  // 3. Next Step (다음 모임 또는 심화 단계): 웨이트 2.4 ~ 3.9
  const nextCandidates = scoredGames
    .filter(g => g.weight >= 2.4 && g.weight <= 3.9)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4);

  return {
    user1,
    user2,
    couple,
    combinedThemes,
    recommendations: {
      opening: openingCandidates,
      main: mainCandidates,
      next: nextCandidates
    }
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculateIndividualBOBTI, calculateCoupleProfile, matchGamesForCouple };
}
