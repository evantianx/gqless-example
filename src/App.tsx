import React, { Suspense } from 'react';
import { query } from './graphql';
import { graphql } from '@gqless/react';

const SpaceList = graphql(() => (
  <div>
    {query.launchesPast({ limit: 10 }).map((launch) => (
      <div key={launch.id}>
        <h2>mission name: {launch.mission_name}</h2>
        <ul>
          {launch.ships.map((ship) => (
            <li key={ship.id}>
              <h3 onClick={ship.showActive}>{ship.name}</h3>
              {ship.image ? (
                <img
                  src={ship.image}
                  alt={ship.name}
                  style={{ width: '25rem' }}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
));
function App() {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <SpaceList />
    </Suspense>
  );
}

export default App;
