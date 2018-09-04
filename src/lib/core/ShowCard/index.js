// @flow
import * as React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-light-svg-icons';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import H4 from '../Text/Headers/H4';

const generateClassName = createGenerateClassName({ productionPrefix: 'eui' });
const jss = create(jssPreset());

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

const BodyContainer = styled.div`
  padding: 0px 30px 25px 30px;

  *:only-child {
    margin-bottom: 0px;
  }

  *:last-child {
    margin-bottom: 0px;
  }
`;

type Props = {
  children: React.Node,
};

type State = {
  expanded: ?string,
};

class ShowCard extends React.Component<Props, State> {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { children, panel, ...rest } = this.props;
    const { expanded } = this.state;

    return React.Children.map(children, (child, index) =>
      React.cloneElement(
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <ExtendedGlobalContainer
            style={{ marginTop: 2, marginBottom: 2 }}
            expanded={expanded === children[index].props.panel}
            onChange={this.handleChange(children[index].props.panel)}
            {...rest}
          >
            <ExtendedTitle expandIcon={<FontAwesomeIcon icon={faAngleDown} />}>
              <H4 size="small" style={{ fontWeight: 600, margin: '0px' }}>
                {child.props.children[0]}
              </H4>
            </ExtendedTitle>
            <ExtendedBody>
              <BodyContainer>{child.props.children[1]}</BodyContainer>
            </ExtendedBody>
          </ExtendedGlobalContainer>
        </JssProvider>,
      ),
    );
  }
}

export default ShowCard;
