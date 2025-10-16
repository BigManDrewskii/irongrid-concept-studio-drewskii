interface ProcessStepProps {
  number: number
  title: string
  description: string
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex items-start gap-4">
      {/* Number Circle */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-electricBlue bg-electricBlue/10 flex items-center justify-center">
        <span className="text-18 font-semibold text-electricBlue leading-none">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 pt-1">
        <h3 className="text-20 md:text-24 font-semibold text-white">
          {title}
        </h3>
        <p className="text-16 text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
