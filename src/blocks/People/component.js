import React, { Fragment } from 'react';
import Section, { SectionContent, SectionDescription } from 'components/Section';
import IntegerStat from 'components/IntegerStat';

const People = ({ currentTab, changeTab, data }) => {
  const tabs = [
    {
      label: 'In Space',
      background: 'dragonriders.jpg',
      title: 'In Space'
    },
    {
      label: 'Moon Population',
      background: 'moon.jpg',
      title: 'Moon Population'
    },
    {
      label: 'Mars Population',
      background: 'mars.jpg',
      title: 'Mars Population'
    },
    {
      label: 'Employees',
      background: 'tankland.jpg',
      title: 'Employees'
    }
  ];
  const displayedTab = currentTab || tabs[0].label;

  return (
    <Section
      title="People"
      tabs={tabs}
      currentTab={displayedTab}
      changeTab={changeTab}
      upAnchor="dragon"
      selfAnchor="people"
      downAnchor="starlink"
    >
      {data ? (
        <Fragment>
          {displayedTab === tabs[0].label && (
            <Fragment>
              <SectionContent>
                <IntegerStat value={data.inSpace} subtitle="People" />
              </SectionContent>
              <SectionDescription>
                {`No SpaceX astronauts have flown yet. Dragon 2, being developed as part of NASA's Commercial Crew
                Transportation Capability (CCtCap) program, performed a pad abort test in May 2015. The first orbital
                test (DM-1) has been conducted an the first crewed test is planned for late 2019.`}
              </SectionDescription>
            </Fragment>
          )}

          {displayedTab === tabs[1].label && (
            <Fragment>
              <SectionContent>
                <IntegerStat value={data.moonPopulation} subtitle="People" />
              </SectionContent>
              <SectionDescription>
                {`While the Moon has never been SpaceX's main focus, Starship will enable the construction of a Moon Base
                Alpha if customers want to build it.`}
              </SectionDescription>
            </Fragment>
          )}

          {displayedTab === tabs[2].label && (
            <Fragment>
              <SectionContent>
                <IntegerStat value={data.marsPopulation} subtitle="People" />
              </SectionContent>
              {/* eslint-disable-next-line */}
              <SectionDescription>{`No one's there yet ;-)`}</SectionDescription>
            </Fragment>
          )}

          {displayedTab === tabs[3].label && (
            <Fragment>
              <SectionContent>
                <IntegerStat value={data.employees} subtitle="People" />
              </SectionContent>
            </Fragment>
          )}
        </Fragment>
      ) : (
        <SectionContent />
      )}
    </Section>
  );
};

export default People;
