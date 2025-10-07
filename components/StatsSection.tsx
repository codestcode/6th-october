"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mt-2 md:mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 justify-items-center items-center lg:mb-6 "
    >
      <StatCard number="6" label="October" delay={0.5} />
      <StatCard number="1973" label="Year of Victory" delay={0.6} />
      <StatCard number="220K+" label="Brave Soldiers" delay={0.7} />
    <StatCard number="52" label="Years" delay={0.8} />
      <StatCard number="∞" label="National Pride" delay={0.8} />

    </motion.div>
  )
}

function StatCard({
  number,
  label,
  delay,
}: {
  number: string
  label: string
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.6, delay }}
      className="text-center relative"
    >
      {/* glowing background pulse */}
      <motion.div
        className="absolute inset-0 mx-auto w-16 h-16 md:w-24 md:h-24 rounded-full bg-amber-400/10 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* number */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10"
      >
        <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,200,100,0.4)]">
          {number}
        </div>
      </motion.div>

      {/* label */}
      <p className="relative z-10 text-[0.7rem] md:text-sm text-amber-100/70 uppercase tracking-widest mt-1">
        {label}
      </p>
    </motion.div>
  )
}
