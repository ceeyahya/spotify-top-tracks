import React from 'react';

export function Header({ children }) {
  return <h1 className="mt-4 text-4xl font-bold text-gray-900 ">{children}</h1>;
}

export function Paragraph({ children }) {
  return <p className="max-w-3xl mt-4 text-lg text-gray-500">{children}</p>;
}

export function GridLayout({ children }, ref) {
  return (
    <ul
      className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-2"
      ref={ref}
    >
      {children}
    </ul>
  );
}

export function Card({ track }) {
  return (
    <li className="col-span-1 bg-gray-100 border-2 border-gray-200 rounded-sm">
      <div className="flex items-start justify-between w-full p-6 space-x-6">
        <img
          className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-sm"
          src={track.album.images[0].url}
          alt={`${track.album.name} album cover`}
        />
        <div className="flex-1 truncate">
          <h3 className="text-base font-bold leading-5 text-gray-900 truncate">
            {track.name}
          </h3>
          <span className="flex-shrink-0 inline-block text-sm font-bold leading-4 text-gray-500">
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
