import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import OtherHeaders from '@/components/headers/OtherHeaders.vue'
import { securityKeys } from '@/types'

import { header } from '../../fixtures'

describe('OtherHeaders.vue', () => {
  describe('#otherHeaders', () => {
    it('returns other headers', () => {
      const wrapper = shallowMount(OtherHeaders, {
        propsData: { header }
      })

      const headers = (wrapper.vm as any).otherHeaders
      expect(headers.length).toBeGreaterThan(0)
      const keys = headers.map((securityHeader) => securityHeader.key) as string[]

      // check security headers
      keys.forEach((key) => expect(securityKeys).not.toContain(key))
      // check x-headers
      keys.forEach((key) => expect(key).not.toMatch(/^x-/))
    })
  })
})
