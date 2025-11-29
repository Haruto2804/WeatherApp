export const getWindDirection = (code) => {
  const directions = {
    "N": "Hướng Bắc",
    "NNE": "Hướng Bắc-Đông Bắc",
    "NE": "Hướng Đông Bắc",
    "ENE": "Hướng Đông-Đông Bắc",
    "E": "Hướng Đông",
    "ESE": "Hướng Đông-Đông Nam",
    "SE": "Hướng Đông Nam",
    "SSE": "Hướng Nam-Đông Nam",
    "S": "Hướng Nam",
    "SSW": "Hướng Nam-Tây Nam",
    "SW": "Hướng Tây Nam",
    "WSW": "Hướng Tây-Tây Nam",
    "W": "Hướng Tây",
    "WNW": "Hướng Tây-Tây Bắc", // Đây là trường hợp của bạn
    "NW": "Hướng Tây Bắc",
    "NNW": "Hướng Bắc-Tây Bắc",
  };
  
  // Trả về tên tiếng Việt, hoặc mã gốc nếu không tìm thấy
  return directions[code] || `Hướng ${code}`; 
};