const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: "Michele",
                    avatar: "_1",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di stendere i panni",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    visible: true,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_3",
                    visible: true,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Alessandro B.",
                    avatar: "_4",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Alessandro L.",
                    avatar: "_5",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ricordati di chiamare la nonna",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Va bene, stasera la sento",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Claudia",
                    avatar: "_6",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao Claudia, hai novità?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Non ancora",
                            status: "received",
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "Nessuna nuova, buona nuova",
                            status: "sent",
                        },
                    ],
                },
                {
                    name: "Federico",
                    avatar: "_7",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Fai gli auguri a Martina che è il suo compleanno!",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Grazie per avermelo ricordato, le scrivo subito!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Davide",
                    avatar: "_8",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao, andiamo a mangiare la pizza stasera?",
                            status: "received",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "OK!!",
                            status: "received",
                        },
                    ],
                },
            ],
            chatOpened: 0,
            newMsg: "",
            currentChat: 0,
            answerMsg: "Ok!",
            search: "",
            show: false,
            hideNotifications: false,
            showChevron: false,
            finalDate: "",
            hideList: false,
            arrayReverse: [],
        };
    }, // end data

    methods: {
        newMessage(newMsg) {
            if (newMsg != "" && newMsg != " ") {
                let finalDate;
                let current = new Date();
                finalDate = current.toLocaleTimeString();
                this.currentChat = this.chatOpened;
                this.contacts[this.currentChat].messages.push({
                    date: finalDate,
                    message: newMsg,
                    status: "sent",
                });
                this.newMsg = "";
                setTimeout(this.answer, 1000);
            }
        },

        answer() {
            let current = new Date();
            this.finalDate = current.toLocaleTimeString();
            this.contacts[this.currentChat].messages.push({
                date: this.finalDate,
                message: this.answerMsg,
                status: "received",
            });
        },

        searchContact() {
            this.contacts.forEach((contact) => {
                if (!contact.name.toLowerCase().includes(this.search.toLowerCase())) {
                    contact.visible = false;
                } else {
                    contact.visible = true;
                }
            });
        },

        showDropDown() {
            this.show ? (this.show = false) : (this.show = true);
        },

        hideChevron_hideDropDown() {
            this.showChevron = false;
            this.show = false;
        },

        hideListToggle() {
            this.hideList ? (this.hideList = false) : (this.hideList = true);
        },

        chatOpened_hideList(i) {
            this.chatOpened = i;
            this.hideList = false;
        },

        deleteMsg(i) {
            if (this.contacts[this.chatOpened].messages.length !== 1) {
                this.contacts[this.chatOpened].messages.splice(i, 1);
            } else {
                const emptyArray = [];
                this.contacts[this.chatOpened].messages = emptyArray;
            }
            this.hideChevron_hideDropDown();
        },

        showLastMessage(contact) {
            if (contact.messages.length !== 0) {
                return contact.messages[contact.messages.length - 1].message;
            } else {
                return "";
            }
        },

        formatTime(i) {
            const date = this.contacts[this.chatOpened].messages[i].date;
            if (date.length > 10) {
                return date.slice(11, 16);
            } else {
                return date.slice(0, 5);
            }
        },

        showLastMessageDate(i) {
            if (this.contacts[i].messages.length !== 0) {
                const date = this.contacts[i].messages[this.contacts[i].messages.length - 1].date;
                if (date.length > 10) {
                    return date.slice(11, 16);
                } else {
                    return date.slice(0, 5);
                }
            } else {
                return "";
            }
        },

        lastAccessFunction() {
            this.arrayReverse = [];

            let messages = this.contacts[this.chatOpened].messages;

            for (message in messages) {
                this.arrayReverse.unshift(messages[message]);
            }

            for (i in this.arrayReverse) {
                if (this.arrayReverse[i].status === "received") {
                    let date = this.arrayReverse[i].date;
                    if (date.length > 10) {
                        let day = date.slice(0, 10);
                        let hour = date.slice(11, 16);
                        return `Ultimo accesso il ${day} alle ${hour}`;
                    } else {
                        let shortDate = date.slice(0, 5);
                        return `Ultimo accesso oggi alle ${shortDate}`;
                    }
                } else {
                    if (this.arrayReverse[i].status === "received") return "Sta Scrivendo...";
                }
            }
        },
    }, // methods

    mounted() {},
}).mount("#app");
