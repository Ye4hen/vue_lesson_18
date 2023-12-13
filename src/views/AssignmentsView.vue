<template>
    <div class="assignments">
        <div class="assignments__container">
            <h3 class="assignments__title small-title">{{ $t('titles.distributionTitle') }}</h3>
            <ol class="assignments__list list">
                <li v-for="assignment in getFilledAssignmentsList" :key="assignment.id">
                    <div class="assignments__item item">
                        <h6 class="assignments__name item__name">{{ nameAssignmentLang(assignment.friendName) }}</h6>
                        <h6 class="assignments__name item__name">{{ nameAssignmentLang(assignment.presentName) }}</h6>
                    </div>
                </li>
            </ol>
            <div class="assignments__selects">
                <div class="assignments__select">
                    <h5 class="item__name">{{ $t('labelsInput.friend') }}</h5>
                    <select v-model="assignment.friendId">
                        <option v-for="friend in friends" :key="friend.id" :value="friend.id">
                            {{ nameLang(friend) }}
                        </option>
                    </select>
                </div>
                <div class="assignments__select">
                    <h5 class="item__name">{{ $t('labelsInput.present') }}</h5>
                    <select v-model="assignment.presentId">
                        <option v-for="present in presents" :key="present.id" :value="present.id">
                            {{ nameLang(present) }}
                        </option>
                    </select>
                </div>
            </div>
            <v-btn elevation="8" @click="onAdd">{{ $t('buttonActions.buttonAdd') }}</v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useAssignmentsStore } from '@/store/assignments'
import { useFriendsStore } from '@/store/friends'
import { usePresentsStore } from '@/store/presents'

export default {
    name: 'AssignmentsView',

    data() {
        return {
            assignment: {},
        }
    },

    computed: {
        ...mapState(useAssignmentsStore, ['assignmentsList', 'getFilledAssignmentsList']),
        ...mapState(useFriendsStore, ['friends']),
        ...mapState(usePresentsStore, ['presents']),
        nameAssignmentLang() {
            return (item) => (this.$i18n.locale === 'ua' ? item.ua : item.en)
        },
        nameLang() {
            return (item) => (this.$i18n.locale === 'ua' ? item.name.ua : item.name.en)
        },
    },

    created() {
        // this.getSelectedList()
        this.setFriendsList()
        this.setPresentsList()
    },

    methods: {
        ...mapActions(useAssignmentsStore, ['getSelectedList', 'addItem']),
        ...mapActions(useFriendsStore, { setFriendsList: 'setItemsList' }),
        ...mapActions(usePresentsStore, { setPresentsList: 'setItemsList' }),
        onAdd() {
            this.addItem(this.assignment)
            this.assignment = {}
        },
    },
}
</script>

<style lang="scss" scoped>
</style>