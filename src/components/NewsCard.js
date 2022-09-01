import React from 'react'
export default function NewsCard({news}) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
      <img
        className="h-48 w-full object-cover"
        src={news.urlToImage}
        alt=""
      />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <a href={news.url} target="_blank" className='block'>
          <p className="text-xl font-semibold text-gray-900">
            {news.title}
          </p>
          <p className="mt-3 text-base text-gray-500">
            {news.description}
          </p>
        </a>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <a href="#">
            <span className="sr-only">{news.author}</span>
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            <a href="#" className="hover:underline">
              Roel Aufderehar
            </a>
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time>22 AUG 2022</time>
            <span aria-hidden="true">&middot;</span>
            <span>4 mins read</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}