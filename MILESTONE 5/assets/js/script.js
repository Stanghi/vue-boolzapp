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
                            message:
                                "Mi piacerebbe ma devo andare a fare la spesa.",
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
                            message:
                                "Fai gli auguri a Martina che è il suo compleanno!",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message:
                                "Grazie per avermelo ricordato, le scrivo subito!",
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
                            message:
                                "Ciao, andiamo a mangiare la pizza stasera?",
                            status: "received",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message:
                                "No, l'ho già mangiata ieri, ordiniamo sushi!",
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
            showContacts: [],
            search: "",
            show: false,
            hideNotifications: false,
            showChevron: false
        };
    }, // end data

    methods: {
        newDate(i) {
            let date = this.contacts[this.chatOpened].messages[i].date;
            let modifiedDate;
            if (date.length > 10) {
                modifiedDate = date.slice(10, 16);
            } else {
                modifiedDate = date.slice(0, 5);
            }
            return modifiedDate;
        },

        changeTime(date) {
            if (date.length > 10) {
                modifiedDate = date.slice(10, 16);
            } else {
                modifiedDate = date.slice(0, 5);
            }
            return modifiedDate;
        },

        changeChat(i) {
            this.contacts[this.chatOpened].visible = true;
            this.chatOpened = i;
            this.contacts[i].visible = false;
        },

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
            let finalDate;
            let current = new Date();
            finalDate = current.toLocaleTimeString();
            this.contacts[this.currentChat].messages.push({
                date: finalDate,
                message: this.answerMsg,
                status: "received",
            });
        },

        searchContact(search) {
            this.showContacts = this.contacts.filter((elm) =>
                elm.name
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
            );
        },

        changeFilteredChat(i) {
            this.contacts[this.chatOpened].visible = true;
            this.showContacts[this.chatOpened].visible = true;
            this.chatOpened = i;
            this.showContacts[i].visible = false;
        },

        showDropDown() {
            this.show ? (this.show = false) : (this.show = true);
        },

        hideChevron_hideDropDown(){
            this.showChevron = false;
            this.show = false;
        },

        deleteMsg(i) {
            if (this.contacts[this.chatOpened].messages.length !== 1) {
                this.contacts[this.chatOpened].messages.splice(i, 1);
            }
            this.hideChevron_hideDropDown();
        },

        lastAccess() {
            let x = this.contacts[this.chatOpened].messages.length;
            let date = this.contacts[this.chatOpened].messages[x - 1].date;

            let modifiedDate;

            if (date.length > 10) {
                modifiedDate = date.slice(0, 16);
                return `Ultimo accesso: ${modifiedDate}`;
            } else {
                if (
                    this.contacts[this.chatOpened].messages[x - 1].status ===
                    "received"
                ) {
                    modifiedDate = date.slice(0, 5);
                    return `Ultimo accesso oggi alle ${modifiedDate}`;
                } else return `Online`;
            }
        },
    }, // methods

    mounted() {
        this.contacts[this.chatOpened].visible = false;
    }, // end mounted
}).mount("#app");
