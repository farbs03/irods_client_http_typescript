import { AxiosError, type AxiosInstance } from 'axios'
import { ZoneTypes } from "../../types/index.js"
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'

export class ZoneOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async add(
        params: ZoneTypes.ZoneAddParams
    ): Promise<null | ZoneTypes.ZoneAddResponse> {
        try {
            const res = await this.client.post(
                '/zones',
                toURLSearchParams({
                    op: 'add',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async remove(
        params: ZoneTypes.ZoneRemoveParams
    ): Promise<null | ZoneTypes.ZoneRemoveResponse> {
        try {
            const res = await this.client.post(
                '/zones',
                toURLSearchParams({
                    op: 'remove',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async modify(
        params: ZoneTypes.ZoneModifyParams
    ): Promise<null | ZoneTypes.ZoneModifyResponse> {
        try {
            const res = await this.client.post(
                '/zones',
                toURLSearchParams({
                    op: 'modify',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async report(): Promise<null | ZoneTypes.ZoneReportResponse> {
        try {
            const res = await this.client.get('/zones', {
                params: {
                    op: 'report',
                },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }
}
