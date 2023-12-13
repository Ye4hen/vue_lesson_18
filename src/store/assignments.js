import { defineStore } from 'pinia'
import { useFriendsStore } from './friends';
import { usePresentsStore } from './presents';

export const useAssignmentsStore = defineStore('assignments', {
	state: () => ({
		assignmentsList: [],
	}),
	getters: {
		doubleCount: (state) => state.count * 2,
		getFilledAssignmentsList: (state) => {
			const friendsStore = useFriendsStore()
			const presentsStore = usePresentsStore()
			return state.assignmentsList.map((assignment) => {
				const friend = friendsStore.friends.find((item) => item.id == assignment.friendId)
				const present = presentsStore.presents.find((item) => item.id == assignment.presentId)

				return {
					id: assignment.id,
					friendName: friend ? friend.name : 'Friend not found',
					presentName: present ? present.name : 'Friend not found',
				};
			});
		},
	},
	actions: {
		addItem(item) {
			this.assignmentsList.push({
				id: new Date().getTime(),
				...item
			})
		},
	},
})