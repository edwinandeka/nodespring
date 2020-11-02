/**
 * Service decorator
 * @author calbertts
 */

import ModuleContainer from '../core/ModuleContainer'
import nodeSpringUtil from '../core/nodeSpringUtil'
import path from 'path'


export function Service(serviceClass) {
  let basePackagePath = path.dirname(nodeSpringUtil.getStack().replace(ModuleContainer.appDir, '').replace('.js', ''))
  let packagePath = basePackagePath + '/' + serviceClass.name

  serviceClass.packagePath = serviceClass.packagePath || packagePath
  serviceClass.moduleType = 'service'

  ModuleContainer.addService(serviceClass)
}
