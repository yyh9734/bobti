// =========================================================================
// BOBTI Google Sheets 자동 저장용 Apps Script 코드 (복사해서 붙여넣기용)
// =========================================================================
// 사용 방법:
// 1. Google Sheets(스프레드시트)를 새로 하나 만듭니다. (제목: BOBTI 응답 기록 등)
// 2. 상단 메뉴에서 [확장 프로그램] -> [Apps Script] 클릭
// 3. 기존 코드를 모두 지우고 아래 코드를 그대로 붙여넣습니다.
// 4. 우측 상단 [배포] -> [새 배포] 클릭
// 5. 유형 선택: [웹 앱] 선택
//    - 설명: BOBTI Webhook
//    - 다음 사용자로 실행: [나]
//    - 액세스 권한이 있는 사용자: [모든 사용자] (Anyone)  <-- 중요!
// 6. [배포] 클릭 후 승인 절차를 마치면 주어지는 '웹 앱 URL'을 복사합니다.
// 7. bobti 웹페이지 하단 [⚙️ Google Sheets 연동 설정]에 붙여넣기만 하면 끝!
// =========================================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 시트가 비어있으면 헤더 행 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "일시",
        "참가자 1",
        "성향 1",
        "참가자 2",
        "성향 2",
        "커플 성향",
        "선호 테마",
        "추천 Opening",
        "추천 Main",
        "추천 Next Step"
      ]);
      sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#e0e7ff");
    }

    var data = JSON.parse(e.postData.contents);

    var timestamp = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
    var user1Str = (data.user1Name || "") + " (" + (data.user1Code || "") + " " + (data.user1Title || "") + ")";
    var user2Str = (data.user2Name || "") + " (" + (data.user2Code || "") + " " + (data.user2Title || "") + ")";
    var coupleStr = (data.coupleCode || "") + " " + (data.coupleTitle || "");
    var themes = (data.themes || []).join(", ");
    var opening = (data.opening || []).join(", ");
    var main = (data.main || []).join(", ");
    var next = (data.next || []).join(", ");

    sheet.appendRow([
      timestamp,
      data.user1Name || "",
      (data.user1Code || "") + " " + (data.user1Title || ""),
      data.user2Name || "",
      (data.user2Code || "") + " " + (data.user2Title || ""),
      coupleStr,
      themes,
      opening,
      main,
      next
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
