
class Chatbot{
    constructor(){
        this.args = {
            openButton: document.querySelector('chatbot__button'),
            chatBox: document.querySelector(chatbot__support),
            sendButton: document.querySelector('send__button')
        }

        this.state = false;
        this.messages = [];

    }
}