// import { createStore } from "vuex"; // Это для версии VueX@4, которая в Vue 3 используется
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        header: 'Минималистичные спальни',
        header_1: 'Ещё один header от Lmstr',
        text_1: 'Благодарим вас за проявленный интерес к нашей компании и добро пожаловать в нашу компанию.Чья-то жизнь, безусловно, является самым большим достоянием. Подводное плавание с аквалангом tellumassa, крупнейшая аккредитованная акробатическая программа vbel. Достоинство беременных женщин. Я не справился с математикой. Боль ненависти. Вы можете читать книгу очень удобным способом.',
        text_2: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...».'
        // начальное состояние 
    },
    mutations: {
        // методы для изменения состояния 
    },
    actions: {
        // методы для асинхронных операций 
    }
    ,
    getters: {
        // методы для чтения состояния 
        getHeader: (state) => state.header,
        getText_1: (state) => state.text_1,
        getText_2: (state) => state.text_2,
        getHeader_1: (state) => state.header,
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища 
    }
});