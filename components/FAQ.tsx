'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const faqSectionsConfig = [
  {
    key: 'general',
    items: [
      { key: 'howItWorks' },
      { key: 'channelsLimit' },
      { key: 'privateChannels' },
      { key: 'speed' }
    ]
  },
  {
    key: 'keywords',
    items: [
      { key: 'howKeywordsWork' },
      { key: 'regex' },
      { key: 'exactMatch' },
      { key: 'caseSensitive' }
    ]
  },
  {
    key: 'publishing',
    items: [
      { key: 'multipleChannels' },
      { key: 'format' },
      { key: 'changeFormat' }
    ]
  },
  {
    key: 'account',
    items: [
      { key: 'security' },
      { key: 'code' },
      { key: 'multipleUsers' }
    ]
  },
  {
    key: 'troubleshooting',
    items: [
      { key: 'channelNotFound' },
      { key: 'limitReached' },
      { key: 'noMessages' },
      { key: 'notPublishing' },
      { key: 'keywordsNotWorking' }
    ]
  }
]

export function FAQ() {
  const { t } = useLanguage()
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('faq.title')}{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('faq.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqSectionsConfig.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t(`faq.sections.${section.key}.title`)}</h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`
                  const isOpen = openItems[key] || false
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(sectionIndex, itemIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:text-primary transition-colors"
                      >
                        <span className="font-semibold text-lg pr-4">{t(`faq.sections.${section.key}.items.${item.key}.question`)}</span>
                        <svg
                          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-muted-foreground whitespace-pre-line leading-relaxed">
                            {t(`faq.sections.${section.key}.items.${item.key}.answer`)}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            {t('faq.notFound')}
          </p>
          <a
            href="https://t.me/radar_telegram_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {t('faq.contactSupport')}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

