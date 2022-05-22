import React from 'react';
import { IForecastWeather } from '../../api/weather';
import InfoCard from '../../components/InfoCard';
import { AreaChart, XAxis, Area, Tooltip } from 'recharts';
import { withTheme } from 'styled-components';
import { Theme } from '../../theme';

const CloudinessCard = withTheme((props: { forecastData: IForecastWeather[]; theme: Theme }) => {
  const sanitisedCloudData = props.forecastData.map((weather) => {
    return {
      time: new Date(weather.dt_txt).toLocaleString('en-AU', {
        month: 'long',
        day: '2-digit',
        hour: 'numeric',
      }),
      clouds: weather.clouds.all,
    };
  });

  return (
    <InfoCard title="Weekly Cloudiness" style={{ marginTop: '10px' }}>
      <AreaChart data={sanitisedCloudData} height={80} width={210} margin={{ top: 12 }}>
        <Tooltip />
        <XAxis dataKey="time" hide={true} />
        <Area
          dataKey="clouds"
          fillOpacity={1}
          stroke={props.theme.secondColor}
          fill={props.theme.shallowSecondColor}
        />
      </AreaChart>
    </InfoCard>
  );
});

export default CloudinessCard;
