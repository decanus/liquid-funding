import React, {Fragment, useState} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {withDatabase} from "@nozbe/watermelondb/DatabaseProvider";
import withObservables from "@nozbe/with-observables";
import {Q} from "@nozbe/watermelondb";
import PropTypes from 'prop-types'
import {useProjectData} from "./hooks";
import Loading from "../base/Loading";
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/Reorder';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classnames from 'classnames';

import defaultProjectImage from '../../images/default-project-img.png';
import newProjectImage from '../../images/new-project.png';

const SORT_TYPES = {
  date: 'date',
  name: 'name'
}

const styles = theme => {
  return ({
    root: {
      margin: '1.75rem 4.5rem',
      ...theme.typography.body1
    },
    filters: {
      float: 'right'
    },
    search: {
      height: 36
    },
    formatBtn: {
      cursor: 'pointer',
      '&:hover, &.active': {
        color: 'black'
      }
    },
    title: {
      fontSize: '20px',
      textAlign: 'center',
      fontWeight: 500
    },
    media: {
      height: 235,
      position: 'relative'
    },
    avatarGrid: {
      position: 'absolute',
      top: 26,
      left: 26
    },
    'card-title': {
      fontSize: '20px'
    },
    'card-content': {
      fontSize: '16px'
    },
    'card-actions': {
      float: 'right'
    },
    progress: {
      height: 10
    },
    'new-project-img': {
      textAlign: 'center',
      margin: 0,
      paddingTop: 115,
      paddingBottom: 43
    },
    nameCell: {
      fontSize: 18
    },
    darkRow: {
      backgroundColor: theme.palette.common.grey
    },
    addProjectRow: {
      borderTop: '0.25px solid ' + theme.palette.text.grey,
      cursor: 'pointer',
      '& td': {
        paddingTop: 35
      }
    }
  })
}

function sortByTitle(a, b) {
  if (!a.manifest || !b.manifest) {
    return 0;
  }
  return a.manifest.title.localeCompare(b.manifest.title)
}

// No date field, but we can use the ID
function sortByDate(a, b) {
  if (parseInt(a.projectId, 10) > parseInt(b.projectId, 10)) {
    return -1;
  }
  return 1;
}

function ProjectCard({classes, project}) {
  return (<Card className={classes.card}>
    <CardActionArea href={`/#/project/${project.projectId}`}>
      <CardMedia
        className={classes.media}
        image={defaultProjectImage}
        title="Project image"
      />
      <LinearProgress className={classes.progress} variant="determinate" value={75} /> {/*TODO get actual percentage*/}
      <CardContent>
        <Typography align="right" className={classes['card-content']}>75% of 2.055 ETH</Typography> {/*TODO get actual percentage*/}
        <Typography align="right" className={classes['card-content']}>3 funders</Typography> {/*TODO get actual funders*/}
        <Typography gutterBottom variant="h5" component="h2" className={classes['card-title']} noWrap>
          {project.manifest.title}
        </Typography>
        <Typography component="p" className={classes['card-content']} noWrap gutterBottom>
          {project.manifest.description}&nbsp;
        </Typography>
        <Typography component="p" className={classes['card-content']} color="textSecondary">
          Delegate: {project.manifest.creator} {/*TODO check if that really is the delegate*/}
        </Typography>
        {project.manifest.avatar && <img className={classes.avatarGrid} alt="avatar" src={project.manifest.avatar} width={40} height={40}/>}
      </CardContent>
    </CardActionArea>
    <CardActions className={classes['card-actions']}>
      <Button size="small" color="primary" href={`/#/project/${project.projectId}`}>
        Read more
      </Button>
    </CardActions>
  </Card>)
}

function GridView({classes, projects}) {
  return (<Grid container spacing={40}>
    {projects.map((project, index) => {
      if (!project.manifest) {
        return ''
      }
      return (<Grid key={'project-' + index} item xs={12} sm={6} md={4} lg={3} className={classes.card}>
        <ProjectCard project={project} classes={classes}/>
      </Grid>);
    })}
    <Grid item xs={12} sm={6} md={4} lg={3} className="project-list-item">
      <Card className={classes.card}>
        <CardActionArea href="/#/create-project/" style={{height: 460}}>
          <p className={classes['new-project-img']}><img alt="new project" src={newProjectImage}/></p>
          <Typography align="center" className={classes['card-content']}>Add your own project</Typography>
        </CardActionArea>
      </Card>
    </Grid>
  </Grid>)
}

const CustomTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.text.grey,
    fontSize: 15,
    border: 0
  },
  body: {
    fontSize: 16,
    border: 0,
    height: 80
  }
}))(TableCell);

function ListView({classes, projects, history}) {
  let rowCounter = -1;
  return (<Table className={classes.table}>
    <TableHead>
      <TableRow>
        <CustomTableCell>&nbsp;</CustomTableCell>
        <CustomTableCell>Project name</CustomTableCell>
        <CustomTableCell>Description</CustomTableCell>
        <CustomTableCell>Funding details</CustomTableCell>
        <CustomTableCell>Delegate</CustomTableCell>
        <CustomTableCell>&nbsp;</CustomTableCell>
        <CustomTableCell>&nbsp;</CustomTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {projects.map((project, index) => {
        rowCounter++;
        if (!project.manifest) {
          return ''
        }
        return (
          <TableRow className={classnames(classes.row, {[classes.darkRow]: rowCounter%2})} key={'project-' + index}>
            <CustomTableCell>
              {project.manifest.avatar &&
              <img className={classes.avatar} alt="avatar" src={project.manifest.avatar} width={40} height={40}/>}
            </CustomTableCell>
            <CustomTableCell className={classes.nameCell}>{project.manifest.title}</CustomTableCell>
            <CustomTableCell>{project.manifest.description}</CustomTableCell>
            <CustomTableCell>76% of 2.055 ETH<br/>3 funders</CustomTableCell>
            <CustomTableCell>{project.manifest.creator}</CustomTableCell>
            <CustomTableCell>&lt;3</CustomTableCell>
            <CustomTableCell>
              <Button size="small" color="primary" href={`/#/project/${project.projectId}`}>Read more</Button>
            </CustomTableCell>
          </TableRow>
        )
      })}
      <TableRow className={classnames(classes.row, classes.addProjectRow)} hover onClick={() => history.push('/create-project/')}>
        <CustomTableCell>
          <img alt="add project" src={newProjectImage} width={40} height={40}/>
        </CustomTableCell>
        <CustomTableCell>Add your own project</CustomTableCell>
        <CustomTableCell/>
        <CustomTableCell/>
        <CustomTableCell/>
        <CustomTableCell/>
        <CustomTableCell/>
      </TableRow>
    </TableBody>
  </Table>)
}

function Projects({projectAddedEvents, classes, history}) {
  const [sortType, _setSortType] = useState(SORT_TYPES.date);
  const [isGridView, setIsGridView] = useState(true);

  const projects = projectAddedEvents.map(event => {
    return Object.assign({projectId: event.returnValues.idProject}, useProjectData(event.returnValues.idProject, '', projectAddedEvents));
  })

  let sortFunction = (sortType === SORT_TYPES.name) ? sortByTitle : sortByDate;
  projects.sort(sortFunction);

  return (<div className={classes.root}>
    <Typography className={classes.title} component="h2" gutterBottom>All projects</Typography>

    {projects.length === 0 && <Loading/>}

    {projects.length > 0 &&
    <Fragment>
      <div className={classes.filters}>
        <FormControl>
          <TextField
            variant="outlined"
            placeholder="Filter by tags"
            InputProps={{
              className: classes.search,
              startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            }}
          />
        </FormControl>

        <DashboardIcon className={classnames(classes.formatBtn, {'active': isGridView})} color="disabled" fontSize="large" onClick={() => setIsGridView(true)}/>
        <ListIcon className={classnames(classes.formatBtn, {'active': !isGridView})} color="disabled" fontSize="large" onClick={() => setIsGridView(false)}/>
      </div>

      {!isGridView && ListView({classes, projects, history})}
      {isGridView && GridView({classes, projects})}
    </Fragment>
    }
  </div>)
}

Projects.propTypes = {
  projectAddedEvents: PropTypes.array,
  classes: PropTypes.object
}

const StyledProject = withStyles(styles)(Projects)
export default withDatabase(withObservables([], ({database}) => ({
  projectAddedEvents: database.collections.get('lp_events').query(
    Q.where('event', 'ProjectAdded')
  ).observe()
}))(StyledProject))
