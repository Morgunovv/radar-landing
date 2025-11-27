'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const problemKeys = ['manual', 'missed', 'time', 'opportunities', 'competitors']
const solutionKeys = ['automatic', 'instant', 'savings', 'first', 'analytics']

export function ProblemsSolutions() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Знакомая ситуация?</h2>
          <p className="text-xl text-muted-foreground">Превратим боль в эффективность</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problems */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 rounded-xl bg-destructive/20">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold">Проблемы</h3>
            </motion.div>

            {problemKeys.map((key, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-3 p-4 rounded-xl bg-card/50 border border-destructive/20 backdrop-blur-sm"
              >
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  {key === 'manual' && 'Необходимость мониторить 50+ каналов вручную'}
                  {key === 'missed' && 'Пропуск важных сигналов и новостей'}
                  {key === 'time' && 'Время на фильтрацию информации (10+ часов в день)'}
                  {key === 'opportunities' && 'Упущенные возможности из-за задержки информации'}
                  {key === 'competitors' && 'Невозможность отслеживать конкурентов в реальном времени'}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 rounded-xl bg-primary/20">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Решения</h3>
            </motion.div>

            {solutionKeys.map((key, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-3 p-4 rounded-xl bg-card/50 border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  {key === 'automatic' && 'Автоматический мониторинг 100+ каналов одновременно'}
                  {key === 'instant' && 'Мгновенные уведомления о важных событиях'}
                  {key === 'savings' && 'Экономия 10-15 часов в неделю'}
                  {key === 'first' && 'Первым узнавай о возможностях'}
                  {key === 'analytics' && 'Real-time аналитика конкурентов'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

