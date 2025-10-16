'use client'

import { Container } from '@/components/layout/Container'
import { TeamMemberCard } from '@/components/ui/TeamMemberCard'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function AnimatedTeamMemberCard({ photo, name, title, bio, index }: { photo: string; name: string; title: string; bio: string; index: number }) {
  const cardAnimation = useScrollAnimation(0.1)

  return (
    <div
      ref={cardAnimation.ref}
      className={`transition-all duration-700 ${
        cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
      <TeamMemberCard
        photo={photo}
        name={name}
        title={title}
        bio={bio}
      />
    </div>
  )
}

export function LeadershipTeam() {
  const headingAnimation = useScrollAnimation(0.1)
  const subtitleAnimation = useScrollAnimation(0.1)

  const team = [
    {
      photo: '/fern-pic.jpg',
      name: 'Fern Morrison',
      title: 'CEO & Co-Founder',
      bio: 'Fern spent five years in the battery industry, specializing in materials and degradation modeling at Apple and Mitra Chem. With a background in investment banking, she merges financial and battery modeling to develop innovative risk solutions for energy storage.',
    },
    {
      photo: '/gabpic.jpg',
      name: 'Gabriele Pozzato',
      title: 'CTO & Co-Founder',
      bio: 'Gabriele is a modeling engineer with ten years of experience, formerly a Staff Battery Modeling Engineer at Form Energy and a Research Engineer at Stanford University. He is the author of a pioneering hybrid machine learning and physics-based battery model, advancing the state of energy storage technology.',
    },
  ]

  return (
    <section className="section-dark section-md" id="leadership">
      <Container>
        <div className="content-width-wide">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2
              ref={headingAnimation.ref}
              className={`text-56 font-heading font-semibold text-white text-balance mb-3 md:mb-4 transition-all duration-700 ${
                headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our Leadership Team
            </h2>
            <p
              ref={subtitleAnimation.ref}
              className={`text-16 md:text-18 text-white/60 max-w-2xl mx-auto transition-all duration-700 delay-150 ${
                subtitleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Industry veterans bringing deep expertise in battery technology, modeling, and risk assessment
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <AnimatedTeamMemberCard
                key={member.name}
                photo={member.photo}
                name={member.name}
                title={member.title}
                bio={member.bio}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
