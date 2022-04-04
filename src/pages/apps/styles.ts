const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    padding: 24,
    paddingTop: 20,
  },
  appCard: {
    display: 'flex',
    borderBottom: '1px solid lightgray',
    padding: 17,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    "&:hover, &:focus": {
      backgroundColor: '#F6F7FB',
      cursor: 'pointer',
    }
  },
  header: {
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 10,
  },
  appCardLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  appCardName: {
    width: 200,
    // fontWeight: 600,
  },
  appCardEnvs: {
    marginLeft: 10,
    color: '#5367FF'
  },
  appType: {
    
  },
  typeContainer: {
    display: 'flex',
    alignItems: 'center',
    // fontWeight: 600,
  }
};

export default styles;
