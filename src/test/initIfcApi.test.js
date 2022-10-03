import { describe, expect, it } from 'vitest'
import ifcApi from '../config/initIfcApi'

describe('Initialize IfcAPI', () => {
  it('should be a class', () => {
    expect(ifcApi).toBeInstanceOf(Object)
  })

  it('should have a method called Init', () => {
    expect(ifcApi.Init).toBeInstanceOf(Function)
  })
})
