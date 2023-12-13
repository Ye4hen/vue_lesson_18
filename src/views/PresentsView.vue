<template>
    <div class="presents">
        <div class="presents__container container">
            <h3 class="presents__title small-title">{{ $t('titles.presentsTitle') }}</h3>
            <ol class="presents__list list">
                <li v-for="(present, index) in presents" :key="present.id">
                    <div class="presents__item item">
                        <h6 class="presents__name item__name">{{ nameLang(present) }}</h6>
                        <v-btn elevation="2" @click="deleteItem(index, present.id)">{{
                            $t('buttonActions.buttonDelete')
                        }}</v-btn>
                    </div>
                </li>
            </ol>
            <div class="present__add add">
                <div class="add-items">
                    <div class="add-item">
                        <label>
                            <v-text-field
                                v-model="newPresent.name.ua"
                                :label="$t('labelsInput.newPresentUA')"
                                :rules="rules"
                                hide-details="auto"
                                type="text"
                            ></v-text-field>
                        </label>
                    </div>
                    <div class="add-item">
                        <label>
                            <v-text-field
                                v-model="newPresent.name.en"
                                :label="$t('labelsInput.newPresentEN')"
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
import { usePresentsStore } from '@/store/presents'
export default {
    name: 'PresentsView',

    data() {
        return {
            newPresent: {
                name: {
                    ua: '',
                    en: '',
                },
            },
            errorMessage: false,
        }
    },

    computed: {
        ...mapState(usePresentsStore, ['presents']),
        nameLang() {
            return (item) => (this.$i18n.locale === 'ua' ? item.name.ua : item.name.en)
        },
    },

    created() {
        this.setItemsList()
    },

    methods: {
        ...mapActions(usePresentsStore, ['setItemsList', 'deleteItem', 'addItem']),
        onAdd() {
            if (this.newPresent.name.ua && this.newPresent.name.en) {
                this.addItem(this.newPresent)
                this.newPresent.name = {
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
