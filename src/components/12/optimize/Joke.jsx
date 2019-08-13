import React from 'react';
import withFetch from './WithFetch';

const Joke = withFetch('http://api.icndb.com/jokes/random/3')(props => {
    return (
        <div>
            {
                props.data.value.map(joke => (
                    <p key={joke.id}>{joke.joke}</p>
                ))
            }
        </div>
    );
});

export default Joke;