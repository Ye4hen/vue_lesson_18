import { defineStore } from 'pinia'
import { getModuleSettingsObj } from '@/store/helpers/GetModuleSettingsObj'
import { friendsList } from '@/data/SaintMycolaiData'

export const useFriendsStore = defineStore('friends', {
	...getModuleSettingsObj('friends', friendsList),
})