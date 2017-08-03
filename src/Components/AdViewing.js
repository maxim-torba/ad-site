import React, {Component} from 'react';
import Ad from './Ad';
import HomeLink from './HomeLink';

class AdViewing extends Component {
    render() {
        const ads = JSON.parse(localStorage.getItem('ads')) || [];
        const id = this.props.match.params.ad;
        const ad = ads.filter(e => e.id === id)[0];
        
        return (
            <div>
                {
                    ad ? <Ad title={ad.title}
                             description={ad.description}
                             author={ad.author}
                             created_at={ad.created_at}
                             id={id}/> :
                        <h2>There is no such ad</h2>
                }
                <HomeLink/>
            </div>
        )
    }
}

export default AdViewing;