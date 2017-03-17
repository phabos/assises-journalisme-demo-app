import React, { Component } from 'react';
import database from './Firebase.js';
import Loader from './Loader.js';
import { connect } from 'react-redux';
import afrique from './afrique.svg';
import { animateLogo } from './Animate.js';
import $ from 'jquery';

const Logo = () => {
  return <div className="logo">
    <img src={afrique} alt="logo" className="map" />
    <h1>Je voyage<br/>en Afrique</h1>
  </div>;
}

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
               <div className="search-container">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12 header">
                        {Logo()}
                        <form onSubmit={e => {
                                         e.preventDefault()
                                         this.props.onSearch(e)
                                       }}>
                          <div className="form-group">
                            <select id="departure" name="departure">
                              <option value="">Choisissez un pays de départ</option>
                              <option value="12">Côte d&apos;Ivoire</option>
                              <option value="55">France</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <select id="landing" name="landing">
                              <option value="">Choisissez un pays d&apos;arrivée</option>
                              <option value="33">Mozambique</option>
                              <option value="12">Côte d&apos;Ivoire</option>
                            </select>
                          </div>
                          <button type="submit">Rechercher</button>
                        </form>
                        <Loader loading={this.props.loading} />
                      </div>
                    </div>
                  </div>
                </div>
    );
  }
  componentDidMount() {
    animateLogo();
  }
}
// const Search = ({ loading, onSearch }) => {
//}

const mapStateToProps = (state) => {
  return {
    loading: state.application.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (event) => {
      let departureSearch = $(event.target).find('select[name="departure"]').val();
      let landingSearch = $(event.target).find('select[name="landing"]').val()
      if( departureSearch.length === 0
          || landingSearch.length === 0 )
      {
        alert( 'Veuillez saisir une valeur de départ / arrivée' );
        return false;
      }

      dispatch({type: 'LOADING_DATA', value:true});

      let endpoint = '/travel-infos/' + departureSearch + '-' + landingSearch;
      // Fetch datas
      database.getInstance().ref( endpoint ).once('value').then( snapshot => {
        if( ! snapshot.val() ){
          alert('No datas');
          dispatch({type: 'LOADING_DATA', value:false});
          return false;
        }
          dispatch({type: 'LOADING_DATA', value:false});
          dispatch({type: 'LOADING_END', value: {
                      firebaseDbResult: snapshot.val(),
                      departure: departureSearch,
                      landing: landingSearch,
                      loading: false
                    }
                  });
      }).catch( err => {
        dispatch({type: 'LOADING_DATA', value:false});
        alert('Something bad happened !');
      });
    }
  }
}

const SearchWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchWrapper;
