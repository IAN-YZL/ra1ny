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
