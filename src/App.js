import React, { useState, useEffect } from 'react';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import Cookies from 'js-cookie';
import { SpotifyApiContext, User, UserTop } from 'react-spotify-api';

import Layout from './components/Layout';
import Card from './components/Card';

function App() {
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    setAuthToken(Cookies.get('spotifyAuthToken'));
  }, [Cookies.get('spotifyAuthToken')]);

  function logout() {
    Cookies.remove('spotifyAuthToken');
    window.location = '/';
  }

  return (
    <Layout>
      {Cookies.get('spotifyAuthToken') ? (
        <SpotifyApiContext.Provider value={authToken}>
          <div className="flex items-center justify-between">
            <User>
              {(user) => {
                if (user && user.data) {
                  return (
                    <span className="font-medium text-gray-100">
                      Hello, {user.data.display_name}
                    </span>
                  );
                } else {
                  return <p>fetching user</p>;
                }
              }}
            </User>

            <button
              onClick={logout}
              className="px-3 py-2 text-white transition duration-150 ease-in-out bg-red-500 rounded-md hover:bg-red-600 focus:bg-red-800"
            >
              Logout
            </button>
          </div>
          <h1 className="mt-4 text-4xl font-black text-gray-100 ">
            Here are the songs you listened to the most these last 4 weeks.
          </h1>
          <p className="max-w-3xl text-lg text-gray-500">
            I hope it's what you were expecting cause spotify doesn't lie... ,
            you can save or share your top tracks using the buttons below
          </p>

          <ul className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-2 ">
            <UserTop type="tracks">
              {(tracks, loading, error) =>
                tracks && tracks.data
                  ? tracks.data.items.slice(0, 10).map((track) => {
                      return (
                        <>
                          <Card track={track} />
                        </>
                      );
                    })
                  : null
              }
            </UserTop>
          </ul>
        </SpotifyApiContext.Provider>
      ) : (
        <div className="py-48 mb-48">
          <h1 className="text-4xl font-black text-gray-100">TopTracks</h1>
          <div className="flex items-center mt-2 text-base">
            <span className="italic text-gray-500">tɑp træks</span>
            <span className="px-3 py-1 ml-4 text-gray-500 bg-gray-800 rounded-full">
              noun
            </span>
          </div>
          <p className="max-w-xl mt-4 text-lg text-gray-500">
            a little service that allows yout to get your spotify top tracks and
            share them with other people
          </p>
          <SpotifyAuth
            title="Get Started with Spotify"
            logoClassName="h-8 w-8 mr-3"
            btnClassName="flex items-center font-bold text-lg px-4 py-3 rounded-md bg-gray-100 mt-4 bg-spotify-lgreen hover:bg-spotify-green transition ease-in-out duration-150"
            redirectUri="http://localhost:3000/callback"
            clientID="af1c7f3117414a71b1ae375d258ea6d9"
            scopes={[
              Scopes.userReadPrivate,
              'user-read-email',
              'user-top-read',
            ]} // either style will work
          />
        </div>
      )}
    </Layout>
  );
}

export default App;
