window.ProjectShowPage = React.createClass({
  getInitialState: function () {
    return $.extend({}, this.getStateFromStore(), {
      showMyWork: false,
      showCurrent: true,
      showBacklog: true,
      showIcebox: true,
      showDone: false,
      showEpics: false,
      showLabels: false,
      showCharts: false,
      showProjectHistory: false
    });
  },

  panels: [MyWork, Current, Backlog, Icebox, Done],
  // , Epics, Labels, Charts, ProjectHistory],

  getStateFromStore: function () {
    var id = parseInt(this.props.params.id);
    return { project: ProjectStore.find(id), stories: StoryStore.all()};
  },

  componentDidMount: function () {
    StoryStore.addChangeListener(this.updateStories);
    ApiUtil.fetchStories(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    StoryStore.removeChangeListener(this.updateStories);
  },

  updateStories: function () {
    this.setState({ stories: StoryStore.all() });
  },

  createStory: function () {
    this.setState({ showIcebox: true });
  },

  togglePanel: function (e) {
    panel = e.currentTarget.dataset.panel;
    newState = {};
    newState[panel] = !this.state[panel];
    this.setState(newState);
  },

  activePanels: function () {
    return this.panels.filter(function (panel) {
      var stateString = "show" + panel.displayName;
      return this.state[stateString];
    }.bind(this));
  },

  render: function () {

    return (
      <div>
        <ProjectShowHeader title={this.state.project.name} />
        <section className="project main">
          <Sidebar createStory={this.createStory} togglePanel={this.togglePanel} />
          <article className="main">
            <section className="panels">
              {
                this.activePanels().map(function (panel) {
                  return React.createElement(panel, { stories: this.state.stories, projectId: this.state.project.id });
                }.bind(this))
              }
            </section>
          </article>
        </section>
      </div>
    );
  }
});
