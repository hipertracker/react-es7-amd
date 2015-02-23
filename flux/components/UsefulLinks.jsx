define(function (require, exports, module) {
    var React = require('react'),
        Reflux = require('reflux'),
        LinksActions = require('jsx!flux/actions/LinksActions'),
        LinksStore = require('jsx!flux/stores/LinksStore'),
        m = require('lib/tools').m;

    var T = React.PropTypes;

    var UsefulLinks = React.createClass({
        mixins: [Reflux.listenTo(LinksStore, 'linksUpdate')],
        propTypes: {
            title: T.string.isRequired
        },
        getInitialState() {
            return {
                links: []
            }
        },
        linksUpdate(data) {
            this.setState({links: data.links});
        },
        componentDidMount() {
            LinksActions.loadData();
        },
        render() {
            if (!this.state.links.length) {
                return <span/>;
            }
            var styles = {
                item: {
                    paddingLeft: 30
                }
            };
            var style = m(styles.item, this.props.style);
            var items = this.state.links.map((item, key) =>
                <li key={key}>
                    <a href={item.url} target="_blank">{item.title}</a>
                </li>);
            return (
                <section>
                    <h4>{this.props.title}</h4>
                    <ul style={style}>{items}</ul>
                </section>
            );
        }
    });

    module.exports = UsefulLinks;
});


