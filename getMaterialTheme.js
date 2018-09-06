import { createMuiTheme } from 'material-ui/styles';

import * as colors from './src/lib/helpers/colors.old';
import * as fonts from './src/lib/helpers/fonts';

const theme = createMuiTheme({
  overrides: {
    MuiCircularProgress: {
      root: {
        '&.loading-custom-icon': {
          color: colors.white,
          width: 36,
          height: 36,
        },
        '&.loading-status-button': {
          color: colors.white,
          marginRight: 8,
          '&.outline': {
            color: colors.primary,
          },
        },
        '&.loading-status-button.full-width': {
          position: 'absolute',
          top: 14,
          left: 24,
        },
      },
    },
    MuiButton: {
      root: {
        fontSize: '1em',
        flex: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      raised: {
        color: colors.white,
        backgroundColor: colors.blueLight,
        padding: 16,
        boxShadow: 'none',
        '&.sm': {
          padding: 12,
        },
        '&.outline': {
          color: colors.blueLight,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.blueLight,
          borderStyle: 'solid',
          '&.selected': {
            backgroundColor: colors.blueLight,
            color: colors.white,
          },
        },
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: colors.blueLightAlt,
        },
        '&.fb': {
          backgroundColor: colors.blueFb,
          '&:hover': {
            backgroundColor: colors.blueFbAlt,
          },
        },
        '&.default': {
          backgroundColor: colors.primary,
          '&:hover': {
            backgroundColor: colors.primaryAlt,
          },
          '&.outline': {
            color: colors.primary,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.primary,
            borderStyle: 'solid',
          },
        },
        '&.danger': {
          backgroundColor: colors.red,
          '&:hover': {
            backgroundColor: colors.redAlt,
          },
        },
        '&.gray': {
          backgroundColor: colors.gray,
          '&:hover': {
            backgroundColor: colors.grayAlt,
          },
        },
        '&.alt': {
          backgroundColor: colors.orange,
          '&:hover': {
            backgroundColor: colors.orangeAlt,
          },
        },
      },
      disabled: {
        color: colors.white,
        '&.custom-button.loading': {
          backgroundColor: colors.blueLightAlt,
        },
        '&.custom-button.loading.outline': {
          color: colors.blueLight,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.blueLight,
          borderStyle: 'solid',
          '&.default': {
            color: colors.primary,
            borderColor: colors.primary,
          },
        },
        '&.custom-button.error': {
          backgroundColor: colors.red,
        },
        '&.custom-button.error.outline': {
          color: colors.red,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.red,
          borderStyle: 'solid',
        },
        '&.custom-button.success': {
          backgroundColor: colors.green,
        },
        '&.custom-button.success.outline': {
          color: colors.green,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.green,
          borderStyle: 'solid',
        },
      },
      label: {
        lineHeight: '20px',
        fontFamily: fonts.mainFont,
        fontSize: '1em',
        fontWeight: 400,
        '&.sm': {
          lineHeight: '16px',
          fontSize: '0.8em',
        },
      },
    },
    MuiBadge: {
      badge: {
        color: colors.white,
        backgroundColor: colors.orange,
        height: 20,
        width: 20,
        marginTop: 4,
      },
    },
    MuiFormControl: {
      root: {
        marginBottom: 8,
      },
    },
    MuiInput: {
      underline: {
        '&:hover&:before': {
          backgroundColor: colors.grayLight,
        },
      },
      input: {
        color: colors.gray,
        fontFamily: fonts.regularFont,
      },
      inkbar: {
        '&:before': {
          backgroundColor: `${colors.grayLight} !important`,
        },
        '&:after': {
          backgroundColor: colors.primary,
        },
      },
      error: {
        '&:after': {
          backgroundColor: colors.red,
        },
      },
    },
    MuiFormHelperText: {
      error: {
        color: colors.red,
      },
    },
    MuiInputLabel: {
      formControl: {
        color: colors.primary,
      },
    },
    MuiFormLabel: {
      error: {
        color: `${colors.red} !important`,
      },
    },
    MuiListItemText: {
      root: {
        padding: '16px',
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: '1em',
        paddingRight: '1em',
      },
      default: {
        paddingTop: '1em',
        paddingBottom: '1em',
      },
    },
    MuiTypography: {
      title: {
        color: colors.primary,
        fontFamily: fonts.mainFont,
        textTransform: 'uppercase',
      },
      body1: {
        fontFamily: fonts.regularFont,
        fontSize: '1em',
        color: colors.gray,
      },
    },
    MuiRadio: {
      checked: {
        color: colors.blueLight,
      },
    },
    MuiCheckbox: {
      checked: {
        color: colors.blueLight,
      },
    },
    MuiDialog: {
      paperWidthXs: {
        maxWidth: 400,
      },
    },
    MuiMenuItem: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(18, 85, 102, 0.12)',
        },
      },
      selected: {
        backgroundColor: 'rgba(18, 85, 102, 0.12)',
      },
    },
  },
  palette: {
    // primary: colors.red,
    // secondary: green,
  },
});

export default theme;
