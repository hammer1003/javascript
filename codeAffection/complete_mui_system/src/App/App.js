import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Employee from '../pages/Emplyees/Employees';

const theme = createMuiTheme({
    palette:{
      primary:{
        main:"#FF0000",
        light:"#3c44b126"
      },
      secondary:{
        main:"#f83245",
        light:"#f8324526"
      },
      background:{
        default:"#f4f5fd"
      }
    },
    overrides:{
      MuiAppBar:{
        root:{
          transform:"translateZ(0)"
        }
      }
    },
    props:{
      MuiIconButton:{
        disableRipple: true
      }
    }
    // shape:{
    //   borderRadius: "12px"
    // }
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft:"320px",
    width:"100%"
  }
})

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employee />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
