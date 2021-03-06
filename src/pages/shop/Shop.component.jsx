import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/Collection-preview.components';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            collections: SHOP_DATA,

        };
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectioProps }) => (
                        <CollectionPreview key={id} {...otherCollectioProps} />

                    ))
                }
            </div>
        );
    }
}

export default ShopPage;