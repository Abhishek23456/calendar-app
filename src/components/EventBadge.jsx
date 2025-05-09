export default function EventBadge({ event }) {
  return (
    <div className="group relative">
      <div className="
        bg-green-100 hover:bg-green-200 
        text-green-800 text-xs 
        p-1.5 mt-1 rounded-md 
        transition-colors duration-150 
        cursor-pointer overflow-hidden
        border-l-4 border-green-400
        shadow-sm
      ">
        <div className="font-medium truncate">
          {event.time} - {event.title}
        </div>
        
        {/* Hover tooltip */}
        <div className="
          absolute z-10 hidden group-hover:block
          bg-white text-gray-800 text-sm
          p-2 rounded-md shadow-lg
          border border-gray-200
          min-w-[200px] max-w-[300px]
          bottom-full mb-2 left-0
        ">
          <div className="font-semibold mb-1">{event.title}</div>
          <div className="text-gray-600 text-xs">{event.time}</div>
          {event.description && (
            <div className="mt-1 text-gray-700 text-xs">
              {event.description}
            </div>
          )}
          {event.location && (
            <div className="mt-1 flex items-center text-gray-600 text-xs">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}