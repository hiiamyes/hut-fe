import React, { PropTypes } from 'react';
import MobileMenu from './MobileMenu.js';
import Chart from './Chart.js';
import TitleBar from './TitleBar.js';
import * as actions from '../reducers/hut';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {ha: true};
  }

  componentWillMount() {
    this.props.actions.load();
  }

  test() {
    this.setState({ha: true});
  }

  out() {
    this.setState({ha: false});
  }

  render() {
    return (
      <div id='app'>
        <MobileMenu
          data={this.props.data}/>
        <div id='navbar'>
          <div>台灣山屋</div>
        </div>
        <div id='content'>
          <div id='sidebar'>
            <div>
              <div
                className='admin'
                onMouseOver={this.test.bind(this)}
                onMouseOut={this.out.bind(this)}>
                <div className='hoverbar'></div>
                <div className='icon'></div>
                <div>雪霸國家公園</div>
              </div>
              {/*<div style={{display: this.state.ha ? '' : 'none'}}>
                <div>七卡山莊</div>
                <div>三六九山莊</div>
              </div>*/}
              <div
                className='admin'
                onMouseOver={this.test.bind(this)}
                onMouseOut={this.out.bind(this)}>
                <div className='hoverbar'></div>
                <div className='icon'></div>
                <div>玉山國家公園</div>
              </div>
              <div
                className='admin'
                onMouseOver={this.test.bind(this)}
                onMouseOut={this.out.bind(this)}>
                <div className='hoverbar'></div>
                <div className='icon'></div>
                <div>太魯閣國家公園</div>
              </div>
              <div
                className='admin'
                onMouseOver={this.test.bind(this)}
                onMouseOut={this.out.bind(this)}>
                <div className='hoverbar'></div>
                <div className='icon'></div>
                <div>台灣山林悠遊網</div>
              </div>
              <div
                className='admin'
                onMouseOver={this.test.bind(this)}
                onMouseOut={this.out.bind(this)}>
                <div className='hoverbar'></div>
                <div className='icon'></div>
                <div>南投林區管理處</div>
              </div>
            </div>
            {/*admin*/}
            {/*hut*/}
          </div>
          <div id='hut'>
            <TitleBar/>
            <div id='calendar'>
              <div>
                <div className='month'>4月</div>
                <div id='chart-container'>
                  <Chart/>
                  <Chart/>
                  <Chart/>
                  <Chart/>
                  <Chart/>
                  <Chart/>
                  <Chart/>
                </div>
                <div className='divider'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    data: state.hut.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
