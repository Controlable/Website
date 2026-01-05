/* eslint-disable prettier/prettier */
import {
  Brain,
  Cpu,
  Radio,
  Activity,
  Wifi,
  Server,
  Database,
  Zap
} from 'lucide-react'

function FloatingIcons() {
  // Using theme colors for the icons
  const iconClass = "float-icon text-primary opacity-20" 

  return (
    <>
      <Brain className={`${iconClass} float-icon-1`} size={80} strokeWidth={1.5} />
      <Cpu className={`${iconClass} float-icon-2`} size={80} strokeWidth={1.5} />
      <Radio className={`${iconClass} float-icon-3`} size={80} strokeWidth={1.5} />
      <Activity
        className={`${iconClass} float-icon-4`}
        size={80}
        strokeWidth={1.5}
      />
      <Wifi className={`${iconClass} float-icon-5`} size={80} strokeWidth={1.5} />
      <Server className={`${iconClass} float-icon-6`} size={80} strokeWidth={1.5} />
      <Database
        className={`${iconClass} float-icon-7`}
        size={80}
        strokeWidth={1.5}
      />
      <Zap className={`${iconClass} float-icon-8`} size={80} strokeWidth={1.5} />
    </>
  )
}

export default FloatingIcons
