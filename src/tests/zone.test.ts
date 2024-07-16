import { Wrapper } from '../wrapper/index.js'
import type { URLComponentsType } from '../types/general_types.js'

describe('ZoneTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Add zone', async () => {
        const res = await api.zones.add({
            name: 'testZone',
            comment: 'New test zone',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Modify zone', async () => {
        const res = await api.zones.modify({
            name: 'testZone',
            property: 'comment',
            value: 'Modified comment',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Zone report', async () => {
        const res = await api.zones.report()
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove zone', async () => {
        const res = await api.zones.remove({
            name: 'testZone',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })
})
