const oreums = [
  {
    _id: 1,
    oruem: "아부오름",
    place: "제주시 구좌읍 송당리",
    비고: 51,
    표고: 301.4,
    longitude: 126.777283,
    latitude: 33.448875,
    explain:
      "비고 51m의 원형 화구를 가진 오름이다.  거칠지 않은 산 체와 완만한 탐방로가 있어 여유로운 분위기의 오름이다.",
    image:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180103_151%2F151497768945650MMe_JPEG%2F147003571390791.jpg",
  },
  {
    _id: 2,
    oruem: "아끈다랑쉬",
    place: "제주시 구좌읍 세화리",
    비고: 58,
    표고: 198.0,
    longitude: 126.8306516,
    latitude: 33.47413717,
    explain:
      "비고 58m의 원형 화구를 지닌 화산체이다. 잡목들이 거의 없어 그늘을 찾기 어렵지만 짧은 시간 안에 큰 무리없이 탐방이 가능하다.",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzExMDdfMjI5%2FMDAxNTEwMDE5Mzg4MDgw.NDe94nXPKpAhWCb8VXDfbro3EpqNseISPOCXcAe8DT4g.S0uaa9plLWCITOJ9lolLtoydZKwjlB2XSJb3wtcnoCcg.JPEG.soon09143%2F_DSC6055%25C3%25E0%25BC%25D2.JPG%23900x585",
  },
  {
    _id: 3,
    oruem: "알밤오름",
    place: "제주시 조천읍 선흘리",
    비고: 154,
    표고: 393.6,
    longitude: 126.885675,
    latitude: 33.480757,
    explain:
      "비고 154m. 말굽형 형태의 오름. 산체가 밤알을 닮아 알밤오름이라 명칭되었다.",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150401_164%2Fkji206_1427894015322E2fXy_JPEG%2FDSC03515.JPG%23936x624",
  },
  {
    _id: 4,
    oruem: "알오름",
    place: "서귀포시 성산읍 시흥리",
    비고: 51,
    표고: 145.9,
    longitude: 126.713135,
    latitude: 33.489746,
    explain: "비고 51m의 원추형 화구를 지닌 화산체이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201908/13/bd043213-cc5f-492f-899c-2c2818c132c4.jpg",
  },
  {
    _id: 5,
    oruem: "안돌오름",
    place: "제주시 구좌읍 송당리",
    비고: 93,
    표고: 368.1,
    longitude: 126.757126,
    latitude: 33.455814,
    explain:
      "비고 93m의 말굽형 형태의 오름이다. 오름 전체에 초지가 있고. 소나무. 청미래덩굴 등이 자생한다. 계절별로 여러 종류의 야생화를 볼 수 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202111/25/5a957495-48b1-4c3c-a9f6-6997c941db87.jpg",
  },
  {
    _id: 6,
    oruem: "안세미",
    place: "제주시  봉개동",
    비고: 91,
    표고: 396.4,
    longitude: 126.608124,
    latitude: 33.467098,
    explain:
      "비고 91m. 말굽형(북동향) 형태의 오름. 오름 기슭 아래에 있는 샘터를 중심으로 안쪽과 바깥쪽에 있는 두 화산체를 두고 안새미와 밧새미라고 부른다.",
    image:
      "https://www.visitjeju.net/ckImage/201611/ckeditor_5142346627132855622.jpg",
  },
  {
    _id: 7,
    oruem: "백약이오름",
    place: "서귀포시  표선면 성읍리",
    비고: 132,
    표고: 356.9,
    longitude: 126.7897666,
    latitude: 33.43680944,
    explain:
      "비고 132m의 원형 화구를 지닌 화산체이다. 예부터 약초가 많이 자생하고 있어 백약이오름이라 명칭되었다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202110/29/7cce6643-785f-4e07-ad75-ecd5c17eed3f.jpg",
  },
  {
    _id: 8,
    oruem: "밝은오름",
    place: "제주시 한림읍 상명리",
    비고: 43,
    표고: 182.5,
    longitude: 126.265854,
    latitude: 33.360935,
    explain:
      "비고 43m의 북향 말굽형 굼부리를 지닌 화산체. 비고도 낮고 규모도 작은 편이다.",
    image:
      "http://sangmyung.invil.org/upload/editor/20141126095735144_2748.0.jpg",
  },
  {
    _id: 9,
    oruem: "바농오름",
    place: "제주시 조천읍 교래리",
    비고: 142,
    표고: 552.1,
    longitude: 126.6538018,
    latitude: 33.45377549,
    explain:
      "비고 142m의 복합형 화구를 지닌 화산체이다. 바농은 바늘의 제주 방언을 말하며 과거 오름 주변에 유난히 가시덤불이 많아 명칭되었다.",
    image: "https://cdn.hkbs.co.kr/news/photo/202104/628253_373679_1942.jpg",
  },
  {
    _id: 10,
    oruem: "비치미오름",
    place: "제주시 구좌읍 송당리",
    비고: 109,
    표고: 344.1,
    longitude: 126.76329,
    latitude: 33.426395,
    explain: "비고 109m의 말굽형 화산체이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/22/61178a20-a01b-4cf5-88e5-6a4bf7a911d4.jpg",
  },
  {
    _id: 11,
    oruem: "밧돌오름",
    place: "제주시 구좌읍 송당리",
    비고: 103,
    표고: 352.8,
    longitude: 126.76297,
    latitude: 33.460716,
    explain:
      "비고 103m의 오름. 동쪽 봉우리와 서쪽 봉우리에 바윗돌이 박혀 있고. 양쪽 봉우리 사이 북사면으로 패인 골짜기가 북동쪽으로 벌어진 말굽형 화구를 이룬다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/22/c40bcb48-0c0b-4426-9f5f-11fa19f9dbbd.jpg",
  },
  {
    _id: 12,
    oruem: "천아오름",
    place: "제주시 한림읍 상대리",
    비고: 49,
    표고: 133.6,
    longitude: 126.298607,
    latitude: 33.404919,
    explain:
      "비고 49m의 말굽형(서남향) 화구를 지닌 화산체이다. 초낭(참나무)가 많아 붙여진 명칭이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/c04e8829-80c1-4489-8312-b2b16eb3df22.jpg",
  },
  {
    _id: 13,
    oruem: "칡오름",
    place: "서귀포시  상효동",
    비고: 96,
    표고: 271,
    longitude: 126.603737,
    latitude: 33.283329,
    explain: "비고 96m의 원형 화구를 지닌 화산체이다.",
    image: "https://t1.daumcdn.net/cfile/blog/152D973E4FB9132032",
  },
  {
    _id: 14,
    oruem: "대병악",
    place: "서귀포시  안덕면 상창리",
    비고: 132,
    표고: 491.9,
    longitude: 126.367577,
    latitude: 33.306248,
    explain:
      "비고 132m의 말굽형 화구를 지닌 화산체이다. 소병악과 나란히 위치해있고 크기에 따라 대. 소병악이라 명칭되었다.",
    image: "https://t1.daumcdn.net/cfile/blog/1401F1414F19360533",
  },
  {
    _id: 15,
    oruem: "대수산봉",
    place: "서귀포시 성산읍 고성리",
    비고: 97,
    표고: 137.3,
    longitude: 126.902069,
    latitude: 33.438522,
    explain:
      "비고 97m의 원형 화구를 지닌 화산체이다. 과거 봉수대 흔적이 어렴풋이 남아있다. 산정부를 제외한 전 사면이 삼나무와 해송으로 숲을 이룬다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/10/8981c5e3-753a-4097-baca-6a68085150d9.jpg",
  },
  {
    _id: 16,
    oruem: "대왕산",
    place: "서귀포시 성산읍 수산리",
    비고: 83,
    표고: 157.6,
    longitude: 126.872673,
    latitude: 33.455917,
    explain:
      "비고 83m의 말굽형(북서향) 화구를 지닌 화산체이다. 오름 사면으로 연결된 형세가 왕(王)자 형으로 생겼다하여 붙여진 명칭이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/f278f4b7-853e-4c9e-a7c3-e8ce2cbe5991.jpg",
  },
  {
    _id: 17,
    oruem: "다랑쉬",
    place: "제주시 구좌읍 세화리",
    비고: 227,
    표고: 382.4,
    longitude: 126.819862,
    latitude: 33.475208,
    explain:
      "비고 227m의 원형 화구를 지닌 화산체이다. 오름으로서 갖춰야 할 입지와 환경이 뚜렷하고 규모가 큰 편이다. 당당한 기세와 위엄을 느낄 수 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/0d2bcdcc-9317-45e9-b9a4-6602746db2c9.JPG",
  },
  {
    _id: 18,
    oruem: "달산봉",
    place: "서귀포시  표선면 하천리",
    비고: 87,
    표고: 136.5,
    longitude: 126.832405,
    latitude: 33.345638,
    explain:
      "비고 87m의 말굽형(동향) 화구를 지닌 화산체이다. 산 체는 세 개의 봉우리가 능선으로 연결되어 길게 누워있는 형태이다.",
    image: "http://www.jejunews.com/news/photo/201712/2026373_139607_13.jpg",
  },
  {
    _id: 19,
    oruem: "당오름",
    place: "제주시 구좌읍 송당리",
    비고: 69,
    표고: 274.1,
    longitude: 126.777916,
    latitude: 33.468353,
    explain:
      "비고 69m의 오름. 말굽형 화구를 지닌 화산체이다. 전체적으로 나직하고 둥그스름한 몸집의 모양이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/10/e26eb1ed-fc54-4ecd-ac59-acf57fb2bdaf.jpg",
  },
  {
    _id: 20,
    oruem: "당산봉",
    place: "제주시  한경면 용수리",
    비고: 118,
    표고: 148,
    longitude: 126.172981,
    latitude: 33.308826,
    explain:
      "비고 118m의 복합형 화구를 지닌 화산체이다. 동남쪽 사면은 둥그스름하면서 가파르고. 곳곳에 암층이 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201908/21/d6795223-0fb4-42ac-8154-5ca45a09ba84.jpg",
  },
  {
    _id: 21,
    oruem: "단산",
    place: "서귀포시 대정읍 인성리",
    비고: 113,
    표고: 158,
    longitude: 126.288719,
    latitude: 33.243938,
    explain: "비고 113m의 원추형 화구를 지닌 화산체이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/06/0d0373ae-eb4c-4731-8961-09f28f38f39d.jpg",
  },
  {
    _id: 22,
    oruem: "도청오름",
    place: "서귀포시  표선면 표선리",
    비고: 70,
    표고: 136.7,
    longitude: 126.814339,
    latitude: 33.315445,
    explain:
      "비고 70m의 말굽형(남동향) 화구를 지닌 화산체이다. 전 사면에 걸쳐 소나무를 비롯한 잡목들이 깊은 숲을 이루고 있다.",
    image:
      "https://cdn.seogwipo.co.kr/news/photo/202102/204595_204972_4251.jpg",
  },
  {
    _id: 23,
    oruem: "독자봉",
    place: "서귀포시 성산읍 신산리",
    비고: 79,
    표고: 159.3,
    longitude: 126.854477,
    latitude: 33.387119,
    explain:
      "비고 79m의 말굽형(남동향) 화구를 지닌 화산체이다. 정상부 한 쪽에 봉수대 터가 남아있다. 제주올레 3코스를 지난다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/4acb44f2-bd30-40f7-9e4f-dd7bcaa57372.jpg",
  },
  {
    _id: 24,
    oruem: "돔배오름",
    place: "제주시 조천읍 교래리",
    비고: 36,
    표고: 466.0,
    longitude: 126.668571,
    latitude: 33.429062,
    explain:
      "비고 36m. 원형 화구를 가진 화산체. 돔배는 제주 방언으로 도마를 말하는데 오름 모양새가 도마의 모양과 닮아 명칭되었다.",
    image: "http://www.jejunews.com/news/photo/202002/2157487_181906_4232.jpg",
  },
  {
    _id: 25,
    oruem: "돛오름",
    place: "제주시 구좌읍 송당리",
    비고: 129,
    표고: 284.2,
    longitude: 126.8015166,
    latitude: 33.48107138,
    explain:
      "비고 129m의 원형 화구를 지닌 화산체이다. 비자림 서남쪽으로 이어져 있으며 천연기념물 제374호로서 비자나무 대군락을 이룬다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/1091ec48-7f86-4560-a987-ea8dca0a4549.jpg",
  },
  {
    _id: 26,
    oruem: "둔지봉",
    place: "제주시 구좌읍 한동리",
    비고: 152,
    표고: 282.2,
    longitude: 126.795341,
    latitude: 33.502773,
    explain:
      "비고 152m의 말굽형(남향) 화구를 가진 화산체이다. 소나무. 삼나무. 편백나무 군락으로 이루어져 있으며 해송과 억새 또한 넓게 분포되어 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/10/85e0dee2-f206-4504-baac-dda094d012f9.jpg",
  },
  {
    _id: 27,
    oruem: "두산봉",
    place: "서귀포시 성산읍 시흥리",
    비고: 101,
    표고: 126.5,
    longitude: 126.885353,
    latitude: 33.481148,
    explain:
      "비고 101m의 복합형 화구를 지닌 화산체이다. 이중식 화산체. 동남사면에 이르는 화구륜은 침식되어 절벽을 이루고. 북서쪽 사면에는 풀밭이 평지를 이룬다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/01/de800f68-9d34-472b-bcb9-5a697cca35e4.JPG",
  },
  {
    _id: 28,
    oruem: "어대오름",
    place: "제주시 구좌읍 덕천리",
    비고: 55,
    표고: 210.5,
    longitude: 126.7608417,
    latitude: 33.49564978,
    explain: "비고 55m의 말굽형(북서향) 화구를 가진 화산체이다.",
    image: "https://t1.daumcdn.net/cfile/blog/23315D4D5479C78830",
  },
  {
    _id: 29,
    oruem: "어도오름",
    place: "제주시 애월읍 봉성리",
    비고: 73,
    표고: 143,
    longitude: 126.307381,
    latitude: 33.421005,
    explain:
      "비고 73m의 말굽형(북향) 화구를 가진 화산체. 경사가 완만하고 산책로가 잘 정비되어있다.",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNjExMjRfMjQ1/MDAxNDc5OTg4MTQ1ODky.VD5k7EeYM8IJN1NqmiExp_CLAqkpcemxaTdjTckkdO4g.JyKnioTZsD93082ROKNXGhCIh4Ab1bohZiYiGC6Mrdwg.JPEG.9unique/036.JPG?type=w420",
  },
  {
    _id: 30,
    oruem: "은월봉(윤드리오름)",
    place: "제주시 구좌읍 종달리",
    비고: 75,
    표고: 179.6,
    longitude: 126.854477,
    latitude: 33.46896,
    explain:
      "비고 75m의 말굽형(북동향) 화구를 지닌 화산체이다. 남동쪽에 소나무와 삼나무가 조림되어 깊은 숲을 이룬다.",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxOTAyMDNfMTAg/MDAxNTQ5MTg5ODY0MTI2.uj_cC029j_0H0VJa8Kcu8VD8apXTG4X-XnANfI-Oh34g.V7Gr7y4j4guCjKcR4KyjDn24KvizEOciJt1h-zj9kjEg.JPEG.wing0617/DSC00217.JPG?type=w800",
  },
  {
    _id: 31,
    oruem: "갑선이오름",
    place: "서귀포시  표선면 가시리",
    비고: 83,
    표고: 188.2,
    longitude: 126.781845,
    latitude: 33.359951,
    explain:
      "비고 83m의 말굽형 화구를 지닌 화산체이다. 껍질을 미처 벗지 못한 매미의 굼벵이와 그 모습이 닮아 붙여진 명칭이다.",
    image: "http://ojsfile.ohmynews.com/CRI_T_IMG/2020/1022/A0002686231_T.jpg",
  },
  {
    _id: 32,
    oruem: "개오름(성읍)",
    place: "서귀포시  표선면 성읍리",
    비고: 130,
    표고: 344.7,
    longitude: 126.772675,
    latitude: 33.423016,
    explain:
      "비고 130m의 원추형 화구를 지닌 화산체이다. 전망권이 괜찮은 편이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/16/d65bbc26-2ac2-4d91-9d39-4433be756956.JPG",
  },
  {
    _id: 33,
    oruem: "가마오름",
    place: "제주시 한경면 청수리",
    비고: 51,
    표고: 140.5,
    longitude: 126.246628,
    latitude: 33.305321,
    explain:
      "비고 51m 말굽형(북동향) 화구를 지닌 화산체. 일제시대 일본군이 주둔했던 곳으로 현재도 인공적으로 파인 수직굴이 존재한다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/cbeb6965-95e1-40d8-821f-5cd4e0763e5b.jpg",
  },
  {
    _id: 34,
    oruem: "감낭오름",
    place: "서귀포시  안덕면 동광리",
    비고: 45,
    표고: 439.8,
    longitude: 126.350502,
    latitude: 33.324684,
    explain:
      "비고 45m의 말굽형 화구를 지닌 화산체. 지금은 아니지만. 이전에 오름 주변에 감나무가 많아 지어진 명칭이다.",
    image: "https://www.newsje.com/news/photo/201811/115576_125152_5933.jpg",
  },
  {
    _id: 35,
    oruem: "가세오름",
    place: "서귀포시  표선면 토산리",
    비고: 101,
    표고: 200.5,
    longitude: 126.78109,
    latitude: 33.331295,
    explain:
      "비고 101m의 말굽형(남서향) 화구를 지닌 화산체이다. 오름의 형세가 가세(가위)를 닮았다고 해서 붙여진 명칭이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202101/14/e415e81c-d5e3-4a99-96ab-6aa75d2264e7.jpg",
  },
  {
    _id: 36,
    oruem: "가시오름",
    place: "서귀포시 대정읍 동일리",
    비고: 77,
    표고: 106,
    longitude: 126.243866,
    latitude: 33.247208,
    explain:
      "비고 77m의 말굽형(남서향) 화구를 지닌 화산체이다. 오름사면에 가시나무가 많이 자생하여 붙여진 명칭이다.",
    image: "https://www.newsje.com/news/photo/201612/86917_95921_232.jpg",
  },
  {
    _id: 37,
    oruem: "거린오름",
    place: "서귀포시  안덕면 동광리",
    비고: 68,
    표고: 298,
    longitude: 126.332619,
    latitude: 33.304913,
    explain: "비고 68m의 원추형 화구를 지닌 화산체이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201908/21/5a03ec58-aaff-46f8-8e1a-0256c5bf1019.jpg",
  },
  {
    _id: 38,
    oruem: "걸리오름",
    place: "서귀포시 성산읍 신풍리",
    비고: 14,
    표고: 123.8,
    longitude: 126.815575,
    latitude: 33.376331,
    explain:
      "비고가 14m 밖에 되지 않는 화산체로 오름이라 부르기 어렵지만. 산책로 정비는 잘 되어있다.",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MjNfMjky%2FMDAxNTg3NjE1NTYwMTE1.HcgldW_oEEg5tZuD_luo6oo6_AfDGbpeqAQEmLNrqLkg.eLpZNXRLt-mkp2kyT4xyRRiaTFsX7xVIjUDJ5BB49nsg.JPEG.toyou10123%2F20200402_163743%25B3%25B2%25BB%25EA%25BA%25C0.jpg&type=sc960_832",
  },
  {
    _id: 39,
    oruem: "거문오름",
    place: "제주시 조천읍 선흘리",
    비고: 112,
    표고: 456.6,
    longitude: 126.720299,
    latitude: 33.456268,
    explain:
      "비고 112m의 복합형 화구를 가진 화산체. 제주에서 유일하게 유네스코 세계자연유산으로 등재된 오름이다. 넓고 커다란 굼부리와 아홉 개로 이어지는 봉우리가 장관이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/e05943ea-8718-4891-bfdb-22ebf6008788.jpg",
  },
  {
    _id: 40,
    oruem: "거슨새미",
    place: "제주시 구좌읍 송당리",
    비고: 125,
    표고: 380.0,
    longitude: 126.759544,
    latitude: 33.450577,
    explain:
      "비고 125m의 말굽형(서향) 형태의 오름. 늦가을 은빛 물결의 억새 경관을 볼 수 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/f11a6297-c6a8-403b-abc0-067089a09f1a.jpg",
  },
  {
    _id: 41,
    oruem: "갯거리오름",
    place: "제주시 한림읍 명월리",
    비고: 69,
    표고: 253.5,
    longitude: 126.292931,
    latitude: 33.376663,
    explain:
      "비고 69m의 말굽형(서향) 화구를 지닌 화산체이다. 오름의 형세를 두고 개가 꼬리를 끌고 누워있는 모습과 같다고 하여 붙여진 명칭이다.",
    image: "https://www.newsje.com/news/photo/201811/115907_125497_332.jpg",
  },
  {
    _id: 42,
    oruem: "극락오름",
    place: "제주시 애월읍 고성리",
    비고: 64,
    표고: 313.5,
    longitude: 126.414978,
    latitude: 33.436234,
    explain:
      "비고 64m의 말굽형(북서향) 화구를 가진 화산체이다. 정상 부근을 비롯해 사면에 걸쳐 소나무가 군락을 이룬다.",
    image:
      "https://mblogthumb-phinf.pstatic.net/20140511_36/jejulovetour_1399797104375PtX6W_JPEG/E98A3784.jpg?type=w2",
  },
  {
    _id: 43,
    oruem: "금오름",
    place: "제주시 한림읍 금악리",
    비고: 178,
    표고: 427,
    longitude: 126.305847,
    latitude: 33.35722,
    explain:
      "비고 178m의 원형(화구호) 화구를 지닌 화산체이다. 타원형의 분화구 내부에는 연중 물이 고이거나 습지를 이룬다.",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxOTA5MDJfMTEy/MDAxNTY3Mzc3MTcwMjcx.rQ2zI_RteJ39pcOkYzbUdR5OXz4Qt8ypnEFfm-KYKSog.0B-mpiP55crL7RbcMrGHCosOWNXeb65-f-R_0aGV5S0g.JPEG.ehflfl2/DJI_0993.jpg?type=w800",
  },
  {
    _id: 44,
    oruem: "고근산",
    place: "서귀포시  서호동",
    비고: 171,
    표고: 396,
    longitude: 126.514198,
    latitude: 33.268082,
    explain:
      "비고 171m의 원형 화구를 지닌 화산체이다. 제주 올레 7-1코스 중간 지점 위치해 있다. 억새 군락을 이루고 있다.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfJU6fWN6aAZp6NdiDEJOvsNAYeEc3g3Aaw&usqp=CAU",
  },
  {
    _id: 45,
    oruem: "궁대악",
    place: "서귀포시 성산읍 수산리",
    비고: 54,
    표고: 238.8,
    longitude: 126.823044,
    latitude: 33.435707,
    explain:
      "비고 54m의 복합형 화구를 지닌 화산체이다. 전 사면을 따라 삼나무와 소나무가 숲을 이루고 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201911/19/1d3d1dd4-41ba-46db-a627-cf393da6c757.JPG",
  },
  {
    _id: 46,
    oruem: "군산",
    place: "서귀포시  안덕면 창천리",
    비고: 280,
    표고: 334,
    longitude: 126.370857,
    latitude: 33.251938,
    explain: "비고 280m의 원추형(라바돔) 화구를 지닌 화산체이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202111/04/20b8b887-9d81-4631-b3ce-df5c7095ae2c.jpg",
  },
  {
    _id: 47,
    oruem: "이달봉",
    place: "제주시 애월읍 봉성리",
    비고: 119,
    표고: 488,
    longitude: 126.348381,
    latitude: 33.363838,
    explain: "비고 119m의 원추형 화구를 지닌 화산체이다.",
    image:
      "https://thumb.wishbeen.com/RVpu8k6ZmabgZsLPbajWK0M8j3A=/898x420/smart/filters:no_upscale()/wishbeen-seoul.s3.ap-northeast-2.amazonaws.com/spot/1376447449316_dsc08283_wpwnalska.jpg",
  },
  {
    _id: 48,
    oruem: "이달이촛대봉",
    place: "제주시 애월읍 봉성리",
    비고: 86,
    표고: 456,
    longitude: 126.347038,
    latitude: 33.366447,
    explain:
      "비고 86m의 원추형 화구를 가진 화산체. 이달봉과 쌍둥이 화산체이다. 유난히 봉긋하게 솟은 봉우리 모습을 촛대에 비유하여 명칭하였다.",
    image: "https://www.newsje.com/news/photo/201807/110741_120828_240.jpg",
  },
  {
    _id: 49,
    oruem: "인정오름",
    place: "서귀포시  토평동",
    비고: 49,
    표고: 232.5,
    longitude: 126.585411,
    latitude: 33.283649,
    explain: "비고 49m의 원형 화구를 지닌 화산체이다.",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20110106_96%2Fdghmg_1294274739868KxOOw_jpg%2F144_dghmg.jpg&type=sc960_832",
  },
  {
    _id: 50,
    oruem: "자배봉",
    place: "서귀포시 남원읍 위미리",
    비고: 111,
    표고: 211.3,
    longitude: 126.675797,
    latitude: 33.299992,
    explain:
      "비고 111m의 원형 화구를 지닌 화산체이다. 비고가 꽤 높지만 중간 능선을 따라 한 바퀴를 돌아볼 수 있는 산책로가 잘 정비되어있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/8cebdd35-2af5-4f3d-85c5-891ed0480138.jpg",
  },
  {
    _id: 51,
    oruem: "제지기오름",
    place: "서귀포시  보목동",
    비고: 85,
    표고: 94.8,
    longitude: 126.609947,
    latitude: 33.241749,
    explain: "비고 85m의 원추형 화산체. 올레길 6코스를 지난다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/03/4bd77637-7c39-464d-95af-301cff8ca6fd.jpg",
  },
  {
    _id: 52,
    oruem: "저지오름",
    place: "제주시  한경면 저지리",
    비고: 104,
    표고: 239,
    longitude: 126.2509,
    latitude: 33.334156,
    explain:
      "비고 104m의 원형 화구를 지닌 화산체이다. 제주올레 13코스의 종점에 위치해 있다. 전망대에서 한라산을 포함. 주변 오름들을 한눈에 볼 수 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201907/24/7d0ec623-51e9-4b92-94ae-381eaa6d72e7.jpg",
  },
  {
    _id: 53,
    oruem: "정물오름",
    place: "제주시 한림읍 금악리",
    비고: 151,
    표고: 466,
    longitude: 126.329353,
    latitude: 33.339428,
    explain:
      "비고 151m의 말굽형(북서향) 화구를 지닌 화산체이다. 기슭에 샘이 있어 정물오름이라 명칭되었다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202111/16/08ca690e-d8b0-4c08-beaf-d6736ff02c50.JPG",
  },
  {
    _id: 54,
    oruem: "제석오름",
    place: "서귀포시  표선면 하천리",
    비고: 48,
    표고: 87.5,
    longitude: 126.835685,
    latitude: 33.347694,
    explain:
      "비고 48m의 원추형 화구를 지닌 화산체이다. 전 사면에 걸쳐 소나무를 비롯한 잡목들이 숲을 이루며 오름의 기슭까지 밀감 밭으로 되어있다.",
    image: "https://cdn.seogwipo.co.kr/news/photo/202012/204022_204351_150.jpg",
  },
  {
    _id: 55,
    oruem: "지미봉",
    place: "제주시 구좌읍 종달리",
    비고: 160,
    표고: 165.8,
    longitude: 126.901497,
    latitude: 33.495327,
    explain:
      "비고 160m 말굽형 화산체. 제주 동부 해안가에 위치해 있어 일출봉과 우도를 전망하기에 좋다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/2ba9ed0e-3425-4b16-afe4-aa2a029192f7.jpg",
  },
  {
    _id: 56,
    oruem: "좌보미",
    place: "서귀포시  표선면 성읍리",
    비고: 112,
    표고: 342.0,
    longitude: 126.8067627,
    latitude: 33.43609516,
    explain:
      "비고 112m의 말굽형(남향) 화구를 지닌 화산체이다. 5개의 큰 봉우리가 서로 연결되어 하나의 기형적 형태의 커다란 산체를 형성한 형태이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/643c23a3-79bf-4efc-b8d4-4bc8222642ed.jpg",
  },
  {
    _id: 57,
    oruem: "모구리오름",
    place: "서귀포시 성산읍 난산리",
    비고: 82,
    표고: 232.0,
    longitude: 126.8284,
    latitude: 33.408043,
    explain:
      "비고 82m의 말굽형(남동향) 화구를 지닌 화산체이다. 어미 개가 새-끼를 껴안은 모습이라 해서 모구리라 명칭되었다. 굼부리 중심에 다시 알오름이라는 새-끼오름이 자리하고 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/10/2d959586-9f08-4099-bdca-0324603692f5.jpg",
  },
  {
    _id: 58,
    oruem: "모지오름",
    place: "서귀포시  표선면 성읍리",
    비고: 86,
    표고: 305.8,
    longitude: 126.767769,
    latitude: 33.393829,
    explain: "비고 86m의 말굽형 화산체이다. 굼부리안에 알오름이 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/1b231f5b-7b60-4e23-8441-1b7c5c3b3e9b.jpg",
  },
  {
    _id: 59,
    oruem: "무악(개오름)",
    place: "서귀포시  안덕면 상천리",
    비고: 126,
    표고: 496.1,
    longitude: 126.369118,
    latitude: 33.315536,
    explain:
      "비고 126m의 오름. 오름 모양이 개가 누워있는 모습과 비슷하다하여 개오름이라고도 불린다.",
    image: "https://t1.daumcdn.net/cfile/blog/227065395627AD0205",
  },
  {
    _id: 60,
    oruem: "명월오름",
    place: "제주시 한림읍 명월리",
    비고: 39,
    표고: 148.5,
    longitude: 126.279259,
    latitude: 33.382324,
    explain:
      "비고 39m의 말굽형 화산체. 애초에 산체가 낮고. 세월이 흘러 개간과 변화로 인해 아쉽지만 오름으로서의 매력은 낮다.",
    image:
      "https://t1.daumcdn.net/cafeattach/17AzB/5c1791ab3260e2ec59ffb93e6e459b46a9805376",
  },
  {
    _id: 61,
    oruem: "묘산봉",
    place: "제주시 구좌읍 서김녕리",
    비고: 81,
    표고: 116.3,
    longitude: 126.744804,
    latitude: 33.543922,
    explain:
      "비고 81m의 말굽형 화구를 지닌 화산체. 전 사면에 소나무를 비롯한 잡목들이 빽빽히 숲을 이룬다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/33ca22e1-c370-4147-8f82-6493bc133880.jpg",
  },
  {
    _id: 62,
    oruem: "남산봉",
    place: "서귀포시 성산읍 신풍리",
    비고: 54,
    표고: 178.8,
    longitude: 126.810814,
    latitude: 33.384289,
    explain:
      "비고 54m의 원형 화구를 지닌 화산체이다. 과거 오름 정상에 봉수대가 있었고 아직도 봉수대 터 자리가 뚜렷하게 남아있다.",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110127_174%2Fehflfl2_1296116686699sOFFk_JPEG%2FIMG_2673.jpg&type=sc960_832",
  },
  {
    _id: 63,
    oruem: "낭끼오름",
    place: "서귀포시 성산읍 수산리",
    비고: 40,
    표고: 185.1,
    longitude: 126.841972,
    latitude: 33.435303,
    explain:
      "비고 40m의 원형 화구를 지닌 화산체이다. 정상에 전망대가 있으며 비고가 낮아 오르는데 큰 어려움이 없고. 전망도 좋은 편이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201907/19/80fa7d9a-550b-4f15-ba28-cc738d9afe53.JPG",
  },
  {
    _id: 64,
    oruem: "넉시악",
    place: "서귀포시 남원읍 의귀리",
    비고: 56,
    표고: 146.2,
    longitude: 126.7146,
    latitude: 33.305565,
    explain:
      "비고 56m의 말굽형 화구를 지닌 화산체이다. 기슭 아래와 주변이 밀감밭으로 개간되었지만 산책로를 따라 깊은 숲을 이루고 있어 탐방하기 좋다.",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140111_71%2F23hyunsj_1389442495982aDNRG_JPEG%2F030.JPG&type=sc960_832",
  },
  {
    _id: 65,
    oruem: "늡서리",
    place: "제주시 조천읍 교래리",
    비고: 59,
    표고: 488.9,
    longitude: 126.66494,
    latitude: 33.441711,
    explain:
      "비고 59m. 말굽형(북동향)형태의 오름. 분화구 외부 경사진 곳에 자연림이 무성하게 숲을 이루고 있다.",
    image:
      "https://kkukowiki.kr/images/6/6a/%EB%8A%A1%EC%84%9C%EB%A4%BC%EC%9B%8C%EB%A3%B8.jpg",
  },
  {
    _id: 66,
    oruem: "높은오름",
    place: "제주시 구좌읍 송당리",
    비고: 175,
    표고: 405.3,
    longitude: 126.792419,
    latitude: 33.457088,
    explain:
      "비고 175m의 오름. 주변 일대에서 유일하게 고도가 400m 이상되는 오름이다. 넓은 원형의 분화구와 둘레가 500m에 달한다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/ae1c6aad-8c74-4554-990e-9b2a8d6ec0a5.jpg",
  },
  {
    _id: 67,
    oruem: "삼매봉",
    place: "서귀포시  서홍동",
    비고: 104,
    표고: 153,
    longitude: 126.54631,
    latitude: 33.244247,
    explain:
      "비고 104m의 복합형 화구를 지닌 화산체이다. 제주올레 6코스의 종점이자 7코스의 시작점에 위치해 있다. 서쪽으로 마라도와 가파도를 볼 수 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/23/1027f313-2147-448a-9d5f-c18c46508314.jpg",
  },
  {
    _id: 68,
    oruem: "생길이오름",
    place: "서귀포시 남원읍 신례리",
    비고: 65,
    표고: 260,
    longitude: 126.642708,
    latitude: 33.305759,
    explain: "비고 65m의 말굽형 화구를 지닌 화산체이다.",
    image: "https://t1.daumcdn.net/cfile/blog/25729E47581ED7B32B",
  },
  {
    _id: 69,
    oruem: "서걸세",
    place: "서귀포시 남원읍 하례리",
    비고: 50,
    표고: 150,
    longitude: 126.618401,
    latitude: 33.280914,
    explain:
      "비고 50m의 원추형 화구를 지닌 화산체이다. 현재 오름 대분분이 밀감 밭으로 개간이 되어있다.",
    image: "http://www.newsje.com/news/photo/201701/88367_97797_3635.jpg",
  },
  {
    _id: 70,
    oruem: "설오름",
    place: "서귀포시  표선면 가시리",
    비고: 98,
    표고: 238.0,
    longitude: 126.769951,
    latitude: 33.370998,
    explain:
      "비고 98m의 말굽형 화구를 지닌 화산체이다. 가시리를 통과하는 가마천이 오름 서측 화구를 휘돌아 흐른다.",
    image: "https://t1.daumcdn.net/cfile/blog/2320BF3554A241552E",
  },
  {
    _id: 71,
    oruem: "성불오름",
    place: "제주시 구좌읍 송당리",
    비고: 97,
    표고: 361.7,
    longitude: 126.749092,
    latitude: 33.423302,
    explain: "비고 97m의 말굽형 화산체이다. 탐방로 정비가 잘 되어 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201907/26/7fd023eb-5ab6-4717-9fe5-5015ac7fb9ee.jpg",
  },
  {
    _id: 72,
    oruem: "섯알오름",
    place: "서귀포시 대정읍 상모리",
    비고: 21,
    표고: 40,
    longitude: 126.281504,
    latitude: 33.20594,
    explain:
      "비고 21m의 말굽형(서향) 화구를 지닌 화산체이다. 송악산 둘레에 줄지어 분포된 여러 개의 말굽형 알오름들 중 하나이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202111/05/75c96e35-4be5-40e7-a187-8171b32a0f33.jpg",
  },
  {
    _id: 73,
    oruem: "서우봉",
    place: "제주시 조천읍 함덕리",
    비고: 106,
    표고: 111,
    longitude: 126.677505,
    latitude: 33.54575,
    explain:
      "비고 106m의 오름. 원추형 화산체이다. 해안과 인접해 있어 오름을 오르며 푸른 바다를 함께 볼 수 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202111/05/448c06e4-73c2-47ff-b230-c76bb72ff86f.JPG",
  },
  {
    _id: 74,
    oruem: "새신오름",
    place: "서귀포시  한경면 청수리",
    비고: 41,
    표고: 141.2,
    longitude: 126.238441,
    latitude: 33.297661,
    explain: "비고 41m의 원형 화산체.",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MDlfNDEg/MDAxNTk2OTY0MjAxNzY0.T5k8tXzRtEZWlkHBnkUQc62WgGly5tZOYevRTA7za1Ig.COABSk9C4U8GBROhJhHK2riFL4BgksBnio3g1tXPq2sg.JPEG.79sej/1596964199688.jpg?type=w800",
  },
  {
    _id: 75,
    oruem: "식은이오름",
    place: "제주시 구좌읍 덕천리",
    비고: 45,
    표고: 286.0,
    longitude: 126.747414,
    latitude: 33.473301,
    explain:
      "비고 45m. 말굽형(남서향) 화구를 지닌 화산체이다. 기슭과 능선으로 이어지는 곳에 잡목들과 가시덤불 등이 빽빽히 숲을 이룸.",
    image: "http://www.jejusori.net/news/photo/200912/73177_79816_5240.jpg",
  },
  {
    _id: 76,
    oruem: "식산봉",
    place: "서귀포시 성산읍 오조리",
    비고: 55,
    표고: 60.2,
    longitude: 126.919968,
    latitude: 33.465843,
    explain:
      "비고 55m의 원추형 화구를 지닌 화산체이다. 기슭과 등성에 유독 바위가 많아 바위오름으로 잘 알려져 있다.",
    image: "http://www.jejunews.com/news/photo/202007/2168346_190262_433.jpg",
  },
  {
    _id: 77,
    oruem: "소병악",
    place: "서귀포시  안덕면 상창리",
    비고: 93,
    표고: 473,
    longitude: 126.373634,
    latitude: 33.308426,
    explain: "비고 93m의 말굽형 화구를 지닌 화산체이다. 대병악과 나란히 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/2b755b83-0987-4d3f-81f8-55816624312e.jpg",
  },
  {
    _id: 78,
    oruem: "송악산",
    place: "서귀포시 대정읍 상모리",
    비고: 99,
    표고: 104,
    longitude: 126.289551,
    latitude: 33.200703,
    explain:
      "비고 99m의 복합형 화산체. 정상에서 마라도. 가파도. 산방산. 한라산 등 제주 명소들을 비롯하여 해안 전망이 매우 좋다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202008/21/a8ee7cef-10ef-42a1-b1f7-d5730021f0dc.jpg",
  },
  {
    _id: 79,
    oruem: "수산봉(물메)",
    place: "제주시 애월읍 수산리",
    비고: 92,
    표고: 121.5,
    longitude: 126.388649,
    latitude: 33.473545,
    explain:
      "비고 92m.  원추형 분화구를 지니고 정상에 물이 고인 작은 연못이 있어 '물메' 혹은 정상에 봉수가 있어 '수산봉'이라 부른다. 제주올레 16코스에 포함되어 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202112/10/8981c5e3-753a-4097-baca-6a68085150d9.jpg",
  },
  {
    _id: 80,
    oruem: "통오름",
    place: "서귀포시 성산읍 난산리",
    비고: 43,
    표고: 143.1,
    longitude: 126.855972,
    latitude: 33.39328,
    explain:
      "비고 43m의 말굽형(서향) 화구를 지닌 화산체이다. 굼부리 안은 농경지로 개간이 되어 있다. 제주오름에 포함된 곳이기도 하다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/1eb0123f-626a-43b9-af45-b527004f40fc.jpg",
  },
  {
    _id: 81,
    oruem: "토산봉",
    place: "서귀포시  표선면 토산리",
    비고: 75,
    표고: 175.4,
    longitude: 126.773849,
    latitude: 33.32391,
    explain:
      "비고 75m의 복합형 화구를 지닌 화산체이다. 마을과 인접해있고 산책로 정비가 잘 되어있으며 제주올레 4코스를 지난다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/f4900f5b-213d-4f97-973d-4914dd3a935e.jpg",
  },
  {
    _id: 82,
    oruem: "따라비오름",
    place: "서귀포시  표선면 가시리",
    비고: 107,
    표고: 342,
    longitude: 126.754288,
    latitude: 33.38892,
    explain:
      "비고 107m의 복합형 화산체이다. 3개의 굼부리가 이어진 모습이 특징이다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202111/01/2807b2be-5aa2-4e3e-bd91-23a92d2985a6.JPG",
  },
  {
    _id: 83,
    oruem: "우진제비",
    place: "제주시 조천읍 선흘리",
    비고: 126,
    표고: 410,
    longitude: 126.698135,
    latitude: 33.467384,
    explain:
      "비고 126m의 오름. 둥글고 통통한 산체에 서쪽 봉우리가 주봉이며 북동쪽으로 벌어진 말굽형 화구체를 가진 화산체.",
    image:
      "https://blog.kakaocdn.net/dn/d3CsOE/btqMqcG6QIf/7A3aSMSx1o9Bufaz84LISK/img.jpg",
  },
  {
    _id: 84,
    oruem: "월랑지",
    place: "서귀포시  표선면 성읍리",
    비고: 35,
    표고: 260.2,
    longitude: 126.809734,
    latitude: 33.438665,
    explain:
      "비고 35m의 말굽형(북향) 화구를 지닌 화산체이다. 외부에서는 낮고 앙증맞은 모습이지만 산체 내부는 깊은 숲을 이루고 있다.",
    image:
      "https://mblogthumb-phinf.pstatic.net/20150220_289/sinabro3114_1424396640457fg2Gd_JPEG/P1140505.JPG?type=w2",
  },
  {
    _id: 85,
    oruem: "원물오름",
    place: "서귀포시  안덕면 동광리",
    비고: 98,
    표고: 458.5,
    longitude: 126.344551,
    latitude: 33.322323,
    explain:
      "비고 80m의 말굽형 화구를 지닌 화산체. 비교적 완만한 경사이고 조망권 또한 괜찮은 편이다.",
    image: "https://t1.daumcdn.net/cfile/blog/205D0C454F8E948A32",
  },
  {
    _id: 86,
    oruem: "열안지오름",
    place: "제주시  봉개동",
    비고: 54,
    표고: 328,
    longitude: 126.605356,
    latitude: 33.47307434,
    explain: "비고 54m의 말굽형(북향) 화구를 가진 화산체이다.",
    image: "https://t1.daumcdn.net/cfile/blog/1467E5374F80B12803",
  },
  {
    _id: 87,
    oruem: "영천악",
    place: "서귀포시  상효동",
    비고: 97,
    표고: 277,
    longitude: 126.600677,
    latitude: 33.295338,
    explain:
      "비고 97m의 원형 화구를 지닌 화산체이다. 잘 정리된 산책로가 5.16도로까지 이어져있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201908/09/ac350f52-6901-4973-bc41-13f073d7514b.jpg",
  },
  {
    _id: 88,
    oruem: "영주산",
    place: "서귀포시  표선면 성읍리",
    비고: 176,
    표고: 326.4,
    longitude: 126.7962446,
    latitude: 33.40456816,
    explain:
      "비고 176m의 말굽형 화구를 지닌 화산체이다. 높은 비고를 가졌기 때문에 정상에서의 조망권이 매우 좋다.",
    image: "http://www.newsje.com/news/photo/201806/109250_119632_217.jpg",
  },
  {
    _id: 89,
    oruem: "용눈이오름",
    place: "제주시 구좌읍 종달리",
    비고: 88,
    표고: 247.8,
    longitude: 126.8326896,
    latitude: 33.45987829,
    explain:
      "비고 88m의 복합형 화구를 지닌 화산체이다. 타 오름에 비해 능선과 화구의 조화가 매우 아름답다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/202110/21/7783b71b-60f2-4e3d-b3c6-8e74ce19df0a.jpg",
  },
  {
    _id: 90,
    oruem: "유건에오름",
    place: "서귀포시 성산읍 난산리",
    비고: 75,
    표고: 190.2,
    longitude: 126.847069,
    latitude: 33.413563,
    explain:
      "비고 75m의 원형 화구를 지닌 화산체이다. 세 개의 봉우리가 능선을 따라 이어지면서 원형의 굼부리를 형성하고 있다.",
    image:
      "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/d462b0db-0062-4b90-99be-02588220ffdb.jpg",
  },
];

export { oreums };
