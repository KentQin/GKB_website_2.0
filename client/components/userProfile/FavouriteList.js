import React from 'react';
import FavouriteItem from './FavouriteItem';
import testImg from './../img/default-profile-picture.jpg';

class FavouriteList extends React.Component{
    render() {
        const entry = {
            location: "Carlton",
            img: {testImg},
            description: "blablabalbalabalablabalabalbalab"
        }

        var items = [];
        var entryArray = [entry, entry, entry, entry];

        if (typeof(entryArray) != 'undefined') {
            for (var i = 0; i < entryArray.length; i++) {
                console.log("Processing "+i);
                items.push(<div><FavouriteItem location={entryArray[i].location}
                                               img={entryArray[i].img}
                                               description={entryArray[i].description}/>
                    </div>
                );
            }
        }else{
            console.log("Empty array");
        }

        return(
            <div className="favourite-list-block">
                {items}
            </div>
        );
    }
}

export default FavouriteList;