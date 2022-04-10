const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    padding: 24,
    paddingTop: 20,
  },
  header: {
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 20,
  },
  contentContainer: {
    display: 'flex',
  },
  detailsContainer: {
    width: '50%',
    paddingRight: 24,
  },
  envVarContainer: {
    width: '50%',
    paddingLeft: 24,
  },
  detailRow: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    borderBottom: '1px solid lightgray'
  },
  detailKey: {
    width: 160,
    fontWeight: 900,
    color: '#5367FF'
  },
  detailValue: {
  },
  buttonContainer: {
    marginTop: 20,
  },
  addEnvVar: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  envVars: {
    display: 'flex',
    borderRadius: 4,
    flexDirection: 'column' as 'column',
    marginTop: 10,
    backgroundColor: '#e0e0e0',
    padding: 10,
    overflowWrap: 'anywhere' as 'anywhere',
  },
  envVar: {
    marginBottom: 3,
    fontSize: 14,
    color: 'grey'
  },
  addEnvVarInput: {
    marginRight: 5,
    width: '100%',
  },
  btn: {
    height: 40,
  }
};

export default styles;
