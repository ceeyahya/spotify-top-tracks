import React from 'react';

export default function Card({ track }) {
  return (
    <li className="col-span-1 bg-gray-800 rounded-sm">
      <div className="flex items-start justify-between w-full p-6 space-x-6">
        <img
          className="flex-shrink-0 w-24 h-24 bg-gray-800 rounded-sm"
          src={track.album.images[0].url}
          alt={`${track.album.name} album cover`}
        />
        <div className="flex-1 truncate">
          <h3 className="text-sm font-medium leading-5 text-gray-100 truncate">
            {track.name}
          </h3>
          <span className="flex-shrink-0 inline-block text-sm font-bold leading-4 text-gray-400">
            {track.artists.map((artist) => artist.name).join(' ')}
          </span>

          <p className="mt-1 text-sm leading-5 text-gray-400 truncate">
            {track.album.name}
          </p>
        </div>
      </div>
    </li>
  );
}
