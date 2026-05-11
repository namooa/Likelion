import axios from "axios";

// 환경변수에서 인증키 가져오기
const API_KEY = process.env.REACT_APP_API_KEY;

// odcloud 혼잡도 API 엔드포인트
const ENDPOINT = "/api/15071311/v1/uddi:a5158b81-27c7-4151-ba6c-b912a6f13d39";

// 4호선 토요일 데이터만 가져오기
export const fetchLine4Saturday = async () => {
  const response = await axios.get(ENDPOINT, {
    params: {
      page: 1,
      perPage: 2000, // 전체 1668건이라 한 번에 다 받기
    },
    headers: {
      Authorization: `Infuser ${API_KEY}`,
    },
  });

  // 4호선 + 토요일만 필터링
  const filtered = response.data.data.filter(
    (item) => item.호선 === "4" && item.요일 === "토요일"
  );

  return filtered;
};