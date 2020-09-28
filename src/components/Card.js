import React from 'react';

export default function Card() {
  return (
    <li className="col-span-1 bg-gray-800 rounded-sm">
      <div className="flex items-start justify-between w-full p-6 space-x-6">
        <img
          className="flex-shrink-0 w-24 h-24 bg-gray-800 rounded-sm"
          src="https://img.discogs.com/3Oj6AsF7n82z1arWWU5uPbL5O_E=/fit-in/600x524/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1226520-1237470071.jpeg.jpg"
          alt=""
        />
        <div className="flex-1 truncate">
          <h3 className="text-sm font-medium leading-5 text-gray-100 truncate">
            Stairway To Heaven (2007 Remastered Version)
          </h3>
          <span className="flex-shrink-0 inline-block text-sm font-bold leading-4 text-gray-400">
            Led Zepplin
          </span>

          <p className="mt-1 text-sm leading-5 text-gray-400 truncate">
            Mothership
          </p>
        </div>
      </div>
    </li>
  );
}
