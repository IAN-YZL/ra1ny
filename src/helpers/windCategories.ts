export const getWindScale = (windSpeed: number) => {
  const windSpeedFlags = [2, 7, 13, 20, 31, 41, 52, 63, 76, 89, 104, 119, 134, 159, 167, 185, 198];
  for (let index = 0; index < windSpeedFlags.length; index++) {
    const flag = windSpeedFlags[index];
    if (windSpeed < flag) {
      return index;
    }
  }
  return 17;
};

export const getWindTerm = (windScale: number) => {
  const windTerms = [
    'Calm',
    'Light air',
    'Light breeze',
    'Gentle breeze',
    'Moderate breeze',
    'Fresh breeze',
    'Strong breeze',
    'Moderate gale',
    'Fresh gale',
    'Strong gale',
    'Whole gale',
    'Storm',
    'Hurricane',
  ];
  if (windScale > 12) {
    return 'Hurricane';
  }
  return windTerms[windScale];
};

export const getWindTermAu = (windScale: number) => {
  if (windScale < 8) {
    return 'Tropical Depression';
  }
  if (windScale < 10) {
    return 'Tropical cyclone (1)';
  }
  if (windScale < 12) {
    return 'Tropical cyclone (2)';
  }
  if (windScale < 14) {
    return 'Tropical cyclone (3)';
  }
  if (windScale < 17) {
    return 'Tropical cyclone (4)';
  }
  return 'Tropical cyclone (5)';
};

export const getWindDirection = (windDegree: number) => {
  if (windDegree < 22.5 || windDegree > 337.5) {
    return 'N';
  }
  if (windDegree < 67.5) {
    return 'NE';
  }
  if (windDegree < 112.5) {
    return 'E';
  }
  if (windDegree < 157.5) {
    return 'SE';
  }
  if (windDegree < 202.5) {
    return 'S';
  }
  if (windDegree < 247.5) {
    return 'SW';
  }
  if (windDegree < 292.5) {
    return 'W';
  }
  return 'NW';
};
