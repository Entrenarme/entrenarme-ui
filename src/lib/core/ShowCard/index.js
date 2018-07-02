// @flow
import * as React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import colors from '../../helpers/colors';
import H4 from '../Text/Headers/H4/index';

const ExtendedGlobalContainer = styled(ExpansionPanel)`
  > div {
    padding: 0px;
  }

  box-shadow: none !important;
  border-radius: 2px !important;
`;

const ExtendedTitle = styled(ExpansionPanelSummary)`
  div {
    margin: 0px !important;
    padding: 25px 30px;
  }

  div:last-child {
    padding: 0px;
  }
`;

const ExtendedBody = styled(ExpansionPanelDetails)`
  padding: 0px !important;
`;

const ExtendedHr = styled.hr`
  margin: 0px;
  height: 2px;
  border-width: 0;
  background-color: ${colors.gray.light};
`;

const BodyContainer = styled.div`
  padding: 25px 30px;

  *:only-child {
    margin-bottom: 0px;
  }

  *:last-child {
    margin-bottom: 0px;
  }
`;

type Props = {
  children: React.Node,
  title: string,
};

type State = {
  expanded: ?string,
};

class ShowCard extends React.Component<Props, State> {
  state = {
    expanded: null,
  };

  handleChange = (panel: string) => (event: Object, expanded: boolean) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { children, title, ...rest } = this.props;
    const { expanded } = this.state;

    return (
      <ExtendedGlobalContainer
        {...rest}
        expanded={expanded === 'panel1'}
        onChange={this.handleChange('panel1')}
      >
        <ExtendedTitle expandIcon={<FontAwesomeIcon icon={faAngleDown} />}>
          <H4 size="small" style={{ fontWeight: 600, margin: '0px' }}>
            {title}
          </H4>
        </ExtendedTitle>
        <ExtendedHr />
        <ExtendedBody>
          <BodyContainer>{children}</BodyContainer>
        </ExtendedBody>
      </ExtendedGlobalContainer>
    );
  }
}

ShowCard.defaultProps = {};

export default ShowCard;
