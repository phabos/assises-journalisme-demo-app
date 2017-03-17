import React from 'react';
//import { getWindowInfos } from './WindowInfos.js';
import { connect } from 'react-redux';

const BlackList = ( isBlackListed ) => {
    if(isBlackListed) {
      return <span className="badge">Compagnie blacklisté</span>
    }
  }
const Flag = (name) => {
  return 'assets/images/' + name + '.png';
}

const Results = ({ results, closeResultWindow }) => {

  return <div className="result-container">
        <div className="heading" onClick={e => {
                                             e.preventDefault()
                                             closeResultWindow(e)
                                           }}><i className="fa fa-times" aria-hidden="true"></i></div>
        <div className="result-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="flags">
                  { Flag(results.departure) &&
                    <img src={Flag(results.departure)} alt="flag" className="departure" />
                  }
                  { Flag(results.landing) &&
                    <img src={Flag(results.landing)} alt="flag" className="landing" />
                  }
                </div>
                <div className="clearfix"></div>
                {results.firebaseDbResult.visas &&
                  <div className="result-content first">
                    <h3>Visas</h3>
                    <p><strong>{results.firebaseDbResult.visas.info}</strong>: {results.firebaseDbResult.visas.text}</p>
                  </div>
                }
                {results.firebaseDbResult.vaccine &&
                  <div className="result-content">
                    <h3>Vaccins</h3>
                    <p>{results.firebaseDbResult.vaccine.text}</p>
                  </div>
                }
                {results.firebaseDbResult.routes &&
                  <div className="result-content routes">
                    <h3>Itinéraires</h3>
                    {results.firebaseDbResult.routes.map((route, index) => (
                      <div key={index} className="media">
                        <div className="media-left media-middle">
                          <i className="fa fa-plane" aria-hidden="true"></i>
                        </div>
                        <div className="media-body">
                          <strong>{route.departure} <i className="fa fa-chevron-right" aria-hidden="true"></i> {route.landing}</strong>
                          <div>
                            <strong>Escale:</strong> {route.escale}<br/>
                            <strong>Prix:</strong> {route.prix}<br/>
                            <strong>Durée:</strong> {route.duree}<br/>
                            {BlackList(route.black_list)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                }
                {results.firebaseDbResult.news &&
                  <div className="result-content actus">
                    <h3>Dernières actus</h3>
                    {results.firebaseDbResult.news.map((news, index) => (
                      <div key={index} className="media">
                        <img className="d-flex mr-3" src={news.urlToImage} alt="actu" />
                        <div className="media-body">
                          <h4 className="mt-0">{news.title}</h4>
                          <p>{news.description}</p>
                          <a href={news.url} target="_blank">En savoir plus</a>
                          <p className="author">Par {news.author}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
}

const mapStateToProps = (state) => {
  return {
    results: state.application
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeResultWindow: (event) => {
      dispatch({type: 'CLOSE_RESULT_BOX', value:''});
    }
  }
}

const ResultsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default ResultsWrapper;
