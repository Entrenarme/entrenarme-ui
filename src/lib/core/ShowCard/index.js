// @flow
import * as React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createGenerateClassName,
  jssPreset,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import H4 from '../Text/Headers/H4/index';

const theme = createMuiTheme();

const generateClassName = createGenerateClassName({
  productionPrefix: 'showcard-eui',
});
const jss = create(jssPreset());

const ExtendedGlobalContainer = styled(ExpansionPanel)`
  > div {
    padding: 0px;
  }

  margin: 0px !important;
  box-shadow: none !important;
  border-radius: 2px !important;

  &:before {
    background-color: transparent !important;
  }
`;

const ExtendedTitle = styled(ExpansionPanelSummary)`
  div {
    padding: 25px 30px;
  }

  div:last-child {
    padding: 0px;
  }
`;

const ExtendedBody = styled(ExpansionPanelDetails)`
  padding: 0px !important;
`;

const BodyContainer = styled.div``;

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
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
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
            <ExtendedBody>
              <BodyContainer>{children}</BodyContainer>
            </ExtendedBody>
          </ExtendedGlobalContainer>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

ShowCard.defaultProps = {};

export default ShowCard;
