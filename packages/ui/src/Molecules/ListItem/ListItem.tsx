import React from 'react';
import styled from 'styled-components/native';

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
  align-items: flex-end;
  min-width: 50px;
  justify-content: space-between;
`;

// const PieChartContainer = styled.View`
//   flex-direction: row;
//   width: 45px;
//   justify-content: space-between;
// `;

interface Props {
  title: string;
  sessionTOPHeading: string;
  isIntro?: boolean;
  renderPieCharts?: React.ReactNode[];
}

export const ListItem: React.FC<Props> = ({
  isIntro,
  title,
  sessionTOPHeading,
  // voted,
  // votes,
  // renderPieCharts,
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
        {/* <VotesIndex {...filter(VoteIndexFragmentDoc, { voted, votes })} /> */}
        {/* <PieChartContainer>{renderPieCharts}</PieChartContainer> */}
        {/* <VoteDate {...filter(VoteDateFragmentDoc, { voteDate, voteEnd })} /> */}
      </SideContainer>
    </Container>
  );
};
