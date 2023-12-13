import { defineStore } from 'pinia'
import { getModuleSettingsObj } from '@/store/helpers/GetModuleSettingsObj'
import { presentsList } from '@/data/SaintMycolaiData'

export const usePresentsStore = defineStore('presents', {
	...getModuleSettingsObj('presents', presentsList),
})