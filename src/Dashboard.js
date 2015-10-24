import React from 'react';


const Link = React.createClass({
  propTypes: {
    project: React.PropTypes.string.isRequired
  },


  render() {
    const {project} = this.props;

    return (
      <td style={{padding: '0.2em 0.6em', whiteSpace: 'nowrap'}}>
        <a href={`https://github.com/${project}`}>{project}</a>
      </td>
    );
  }
});


const Shield = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    project: React.PropTypes.string.isRequired
  },


  render() {
    const {project, type} = this.props;

    return (
      <td style={{padding: '0.2em 0.6em', textAlign: 'center'}}>
        <img
          style={{verticalAlign: 'middle'}}
          src={`https://img.shields.io/${type}/${project}.svg?style=flat-square`} />
      </td>
    );
  }
});


const Project = React.createClass({
  propTypes: {
    project: React.PropTypes.string.isRequired,
    i: React.PropTypes.number.isRequired
  },


  render() {
    const {project, i} = this.props;

    return (
      <tr style={{backgroundColor: i % 2 ? 'rgba(0, 0, 0, 0.04)' : ''}}>
        <Link project={project} />
        <Shield project={project} type="circleci/project" />
        <Shield project={project} type="github/tag" />
        <Shield project={project} type="github/release" />
        <Shield project={project.split('/').slice(1).join('/')} type="npm/v" />
        <Shield project={project.split('/').slice(1).join('/')} type="bower/v" />
        <Shield project={project} type="david" />
        <Shield project={project} type="david/dev" />
        <Shield project={project} type="david/peer" />
      </tr>
    );
  }
});


const Dashboard = React.createClass({
  propTypes: {
    projects: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },


  render() {
    const {projects} = this.props;

    return (
      <table style={{lineHeight: '2em', width: '100%'}}>
        <tbody>
          {projects.map((project, i) => <Project key={project} project={project} i={i} />)}
        </tbody>
      </table>
    );
  }
});


export default Dashboard;
