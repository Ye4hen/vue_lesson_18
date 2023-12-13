<template>
    <div class="friends">
        <div class="friends__container container">
            <h3 class="friends__title small-title">{{ $t('titles.friendsTitle') }}</h3>
            <ol class="friends__list list">
                <li v-for="(friend, index) in friends" :key="friend.id">
                    <div class="friends__item item">
                        <h6 class="friends__name item__name">{{ nameLang(friend) }}</h6>
                        <v-btn elevation="2" @click="deleteItem(index, friend.id)">{{
                            $t('buttonActions.buttonDelete')
                        }}</v-btn>
                    </div>
                </li>
            </ol>
            <div class="friend__add add">
                <div class="add-items">
                    <div class="add-item">
                        <label>
                            <v-text-field
                                v-model="newFriend.name.ua"
                                :label="$t('labelsInput.newFriendUA')"
                                :rules="rules"
                                hide-details="auto"
                                type="text"
                            ></v-text-field>
                        </label>
                    </div>
                    <div class="add-item">
                        <label>
                            <v-text-field
                                v-model="newFriend.name.en"
                                :label="$t('labelsInput.newFriendEN')"
                                :rules="rules"
                                hide-details="auto"
                                type="text"
                            ></v-text-field>
                        </label>
                    </div>
                </div>
                <v-btn elevation="8" @click="onAdd">{{ $t('buttonActions.buttonAdd') }}</v-btn>
                <div v-if="errorMessage" class="err-msg">{{ $t('errors.invalidAddError') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useFriendsStore } from '@/store/friends'
export default {
    name: 'FriendsView',

    data() {
        return {
            newFriend: {
                name: {
                    ua: '',
                    en: '',
                },
            },
            errorMessage: false,
        }
    },

    computed: {
        ...mapState(useFriendsStore, ['friends']),
        nameLang() {
            return (item) => (this.$i18n.locale === 'ua' ? item.name.ua : item.name.en)
        },
    },

    created() {
        this.setItemsList()
    },

    methods: {
        ...mapActions(useFriendsStore, ['setItemsList', 'deleteItem', 'addItem']),
        onAdd() {
            if (this.newFriend.name.ua && this.newFriend.name.en) {
                this.addItem(this.newFriend)
                this.newFriend.name = {
                    ua: '',
                    en: '',
                }
                this.errorMessage = false
            } else {
                this.errorMessage = true
            }
        },
    },
}
</script>
