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
  return (
    <>
      <Brain className="float-icon float-icon-1" size={80} strokeWidth={1.5} />
      <Cpu className="float-icon float-icon-2" size={80} strokeWidth={1.5} />
      <Radio className="float-icon float-icon-3" size={80} strokeWidth={1.5} />
      <Activity
        className="float-icon float-icon-4"
        size={80}
        strokeWidth={1.5}
      />
      <Wifi className="float-icon float-icon-5" size={80} strokeWidth={1.5} />
      <Server className="float-icon float-icon-6" size={80} strokeWidth={1.5} />
      <Database
        className="float-icon float-icon-7"
        size={80}
        strokeWidth={1.5}
      />
      <Zap className="float-icon float-icon-8" size={80} strokeWidth={1.5} />
    </>
  )
}

export default FloatingIcons
