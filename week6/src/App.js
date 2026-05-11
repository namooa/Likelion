import React, { useEffect, useState } from "react";
import { fetchLine4Saturday } from "./api/subwayApi";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLine4Saturday()
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container">불러오는 중...</div>;
  if (error) return <div className="container">에러: {error}</div>;
  if (data.length === 0) return <div className="container">데이터 없음</div>;

  // 시간대 컬럼 이름 추출 (역명, 호선 등 메타 필드 제외)
  const metaFields = ["조사일자", "호선", "역번호", "역명", "구분", "요일"];
  const timeColumns = Object.keys(data[0]).filter(
    (key) => !metaFields.includes(key)
  );

  // 혼잡도 값에 따라 색깔 결정
  const getCellColor = (value) => {
    const num = parseFloat(value);
    if (isNaN(num)) return "#f5f5f5";
    if (num >= 130) return "#ff4d4d"; // 매우 혼잡 (빨강)
    if (num >= 80) return "#ffa500"; // 혼잡 (주황)
    if (num >= 50) return "#ffeb3b"; // 보통 (노랑)
    if (num >= 34) return "#a5d6a7"; // 여유 (연두)
    return "#e3f2fd"; // 매우 여유 (파랑)
  };

  return (
    <div className="container">
      <h1>4호선 지하철 혼잡도 (토요일)</h1>
      <p className="subtitle">
        혼잡도 = 정원 대비 승차 인원 (%) · 좌석 가득 차면 34%
      </p>

      <div className="legend">
        <span className="legend-item" style={{ background: "#e3f2fd" }}>
          여유 ~34%
        </span>
        <span className="legend-item" style={{ background: "#a5d6a7" }}>
          보통 34~50%
        </span>
        <span className="legend-item" style={{ background: "#ffeb3b" }}>
          주의 50~80%
        </span>
        <span className="legend-item" style={{ background: "#ffa500" }}>
          혼잡 80~130%
        </span>
        <span className="legend-item" style={{ background: "#ff4d4d" }}>
          매우 혼잡 130%~
        </span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th className="sticky-col">역명</th>
              <th>구분</th>
              {timeColumns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="sticky-col station-name">{row.역명}</td>
                <td>{row.구분}</td>
                {timeColumns.map((col) => (
                  <td
                    key={col}
                    style={{ background: getCellColor(row[col]) }}
                  >
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;