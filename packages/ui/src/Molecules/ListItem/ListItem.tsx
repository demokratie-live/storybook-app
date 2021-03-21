import React from 'react';
import styled from 'styled-components/native';
import { PieChart } from '../../Atoms/PieChart';
import { VotesIndex } from '../../Atoms/VotesIndex';

const Container = styled.View`
  flex-direction: row;
`;

const TextContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Subline = styled.Text`
  padding-top: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const SideContainer = styled.View`
  min-width: 50px;
  justify-content: space-between;
  align-items: center;
`;

const PieChartContainer = styled.View`
  flex-direction: row;
  width: 45px;
  height: 45px;
  justify-content: space-between;
`;

interface Props {
  title: string;
  sessionTOPHeading: string;
  isIntro?: boolean;
  pieChart?: React.ReactElement<typeof PieChart>;
  voteIndex?: React.ReactElement<typeof VotesIndex>;
}

export const ListItem: React.FC<Props> = ({
  isIntro,
  title,
  sessionTOPHeading,
  pieChart,
  voteIndex,
  // voted,
  // votes,
  // voteDate,
  // voteEnd,
}) => {
  return (
    <Container>
      <TextContainer>
        <Title numberOfLines={isIntro ? undefined : 3}>{title}</Title>
        {!!sessionTOPHeading && (
          <Subline numberOfLines={isIntro ? undefined : 2}>
            {sessionTOPHeading}
          </Subline>
        )}
      </TextContainer>
      <SideContainer>
        {voteIndex}
        {!!pieChart && <PieChartContainer>{pieChart}</PieChartContainer>}
        {/* <VoteDate {...filter(VoteDateFragmentDoc, { voteDate, voteEnd })} /> */}
      </SideContainer>
    </Container>
  );
};
