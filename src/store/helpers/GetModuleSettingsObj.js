import { useAssignmentsStore } from "@/store/assignments";

function getModuleSettingsObj(collectionTitle, itemsList) {
	return {
		state: () => ({
			[collectionTitle]: [],
			[itemsList]: [],
		}),
		getters: {
			getItemById: (state) => (itemId) => state[collectionTitle].find((item) => item.id == itemId),
		},
		actions: {
			setItemsList() {
				this[collectionTitle] = itemsList
				console.log(itemsList);
			},
			addItem(item) {
				this[collectionTitle].push({
					id: new Date().getTime(),
					...item
				})
			},
			deleteItem(deleteItemIndex, deleteItemId) {
				this[collectionTitle].splice(deleteItemIndex, 1)
				const assignmentsStore = useAssignmentsStore()
				if (collectionTitle === 'friends') {
					assignmentsStore.assignmentsList = assignmentsStore.assignmentsList.filter((assignment) => assignment.friendId !== deleteItemId)
					console.log(collectionTitle);
					console.log(deleteItemId);
					console.log(assignmentsStore.assignmentsList);
				} else if (collectionTitle === 'presents') {
					assignmentsStore.assignmentsList = assignmentsStore.assignmentsList.filter((assignment) => assignment.presentId !== deleteItemId)
				}
			},
		},
	}
}

export { getModuleSettingsObj }