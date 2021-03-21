import React from 'react';
import { arc, pie } from 'd3';
import { PieArcDatum } from 'd3-shape';
import { G, Path, Svg } from 'react-native-svg';

export interface ChartEntry {
  name: string;
  value: number;
  color: string;
  highlight?: boolean;
}

interface Props {
  size: number;
  data: ChartEntry[];
}

const domain = ['yes', 'abstination', 'no'];

export const PieChart: React.FC<Props> = ({ size, data }) => {
  const pieObj = pie<ChartEntry>()
    .value((d) => {
      return d.value;
    })
    .sort(({ name }) => domain.indexOf(name.toLowerCase()));

  const arcs = pieObj(data);

  const paths = arcs.map((value) => {
    const path = arc<PieArcDatum<ChartEntry>>()
      .outerRadius(
        size / 2 - size / 10 + (value.data.highlight ? size / 10 : 0),
      )
      .innerRadius(0)(value);
    //
    return path;
  });

  return (
    <Svg width={size} height={size}>
      <G x={size / 2} y={size / 2}>
        {
          // pieChart has all the svg paths calculated in step 2)
          paths.map((item, index) =>
            item ? (
              <Path
                key={item}
                fill={data[index].color}
                strokeWidth={size / 100}
                d={item}
              />
            ) : null,
          )
        }
      </G>
    </Svg>
  );
};
