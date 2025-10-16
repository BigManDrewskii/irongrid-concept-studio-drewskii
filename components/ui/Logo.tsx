export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Grid Icon */}
      <svg
        className="h-[18px] w-[18px] flex-none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Wordmark */}
      <span className="text-[15px] font-bold tracking-tight">
        IRONGRID
      </span>
    </div>
  )
}
