import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    bottomcontainer: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
    },
  media: {
    height: 0,
    paddingTop: '80.25%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    width:260,
    position: 'relative',
    overflow:'hidden',
    cursor:'pointer',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0px 5px 10px',
  },
  title: {
    padding: '0px 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  buttonSubmit: {
    width:'30%',
    alignItems:'center',
    marginTop:25,
    marginLeft:0,
    textTransform: 'none',
    borderRadius:10,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:10,
    paddingRight:10,

  },
});