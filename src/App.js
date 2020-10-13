import React, { useState, useEffect } from 'react';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import Cookies from 'js-cookie';
import { SpotifyApiContext, User, UserTop } from 'react-spotify-api';

import { Header, Paragraph, Card, GridLayout } from './components/Base';
import Layout from './components/Layout';

function App() {
  const [authToken, setAuthToken] = useState();
  const token = Cookies.get('spotifyAuthToken');

  useEffect(() => {
    setAuthToken(Cookies.get('spotifyAuthToken'));
  }, [token]);

  function logout() {
    Cookies.remove('spotifyAuthToken');
    window.location = '/';
  }

  return (
    <Layout>
      {Cookies.get('spotifyAuthToken') ? (
        <SpotifyApiContext.Provider value={authToken}>
          <User>
            {(user) =>
              user && user.data ? (
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">
                    Hello, {user.data.display_name}
                  </span>
                  <button
                    onClick={logout}
                    className="px-3 py-2 text-white transition duration-150 ease-in-out bg-red-500 rounded-md hover:bg-red-600 focus:bg-red-800"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <p className="text-lg text-center text-gray-900">
                  Fetching your profile ...
                </p>
              )
            }
          </User>

          <Header>
            Here are the songs you listened to the most these last 4 weeks.
          </Header>
          <GridLayout>
            <UserTop type="tracks">
              {(tracks) =>
                tracks && tracks.data ? (
                  tracks.data.items.slice(0, 12).map((track) => {
                    return <Card track={track} key={track.id} />;
                  })
                ) : (
                  <p className="text-lg text-center text-gray-900">
                    Looking for your top tracks ...
                  </p>
                )
              }
            </UserTop>
          </GridLayout>
        </SpotifyApiContext.Provider>
      ) : (
        <div className="py-16 md:py-64">
          <Header>TopTracks</Header>
          <div className="flex items-center mt-2 text-base">
            <span className="italic text-gray-500">tɑp træks</span>
            <span className="px-3 py-1 ml-4 text-gray-400 bg-gray-200 rounded-full">
              noun
            </span>
          </div>
          <Paragraph>
            a little service that allows you to get your spotify top tracks
          </Paragraph>
          <SpotifyAuth
            title="Get Started with Spotify"
            logoClassName="h-8 w-8 mr-3"
            btnClassName="flex items-center font-bold text-lg px-4 py-3 rounded-md bg-gray-100 mt-4 bg-spotify-lgreen hover:bg-spotify-green transition ease-in-out duration-150"
            redirectUri={
              process.env === 'development'
                ? 'http://localhost:3000/callback'
                : 'https://toptracks.vercel.app/callback'
            }
            clientID="af1c7f3117414a71b1ae375d258ea6d9"
            scopes={[
              Scopes.userReadPrivate,
              'user-read-email',
              'user-top-read',
            ]}
          />
        </div>
      )}
    </Layout>
  );
}

export default App;
